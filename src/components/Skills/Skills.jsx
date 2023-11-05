import './Skills.css'

const Skills = () => {
  return (
    <section 
        className="skills">
        <h2>Skills</h2>
        <div 
            className="row">
            <article>
                <div 
                    className="habilidad">
                    <span 
                        className="lang">HTML</span>
                    <div 
                        className="lang_container">
                        <div 
                            className="html_progreso"></div>
                    </div>
                </div>
                <div 
                    className="habilidad">
                    <span 
                        className="lang">CSS</span>
                    <div 
                        className="lang_container">
                        <div 
                            className="css_progreso"></div>
                    </div>
                </div>
            </article>
            <article>
                <div 
                    className="habilidad">
                    <span 
                        className="lang">JS</span>
                    <div 
                        className="lang_container">
                        <div 
                            className="js_progreso"></div>
                    </div>
                </div>
                <div 
                    className="habilidad">
                    <span 
                        className="lang">React</span>
                    <div 
                        className="lang_container">
                        <div 
                            className="react_progreso"></div>
                    </div>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Skills