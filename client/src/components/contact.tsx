import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactSubmissionSchema } from '@shared/schema';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import type { InsertContactSubmission } from '@shared/schema';

export default function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-32 bg-[var(--surface)]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-light tracking-tight mb-8"
          >
            Let's Create Something
            <span className="text-[#015FFC] italic"> Amazing</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 font-light mb-16"
          >
            Ready to bring your vision to life? I'd love to hear from you.
          </motion.p>
          
          <motion.form 
            variants={itemVariants}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Input
                  {...form.register('name')}
                  placeholder="Your Name"
                  className="w-full bg-[var(--dark)] border-2 border-[var(--border-custom)] rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-[#015FFC] focus:outline-none transition-colors font-light text-lg h-14"
                />
                {form.formState.errors.name && (
                  <p className="text-red-400 text-sm mt-2">{form.formState.errors.name.message}</p>
                )}
              </motion.div>
              
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Input
                  {...form.register('email')}
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-[var(--dark)] border-2 border-[var(--border-custom)] rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-[#015FFC] focus:outline-none transition-colors font-light text-lg h-14"
                />
                {form.formState.errors.email && (
                  <p className="text-red-400 text-sm mt-2">{form.formState.errors.email.message}</p>
                )}
              </motion.div>
            </div>
            
            <motion.div
              whileFocus={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Textarea
                {...form.register('message')}
                placeholder="Tell me about your project..."
                rows={6}
                className="w-full bg-[var(--dark)] border-2 border-[var(--border-custom)] rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-[#015FFC] focus:outline-none transition-colors font-light text-lg resize-none"
              />
              {form.formState.errors.message && (
                <p className="text-red-400 text-sm mt-2">{form.formState.errors.message.message}</p>
              )}
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="bg-[#015FFC] hover:bg-blue-600 text-white font-medium py-4 px-12 rounded-xl transition-all duration-300 text-lg tracking-wide h-14"
              >
                {contactMutation.isPending ? 'Sending...' : 'Send Message'}
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
