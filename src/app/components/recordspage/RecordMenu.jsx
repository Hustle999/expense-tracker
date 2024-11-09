"use client";

import { AddCategory } from "./catagory/AddCatagory";

export const RecordMenu = () => {
  return (
    <div className="flex flex-col gap-5 w-[400px] h-full p-[20px] bg-white rounded-xl">
      <div className="font-semibold text-2xl">Records</div>
      <button className="bg-blue-600 text-white p-1 rounded-2xl">+ Add</button>
      <input
        className="border p-1 rounded-md"
        type="search"
        placeholder="Search..."
        name=""
        id=""
      />
      <div className="flex flex-col">
        <div className="font-semibold">Types</div>
        <div className="ml-5">
          <li>All</li>
          <li>Income</li>
          <li>Expense</li>
        </div>
      </div>
      <div>
        <div className="font-semibold">Category</div>
        <div className="flex flex-col gap-4"></div>
        <AddCategory />
      </div>
    </div>
  );
};
