import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const projects = [
  {
    id: 1,
    title: 'GitLab.com Multi-Tenant SaaS',
    description: 'Set strategy and direction for GitLab.com serving millions of developers. Led cross-functional initiatives across ~200 person organization generating measurable customer results.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    tags: ['SaaS Strategy', 'DevOps Platform']
  },
  {
    id: 2,
    title: 'Runway - Internal PaaS',
    description: 'Shaped roadmap and strategy for GitLab\'s internal Platform-as-a-Service that now powers AI services, Duo with Amazon Q, and GCP integration.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    tags: ['Platform Strategy', 'AI Infrastructure']
  },
  {
    id: 3,
    title: 'Multi-Region Services',
    description: 'Delivered GitLab\'s first multi-region services to meet customers globally. Led cultural change initiatives reducing breaking changes year-over-year.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    tags: ['Global Scale', 'Process Innovation']
  }
];

export default function Work() {
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
    <section id="work" className="py-32 bg-[var(--dark)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-gray-300 font-light">
              A selection of projects that define my design philosophy
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="work-card group cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-[var(--surface)] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="overflow-hidden">
                    <motion.img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-8">
                    <motion.h3 
                      className="text-2xl font-medium mb-3 group-hover:text-[hsl(186,100%,69%)] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs bg-[hsl(186,100%,69%)] bg-opacity-20 text-[hsl(186,100%,69%)] px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
