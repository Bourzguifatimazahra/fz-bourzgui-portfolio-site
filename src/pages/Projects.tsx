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
      imageSrc: "https://i.imgur.com/gzsf6kd.png"
    },
    {
      title: "Stagelink",
      description: "The StageLink project is a web application developed with Laravel. It allows the management of internship offers and CVs, with a system for handling applications, search filters, and administrative features.",
      tags: ["React", "Node.js", "MongoDB", "Laravel"],
      githubUrl: "https://github.com/Bourzgui/front-endblog",
      demoUrl: "https://stellar-sundae-cb7301.netlify.app/",
      imageSrc: "https://i.imgur.com/rotbnuE.png"
    },
    {
      title: "Hommage à Marie Curie",
      description: "The Tribute to Marie Curie website showcases the life and achievements of Marie Curie",
      tags: ["Html", "Css"],
      githubUrl: "https://github.com/Bourzguifatimazahra/prebootcamp/tree/main/DI-Bootcamp-Stage1/Final-Project",
      imageSrc: "https://i.imgur.com/DYNUl3d.png"
    },
    {
    title: "Boulangerie Project",
    description: "The Boulangerie Délicieuse project is a website for a family-owned bakery that offers fresh bread and artisanal pastries",
    tags: ["Web", "Management", "Frontend"],
    githubUrl: "https://github.com/Bourzguifatimazahra/cookiesweb/tree/main/site%20web",
    imageSrc: "https://i.imgur.com/icAu4NU.png"
    },
    {
      title: "TF Tasks",
      description: "Task management system using TensorFlow for intelligent task prioritization.",
      tags: ["Python", "TensorFlow", "ML"],
      githubUrl: "https://github.com/Bourzgui/tf-tasks",
      imageSrc: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      title: "3D Rubik's Cube game",
      description: "This is a fun and engaging 3D Rubik's Cube game developed using HTML, CSS, and JavaScript",
      tags: ["Web", "Game", "Frontend"],
      githubUrl: "https://github.com/Bourzguifatimazahra/Cube",
      imageSrc: "https://i.imgur.com/CxjH8cJ.png"
    },
    {
      title: "Bode Plotter",
      description: "The project allows you to plot Bode diagrams for filters, view the history of applied filters, generate PDFs of the diagrams, and save the filter parameters in an SQLite database.",
      tags: ["Python", "Tkinter", "SQLite", "FPDF", "Matplotlib", "SciPy"],
      githubUrl: "https://github.com/Bourzguifatimazahra/BodePlotter",
      imageSrc: "https://i.imgur.com/UWYKu46.png"
    },
    {
      title: "the cube in 3D. 🟥🟩🟦🟨🟧🟩",
      description: " Track the time it takes to solve the cube,Keep track of the number of moves made.Earn a score for successfully solving the cube,Get step-by-step guidance on solving the cube,Play the game on any device",
      tags: ["html", "css", "js", "Game"],
      githubUrl: "https://github.com/Bourzguifatimazahra/Cube",
      imageSrc: "https://i.imgur.com/JilPJZT.png"
    },
    {
      title: "CRM System",
      description: "Full-stack CRM solution with advanced features for customer management.",
      tags: ["React", "Node.js", "Full-stack",],
      githubUrl: "https://github.com/Bourzguifatimazahra/crm/tree/main/c-rm",
      imageSrc: "https://i.imgur.com/ECdzJ96.png"
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
              A collection of my work in DevOps, and full-stack development.
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
