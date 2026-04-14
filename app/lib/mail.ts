import nodemailer from "nodemailer";

export function getMailTransporter() {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
}

export const MAIL_CONFIG = {
  from: process.env.SMTP_FROM || process.env.SMTP_USER || "noreply@webprestige.fr",
  adminEmail: process.env.ADMIN_EMAIL || "contact@webprestige.fr",
};
