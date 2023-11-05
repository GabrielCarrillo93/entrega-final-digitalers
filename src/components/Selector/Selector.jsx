
import Boton from '../Boton/Boton'

import './Selector.css'

// eslint-disable-next-line react/prop-types
const Selector = ({onClick}) => {
    
    const handleBtnClick = (e) => {
        const {target, target: {id}} = e;
        const botones = document.querySelectorAll(".btnLenguaje");
        
        if (!target.classList.contains("active")){
            botones.forEach((btn) => {
                btn.classList.remove("active")
            })
            target.classList.add("active");
        }

        onClick(id)
    }

    return (
        <section className='selector'>
            <h2>Proyectos (3)</h2>
            <div className="botonera">
                <Boton 
                    clase='btnLenguaje active'
                    texto='Responsivo'
                    id='responsive' 
                    action={handleBtnClick}
                    />
                <Boton 
                    clase='btnLenguaje'
                    texto='Javascript'
                    id='javascript'
                    action={handleBtnClick}
                    />
                <Boton 
                    clase='btnLenguaje'
                    texto='React'
                    id='react'
                    action={handleBtnClick}
                    />
            </div>
        </section>
    )
}

export default Selector