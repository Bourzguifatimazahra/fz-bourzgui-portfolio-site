
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto">
          <header className="mb-12 text-center">
            <h1 className="mb-4">Contact Me</h1>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Have a question or want to work together? Feel free to reach out using the form below or through any of my social media channels.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <ContactForm />
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a 
                        href="mailto:bourzguifatimazahra@gmail.com" 
                        className="text-primary hover:underline"
                      >
                        bourzguifatimazahra@gmail.com
                      </a>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p>Casablanca, Morocco</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
                    <div className="flex gap-4">
                      <a 
                        href="https://ma.linkedin.com/in/fatima-zahra-bourzgui-49020b341" 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 bg-secondary rounded-full text-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/fatima-zahra-bourzgui-49020b341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 bg-secondary rounded-full text-foreground hover:text-primary transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://x.com/BourzguiZahra?t=OatPu5P16MbsY14YxziLZQ&s=09" 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 bg-secondary rounded-full text-foreground hover:text-primary transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Availability</h3>
                  <p className="mb-2">I'm currently available for:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>Freelance projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>Consulting work</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>Full-time opportunities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>Speaking engagements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
