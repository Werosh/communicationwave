import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  GraduationCap,
  Building,
  CheckCircle,
  Star,
  Target,
  BookOpen,
  Award,
  Lightbulb,
  Shield,
  Heart,
  Briefcase,
  Globe,
  Clock,
  Phone,
} from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "Small Business",
      icon: Building,
      services: [
        {
          category: "Leadership & Management",
          items: [
            "Essentials of modern leadership styles",
            "Conflict resolution and difficult conversations",
            "Delegation, accountability, and feedback loops",
          ],
        },
        {
          category: "Communication & Collaboration",
          items: [
            "Effective presentation and public speaking",
            "Active listening and nonverbal cues",
            "Remote-team tools and virtual meeting best practices",
          ],
        },
        {
          category: "Finance & Operations",
          items: [
            "Budgeting, forecasting, and cash-flow management",
            "Streamlining processes and lean principles",
            "Basic cybersecurity hygiene for small businesses",
          ],
        },
        {
          category: "Well-Being & Resilience",
          items: [
            "Stress management and burnout prevention",
            "Cultivating a growth mindset",
            "Mindful leadership and emotional intelligence",
          ],
        },
      ],
    },
    {
      title: "Educational Institutions",
      icon: GraduationCap,
      services: [
        {
          category: "Leadership & Professional Growth",
          items: [
            "Real mentoring and peer coaching",
            "Teacher & led professional learning communities",
            "Instructional and administrative leadership",
          ],
        },
        {
          category: "Internationalizing the Curriculum",
          items: [
            "Cultural dimensions",
            "Common advising challenges",
            "Language, tone, and nonverbal cues across cultures",
            "Navigating cultural conflict and microaggressions",
          ],
        },
        {
          category: "Intergenerational Workforce",
          items: [
            "Overview of generational cohorts in higher ed",
            "Communication norms",
            "Common misunderstandings and stereotypes",
            "The impact of generational diversity on advising, teaching, and collaboration",
          ],
        },
        {
          category: "Well-Being & Work-Life Balance",
          items: [
            "Mindfulness techniques for leaders",
            "Building supportive staff culture",
            "Strategies to reduce burnout",
          ],
        },
      ],
    },
  ];

  const deliveryFormats = [
    { name: "Fully Online", icon: Globe },
    { name: "Hybrid", icon: Users },
    { name: "One-on-One Sessions", icon: Heart },
    { name: "Small Groups", icon: Users },
    { name: "Large Groups", icon: Users },
  ];

  const benefits = [
    { icon: CheckCircle, text: "Flexible delivery formats" },
    { icon: CheckCircle, text: "Customized to your needs" },
    { icon: CheckCircle, text: "Expert facilitation" },
    { icon: CheckCircle, text: "Practical application focus" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?cs=srgb&dl=pexels-fauxels-3184465.jpg&fm=jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Our services are delivered in a variety of formats including fully
              online, hybrid, one-on-one sessions, and small or large groups.
              Call our office today to inquire about scheduling and pricing.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="mr-2" size={20} />
                <span>Contact Us Today</span>
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Section */}
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
              Service Categories
            </h2>
            <p className="text-lg sm:text-xl text-text-primary/70 max-w-3xl mx-auto">
              Comprehensive professional development solutions tailored for your
              organization's needs.
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mr-6">
                    <category.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-text-primary">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-bg-light rounded-xl p-6"
                    >
                      <h4 className="text-xl font-bold text-text-primary mb-4">
                        {service.category}
                      </h4>
                      <ul className="space-y-2">
                        {service.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start space-x-3 text-text-primary/80"
                          >
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Formats Section */}
      <section
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?cs=srgb&dl=pexels-seven11nash-380769.jpg&fm=jpg')",
        }}
      >
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
              Flexible Delivery Formats
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              We adapt to your schedule and preferences with multiple delivery
              options.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {deliveryFormats.map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <format.icon size={24} className="text-black" />
                </div>
                <h3 className="text-lg font-bold text-text-primary">
                  {format.name}
                </h3>
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
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-text-primary/70 mb-8 leading-relaxed">
                Our professional development services are designed to deliver
                real results for your organization. We combine proven
                methodologies with practical application to ensure lasting
                impact.
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
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Get Started Today</span>
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
                  Ready to Get Started?
                </h3>
                <p className="text-text-primary/70 mb-6">
                  Contact us today to discuss your organization's specific needs
                  and how we can help.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-bg-light">
                  <span className="text-text-primary/70">Response Time</span>
                  <span className="font-semibold text-text-primary">
                    Within 24 Hours
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-bg-light">
                  <span className="text-text-primary/70">Consultation</span>
                  <span className="font-semibold text-text-primary">
                    Free Initial Call
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-bg-light">
                  <span className="text-text-primary/70">Customization</span>
                  <span className="font-semibold text-accent">
                    Tailored Solutions
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-text-primary/70">Support</span>
                  <span className="font-semibold text-text-primary">
                    Ongoing Assistance
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

export default Services;
