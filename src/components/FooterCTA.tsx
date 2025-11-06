import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Mail } from "lucide-react";

const FooterCTA = ({ onNavigate }) => {
  return (
    <footer className="relative py-16 bg-primary text-primary-foreground overflow-hidden">
      {/* Organic Shape Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Wellness?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join the NatLife community and discover purely organic living.
            </p>
            <Button variant="secondary" size="lg" className="text-lg magnetic-hover" onClick={onNavigate}>
              Get Early Access
            </Button>
          </motion.div>

          {/* Decorative Gold Line */}
          <div className="h-[2px] w-full max-w-xl mx-auto bg-gradient-gold mb-12" />

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-10"
          >
            <a
              // href="#"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:scale-110 transition-spring"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              // href="#"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:scale-110 transition-spring"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@natlife.org.in"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:scale-110 transition-spring"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-primary-foreground/60 text-sm">
              © 2025 NatLife. All rights reserved. Purely Organic, Naturally Fresh.
            </p>
            <div className="flex justify-center gap-6 text-sm text-primary-foreground/60">
              {/* <a href="#" className="hover:text-secondary transition-smooth">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-secondary transition-smooth">
                Terms of Service
              </a> */}
              <span>•</span>
              <a href="#" className="hover:text-secondary transition-smooth">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
