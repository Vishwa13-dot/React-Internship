import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="page">
      <h1>Book Your Appointment</h1>

      <p>
        Ready for stunning nails? We'd love to hear from you and help bring
        your dream nail design to life.
      </p>
        <a
              href="https://instagram.com/vpolish.co"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
            >
              <FaInstagram />
              <span>@vpolish.co</span>
       </a>
      
      <p>📞 Phone: +91 98765 43210</p>
      
      
      <p>📧 Email: hello@vpolishandco.com</p>

      <p>📍 Location: Ahmedabad, Gujarat</p>

      <p>🕒 Timings: Monday - Sunday | 10:00 AM - 8:00 PM</p>

      <p>
        Follow us on Instagram for the latest nail art designs, offers, and
        beauty inspiration.
      </p>
    </div>
  );
}

export default Contact;