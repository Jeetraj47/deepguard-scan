import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Upload, MessageSquare, LogOut, FileVideo, CheckCircle, AlertTriangle, User } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import UploadSection from "@/components/UploadSection";
import ChatBot from "@/components/ChatBot";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showUpload, setShowUpload] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("deepguard_auth");
    if (!isAuth) {
      toast.error("Please sign in to access the dashboard");
      navigate("/auth");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("deepguard_auth");
    toast.success("Logged out successfully");
    navigate("/");
  };

  const stats = [
    { label: "Videos Analyzed", value: "0", icon: FileVideo, color: "text-primary" },
    { label: "Authentic", value: "0", icon: CheckCircle, color: "text-success" },
    { label: "Deepfakes Detected", value: "0", icon: AlertTriangle, color: "text-warning" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/50 backdrop-blur-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Deep Guard AI</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/profile")}>
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/10 text-primary">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </Button>
            <Button variant="ghost" onClick={handleLogout} className="text-muted-foreground">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Monitor your deepfake detection activities</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 bg-gradient-card border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </Card>
          ))}
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-glow transition-all cursor-pointer" onClick={() => setShowUpload(true)}>
            <Upload className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Upload Video</h3>
            <p className="text-muted-foreground">
              Upload a video to analyze for deepfake detection
            </p>
          </Card>

          <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-glow transition-all cursor-pointer" onClick={() => setShowChat(true)}>
            <MessageSquare className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">AI Assistant</h3>
            <p className="text-muted-foreground">
              Chat with our AI to learn more about deepfake detection
            </p>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="p-6 bg-gradient-card border-border/50">
          <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
          <div className="text-center py-12 text-muted-foreground">
            <FileVideo className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No videos analyzed yet. Upload your first video to get started!</p>
          </div>
        </Card>
      </div>

      {/* Modals */}
      {showUpload && <UploadSection onClose={() => setShowUpload(false)} />}
      {showChat && <ChatBot onClose={() => setShowChat(false)} />}
    </div>
  );
};

export default Dashboard;
