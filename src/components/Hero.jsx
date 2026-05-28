import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        x: -80,
        duration: 1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="min-h-[95vh] flex items-center justify-center text-base-content px-6 sm:px-8 lg:px-20 pt-10 lg:pt-0"
      id="hero"
    >
      <div className="w-full flex justify-center">
        <div className="space-y-8 flex flex-col items-center text-center max-w-6xl">
          <div className="inline-block px-5 py-2 rounded-full bg-[#041E54]/10 border border-[#041E54]/10 shadow-sm">
            <p className="text-sm font-semibold text-[#041E54]/80 tracking-wide">
              Political Consulting Platform
            </p>
          </div>

          <div
            ref={titleRef}
            className="flex justify-center items-center w-full"
          >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-[font2] leading-tight text-[#041E54]/95 whitespace-nowrap">
                We Focus On
              </h1>

              <div className="h-20 lg:h-24 overflow-hidden flex items-center">
                <div className="text-primary text-4xl lg:text-6xl font-[font3] animate-pulse">
                  <span className="text-rotate text-3xl sm:text-4xl lg:text-6xl text-[#F28C00]">
                    <span className="justify-items-start">
                      <span>DIGITAL CAMPAIGNS</span>
                      <span>VOTER ENGAGEMENT</span>
                      <span>COMMUNICATION</span>
                      <span>PUBLIC OUTREACH</span>
                      <span>STRATEGY</span>
                      <span>RESEARCH</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-500 max-w-3xl font-[font3] px-2">
            PoliTech Solutions is a political consulting and campaign support
            platform providing structured solutions for candidates, leaders, and
            campaign teams.
          </p>

          <div className="pt-4 space-y-3 font-[font2] flex flex-col items-center">
            <p className="text-lg text-slate-600 font-semibold">
              Why Campaigns Trust Us
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-3 text-slate-500">
                <span className="w-2 h-2 bg-[#F28C00] rounded-full shrink-0"></span>
                Structured & Research-Based Approach
              </li>

              <li className="flex items-center gap-3 text-slate-500">
                <span className="w-2 h-2 bg-[#F28C00] rounded-full shrink-0"></span>
                Customized Strategies for Every Campaign
              </li>

              <li className="flex items-center gap-3 text-slate-500">
                <span className="w-2 h-2 bg-[#F28C00] rounded-full shrink-0"></span>
                Focus on Execution & Results
              </li>
            </ul>
          </div>

          <a href="#services">
            <button className="bg-[#F28C00] hover:bg-orange-500 transition duration-300 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 shadow-lg">
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
