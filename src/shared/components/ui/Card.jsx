import './Card.scss'

function Card({ children, className = '', title, extra }) {
  return (
    <div className={`card ${className}`.trim()}>
      {(title || extra) && (
        <div className="card-header">
          {title && <h2 className="card-title">{title}</h2>}
          {extra && <div className="card-extra">{extra}</div>}
        </div>
      )}
      <div className="card-body">{children}</div>
    </div>
  )
}

export default Card