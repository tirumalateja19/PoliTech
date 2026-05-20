import imgage from "../assets/image.png";
import {ArrowRight} from "lucide-react"
const Hero = () => {
  return (
    <section
      className="min-h-screen text-base-content px-8 lg:px-20 py-16 flex items-center"
      id="hero"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:pl-12 gap-16">
        <div className="space-y-1 flex-1">
          {/* <div className="inline-block px-4 py-2 mb-4 bg-[#F28C00] hover:bg-orange-500 transition duration-300 rounded-full">
            <span className="text-sm font-semibold text-white">
              Political Consulting Platform
            </span>
          </div> */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-[font2] leading-tight text-[#041E54]/95">
              We Focus On
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
              <button className="bg-[#F28C00] hover:bg-orange-500 transition duration-300 text-white px-6 py-3 rounded-xl font-semibold mt-8 flex items-center justify-center gap-2">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>
          <div className="pt-10 space-y-3 font-[font2]">
            <p className="text-lg text-slate-600 font-semibold">
              Why Campaigns Trust Us
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-3 text-slate-500">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Structured & Research-Based Approach
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Customized Strategies for Every Campaign
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Focus on Execution & Results
              </li>
            </ul>
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
