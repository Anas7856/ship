import React from "react";
import {
  FileText,
  Mail,
  Phone,
  Globe,
  Headset,
  Truck,
  Shield,
  Star,
} from "lucide-react";
import ser2 from "../../public/ser2.jpg";
import huru from "../../public/huru.jpg";
import ser3 from "../../public/ser3.jpg";
import ser4 from "../../public/ser4.jpg";
import ser5 from "../../public/ser5.jpg";
import { Link } from "react-router-dom";
const images = {
  ending1: ser2,
  ending2: huru,
  ending3: ser3,
  person: ser4,
  ship: ser5,
};

const sectionClass = "bg-sky-100 rounded-xl p-8 md:p-12 shadow space-y-6";

const ServicesContainer = () => (
  <div className="space-y-12">
    {/* First Section */}
    <form className={sectionClass}>
      <section className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <span className="text-blue-700 font-semibold uppercase">
            Our services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            International services Ocean and air freight!
          </h2>
          <div className="w-16 h-1 bg-blue-200 rounded mb-4"></div>
          <p>
            Valhalla Logistic LLC understands the importance of all facets of
            the supply chain. That's why we offer international freight services
            tailored for businesses with global shipping needs. Our expertise
            ensures your products reach their destination on time and in
            excellent condition. International freight shipping plays a crucial
            role in the global supply chain, facilitating trade across borders.
            At Valhalla Logistic LLC, we recognize its significance for
            businesses looking to expand globally.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              to={"/agreement"}
              className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 font-semibold"
            >
              <FileText className="w-5 h-5 mr-2" /> Send an Agreement
            </Link>
            <Link
              to={"/contact"}
              className="inline-flex items-center px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-900 hover:text-white font-semibold"
            >
              <Mail className="w-5 h-5 mr-2" /> Contact us
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={images.ending1}
            alt="Container port with colorful shipping containers"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </section>
    </form>

    {/* Reasons Section */}
    <form className={sectionClass}>
      <section>
        <div className="text-center mb-12">
          <span className="text-blue-700 font-semibold uppercase">
            On the same as thousands of customers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            3 reasons for why choose Valhalla Logistic LLC for international
            freight?
          </h2>
          <div className="w-16 h-1 bg-blue-200 rounded mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative flex-1">
            <img
              src={images.person}
              alt="Truck driver"
              className="rounded-xl w-full"
            />
            <div className="absolute top-4 left-4 flex items-center bg-white rounded-full shadow px-3 py-1">
              <Truck className="w-5 h-5 text-blue-700 mr-2" />
              <span className="font-medium text-blue-700">Safe Logistics</span>
            </div>
            <div className="absolute bottom-4 right-4 flex items-center bg-white rounded-full shadow px-3 py-1">
              <Shield className="w-5 h-5 text-blue-700 mr-2" />
              <span className="font-medium text-blue-700">24/7 Protection</span>
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-full p-3">
                <Star className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Competitive pricing and flexible solutions
                </h3>
                <p>
                  Valhalla Logistic LLC offers competitive pricing and flexible
                  solutions to meet the needs of all sizes. We work with you to
                  understand your unique requirements and develop customized
                  solutions that meet your needs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-full p-3">
                <Shield className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Advanced security and safety measures for peace of mind
                </h3>
                <p>
                  Using a knowledgeable and expert customs broker can assist you
                  with tariffs, duties, taxes, and other international shipping
                  requirements. Our team will be able to answer your questions
                  and help you successfully plan your shipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>

    {/* Commitment Section */}
    <form className={sectionClass}>
      <section>
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="text-blue-700 font-semibold uppercase">
              Our Commitment!
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Commitment to Quality!
            </h2>
            <div className="w-16 h-1 bg-blue-200 rounded mb-4"></div>
            <p>
              Valhalla Logistic LLC is committed to providing the highest
              quality international freight services to our clients. We
              understand that your cargo is valuable, and we take every
              precaution to ensure it arrives at its destination safely and
              securely. Our team of experienced professionals is dedicated to
              providing exceptional customer service and support throughout the
              shipping process.
            </p>
            <p>
              We work closely with our clients to understand their unique needs
              and develop customized solutions that meet those needs efficiently
              and cost-effectively. Our commitment to quality extends to every
              aspect of our business, from our customer service to our
              operational processes. We are constantly striving to improve our
              services and provide the best possible experience for our clients.
              When you choose Valhalla Logistic LLC, you can trust that your
              cargo will be handled securely. Our commitment to quality and
              reliability gives you confidence in us to deliver exceptional
              international freight solutions that meet your unique needs.
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                to={"/agreement"}
                className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 font-semibold"
              >
                <FileText className="w-5 h-5 mr-2" /> Send an Agreement
              </Link>
              <Link
                to={"/contact"}
                className="inline-flex items-center px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-900 hover:text-white font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" /> Contact us
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={images.ending2}
              alt="Cargo ship at port"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>
    </form>

    {/* Services Section */}
    <form className={sectionClass}>
      <section>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src={images.ending3}
              alt="Shipping containers at port"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div className="flex-1 space-y-6">
            <span className="text-blue-700 font-semibold uppercase">
              Our Services!
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our International Freight Services!
            </h2>
            <div className="w-16 h-1 bg-blue-200 rounded mb-4"></div>
            <p>
              Valhalla Logistic LLC offers a wide range of international freight
              solutions that cater to businesses of all sizes. Whether by air,
              ocean, or ground, we provide flexible shipping options to ensure
              your goods reach their destination efficiently and safely. Our
              services, combined with the expertise of our in-house customs
              broker, guarantee that your freight will arrive on time and in
              excellent condition.
            </p>
            <p>
              Our dedicated team of international logistics professionals and
              experienced customs brokers is committed to providing personalized
              service. We collaborate closely with you to understand your
              specific needs and craft tailored solutions that enhance your
              supply chain and improve operational efficiency. With Valhalla
              Logistic LLC, you can rest assured that your international freight
              is in the most capable hands.
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                to={"/agreement"}
                className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 font-semibold"
              >
                <FileText className="w-5 h-5 mr-2" /> Send an Agreement
              </Link>
              <Link
                to={"/contact"}
                className="inline-flex items-center px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-900 hover:text-white font-semibold"
              >
                <Globe className="w-5 h-5 mr-2" /> Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </form>

    {/* Expertise Section */}
    <form className={sectionClass}>
      <section>
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <img
              src={images.ship}
              alt="Container ship at sea during sunset"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div className="flex-1 space-y-6">
            <span className="text-blue-700 font-semibold uppercase">
              Our Transport Expertise!
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our International Transport Expertise!
            </h2>
            <div className="w-16 h-1 bg-blue-200 rounded mb-4"></div>
            <p>
              Valhalla Logistic LLC has decades of experience in international
              logistics and transportation. Our highly trained and experienced
              team of international freight forwarders, customs broker, and
              logistics professionals are dedicated to delivering exceptional
              service and support, ensuring that your products reach their
              destination seamlessly. We use advanced technology and tools to
              optimize routing and scheduling, allowing us to deliver
              streamlined and cost-effective international transportation
              solutions. Our expertise allows you to be sure that your goods
              will be transported as effectively and efficiently as possible.
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                to={"/agreement"}
                className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 font-semibold"
              >
                <FileText className="w-5 h-5 mr-2" /> Send an Agreement
              </Link>
              <Link
                to={"/contact"}
                className="inline-flex items-center px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-900 hover:text-white font-semibold"
              >
                <Headset className="w-5 h-5 mr-2" /> Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </form>
  </div>
);

export default ServicesContainer;
