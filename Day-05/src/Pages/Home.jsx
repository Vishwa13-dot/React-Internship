import Gallery from "../components/Gallery";
import { useNavigate } from "react-router-dom";


function Home() {
   const navigate = useNavigate();

  return (
    <div className="container">

      <section className="hero-section">

        <div className="hero-content">
          <span className="tagline">✨ Premium Nail Studio</span>

          <h1>Luxury Nail Art <br />& Beauty Care</h1>

          <p>Life is too short for boring nails. 💅</p>

          <p>Welcome to V Polish & Co., where creativity meets beauty.We specialize in premium nail care and custom nail designs.</p>

          <button className="book-btn" onClick={() => navigate("/contact")}>Book Appointment</button>
        </div>

  <div className="hero-image">
    <img
      src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200"
      alt="Nail Art"
    />
  </div>

</section>

      <Gallery />

    </div>
  );
}

export default Home;