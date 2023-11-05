import { useEffect, useState } from 'react';
import Boton from '../Boton/Boton'
import Certificado from '../Certificado/Certificado'
import Spinner from '../Spinner/Spinner';
import './Certificados.css'
import { /*chequearAnterior, chequearSiguiente,*/ getLista, mostrarSlides } from '../../assets/funciones';


const Certificados = () => {
    const [certificado, setCertificado] = useState([]);
    const [error, setError] = useState(null)
    const [loader, setLoader] = useState(null)
    const [hijos, setHijos] = useState([])
    

    useEffect(() => {
        setLoader(true)
        fetch("https://my-json-server.typicode.com/GabrielCarrillo93/fake-server/certificados")
            .then((response) => {
                if (!response.ok) throw "Hubo un error";
                return response.json();
            })
            .then((data) => {
                setCertificado(data);
                setError(null);
            })
            .catch((err) => {
                setError(err);
                setCertificado([]);
            })
            .finally(() => {
                setLoader(null);
            })
    }, []);

    useEffect(() => {
        setHijos(getLista("certificado"))
    }, [])
    
    let indice = 0;
    mostrarSlides(indice, hijos, "certificados-none")

    return (
        <section className="certificados">
            <h2>Certificados</h2>
            {loader ? <Spinner /> : ""}
            <Boton 
                clase='sliderAnterior'
                texto='<'
                id='certificadoMenos'
                action={() => {
                    indice--;
                    //chequearAnterior(indice, hijos)
                    if (indice > hijos.length){
                        indice = 0
                    }

                    if (indice < 0){
                        indice = hijos.length-1
                    }
                    mostrarSlides(indice, hijos, "certificados-none");
                }}
                />
            <Boton 
                clase='sliderSiguiente'
                texto='>'
                id='certificadoMas'
                action={() => {
                    indice++;
                    //chequearSiguiente(indice, hijos)
                    if (indice > hijos.length-1){
                        indice = 0
                    }

                    if (indice < 0){
                        indice = hijos.length
                    }
                    mostrarSlides(indice, hijos, "certificados-none");
                }}
                />
            <div className="row">
                {
                error ? <span >Hubo un error</span> : certificado.map((cert) => 
                    <Certificado 
                        key={cert.id}
                        imagen={cert.imagen} 
                        titulo={cert.titulo} 
                        fecha={cert.fecha}
                        name="certificado"
                        />)
                }
            </div>
            </section>
    )
}

export default Certificados