import { getMailTransporter, MAIL_CONFIG } from "@/app/lib/mail";

export async function POST(req: Request) {
  try {
    const { nom, email, telephone, message, page } = await req.json();

    const transporter = getMailTransporter();

    // Vérifie la connexion SMTP avant d'envoyer
    await transporter.verify();

    // Email au propriétaire du site
    const adminInfo = await transporter.sendMail({
      from: MAIL_CONFIG.from,
      to: MAIL_CONFIG.adminEmail,
      subject: "Nouvelle demande de devis",
      html: `
        <h1>Nouvelle demande de devis</h1>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Message :</strong> ${message}</p>
      `,
    });
    console.log("Admin email messageId:", adminInfo.messageId, "response:", adminInfo.response);

    // Email de confirmation à l'utilisateur
    await transporter.sendMail({
      from: MAIL_CONFIG.from,
      to: email,
      subject: "Confirmation de votre demande de devis",
      html: `
        <h1>Merci pour votre demande !</h1>
        <p>Bonjour ${nom},</p>
        <p>Nous avons bien reçu votre demande de devis. Notre équipe vous recontactera dans les plus brefs délais.</p>
        <p><strong>Récapitulatif :</strong></p>
        <ul>
          <li>Nom : ${nom}</li>
          <li>Téléphone : ${telephone}</li>
          <li>Message : ${message}</li>
        </ul>
        <p>Cordialement,<br/>L'équipe WebPrestige</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Erreur envoi email:", message);
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500 }
    );
  }
}