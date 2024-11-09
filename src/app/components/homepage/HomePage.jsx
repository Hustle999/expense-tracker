"use client";
import { Header } from "./Header";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      toast.warning("Login please!");
      router.push("/");
    }
  }, [router]);

  return (
    <main className="flex flex-col w-full h-screen gap-5 bg-slate-200">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
};
