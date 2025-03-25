"use client";

import { navItems } from "@/data";
import dynamic from "next/dynamic";
// Static imports
const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => <div className="w-full h-[80vh] bg-transparent" /> // Adjust loading placeholder
});
// Dynamically import Grid
const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false, // Optional: Disable server-side rendering if needed
});
import Footer from "@/components/Footer";
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Experience = dynamic(
  () => import("@/components/Experience"),
  { 
    ssr: false, // Disable server-side rendering if needed
    loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse" /> // Loading placeholder
  }
);
const RecentProjects = dynamic(
  () => import('@/components/RecentProjects'),
  { 
    ssr: false, // Disable server-side rendering if needed
    loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse" /> // Loading placeholder
  }
);
const Team = dynamic(
  () => import('@/components/Team'),
  { 
    ssr: false, // Disable server-side rendering if needed
    loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse" /> // Loading placeholder
  }
);


const FloatingNav = dynamic(
  () => import("@/components/ui/FloatingNavbar")
    .then((mod) => mod.FloatingNav),
  { 
    ssr: false,
    loading: () => <div className="w-full h-12 bg-transparent" />
  }
);


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={navItems} 
          className="your-custom-class-here" // optional
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Team />
        <Footer />
      </div>
    </main>
  );
};

export default Home;