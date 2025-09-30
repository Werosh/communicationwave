import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SectionCard = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  linkText = "Learn More",
  className = "",
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 card-hover ${className}`}
    >
      <div className="text-center">
        {Icon && (
          <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Icon className="text-accent" size={28} />
          </div>
        )}
        
        <h3 className="text-xl font-bold text-text-primary mb-3">
          {title}
        </h3>
        
        <p className="text-text-primary/70 mb-6 leading-relaxed">
          {description}
        </p>
        
        {link && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={link}
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300"
            >
              {linkText}
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default SectionCard
