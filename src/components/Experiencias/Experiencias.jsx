import { useEffect, useState } from 'react';
import Boton from '../Boton/Boton'
import Experiencia from '../Experiencia/Experiencia'
import Spinner from '../Spinner/Spinner'
import './Experiencias.css'
import { /*chequearAnterior, chequearSiguiente,*/ getLista, mostrarSlides } from '../../assets/funciones';


const Experiencias = () => {
    const [experiencia, setExperiencia] = useState([]);
    const [error, setError] = useState(null)
    const [loader, setLoader] = useState(null)
    const [hijos, setHijos] = useState([])

    useEffect(() => {
        setLoader(true)
        fetch("https://my-json-server.typicode.com/GabrielCarrillo93/fake-server/experiencia")
            .then((response) => {
                if (!response.ok) throw "Hubo un error";
                return response.json();
            })
            .then((data) => {
                setExperiencia(data);
                setError(null);
            })
            .catch((err) => {
                setError(err);
                setExperiencia([]);
            })
            .finally(() => {
                setLoader(null);
            })
    }, []);

    useEffect(() => {
        setHijos(getLista("experiencia"))
    }, [])
    
    let indice = 0;
    mostrarSlides(indice, hijos, "experiencias-none");

    return (
        <section className='experiencias'>
            <h2>Experiencias</h2>
            {loader ? <Spinner /> : ""}
            <Boton 
                clase='sliderAnterior'
                texto='<'
                id='experienciaMenos'
                action={() => {
                    indice--;
                    //chequearAnterior(indice, hijos)
                    if (indice > hijos.length){
                        indice = 0
                    }

                    if (indice < 0){
                        indice = hijos.length-1
                    }
                    mostrarSlides(indice, hijos, "experiencias-none");
                }}
                />
            <Boton 
                clase='sliderSiguiente'
                texto='>'
                id='experienciaMas'
                action={() => {
                    indice++;
                    //chequearSiguiente(indice, hijos);
                    if (indice > hijos.length-1){
                        indice = 0
                    }

                    if (indice < 0){
                        indice = hijos.length
                    }
                    mostrarSlides(indice, hijos, "experiencias-none");
                }}
                />
            {error ? <span>Hubo un error</span> : experiencia.map((exp) => 
                <Experiencia 
                    key={exp.id} 
                    imagen={exp.logo} 
                    duracion={exp.duracion} 
                    titulo={exp.puesto} 
                    descripcion={exp.descripcion} 
                    name="experiencia"
                    />
                )}
        </section>
  )
}

export default Experiencias