import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import freezeDried from "@/assets/freeze-dried.jpg";
import ayurveda from "@/assets/ayurveda.jpg";
import babyCare from "@/assets/baby-care.jpg";
import pharmacy from "@/assets/pharmacy.jpg";

const categories = [
  {
    title: "Freeze-Dried Superfoods",
    image: freezeDried,
    size: "large", // 2 columns span
    description: "Lock in nutrients, unlock pure flavor",
  },
  {
    title: "E-Pharmacy",
    image: pharmacy,
    size: "vertical", // Tall card
    description: "Natural remedies delivered to your door",
  },
  {
    title: "Ayurveda & Siddha",
    image: ayurveda,
    size: "horizontal", // Wide card
    description: "Ancient healing wisdom for modern wellness",
  },
  {
    title: "Baby Care",
    image: babyCare,
    size: "square", // Normal square
    description: "Pure, gentle care for your little one",
  },
];

const ProductCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Heading with Decorative Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            Curated for Your Wellness
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-[2px] w-20 bg-gradient-gold" />
            <Leaf className="w-6 h-6 text-secondary" />
            <div className="h-[2px] w-20 bg-gradient-gold" />
          </div>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Freeze-Dried - Large (2 cols x 2 rows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl cursor-pointer shadow-elegant hover:shadow-glow transition-smooth"
          >
            <div className="relative h-[400px] md:h-full overflow-hidden">
              <img
                src={categories[0].image}
                alt={categories[0].title}
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-80 group-hover:opacity-70 transition-smooth" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-secondary/20 text-primary-foreground mb-3 backdrop-blur-sm">
                  Coming Soon
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  {categories[0].title}
                </h3>
                <p className="text-primary-foreground/90 text-sm md:text-base">
                  {categories[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* E-Pharmacy - Vertical (1 col x 2 rows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:row-span-2 group relative overflow-hidden rounded-3xl cursor-pointer shadow-elegant hover:shadow-glow transition-smooth"
          >
            <div className="relative h-[300px] md:h-full overflow-hidden">
              <img
                src={categories[1].image}
                alt={categories[1].title}
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-80 group-hover:opacity-70 transition-smooth" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary/20 text-primary-foreground mb-2 backdrop-blur-sm">
                  Coming Soon
                </span>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-1">
                  {categories[1].title}
                </h3>
                <p className="text-primary-foreground/90 text-sm">
                  {categories[1].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Ayurveda - Horizontal (1 col) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-elegant hover:shadow-glow transition-smooth"
          >
            <div className="relative h-[250px] overflow-hidden">
              <img
                src={categories[2].image}
                alt={categories[2].title}
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-80 group-hover:opacity-70 transition-smooth" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary/20 text-primary-foreground mb-2 backdrop-blur-sm">
                  Coming Soon
                </span>
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">
                  {categories[2].title}
                </h3>
                <p className="text-primary-foreground/90 text-sm">
                  {categories[2].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Baby Care - Square (1 col) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-elegant hover:shadow-glow transition-smooth"
          >
            <div className="relative h-[250px] overflow-hidden">
              <img
                src={categories[3].image}
                alt={categories[3].title}
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-80 group-hover:opacity-70 transition-smooth" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary/20 text-primary-foreground mb-2 backdrop-blur-sm">
                  Coming Soon
                </span>
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">
                  {categories[3].title}
                </h3>
                <p className="text-primary-foreground/90 text-sm">
                  {categories[3].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Missing import - add Leaf icon
import { Leaf } from "lucide-react";

export default ProductCategories;
