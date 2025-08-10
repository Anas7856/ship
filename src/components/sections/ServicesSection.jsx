import React from "react";
import { Truck, Package, Shield, Star } from "lucide-react";
import ser1 from "../../../public/ser1.jpg";
import ser2 from "../../../public/ser2.jpg";
import ser3 from "../../../public/ser3.jpg";
const ServicesSection = () => {
  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Dedicated Lanes",
      description:
        "We provide reliable and consistent trucking services for dedicated lanes, ensuring seamless, on-time deliveries tailored to your specific route needs. Whether you're shipping regionally or across the country, our dedicated lanes offer the flexibility and reliability your business depends on.",
      image: ser1,
      color: "blue",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Amazon Loads",
      description:
        "We specialize in handling Amazon loads with precision and efficiency. Our drivers are experienced in meeting Amazon's strict delivery requirements, ensuring your shipments are delivered on time and in perfect condition. Trust us for smooth and timely deliveries that keep your supply chain moving.",
      image: ser2,
      color: "green",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Government Contracts",
      description:
        "As a trusted Broker, we provide expert logistics solutions for government contracts, handling everything from sensitive materials to large-scale shipments. We ensure compliance with all regulations and deadlines, delivering your cargo safely and on time.",
      image: ser3,
      color: "purple",
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        iconBg: "bg-blue-100",
        iconText: "text-blue-600",
        accent: "text-blue-900",
      },
      green: {
        bg: "bg-green-50",
        iconBg: "bg-green-100",
        iconText: "text-green-600",
        accent: "text-green-900",
      },
      purple: {
        bg: "bg-purple-50",
        iconBg: "bg-purple-100",
        iconText: "text-purple-600",
        accent: "text-purple-900",
      },
    };
    return colorMap[color];
  };

  return (
    <section id="offerings" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            What we are Offering!
          </h2>
          <div className="w-24 h-1 bg-blue-200 rounded mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Valhalla Logistic LLC specializes in managing the transportation,
            storage, and distribution of goods with unmatched efficiency.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid lg:grid-cols-3 gap-8 offerings-grid">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className={`${colors.bg} p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group fade-in-up offering-card flex flex-col items-center`}
              >
                <div
                  className={`${colors.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-4 offering-icon`}
                >
                  <div className={colors.iconText}>{service.icon}</div>
                </div>
                <div className="offering-image mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-40 h-28 object-cover rounded-lg shadow"
                  />
                </div>
                <div className="offering-content text-center">
                  <h3 className={`text-2xl font-bold ${colors.accent} mb-3`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
