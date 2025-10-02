import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Award,
  FileCheck,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";

const SmallBusinessCertification = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Certification Guidance",
      description:
        "Expert assistance navigating federal and state certification programs for small and diverse businesses.",
    },
    {
      icon: Target,
      title: "Application Support",
      description:
        "Comprehensive support throughout the certification application process to ensure accuracy and compliance.",
    },
    {
      icon: TrendingUp,
      title: "Business Development",
      description:
        "Strategic guidance to leverage certifications for growth opportunities and contract acquisitions.",
    },
    {
      icon: Users,
      title: "Ongoing Compliance",
      description:
        "Continuous support to maintain certification status and meet ongoing reporting requirements.",
    },
  ];

  const benefits = [
    "Access to set-aside contracts and opportunities",
    "Enhanced competitive advantage in procurement",
    "Expert guidance through complex applications",
    "Increased visibility with government agencies",
    "Support for recertification and renewals",
    "Connection to contracting opportunities",
  ];

  const certificationAreas = [
    {
      title: "Federal Certifications",
      items: [
        "8(a) Business Development Program",
        "Women-Owned Small Business (WOSB)",
        "Service-Disabled Veteran-Owned (SDVOSB)",
        "HUBZone Certification",
      ],
    },
    {
      title: "State & Local Programs",
      items: [
        "State small business certifications",
        "Local disadvantaged business programs",
        "Regional certification assistance",
        "Municipal contracting programs",
      ],
    },
    {
      title: "Industry-Specific",
      items: [
        "Minority Business Enterprise (MBE)",
        "Disadvantaged Business Enterprise (DBE)",
        "Airport Concessions DBE (ACDBE)",
        "Industry-specific certifications",
      ],
    },
    {
      title: "Documentation & Compliance",
      items: [
        "Application preparation and review",
        "Required documentation compilation",
        "Annual certification maintenance",
        "Compliance monitoring and reporting",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Small Business Certification */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7688336.jpg&fm=jpg')",
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
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center">
                <Award className="text-white" size={40} />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Small Business
              <span className="block text-gradient">Certification</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Navigate the certification process with confidence and unlock
              access to exclusive contracting opportunities for your small
              business.
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
              Our Certification Services
            </h2>
            <p className="text-lg sm:text-xl text-text-primary/70 max-w-3xl mx-auto">
              Comprehensive certification support to help your small business
              access new opportunities.
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

      {/* Certification Areas */}
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
              Certification Programs We Support
            </h2>
            <p className="text-lg sm:text-xl text-text-primary/70 max-w-3xl mx-auto">
              We provide expert guidance across a wide range of small business
              certification programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificationAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 card-hover"
              >
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  {area.title}
                </h3>
                <ul className="space-y-3">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle
                        size={20}
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <span className="text-text-primary/70">{item}</span>
                    </li>
                  ))}
                </ul>
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
                Why Pursue Small Business Certification?
              </h2>
              <p className="text-lg text-text-primary/70 mb-8 leading-relaxed">
                Small business certifications open doors to exclusive
                contracting opportunities and provide a competitive advantage in
                government and corporate procurement.
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
                  <BadgeCheck className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Certification Success
                </h3>
                <p className="text-text-primary/70">
                  Our proven track record of helping small businesses achieve
                  certification success.
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-center py-4 border-b border-bg-light">
                  <div className="text-4xl font-bold text-accent mb-2">
                    100+
                  </div>
                  <div className="text-text-primary/70">
                    Businesses Certified
                  </div>
                </div>
                <div className="text-center py-4 border-b border-bg-light">
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <div className="text-text-primary/70">
                    Application Success Rate
                  </div>
                </div>
                <div className="text-center py-4">
                  <div className="text-4xl font-bold text-accent mb-2">
                    $5M+
                  </div>
                  <div className="text-text-primary/70">
                    Contracts Awarded to Clients
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

export default SmallBusinessCertification;
