import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  Mic,
  Presentation,
  Users,
  CheckCircle,
  ArrowRight,
  Video,
  FileText,
} from "lucide-react";

const CommunicationServices = () => {
  const services = [
    {
      icon: Mic,
      title: "Public Speaking Training",
      description:
        "Master the art of public speaking and deliver presentations with confidence and impact.",
    },
    {
      icon: Presentation,
      title: "Presentation Skills",
      description:
        "Create and deliver compelling presentations that engage and persuade your audience.",
    },
    {
      icon: Users,
      title: "Interpersonal Communication",
      description:
        "Enhance your ability to communicate effectively in one-on-one and small group settings.",
    },
    {
      icon: Video,
      title: "Virtual Communication",
      description:
        "Excel in remote communication through video calls, webinars, and virtual meetings.",
    },
  ];

  const benefits = [
    "Boost confidence in communication",
    "Enhance professional credibility",
    "Improve audience engagement",
    "Master persuasion techniques",
    "Develop authentic speaking style",
    "Handle Q&A with confidence",
  ];

  const programs = [
    {
      title: "Executive Communication",
      description:
        "High-level communication strategies for C-suite executives and senior leaders.",
      duration: "2 Days",
    },
    {
      title: "Business Writing Excellence",
      description:
        "Professional writing skills for emails, reports, proposals, and documentation.",
      duration: "1 Day",
    },
    {
      title: "Crisis Communication",
      description:
        "Effective communication strategies for managing challenging situations.",
      duration: "1 Day",
    },
    {
      title: "Media Training",
      description:
        "Prepare for interviews and media appearances with confidence and poise.",
      duration: "1 Day",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Communication Services */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://rare-gallery.com/uploads/posts/987981-house-modern-mansions-architecture.jpg')",
        }} // replace with your image
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
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center">
                <MessageCircle className="text-white" size={40} />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Communication
              <span className="block text-gradient">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Elevate your communication skills with our comprehensive training
              programs designed to help you connect, influence, and inspire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Our Communication Services
            </h2>
            <p className="text-lg sm:text-xl text-text-primary/70 max-w-3xl mx-auto">
              From public speaking to written communication, we cover all
              aspects of professional communication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-bg-light rounded-xl shadow-lg p-8 card-hover"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                  <service.icon size={28} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-text-primary/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
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
              Specialized Programs
            </h2>
            <p className="text-lg sm:text-xl text-text-primary/70 max-w-3xl mx-auto">
              Targeted training programs for specific communication needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 card-hover"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-text-primary">
                    {program.title}
                  </h3>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-lg text-sm font-semibold">
                    {program.duration}
                  </span>
                </div>
                <p className="text-text-primary/70 leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
                Why Invest in Communication Skills?
              </h2>
              <p className="text-lg text-text-primary/70 mb-8 leading-relaxed">
                Strong communication skills are the foundation of professional
                success and personal growth. Our programs help you unlock your
                full potential.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="text-text-primary/80">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Communication Impact
                </h3>
                <p className="text-text-primary/70">
                  Effective communication drives measurable business results.
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-center py-4 border-b border-bg-light">
                  <div className="text-4xl font-bold text-accent mb-2">70%</div>
                  <div className="text-text-primary/70">
                    Better Team Performance
                  </div>
                </div>
                <div className="text-center py-4 border-b border-bg-light">
                  <div className="text-4xl font-bold text-accent mb-2">85%</div>
                  <div className="text-text-primary/70">
                    Improved Client Relations
                  </div>
                </div>
                <div className="text-center py-4">
                  <div className="text-4xl font-bold text-accent mb-2">90%</div>
                  <div className="text-text-primary/70">
                    Increased Confidence
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunicationServices;
