import { useParams } from "react-router-dom";
import nailDesigns from "../Data/nailData";

function ProductDetails() {
  const { id } = useParams();

  const product = nailDesigns.find(
    (item) => item.id === id
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-700">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          {product.title}
        </h1>

        <p className="text-gray-600 mt-4">
          Explore beautiful designs from our {product.title} collection.
        </p>
      </div>

      {/* Images Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {product.images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={img}
              alt={product.title}
              className="w-full h-[400px] object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default ProductDetails;