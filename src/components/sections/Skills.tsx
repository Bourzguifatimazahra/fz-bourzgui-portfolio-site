
export function Skills() {
  return (
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
  );
}
