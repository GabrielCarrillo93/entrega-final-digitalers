import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header>
        <img 
            src="./assets/img/perfil.png" 
            alt="mi_foto" 
            className='perfil'
            />
        <div className='container_grid'>
            <div>
                <h1 
                    className='titulo negro'
                    >Nombre</h1>
                <p 
                    className='texto'
                    >Front end develloper</p>
            </div>
            <div>
                <p 
                    className='texto negro'>
                        <FontAwesomeIcon 
                            icon={faEnvelope} 
                            /> ejemplo@mail.com</p>
                <p 
                    className='texto negro'>
                            <FontAwesomeIcon 
                                icon={faPhone} 
                                /> +54 9 11-1234-5678</p>
            </div>
        </div>
        <div 
            className='container_grid'>
            <p 
                className='texto'>Self-motivated developer, who is willing to learn and create outstanding UI applications.</p>
        </div>
    </header>
  )
}

export default Header