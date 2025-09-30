import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Award, BookOpen } from 'lucide-react'

const Hero = () => {
  const stats = [
    { number: '500+', label: 'Professionals Trained', icon: Users },
    { number: '95%', label: 'Success Rate', icon: Award },
    { number: '50+', label: 'Workshops Delivered', icon: BookOpen },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-black/60"></div> {/* dark overlay */}
    <img
      src="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D" // replace with your image path
      alt="Background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Master Professional
              <span className="block text-gradient">
                Communication
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Transform your career with expert-led professional development workshops. 
              Build confidence, enhance leadership skills, and communicate with impact.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/workshops"
                  className="inline-flex items-center justify-center px-8 py-4 bg-text-primary text-white rounded-lg font-semibold text-lg hover:bg-text-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Register for Workshops</span>
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-text-primary text-text-primary rounded-lg font-semibold text-lg hover:bg-text-primary hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Card */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-md w-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  Professional Development
                </h3>
                <p className="text-text-primary/70">
                  Join thousands of professionals who have transformed their careers.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-bg-light rounded-lg"
                  >
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <stat.icon className="text-accent" size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-text-primary">{stat.number}</div>
                      <div className="text-sm text-text-primary/70">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero
