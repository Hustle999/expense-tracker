"use client";
import { Cart } from "./svgnuud/cart";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { ExitSvg } from "./svgnuud/Exit";

export const Header = () => {
  const router = useRouter();

  const Records = () => {
    router.push("/records");
  };

  const SignOut = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/");
    toast.success("Successfully signed out");
  };

  return (
    <header className="flex justify-between py-4 px-[100px] bg-white">
      <div className="flex gap-8 items-center">
        <img width={30} height={30} src="/VectorBlue.png" alt="" />
        <Link href={"/dashboard"}>
          <div>Dashboard</div>
        </Link>
        <button onClick={Records}>Records</button>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-1 text-white ">
          <div>- Your Cart</div>
          <div className="w-6 h-6">
            <Cart />
          </div>
        </div>
        <div className="">
          <img
            className="rounded-full"
            width={50}
            height={50}
            src="../ProfilePic.png"
            alt=""
          />
        </div>
        <button
          onClick={SignOut}
          className="bg-black text-white p-2 rounded-md hover:bg-red-500"
        >
          <ExitSvg />
        </button>
      </div>
    </header>
  );
};
