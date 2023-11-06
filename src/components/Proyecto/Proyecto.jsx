import LinkBoton from "../LinkBoton/LinkBoton"
import './Proyecto.css'

// eslint-disable-next-line react/prop-types
const Proyecto = ({imagen, tags, titulo, descripcion, demo, code, name}) => {
    return (
        <article name={name} className="proyecto- proyectosSlide fade proyectos-none">
            <div>
                <img src={imagen} alt="" />
            </div>
            <div className="detalles">
                <div>
                    <span>{tags}</span>
                </div>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
            </div>
            <div className="links">
                <LinkBoton 
                    clase='demo'
                    texto='Demo'
                    href={demo}
                    />
                <LinkBoton 
                    clase='code'
                    texto='Code'
                    href={code}
                    />
            </div>
        </article>
    )
}  

export default Proyecto