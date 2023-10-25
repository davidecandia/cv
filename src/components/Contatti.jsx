/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contatti = () => {
  const [validazione, setValidazione] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sxzsyln",
        "template_0rbt4zf",
        form.current,
        "o_j5KqBPPXixnP4zt"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const isVAlid = validazione.length > 0;
  return (
    <section
      class="section-4 flex direction-column align-center justify-center "
      id="section-4">
      <h1 class="font-bold text-5xl mb-3">Contatti</h1>
      {/* <form class="form flex direction-column">
            <input type="text" placeholder="Nome"/>
            <input type="email" placeholder="E-mail"/>
            <textarea placeholder="Testo"></textarea>
            <input type="submit" value="Invia" class="btn cursor-pointer"/>
        </form> */}

      <form ref={form} onSubmit={sendEmail} class="form flex direction-column">
        <label>Nome</label>
        <input
          type="text"
          name="user_name"
          onChange={(e) => setValidazione(e.currentTarget.value)}
          required
        />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Messaggio</label>
        <textarea
          name="message"
          onChange={(e) => setValidazione(e.currentTarget.value)}
          required
        />
        <button
          type="submit"
          value="INVIA"
          class="btn cursor-pointer"
          disabled={!isVAlid}>
          INVIA
        </button>
      </form>
    </section>
  );
};

export default Contatti;
