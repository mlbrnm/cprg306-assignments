"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName
      .split(",")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim();

    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="p-8 bg-gradient-to-br from-gray-700 to-gray-800 min-h-screen flex">
      <div className="w-1/2 pr-4">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-white drop-shadow-lg mb-8 text-center">
          Shopping List
        </h1>
        <NewItem onAddItem={addItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2 pl-4">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
