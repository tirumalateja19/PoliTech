import { Menu } from "lucide-react";

const Nav = () => {
  return (
    <nav className="w-full sticky top-0 z-50 bg-[#041E54]/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-white cursor-pointer">
              <span>Poli</span>
              <span className="text-[#F28C00]">Tech</span>
            </h1>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10 text-white font-medium">
            <a className="hover:text-[#F28C00] transition duration-300 cursor-pointer">
              Home
            </a>

            <a className="hover:text-[#F28C00] transition duration-300 cursor-pointer">
              About Us
            </a>

            <a className="hover:text-[#F28C00] transition duration-300 cursor-pointer">
              Services
            </a>

            <a className="hover:text-[#F28C00] transition duration-300 cursor-pointer">
              Strategies
            </a>

            <button className="bg-[#F28C00] hover:bg-orange-500 text-white px-5 py-2 rounded-xl transition duration-300">
              Contact Us
            </button>
          </div>

          {/* MOBILE MENU */}
          <div className="dropdown dropdown-end lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer text-white"
            >
              <Menu size={30} />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-[#041E54] rounded-2xl z-[100] w-56 p-4 shadow-xl mt-4 right-0 text-white"
            >
              <li>
                <a className="hover:text-[#F28C00]">Home</a>
              </li>

              <li>
                <a className="hover:text-[#F28C00]">About Us</a>
              </li>

              <li>
                <a className="hover:text-[#F28C00]">Services</a>
              </li>

              <li>
                <a className="hover:text-[#F28C00]">Strategies</a>
              </li>

              <li className="mt-3">
                <button className="bg-[#F28C00] hover:bg-orange-500 text-white py-2 rounded-xl w-full">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
