import { useState } from "react";
import { motion } from "framer-motion";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import WorkshopCard from "../components/WorkshopCard";
import {
  MessageSquare,
  Users,
  Presentation,
  Mic,
  Target,
  TrendingUp,
  Calendar,
  Clock,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Award,
  Heart,
} from "lucide-react";

const Workshops = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  const workshops = [
    {
      id: 1,
      title: "Busy Bee",
      description:
        "For business owners who are too busy to do hours of prep work and participate in a 3 hour workshop; the Communication Wave team will assist you to complete the appropriate certification application and submit your application.",
      duration: "Flexible",
      maxParticipants: null,
      price: 1007,
      icon: Briefcase, // pick any icon from lucide-react or custom
      date: "Ongoing",
      location: "Assistance Service (State fees not included)",
      skills: ["Certification Application", "Business Support"],
      featured: true,
      notes:
        "The total cost is $950 plus tax $57 = $1,007.00 — this does not include any state fees (fees vary by state/county).",
    },
    {
      id: 2,
      title: "Women Owned Small Business (WOSB) Workshop",
      description:
        "Certification workshop designed for women-owned businesses to gain official recognition and opportunities.",
      duration: "3 hours",
      maxParticipants: null,
      price: 424,
      icon: Users, // or Female icon if you import one
      date: "April 19, 2023, 6pm EST (Zoom) & May 22, 2023, 6pm EST (Zoom)",
      location: "Live via Zoom",
      skills: ["WOSB Certification", "Application Guidance"],
      registerLink: "https://www.communicationwave.com/events/",
    },
    {
      id: 3,
      title: "Minority Business Enterprise (MBE) Workshop",
      description:
        "Certification workshop to help minority-owned businesses with their MBE application process.",
      duration: "3 hours",
      maxParticipants: null,
      price: 424,
      icon: Award,
      date: "April 12, 2023, 6pm EST (Zoom) & May 4, 2023, 6pm EST (Zoom)",
      location: "Live via Zoom",
      skills: ["MBE Certification", "Application Support"],
      registerLink: "https://www.communicationwave.com/events/",
    },
    {
      id: 4,
      title: "LGBTQ+ Certification Workshop",
      description:
        "Certification workshop for LGBTQ+ owned businesses. Contact us for details on upcoming sessions. (Contact us for details on upcoming sessions.)",
      duration: "TBA",
      maxParticipants: null,
      price: 0,
      icon: Heart, // or Rainbow if you add custom
      date: "TBA",
      location: "Email for more info",
      skills: ["LGBTQ+ Certification"],
      contact: "info@communicationwave.com",
    },
  ];

  const benefits = [
    { icon: CheckCircle, text: "Industry-recognized certification" },
    { icon: CheckCircle, text: "Lifetime access to resources" },
    { icon: CheckCircle, text: "Personal career coaching" },
    { icon: CheckCircle, text: "Networking opportunities" },
  ];

  const handleRegister = (workshop) => {
    setSelectedWorkshop(workshop);
    setShowPayment(true);
  };

  const handlePaymentSuccess = (details) => {
    console.log("Payment successful:", details);
    // Here you would typically send the payment details to your backend
    alert(
      `Registration successful for ${selectedWorkshop.title}! You will receive a confirmation email shortly.`
    );
    setShowPayment(false);
    setSelectedWorkshop(null);
  };

  const handlePaymentError = (error) => {
    console.error("Payment error:", error);
    alert("Payment failed. Please try again.");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images4.alphacoders.com/661/thumb-1920-661705.jpg')",
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
              Professional Development
              <span className="block text-gradient">Workshops</span>
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your career with our expert-led workshops designed for
              today's professionals. Build essential communication and
              leadership skills that drive real results.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-200">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-accent" />
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-center">
                <Users size={16} className="mr-2 text-accent" />
                <span>Small Groups</span>
              </div>
              <div className="flex items-center">
                <Star size={16} className="mr-2 text-accent" />
                <span>Expert Instructors</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workshops Grid */}
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
              Choose Your Workshop
            </h2>
            <p className="text-lg sm:text-xl text-text-primary/70 max-w-3xl mx-auto">
              Each workshop is carefully designed to deliver maximum value and
              practical skills you can apply immediately in your professional
              life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={
                  workshop.featured ? "md:col-span-2 lg:col-span-1" : ""
                }
              >
                <WorkshopCard workshop={workshop} onRegister={handleRegister} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg?cs=srgb&dl=pexels-pixabay-207896.jpg&fm=jpg')",
        }} // replace with your image
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              What You’ll Get
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Every workshop includes comprehensive resources and ongoing
              support to ensure your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                     transform hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <benefit.icon size={28} className="text-accent" />
                </div>
                <p className="text-text-primary/80 font-semibold text-lg leading-relaxed">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPayment && selectedWorkshop && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">
                Register for Workshop
              </h3>
              <p className="text-text-primary/70">{selectedWorkshop.title}</p>
              <p className="text-2xl font-bold text-accent mt-2">
                ${selectedWorkshop.price}
              </p>
            </div>

            <div className="mb-6 space-y-3">
              <div className="flex items-center text-sm text-text-primary/70">
                <Calendar size={16} className="mr-3" />
                <span>{selectedWorkshop.date}</span>
              </div>
              <div className="flex items-center text-sm text-text-primary/70">
                <Clock size={16} className="mr-3" />
                <span>{selectedWorkshop.duration}</span>
              </div>
              <div className="flex items-center text-sm text-text-primary/70">
                <MapPin size={16} className="mr-3" />
                <span>{selectedWorkshop.location}</span>
              </div>
            </div>

            <PayPalScriptProvider
              options={{
                "client-id": "test", // Replace with your actual PayPal client ID
                currency: "USD",
              }}
            >
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: selectedWorkshop.price.toString(),
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    handlePaymentSuccess(details);
                  });
                }}
                onError={handlePaymentError}
                style={{
                  layout: "vertical",
                  color: "blue",
                  shape: "rect",
                  label: "paypal",
                }}
              />
            </PayPalScriptProvider>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowPayment(false)}
              className="w-full mt-4 text-text-primary/60 hover:text-text-primary transition-colors"
            >
              Cancel
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Workshops;
