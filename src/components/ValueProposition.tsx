import { motion, useInView } from "framer-motion";
import { forwardRef, useRef } from "react";
import { Leaf, Shield, Sparkles } from "lucide-react";
import farmerPortrait from "@/assets/farmer-portrait.jpg";

const values = [
  {
    number: "01",
    icon: Leaf,
    title: "100% Organic Certified",
    description:
      "Every product sourced from certified organic farms, ensuring purity and sustainability in every harvest.",
  },
  {
    number: "02",
    icon: Shield,
    title: "Farm to Table Promise",
    description:
      "Direct partnerships with local farmers guarantee freshness and support sustainable agricultural practices.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Ancient Wisdom, Modern Science",
    description:
      "Combining time-tested Ayurvedic knowledge with cutting-edge preservation technology for optimal nutrition.",
  },
];

const ValueProposition = forwardRef((props, ref) => {
  const localRef = useRef(null);
  const isInView = useInView(localRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={(node) => {
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
        localRef.current = node;
      }}
      className="py-24 md:py-24 bg-background relative overflow-hidden"
    >
      {/* Organic Blob Shapes - Background */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Side - Image with Diagonal Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
              <img
                src={farmerPortrait}
                alt="Confident farmer with organic produce"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </motion.div>

          {/* Right Side - Value Props Stack */}
          <div className="space-y-8">
            {values.map((value, index) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group relative"
              >
                <div className="flex gap-6 items-start p-6 rounded-2xl bg-card border border-border transition-smooth hover:shadow-elegant hover:scale-[1.02] cursor-pointer">
                  {/* Number */}
                  <div className="text-6xl font-display font-bold text-gradient-gold opacity-30 select-none">
                    {value.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-spring">
                        <value.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default ValueProposition;
