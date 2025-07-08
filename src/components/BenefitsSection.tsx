import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Rocket, BarChart3, Users, Shield, Zap } from "lucide-react";

const BenefitsSection = () => {
  const metrics = [
    {
      icon: Clock,
      title: "MTTR Reduction",
      value: "75%",
      description: "Faster incident resolution with intelligent diagnostics",
      color: "text-blue-600"
    },
    {
      icon: Rocket,
      title: "Deploy Frequency",
      value: "3x",
      description: "Increase deployment velocity with automated pipelines",
      color: "text-green-600"
    },
    {
      icon: BarChart3,
      title: "DORA Metrics",
      value: "Elite",
      description: "Achieve elite performance across all DORA metrics",
      color: "text-purple-600"
    },
    {
      icon: Users,
      title: "Team Onboarding",
      value: "50%",
      description: "Faster developer onboarding with unified workflows",
      color: "text-orange-600"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Risk Reduction",
      description: "Minimize deployment risks with comprehensive pre-flight checks and rollback capabilities"
    },
    {
      icon: Zap,
      title: "Operational Excellence",
      description: "Streamline operations with automated monitoring, alerting, and intelligent remediation"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">Key Metrics & Benefits</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Measurable Impact on Your 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> DevOps Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See real improvements in your key performance indicators and team productivity metrics.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center`}>
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                </div>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <h3 className="font-semibold mb-2">{metric.title}</h3>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;