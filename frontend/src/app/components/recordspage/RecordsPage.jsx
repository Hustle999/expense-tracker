"use client";

import { useState, useEffect } from "react";
import { Header } from "../homepage/Header";
import { RecordLoading } from "../loading/Loading";
import { RecordMenu } from "./RecordMenu";
import { RecordsView } from "./RecordsView";

export const RecordsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <RecordLoading />;
  }

  return (
    <main className="flex flex-col w-full h-screen gap-5 bg-slate-200">
      <Header />
      <div className="flex px-[100px]">
        <RecordMenu />
        <RecordsView />
      </div>
    </main>
  );
};
