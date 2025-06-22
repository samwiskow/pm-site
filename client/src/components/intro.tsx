import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function Intro() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="intro" className="py-32 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
            I build products that turn{' '}
            <span className="italic text-[#015FFC]">user insights</span>{' '}
            into meaningful solutions that drive business growth.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
