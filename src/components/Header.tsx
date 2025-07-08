import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/e66c9c36-0458-4aef-8a79-a0a7e015a399.png" 
              alt="DevOpsCanvas Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-foreground">DevOpsCanvas</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </a>
            <a href="#market" className="text-muted-foreground hover:text-foreground transition-colors">
              Market
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Request Demo
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent-hover">
              Early Access
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                Benefits
              </a>
              <a href="#market" className="text-muted-foreground hover:text-foreground transition-colors">
                Market
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  Request Demo
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent-hover">
                  Early Access
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;