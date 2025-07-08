import React from "react";

export default function Categories({
  categories,
  selectedCategory,
  onClick,
}: {
  categories: string[];
  selectedCategory: string;
  onClick: (category: string) => void;
}) {
  return (
    <section className="p-4 border-b border-green-800 mb-4">
      <ul className="flex border-b border-green-800">
        {categories.map((category) => {
          const isSelected = category === selectedCategory;
          return (
            <li
              key={category}
              onClick={() => onClick(category)}
              className={`cursor-pointer px-4 py-2 text-sm
          ${
            isSelected
              ? "bg-white text-green-800 font-semibold -mb-[1px] border-x border-t border-green-800 rounded-t-md shadow-sm"
              : "text-gray-500 hover:text-green-700"
          }`}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
