import { Shield, CheckCircle, Lock, Cpu, FileCheck, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const WhyDeepGuard = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Unmatched Accuracy",
      description: "Our multi-method approach combines the latest AI/ML technologies to achieve industry-leading detection rates"
    },
    {
      icon: Cpu,
      title: "Advanced Technology",
      description: "Leveraging CNNs, RNNs, LSTMs, and hybrid models for comprehensive analysis"
    },
    {
      icon: FileCheck,
      title: "Detailed Reports",
      description: "Get comprehensive analysis with mathematical evidence, anomalies detected, and confidence scores"
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "Your videos are processed securely with end-to-end encryption and are never shared"
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Trusted by security agencies and organizations worldwide for critical deepfake detection"
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Our team of AI specialists and forensic experts are available to assist you"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">Why Choose Deep Guard AI</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            The most advanced deepfake detection platform available
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {reasons.map((reason) => (
              <Card key={reason.title} className="p-6 bg-gradient-card border-border/50 hover:shadow-glow transition-all">
                <reason.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-card border-border/50 mb-8">
            <h2 className="text-3xl font-bold mb-6">The Deepfake Threat</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Synthetic media and deepfakes are becoming increasingly sophisticated, creating serious concerns:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-warning font-bold">⚠</span>
                  <span><strong>Political Disruption:</strong> Fake videos can influence elections and damage democratic processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-warning font-bold">⚠</span>
                  <span><strong>Fraud & Scams:</strong> Criminals use deepfakes for identity theft and financial fraud</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-warning font-bold">⚠</span>
                  <span><strong>Disinformation:</strong> Spread of false information can cause panic and social unrest</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-warning font-bold">⚠</span>
                  <span><strong>Character Defamation:</strong> Innocent individuals can be falsely portrayed in compromising situations</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-card border-border/50">
            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
            <p className="text-muted-foreground mb-4">
              Deep Guard AI is committed to staying ahead of deepfake technology. We continuously update our 
              detection algorithms to counter new generation techniques, ensuring you always have the most 
              effective protection available.
            </p>
            <p className="text-muted-foreground">
              Our multi-pronged approach combines technology, research, and expertise to provide you with 
              the most reliable deepfake detection solution on the market.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhyDeepGuard;
