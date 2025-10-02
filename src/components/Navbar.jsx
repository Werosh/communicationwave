import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Users,
  Briefcase,
  FileText,
  GraduationCap,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About Us", path: "/about", icon: Users },
    // 🚨 Removed Services here (we'll handle separately)
  ];

  const servicesSubItems = [
    {
      name: "Professional Development",
      path: "/services/professional-development",
    },
    {
      name: "Diversity, Equity, & Inclusion",
      path: "/services/diversity-equity-inclusion",
    },
    {
      name: "Communication Services",
      path: "/services/communication-services",
    },
    { name: "Business Consulting", path: "/services/business-consulting" },
    {
      name: "Small Business Certification",
      path: "/services/small-business-certification",
    },
  ];

  const otherNavItems = [
    {
      name: "Capability Statement",
      path: "/capability-statement",
      icon: FileText,
    },
    { name: "Trainings", path: "/trainings", icon: GraduationCap },
    { name: "Contact Us", path: "/contact", icon: MessageCircle },
  ];

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-bg-secondary/20 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent backdrop-blur-sm text-amber-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">CW</span>
              </div>
              <span className="text-xl font-bold text-text-primary">
                Communication Wave
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-accent bg-accent/10"
                        : "text-text-primary/70 hover:text-accent hover:bg-accent/5"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              );
            })}

            {/* Services (hover dropdown + click navigates) */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/services"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isServicesActive
                      ? "text-accent bg-accent/10"
                      : "text-text-primary/70 hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  <Briefcase size={16} />
                  <span>Services</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>
              </motion.div>

              {/* Dropdown */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-bg-secondary/20 overflow-hidden"
                  >
                    {servicesSubItems.map((subItem, index) => (
                      <motion.div
                        key={subItem.path}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Link
                          to={subItem.path}
                          className={`block px-4 py-3 text-sm text-black transition-all duration-200 ${
                            location.pathname === subItem.path
                              ? "bg-accent/10 font-medium"
                              : "hover:bg-accent/5"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {otherNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-accent bg-accent/10"
                        : "text-text-primary/70 hover:text-accent hover:bg-accent/5"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-primary hover:text-accent focus:outline-none focus:text-accent p-2 rounded-lg hover:bg-accent/5 transition-all duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-bg-light/50 backdrop-blur-sm border-t border-bg-secondary/20">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                          isActive
                            ? "text-accent bg-accent/10"
                            : "text-text-primary/70 hover:text-accent hover:bg-accent/5"
                        }`}
                      >
                        <Icon size={20} />
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile Services Accordion */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                >
                  <button
                    onClick={() =>
                      setIsMobileServicesOpen(!isMobileServicesOpen)
                    }
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      isServicesActive
                        ? "text-accent bg-accent/10"
                        : "text-text-primary/70 hover:text-accent hover:bg-accent/5"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Briefcase size={20} />
                      <span>Services</span>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-200 ${
                        isMobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        {/* Main Services link */}
                        <Link
                          to="/services"
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className={`block px-4 py-3 rounded-lg text-sm text-black transition-all duration-200 ${
                            location.pathname === "/services"
                              ? "bg-accent/10 font-medium"
                              : "hover:bg-accent/5"
                          }`}
                        >
                          All Services
                        </Link>

                        {servicesSubItems.map((subItem, index) => (
                          <motion.div
                            key={subItem.path}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.2,
                              delay: index * 0.05,
                            }}
                          >
                            <Link
                              to={subItem.path}
                              onClick={() => {
                                setIsOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                              className={`block px-4 py-3 rounded-lg text-sm text-black transition-all duration-200 ${
                                location.pathname === subItem.path
                                  ? "bg-accent/10 font-medium"
                                  : "hover:bg-accent/5"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {otherNavItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: (navItems.length + 1 + index) * 0.05,
                      }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                          isActive
                            ? "text-accent bg-accent/10"
                            : "text-text-primary/70 hover:text-accent hover:bg-accent/5"
                        }`}
                      >
                        <Icon size={20} />
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
