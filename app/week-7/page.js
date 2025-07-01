"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="p-8 bg-gradient-to-br from-gray-700 to-gray-800 min-h-screen">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-white drop-shadow-lg mb-8 text-center">
        Shopping List
      </h1>
      <NewItem onAddItem={addItem} />
      <ItemList items={items} />
    </main>
  );
}
