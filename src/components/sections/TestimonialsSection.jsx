import React from "react";
import { Star, Quote, Users } from "lucide-react";
import truck from "../../assets/second.jpeg";
import { Link } from "react-router-dom";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Davis",
      company: "Freight Solutions Inc.",
      role: "Operations Manager",
      content:
        "Valhalla Logistic LLC has been our go-to logistics partner for over two years. Their reliability and efficiency have helped us streamline our operations significantly.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      name: "Sarah Mitchell",
      company: "Global Trade Corp",
      role: "Supply Chain Director",
      content:
        "The team at Valhalla understands our business needs perfectly. Their Amazon load handling service has been exceptional, with zero delivery issues.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Rodriguez",
      company: "Express Carriers LLC",
      role: "Fleet Manager",
      content:
        "Professional service, transparent pricing, and excellent communication. They've handled our government contracts flawlessly for the past year.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];

  const stats = [
    // {
    //   icon: <Users className="w-8 h-8" />,
    //   number: "500+",
    //   label: "Happy Clients",
    //   description: "Satisfied customers worldwide",
    // },
    // {
    //   icon: <Star className="w-8 h-8" />,
    //   number: "4.9/5",
    //   label: "Customer Rating",
    //   description: "Based on 1000+ reviews",
    // },
    // {
    //   icon: <Quote className="w-8 h-8" />,
    //   number: "98%",
    //   label: "Retention Rate",
    //   description: "Clients who stay with us",
    // },
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            See who is walking this path with us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Reviews
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Watch the video and understand why thousands of people are already
            using our services and are protected.
          </p>
        </div>

        {/* Decorative Pulsing Circles */}
        <div className="absolute top-6 left-6 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-6 right-6 w-3 h-3 bg-green-500 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-6 left-6 w-5 h-5 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-6 right-6 w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-1500"></div>

        {/* Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-200"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{stat.icon}</div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <div className="mb-6">
                <Quote className="w-8 h-8 text-blue-200 mb-3" />
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-blue-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Join Our Satisfied Customers
              </h3>
              <p className="text-base sm:text-lg lg:text-xl mb-8 opacity-90">
                Experience the reliability and efficiency that has made
                thousands of businesses trust us with their logistics needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={"/agreement"}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-sm sm:text-lg"
                >
                  Start Your Partnership
                </Link>
                <Link
                  to={"/contact"}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200 font-semibold text-sm sm:text-lg"
                >
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
