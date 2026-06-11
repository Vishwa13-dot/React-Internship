import { useRef } from "react";
import { Link } from "react-router-dom";
import nailDesigns from "../Data/nailData";

function Gallery() {
  const sliderRef = useRef();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="gallery-section">

      <div className="gallery-header">

        <h2 className="gallery-title">
          Trending Nail Designs 💅
        </h2>

        <div className="slider-buttons">
          <button onClick={scrollLeft}>❮</button>
          <button onClick={scrollRight}>❯</button>
        </div>

      </div>

      <div
        className="gallery-scroll"
        ref={sliderRef}
      >
        {nailDesigns.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className="card-link"
          >
            <div className="card">

              <img
                src={item.cover}
                alt={item.title}
              />

              <div className="card-overlay">
                <h3>{item.title}</h3>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}

export default Gallery;