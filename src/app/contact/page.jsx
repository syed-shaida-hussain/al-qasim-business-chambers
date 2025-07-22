// pages/contact.tsx

import Head from "next/head";
import { FaWhatsapp } from "react-icons/fa";
import WhatsappBanner from "../components/WhatsappBanner";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - AL QASIM BUSINESS CHAMBERS</title>
        <meta name="description" content="Get in touch with AL QASIM BUSINESS CHAMBERS" />
      </Head>

      <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* Header */}
          <section className="text-center">
            <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
            <p className="mt-4 text-lg text-muted">
              We'd love to connect. Reach out through email, phone, or WhatsApp.
            </p>
            <div className="mt-6">
              <span className="inline-block w-20 h-1 bg-primary rounded-full"></span>
            </div>
          </section>

          {/* Contact Info */}
          <section className="bg-white p-6 rounded-xl shadow space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-primary mb-2">Email</h2>
              <a
                href="mailto:info@alqasimbusiness.com"
                className="text-blue-600 hover:underline"
              >
                info@alqasimbusiness.com
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-2">Phone</h2>
              <a href="tel:+919000000000" className="text-blue-600 hover:underline">
                +91 90000 00000
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-2">Address</h2>
              <p>
                AL QASIM BUSINESS CHAMBERS<br />
                Srinagar, Jammu & Kashmir, India
              </p>
            </div>

            <div>
            <WhatsappBanner />
            </div>
            
          </section>
        </div>
      </main>
    </>
  );
}
