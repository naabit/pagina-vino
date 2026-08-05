export default function Logo({ compact = false }) {
  return (
    <a
      className={`brand ${compact ? 'brand--compact' : ''}`}
      href="#inicio"
      aria-label="Ir al inicio"
    >
      <svg className="brand__mark" viewBox="0 0 100 100" aria-hidden="true">
        <path
          className="brand__arc"
          d="M14 71C20 87 39 94 61 91C76 89 86 82 91 72"
        />
        <path
          className="brand__mountain"
          d="M22 72L39 57L49 66L57 60L72 73"
        />
        <path className="brand__lake" d="M24 78H69M31 83H64" />
        <text className="brand__r" x="26" y="58">R</text>
        <text className="brand__e" x="49" y="52">E</text>
        <text className="brand__f" x="55" y="76">F</text>
        <circle className="brand__dot" cx="88" cy="74" r="2.4" />
      </svg>
      {!compact && (
        <span className="brand__text">
          <strong>R. Elena Fryderup</strong>
          <small>Licenciada en Ciencias Juridicas</small>
        </span>
      )}
    </a>
  )
}
