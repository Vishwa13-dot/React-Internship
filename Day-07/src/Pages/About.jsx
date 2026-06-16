function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <div className="text-center mb-12">
        <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-medium mb-4">
          ✨ About Us
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About V Polish & Co.
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Where creativity, elegance, and beauty come together to create
          stunning nail experiences.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          At <span className="font-semibold text-pink-600">V Polish & Co.</span>,
          we believe nails are more than beauty—they are a form of
          self-expression and confidence.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          We specialize in trendy nail designs, gel extensions, luxury
          manicures, custom nail art, and premium nail care services
          tailored to every client's unique style.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Our mission is to help every client feel stylish, confident,
          and beautiful while enjoying a relaxing and luxurious salon
          experience.
        </p>
      </div>

    </div>
  );
}

export default About;