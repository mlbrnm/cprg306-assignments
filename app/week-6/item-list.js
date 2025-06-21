"use client";

import Item from "./item";
import { useState } from "react";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [grouped, setGrouped] = useState(false);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = grouped
    ? Object.entries(
        items.reduce((acc, item) => {
          const category = item.category;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(item);
          return acc;
        }, {})
      )
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([category, items]) => ({
          category,
          items: items.sort((a, b) => a.name.localeCompare(b.name)),
        }))
    : null;

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => {
            setGrouped(false);
            setSortBy("name");
          }}
          className={`px-4 py-2 rounded-md font-semibold transition-colors ${
            sortBy === "name" && !grouped
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => {
            setGrouped(false);
            setSortBy("category");
          }}
          className={`px-4 py-2 rounded-md font-semibold transition-colors ${
            sortBy === "category" && !grouped
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => {
            setGrouped(true);
            setSortBy("name");
          }}
          className={`px-4 py-2 rounded-md font-semibold transition-colors ${
            grouped
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Group by Category
        </button>
      </div>
      <ul className="max-w-2xl mx-auto mt-8 space-y-4">
        {grouped
          ? groupedItems.map((group) => (
              <li key={group.category}>
                <h2 className="capitalize font-bold text-xl text-white mb-2">
                  {group.category}
                </h2>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
                </ul>
              </li>
            ))
          : sortedItems.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
      </ul>
    </div>
  );
}
