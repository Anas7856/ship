import React from "react";
import {
  ArrowRight,
  Shield,
  Clock,
  Users,
} from "lucide-react";

// Import sections
import TrackingSection from "../components/sections/TrackingSection";
import PartnersSection from "../components/sections/PartnersSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ServicesSection from "../components/sections/ServicesSection";
import truck from "../assets/truck.jpeg";
import PlatformworksSection from "../components/sections/PlatformworksSection";
import SteamedSection from "../components/sections/SteamedSection";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Video Carousel Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden min-h-screen flex items-center justify-center p-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <iframe
              src="https://www.youtube.com/embed/FikkQTfbaOs?autoplay=1&mute=1&loop=1&playlist=FikkQTfbaOs&controls=0&showinfo=0&rel=0"
              title="Logistics Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h2 className="text-4xl text-center sm:text-5xl lg:text-6xl font-bold text-white drop-shadow mb-20">
            Welcome to Our Services
          </h2>
          <p className="text-lg text-center sm:text-2xl lg:text-3xl text-white font-medium drop-shadow">
            Fast and Reliable and Efficient
          </p>
        </div>
      </section>

      {/* Hero Text/Video Carousel Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-blue-600" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-12"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
                82.39-16.72,168.19-17.73,250.45-.39,
                80.94,16.86,163.83,57.87,242.82,78.7,
                70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,
                600.21,0,0,0,321.39,56.44Z"
              fill="currentColor"
              className="text-white"
            />
          </svg>
        </div>
      </section>

      {/* Other Sections */}
      <TrackingSection />
      <PartnersSection />
      <PlatformworksSection />
      <SteamedSection/>
      <ServicesSection />
      <TestimonialsSection />

    </div>
  );
};

export default HomePage;
