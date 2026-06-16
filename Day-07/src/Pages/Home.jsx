import Gallery from "../components/Gallery";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-medium mb-6">
              ✨ Premium Nail Studio
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Luxury Nail Art
              <br />
              & Beauty Care
            </h1>

            <p className="text-xl text-gray-600 mb-4">
              Life is too short for boring nails. 💅
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Welcome to V Polish & Co., where creativity meets beauty.
              We specialize in premium nail care, luxury manicures,
              gel extensions, and custom nail designs tailored to your style.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg hover:shadow-xl"
            >
              Book Appointment
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200"
              alt="Nail Art"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      <Gallery />
    </div>
  );
}

export default Home;