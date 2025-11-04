import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, ArrowLeft, User, Mail, Calendar } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    joinDate: ""
  });

  useEffect(() => {
    const isAuth = localStorage.getItem("deepguard_auth");
    if (!isAuth) {
      toast.error("Please sign in to access your profile");
      navigate("/auth");
      return;
    }

    // Load user data from localStorage
    const storedData = localStorage.getItem("deepguard_user");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    } else {
      // Set default data
      const defaultData = {
        name: "User",
        email: "user@example.com",
        joinDate: new Date().toLocaleDateString()
      };
      setUserData(defaultData);
      localStorage.setItem("deepguard_user", JSON.stringify(defaultData));
    }
  }, [navigate]);

  const handleSave = () => {
    localStorage.setItem("deepguard_user", JSON.stringify(userData));
    toast.success("Profile updated successfully");
  };

  const getInitials = () => {
    return userData.name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/50 backdrop-blur-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Deep Guard AI</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">Profile Settings</h1>

        <Card className="p-8 bg-gradient-card border-border/50 mb-6">
          <div className="flex items-center gap-6 mb-8">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                {getInitials()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">{userData.name}</h2>
              <p className="text-muted-foreground">{userData.email}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                <User className="h-4 w-4" />
                Full Name
              </Label>
              <Input
                id="name"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                className="bg-secondary border-border"
              />
            </div>

            <div>
              <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                <Mail className="h-4 w-4" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                className="bg-secondary border-border"
              />
            </div>

            <div>
              <Label className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4" />
                Member Since
              </Label>
              <Input
                value={userData.joinDate}
                disabled
                className="bg-secondary border-border opacity-60"
              />
            </div>

            <Button onClick={handleSave} className="w-full shadow-glow">
              Save Changes
            </Button>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card border-border/50">
          <h3 className="text-xl font-bold mb-4">Account Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Videos Analyzed</p>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Deepfakes Detected</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
