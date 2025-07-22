
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappBanner() {
  return (
    <div className="bg-green-600 text-white py-10 px-6 rounded-xl shadow-lg mt-16">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Need a quick response?
        </h2>
        <p className="text-lg">
          Chat directly with us on WhatsApp for faster assistance and support.
        </p>
        <a
          href="https://wa.me/919149701175"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 rounded-full font-medium hover:bg-gray-100 transition"
        >
          <FaWhatsapp className="text-xl" />
          Message Us on WhatsApp
        </a>
      </div>
    </div>
  );
}
