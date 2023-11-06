import { useState, useEffect } from 'react'
import './App.css'
import Certificados from './components/Certificados/Certificados'
import Experiencias from './components/Experiencias/Experiencias'
import Header from './components/Header/Header'
import Proyectos from './components/Proyectos/Proyectos'
import Selector from './components/Selector/Selector'
import Skills from './components/Skills/Skills'


function App() {
    const [proyectos, setProyectos] = useState("responsive");
    const [recarga, setRecarga] = useState(1)

    //tuve que hacer esto para forzar que se vea el carrousel en mobile
    
    useEffect(() => {
        setTimeout(() =>{
            setRecarga(2)
            console.log(recarga);
        }, 500)
    }, [recarga])
    

    return (
        <>
            <Header />
            <main>
                <Skills />
                <Selector 
                    onClick={setProyectos}/>
                <Proyectos 
                    mostrar={proyectos}/>
                <Experiencias />
                <Certificados/>
            </main>
        </>
    )
}

export default App
