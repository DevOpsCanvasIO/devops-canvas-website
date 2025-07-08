import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Zap, Users } from "lucide-react";

const AboutSection = () => {
  const problems = [
    "Fragmented DevOps tools creating information silos",
    "Lack of unified visibility across deployment pipelines",
    "Manual processes slowing down delivery cycles",
    "Difficult troubleshooting and high MTTR"
  ];

  const solutions = [
    {
      icon: Target,
      title: "Unified Dashboard",
      description: "Single pane of glass for all your DevOps metrics and processes"
    },
    {
      icon: Zap,
      title: "Intelligent Automation",
      description: "AI-powered insights and automated workflow optimization"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enhanced visibility and communication across development teams"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">DevOpsCanvas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're revolutionizing DevOps by providing the clarity and control teams need to deliver faster, safer, and more efficiently.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-destructive">The Problem We Solve</h3>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-destructive/20">
              <h4 className="font-semibold mb-2 text-destructive">vs. Competition</h4>
              <p className="text-sm text-muted-foreground">
                Unlike <strong>Datadog</strong> (monitoring-focused), <strong>Sleuth</strong> (deployment-only), 
                or <strong>Backstage</strong> (developer portals), DevOpsCanvas provides end-to-end 
                DevOps orchestration with AI-powered insights.
              </p>
            </div>
          </div>

          {/* Solution Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-accent">Our Solution</h3>
            {solutions.map((solution, index) => (
              <Card key={index} className="border-accent/20 hover:border-accent/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{solution.title}</h4>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;