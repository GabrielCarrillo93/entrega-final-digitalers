import './Experiencia.css'

// eslint-disable-next-line react/prop-types
const Experiencia = ({imagen, duracion, titulo, descripcion, name}) => {
    
    return (
        <article name={name} className="experiencia- fade experienciaSlide">
            <div className="row">
                <div className="puesto">
                    <img src={imagen} alt="" />
                    <div>
                        <span>{duracion}</span>
                        <h3>{titulo}</h3>
                    </div>
                </div>
                <div className="descripcion">
                    <p>{descripcion}</p>
                </div>
            </div>
        </article>
    )
}

export default Experiencia