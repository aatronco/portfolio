import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="wrap contact-layout">
        <div><p className="eyebrow">05 / Empecemos por tu proyecto</p><h2>¿Qué te gustaría<br />hacer mejor?</h2><p>Cuéntame qué necesitas: migrar tu tienda a Jumpseller, incorporar NutriCal a tu consulta o desarrollar una herramienta para tu equipo. Ese es nuestro punto de partida.</p><WhatsAppButton /></div>
        <div className="conversation-note"><p className="note-label">PARA NUESTRA PRIMERA CONVERSACIÓN</p><ol><li><span>01</span> Tu tienda, consulta u organización.</li><li><span>02</span> Lo que necesitas mejorar.</li><li><span>03</span> Las herramientas que usas hoy.</li></ol><p>Con eso podemos empezar a definir una solución para tu proyecto.</p></div>
      </div>
    </section>
  );
}
