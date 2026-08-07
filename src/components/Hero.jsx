import { useEffect, useState } from 'react'
import heroImage from '../assets/hero-biblioteca-legal.webp'
import { CalendarIcon, ShieldIcon, WhatsAppIcon } from './Icons.jsx'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const image = new Image()

    image.src = heroImage

    if (image.complete) {
      setLoaded(true)
      return undefined
    }

    image.onload = () => {
      setLoaded(true)
    }

    return () => {
      image.onload = null
    }
  }, [])

  return (
    <main id="inicio" className={`hero ${loaded ? 'hero--loaded' : ''}`}>
      <img
        className="hero__background"
        src={heroImage}
        alt=""
        loading="eager"
        fetchPriority="high"
        width="1672"
        height="941"
        onLoad={() => setLoaded(true)}
      />

      <div className="container hero__grid">
        <div className="hero__content hero-intro">
          <p className="eyebrow">Asesoría jurídica preventiva en Pucón y online en Chile</p>
          <h1>Gestión jurídica clara y cercana.</h1>
          <p className="hero__lead">
            Orientación, documentos y trámites legales para personas y familias,
            con atención presencial y online en todo Chile.
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
              Solicitar evaluación
            </a>

            <a
              className="button button--outline"
              href="https://wa.me/56955162685?text=Hola%20Elena%2C%20quiero%20hacer%20una%20consulta%20jur%C3%ADdica."
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>

          <p className="trust-line">
            <ShieldIcon />
            Licenciada en Ciencias Jurídicas · Atención online y presencial previa
            coordinación
          </p>
        </div>
      </div>
    </main>
  )
}
