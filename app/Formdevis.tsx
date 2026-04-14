"use client"

import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { FormEvent, useState, ReactNode } from "react";



type boutonprops = {
    className?: string,
    children?: ReactNode
}

export function Bouton({className, children}: boutonprops) {
    return (
        <>
      
        <div className={` flex flex-row gap-[10px] items-center text-[24px] px-5 py-[16px] bg-accent rounded-[8px] ${className}`}>
            {children}
            </div>
        
        </>
    )
}





export function ContactForm() {

  const pathname = usePathname();

 

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const classnamecase =
    "flex flex-col lg:flex-row gap-[10px] border border-white w-full px-6 py-[15px] text-[20px] font-semibold justify-center items-center rounded-[12px]  pl-14";

 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const form = e.currentTarget;

  const formData = new FormData(form);
  const data = {
    nom: formData.get("nom"),
    email: formData.get("email"),
    telephone: formData.get("telephone"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || `Erreur serveur (${res.status})`);
    }

    setSuccess(true);
    form.reset();
  } catch (err) {
    console.error(err);
    alert(`Erreur lors de l'envoi : ${err instanceof Error ? err.message : "réessayez plus tard"}`);
  } finally {
    setLoading(false);
  }
};


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-xl mx-auto p-8 rounded-xl">

      {/* NOM */}
      <div className="relative w-full">
        <Icon icon="material-symbols:person" width={24} className="absolute left-5 top-1/2 -translate-y-1/2 text-white" />
        <input type="text" name="nom" placeholder="Nom" required className={classnamecase} />
      </div>

      {/* EMAIL */}
      <div className="relative w-full">
        <Icon icon="material-symbols:mail" width={24} className="absolute left-5 top-1/2 -translate-y-1/2 text-white" />
        <input type="email" name="email" placeholder="Email" required className={classnamecase} />
      </div>

      {/* TELEPHONE */}
      <div className="relative w-full">
        <Icon icon="material-symbols:call" width={24} className="absolute left-5 top-1/2 -translate-y-1/2 text-white" />
        <input type="tel" name="telephone" placeholder="Téléphone" required className={classnamecase} />
      </div>

      {/* MESSAGE */}
      <div className="relative w-full">
        <Icon icon="material-symbols:chat" width={24} className="absolute left-5 top-6 text-white" />
        <textarea name="message" placeholder="Décrivez votre besoin" className={`${classnamecase} h-[231px]`} />
      </div>

      <Bouton className="justify-center">
        <button type="submit" disabled={loading}>
          {loading ? "Envoi..." : "Demander un devis"}
        </button>
      </Bouton>

      {success && <p className="text-green-500 mt-2 text-center font-semibold text-[24px]">Demande envoyé avec succès !</p>}
    </form>
  );
}
 