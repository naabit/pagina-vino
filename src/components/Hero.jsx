
import heroImage from '../assets/hero-biblioteca-legal.png'
import { CalendarIcon, ShieldIcon, WhatsAppIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <main
      id="inicio"
      className="hero"
      style={{ '--hero-bg': `url(${heroImage})` }}
    >
      <div className="container hero__grid">
        <div className="hero__content hero-intro">
          <p className="eyebrow">Orientación preventiva y extrajudicial</p>
          <h1>Gestión jurídica clara y cercana</h1>
          <p className="hero__lead">
            Documentos, trámites y orientación extrajudicial para personas y familias.
            Atención online en todo Chile y presencial en Pucón con coordinación previa.
          </p>
          <div className="hero__actions">
           <a
  href="#contacto"
  className="button"
  onClick={(event) => {
    if (window.innerWidth <= 700) {
      event.preventDefault()

      document.getElementById('contact-name')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }}
>
  <CalendarIcon />
  Agendar reunión
</a>
            <a className="button button--outline" href="https://wa.me/56955162685" target="_blank" rel="noreferrer"><WhatsAppIcon />WhatsApp</a>
          </div>
          <p className="trust-line"><ShieldIcon />Licenciada en Ciencias Jurídicas · Atención online y presencial</p>
        </div>
      </div>
    </main>
  )
}
