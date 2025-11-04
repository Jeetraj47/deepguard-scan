import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full border-b border-border/50 bg-background/50 backdrop-blur-lg z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Deep Guard AI</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("home")} className="text-sm hover:text-primary transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="text-sm hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection("why-deepguard")} className="text-sm hover:text-primary transition-colors">
            Why Deep Guard
          </button>
          <button onClick={() => scrollToSection("support")} className="text-sm hover:text-primary transition-colors">
            Support
          </button>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={() => navigate("/auth")}>
            Sign In
          </Button>
          <Button onClick={() => navigate("/auth")} className="shadow-glow">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
