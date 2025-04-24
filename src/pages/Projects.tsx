import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Blog Platform",
      description: "A full-stack blogging platform with modern features and responsive design.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/Bourzgui/front-endblog",
      demoUrl: "https://stellar-sundae-cb7301.netlify.app/",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Python Todo Application",
      description: "Task management application built with Python and modern web technologies.",
      tags: ["Python", "SQLite", "Flask"],
      githubUrl: "https://github.com/Bourzgui/python-todo",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "TF Tasks",
      description: "Task management system using TensorFlow for intelligent task prioritization.",
      tags: ["Python", "TensorFlow", "ML"],
      githubUrl: "https://github.com/Bourzgui/tf-tasks",
      imageSrc: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Boulangerie Project",
      description: "Digital solution for bakery management and operations.",
      tags: ["Web", "Management", "Frontend"],
      githubUrl: "https://github.com/Bourzgui/Boulangerie",
      imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      title: "Bode Plotter",
      description: "Technical tool for creating and analyzing Bode plots.",
      tags: ["Engineering", "Plotting", "Analysis"],
      githubUrl: "https://github.com/Bourzgui/Bode-Plotter/tree/main/diagramme%20de%20Bode",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "CRM System",
      description: "Full-stack CRM solution with advanced features for customer management.",
      tags: ["React", "Node.js", "Full-stack"],
      githubUrl: "https://github.com/Bourzguifatimazahra/crm-front",
      imageSrc: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto">
          <header className="mb-12 text-center">
            <h1 className="mb-4">My Projects</h1>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              A collection of my work in DevOps, cloud infrastructure, and full-stack development.
              Each project represents different skills and challenges I've tackled.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
