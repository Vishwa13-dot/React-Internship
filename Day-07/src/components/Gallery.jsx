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
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Trending Nail Designs 💅
        </h2>

        <div className="flex gap-3">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full bg-pink-100 hover:bg-pink-600 hover:text-white transition duration-300 text-xl"
          >
            ❮
          </button>

          <button
            onClick={scrollRight}
            className="w-12 h-12 rounded-full bg-pink-100 hover:bg-pink-600 hover:text-white transition duration-300 text-xl"
          >
            ❯
          </button>
        </div>

      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
      >
        {nailDesigns.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className="flex-shrink-0"
          >
            <div className="relative w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105">

              <img
                src={item.cover}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}

export default Gallery;