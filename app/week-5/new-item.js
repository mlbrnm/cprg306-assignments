"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  let handleSubmit = (event) => {
    event.preventDefault();

    const item = { name, quantity, category };
    console.log("New item underway:", item);
    alert(
      `New item added: ${item.name}, Quantity: ${item.quantity}, Category: ${item.category}`
    );
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

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
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto space-y-6"
    >
      <div className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all text-gray-800"
          placeholder="Item name"
        />

        <div className="flex items-center space-x-4">
          <label className="text-gray-700 font-medium">Quantity:</label>
          <div className="flex items-center">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="px-3 py-1 bg-blue-300 text-white rounded-l-lg hover:bg-blue-400 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              -
            </button>
            <span className="px-4 py-1 bg-gray-100 font-medium text-gray-800">
              {quantity}
            </span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="px-3 py-1 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              +
            </button>
          </div>
        </div>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
        >
          <option value="" disabled className="text-gray-300">
            Select category
          </option>
          <option value="produce" className="text-gray-400">
            Produce
          </option>
          <option value="dairy" className="text-gray-400">
            Dairy
          </option>
          <option value="meat" className="text-gray-400">
            Meat
          </option>
          <option value="canned goods" className="text-gray-400">
            Canned Goods
          </option>
          <option value="dry goods" className="text-gray-400">
            Dry Goods
          </option>
          <option value="household" className="text-gray-400">
            Household
          </option>
          <option value="snacks" className="text-gray-400">
            Snacks
          </option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Add Item
      </button>
    </form>
  );
}
