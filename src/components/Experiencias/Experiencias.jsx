import Boton from '../Boton/Boton'
//import Experiencia from '../Experiencia/Experiencia'
import './Experiencias.css'


const Experiencias = () => {
  return (
    <section className='experiencias'>
        <h2>Experiencias</h2>
        <Boton 
            clase='sliderAnterior'
            texto='<'
            id='experienciaMenos'
            />
        <Boton 
            clase='sliderSiguiente'
            texto='>'
            id='experienciaMas'
            />
    </section>
  )
}

export default Experiencias