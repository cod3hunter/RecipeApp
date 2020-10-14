import React, {ReactText, useState} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import styled from 'styled-components/native';
import {CategoryPicker, RecipeList} from '../components';
import useFetchAllCategories from '../hooks/useFetchAllCategories';
import useFetchMealsByCategory from '../hooks/useFetchMealsByCategory';

const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 16px;
`;

type Props = {
  navigation: HomeScreenNavigatorProp;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState<ReactText>('Beef');
  const categories = useFetchAllCategories();
  const meals = useFetchMealsByCategory(selectedCategory);

  if (meals.length < 1) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  }

  return (
    <Container>
      <CategoryPicker
        data={categories}
        selectedValue={selectedCategory}
        onValueChange={setSelectedCategory}
      />
      <RecipeList
        data={meals}
        onPress={(id) => navigation.navigate('RecipeDetail', {id})}
      />
    </Container>
  );
};

export default HomeScreen;
