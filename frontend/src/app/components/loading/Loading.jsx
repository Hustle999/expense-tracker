"use client";
import { Header } from "../homepage/Header";

export const Loading = () => {
  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex gap-3 justify-center items-center">
          <img src="./VectorBlue.png" alt="" />
          <div className="font-semibold text-2xl">Geld</div>
        </div>
        <div className="loading loading-spinner loading-lg"></div>
        <div className="text-xl">Please Wait...</div>
      </div>
    </div>
  );
};

export const RecordLoading = () => {
  return (
    <main className="flex flex-col w-full h-screen gap-5 bg-slate-200">
      <Header />
      <div className="flex gap-10 px-[100px]">
        <div className="skeleton h-[600px] w-[400px]"></div>
        <div className="flex flex-col gap-5 w-full">
          <div className="skeleton p-6 rounded-lg"></div>
          <div className="skeleton p-6 rounded-lg"></div>
          <div className="skeleton p-6 rounded-lg"></div>
          <div className="skeleton p-6 rounded-lg"></div>
          <div className="skeleton p-6 rounded-lg"></div>
          <div className="skeleton p-6 rounded-lg"></div>
          <div className="skeleton p-6 rounded-lg"></div>
          <div className="skeleton p-6 rounded-lg"></div>
          <div className="skeleton p-6 rounded-lg"></div>
          <div className="skeleton p-6 rounded-lg"></div>
          <div className="skeleton p-6 rounded-lg"></div>
          <div className="skeleton p-6 rounded-lg"></div>
        </div>
      </div>
    </main>
  );
};
