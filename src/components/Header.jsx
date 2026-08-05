import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { CalendarIcon } from './Icons.jsx'

const links = [
  ['Servicios', '#servicios'],
  ['Sobre mí', '#sobre-mi'],
  ['Cómo funciona', '#proceso'],
  ['Contacto', '#contacto'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setOpen(false)
  }

  const handleScheduleClick = (event) => {
    closeMenu()

    if (window.innerWidth <= 700) {
      event.preventDefault()

      document.getElementById('contact-name')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Logo />

        <button
          className={`menu-button ${
            open ? 'menu-button--open' : ''
          }`}
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`nav ${open ? 'nav--open' : ''}`}
          aria-label="Navegación principal"
        >
          {links.map(([label, href]) => (
            <a
              href={href}
              key={href}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}

          <a
            href="#contacto"
            className="button button--small"
            onClick={handleScheduleClick}
          >
            <CalendarIcon />
            Agendar
          </a>
        </nav>
      </div>
    </header>
  )
}
