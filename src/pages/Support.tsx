import { Mail, MessageSquare, FileQuestion, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const Support = () => {
  const supportOptions = [
    {
      icon: MessageSquare,
      title: "AI Assistant",
      description: "Chat with our AI assistant for instant answers about deepfake detection",
      action: "Chat Now"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Contact our expert team at support@deepguardai.com",
      action: "Send Email"
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Browse our comprehensive guides and technical documentation",
      action: "View Docs"
    },
    {
      icon: FileQuestion,
      title: "FAQ",
      description: "Find answers to commonly asked questions",
      action: "View FAQs"
    }
  ];

  const faqs = [
    {
      question: "What file formats are supported?",
      answer: "We support MP4, AVI, MOV, and WMV video formats up to 500MB in size."
    },
    {
      question: "How long does analysis take?",
      answer: "Analysis typically takes 2-5 minutes depending on video length and quality."
    },
    {
      question: "How accurate is the detection?",
      answer: "Our multi-method approach achieves over 95% accuracy in detecting face-swap deepfakes."
    },
    {
      question: "Is my video data secure?",
      answer: "Yes, all videos are encrypted during upload and processing, and are automatically deleted after analysis."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">Support Center</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            We're here to help you with any questions or concerns
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {supportOptions.map((option) => (
              <Card key={option.title} className="p-6 bg-gradient-card border-border/50 hover:shadow-glow transition-all">
                <option.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                <Button variant="outline" className="w-full">{option.action}</Button>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-card border-border/50 mb-8">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-border/50 pb-4 last:border-0">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-gradient-card border-border/50 text-center">
            <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
            <p className="text-muted-foreground mb-6">
              Our support team is available 24/7 to assist you with any technical or account-related questions.
            </p>
            <Button size="lg" className="shadow-glow">Contact Support Team</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;
