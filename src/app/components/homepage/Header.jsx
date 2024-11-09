"use client";
import { Cart } from "./svgnuud/cart";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between py-4 px-[100px] bg-white">
      <div className="flex gap-8 items-center">
        <img width={30} height={30} src="/VectorBlue.png" alt="" />
        <Link href={"/dashboard"}>
          <div>Dashboard</div>
        </Link>
        <Link href={"records"}>
          <div>Records</div>
        </Link>
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
      </div>
    </header>
  );
};
