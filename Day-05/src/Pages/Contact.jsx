import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="page">

      <h1>Book Your Appointment</h1>

      <p>📞 Phone: +91 98765 43210</p>

      <p>📧 Email: hello@vpolishandco.com</p>

      <p>📍 Ahmedabad, Gujarat</p>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className="instagram-link"
      >
        <FaInstagram />
        @vpolish.co
      </a>

    </div>
  );
}

export default Contact;