import Head from "next/head";
import Link from "next/link";
// import MicroscopeImg from "../../../public/microscope.jpg"
// import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - AL QASIM BUSINESS CHAMBERS</title>
        <meta
          name="description"
          content="Discover who we are, what we do, and how we bring innovation to scientific industries."
        />
      </Head>

      <main className="bg-gray-50 text-gray-800 min-h-screen px-6 py-12">
        <div className="max-w-6xl mx-auto space-y-16">

          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              About AL QASIM BUSINESS CHAMBERS
            </h1>
            <p className="mt-4 text-lg text-muted max-w-3xl mx-auto font-semibold">
              A trusted name in scientific instrumentation and advanced lab technology.
            </p>
            <div className="mt-6">
              <span className="inline-block w-20 h-1 bg-primary rounded-full"></span>
            </div>
          </section>

          <section className="md:flex md:items-center md:gap-10">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-primary mb-4">Our Journey</h2>
              <p className="text-gray-700 text-justify leading-relaxed">
               We, <strong>AL QASIM BUSINESS CHAMBERS</strong>, were incorporated in the year 2018 under the Ministry of Corporate Affairs (MCA), Government of India. We are focused on bridging the gap between manufacturers of high-end analytical instruments and their end users in government, academic, and industrial sectors.
With expertise in scientific and analytical instrumentation, we have successfully supplied and installed advanced solutions in thermal analysis, chromatography, spectroscopy, sample preparation, and inorganic analysis.
Our dedicated technical team ensures smooth implementation, training, and post-sale service. We take pride in serving research institutions, universities, pharmaceutical companies, food testing labs, and quality control labs across Jammu and Kashmir.


              </p>
            </div>
            {/* <div className="flex-1 mt-8 md:mt-0">
              <Image
                src= {MicroscopeImg}
                alt="Scientific equipment"
                className="rounded-xl shadow-lg"
              />
            </div> */}
          </section>

          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              We aim to be the cornerstone of progress for laboratories and institutions by delivering not only
              instruments but also trust, support, and innovation. Our mission is to provide solutions that enhance
              research efficiency, product quality, and scientific discovery.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be the most respected and preferred partner for analytical solutions in Asia and beyond. We envision a
              world where science moves faster, more accurately, and more sustainably—with our tools in every lab.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Thermal Analysis", desc: "TGA, DSC, DMA & hyphenated techniques" },
                { title: "Chromatography", desc: "GC, HPLC, LC-MS and custom GC analyzers" },
                { title: "Spectroscopy", desc: "UV-VIS, FTIR, Fluorescence, NIR & Microscopy" },
                { title: "Sample Prep & Extraction", desc: "Rotavapors, Soxhlet, Spray Dryers" },
                { title: "Inorganic Analysis", desc: "AAS, ICP-OES, ICP-MS, Microwave Digestion" },
                { title: "Portable & Process Systems", desc: "Rugged field-ready and inline tools" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-8 text-center">
                🌐 Industries We Proudly Serve
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                { label: "Pharmaceuticals", icon: "🧪", bg: "from-pink-500 to-red-500" },
                { label: "Agriculture & Food", icon: "🌾", bg: "from-green-400 to-green-600" },
                { label: "Healthcare", icon: "🏥", bg: "from-blue-400 to-blue-600" },
                { label: "Academic R&D", icon: "🔬", bg: "from-purple-500 to-indigo-600" },
                { label: "Petrochemicals", icon: "🛢️", bg: "from-yellow-500 to-yellow-700" },
                { label: "Industrial QA", icon: "🏭", bg: "from-gray-500 to-gray-700" },
                { label: "Environmental", icon: "🌍", bg: "from-teal-400 to-teal-600" },
                { label: "Chemicals", icon: "⚗️", bg: "from-orange-400 to-orange-600" },
                ].map(({ label, icon, bg }) => (
                <div
                    key={label}
                    className={`bg-gradient-to-r ${bg} text-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300`}
                >
                    <div className="text-3xl mb-2">{icon}</div>
                    <div className="text-lg font-semibold">{label}</div>
                </div>
                ))}
            </div>
            </section>

          <section className="text-center">
            <p className="text-lg lg:text-xl font-semibold text-muted mb-4">
              Interested in our products? Explore the full catalog and see how we can support your lab or business.
            </p>
            <Link href="/products">
              <button className="px-6 py-3 font-semibold bg-indigo-800 text-gray-50 rounded-xl hover:bg-blue-800 cursor-pointer transition">
                Browse Our Products
              </button>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
