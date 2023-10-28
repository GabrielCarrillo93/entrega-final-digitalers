import './App.css'
import Certificados from './components/Certificados/Certificados'
import Experiencias from './components/Experiencias/Experiencias'
import Header from './components/Header/Header'
import Skills from './components/Skills/Skills'

function App() {

    return (
        <>
            <Header />
            <main>
                <Skills />
                <Experiencias />
                <Certificados />
            </main>
        </>
    )
}

export default App
