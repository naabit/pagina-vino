import { FamilyIcon, FileTextIcon, FolderIcon, UserCheckIcon } from './Icons.jsx'

const services = [
  {
    Icon: FileTextIcon,
    title: 'Redacción y revisión de contratos',
    text: 'Redacción y revisión de contratos, acuerdos y otros documentos legales con foco preventivo y lenguaje claro.',
  },
  {
    Icon: FamilyIcon,
    title: 'Orientación en pensión de alimentos',
    text: 'Asesoría y preparación de antecedentes para ordenar tu situación y entender los pasos a seguir en materia de alimentos.',
  },
  {
    Icon: FolderIcon,
    title: 'Trámites extrajudiciales y posesiones efectivas',
    text: 'Gestiones extrajudiciales, posesiones efectivas intestadas y apoyo en trámites ante organismos públicos.',
  },
  {
    Icon: UserCheckIcon,
    title: 'Preparación para juicio',
    text: 'Si tu caso requiere llegar a juicio, te acompaño en la preparación de los antecedentes y coordino el trabajo con un abogado especialista de confianza para asegurar la continuidad de tu caso.',
  },
]

export default function Services() {
  return (
    <section className="section section--tinted section--services">
      <div id="servicios" className="container">
        <div data-reveal>
          <p className="eyebrow eyebrow--center">Servicios</p>
          <h2 className="section-title">
            Servicios de asesoría jurídica preventiva en Pucón y online
          </h2>
        </div>
        <div className="service-grid">
          {services.map(({ Icon, title, text }, index) => (
            <article
              className="service-card"
              key={title}
              data-reveal
              style={{ '--delay': `${index * 90}ms` }}
            >
              <span className="service-card__icon">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
