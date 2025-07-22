import Head from "next/head";
import Link from "next/link";
import Carousel from "./components/Carousel";
import categories from "../app/data/categories.json"
import partners from "../app/data/partners.json"
import products from "../app/data/products.json"




export default function Home() {
  return (
    <>
      <Head>
        <title>AL QASIM BUSINESS CHAMBERS</title>
        <meta name="description" content="Scientific Equipment Solutions" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-800">
        <section className="bg-white py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            AL QASIM BUSINESS CHAMBERS
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Your trusted source for high-end scientific instruments & laboratory solutions.
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            <Link href="/products">
              <button className="px-6 py-3 bg-indigo-900 text-white rounded-xl font-semibold hover:bg-blue-800">
                View Products
              </button>
            </Link>
          </div>
        </section>

        <Carousel />

        <section className="py-16 bg-gray-100 px-6">
          <h2 className="text-2xl font-semibold text-center mb-10">Featured Categories</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map(({name,value}) => (
              <div
                key={name}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-medium text-blue-800">{name}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Explore instruments for {name.toLowerCase()} applications.
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
      🤝 Our Partners
    </h2>
    <p className="text-muted mb-10 max-w-3xl mx-auto font-semibold">
      We are proud to collaborate with leading global manufacturers and solution providers in the field of scientific instrumentation.
    </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {partners.map(({ label, icon, bg }) => (
                <div
                    key={label}
                    className={`bg-gradient-to-r ${bg} text-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300`}
                >
                    <div className="text-3xl mb-2">{icon}</div>
                    <div className="text-lg font-semibold">{label}</div>
                </div>
                ))}
            </div>
  </div>
</section>
        <section className="py-16 bg-gray-100 px-6">
          <h2 className="text-2xl font-semibold text-center mb-10">Featured Products</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {products.map(({id,title,description,image}) => (
              <div
                key={id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-medium text-blue-800">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
