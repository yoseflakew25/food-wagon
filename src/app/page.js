import Image from "next/image";
import { Hero } from "./components/Hero";
import FoodList from "./components/FoodList";

export default function Home() {
  return (
   <div>
    <Hero />
    <FoodList />
   </div>
  );
}
