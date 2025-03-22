import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [mealsData, setMealsData] = useState([]);
  // petit rappelle useEffect permet d'exécuter du code après le rendu du composant
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato")
      .then((response) => {
        setMealsData(response.data.meals);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="app-container">
      <h1>React Cooking App</h1>
      <input type="text" placeholder="Search for recipes..." />
      <div className="meal-container"></div>
    </div>
  );
};

export default App;
