import { Shield, Brain, Target, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI/ML Technology",
      description: "Utilizing CNNs, RNNs, and LSTM networks for comprehensive deepfake detection"
    },
    {
      icon: Target,
      title: "Multi-Method Analysis",
      description: "Combining spatial, temporal, audio, and frequency analysis for robust detection"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Fast and accurate analysis with detailed mathematical reports"
    },
    {
      icon: Shield,
      title: "High Accuracy",
      description: "State-of-the-art algorithms ensuring reliable deepfake identification"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">About Deep Guard AI</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Leading the fight against synthetic media manipulation
          </p>

          <Card className="p-8 bg-gradient-card border-border/50 mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              Deep Guard AI is dedicated to combating the growing threat of deepfake technology. 
              We develop cutting-edge AI/ML solutions to detect face-swap based deepfake videos, 
              protecting individuals and organizations from misinformation, fraud, and character defamation.
            </p>
            <p className="text-muted-foreground">
              Our forensic techniques authenticate videos by analyzing facial features, expressions, 
              and movements to identify synthetic content with high accuracy. We combine multiple 
              advanced detection methods to provide comprehensive analysis reports.
            </p>
          </Card>

          <h2 className="text-3xl font-bold mb-8 text-center">Our Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 bg-gradient-card border-border/50 hover:shadow-glow transition-all">
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-card border-border/50">
            <h2 className="text-3xl font-bold mb-4">Detection Methods</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Convolutional Neural Networks (CNNs):</strong> Detect inconsistencies in facial features and expressions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Recurrent Neural Networks (RNNs):</strong> Analyze temporal anomalies across video frames</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Frequency Analysis:</strong> Detect artifacts in the frequency domain</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Audio-Visual Consistency:</strong> Identify mismatches between lip movements and speech</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Biometric Verification:</strong> Analyze micro-expressions and behavioral traits</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
