import founderImg from "../assets/founder.PNG";

const Footer = () => {
  return (
    <footer
      className="bg-linear-to-b from-white to-[#f8fafc] px-6 lg:px-16 pt-16 pb-6 border-t border-gray-100"
      id="footer"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 pb-14">
        <div>
          <h2 className="text-3xl font-bold">
            <span className="text-[#041E54]">Poli</span>
            <span className="text-[#F28C00]">Tech</span> Solutions
          </h2>

          <p className="text-gray-500 mt-5 leading-relaxed text-base font-[font3] max-w-sm">
            An independent consulting platform providing strategic campaign
            support, voter engagement solutions, and political communication
            planning.
          </p>

          <div className="mt-8 inline-block px-4 py-2 rounded-full bg-[#041E54]/5 border border-[#041E54]/10">
            <p className="text-sm text-[#041E54]/80 font-medium tracking-wide">
              Strategies Today, Victory Tomorrow.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-[4px] mb-6">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4 text-gray-600 font-[font3]">
            <a
              href="#hero"
              className="hover:text-[#F28C00] transition duration-300 w-fit"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-[#F28C00] transition duration-300 w-fit"
            >
              About Us
            </a>

            <a
              href="#services"
              className="hover:text-[#F28C00] transition duration-300 w-fit"
            >
              Services
            </a>

            <a
              href="#strategies"
              className="hover:text-[#F28C00] transition duration-300 w-fit"
            >
              Strategies
            </a>

            <a
              href="#contact"
              className="hover:text-[#F28C00] transition duration-300 w-fit"
            >
              Contact
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-[4px] mb-6">
            Founder
          </h3>

          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-4">
              <img
                src={founderImg}
                alt="Founder"
                className="w-55 h-55 rounded-2xl ml-14 object-cover border border-gray-300"
              />
            </div>

            <div className="mt-6 space-y-5 text-sm text-center">
              <div>
                <div>
                  <h4 className="text-xl font-bold text-[#041E54]">
                    Shiva Mani Vallala
                  </h4>
                </div>
                <p className="text-[#F28C00] text-lg mt-1 font-medium">
                  Founder & Strategic Consultant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-200 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-400">
        <p>© 2026 PoliTech Solutions. All rights reserved.</p>

        <p className="text-center">
          Independent political consulting platform.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
