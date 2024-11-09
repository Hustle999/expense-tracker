"use client";
import React, { useState } from "react";
import { Car, Finance, Home } from "./Icons";

export const AddCategory = () => {
  const [selectedIcon, setSelectedIcon] = useState(<Home />);
  const [isModal4Open, setIsModal4Open] = useState(false);
  const [isModal5Open, setIsModal5Open] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
    setIsModal5Open(false);
  };

  const handleCreateCategory = async (e) => {
    e.preventDefault();

    if (!categoryName) {
      alert("Please enter a category name");
      return;
    }

    try {
      const response = await fetch("http://localhost:4444/create-category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tableName: categoryName }),
      });

      const data = await response.json();

      setIsModal4Open(false);

      if (response.ok) {
        alert(data.message);
      } else {
        alert(`Error: ${data.message || data}`);
      }
    } catch (error) {
      console.error("Error creating category:", error);
      alert("An error occurred while creating the category");

      setIsModal4Open(false);
    }
  };

  return (
    <div>
      <button
        className="ml-5 flex gap-2 text-blue-500"
        onClick={() => setIsModal4Open(true)}
      >
        + <div className="text-black">Add category</div>
      </button>

      {isModal4Open && (
        <div className="modal-overlay fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="modal-box w-[300px] p-2 rounded-md bg-white">
            <h3 className="font-bold text-lg text-center">
              Create your category
            </h3>
            <div className="flex gap-3">
              <button
                className="w-[50px] h-[30px] flex justify-center items-center bg-slate-300 rounded-lg"
                onClick={() => setIsModal5Open(true)}
              >
                {selectedIcon}
              </button>
              <input
                className="bg-slate-300 w-full px-2 rounded-lg"
                type="text"
                placeholder="Category name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>
            <div className="modal-action flex justify-end">
              <form onSubmit={handleCreateCategory}>
                <button className="btn" type="submit">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {isModal5Open && (
        <div className="modal-overlay fixed ml-[630px] mt-[200px] bg-opacity-50">
          <div className="modal-box w-11/12 max-w-5xl bg-white p-4 rounded-md">
            <h3 className="font-bold text-lg text-center">Select Icon</h3>
            <div className="grid grid-cols-3 justify-items-center gap-3">
              <button
                onClick={() => handleIconSelect(<Home />)}
                className="w-[50px] h-[50px] bg-slate-300 flex justify-center items-center rounded-lg"
              >
                <Home />
              </button>
              <button
                onClick={() => handleIconSelect(<Car />)}
                className="w-[50px] h-[50px] bg-slate-300 flex justify-center items-center rounded-lg"
              >
                <Car />
              </button>
              <button
                onClick={() => handleIconSelect(<Finance />)}
                className="w-[50px] h-[50px] bg-slate-300 flex justify-center items-center rounded-lg"
              >
                <Finance />
              </button>
            </div>
            <div className="modal-action">
              <button
                onClick={() => setIsModal5Open(false)}
                className="btn btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
