"use client";

import { createWhatsAppUrl } from "@/lib/whatsapp.mjs";

export function WhatsAppButton() {
  return (
    <>
      <button type="button" className="button button-dark whatsapp-button" onClick={() => window.location.assign(createWhatsAppUrl())}>
        Conversemos por WhatsApp <span aria-hidden="true">↗</span>
      </button>
      <p className="contact-handle">Se abrirá WhatsApp con un mensaje que puedes editar antes de enviar.</p>
      <noscript><p className="contact-handle">Activa JavaScript para abrir WhatsApp o <a href="https://twitter.com/aatronco">escríbeme en X</a>.</p></noscript>
    </>
  );
}
