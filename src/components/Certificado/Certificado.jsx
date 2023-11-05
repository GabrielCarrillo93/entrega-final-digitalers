import './Certificado.css'

// eslint-disable-next-line react/prop-types
const Certificado = ({imagen, titulo, fecha, name}) => {

    return (
        <>
        <article name={name} className="certificado- fade certificadosSlide">
            <img src={imagen} alt="cert" />
            <h3>{titulo}</h3>
            <span>{fecha}</span>
        </article>
        </>
    )
}

export default Certificado