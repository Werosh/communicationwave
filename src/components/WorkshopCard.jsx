import { motion } from "framer-motion";
import {
  Clock,
  Users,
  DollarSign,
  ArrowRight,
  Star,
  Calendar,
  MapPin,
} from "lucide-react";

const WorkshopCard = ({ workshop, onRegister }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-bg-secondary/20 card-hover"
    >
      {workshop.featured && (
        <div className="bg-accent text-white px-4 py-2 text-center text-sm font-semibold">
          <Star size={16} className="inline mr-1" />
          Featured Workshop
        </div>
      )}

      <div className="p-6">
        {/* Workshop Icon */}
        <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
          <workshop.icon size={28} className="text-accent" />
        </div>

        {/* Workshop Title */}
        <h3 className="text-xl font-bold text-text-primary mb-3">
          {workshop.title}
        </h3>

        {/* Workshop Description */}
        <p className="text-text-primary/70 mb-6 leading-relaxed">
          {workshop.description}
        </p>

        {/* Workshop Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-text-primary/60">
            <Calendar size={16} className="mr-3" />
            <span>{workshop.date}</span>
          </div>
          <div className="flex items-center text-sm text-text-primary/60">
            <Clock size={16} className="mr-3" />
            <span>{workshop.duration}</span>
          </div>
          <div className="flex items-center text-sm text-text-primary/60">
            <MapPin size={16} className="mr-3" />
            <span>{workshop.location}</span>
          </div>
          <div className="flex items-center text-sm text-text-primary/60">
            <Users size={16} className="mr-3" />
            <span>Max {workshop.maxParticipants} participants</span>
          </div>
        </div>

        {/* Skills Tags */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {workshop.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Price and Register Button */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-text-primary">
            ${workshop.price}
          </div>
        </div>

        {/* Register Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onRegister(workshop)}
          className="w-full bg-accent text-Black py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span>Register Now</span>
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default WorkshopCard;
