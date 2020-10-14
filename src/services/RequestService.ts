import axios from 'axios';

export const getAllCategories = async (): Promise<string[]> => {
  try {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const response = await axios.get<MealCategoryResponse>(url);
    return response.data.categories.map((category) => category.strCategory);
  } catch (error) {
    return [];
  }
};

export const getMealsByCategory = async (
  category: string,
): Promise<MealRecipe[]> => {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    const response = await axios.get<MealRecipeResponse>(url);
    return response.data.meals;
  } catch (error) {
    return [];
  }
};
