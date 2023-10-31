import './LinkBoton.css'
// eslint-disable-next-line react/prop-types
const LinkBoton = ({href, clase, texto}) => {
  return (
    <a 
        href={href} 
        className={clase} 
        target='_blank' 
        rel="noreferrer"
        >
        {texto}
    </a>
  )
}

export default LinkBoton