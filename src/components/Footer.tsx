
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <Link to="/" className="text-xl font-bold">
              <span className="text-primary">F</span>atima <span className="text-primary">Z</span>ahra
            </Link>
            <p className="text-sm mt-1 text-muted-foreground">
              DevOps & Full-Stack Developer
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/fatima-zahra-bourzgui-49020b341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://x.com/BourzguiZahra" 
              target="_blank" 
              rel="noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="https://www.instagram.com/fatima_ezzahra_bour?utm_source=qr&igsh=eHdqNTk2dmFqMWhi" 
              target="_blank" 
              rel="noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Fatima Zahra Bourzgui. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
