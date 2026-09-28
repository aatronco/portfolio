const features = [
  { title: "Pacientes y evaluaciones", text: "Organiza fichas de pacientes y registra peso, talla, pliegues, perímetros, diámetros y longitudes en cada evaluación." },
  { title: "Cálculos durante la consulta", text: "Calcula IMC, composición corporal en cinco masas con el modelo de Kerr y somatotipo Heath-Carter a partir de las mediciones ingresadas." },
  { title: "Seguimiento entre consultas", text: "Compara mediciones y resultados entre evaluaciones. Revisa la evolución del peso y de los porcentajes de masa adiposa y muscular en gráficos." },
  { title: "Informes para tus pacientes", text: "Prepara informes imprimibles con resultados, comparativas y visualizaciones de las mediciones para apoyar tu explicación en consulta." },
];

export function Nutrition() {
  return (
    <section id="nutricion" className="nutrition-section" aria-labelledby="nutrition-title">
      <div className="wrap">
        <div className="nutrition-heading">
          <div className="section-heading">
            <p className="eyebrow">04 / Software para nutricionistas</p>
            <h2 id="nutrition-title">Tus evaluaciones,<br /><span>con una visión más clara.</span></h2>
            <p>Con NutriCal puedes registrar mediciones, consultar cálculos y seguir la evolución de cada paciente. Una base para tu consulta y para desarrollar las herramientas que tu equipo necesita.</p>
          </div>
          <div className="nutrical-wordmark"><span aria-hidden="true">◎</span><strong>NutriCal</strong><small>Evaluación antropométrica y seguimiento</small></div>
        </div>
        <div className="nutrition-features">{features.map((feature, index) => (
          <article key={feature.title}><span className="nutrition-number">0{index + 1}</span><h3>{feature.title}</h3><p>{feature.text}</p></article>
        ))}</div>
        <div className="nutrition-source"><p>NutriCal conecta el registro de pacientes y consultas con Google Sheets.</p><a className="text-link" href="#contact">Conversemos sobre NutriCal ↗</a></div>
        <div className="nutrition-plans-heading"><h3>Una modalidad para tu forma de trabajar.</h3><p>Revisamos tu volumen de pacientes y las necesidades de tu consulta o equipo para preparar una propuesta.</p></div>
        <div className="nutrition-plans">
          <article className="nutrition-plan"><p className="eyebrow">Consulta profesional</p><h3>Por paciente</h3><p>Una modalidad de cobro según los pacientes incluidos en el servicio, pensada para profesionales independientes.</p><ul><li>Registro, evaluaciones y seguimiento con NutriCal.</li><li>Definición de qué paciente se contabiliza y durante qué período.</li><li>Tarifa y acompañamiento acordados en la propuesta.</li></ul><a className="text-link" href="#contact">Consultar modalidad por paciente ↗</a></article>
          <article className="nutrition-plan enterprise-plan"><p className="eyebrow">Equipos y organizaciones</p><h3>Enterprise · tarifa fija</h3><p>Un precio fijo para un alcance y un período acordados, según la forma de trabajar de tu organización.</p><ul><li>Volumen de pacientes y profesionales definido contigo.</li><li>Evaluación de adaptaciones e integraciones necesarias.</li><li>Implementación y soporte detallados en la propuesta.</li></ul><a className="text-link" href="#contact">Conversemos sobre Enterprise ↗</a></article>
        </div>
        <div className="nutrition-custom"><div><h3>¿Tu consulta necesita una herramienta propia?</h3><p>También desarrollo proyectos de software para nutricionistas. Podemos evaluar tus procesos, diseñar reportes e integrar herramientas según lo que tu práctica necesita.</p></div><a className="text-link" href="#contact">Hablemos de tu proyecto ↗</a></div>
      </div>
    </section>
  );
}
