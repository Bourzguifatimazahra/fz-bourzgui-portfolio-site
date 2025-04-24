
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TimelineItem } from "@/components/TimelineItem";

export default function About() {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      organization: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Leading cloud infrastructure initiatives and implementing CI/CD pipelines. Reduced deployment time by 70% and improved system reliability.",
      location: "Casablanca, Morocco",
    },
    {
      title: "Full-Stack Developer",
      organization: "Digital Innovations",
      period: "2019 - 2021",
      description: "Developed and maintained web applications using React, Node.js, and AWS. Collaborated with cross-functional teams for product development.",
      location: "Rabat, Morocco",
    },
    {
      title: "Junior Software Engineer",
      organization: "StartUp Hub",
      period: "2017 - 2019",
      description: "Built RESTful APIs, implemented database solutions, and worked on frontend development using modern JavaScript frameworks.",
      location: "Marrakech, Morocco",
    },
  ];

  const education = [
    {
      title: "Master's in Computer Science",
      organization: "University of Technology",
      period: "2015 - 2017",
      description: "Specialization in Cloud Computing and Distributed Systems. Thesis on Optimizing Kubernetes Deployments.",
      location: "Casablanca, Morocco",
      isEducation: true,
    },
    {
      title: "Bachelor's in Software Engineering",
      organization: "National School of Computer Science",
      period: "2012 - 2015",
      description: "Focus on software development methodologies, algorithms, and database management.",
      location: "Rabat, Morocco",
      isEducation: true,
    },
    {
      title: "Professional Certification",
      organization: "AWS Certified Solutions Architect",
      period: "2018",
      isEducation: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto">
          <header className="mb-12 text-center">
            <h1 className="mb-4">About Me</h1>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Learn about my journey, experience, and the skills that make me a versatile DevOps and Full-Stack Developer.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-5">
              <div className="sticky top-24">
                <h2 className="mb-6">My Story</h2>
                <div className="prose prose-sm max-w-none">
                  <p className="mb-4">
                    I'm Fatima Zahra Bourzgui, a passionate DevOps Engineer and Full-Stack Developer with over 5 years of experience in the tech industry.
                  </p>
                  <p className="mb-4">
                    My journey in technology began with a deep curiosity about how systems work and how they can be optimized. This led me to pursue education in computer science and specialize in cloud technologies and software development.
                  </p>
                  <p className="mb-4">
                    Throughout my career, I've worked on diverse projects ranging from cloud migrations to developing scalable web applications. I'm particularly passionate about automation, containerization, and creating efficient CI/CD pipelines.
                  </p>
                  <p className="mb-4">
                    When I'm not coding or configuring servers, I enjoy contributing to open-source projects, mentoring junior developers, and staying up-to-date with the latest tech trends.
                  </p>
                  
                  <div className="mt-8">
                    <Button size="lg">
                      Download CV
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="mb-10">
                <h2 className="mb-6">Work Experience</h2>
                <div className="space-y-0">
                  {experiences.map((experience, index) => (
                    <TimelineItem key={index} {...experience} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-6">Education</h2>
                <div className="space-y-0">
                  {education.map((edu, index) => (
                    <TimelineItem key={index} {...edu} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
