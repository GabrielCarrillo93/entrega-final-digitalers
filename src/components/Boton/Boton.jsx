import './Boton.css'

// eslint-disable-next-line react/prop-types
const Boton = ({clase, texto, id, action}) => {
    return (
        <button 
            type='button' 
            className={clase}
            id={id}
            onClick={action}
            >
            {texto}
        </button>
    )
}

export default Boton