import './Certificado.css'

const Certificado = ({imagen, titulo, fecha}) => {
    return (
        <article className="certificado- fade certificadosSlide">
            <img src={imagen} alt="" />
            <h3>{titulo}</h3>
            <span>{fecha}</span>
        </article>
    )
}

export default Certificado