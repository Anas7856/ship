import React, { useState } from 'react';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section (keep as is) */}
      

      {/* Main Content */}
      <main className="contact-page py-16 bg-white">
        <section className="contact-section">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
            {/* Contact Info as a Form */}
            <div className="contact-info flex-1 space-y-6 bg-gray-50 rounded-lg shadow-lg p-8 fade-in-up">
              <h2 className="text-2xl font-bold mb-6">Find us at</h2>
              <div className="contact-methods space-y-6">
                <div className="contact-method flex items-start gap-4">
                  <div className="contact-icon mt-1 text-blue-900">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="contact-method-text">
                    <label className="font-semibold block mb-1" htmlFor="location">Our Location</label>
                    <input
                      id="location"
                      type="text"
                      value="1255 FRANKLIN AVE SUITE 350 GARDEN CITY, NY 11530"
                      readOnly
                      className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
                    />
                  </div>
                </div>
                <div className="contact-method flex items-start gap-4">
                  <div className="contact-icon mt-1 text-blue-900">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="contact-method-text">
                    <label className="font-semibold block mb-1" htmlFor="emailInfo">Email Us</label>
                    <input
                      id="emailInfo"
                      type="email"
                      value="Alex@valhallalogisticsllc.com"
                      readOnly
                      className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-blue-700"
                    />
                  </div>
                </div>
                <div className="contact-method flex items-start gap-4">
                  <div className="contact-icon mt-1 text-blue-900">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="contact-method-text">
                    <label className="font-semibold block mb-1" htmlFor="phoneInfo">write to us</label>
                    <input
                      id="emailInfo"
                      type="email"
                      value="Alex@valhallalogisticsllc.com"
                      readOnly
                      className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-blue-700"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-container flex-1 bg-gray-50 rounded-lg shadow-lg p-8 fade-in-up">
              <div className="form-header mb-6">
                <span className="subtitle text-blue-900 font-semibold uppercase tracking-wider">Contact Us</span>
                <h2 className="text-3xl font-bold mb-2">Get a Quote Right Now</h2>
                <div className="decorative-line w-16 h-1 bg-blue-200 rounded mb-2"></div>
                <p className="form-description text-gray-600">
                  Fill out the form below and our team will get back to you promptly with a personalized quote.
                </p>
              </div>
              <form className="contact-form space-y-4" onSubmit={handleSubmit}>
                {isSubmitted && (
                  <div className="form-status bg-green-100 text-green-800 px-4 py-2 rounded mb-2">
                    Thank you! Your message has been sent.
                  </div>
                )}
                <div className="form-row flex gap-4">
                  <div className="form-group flex-1">
                    <label htmlFor="name" className="block font-medium mb-1">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group flex-1">
                    <label htmlFor="email" className="block font-medium mb-1">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="block font-medium mb-1">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="block font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your needs"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition-colors"
                  disabled={isSubmitted}
                >
                  Send Message
                </button>
                <div className="form-footer mt-4 flex items-center gap-2 text-gray-500 text-sm">
                  <Shield className="w-5 h-5 text-blue-900" />
                  <p>Your data is safe with us. Learn more about our Privacy Policy.</p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Our Location</h2>
            <div className="map-container rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.785664139499!2d-73.6366436238034!3d40.72275497115045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c287fb9ac97603%3A0x64d40db19167f9a5!2s1255%20Franklin%20Ave%20SUITE%20350%2C%20Garden%20City%2C%20NY%2011530%2C%20USA!5e0!3m2!1sen!2s!4v1708011801173!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Valhalla Logistic LLC Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;