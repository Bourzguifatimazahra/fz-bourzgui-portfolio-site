
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageSrc?: string;
}

export function ProjectCard({ 
  title, 
  description, 
  tags, 
  githubUrl, 
  demoUrl, 
  imageSrc 
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="card-hover overflow-hidden h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {imageSrc && (
        <div className="relative overflow-hidden h-48">
          <img 
            src={imageSrc} 
            alt={title} 
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm md:text-base">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2">
        {githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
        )}
        {demoUrl && (
          <Button size="sm" asChild>
            <a href={demoUrl} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
