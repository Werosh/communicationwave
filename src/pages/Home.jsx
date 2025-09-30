import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Users,
  BookOpen,
  Award,
  Target,
  Clock,
  CheckCircle,
} from "lucide-react";
import Hero from "../components/Hero";
import SectionCard from "../components/SectionCard";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Expert-Led Workshops",
      description:
        "Learn from industry professionals with years of experience in communication and leadership.",
      link: "/workshops",
      linkText: "View Workshops",
    },
    {
      icon: Users,
      title: "Small Group Learning",
      description:
        "Intimate workshop settings ensure personalized attention and meaningful interactions.",
      link: "/about",
      linkText: "Learn More",
    },
    {
      icon: Award,
      title: "Certification Programs",
      description:
        "Earn professional certifications that enhance your career prospects and credibility.",
      link: "/workshops",
      linkText: "Get Certified",
    },
    {
      icon: Target,
      title: "Career Growth",
      description:
        "Transform your professional trajectory with skills that matter in today's competitive market.",
      link: "/contact",
      linkText: "Start Today",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      content:
        "The leadership communication workshop transformed how I present to executives. My confidence has skyrocketed!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      company: "InnovateLabs",
      content:
        "Communication Wave helped me become a more effective team leader. The practical techniques are game-changing.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Sales Manager",
      company: "GrowthCo",
      content:
        "The public speaking workshop was exactly what I needed. I now lead presentations with confidence and clarity.",
      rating: 5,
    },
  ];

  const benefits = [
    { icon: CheckCircle, text: "Immediate practical application" },
    { icon: CheckCircle, text: "Industry-recognized certification" },
    { icon: CheckCircle, text: "Lifetime access to resources" },
    { icon: CheckCircle, text: "Personal career coaching" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-10 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Why Choose Communication Wave?
            </h2>
            <p className="text-lg sm:text-xl text-text-primary/70 max-w-3xl mx-auto">
              Our professional development programs are designed to deliver real
              results for your career growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <SectionCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                link={feature.link}
                linkText={feature.linkText}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://wallpapershome.com/images/pages/pic_h/25970.jpg')",
        }}
      >
        {/* Optional overlay for readability */}
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
              What Our Participants Say
            </h2>
            <p className="text-lg sm:text-xl text-white/80">
              Real feedback from professionals who have transformed their
              careers with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg card-hover"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16  bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
                Transform Your Career Today
              </h2>
              <p className="text-lg text-text-primary/70 mb-8 leading-relaxed">
                Join thousands of professionals who have already transformed
                their careers with our proven methodology. Our workshops combine
                cutting-edge techniques with practical application.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon size={14} className="text-white" />
                    </div>
                    <span className="text-text-primary/80">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/workshops"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </motion.div>
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
                  <Clock className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Next Workshop Starts Soon
                </h3>
                <p className="text-text-primary/70 mb-6">
                  Limited seats available for our upcoming professional
                  development intensive.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-bg-light">
                  <span className="text-text-primary/70">Duration</span>
                  <span className="font-semibold text-text-primary">
                    3 Days
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-bg-light">
                  <span className="text-text-primary/70">Format</span>
                  <span className="font-semibold text-text-primary">
                    In-Person
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-bg-light">
                  <span className="text-text-primary/70">Seats Left</span>
                  <span className="font-semibold text-accent">12 of 25</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-text-primary/70">Investment</span>
                  <span className="font-semibold text-text-primary">
                    $1,299
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
