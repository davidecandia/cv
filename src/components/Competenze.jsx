import React from 'react'

const Competenze = () => {
  return (
    <section className="section-2 mt-4 container" id="section-2">
        <h1 className="section-titolo mt-4 mb-4">Competenze</h1>
        <div className="stile-barra">
            <div className="barra">
                <p className="testo-barra">
                    HTML
                    <span></span>%
                </p>
                <div className="barra-percentuale"></div>
            </div>
        </div>
        <div className="stile-barra ">
            <div className="barra">
                <p className="testo-barra">
                    css
                    <span></span>%
                </p>
                <div className="barra-percentuale"></div>
            </div>
        </div>
        <div className="stile-barra ">
            <div className="barra">
                <p className="testo-barra">
                    JavaScript
                    <span></span>%
                </p>
                <div className="barra-percentuale"></div>
            </div>
        </div>


    </section>
  )
}

export default Competenze
