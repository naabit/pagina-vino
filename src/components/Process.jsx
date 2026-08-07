import { ClipboardIcon, MessageIcon, VideoIcon } from './Icons.jsx'

const steps = [
  {
    Icon: MessageIcon,
    title: 'Cuéntame tu situación',
    text: 'Escríbeme por WhatsApp, formulario o correo y explica brevemente qué necesitas.',
  },
  {
    Icon: ClipboardIcon,
    title: 'Evaluación inicial',
    text: 'Reviso la información para definir el alcance, ordenar antecedentes y proponer los siguientes pasos.',
  },
  {
    Icon: VideoIcon,
    title: 'Asesoría coordinada',
    text: 'Nos reunimos online o presencialmente en Pucón, siempre con cita previa.',
  },
]

export default function Process() {
  return (
    <section className="section section--tinted section--process">
      <div id="proceso" className="container">
        <div data-reveal>
          <p className="eyebrow eyebrow--center">Proceso</p>
          <h2 className="section-title">Cómo funciona la primera evaluación</h2>
        </div>
        <div className="process-grid">
          {steps.map(({ Icon, title, text }, index) => (
            <article
              className="process-card"
              key={title}
              data-reveal
              style={{ '--delay': `${index * 110}ms` }}
            >
              <div className="process-card__top">
                <span>{index + 1}</span>
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
