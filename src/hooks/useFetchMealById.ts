import {useState, useEffect} from 'react';
import {getMealById} from '../services/RequestService';

export default (id: string) => {
  const [meal, setMeal] = useState<MealRecipe | Partial<MealRecipe>>({});

  useEffect(() => {
    (async () => {
      if (id) {
        const data = await getMealById(id);
        setMeal(data);
      }
    })();
  }, [id]);

  return meal;
};
