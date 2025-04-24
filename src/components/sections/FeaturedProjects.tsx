
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "Blog Platform",
    description: "A full-stack blogging platform built with modern web technologies. Features user authentication, content management, and responsive design.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    demoUrl: "https://stellar-sundae-cb7301.netlify.app/",
    githubUrl: "https://github.com/Bourzgui/front-endblog"
  },
  {
    title: "Python Todo Application", 
    description: "A feature-rich todo application built with Python, demonstrating clean code practices and efficient task management.",
    tags: ["Python", "SQLite", "Flask", "REST API"],
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    githubUrl: "https://github.com/Bourzgui/python-todo"
  },
  {
    title: "CRM System",
    description: "A comprehensive Customer Relationship Management system with frontend and backend components.",
    tags: ["React", "Node.js", "API", "Database"],
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    githubUrl: "https://github.com/Bourzguifatimazahra/crm-front"
  }
];

export function FeaturedProjects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-center mb-8">Featured Projects</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={index} variants={childVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
