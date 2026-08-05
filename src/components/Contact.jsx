import { useState } from 'react'
import { GlobeIcon, MailIcon, MapPinIcon, PhoneIcon } from './Icons.jsx'

const details = [
  {
    Icon: MapPinIcon,
    label: 'Ubicación',
    value: 'Pucón, Región de La Araucanía',
  },
  {
    Icon: GlobeIcon,
    label: 'Modalidad',
    value: 'Online para todo Chile',
  },
  {
    Icon: MailIcon,
    label: 'Correo',
    value: (
      <a href="mailto:elenafryderup@gmail.com">
        elenafryderup@<wbr />gmail.com
      </a>
    ),
  },
  {
    Icon: PhoneIcon,
    label: 'WhatsApp',
    value: (
      <a
        href="https://wa.me/56955162685"
        target="_blank"
        rel="noreferrer"
      >
        +56 9 5516 2685
      </a>
    ),
  },
]

export default function Contact() {
  const [formSent, setFormSent] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = (event) => {
    setFormSent(false)
    setIsSending(true)

    const form = event.currentTarget

    window.setTimeout(() => {
      setIsSending(false)
      setFormSent(true)
      form.reset()
    }, 1000)
  }

  return (
    <section className="section">
      <div id="contacto" className="container contact-card" data-reveal>
        <div className="contact-content">
          <div className="contact-info">
            <p className="eyebrow">Contacto</p>

            <h2>Conversemos</h2>

            <p>
              Cuéntame brevemente tu situación para coordinar una evaluación.
            </p>

            <address className="contact-list">
              {details.map(({ Icon, label, value }) => (
                <p key={label}>
                  <Icon />

                  <span>
                    <strong>{label}</strong>
                    <br />
                    {value}
                  </span>
                </p>
              ))}
            </address>
          </div>

          <form
            className="contact-form"
            action="https://docs.google.com/forms/d/e/1FAIpQLSfPsiQDzmy7IM4ptcj3ox6T7XZBkjPIHBKWx9HTztPzFC5dFg/formResponse"
            method="POST"
            target="hidden-contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="contact-name">Nombre</label>

              <input
                id="contact-name"
                name="entry.1283980336"
                type="text"
                placeholder="Tu nombre"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Correo electrónico</label>

              <input
                id="contact-email"
                name="entry.1990764729"
                type="email"
                placeholder="correo@ejemplo.cl"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-phone">Teléfono</label>

              <input
                id="contact-phone"
                name="entry.97785388"
                type="tel"
                placeholder="+56 9 1234 5678"
                autoComplete="tel"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">
                ¿En qué necesitas orientación?
              </label>

              <select
                id="contact-subject"
                name="entry.393742229"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>

                <option value="Consulta jurídica">
                  Consulta jurídica
                </option>

                <option value="Redacción o revisión de documentos">
                  Redacción o revisión de documentos
                </option>

                <option value="Orientación legal">
                  Orientación legal
                </option>

                <option value="Otro">Otro</option>
              </select>
            </div>

            <div className="form-group form-group-full">
              <label htmlFor="contact-message">Mensaje</label>

              <textarea
                id="contact-message"
                name="entry.1450672367"
                rows="5"
                placeholder="Cuéntame brevemente tu situación"
                required
              />
            </div>

            <p className="form-privacy">
              No incluyas información especialmente sensible o confidencial.
            </p>
            {formSent && (
              <p className="form-success" role="status">
                Tu mensaje fue enviado correctamente. Elena se pondrá en
                contacto contigo.
              </p>
            )}
            <button
              type="submit"
              className="contact-submit"
              disabled={isSending}
            >
              {isSending ? 'Enviando...' : 'Enviar consulta'}
            </button>


          </form>
        </div>

        <iframe
          name="hidden-contact-form"
          title="Envío del formulario de contacto"
          className="contact-form-frame"
        />
      </div>
    </section>
  )
}
