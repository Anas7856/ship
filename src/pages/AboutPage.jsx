import React from "react";
import { Star, Handshake, Clock, FileText, Mail } from "lucide-react";
import dri from "../../public/dri.jpg";
import ser2 from "../../public/ser2.jpg";
import ser3 from "../../public/ser3.jpg";
import ser4 from "../../public/ser4.jpg";
const leadershipTeam = [
  {
    name: "John Doe",
    position: "Chief Executive Officer",
    bio: "With over 15 years of experience in logistics and transportation, John leads our company with vision and expertise.",
    image: ser2,
  },
  {
    name: "Jane Smith",
    position: "Operations Director",
    bio: "Jane ensures that our operations run smoothly and efficiently, maintaining our high standards of service.",
    image: ser3,
  },
  {
    name: "Michael Johnson",
    position: "Customer Relations Manager",
    bio: "Michael is dedicated to ensuring our clients receive exceptional service and support.",
    image: ser4,
  },
];

const values = [
  {
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service.",
  },
  {
    icon: <Handshake className="w-6 h-6 text-blue-500" />,
    title: "Integrity",
    description:
      "We operate with honesty and transparency in all our dealings.",
  },
  {
    icon: <Clock className="w-6 h-6 text-green-500" />,
    title: "Reliability",
    description:
      "We deliver on our promises, ensuring timely and dependable service.",
  },
];

const AboutPage = () => (
  <main className="about-page">
    {/* About Section */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <img
            src={dri}
            alt="New Generation Brokerage Team"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="flex-1">
          <span className="text-blue-700 font-semibold uppercase tracking-wide">
            Our Story
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-3">Who We Are</h2>
          <div className="w-16 h-1 bg-blue-200 mb-6"></div>
          <p className="text-gray-700 mb-4">
            VALHALLA LOGISTICS LLC. was founded with a vision to revolutionize
            the logistics and transportation industry. Our journey began with a
            simple mission: to provide reliable, efficient, and cost-effective
            brokerage services that connect businesses with the right carriers
            for their shipping needs.
          </p>
          <p className="text-gray-700">
            With years of experience in the industry, our team of dedicated
            professionals understand the challenges businesses face when it
            comes to shipping and logistics. We've built our reputation on
            trust, reliability, and exceptional customer service.
          </p>
        </div>
      </div>
    </section>

    {/* Mission & Vision Section */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="flex-1">
          <img
            src={ser3}
            alt="Our Mission"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="flex-1">
          <span className="text-blue-700 font-semibold uppercase tracking-wide">
            Our Purpose
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-3">Mission & Vision</h2>
          <div className="w-16 h-1 bg-blue-200 mb-6"></div>
          <p className="mb-2">
            <strong>Our Mission:</strong> To provide innovative logistics
            solutions that optimize supply chains, reduce costs, and improve
            efficiency for businesses of all sizes.
          </p>
          <p className="mb-6">
            <strong>Our Vision:</strong> To become the leading brokerage company
            known for reliability, transparency, and customer satisfaction in
            the transportation industry.
          </p>
          <div className="space-y-4">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-white rounded-lg p-4 shadow-sm"
              >
                <div>{value.icon}</div>
                <div>
                  <h4 className="font-semibold">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-700 font-semibold uppercase tracking-wide">
            The People Behind Our Success
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-3">Our Leadership Team</h2>
          <div className="w-16 h-1 bg-blue-200 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadershipTeam.map((member, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-100"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-700 font-medium mb-2">
                {member.position}
              </p>
              <p className="text-gray-600 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to experience our services?
        </h2>
        <p className="mb-8 text-blue-100">
          Contact us today to learn how we can help optimize your shipping and
          logistics operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/agreement"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg"
          >
            <FileText className="w-5 h-5 mr-2" /> Send an Agreement
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200 font-semibold text-lg"
          >
            <Mail className="w-5 h-5 mr-2" /> Contact Us
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default AboutPage;
