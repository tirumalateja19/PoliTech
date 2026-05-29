import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import image from "../assets/image.png";

const Hero = () => {
  const titleRef = useRef(null);
  const bottomRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        x: -80,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(bottomRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.85,
        duration: 1.3,
        delay: 0.4,
        ease: "expo.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="min-h-[90vh] flex flex-col justify-center text-base-content px-5 sm:px-8 lg:px-20 pt-10 pb-10 lg:pt-4 lg:pb-0"
      id="hero"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-8 lg:gap-4">
        {/* BADGE */}
        <div className="flex justify-center">
          <div className="inline-block px-5 py-2 rounded-full bg-[#041E54]/10 border border-[#041E54]/10 shadow-sm">
            <p className="text-sm font-semibold text-[#041E54]/80 tracking-wide">
              Political Consulting Platform
            </p>
          </div>
        </div>

        {/* HEADLINE */}
        <div
          ref={titleRef}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center sm:items-baseline gap-2 sm:gap-3 lg:gap-5 text-center"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-[font2] leading-tight text-[#041E54]/95">
            We Focus On
          </h1>

          <div className="h-12 sm:h-16 lg:h-24 overflow-hidden flex items-center">
            <span className="text-rotate text-2xl sm:text-4xl lg:text-6xl font-[font3] text-[#F28C00]">
              <span>
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

        {/* CONTENT */}
        <div
          ref={bottomRef}
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-24"
        >
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg gap-6 lg:ml-12">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-500 font-[font3]">
              PoliTech Solutions is a political consulting and campaign support
              platform providing structured solutions for candidates, leaders,
              and campaign teams.
            </p>

            <div className="space-y-3 font-[font2] w-full">
              <p className="text-base text-slate-600 font-semibold">
                Why Campaigns Trust Us
              </p>

              <ul className="space-y-2 text-sm">
                {[
                  "Structured & Research-Based Approach",
                  "Customized Strategies for Every Campaign",
                  "Focus on Execution & Results",
                ].map((point, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-center lg:justify-start gap-3 text-slate-500"
                  >
                    <span className="w-2 h-2 bg-[#F28C00] rounded-full shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <a href="#services">
              <button className="bg-[#F28C00] hover:bg-orange-500 transition duration-300 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 shadow-lg">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </a>
          </div>

          {/* IMAGE */}
          <div
            ref={imageRef}
            className="flex justify-center lg:justify-end shrink-0 mt-4 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#041E54]/20 blur-3xl rounded-full scale-110" />

              <div className="hover-3d">
                <figure className="w-65 sm:w-[320px] lg:w-95 rounded-2xl">
                  <img
                    src={image}
                    alt="Political Campaign"
                    className="shadow-2xl w-full h-auto"
                  />
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
      </div>
    </section>
  );
};

export default Hero;
