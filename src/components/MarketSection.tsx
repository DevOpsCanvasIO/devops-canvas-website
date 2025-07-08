import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Target, ArrowRight } from "lucide-react";

const MarketSection = () => {
  const marketStats = [
    {
      icon: TrendingUp,
      title: "Market Size",
      value: "$8.2B",
      description: "DevOps market expected to reach $8.2B by 2026",
      growth: "+22.9% CAGR"
    },
    {
      icon: Target,
      title: "TAM",
      value: "$2.1B",
      description: "Total addressable market for DevOps platforms",
      growth: "Growing rapidly"
    },
    {
      icon: DollarSign,
      title: "ARR Target",
      value: "$10M",
      description: "Projected ARR by Year 3 with current roadmap",
      growth: "Conservative estimate"
    }
  ];

  const fundingDetails = [
    {
      title: "Seed Funding",
      amount: "$500K",
      purpose: "Product development, core team expansion",
      timeline: "Q1 2024"
    },
    {
      title: "WGU Partnership",
      amount: "$250K",
      purpose: "Research collaboration, student programs",
      timeline: "Q2 2024"
    }
  ];

  return (
    <section id="market" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">Market Opportunity</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Massive Market</span> Opportunity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The DevOps tools market is experiencing unprecedented growth, driven by digital transformation and cloud adoption.
          </p>
        </div>

        {/* Market Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {marketStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2 text-primary">
                  {stat.value}
                </div>
                <h3 className="font-semibold mb-2">{stat.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{stat.description}</p>
                <Badge variant="secondary" className="text-xs">
                  {stat.growth}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Funding Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Funding Request: <span className="text-accent">$750K Total</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Strategic funding to accelerate product development and market penetration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {fundingDetails.map((detail, index) => (
              <Card key={index} className="border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold">{detail.title}</h4>
                    <Badge variant="outline">{detail.timeline}</Badge>
                  </div>
                  <div className="text-2xl font-bold text-accent mb-3">{detail.amount}</div>
                  <p className="text-muted-foreground">{detail.purpose}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Business Model */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4">SaaS Business Model</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="font-semibold text-primary">Starter</div>
                  <div className="text-muted-foreground">$49/month</div>
                  <div className="text-xs text-muted-foreground">Small teams</div>
                </div>
                <div>
                  <div className="font-semibold text-primary">Professional</div>
                  <div className="text-muted-foreground">$149/month</div>
                  <div className="text-xs text-muted-foreground">Growing companies</div>
                </div>
                <div>
                  <div className="font-semibold text-primary">Enterprise</div>
                  <div className="text-muted-foreground">Custom pricing</div>
                  <div className="text-xs text-muted-foreground">Large organizations</div>
                </div>
              </div>
              <Button className="mt-6 bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent-hover">
                View Business Plan
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;