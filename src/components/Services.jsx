const services = [
  {
    title: "Election Campaign Solutions",
    desc: "Campaign strategy planning, constituency-level support, booth coordination, and volunteer management.",
  },
  {
    title: "Voter Intelligence & Research",
    desc: "Voter behavior analysis, local issue mapping, surveys, and data-driven campaign insights.",
  },
  {
    title: "Digital Campaign Solutions",
    desc: "Social media strategy, branding guidance, engagement planning, and content direction.",
  },
  {
    title: "Public Engagement Solutions",
    desc: "Community outreach programs, public meetings, awareness campaigns, and event coordination.",
  },
  {
    title: "Communication & PR Solutions",
    desc: "Speech drafting, media communication planning, press releases, and image building support.",
  },
  {
    title: "Campaign Management Support",
    desc: "Campaign timeline planning, task allocation, team coordination, and progress tracking.",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-12 px-6 lg:px-16" id="services">
      <div className="text-center mb-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#041E54]">
          Our Services
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Strategic political consulting and campaign support solutions
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full sm:w-85 bg-gray-50 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <div className="p-7 flex flex-col h-full">
              <h2 className="text-2xl font-bold text-[#F28C00] mb-4">
                {service.title}
              </h2>

              <p className="text-gray-600 leading-relaxed grow">
                {service.desc}
              </p>

              {/* <button className="mt-6 w-fit bg-[#041E54] hover:bg-[#0A2A6B] text-white px-5 py-2 rounded-xl transition duration-300">
                Learn More
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
