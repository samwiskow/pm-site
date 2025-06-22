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
              src="/images/swiskow.jpeg" 
              alt="Professional portrait of Sam Wiskow, Product Manager" 
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
          
          {/* Bio & Links */}
          <motion.div variants={itemVariants} className="lg:pt-16">
            <h3 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
              Sam Wiskow
            </h3>
            <div className="text-lg md:text-xl font-light leading-relaxed text-gray-300 mb-12 space-y-6">
              <p>
                As Principal Product Manager at GitLab, I set strategy and direction for multi-tenant SaaS serving millions of developers worldwide.
              </p>
              <p>
                I enable an organization of ~200 people to create and deliver strategic, cross-functional initiatives that generate measurable customer results and drive platform growth.
              </p>
              <p>
                My focus spans from shaping roadmaps for internal Platform-as-a-Service solutions to leading large-scale cultural changes that improve customer outcomes across the organization.
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
                  className="inline-flex items-center text-[hsl(186,100%,69%)] hover:text-white transition-colors group"
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
