import { useTitle } from "../../hooks/useTitle";
import { HomeHero } from "./components/HomeHero";
import { HomeFeaturedProducts } from "./components/HomeFeaturedProducts";
import { HomeTestimonials } from "./components/HomeTestimonials";
import { HomeFaq } from "./components/HomeFaq";

export const HomePage = () => {
  useTitle("Home");

  return (
    <main>
      <HomeHero />
      <HomeFeaturedProducts />
      <HomeTestimonials />
      <HomeFaq />
    </main>
  );
};
