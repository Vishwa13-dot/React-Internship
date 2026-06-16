import Gallery from "../components/Gallery";

function Products() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Nail Collections 💅
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our premium collection of nail designs, from elegant French
          tips to glamorous glitter nails, trendy chrome styles, and custom
          luxury nail art.
        </p>
      </section>

      {/* Gallery */}
      <Gallery />
      
    </div>
  );
}

export default Products;