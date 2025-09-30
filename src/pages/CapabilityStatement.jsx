import { motion } from "framer-motion";
import {
  FileText,
  Award,
  Target,
  Users,
  Briefcase,
  CheckCircle,
  Star,
} from "lucide-react";

const CapabilityStatement = () => {
  const capabilities = [
    {
      icon: Briefcase,
      title: "Core Competencies",
      items: [
        "Professional Development Training",
        "Leadership Communication Workshops",
        "Diversity & Inclusion Programs",
        "Business Communication Consulting",
      ],
    },
    {
      icon: Target,
      title: "Our Expertise",
      items: [
        "Executive Coaching & Training",
        "Team Building & Collaboration",
        "Public Speaking & Presentation Skills",
        "Organizational Development",
      ],
    },
    {
      icon: Users,
      title: "Industries Served",
      items: [
        "Technology & Software",
        "Healthcare & Pharmaceuticals",
        "Finance & Banking",
        "Education & Non-Profit",
      ],
    },
    {
      icon: Award,
      title: "Differentiators",
      items: [
        "Customized Training Solutions",
        "Proven Track Record",
        "Expert Facilitators",
        "Measurable Results",
      ],
    },
  ];

  const stats = [
    { number: "500+", label: "Professionals Trained" },
    { number: "95%", label: "Client Satisfaction Rate" },
    { number: "50+", label: "Corporate Clients" },
    { number: "10+", label: "Years of Excellence" },
  ];

  const certifications = [
    "Certified Professional Development Provider",
    "Diversity & Inclusion Certification",
    "Leadership Training Accreditation",
    "Business Communication Excellence Award",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://4kwallpapers.com/images/wallpapers/modern-architecture-look-up-reflection-glass-building-3840x2160-2881.jpg')",
        }}
      >
        {/* Overlay for text readability */}
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
                <FileText className="text-white" size={40} />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Capability
              <span className="block text-gradient">Statement</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Communication Wave is a leading provider of professional
              development and communication training services, empowering
              organizations and individuals to achieve excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-text-primary/70 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
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
              Our Capabilities
            </h2>
            <p className="text-lg sm:text-xl text-text-primary/70 max-w-3xl mx-auto">
              We deliver comprehensive training and consulting services across
              multiple domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 card-hover"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                  <capability.icon size={28} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  {capability.title}
                </h3>
                <ul className="space-y-3">
                  {capability.items.map((item, idx) => (
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

      {/* Certifications Section */}
      <section className="py-16 md:py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Certifications & Accreditations
            </h2>
            <p className="text-lg sm:text-xl text-text-primary/70 max-w-3xl mx-auto">
              Our credentials demonstrate our commitment to excellence and
              industry standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center card-hover"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star size={24} className="text-accent" />
                </div>
                <p className="text-text-primary/80 font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let's discuss how Communication Wave can help your organization
              achieve its goals.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent rounded-lg font-semibold text-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Contact Us Today</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CapabilityStatement;
