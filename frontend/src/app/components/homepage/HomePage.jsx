"use client";
import { useState, useEffect } from "react";
import { Loading } from "../loading/Loading";
import { Header } from "./Header";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const HomePage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    setTimeout(() => {
      if (!isLoggedIn) {
        toast.warning("Login please!");
        router.push("/");
      } else {
        setLoading(false);
      }
    }, 700);
  }, [router]);

  if (loading) return <Loading />;

  return (
    <main className="flex flex-col w-full h-screen gap-5 bg-slate-200">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
};
