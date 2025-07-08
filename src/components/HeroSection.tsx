import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import dashboardImage from "@/assets/dashboard-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-br from-background via-muted to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Unify Your DevOps
                </span>
                <br />
                <span className="text-foreground">
                  Clarity, Speed & Control
                </span>
              </h1>
              <p className="text-xl text-white max-w-lg">
                Transform your DevOps workflows with unified visibility, intelligent automation, 
                and actionable insights that accelerate delivery and reduce MTTR.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent-hover text-lg px-8 py-6"
              >
                Request Early Access
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 group"
              >
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-white">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Free 30-day trial</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={dashboardImage} 
                alt="DevOpsCanvas Dashboard"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-3xl transform scale-95 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;