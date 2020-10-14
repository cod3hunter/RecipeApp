import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export {};

declare global {
  type RootStackParamList = {
    Home: undefined;
    RecipeDetail: {id: string};
  };
  type HomeScreenNavigatorProp = StackNavigationProp<
    RootStackParamList,
    'Home'
  >;
  type RecipeDetailScreenNavigatorProp = StackNavigationProp<
    RootStackParamList,
    'RecipeDetail'
  >;
  type RecipeDetailScreenRouteProp = RouteProp<
    RootStackParamList,
    'RecipeDetail'
  >;
  type MealRecipe = {
    strMeal: string;
    idMeal: string;
  };
}
