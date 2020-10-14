export const measureIngredientsToArray = (
  mealRecipe: MealRecipe | any,
): string[] => {
  let mapCompleted = false;
  let count = 1;
  const measureIngredients: string[] = [];
  while (!mapCompleted) {
    const measure = mealRecipe[`strMeasure${count}`];
    const ingredient = mealRecipe[`strIngredient${count}`];
    if (ingredient) {
      measureIngredients.push(`${ingredient} - ${measure}`);
      count++;
      continue;
    }
    mapCompleted = true;
  }
  return measureIngredients;
};
