import { motion } from 'framer-motion';
import { Twitter, Linkedin, Globe, Briefcase } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Globe, href: '#', label: 'Dribbble' },
    { Icon: Briefcase, href: '#', label: 'Behance' }
  ];

  return (
    <footer className="py-16 bg-black border-t border-[var(--border-custom)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 mb-6 md:mb-0"
          >
            © 2024 Sam Wiskow. All rights reserved.
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-8"
          >
            {socialLinks.map(({ Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                className="text-gray-400 hover:text-[hsl(186,100%,69%)] transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                aria-label={label}
              >
                <Icon className="text-xl" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
