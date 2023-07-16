import React from 'react'

const Contatti = () => {
  return (
    <section class="section-4 flex direction-column align-center justify-center " id="section-4">
        <h1 class="section-titolo titolo-section-4 mb-3">Contatti</h1>
        <form class="form flex direction-column">
            <input type="text" placeholder="Nome"/>
            <input type="email" placeholder="E-mail"/>
            <textarea placeholder="Testo"></textarea>
            <input type="submit" value="Invia" class="btn"/>
        </form>
    </section>
  )
}

export default Contatti
