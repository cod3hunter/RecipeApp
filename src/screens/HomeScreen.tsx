import React, {ReactText, useState} from 'react';
import styled from 'styled-components/native';
import {CategoryPicker, RecipeList} from '../components';

const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 16px;
`;

type Props = {
  navigation: HomeScreenNavigatorProp;
};

const categoriesData: string[] = ['Beef', 'Chicken', 'Dessert'];

const mealsData: MealRecipe[] = [
  {strMeal: 'Baked salmon', idMeal: '1234'},
  {strMeal: 'Baked salmon', idMeal: '1235'},
  {strMeal: 'Baked salmon', idMeal: '1236'},
  {strMeal: 'Baked salmon', idMeal: '1237'},
];

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState<ReactText>('1');
  return (
    <Container>
      <CategoryPicker
        data={categoriesData}
        selectedValue={selectedCategory}
        onValueChange={setSelectedCategory}
      />
      <RecipeList
        data={mealsData}
        onPress={(id) => navigation.navigate('RecipeDetail', {id})}
      />
    </Container>
  );
};

export default HomeScreen;
