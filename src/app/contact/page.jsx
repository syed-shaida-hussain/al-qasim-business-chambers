"use client"

import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - AL QASIM BUSINESS CHAMBERS</title>
        <meta name="description" content="Get in touch with AL QASIM BUSINESS CHAMBERS" />
      </Head>

      <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Header */}
          <section className="text-center">
            <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
            <p className="mt-4 text-lg text-muted">
              We'd love to hear from you. Reach out to us with your queries, collaboration proposals, or feedback.
            </p>
            <div className="mt-6">
              <span className="inline-block w-20 h-1 bg-primary rounded-full"></span>
            </div>
          </section>

          {/* Contact Info & Form */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="space-y-6 bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold text-primary">Reach us at</h2>
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:info@alqasimbusiness.com" className="text-blue-600 hover:underline">
                  info@alqasimbusiness.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:+919000000000" className="text-blue-600 hover:underline">
                  +91 90000 00000
                </a>
              </p>
              <p>
                <strong>Address:</strong><br />
                AL QASIM BUSINESS CHAMBERS<br />
                Srinagar, Jammu & Kashmir, India
              </p>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white p-6 rounded-xl shadow space-y-6"
            >
              <h2 className="text-xl font-semibold text-primary">Send us a message</h2>

              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Type your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
