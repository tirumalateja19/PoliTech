const Footer = () => {
  return (
    <footer
      className="bg-white text-black px-6 lg:px-16 pt-14 pb-6 border-t border-gray-200"
      id="footer"
    >
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 pb-10">
        {/* BRAND */}
        <div>
          <h1 className="text-3xl font-bold">
            <span className="text-[#041E54]">Poli</span>
            <span className="text-[#F28C00]">Tech</span> Solutions
          </h1>

          <p className="text-gray-600 mt-5 leading-relaxed max-w-md">
            PoliTech Solutions is an independent consulting platform providing
            strategic campaign support, voter engagement solutions, and
            political communication planning.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-xl font-semibold text-[#041E54] mb-5">
            Quick Links
          </h2>

          <div className="flex flex-col gap-3 text-gray-600">
            <a
              className="hover:text-[#F28C00] transition duration-300 cursor-pointer w-fit"
              href="#hero"
            >
              Home
            </a>

            <a
              className="hover:text-[#F28C00] transition duration-300 cursor-pointer w-fit "
              href="#footer"
            >
              About Us
            </a>

            <a
              className="hover:text-[#F28C00] transition duration-300 cursor-pointer w-fit"
              href="#services"
            >
              Services
            </a>

            <a
              className="hover:text-[#F28C00] transition duration-300 cursor-pointer w-fit"
              href="#services"
            >
              Strategies
            </a>

            <a
              className="hover:text-[#F28C00] transition duration-300 cursor-pointer w-fit"
              href="#footer"
            >
              Contact
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-xl font-semibold text-[#041E54] mb-5">
            Contact Information
          </h2>

          <div className="space-y-5">
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
              <p className="text-lg text-gray-700">Hyderabad, India</p>
            </div>
          </div>
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
