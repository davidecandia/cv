/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contatti = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sxzsyln', 'template_0rbt4zf', form.current, 'o_j5KqBPPXixnP4zt')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  const urlForms = "https://docs.google.com/forms/d/e/1FAIpQLSf0TUUp_EY2KH5wQPhM7l3Jppch07f8KT8F5zjPRS79nr0crg/viewform?embedded=true" 
  return (
    <section class="section-4 flex direction-column align-center justify-center " id="section-4">
        <h1 class="section-titolo titolo-section-4 mb-3">Contatti</h1>
        {/* <form class="form flex direction-column">
            <input type="text" placeholder="Nome"/>
            <input type="email" placeholder="E-mail"/>
            <textarea placeholder="Testo"></textarea>
            <input type="submit" value="Invia" class="btn cursor-pointer"/>
        </form> */}

          <form ref={form} onSubmit={sendEmail} class="form flex direction-column">
            <label>Nome</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Messaggio</label>
            <textarea name="message" />
            <input type="submit" value="INVIA" class="btn cursor-pointer"/>
          </form>

         

    </section>

  )
}

export default Contatti
