"use client";

import { useState } from "react";
import { useEffect } from "react";

export async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const mealIdeas = await fetchMealIdeas(ingredient);
    if (mealIdeas) {
      setMeals(mealIdeas);
    } else {
      setMeals([]);
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Meal Ideas with {ingredient}
      </h2>
      <ul className="space-y-4">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800">
              {meal.strMeal}
            </h3>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-auto rounded-lg mt-2"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
