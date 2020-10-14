import {useState, useEffect, ReactText} from 'react';
import {getMealsByCategory} from '../services/RequestService';

export default (category: ReactText) => {
  const [meals, setMeals] = useState<MealRecipe[]>([]);

  useEffect(() => {
    (async () => {
      if (category) {
        const data = await getMealsByCategory(category.toString());
        setMeals(data);
      }
    })();
  }, [category]);

  return meals;
};
