import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TimelineItem } from "@/components/TimelineItem";

export default function About() {
  const experiences = [
    {
      title: "StageLink",
      organization: "Orange",
      period: "April 2024 – June 2024",
      description: "Designed and developed a web platform using PHP (Laravel) and MySQL for data management.Integrated the Indeed API for real-time internship offers and Google Maps API for geolocation of partner companies.Implemented an ATS system for candidate application management.",
      location: "Agadir, Morocco",
    },
    {
      title: "Full Stack Developer",
      organization: "MediaAtlas",
      period: "November 2024 – January 2025",
      description: "Developed an AI-powered chatbot using Python.Enhanced performance by over 30%.",
      location: "Sidi Slimane, Morocco",
    },
    {
      title: "Web Developer",
      organization: "Adlab Factory",
      period: "February 2025 – March 2025",
      description: "Developed web applications using PHP and Laravel.Integrated Google Sheets with WordPress.Developed ERP modules for Dolibarr.",
      location: "Casablanca, Morocco",
    },
  ];

  const education = [
    {
      title: "Full Stack Coding Bootcamp – MERN Stack",
      organization: "Geeks institute",
      period: "March 2025 – Present",
      description: "Advanced training in full stack web development using JavaScript, Python, React.js, Node.js, Express, MongoDB,and PostgreSQL.",
      location: "Casablanca, Morocco",
      isEducation: true,
    },
    {
      title: "DevOps Certification",
      organization: "Orange Digital Center",
      description: "Comprehensive DevOps training covering CI/CD pipelines, Docker, Kubernetes, Jenkins, GitHub Actions, Agile & Scrum methodologies.",
      location: "Casablanca, Morocco",
      period: "November 2024 – January 2025",
      isEducation: true,
    },
    {
      title: "Bachelor's in Software Engineering",
      organization: "Université Ibn Zohr",
      period: "2023- 2024",
      description: "Focused on software engineering principles, object-oriented programming, web development, algorithm analysis, databases, and software project management.",
      location: "Agadir, Morocco",
      isEducation: true,
    },
    {
      title: "DEUG in Mathematical & Computer Sciences",
      organization: "Université Ibn Zohr",
      period: "2021- 2023",
      description: "Studied foundational subjects in mathematics, programming , data structures, algorithms, and discrete mathematics.",
      location: "Agadir, Morocco",
      isEducation: true,
    },
    {
      title: "Gaming Development",
      organization: "École 1337",
      period: "2018- 2020",
      description: "Specialized in game development with a project-based learning approach. Focused on C, C++, algorithms, software architecture, system programming, and team collaboration in a peer-learning environment.",
      location: "Benguerir, Morocco",
      isEducation: true,
    },
    {
      title: "Baccalaureate in Mathematical Sciences – Series A",
      organization: "Lycée El Fath",
      period: "2017- 2018",
      description: "Concentration in advanced mathematics, physics, and analytical reasoning.",
      location: "Agadir, Morocco",
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
<<<<<<< HEAD
=======
                    I'm Fatima Zahra Bourzgui, a passionate Full-Stack Developer and DevOps Engineer with a strong foundation in software engineering and a growing portfolio of impactful projects across web development, automation, and cloud infrastructure.
                  </p>
>>>>>>> d1ee5d06faa6d1d520e44141f64a2344ecebdad9
                  <p className="mb-4">
<<<<<<< HEAD
  I'm Fatima Zahra Bourzgui, a passionate Full-Stack Developer and DevOps Engineer with a strong foundation in software engineering and a growing portfolio of impactful projects across web development, automation, and cloud infrastructure.
</p>
<p className="mb-4">
  My tech journey began with a love for mathematics and problem-solving, which naturally led me to pursue a degree in Mathematics & Computer Science and later specialize in software engineering and DevOps practices.
</p>
<p className="mb-4">
  I've contributed to a wide range of projects—from building real-time chat apps and CRUD APIs to integrating ERP systems and designing scalable Laravel-based platforms. I thrive on creating clean code, efficient CI/CD pipelines, and smart automations using tools like Docker, GitHub Actions, and Jenkins.
</p>
<p className="mb-4">
  Beyond the code, I enjoy mentoring aspiring developers through bootcamps and workshops, organizing tech events, and constantly exploring emerging technologies like AI, Kubernetes, and cybersecurity. My work blends passion, pedagogy, and performance.
</p>

=======
                    My tech journey began with a love for mathematics and problem-solving, which naturally led me to pursue a degree in Mathematics & Computer Science and later specialize in software engineering and DevOps practices.
                  </p>
                  <p className="mb-4">
                    I've contributed to a wide range of projects—from building real-time chat apps and CRUD APIs to integrating ERP systems and designing scalable Laravel-based platforms. I thrive on creating clean code, efficient CI/CD pipelines, and smart automations using tools like Docker, GitHub Actions, and Jenkins.
                  </p>
                  <p className="mb-4">
                    Beyond the code, I enjoy mentoring aspiring developers through bootcamps and workshops, organizing tech events, and constantly exploring emerging technologies like AI, Kubernetes, and cybersecurity. My work blends passion, pedagogy, and performance.
                  </p>

>>>>>>> d1ee5d06faa6d1d520e44141f64a2344ecebdad9
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
                    <TimelineItem key={index} {...{ ...experience }} />
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
