const Footer = () => {
  return (
    <footer
      className="bg-white text-black px-6 lg:px-16 pt-14 pb-6 border-t border-gray-200"
      id="footer"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14 pb-12">
        <div className="font-serif">
          <h1 className="text-3xl font-bold">
            <span className="text-[#041E54]">Poli</span>
            <span className="text-[#F28C00]">Tech</span> Solutions
          </h1>

          <p className="text-gray-600 mt-5 leading-relaxed">
            PoliTech Solutions is an independent consulting platform providing
            strategic campaign support, voter engagement solutions, and
            political communication planning.
          </p>

          <div className="mt-8 space-y-5 font-[font4]">
            <div>
              <p className="text-sm text-gray-400">Email</p>

              <p className="text-lg text-gray-700">
                info@politechsolutions.com
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Phone</p>

              <p className="text-lg text-gray-700">+91 9063222721</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Location</p>

              <p className="text-lg text-gray-700">
                Hyderabad, Telangana, India
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#041E54] mb-5">
            Quick Links
          </h2>

          <div className="flex flex-col gap-4 text-gray-600">
            <a
              href="#hero"
              className="hover:text-[#F28C00] transition duration-300 w-fit"
            >
              Home
            </a>

            <a
              href="#services"
              className="hover:text-[#F28C00] transition duration-300 w-fit"
            >
              Services
            </a>

            <a
              href="#footer"
              className="hover:text-[#F28C00] transition duration-300 w-fit"
            >
              Contact
            </a>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div>
          <h2 className="text-2xl font-semibold text-[#041E54] mb-6">
            Contact Us
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#F28C00]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#F28C00]"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#F28C00]"
            />

            <input
              type="text"
              placeholder="Organization / Party Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#F28C00]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#F28C00]"
            />

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#F28C00]"
            ></textarea>

            <button
              type="submit"
              className="bg-[#F28C00] hover:bg-orange-500 text-white px-6 py-3 rounded-xl transition duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 pt-5 flex flex-col lg:flex-row justify-between items-center gap-3 text-sm text-gray-500">
        <p>© 2026 PoliTech Solutions. All rights reserved.</p>

        <p className="text-center">
          Independent political consulting platform.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
