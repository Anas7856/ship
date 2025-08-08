import React from "react";
import { Users, Award, Globe, Handshake, Star } from "lucide-react";

const partnerLogos = [
  { src: "/logo1.jpg", alt: "Partner 1" },
  { src: "/logo2.jpg", alt: "Partner 2" },
  { src: "/logo3.jpg", alt: "Partner 3" },
];

const PartnersSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Trusted By Industry Leaders
          </p>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Partners
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto my-4 rounded" />
          <p className="text-gray-500">
            We collaborate with the best in the industry to deliver exceptional service
          </p>
        </div>

        {/* Partner Logos Slider */}
        <div className="overflow-hidden w-full max-w-3xl mx-auto mb-12">
          <div className="flex animate-partner-marquee whitespace-nowrap">
            {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
              <div className="flex-shrink-0 px-8" key={idx}>
                <img src={logo.src} alt={logo.alt} className="h-16 w-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Partner Features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-gray-600">
          <div className="flex flex-col items-center">
            {/* <Users className="w-8 h-8 text-indigo-500" /> */}
            {/* <p className="mt-2 text-sm">Global Clients</p> */}
          </div>
          <div className="flex flex-col items-center">
            {/* <Award className="w-8 h-8 text-indigo-500" /> */}
            {/* <p className="mt-2 text-sm">Award Winning</p> */}
          </div>
          <div className="flex flex-col items-center">
            {/* <Globe className="w-8 h-8 text-indigo-500" /> */}
            {/* <p className="mt-2 text-sm">Worldwide Network</p> */}
          </div>
          <div className="flex flex-col items-center">
            {/* <Handshake className="w-8 h-8 text-indigo-500" /> */}
            {/* <p className="mt-2 text-sm">Reliable Partnerships</p> */}
          </div>
          <div className="flex flex-col items-center">
            {/* <Star className="w-8 h-8 text-indigo-500" /> */}
            {/* <p className="mt-2 text-sm">Top Rated</p> */}
          </div>
        </div>
      </div>
      {/* Marquee Animation CSS */}
      <style>{`
        @keyframes partner-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-partner-marquee {
          animation: partner-marquee 18s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
