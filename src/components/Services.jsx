import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Megaphone,
  Users,
  Globe,
  BarChart3,
  Briefcase,
  Target,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Election Campaign Solutions",
    desc: "Campaign strategy planning, constituency-level support, booth coordination, and volunteer management.",
    icon: <Megaphone size={28} />,
  },
  {
    title: "Voter Intelligence & Research",
    desc: "Voter behavior analysis, local issue mapping, surveys, and data-driven campaign insights.",
    icon: <BarChart3 size={28} />,
  },
  {
    title: "Digital Campaign Solutions",
    desc: "Social media strategy, branding guidance, engagement planning, and content direction.",
    icon: <Globe size={28} />,
  },
  {
    title: "Public Engagement Solutions",
    desc: "Community outreach programs, public meetings, awareness campaigns, and event coordination.",
    icon: <Users size={28} />,
  },
  {
    title: "Communication & PR Solutions",
    desc: "Speech drafting, media communication planning, press releases, and image building support.",
    icon: <Briefcase size={28} />,
  },
  {
    title: "Campaign Management Support",
    desc: "Campaign timeline planning, task allocation, team coordination, and progress tracking.",
    icon: <Target size={28} />,
  },
];

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#services",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <section
      className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16 bg-gradient-to-b from-white to-[#f8fafc]"
      id="services"
    >
      {/* HEADING */}
      <div className="text-center mb-10 sm:mb-14">
        <p className="text-[#F28C00] uppercase tracking-[4px] text-xs font-semibold mb-3">
          What We Offer
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[font6] text-[#041E54] leading-tight">
          Our Services
        </h2>
        <p className="text-gray-500 mt-4 text-base lg:text-lg font-[font3] max-w-2xl mx-auto leading-relaxed">
          Strategic political consulting and campaign support solutions designed
          to strengthen outreach, communication, and campaign execution.
        </p>
      </div>

      {/* GRID — 1 col mobile → 2 col tablet → 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="
              group
              bg-white
              border border-gray-100
              rounded-2xl
              p-6 sm:p-7
              shadow-[0_4px_24px_rgba(0,0,0,0.05)]
              hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]
              hover:-translate-y-2
              transition-all duration-300
            "
          >
            {/* ICON */}
            <div className="w-12 h-12 rounded-xl bg-[#041E54]/5 flex items-center justify-center text-[#F28C00] mb-5 group-hover:scale-110 transition duration-300">
              {service.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg sm:text-xl font-bold text-[#041E54] mb-3 font-[font7] leading-snug">
              {service.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-500 leading-relaxed font-[font3] text-sm sm:text-base">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
