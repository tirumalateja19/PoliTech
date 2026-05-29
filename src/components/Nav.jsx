import { Menu } from "lucide-react";
import PoliTech_bg from "../assets/PoliTech_bg.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
const Nav = () => {
  const contactEmail = "info@politechsolutions.com";
  // const contactLink =
  //   "https://mail.google.com/mail/?view=cm&fs=1&to=info@politechsolutions.com";

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
      className="w-full sticky top-0 z-50 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <div>
            <img src={PoliTech_bg} alt="3D card" className="w-22 h-16 " />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10 text-[#041E54]/95 font-[font4]">
            <a
              className="hover:text-[#F28C00] transition duration-300 cursor-pointer"
              href="#hero"
            >
              Home
            </a>
            <a
              className="hover:text-[#F28C00] transition duration-300 cursor-pointer"
              href="#footer"
            >
              About Us
            </a>
            <a
              className="hover:text-[#F28C00] transition duration-300 cursor-pointer"
              href="#services"
            >
              Services
            </a>
            <a
              className="hover:text-[#F28C00] transition duration-300 cursor-pointer"
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
          <div className="dropdown dropdown-end lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer text-black"
            >
              <Menu size={30} />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-[#041E54] rounded-2xl z-100 w-56 p-4 shadow-xl mt-4 right-0 text-white"
            >
              <li>
                <a
                  className="hover:text-[#F28C00] transition duration-300 cursor-pointer"
                  href="#hero"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#F28C00] transition duration-300 cursor-pointer"
                  href="#footer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#F28C00] transition duration-300 cursor-pointer"
                  href="#services"
                >
                  Services
                </a>
              </li>
              {/* <li>
                <a className="hover:text-[#F28C00]">Strategies</a>
              </li> */}

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
