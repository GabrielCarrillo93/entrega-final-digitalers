import Boton from '../Boton/Boton'
import './Selector.css'

const Selector = () => {
    return (
        <section className='selector'>
            <h2>Proyectos (3)</h2>
            <div className="botonera">
                <Boton 
                    clase='btnLenguaje active'
                    texto='Responsivo'
                    id='responsive'
                    />
                <Boton 
                    clase='btnLenguaje'
                    texto='Javascript'
                    id='javascript'
                    />
                <Boton 
                    clase='btnLenguaje'
                    texto='React'
                    id='react'
                    />
            </div>
        </section>
    )
}

export default Selector