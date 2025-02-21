import Category from "@/components/modules/home/Category";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import HeroSection from "@/components/modules/home/HeroSection";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <HeroSection />
      <Category />
      <FeaturedProducts />
    </Fragment>
  );
}
