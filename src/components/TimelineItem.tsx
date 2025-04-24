
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description?: string;
  location?: string;
  isEducation?: boolean;
}

export function TimelineItem({
  title,
  organization,
  period,
  description,
  location,
  isEducation = false,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-0 h-full">
        <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
        </div>
        <div className="h-full w-0.5 bg-border ml-3 mt-1"></div>
      </div>
      
      <Card className="w-full">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
              <CardDescription className="text-base font-medium">
                {organization}
              </CardDescription>
            </div>
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              {period}
            </span>
          </div>
          {location && <span className="text-sm text-muted-foreground">{location}</span>}
        </CardHeader>
        
        {description && (
          <CardContent>
            <p className="text-sm leading-relaxed">{description}</p>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
