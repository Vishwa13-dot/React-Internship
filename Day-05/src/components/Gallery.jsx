import { Link } from "react-router-dom";
import nailDesigns from "../data/nailData";

function Gallery() {
  return (
    <div className="gallery-section">
      <h2 className="gallery-title">
        Trending Nail Designs 💅
      </h2>

      <div className="gallery-scroll">
        {nailDesigns.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="card-link"
          >
            <div className="card">
              <img src={item.cover} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;