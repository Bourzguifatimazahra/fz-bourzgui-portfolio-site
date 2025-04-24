
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Skills } from "@/components/sections/Skills";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <FeaturedProjects />
      <Skills />
      <CallToAction />
      <Footer />
    </div>
  );
}
