import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart,
  Users,
  Globe,
  Shield,
  CheckCircle,
  ArrowRight,
  Handshake,
  Target,
} from "lucide-react";

const DiversityEquityInclusion = () => {
  const services = [
    {
      icon: Users,
      title: "DEI Training Programs",
      description:
        "Comprehensive workshops to build awareness, understanding, and inclusive behaviors across your organization.",
    },
    {
      icon: Shield,
      title: "Policy Development",
      description:
        "Create and implement effective DEI policies that align with your organizational values and goals.",
    },
    {
      icon: Handshake,
      title: "Inclusive Leadership",
      description:
        "Develop leaders who champion diversity and create environments where everyone can thrive.",
    },
    {
      icon: Target,
      title: "DEI Assessment",
      description:
        "Evaluate current state of diversity and inclusion to identify opportunities for improvement.",
    },
  ];

  const benefits = [
    "Culturally responsive training",
    "Evidence-based methodologies",
    "Sustainable organizational change",
    "Inclusive workplace culture",
    "Improved team performance",
    "Enhanced employee engagement",
  ];

  const focusAreas = [
    {
      title: "Unconscious Bias",
      description:
        "Identify and address unconscious biases that affect decision-making and workplace dynamics.",
    },
    {
      title: "Cultural Competency",
      description:
        "Develop skills to work effectively across diverse cultural backgrounds and perspectives.",
    },
    {
      title: "Inclusive Communication",
      description:
        "Learn communication strategies that respect and value diverse voices and experiences.",
    },
    {
      title: "Equity in Practice",
      description:
        "Implement fair practices and systems that ensure equal opportunities for all.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-bg-light bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-photo/diverse-group-people-smiling-together-600nw-2599498201.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>{" "}
        {/* Overlay for readability */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center">
                <Heart className="text-white" size={40} />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Diversity, Equity
              <span className="block text-gradient">& Inclusion</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Build a more inclusive, equitable workplace where every individual
              feels valued, respected, and empowered to contribute their best
              work.
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
              Our DEI Services
            </h2>
            <p className="text-lg sm:text-xl text-text-primary/70 max-w-3xl mx-auto">
              Comprehensive solutions to advance diversity, equity, and
              inclusion in your organization.
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

      {/* Focus Areas */}
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
              Key Focus Areas
            </h2>
            <p className="text-lg sm:text-xl text-text-primary/70 max-w-3xl mx-auto">
              We address the critical components of building an inclusive
              workplace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 card-hover"
              >
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  {area.title}
                </h3>
                <p className="text-text-primary/70 leading-relaxed">
                  {area.description}
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
                The Impact of DEI Initiatives
              </h2>
              <p className="text-lg text-text-primary/70 mb-8 leading-relaxed">
                Our DEI programs drive meaningful change that benefits your
                entire organization and creates lasting positive impact.
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
                  <Globe className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Building Inclusive Cultures
                </h3>
                <p className="text-text-primary/70">
                  Organizations with strong DEI programs see significant
                  improvements across key metrics.
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-center py-4 border-b border-bg-light">
                  <div className="text-4xl font-bold text-accent mb-2">35%</div>
                  <div className="text-text-primary/70">
                    Increase in Innovation
                  </div>
                </div>
                <div className="text-center py-4 border-b border-bg-light">
                  <div className="text-4xl font-bold text-accent mb-2">45%</div>
                  <div className="text-text-primary/70">
                    Better Team Collaboration
                  </div>
                </div>
                <div className="text-center py-4">
                  <div className="text-4xl font-bold text-accent mb-2">60%</div>
                  <div className="text-text-primary/70">
                    Higher Employee Retention
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

export default DiversityEquityInclusion;
