import './App.css'
import Certificados from './components/Certificados/Certificados'
import Experiencias from './components/Experiencias/Experiencias'
import Header from './components/Header/Header'
import Proyectos from './components/Proyectos/Proyectos'
import Selector from './components/Selector/Selector'
import Skills from './components/Skills/Skills'

function App() {

    return (
        <>
            <Header />
            <main>
                <Skills />
                <Selector/>
                <Proyectos />
                <Experiencias />
                <Certificados />
            </main>
        </>
    )
}

export default App
