import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const openWhatsAppChat = () => {
    // Replace "YOUR_PHONE_NUMBER" with the recipient's phone number (including the country code).
    const phoneNumber = "+393271738565";

    // Replace "YOUR_MESSAGE" with the message you want to send in the WhatsApp chat.
    const message = "Scrivimi";

    // Create the WhatsApp API link with the phone number and message.
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Open the WhatsApp chat in a new tab or window.
    window.open(whatsappLink, "_blank");
  };
  return (
    <footer
      className="section-5 flex justify-center direction-column align-center"
      id="section-5"
    >
      <div className="social-media">
        <a
          href="https://www.instagram.com/_davide_1998/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-link"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="fa-shake"
            style={{ color: "#E6E6E6", fontSize: "4rem" }}
          />
        </a>
        <a
          href="https://www.facebook.com/davide.candia"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-link"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="fa-shake"
            style={{ color: "#E6E6E6", fontSize: "4rem" }}
          />
        </a>
        <a
          href="https://github.com/Dexy98"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-link"
        >
          <FontAwesomeIcon
            icon={faGithub}
            shake
            style={{ color: "#E6E6E6", fontSize: "4rem" }}
          />
        </a>
        <span
          onClick={openWhatsAppChat}
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-link cursor-pointer"
        >
        <FontAwesomeIcon icon={faWhatsapp} shake style={{color: "#ffffff",fontSize: "4rem"}} />
        </span>
      </div>
      <p className="copyright">
        Copyright &copy; CodeAndCreate. All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
