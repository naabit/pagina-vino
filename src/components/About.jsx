import elena from '../assets/elena.jpg'
import { ShieldIcon } from './Icons.jsx'

export default function About() {
  return (
    <section className="section">
      <div id="sobre-mi" className="container about-grid">
        <div className="about__portrait-composition">
  <span className="about__shape about__shape--one" aria-hidden="true"></span>
  <span className="about__shape about__shape--two" aria-hidden="true"></span>
  <span className="about__shape about__shape--three" aria-hidden="true"></span>

  <span className="about__dot about__dot--one" aria-hidden="true"></span>
  <span className="about__dot about__dot--two" aria-hidden="true"></span>
  <span className="about__dot about__dot--three" aria-hidden="true"></span>

  <div className="about__portrait-frame">
    <img src={elena} alt="R. Elena Fryderup" />
  </div>
</div>
        <div data-reveal style={{ '--delay': '120ms' }}>
          <p className="eyebrow">Sobre mí</p><h2>R. Elena Fryderup</h2>
          <p className="about__role">Licenciada en Ciencias Jurídicas</p>
          <p>Mi propósito es entregar orientación jurídica clara, ordenada y cercana, para que puedas comprender tus alternativas y tomar decisiones informadas.</p>
          <aside className="scope-note"><ShieldIcon /> <span>No todos los conflictos necesitan llegar a juicio. Mi labor es orientarte, proteger tus intereses y preparar tu caso desde el primer momento. Si la vía judicial es necesaria, te ayudo a dar ese paso con el respaldo de un abogado especialista.</span></aside>
        </div>
      </div>
    </section>
  )
}
