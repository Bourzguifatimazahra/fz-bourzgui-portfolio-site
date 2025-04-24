
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Hero() {
  const nameAnimation = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-50/30 to-green-100/30 dark:from-green-900/10 dark:to-green-800/10" />
      <div className="container mx-auto relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={nameAnimation}
            >
              <h1 className="mb-4 relative group">
                <Sparkles className="absolute -left-8 top-1/2 -translate-y-1/2 text-primary h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 hover:from-primary/90 hover:to-primary/70 transition-all duration-300">
                  Fatima Zahra
                </span>{" "}
                <span className="text-primary hover:text-primary/80 transition-colors duration-300">
                  Bourzgui
                </span>
              </h1>
            </motion.div>
            
            <h2 className="text-xl md:text-2xl mb-6 text-muted-foreground">
              DevOps & Full-Stack Developer
            </h2>
            <p className="mb-8 max-w-lg mx-auto md:mx-0">
              I craft efficient cloud infrastructures and build robust web applications. 
              Passionate about automating workflows and creating scalable solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 max-w-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-primary hover:border-primary/80 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <img 
                src="/lovable-uploads/aac2bed3-1199-42c0-8156-60b60c26f6c6.png" 
                alt="Fatima Zahra Bourzgui" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
