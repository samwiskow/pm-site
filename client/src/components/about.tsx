import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Twitter, Linkedin, Mail } from 'lucide-react';

export default function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-32 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Portrait */}
          <motion.div variants={itemVariants}>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
              alt="Professional portrait of Alex Morgan, Creative Director" 
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
          
          {/* Bio & Links */}
          <motion.div variants={itemVariants} className="lg:pt-16">
            <h3 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
              Alex Morgan
            </h3>
            <div className="text-lg md:text-xl font-light leading-relaxed text-gray-300 mb-12 space-y-6">
              <p>
                With over a decade of experience in digital design, I've had the privilege of working with Fortune 500 companies and innovative startups alike.
              </p>
              <p>
                My approach combines strategic thinking with meticulous attention to detail, ensuring every pixel serves a purpose in the larger narrative.
              </p>
              <p>
                Currently based in San Francisco, I lead design initiatives that push boundaries and challenge conventions in the digital space.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              {[
                { Icon: Twitter, label: 'Twitter', href: '#' },
                { Icon: Linkedin, label: 'LinkedIn', href: '#' },
                { Icon: Mail, label: 'Newsletter', href: '#' }
              ].map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="inline-flex items-center text-[#015FFC] hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="text-xl mr-3" />
                  </motion.div>
                  <span className="font-medium tracking-wide">{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
