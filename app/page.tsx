"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Nav from "@/components/Nav";
import BackgroundImage from "@/components/BackgroundImage";
import Team from "@/components/Team";
import BackgroundImageSecond from "@/components/BackgroundImageSecond";
import Back from "@/components/Back"
import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("@/components/HomePage"), {
  ssr: false,
});
const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden  ">
      <div className=" w-full">
        <Nav></Nav>
        {/* <Back></Back> */}
        {/* <BackgroundImage></BackgroundImage> */}
        <BackgroundImageSecond></BackgroundImageSecond>
        <HomePage></HomePage>
        <div className="mx-auto sm:px-10 px-5">
   <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Team></Team>
        <Footer />
        </div>
     
      </div>
    </main>
  );
};

export default Home;
