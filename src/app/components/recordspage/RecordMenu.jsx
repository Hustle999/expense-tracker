"use client";

import React, { useState, useEffect } from "react";
import { AddCategory } from "./catagory/AddCatagory";

export const RecordMenu = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:4444/get-categories");
        const data = await response.json();

        if (response.ok) {
          setCategories(data.categories);
        } else {
          console.error("Error fetching categories:", data.error);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryAdded = (newCategory) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  return (
    <div className="flex flex-col gap-5 w-[400px] h-full p-[20px] bg-white rounded-xl">
      <div className="font-semibold text-2xl">Records</div>
      <button className="bg-blue-600 text-white p-1 rounded-2xl">+ Add</button>
      <input
        className="border p-1 rounded-md"
        type="search"
        placeholder="Search..."
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
        <div className="flex flex-col gap-4 my-5">
          {isLoading ? (
            <h1>Loading categories...</h1>
          ) : Array.isArray(categories) && categories.length > 0 ? (
            categories.map((category, index) => (
              <h1 key={index}>{category.name}</h1>
            ))
          ) : (
            <h1>No categories found</h1>
          )}
        </div>

        <AddCategory onCategoryAdded={handleCategoryAdded} />
      </div>
    </div>
  );
};
