import img from "../assets/img.jpeg"
const Hero = () => {
  return (
    <section
      className="min-h-screen text-base-content px-8 lg:px-20 py-16 flex items-center"
      id="hero"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <div className="space-y-10">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-[#041E54]/95">
              We focus on
            </h1>

            <div className="h-24 mt-4 overflow-hidden">
              <div className="text-primary text-4xl lg:text-6xl font-bold animate-pulse ">
                <span className="text-rotate text-3xl sm:text-4xl lg:text-6xl text-[#F28C00]">
                  <span className="justify-items-end">
                    <span>STRATEGY</span>
                    <span>DIGITAL CAMPAIGNS</span>
                    <span>VOTER ENGAGEMENT</span>
                    <span>COMMUNICATION</span>
                    <span>PUBLIC OUTREACH</span>
                    <span>RESEARCH</span>
                  </span>
                </span>
              </div>
            </div>
          </div>

          <p className="text-lg lg:text-2xl leading-relaxed text-gray-500 max-w-xl">
            PoliTech Solutions is a political consulting and campaign support
            platform providing structured solutions for candidates, leaders, and
            campaign teams.
          </p>

          <div className="flex gap-4">
            <a href="#services">
              <button className="bg-[#F28C00] hover:bg-orange-500 transition duration-300 text-white px-6 py-3 rounded-xl font-semibold">
                Explore Services
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative ">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full "></div>

            <div className="hover-3d">
              {/* content */}
              <figure className="max-w-100 rounded-2xl">
                <img src={img} alt="3D card" className="shadow-2xl" />
              </figure>
              {/* 8 empty divs needed for the 3D effect */}
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
