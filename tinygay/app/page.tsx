const services = [
  { number: "01", title: "Diseño que conecta.", text: "Una identidad clara y una experiencia visual que hacen que tu marca se sienta como tú.", tags: "Identidad · Diseño web · Experiencia de usuario" },
  { number: "02", title: "Ideas que funcionan.", text: "Sitios rápidos, adaptables y fáciles de usar. De la primera visita al siguiente paso, cada detalle cuenta.", tags: "Desarrollo web · Landing pages · Responsive" },
  { number: "03", title: "Espacio para crecer.", text: "Una base digital que puede evolucionar contigo. Empezamos por lo esencial y construimos desde ahí.", tags: "Estrategia · Optimización · Acompañamiento" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Ir al contenido</a>
      <header className="header wrap">
        <a className="brand" href="#inicio" aria-label="Órbita, inicio"><span className="brand-symbol" aria-hidden="true">✳</span> órbita.</a>
        <nav aria-label="Navegación principal"><a href="#servicios">Qué hacemos</a><a href="#proceso">Cómo trabajamos</a></nav>
        <a className="nav-cta" href="#contacto">Hablemos <span aria-hidden="true">↗</span></a>
      </header>
      <main id="contenido">
        <section className="hero wrap" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> ESTUDIO DIGITAL INDEPENDIENTE</p>
            <h1>Tu próxima<br />gran idea.<br /><span>En órbita.</span></h1>
            <p className="hero-description">Transformamos ideas en experiencias digitales.<br /> Diseño con intención. Tecnología con propósito.</p>
            <a className="button" href="#contacto">Demos el primer paso <span aria-hidden="true">↗</span></a>
            <div className="hero-note"><span aria-hidden="true">✧</span> De la idea a tu propio espacio digital.</div>
          </div>
          <div className="orbit-art" role="img" aria-label="Esfera verde rodeada de órbitas, símbolo de ideas en movimiento">
            <div className="art-grid" /><span className="art-coordinate">EXPLORA LO POSIBLE — 001</span>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
            <div className="planet"><span>o.</span></div><div className="satellite satellite-one" /><div className="satellite satellite-two" />
            <span className="art-label"><span className="status-dot" /> IDEAS EN MOVIMIENTO</span><span className="art-plus" aria-hidden="true">+</span>
          </div>
        </section>
        <div className="ticker"><div className="wrap ticker-inner"><span>ESTRATEGIA</span><i aria-hidden="true">✳</i><span>DISEÑO</span><i aria-hidden="true">✳</i><span>DESARROLLO</span><i aria-hidden="true">✳</i><span>UNA NUEVA PERSPECTIVA</span><i aria-hidden="true">✳</i></div></div>
        <section className="wrap section" id="servicios">
          <div className="section-heading"><p className="eyebrow">LO QUE HACEMOS</p><h2>Buenas ideas.<br /><span>Mejores experiencias.</span></h2><p>Tu proyecto tiene su propia historia.<br />Le damos el espacio que merece.</p></div>
          <div className="service-grid">{services.map((service) => <article className="service" key={service.number}><div className="service-top"><span>{service.number}</span><span aria-hidden="true">↗</span></div><h3>{service.title}</h3><p>{service.text}</p><div className="service-tags">{service.tags}</div></article>)}</div>
        </section>
        <section className="process-section" id="proceso"><div className="wrap section process-layout"><div><p className="eyebrow">SIN VUELTAS INNECESARIAS</p><h2>Un gran resultado<br />empieza con una<br /><span>buena conversación.</span></h2><p className="process-intro">Cercanía, claridad y atención al detalle.<br />Así nos gusta trabajar.</p></div><ol className="steps"><li><span>01</span><div><h3>Escuchamos tu idea</h3><p>Entendemos qué quieres construir, para quién y qué hace diferente a tu proyecto.</p></div></li><li><span>02</span><div><h3>Le damos forma</h3><p>Definimos una dirección y diseñamos una experiencia que conecta con tu objetivo.</p></div></li><li><span>03</span><div><h3>La ponemos en movimiento</h3><p>Desarrollamos, revisamos los detalles y preparamos todo para salir al mundo.</p></div></li></ol></div></section>
        <section className="contact wrap section" id="contacto"><p className="eyebrow"><span className="status-dot" /> EL SIGUIENTE PASO ES TUYO</p><h2>Las grandes cosas<br />empiezan con un <em>hola.</em></h2><p>Cuéntanos qué tienes en mente. Exploremos lo que podemos crear.</p><a className="button" href="https://github.com/LuisMI2005-sudo/PracticaFirebase/issues/new" target="_blank" rel="noopener noreferrer">Cuéntanos tu idea <span aria-hidden="true">↗</span></a><small>Abre una conversación en GitHub. Necesitarás iniciar sesión.</small></section>
      </main>
      <footer className="footer wrap"><a className="brand" href="#inicio"><span className="brand-symbol" aria-hidden="true">✳</span> órbita.</a><p>Ideas con los pies en la tierra. Y la mirada arriba.</p><a href="#inicio">Volver arriba ↑</a></footer>
    </>
  );
}
