import Category from "@/components/modules/home/Category";
import HeroSection from "@/components/modules/home/HeroSection";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <HeroSection />
      <Category />
    </Fragment>
  );
}
