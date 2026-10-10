import { getMailTransporter, MAIL_CONFIG } from "@/app/lib/mail";

// Échappe les champs saisis par le visiteur avant de les insérer dans le HTML des emails
function escapeHtml(value: unknown) {
  return String(value ?? "")
    .trim()
    .replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

const FIELDS: [key: string, label: string][] = [
  ["nom", "Nom"],
  ["entreprise", "Entreprise / activité"],
  ["ville", "Ville"],
  ["email", "Email"],
  ["telephone", "Téléphone"],
  ["site", "Site actuel"],
  ["ficheGoogle", "Fiche Google"],
  ["message", "Objectif / question"],
  ["page", "Page d'origine"],
];

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return Response.json({ error: "Requête invalide" }, { status: 400 });
  }

  // Champ piège rempli : robot, on répond OK sans rien envoyer
  if (body.site_web_confirmation) {
    return Response.json({ success: true });
  }

  const email = String(body.email ?? "").trim();
  if (!body.nom || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Nom et email valides requis" }, { status: 400 });
  }

  const rows = FIELDS.filter(([key]) => String(body[key] ?? "").trim())
    .map(([key, label]) => `<p><strong>${label} :</strong> ${escapeHtml(body[key]).replace(/\n/g, "<br/>")}</p>`)
    .join("");
  const nom = escapeHtml(body.nom);
  const sujet = String(body.entreprise || body.nom).replace(/[\r\n]+/g, " ").slice(0, 80);

  try {
    const transporter = getMailTransporter();

    await transporter.sendMail({
      from: MAIL_CONFIG.from,
      to: MAIL_CONFIG.adminEmail,
      replyTo: email,
      subject: `Demande d'analyse gratuite : ${sujet}`,
      html: `<h1>Nouvelle demande d'analyse gratuite</h1>${rows}`,
    });

    // Confirmation au visiteur : volontairement sans reprendre son message
    await transporter.sendMail({
      from: MAIL_CONFIG.from,
      to: email,
      subject: "Votre demande d'analyse gratuite est bien reçue",
      html: `
        <p>Bonjour ${nom},</p>
        <p>Merci pour votre demande. Je commence l'analyse de votre présence en ligne (recherches Google, fiche Google, avis, site actuel) et je vous recontacte sous 24 h pour convenir d'un échange par téléphone ou en visio.</p>
        <p>L'analyse est gratuite et sans engagement.</p>
        <p>À très vite,<br/>WebPrestige<br/>07 83 58 57 92</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Erreur envoi email:", err instanceof Error ? err.message : err);
    return Response.json({ error: "L'envoi a échoué" }, { status: 500 });
  }
}
