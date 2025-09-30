import { motion } from 'framer-motion'
import { Users, Target, Award, BookOpen, CheckCircle, Star, Heart, Lightbulb, Shield } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Flexible & Practical',
      description: 'Our solutions are designed to meet each client\'s specific needs with practical, adaptable approaches.'
    },
    {
      icon: Users,
      title: 'Data-Driven',
      description: 'We develop strategies that consider organizational culture and audience, backed by measurable insights.'
    },
    {
      icon: Award,
      title: 'Client-Focused',
      description: 'Known as a "must-have" resource for small and mid-sized companies and educational institutions nationwide.'
    }
  ]

  const team = [
    {
      name: 'Dr. Chic Smith',
      role: 'Founder & Lead Strategist',
      bio: 'Dr. Chic Smith enjoys assisting organizations reach their goals through the growth of their finest resource - people. Her keen sensibilities as a strategist coupled with her work in higher education, government, and the communication sectors provide a unique approach to the role of professional development in our ever-changing workforce.',
      image: 'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg'
    }
    
  ]

  const achievements = [
    { number: '500+', label: 'Professionals Trained', icon: Users },
    { number: '95%', label: 'Success Rate', icon: CheckCircle },
    { number: '50+', label: 'Workshops Delivered', icon: BookOpen },
    { number: '4.9/5', label: 'Average Rating', icon: Star }
  ]

  const principles = [
    { icon: Heart, title: 'Ignite Potential', description: 'We create transformative experiences that unlock individual and organizational potential' },
    { icon: Lightbulb, title: 'Sustainable Growth', description: 'We focus on long-term development that drives lasting impact and continuous improvement' },
    { icon: Shield, title: 'Cultivate Leadership', description: 'We bridge gaps in skill and mindset, developing the next generation of leaders' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      
        <section
  className="relative bg-cover bg-center bg-no-repeat py-20 "
  style={{ backgroundImage: "url('https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?cs=srgb&dl=pexels-jopwell-2422280.jpg&fm=jpg')" }}
>
  <div className="absolute inset-0 bg-black/40"></div> {/* optional overlay */}

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center text-white"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
        About Communication Wave
      </h1>
      <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
        We empower cultivate transformative professional development experiences
        for small and mid-sized companies and educational institutions, igniting
        potential and driving lasting impact.
      </p>
    </motion.div>
  </div>


      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-white" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We empower cultivate transformative professional development experiences for small and mid-sized 
                companies and educational institutions, that ignite potential, drive sustainable growth, cultivate 
                leadership, and drive lasting impact.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our goal is to bridge gaps in skill and mindset for educators and business leaders alike, 
                creating engaging learning journeys that propel individuals and organizations forward.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="text-white" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our business solutions are designed to meet each client's specific needs. We offer a variety 
                of practical steps that are flexible, practical, and data-driven.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Communication Wave LLC is known for developing strategies that take into consideration the 
                organizational culture of the client and their audience. As a result, we are seen as a 
                "must-have" resource for many small and mid-sized companies and educational institutions nationwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
  className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/diverse-friends-talking-together_53876-7585.jpg?semt=ais_hybrid&w=740&q=80')" }}
>
  {/* Optional dark overlay for better text contrast */}
  <div className="absolute inset-0 bg-black/40  backdrop-blur-[2px]"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16 text-white"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        Our Core Values
      </h2>
      <p className="text-lg sm:text-xl max-w-3xl mx-auto">
        The principles that guide everything we do at Communication Wave.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
        >
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
            <value.icon size={28} className="text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
          <p className="text-gray-600 leading-relaxed">{value.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Team Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Leader
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Leadership driven by expertise in higher education, government, and communication sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Drives Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our core principles that shape every interaction and learning experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <principle.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Our Impact
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and participant success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon size={28} className="text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-white/90">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About