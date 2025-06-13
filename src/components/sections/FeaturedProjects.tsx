
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "AIOXExplorer",
    description: "Explorez les merveilles culturelles du Maroc avec un guide AI qui vous parle de l'histoire, de l'art et des histoires qui les entourent.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/Bourzguifatimazahra/aiox-cultural-explorer-guide",
    demoUrl: "https://aiox-g.netlify.app/",
    imageSrc: "/image/aiox.png"
  },
  {
    title: "HopEplate",
    description: "HopEplate met en relation les restaurants ayant des surplus alimentaires avec des consommateurs recherchant des repas à prix réduits et des associations caritatives.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/Bourzguifatimazahra/hopeplate-food-connect-05",
    demoUrl: "https://hopeplate.netlify.app/",
    imageSrc: "/image/hopee.png"
  },
  {
    title: "Blog Platform",
    description: "A full-stack blogging platform with modern features and responsive design.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/Bourzgui/front-endblog",
    demoUrl: "https://stellar-sundae-cb7301.netlify.app/",
    imageSrc: "/image/blog4.png"
  },
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
