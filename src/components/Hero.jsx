import imgage from "../assets/image.png"
const Hero = () => {
  return (
    <section
      className="min-h-screen text-base-content px-8 lg:px-20 py-16 flex items-center"
      id="hero"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:pl-12 gap-16">
        <div className="space-y-1 flex-1">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-[font2] leading-tight text-[#041E54]/95">
              We focus on
            </h1>

            <div className="h-24 mt-4 overflow-hidden">
              <div className="text-primary text-4xl lg:text-6xl font-[font3] animate-pulse ">
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

          <p className="text-lg lg:text-2xl leading-relaxed text-gray-500 max-w-xl font-[font3]">
            PoliTech Solutions is a political consulting and campaign support
            platform providing structured solutions for candidates, leaders, and
            campaign teams.
          </p>

          <div className="flex gap-4">
            <a href="#services">
              <button className="bg-[#F28C00] hover:bg-orange-500 transition duration-300 text-white px-6 py-3 rounded-xl font-semibold mt-8">
                Explore Services
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center flex-1 lg:justify-end">
          <div className="relative ">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full "></div>

            <div className="hover-3d">
              <figure className="max-w-100 rounded-2xl">
                <img src={imgage} alt="3D card" className="shadow-2xl" />
              </figure>
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
