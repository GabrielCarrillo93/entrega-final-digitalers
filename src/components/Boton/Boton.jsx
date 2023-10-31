import './Boton.css'

// eslint-disable-next-line react/prop-types
const Boton = ({clase, texto, id}) => {
    return (
        <button 
            type='button' 
            className={clase}
            id={id}
            >
            {texto}
        </button>
    )
}

export default Boton