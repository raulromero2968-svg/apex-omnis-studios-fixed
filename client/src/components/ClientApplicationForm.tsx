import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, ArrowLeft, CheckCircle, Loader2, Upload, X, FileText, File, Image as ImageIcon, Eye } from "lucide-react";
import { toast } from "sonner";

interface FormData {
  // Step 1: Business Info
  name: string;
  email: string;
  businessName: string;
  businessDescription: string;
  attachmentFiles: File[];
  
  // Step 2: Challenges & Goals
  currentChallenges: string;
  automationGoals: string;
  successMetrics: string;
  
  // Step 3: Community & Ethics
  targetAudience: string;
  communityImpact: string;
  ethicalAlignment: string;
  
  // Step 4: Budget & Timeline
  budgetRange: string;
  timeline: string;
  whyNow: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  businessName: "",
  businessDescription: "",
  attachmentFiles: [],
  currentChallenges: "",
  automationGoals: "",
  successMetrics: "",
  targetAudience: "",
  communityImpact: "",
  ethicalAlignment: "",
  budgetRange: "",
  timeline: "",
  whyNow: ""
};

export default function ClientApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [previewFile, setPreviewFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});

  const totalSteps = 4;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const processFile = (file: File) => {

    // Check if already at max files
    if (formData.attachmentFiles.length >= 3) {
      toast.error("Maximum 3 files allowed");
      return;
    }

    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      toast.error("File size must be under 10MB");
      return;
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation', // PPTX
      'application/vnd.ms-powerpoint', // PPT
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // DOCX
      'application/msword', // DOC
      'image/jpeg',
      'image/png',
      'image/gif'
    ];

    if (!allowedTypes.includes(file.type)) {
      toast.error("File type not supported. Please upload PDF, PPTX, DOCX, or image files.");
      return;
    }

    // Simulate upload progress for large files
    if (file.size > 1024 * 1024) { // Files larger than 1MB
      const fileId = `${file.name}-${Date.now()}`;
      setUploadProgress(prev => ({ ...prev, [fileId]: 0 }));
      
      // Simulate progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          const currentProgress = prev[fileId] || 0;
          if (currentProgress >= 100) {
            clearInterval(interval);
            // Remove progress after completion
            setTimeout(() => {
              setUploadProgress(prev => {
                const { [fileId]: _, ...rest } = prev;
                return rest;
              });
            }, 500);
            return prev;
          }
          return { ...prev, [fileId]: Math.min(currentProgress + 10, 100) };
        });
      }, 100);
    }

    setFormData(prev => ({
      ...prev,
      attachmentFiles: [...prev.attachmentFiles, file]
    }));
    toast.success(`File "${file.name}" uploaded successfully`);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    processFile(file);
    
    // Reset input to allow uploading same file again
    e.target.value = '';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    processFile(file);
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      attachmentFiles: prev.attachmentFiles.filter((_, i) => i !== index)
    }));
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.includes('pdf')) return FileText;
    if (fileType.includes('word') || fileType.includes('document')) return File;
    if (fileType.includes('presentation') || fileType.includes('powerpoint')) return FileText;
    if (fileType.includes('image')) return ImageIcon;
    return File;
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.name && formData.email && formData.businessName && formData.businessDescription);
      case 2:
        return !!(formData.currentChallenges && formData.automationGoals && formData.successMetrics);
      case 3:
        return !!(formData.targetAudience && formData.communityImpact && formData.ethicalAlignment);
      case 4:
        return !!(formData.budgetRange && formData.timeline && formData.whyNow);
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) {
      toast.error("Please fill in all required fields");
      return;
    }
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL;
      
      if (!webhookUrl) {
        toast.error("Application system is not configured. Please contact us directly.");
        setIsSubmitting(false);
        return;
      }

      // Convert files to base64 if present
      let attachmentsData = null;
      if (formData.attachmentFiles.length > 0) {
        attachmentsData = await Promise.all(
          formData.attachmentFiles.map(async (file) => {
            const base64 = await fileToBase64(file);
            return {
              fileName: file.name,
              fileType: file.type,
              fileSize: file.size,
              fileData: base64
            };
          })
        );
      }

      // Create submission payload without File objects
      const { attachmentFiles, ...restFormData } = formData;
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "client_application",
          timestamp: new Date().toISOString(),
          ...restFormData,
          attachments: attachmentsData
        }),
      });

      if (response.ok) {
        setIsComplete(true);
        toast.success("Application submitted successfully!");
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Application submission error:", error);
      toast.error("Failed to submit application. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto p-12 rounded-lg border border-cyan-500/50 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur text-center"
      >
        <CheckCircle className="w-16 h-16 text-cyan-500 mx-auto mb-6" />
        <h3 className="text-3xl font-bold mb-4">Application Received!</h3>
        <p className="text-lg text-muted-foreground mb-6">
          Thank you for applying to work with Apex Omnis Studios. We review every application personally and will respond within 48 hours.
        </p>
        <p className="text-muted-foreground">
          We'll reach out to <strong className="text-foreground">{formData.email}</strong> with next steps.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`flex-1 h-2 rounded-full mx-1 transition-all ${
                step <= currentStep
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600"
                  : "bg-border/30"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Step {currentStep} of {totalSteps}
        </p>
      </div>

      {/* Form Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="p-8 rounded-lg border border-border/50 bg-card/30 backdrop-blur"
        >
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Tell Us About Your Business</h3>
                <p className="text-muted-foreground">Let's start with the basics.</p>
              </div>

              <div>
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  placeholder="John Doe"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="john@example.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => updateFormData("businessName", e.target.value)}
                  placeholder="Your Company or Project Name"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="businessDescription">What does your business do? *</Label>
                <Textarea
                  id="businessDescription"
                  value={formData.businessDescription}
                  onChange={(e) => updateFormData("businessDescription", e.target.value)}
                  placeholder="Describe your business, products, or services in 2-3 sentences"
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="attachment">Supporting Documents (Optional)</Label>
                <p className="text-sm text-muted-foreground mb-3">
                  Upload up to 3 files: business plan, pitch deck, or portfolio (PDF, PPTX, DOCX, or images up to 10MB each)
                </p>
                
                {/* Uploaded Files List */}
                {formData.attachmentFiles.length > 0 && (
                  <div className="space-y-2 mb-3">
                    {formData.attachmentFiles.map((file, index) => {
                      const FileIcon = getFileIcon(file.type);
                      return (
                        <div key={index} className="flex items-center justify-between p-3 border border-border/50 rounded-lg bg-card/30">
                          <div className="flex items-center gap-3">
                            <FileIcon className="w-5 h-5 text-cyan-500" />
                            <div>
                              <p className="text-sm font-medium">{file.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {(file.type.includes('image') || file.type.includes('pdf')) && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => setPreviewFile(file)}
                                className="text-muted-foreground hover:text-cyan-500"
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                            )}
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Upload Progress Indicators */}
                {Object.keys(uploadProgress).length > 0 && (
                  <div className="space-y-2 mb-3">
                    {Object.entries(uploadProgress).map(([fileId, progress]) => {
                      const fileName = fileId.split('-')[0];
                      return (
                        <div key={fileId} className="p-3 border border-border/50 rounded-lg bg-card/30">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium">{fileName}</p>
                            <p className="text-xs text-muted-foreground">{progress}%</p>
                          </div>
                          <div className="w-full h-2 bg-border/30 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-300"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Upload Button */}
                {formData.attachmentFiles.length < 3 && (
                  <label
                    htmlFor="attachment"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-all ${
                      isDragging
                        ? 'border-cyan-500 bg-cyan-500/10 scale-[1.02]'
                        : 'border-border/50 hover:border-cyan-500/50 hover:bg-cyan-500/5'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 pointer-events-none">
                      <Upload className={`w-8 h-8 mb-2 transition-colors ${
                        isDragging ? 'text-cyan-500' : 'text-muted-foreground'
                      }`} />
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">{isDragging ? 'Drop file here' : 'Click to upload'}</span> {!isDragging && 'or drag and drop'}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, PPTX, DOCX, or images (max 10MB) • {formData.attachmentFiles.length}/3 files
                      </p>
                    </div>
                    <input
                      id="attachment"
                      type="file"
                      className="hidden"
                      accept=".pdf,.ppt,.pptx,.doc,.docx,image/*"
                      onChange={handleFileUpload}
                    />
                  </label>
                )}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Challenges & Goals</h3>
                <p className="text-muted-foreground">Help us understand what you're trying to solve.</p>
              </div>

              <div>
                <Label htmlFor="currentChallenges">What challenges are you facing right now? *</Label>
                <Textarea
                  id="currentChallenges"
                  value={formData.currentChallenges}
                  onChange={(e) => updateFormData("currentChallenges", e.target.value)}
                  placeholder="e.g., Manual data entry taking 10 hours/week, struggling to track customer interactions, content creation bottleneck..."
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="automationGoals">What do you want automation to help you achieve? *</Label>
                <Textarea
                  id="automationGoals"
                  value={formData.automationGoals}
                  onChange={(e) => updateFormData("automationGoals", e.target.value)}
                  placeholder="e.g., Free up 15 hours/week for client work, improve response time, scale content production..."
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="successMetrics">How will you measure success? *</Label>
                <Textarea
                  id="successMetrics"
                  value={formData.successMetrics}
                  onChange={(e) => updateFormData("successMetrics", e.target.value)}
                  placeholder="e.g., Time saved, revenue increase, customer satisfaction, error reduction..."
                  className="mt-2 min-h-[100px]"
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Community & Ethics</h3>
                <p className="text-muted-foreground">We only work with businesses that serve their communities.</p>
              </div>

              <div>
                <Label htmlFor="targetAudience">Who is your target audience/community? *</Label>
                <Textarea
                  id="targetAudience"
                  value={formData.targetAudience}
                  onChange={(e) => updateFormData("targetAudience", e.target.value)}
                  placeholder="e.g., TCG collectors, high school teachers, indie game developers..."
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="communityImpact">How does your business serve this community? *</Label>
                <Textarea
                  id="communityImpact"
                  value={formData.communityImpact}
                  onChange={(e) => updateFormData("communityImpact", e.target.value)}
                  placeholder="e.g., Help collectors find events, save teachers time for students, connect creators with resources..."
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="ethicalAlignment">Why is our ethical approach important to you? *</Label>
                <Textarea
                  id="ethicalAlignment"
                  value={formData.ethicalAlignment}
                  onChange={(e) => updateFormData("ethicalAlignment", e.target.value)}
                  placeholder="e.g., I've seen scalpers hurt my community, I want to build trust not exploit it, long-term relationships matter more than quick wins..."
                  className="mt-2 min-h-[100px]"
                />
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Budget & Timeline</h3>
                <p className="text-muted-foreground">Let's make sure we're aligned on expectations.</p>
              </div>

              <div>
                <Label>What's your budget range for this project? *</Label>
                <RadioGroup
                  value={formData.budgetRange}
                  onValueChange={(value) => updateFormData("budgetRange", value)}
                  className="mt-3 space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="under-5k" id="under-5k" />
                    <Label htmlFor="under-5k" className="font-normal cursor-pointer">
                      Under $5,000 (Simple automation, limited scope)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5k-15k" id="5k-15k" />
                    <Label htmlFor="5k-15k" className="font-normal cursor-pointer">
                      $5,000 - $15,000 (Standard project, multiple integrations)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="15k-30k" id="15k-30k" />
                    <Label htmlFor="15k-30k" className="font-normal cursor-pointer">
                      $15,000 - $30,000 (Complex system, custom development)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="over-30k" id="over-30k" />
                    <Label htmlFor="over-30k" className="font-normal cursor-pointer">
                      Over $30,000 (Enterprise-level, ongoing partnership)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="not-sure" id="not-sure" />
                    <Label htmlFor="not-sure" className="font-normal cursor-pointer">
                      Not sure yet (Let's discuss)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>When do you need this completed? *</Label>
                <RadioGroup
                  value={formData.timeline}
                  onValueChange={(value) => updateFormData("timeline", value)}
                  className="mt-3 space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="asap" id="asap" />
                    <Label htmlFor="asap" className="font-normal cursor-pointer">
                      ASAP (Within 1 month)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1-3-months" id="1-3-months" />
                    <Label htmlFor="1-3-months" className="font-normal cursor-pointer">
                      1-3 months
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3-6-months" id="3-6-months" />
                    <Label htmlFor="3-6-months" className="font-normal cursor-pointer">
                      3-6 months
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flexible" id="flexible" />
                    <Label htmlFor="flexible" className="font-normal cursor-pointer">
                      Flexible (Just exploring options)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="whyNow">Why is now the right time for this project? *</Label>
                <Textarea
                  id="whyNow"
                  value={formData.whyNow}
                  onChange={(e) => updateFormData("whyNow", e.target.value)}
                  placeholder="e.g., Business is growing and manual processes can't keep up, launching new product line, competitor pressure..."
                  className="mt-2 min-h-[100px]"
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border/50">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1 || isSubmitting}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>

            {currentStep < totalSteps ? (
              <Button
                onClick={handleNext}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 flex items-center gap-2"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <CheckCircle className="w-4 h-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* File Preview Modal */}
      {previewFile && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setPreviewFile(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full mx-4 bg-card border border-border rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div>
                <h3 className="text-lg font-semibold">{previewFile.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {(previewFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setPreviewFile(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-4 overflow-auto max-h-[calc(90vh-80px)]">
              {previewFile.type.includes('image') ? (
                <img
                  src={URL.createObjectURL(previewFile)}
                  alt={previewFile.name}
                  className="w-full h-auto rounded-lg"
                  onLoad={(e) => URL.revokeObjectURL((e.target as HTMLImageElement).src)}
                />
              ) : previewFile.type.includes('pdf') ? (
                <iframe
                  src={URL.createObjectURL(previewFile)}
                  className="w-full h-[70vh] rounded-lg"
                  title={previewFile.name}
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                  <File className="w-16 h-16 mb-4" />
                  <p>Preview not available for this file type</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
