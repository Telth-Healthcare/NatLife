import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import ProductCategories from "@/components/ProductCategories";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {

  const formRef = useRef(null);
  const valueRef = useRef(null);
  
  const handleNavigate = () => {
    formRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNavigateToValue = () => {
    valueRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavigateToAccess = () => {
    formRef?.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }


  return (
    <div className="min-h-screen">
      <HeroSection onNavigate={handleNavigate} onLearnMore={handleNavigateToValue} />
      <ValueProposition ref={valueRef} />
      <ProductCategories />
      <EarlyAccessForm ref={formRef} />
      <FooterCTA onNavigate={handleNavigateToAccess}/>
    </div>
  );
};

export default Index;
