import { useState } from 'react'
import { motion } from 'framer-motion'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import WorkshopCard from '../components/WorkshopCard'
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
  ArrowRight
} from 'lucide-react'

const Workshops = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null)
  const [showPayment, setShowPayment] = useState(false)

  const workshops = [
    {
      id: 1,
      title: 'Executive Communication Mastery',
      description: 'Master the art of executive-level communication. Learn to present with confidence, handle difficult conversations, and lead with clarity in high-stakes situations.',
      duration: '2 days',
      maxParticipants: 12,
      price: 899,
      icon: Presentation,
      date: 'March 15-16, 2024',
      location: 'Downtown Business Center',
      skills: ['Executive Presence', 'Strategic Communication', 'Crisis Communication'],
      featured: true
    },
    {
      id: 2,
      title: 'Public Speaking Excellence',
      description: 'Transform your public speaking skills with proven techniques for engaging audiences, managing nerves, and delivering memorable presentations.',
      duration: '1 day',
      maxParticipants: 15,
      price: 599,
      icon: Mic,
      date: 'March 22, 2024',
      location: 'Professional Training Center',
      skills: ['Presentation Skills', 'Audience Engagement', 'Overcoming Fear']
    },
    {
      id: 3,
      title: 'Leadership Communication',
      description: 'Develop the communication skills essential for effective leadership. Learn to inspire teams, provide feedback, and drive organizational change.',
      duration: '2 days',
      maxParticipants: 10,
      price: 799,
      icon: Users,
      date: 'April 5-6, 2024',
      location: 'Leadership Institute',
      skills: ['Team Leadership', 'Change Management', 'Influence & Persuasion']
    },
    {
      id: 4,
      title: 'Negotiation & Influence',
      description: 'Master the art of negotiation and influence. Learn to build consensus, handle objections, and achieve win-win outcomes in professional settings.',
      duration: '1 day',
      maxParticipants: 12,
      price: 699,
      icon: Target,
      date: 'April 12, 2024',
      location: 'Business District Hub',
      skills: ['Negotiation Tactics', 'Influence Strategies', 'Conflict Resolution']
    },
    {
      id: 5,
      title: 'Digital Communication Skills',
      description: 'Excel in digital communication environments. Master virtual presentations, online meetings, and digital collaboration tools for remote work success.',
      duration: '1 day',
      maxParticipants: 20,
      price: 499,
      icon: MessageSquare,
      date: 'April 19, 2024',
      location: 'Virtual & In-Person',
      skills: ['Virtual Presentations', 'Digital Collaboration', 'Online Meeting Mastery']
    },
    {
      id: 6,
      title: 'Career Advancement Communication',
      description: 'Build the communication skills that accelerate career growth. Learn to network effectively, communicate your value, and position yourself for advancement.',
      duration: '1 day',
      maxParticipants: 15,
      price: 549,
      icon: TrendingUp,
      date: 'April 26, 2024',
      location: 'Career Development Center',
      skills: ['Professional Networking', 'Personal Branding', 'Career Positioning']
    }
  ]

  const benefits = [
    { icon: CheckCircle, text: 'Industry-recognized certification' },
    { icon: CheckCircle, text: 'Lifetime access to resources' },
    { icon: CheckCircle, text: 'Personal career coaching' },
    { icon: CheckCircle, text: 'Networking opportunities' }
  ]

  const handleRegister = (workshop) => {
    setSelectedWorkshop(workshop)
    setShowPayment(true)
  }

  const handlePaymentSuccess = (details) => {
    console.log('Payment successful:', details)
    // Here you would typically send the payment details to your backend
    alert(`Registration successful for ${selectedWorkshop.title}! You will receive a confirmation email shortly.`)
    setShowPayment(false)
    setSelectedWorkshop(null)
  }

  const handlePaymentError = (error) => {
    console.error('Payment error:', error)
    alert('Payment failed. Please try again.')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6">
              Professional Development
              <span className="block text-gradient">
                Workshops
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-text-primary/70 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your career with our expert-led workshops designed for today's professionals. 
              Build essential communication and leadership skills that drive real results.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-primary/60">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-center">
                <Users size={16} className="mr-2" />
                <span>Small Groups</span>
              </div>
              <div className="flex items-center">
                <Star size={16} className="mr-2" />
                <span>Expert Instructors</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              What You'll Get
            </h2>
            <p className="text-lg text-text-primary/70 max-w-2xl mx-auto">
              Every workshop includes comprehensive resources and ongoing support to ensure your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={24} className="text-accent" />
                </div>
                <p className="text-text-primary/80 font-medium">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
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
              Each workshop is carefully designed to deliver maximum value and practical skills 
              you can apply immediately in your professional life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={workshop.featured ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <WorkshopCard 
                  workshop={workshop} 
                  onRegister={handleRegister}
                />
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
              <h3 className="text-2xl font-bold text-text-primary mb-2">
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
                currency: "USD"
              }}
            >
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [{
                      amount: {
                        value: selectedWorkshop.price.toString()
                      }
                    }]
                  })
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    handlePaymentSuccess(details)
                  })
                }}
                onError={handlePaymentError}
                style={{
                  layout: 'vertical',
                  color: 'blue',
                  shape: 'rect',
                  label: 'paypal'
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

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join hundreds of professionals who have already transformed their communication 
              skills and advanced their careers with our workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-accent px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                onClick={() => document.getElementById('workshops-grid')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Browse All Workshops</span>
                <ArrowRight className="ml-2" size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-accent transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Workshops
