"use client";

import Link from "next/link";

export const LoginForm = () => {
  return (
    <form className="flex flex-col w-[384px] gap-4" action="">
      <input
        className="w-full bg-slate-100 border rounded-lg p-3"
        name="name"
        placeholder="Name"
        type="text"
      />
      <input
        className="w-full bg-slate-100 border rounded-lg p-3"
        name="password"
        placeholder="Password"
        type="password"
      />
      <Link href={"/dashboard"}>
        <button
          type="submit"
          className="w-full bg-blue-600 rounded-2xl p-3 text-white font-semibold"
        >
          Log in
        </button>
      </Link>
    </form>
  );
};
