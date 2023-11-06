import { useEffect, useState } from 'react'
import Boton from '../Boton/Boton'
import Spinner from '../Spinner/Spinner'
//import Proyecto from '../Proyecto/Proyecto'
import './Proyectos.css'
import Proyecto from '../Proyecto/Proyecto'
import { /*chequearAnterior, chequearSiguiente,*/ getLista, mostrarSlides } from '../../assets/funciones'

// eslint-disable-next-line react/prop-types
const Proyectos = ({mostrar}) => {
    const [loader, setLoader] = useState(false);
    const [tipo, setTipo] = useState([]);
    const [hijos, setHijos] = useState([])
    
    
    useEffect(() => {
        setLoader(true);
        fetch("https://my-json-server.typicode.com/GabrielCarrillo93/fake-server/proyectos")
            .then((response) => {
                if (!response.ok) throw new Error("hubo un problema")
                return response.json();
            })
            .then((data) => {
                setTipo(data[0][mostrar]);
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoader(false)
            });
    }, [mostrar]);

    let indice = 1;

    useEffect(() => {
        setHijos(getLista("proyecto"));
    }, [indice])

    indice++;

    mostrarSlides(indice, hijos, "proyectos-none");


    return (
        <section className='proyectos'>
            {loader ? <Spinner /> : ''}
            <Boton 
                clase='sliderAnterior'
                texto='<'
                id='proyectoMenos'
                action={() => {
                    indice--;
                    // chequearAnterior(indice, hijos);
                    if (indice > hijos.length){
                        indice = 0;
                    }
                
                    if (indice < 0){
                        indice = hijos.length-1;
                    }
                    mostrarSlides(indice, hijos, "proyectos-none");
                }}
                />
            <Boton 
                clase='sliderSiguiente'
                texto='>'
                id='proyectoMas'
                action={() => {
                    indice++;
                    //chequearSiguiente(indice, hijos)
                    if (indice > hijos.length-1){
                        indice = 0
                    }

                    if (indice < 0){
                        indice = hijos.length
                    }
                    mostrarSlides(indice, hijos, "proyectos-none");
                }}
                />
            {tipo.map((el) =>
                <Proyecto 
                    key={el.id}
                    imagen={el.imagen}
                    tags={el.tags}
                    titulo={el.titulo}
                    descripcion={el.descripcion}
                    demo={el.liveDemo}
                    code={el.sourceCode}
                    name="proyecto"
                    />
            )}
        </section>
  )
}

export default Proyectos