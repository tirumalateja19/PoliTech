import { Menu } from "lucide-react";
import PoliTech_bg from "../assets/PoliTech_bg.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Nav = () => {
  const contactEmail = "info@politechsolutions.com";

  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power2.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="w-full sticky top-0 z-50 backdrop-blur-md shadow-md bg-white/90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <img
              src={PoliTech_bg}
              alt="PoliTech Logo"
              className="w-14 h-10 sm:w-20 sm:h-14 object-contain shrink-0"
            />

            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold truncate">
              <span className="text-[#041E54]">Poli</span>
              <span className="text-[#F28C00]">Tech</span> Solutions
            </h2>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10 text-[#041E54]/95 font-[font4]">
            <a
              className="hover:text-[#F28C00] transition duration-300"
              href="#hero"
            >
              Home
            </a>

            <a
              className="hover:text-[#F28C00] transition duration-300"
              href="#footer"
            >
              About Us
            </a>

            <a
              className="hover:text-[#F28C00] transition duration-300"
              href="#services"
            >
              Services
            </a>

            <a
              className="hover:text-[#F28C00] transition duration-300"
              href="#services"
            >
              Strategies
            </a>

            <a
              href="#contact"
              className="bg-[#F28C00] hover:bg-orange-500 text-white px-5 py-2 rounded-xl transition duration-300 inline-block"
            >
              Contact Us
            </a>
          </div>

          {/* MOBILE MENU */}
          <div className="dropdown dropdown-end lg:hidden shrink-0">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer text-[#041E54] p-1"
            >
              <Menu size={28} />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-[#041E54] rounded-2xl z-100 w-56 p-4 shadow-xl mt-4 right-0 text-white"
            >
              <li>
                <a
                  href="#hero"
                  className="hover:text-[#F28C00] transition duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#footer"
                  className="hover:text-[#F28C00] transition duration-300"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-[#F28C00] transition duration-300"
                >
                  Services
                </a>
              </li>

              <li className="mt-3">
                <a
                  href={`mailto:${contactEmail}`}
                  className="bg-[#F28C00] hover:bg-orange-500 text-white py-2 rounded-xl text-center"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
