import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "info@politechsolutions.com",
    href: "mailto:info@politechsolutions.com",
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "+91 90632 22721",
    href: "tel:+919063222721",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Hyderabad, Telangana, India",
    href: null,
  },
];

const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // Temporary fake submit
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section
      className="bg-gradient-to-b from-white to-[#f8fafc] py-20 px-6 lg:px-16"
      id="contact"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="text-[#F28C00] uppercase tracking-[4px] text-xs font-semibold mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl lg:text-5xl font-[font6] text-[#041E54] leading-tight">
            Let&apos;s Discuss Your Campaign Strategy
          </h2>

          <p className="text-gray-500 mt-5 text-base lg:text-lg leading-relaxed max-w-md font-[font3]">
            Reach out for strategic political consulting, voter engagement
            planning, and campaign management solutions tailored to your goals.
          </p>

          {/* CONTACT INFO */}
          <div className="mt-10 space-y-5">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#041E54]/6 flex items-center justify-center text-[#F28C00] shrink-0 mt-0.5">
                  {item.icon}
                </div>

                <div>
                  <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-[#F28C00] transition-colors duration-300 font-[font3]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-700 font-[font3]">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.07)] border border-gray-100">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-[#041E54] font-[font6]">
                Message Sent!
              </h3>

              <p className="text-gray-500 font-[font3] text-sm max-w-xs">
                Thank you for reaching out. We&apos;ll get back to you within 24
                hours.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="text-[#F28C00] text-sm font-semibold hover:underline mt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-[#041E54] mb-6 font-[font6]">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  {
                    type: "text",
                    placeholder: "Full Name",
                    required: true,
                  },
                  {
                    type: "email",
                    placeholder: "Email Address",
                    required: true,
                  },
                  {
                    type: "tel",
                    placeholder: "Phone Number",
                    required: false,
                  },
                  {
                    type: "text",
                    placeholder: "Organization / Party Name",
                    required: false,
                  },
                  {
                    type: "text",
                    placeholder: "Subject",
                    required: true,
                  },
                ].map((field, i) => (
                  <input
                    key={i}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full border border-gray-200 bg-[#fafafa] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#F28C00] focus:bg-white transition-colors duration-200 font-[font3] text-gray-700 placeholder:text-gray-400"
                  />
                ))}

                <textarea
                  rows={4}
                  placeholder="Message"
                  required
                  className="w-full border border-gray-200 bg-[#fafafa] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#F28C00] focus:bg-white transition-colors duration-200 font-[font3] text-gray-700 placeholder:text-gray-400 resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#F28C00] hover:bg-orange-500 disabled:opacity-70 text-white px-6 py-3 rounded-xl transition-colors duration-300 font-semibold flex items-center justify-center gap-2"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
