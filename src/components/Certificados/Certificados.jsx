import Boton from '../Boton/Boton'
import './Certificados.css'

const Certificados = () => {
    
    return (
        <section className="certificados">
            <h2>Certificados</h2>
            <Boton 
                clase='sliderAnterior'
                texto='<'
                id='certificadoMenos'
                />
            <Boton 
                clase='sliderSiguiente'
                texto='>'
                id='certificadoMas'
                />
            <div className="row">
            </div>
            </section>
    )
}

export default Certificados