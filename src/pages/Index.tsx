import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Featured projects (sample data)
  const featuredProjects = [
    {
      title: "Cloud Migration Project",
      description: "Led the migration of on-premises infrastructure to AWS, implementing CI/CD pipelines and reducing deployment time by 70%.",
      tags: ["AWS", "Docker", "Jenkins", "Terraform"],
      imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    {
      title: "Microservices Architecture",
      description: "Designed and implemented a microservices architecture using Kubernetes and Docker, improving system scalability and reliability.",
      tags: ["Kubernetes", "Docker", "Microservices", "Go"],
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      title: "DevOps Automation Tool",
      description: "Created an internal tool that automated deployment workflows, reducing manual intervention and increasing team productivity.",
      tags: ["Python", "Ansible", "GitLab CI", "Bash"],
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
  ];

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
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="mb-4">
                <span className="text-primary">Fatima Zahra</span> Bourzgui
              </h1>
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
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-primary">
                <img 
                  src="/lovable-uploads/aac2bed3-1199-42c0-8156-60b60c26f6c6.png" 
                  alt="Fatima Zahra Bourzgui" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
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

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-center mb-8">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">DevOps</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Docker & Kubernetes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>CI/CD Pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Cloud Infrastructure (AWS, GCP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Infrastructure as Code</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Monitoring & Logging</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-card rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Node.js & Express</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Python & Django</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>RESTful APIs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Databases (SQL & NoSQL)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Microservices Architecture</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-card rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>React.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>TypeScript</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Tailwind CSS</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>UI/UX Principles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="mb-4">Ready to Collaborate?</h2>
          <p className="mb-8 max-w-lg mx-auto">
            I'm always interested in new challenges and opportunities. Let's build something amazing together!
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
