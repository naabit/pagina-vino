import elena from '../assets/elena.jpg'
import { ShieldIcon } from './Icons.jsx'

export default function About() {
  return (
    <section className="section">
      <div id="sobre-mi" className="container about-grid">
        <div className="about__portrait-composition">
          <span className="about__shape about__shape--one" aria-hidden="true" />
          <span className="about__shape about__shape--two" aria-hidden="true" />
          <span className="about__shape about__shape--three" aria-hidden="true" />

          <span className="about__dot about__dot--one" aria-hidden="true" />
          <span className="about__dot about__dot--two" aria-hidden="true" />
          <span className="about__dot about__dot--three" aria-hidden="true" />

          <div className="about__portrait-frame">
            <img src={elena} alt="Elena Fryderup, licenciada en Ciencias Jurídicas" />
          </div>
        </div>
        <div data-reveal style={{ '--delay': '120ms' }}>
          <p className="eyebrow">Sobre mí</p>
          <h2>Elena Fryderup</h2>
          <p className="about__role">Licenciada en Ciencias Jurídicas</p>
          <p>
            Entrego orientación jurídica clara, ordenada y cercana para que
            personas y familias puedan comprender su situación, preparar
            antecedentes y tomar decisiones informadas antes de avanzar hacia un
            conflicto mayor.
          </p>
          <aside className="scope-note">
            <ShieldIcon />
            <span>
              No todos los conflictos necesitan llegar a juicio. Mi labor se
              centra en la asesoría preventiva, la gestión extrajudicial y la
              preparación de documentos. Si la vía judicial es necesaria,
              coordino el caso con un abogado especialista.
            </span>
          </aside>
        </div>
      </div>
    </section>
  )
}
