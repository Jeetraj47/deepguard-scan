import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Upload, FileVideo, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface UploadSectionProps {
  onClose: () => void;
}

const UploadSection = ({ onClose }: UploadSectionProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("video/")) {
      setSelectedFile(file);
    } else {
      toast.error("Please upload a video file");
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis - in production, this would call your ML backend
    setTimeout(() => {
      setIsAnalyzing(false);
      toast.success("Video analyzed successfully!");
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 bg-gradient-card border-border/50 shadow-elevated relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute right-4 top-4"
        >
          <X className="h-5 w-5" />
        </Button>

        <h2 className="text-3xl font-bold mb-2">Upload Video</h2>
        <p className="text-muted-foreground mb-6">
          Upload a video file to analyze for deepfake detection
        </p>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-all ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50"
          }`}
        >
          {selectedFile ? (
            <div className="space-y-4">
              <FileVideo className="h-16 w-16 text-primary mx-auto" />
              <div>
                <p className="font-medium">{selectedFile.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => setSelectedFile(null)}
              >
                Choose Different File
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Upload className="h-16 w-16 text-muted-foreground mx-auto" />
              <div>
                <p className="font-medium mb-2">
                  Drag and drop your video here
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  or click to browse
                </p>
              </div>
              <input
                type="file"
                accept="video/*"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button variant="outline" asChild>
                  <span>Select Video File</span>
                </Button>
              </label>
            </div>
          )}
        </div>

        {selectedFile && (
          <div className="mt-6 flex gap-3">
            <Button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="flex-1 shadow-glow"
              size="lg"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze Video"
              )}
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default UploadSection;
