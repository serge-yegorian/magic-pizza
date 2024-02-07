import Link from "next/link";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeAbout from "./components/HomeAbout";
import HomeMenu from "./components/HomeMenu";


export default function Home() {
  return (
    <>
      <Hero/>
      <HomeMenu/>
      <HomeAbout/>
    </>
  );
}
