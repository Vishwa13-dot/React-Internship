import { useParams } from "react-router-dom";
import nailDesigns from "../Data/nailData";

function ProductDetails() {
  const { id } = useParams();

  const product = nailDesigns.find(
    (item) => item.id === id
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="page">

      <h1>{product.title}</h1>

      <div className="details-gallery">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={product.title}
          />
        ))}
      </div>

    </div>
  );
}

export default ProductDetails;