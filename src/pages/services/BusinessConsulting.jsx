import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  LineChart,
  Lightbulb,
} from "lucide-react";

const BusinessConsulting = () => {
  const services = [
    {
      icon: Target,
      title: "Strategic Planning",
      description:
        "Develop comprehensive strategies aligned with your business objectives and organizational vision.",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description:
        "Identify and implement improvements to enhance organizational efficiency and effectiveness.",
    },
    {
      icon: Users,
      title: "Change Management",
      description:
        "Navigate organizational transitions smoothly with proven change management methodologies.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description:
        "Foster a culture of innovation and develop processes that drive continuous improvement.",
    },
  ];

  const benefits = [
    "Data-driven insights and recommendations",
    "Customized solutions for your business",
    "Expert guidance from industry leaders",
    "Measurable ROI and performance metrics",
    "Sustainable organizational change",
    "Long-term strategic partnership",
  ];

  const consultingAreas = [
    {
      title: "Organizational Development",
      items: [
        "Structure and design optimization",
        "Culture transformation",
        "Talent management strategies",
        "Performance management systems",
      ],
    },
    {
      title: "Process Improvement",
      items: [
        "Operational efficiency analysis",
        "Workflow optimization",
        "Quality management systems",
        "Best practice implementation",
      ],
    },
    {
      title: "Leadership Development",
      items: [
        "Executive coaching programs",
        "Leadership pipeline development",
        "Succession planning",
        "High-potential identification",
      ],
    },
    {
      title: "Strategic Communication",
      items: [
        "Internal communications strategy",
        "Stakeholder engagement plans",
        "Change communication frameworks",
        "Crisis communication planning",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Business Consulting */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.hdwallpapers.in/download/modern_architecture_4k-wide.jpg')",
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
                <Briefcase className="text-white" size={40} />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Business
              <span className="block text-gradient">Consulting</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Strategic consulting services to help your organization achieve
              its goals, optimize performance, and drive sustainable growth.
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
              Our Consulting Services
            </h2>
            <p className="text-lg sm:text-xl text-text-primary/70 max-w-3xl mx-auto">
              Comprehensive business consulting solutions tailored to your
              unique challenges.
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

      {/* Consulting Areas */}
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
              Areas of Expertise
            </h2>
            <p className="text-lg sm:text-xl text-text-primary/70 max-w-3xl mx-auto">
              We provide expert consulting across multiple business disciplines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingAreas.map((area, index) => (
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
                Why Choose Our Consulting Services?
              </h2>
              <p className="text-lg text-text-primary/70 mb-8 leading-relaxed">
                Our consultants bring decades of combined experience and a
                proven track record of delivering results that matter.
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
                  <LineChart className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Consulting Impact
                </h3>
                <p className="text-text-primary/70">
                  Our consulting services deliver measurable business value.
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-center py-4 border-b border-bg-light">
                  <div className="text-4xl font-bold text-accent mb-2">50+</div>
                  <div className="text-text-primary/70">
                    Organizations Served
                  </div>
                </div>
                <div className="text-center py-4 border-b border-bg-light">
                  <div className="text-4xl font-bold text-accent mb-2">92%</div>
                  <div className="text-text-primary/70">
                    Client Satisfaction Rate
                  </div>
                </div>
                <div className="text-center py-4">
                  <div className="text-4xl font-bold text-accent mb-2">3X</div>
                  <div className="text-text-primary/70">Average ROI</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessConsulting;
