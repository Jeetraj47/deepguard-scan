import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Brain,
  Zap,
  Lock,
  FileVideo,
  BarChart3,
  CheckCircle,
  Mail,
  MessageSquare,
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Detection",
      description: "Multi-algorithm approach using CNNs, RNNs, and frequency analysis",
    },
    {
      icon: Zap,
      title: "Real-time Analysis",
      description: "Fast processing with detailed anomaly detection",
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "Your videos are processed securely with end-to-end encryption",
    },
    {
      icon: BarChart3,
      title: "Detailed Reports",
      description: "Comprehensive analysis with confidence scores and visual markers",
    },
  ];

  const whyChoose = [
    "99.2% accuracy in deepfake detection",
    "Support for multiple video formats",
    "Advanced temporal and spatial analysis",
    "Biometric verification and micro-expression detection",
    "Audio-visual consistency checks",
    "Blockchain-based authenticity verification",
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block p-3 rounded-full bg-primary/10 mb-6 shadow-glow">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Deep Guard AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Advanced AI-powered deepfake detection to protect against synthetic media
            and face-swap videos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="shadow-glow text-lg px-8"
            >
              Start Detection
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/dashboard")}
              className="text-lg px-8"
            >
              View Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About Deep Guard AI
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Leveraging cutting-edge machine learning to detect face-swap deepfakes
            and synthetic media with unprecedented accuracy
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="p-6 bg-gradient-card border-border/50 hover:shadow-glow transition-all"
              >
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Deep Guard Section */}
      <section id="why-deepguard" className="py-20 px-4 bg-gradient-card">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Why Choose Deep Guard AI?
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Industry-leading technology backed by advanced research and proven results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChoose.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <p className="text-lg">{reason}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" onClick={() => navigate("/auth")} className="shadow-glow">
              Try Deep Guard AI Now
            </Button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get Support
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            We're here to help you with any questions or concerns
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-glow transition-all">
              <Mail className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Email Support</h3>
              <p className="text-muted-foreground mb-4">
                Get in touch with our support team
              </p>
              <a
                href="mailto:support@deepguard.ai"
                className="text-primary hover:underline"
              >
                support@deepguard.ai
              </a>
            </Card>

            <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-glow transition-all">
              <MessageSquare className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Live Chat</h3>
              <p className="text-muted-foreground mb-4">
                Chat with our AI assistant or team
              </p>
              <Button variant="outline">Start Chat</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4 mt-20">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-bold text-foreground">Deep Guard AI</span>
          </div>
          <p className="text-sm">
            © 2024 Deep Guard AI. Advanced deepfake detection technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
