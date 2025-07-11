import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
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

    {
      title: "Stagelink",
      description: "The StageLink project is a web application developed with Laravel. It allows the management of internship offers and CVs, with a system for handling applications, search filters, and administrative features.",
      tags: ["React", "Node.js", "MongoDB", "Laravel"],
      githubUrl: "https://github.com/Bourzgui/front-endblog",
      demoUrl: "https://stellar-sundae-cb7301.netlify.app/",
      imageSrc: "/image/staglink.png"
    },
    {
      title: "Hommage à Marie Curie",
      description: "The Tribute to Marie Curie website showcases the life and achievements of Marie Curie",
      tags: ["Html", "Css"],
      githubUrl: "https://github.com/Bourzguifatimazahra/prebootcamp/tree/main/DI-Bootcamp-Stage1/Final-Project",
      imageSrc: "/image/mari.png"
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
      imageSrc: "/image/tf.png"
    },
    {
      title: "3D Rubik's Cube game",
      description: "This is a fun and engaging 3D Rubik's Cube game developed using HTML, CSS, and JavaScript",
      tags: ["Web", "Game", "Frontend"],
      githubUrl: "https://github.com/Bourzguifatimazahra/Cube",
      imageSrc: "/image/cube .png"
    },
    {
      title: "Bode Plotter",
      description: "The project allows you to plot Bode diagrams for filters, view the history of applied filters, generate PDFs of the diagrams, and save the filter parameters in an SQLite database.",
      tags: ["Python", "Tkinter", "SQLite", "FPDF", "Matplotlib", "SciPy"],
      githubUrl: "https://github.com/Bourzguifatimazahra/BodePlotter",
      imageSrc: "/image/bode_plot.png"
    },
    {
      title: "the cube in 3D. 🟥🟩🟦🟨🟧🟩",
      description: " Track the time it takes to solve the cube,Keep track of the number of moves made.Earn a score for successfully solving the cube,Get step-by-step guidance on solving the cube,Play the game on any device",
      tags: ["html", "css", "js", "Game"],
      githubUrl: "https://github.com/Bourzguifatimazahra/Cube",
      imageSrc: "/image/cubee.png"
    },
    {
      title: "CRM System",
      description: "Full-stack CRM solution with advanced features for customer management.",
      tags: ["React", "Node.js", "Full-stack",],
      githubUrl: "https://github.com/Bourzguifatimazahra/crm/tree/main/c-rm",
      imageSrc: "/image/crm.png"
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
              A collection of my work in Full-stack development, and DevOps.
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
