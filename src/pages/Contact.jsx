import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  MessageCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceRequired: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration
    const serviceId = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
    const templateId = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
    const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS public key

    try {
      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone || "Not provided",
          service_required: formData.serviceRequired,
          message: formData.message,
          to_name: "Communication Wave Team",
        },
        publicKey
      );

      setIsSubmitting(false);
      setSubmitStatus("success");
      setStatusMessage(
        "Thank you! Your message has been sent successfully. We'll get back to you soon."
      );
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        serviceRequired: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setStatusMessage("");
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsSubmitting(false);
      setSubmitStatus("error");
      setStatusMessage(
        "Oops! Something went wrong. Please try again or contact us directly."
      );

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setStatusMessage("");
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@communicationwave.com"],
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(240) 903-0088"],
      description: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["4328 Farragut St, Hyattsville, MD 20781"],
      description: "By appointment only",
    },
  ];

  const faqs = [
    {
      question: "What's included in the workshop fee?",
      answer:
        "All workshop materials, lunch, refreshments, and a certificate of completion are included in the fee.",
    },
    {
      question: "Can I get a refund if I can't attend?",
      answer:
        "Yes, we offer full refunds up to 7 days before the workshop date. After that, we can transfer your registration to a future workshop.",
    },
    {
      question: "Do you offer corporate training?",
      answer:
        "Absolutely! We provide customized training programs for teams and organizations. Contact us to discuss your specific needs.",
    },
    {
      question: "What if I have no prior experience?",
      answer:
        "Our workshops are designed for all skill levels. We provide foundational knowledge while offering advanced techniques for experienced professionals.",
    },
  ];

  const serviceOptions = [
    "Professional Development",
    "Diversity & Inclusion",
    "Communication Services",
    "Business Consulting",
  ];

  return (
    <div className="min-h-screen">
      {/* Contact Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?cs=srgb&dl=pexels-olly-789822.jpg&fm=jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Get in
              <span className="block text-gradient">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your professional communication skills? We're
              here to help you choose the right workshop and answer any
              questions you may have.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Let's Start the Conversation
            </h2>
            <p className="text-lg sm:text-xl text-text-primary/70 max-w-3xl mx-auto">
              Have questions about our services? Want to discuss custom training
              for your team? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Send us a Message
              </h3>

              {/* Status Messages */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg border ${
                    submitStatus === "success"
                      ? "bg-green-50 border-green-200"
                      : "bg-red-50 border-red-200"
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {submitStatus === "success" ? (
                      <CheckCircle
                        className="text-green-600 flex-shrink-0 mt-0.5"
                        size={20}
                      />
                    ) : (
                      <AlertCircle
                        className="text-red-600 flex-shrink-0 mt-0.5"
                        size={20}
                      />
                    )}
                    <p
                      className={`font-medium ${
                        submitStatus === "success"
                          ? "text-green-800"
                          : "text-red-800"
                      }`}
                    >
                      {statusMessage}
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-text-primary mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-text-primary mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-text-primary mb-2"
                  >
                    Phone Number{" "}
                    <span className="text-text-primary/50">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </motion.div>

                {/* Service Required */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="serviceRequired"
                    className="block text-sm font-semibold text-text-primary mb-2"
                  >
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 bg-white"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-text-primary mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-accent text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-bg-light rounded-xl p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Get in Touch
                </h3>
                <p className="text-text-primary/70 mb-8">
                  Ready to transform your communication skills? We're here to
                  help you take the next step in your professional development
                  journey.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-accent" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1">
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-text-primary/70 mb-1">
                            {detail}
                          </p>
                        ))}
                        <p className="text-sm text-text-primary/60 mt-2">
                          {info.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Map Section with iFrame */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 text-center"
              >
                <h4 className="font-semibold text-text-primary mb-4">
                  Visit Our Office
                </h4>
                <div className="w-full h-48 rounded-lg overflow-hidden">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d132381.8585133!2d-77.02245723418685!3d38.9449406592332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c718ac664edd%3A0xb19afbfb65268c94!2s4328%20Farragut%20St%2C%20Hyattsville%2C%20MD%2020781!5e1!3m2!1sen!2sus!4v1759224823152!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images2.alphacoders.com/139/1394648.png')",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 text-white"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Other Ways to Connect
            </h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              We're here to help you succeed. Reach out to us through any of the
              channels below, and we'll respond promptly to assist you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg card-hover"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <info.icon size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-text-primary/70 mb-2">
                    {detail}
                  </p>
                ))}
                <p className="text-sm text-text-primary/60 mt-4">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-text-primary/70 max-w-3xl mx-auto">
              Quick answers to common questions about our workshops and training
              programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg card-hover"
              >
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {faq.question}
                </h3>
                <p className="text-text-primary/70 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
