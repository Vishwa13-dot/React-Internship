import { FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <div className="text-center mb-12">
        <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-medium mb-4">
          💅 Book Now
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Book Your Appointment
        </h1>

        <p className="text-gray-600 text-lg">
          Ready for beautiful nails? Contact us and reserve your spot today.
        </p>
      </div>

      <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12">

        <div className="space-y-6">

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-pink-600 text-xl" />
            <p className="text-lg text-gray-700">
              +91 98765 43210
            </p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-pink-600 text-xl" />
            <p className="text-lg text-gray-700">
              hello@vpolishandco.com
            </p>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-pink-600 text-xl" />
            <p className="text-lg text-gray-700">
              Ahmedabad, Gujarat
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            <FaInstagram />
            @vpolish.co
          </a>

        </div>

      </div>

    </div>
  );
}

export default Contact;