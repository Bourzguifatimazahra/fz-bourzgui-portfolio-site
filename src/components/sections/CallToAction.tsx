
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
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
  );
}
