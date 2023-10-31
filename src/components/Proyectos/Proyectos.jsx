import Boton from '../Boton/Boton'
import Spinner from '../Spinner/Spinner'
//import Proyecto from '../Proyecto/Proyecto'
import './Proyectos.css'

const Proyectos = () => {
  return (
    <section className='proyectos'>
        <Spinner />
        <Boton 
            clase='sliderAnterior'
            texto='<'
            id='proyectoMenos'
            />
        <Boton 
            clase='sliderSiguiente'
            texto='>'
            id='proyectoMas'
            />
    </section>
  )
}

export default Proyectos