import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Target,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  BarChart,
} from "lucide-react";

const ProfessionalDevelopment = () => {
  const services = [
    {
      icon: Target,
      title: "Leadership Development",
      description:
        "Cultivate strong leadership skills through targeted coaching and comprehensive training programs.",
    },
    {
      icon: Award,
      title: "Career Advancement",
      description:
        "Strategic guidance to help professionals navigate career transitions and achieve their goals.",
    },
    {
      icon: Users,
      title: "Team Building",
      description:
        "Foster collaboration and strengthen team dynamics through interactive workshops.",
    },
    {
      icon: Lightbulb,
      title: "Skills Enhancement",
      description:
        "Develop critical professional skills including communication, negotiation, and problem-solving.",
    },
  ];

  const benefits = [
    "Personalized development plans",
    "Expert coaching and mentorship",
    "Industry-recognized certifications",
    "Practical, hands-on learning",
    "Ongoing support and resources",
    "Measurable outcomes and ROI",
  ];

  const approachSteps = [
    {
      step: "01",
      title: "Assessment",
      description:
        "Evaluate current skills, strengths, and areas for development.",
    },
    {
      step: "02",
      title: "Planning",
      description:
        "Create customized development roadmap aligned with your goals.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deliver engaging training sessions and coaching programs.",
    },
    {
      step: "04",
      title: "Evaluation",
      description:
        "Track progress and measure success through key performance indicators.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Professional Development */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/13801478/pexels-photo-13801478.jpeg?cs=srgb&dl=pexels-mizunokozuki-13801478.jpg&fm=jpg')",
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
                <TrendingUp className="text-white" size={40} />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Professional
              <span className="block text-gradient">Development</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Unlock your full potential with our comprehensive professional
              development programs designed to elevate your career and enhance
              your leadership capabilities.
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
              Our Professional Development Services
            </h2>
            <p className="text-lg sm:text-xl text-text-primary/70 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your professional growth
              journey.
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

      {/* Our Approach */}
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
              Our Approach
            </h2>
            <p className="text-lg sm:text-xl text-text-primary/70 max-w-3xl mx-auto">
              A systematic, results-driven methodology for professional
              development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 text-center card-hover"
              >
                <div className="text-5xl font-bold text-accent/20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-text-primary/70">{step.description}</p>
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
                Why Choose Our Professional Development Services?
              </h2>
              <p className="text-lg text-text-primary/70 mb-8 leading-relaxed">
                Our programs are designed by industry experts with proven
                methodologies that deliver tangible results for individuals and
                organizations.
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
                  <BarChart className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Proven Results
                </h3>
                <p className="text-text-primary/70">
                  Our professional development programs deliver measurable
                  outcomes.
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-center py-4 border-b border-bg-light">
                  <div className="text-4xl font-bold text-accent mb-2">95%</div>
                  <div className="text-text-primary/70">
                    Participant Satisfaction
                  </div>
                </div>
                <div className="text-center py-4 border-b border-bg-light">
                  <div className="text-4xl font-bold text-accent mb-2">80%</div>
                  <div className="text-text-primary/70">
                    Career Advancement Rate
                  </div>
                </div>
                <div className="text-center py-4">
                  <div className="text-4xl font-bold text-accent mb-2">
                    500+
                  </div>
                  <div className="text-text-primary/70">
                    Professionals Trained
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

export default ProfessionalDevelopment;
