import { motion, useInView } from "framer-motion";
import { forwardRef, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Users } from "lucide-react";
import { toast } from "sonner";
import farmSunrise from "@/assets/farm-sunrise.jpg";

const EarlyAccessForm = forwardRef((props, ref) => {
  const localRef = useRef(null);
  const isInView = useInView(localRef, { once: true, margin: "-100px" });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
  });

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email, interest } = formData;
    if (!name || !email || !interest) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const fd = new FormData();
      fd.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      fd.append("from_name", name);
      fd.append("email", email);
      fd.append("message", `Interest: ${interest}`);
      // fd.append("subject", "New Early Access Form Submission");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });

      const data = await response.json();

      if (data.success) {
        toast.success(
          "Welcome to NatLife! Check your email for exclusive updates."
        );
        setIsSubmitted(true);
        setFormData({ name: "", email: "", interest: "" });
      } else {
        console.error("Error:", data);
        toast.error(data.message || "Something went wrong, try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error — please try again later.");
    }
  };

  return (
    <section
      ref={(node) => {
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
        localRef.current = node;
      }}
      className="relative py-24 md:py-40 overflow-hidden"
      style={{
        backgroundImage: `url(${farmSunrise})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={localRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* Glass Card */}
          <div className="glass-morphism rounded-[2rem] p-10 md:p-14 shadow-elegant backdrop-blur-2xl">
            {!isSubmitted ? (
              <>
                {/* Social Proof Counter */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center justify-center gap-2 mb-8"
                >
                  <Users className="w-5 h-5 text-secondary" />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-primary-foreground/90"
                  >
                    Join{" "}
                    <span className="font-bold text-gradient-gold">1,247+</span>{" "}
                    early members
                  </motion.span>
                </motion.div>

                <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-primary-foreground mb-4">
                  Be the First to Experience
                </h2>
                <p className="text-center text-primary-foreground/80 text-lg mb-10">
                  Get exclusive early access, special launch offers, and
                  wellness insights delivered to your inbox.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="h-14 rounded-2xl bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-secondary focus:ring-secondary backdrop-blur-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="h-14 rounded-2xl bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-secondary focus:ring-secondary backdrop-blur-sm"
                    />
                  </div>

                  {/* Interest Select */}
                  <div>
                    <Select
                      value={formData.interest}
                      onValueChange={(v) => handleChange("interest", v)}
                    >
                      <SelectTrigger className="h-14 rounded-2xl bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground focus:border-secondary focus:ring-secondary backdrop-blur-sm">
                        <SelectValue placeholder="I'm most interested in..." />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        <SelectItem value="freeze-dried">
                          Freeze-Dried Superfoods
                        </SelectItem>
                        <SelectItem value="ayurveda">
                          Ayurveda & Siddha
                        </SelectItem>
                        <SelectItem value="pharmacy">E-Pharmacy</SelectItem>
                        <SelectItem value="baby-care">Baby Care</SelectItem>
                        <SelectItem value="all">All Products</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    className="w-full h-14 text-lg"
                  >
                     Join the Waitlist
                  </Button>
                </form>

                <p className="text-center text-primary-foreground/60 text-sm mt-6">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </>
            ) : (
              // ✅ Success State
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    duration: 0.6,
                    delay: 0.2,
                  }}
                  className="inline-block mb-6"
                >
                  <CheckCircle2 className="w-20 h-20 text-secondary" />
                </motion.div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Welcome to NatLife!
                </h3>
                <p className="text-primary-foreground/80 text-lg mb-6">
                  You're on the list. We'll send you exclusive updates and early
                  access details soon.
                </p>
                <div className="inline-block px-6 py-3 rounded-2xl bg-secondary/20 backdrop-blur-sm">
                  <p className="text-primary-foreground font-semibold">
                    Check your email for a special welcome gift
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default EarlyAccessForm;
