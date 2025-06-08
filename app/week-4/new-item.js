"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  let increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  let decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <main className="flex flex-row items-center justify-center p-6 mb-4 bg-white rounded-lg shadow space-x-4 max-w-xs mx-auto">
      <span className="font-semibold text-gray-800 text-lg">
        Quantity: {quantity}
      </span>
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="px-4 py-2 bg-blue-300 text-white rounded hover:bg-blue-400 disabled:bg-gray-300 transition"
      >
        -
      </button>
      <button
        onClick={increment}
        disabled={quantity === 20}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 transition"
      >
        +
      </button>
    </main>
  );
}
