import nodemailer from "nodemailer";
import type { InsertContact } from "@shared/schema";

const requiredVariables = [
  "SMTP_HOST",
  "SMTP_USER",
  "SMTP_PASSWORD",
  "CONTACT_TO",
] as const;

export async function sendContactEmail(contact: InsertContact) {
  for (const variable of requiredVariables) {
    if (!process.env[variable]) {
      throw new Error(`Missing environment variable: ${variable}`);
    }
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO,
    replyTo: contact.email,
    subject: `Portfolio inquiry: ${contact.subject}`,
    text: [
      `Name: ${contact.name}`,
      `Email: ${contact.email}`,
      `Subject: ${contact.subject}`,
      "",
      contact.message,
    ].join("\n"),
  });
}