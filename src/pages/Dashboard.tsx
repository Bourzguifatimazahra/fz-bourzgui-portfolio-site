
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Section */}
            <div className="w-full md:w-1/3">
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <Avatar className="h-32 w-32">
                      <AvatarImage src="/lovable-uploads/aac2bed3-1199-42c0-8156-60b60c26f6c6.png" alt="Fatima Zahra" />
                      <AvatarFallback>FZ</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle>Fatima Zahra Bourzgui</CardTitle>
                  <p className="text-sm text-muted-foreground">DevOps & Full-Stack Developer</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <a href="mailto:bourzguifatimazahra@gmail.com" className="text-sm hover:text-primary">
                        bourzguifatimazahra@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Dashboard Content */}
            <div className="w-full md:w-2/3">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Messages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">No messages yet</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>CV Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      CV management functionality will be added here using Zeno integration
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
