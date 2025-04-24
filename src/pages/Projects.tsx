
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  // Project data (sample)
  const projects = [
    {
      title: "Cloud Migration Project",
      description: "Led the migration of on-premises infrastructure to AWS, implementing CI/CD pipelines and reducing deployment time by 70%.",
      tags: ["AWS", "Docker", "Jenkins", "Terraform"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    {
      title: "Microservices Architecture",
      description: "Designed and implemented a microservices architecture using Kubernetes and Docker, improving system scalability and reliability.",
      tags: ["Kubernetes", "Docker", "Microservices", "Go"],
      githubUrl: "https://github.com",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      title: "DevOps Automation Tool",
      description: "Created an internal tool that automated deployment workflows, reducing manual intervention and increasing team productivity.",
      tags: ["Python", "Ansible", "GitLab CI", "Bash"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
    {
      title: "E-commerce Platform",
      description: "Developed a full-stack e-commerce platform with secure payment processing, user authentication, and inventory management.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Built a real-time analytics dashboard for monitoring system performance and user behavior across multiple applications.",
      tags: ["Vue.js", "Socket.io", "Express", "D3.js"],
      githubUrl: "https://github.com",
      imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    },
    {
      title: "Serverless Blog Platform",
      description: "Created a serverless blog platform using AWS Lambda, API Gateway, and DynamoDB, with content management capabilities.",
      tags: ["Serverless", "AWS", "React", "GraphQL"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      imageSrc: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    },
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
