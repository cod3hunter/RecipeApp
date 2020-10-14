import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {
  ActivityIndicator,
  Button,
  Headline,
  Paragraph,
  Subheading,
  Title,
} from 'react-native-paper';
import {measureIngredientsToArray} from '../services/utils';
import useFetchMealById from '../hooks/useFetchMealById';

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

const BackButton = styled(Button).attrs({
  labelStyle: {fontSize: 18},
})`
  padding: 8px 0;
`;

const Section = styled.View`
  margin-top: 16px;
  width: 100%;
  padding: 16px;
`;

const SectionTitle = styled(Title)`
  width: 100%;
  text-align: center;
`;

type Props = {
  navigation: RecipeDetailScreenNavigatorProp;
  route: RecipeDetailScreenRouteProp;
};

const RecipeDetailScreen: React.FC<Props> = ({navigation, route}) => {
  const mealId = route.params.id;
  const meal = useFetchMealById(mealId);

  if (!meal.strMeal) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  }
  return (
    <ScrollView>
      <Container>
        <BackButton onPress={navigation.goBack}>BACK</BackButton>
        <Headline numberOfLines={2}>{meal.strMeal}</Headline>
        <Subheading>{meal.strCategory}</Subheading>
        <Section>
          <SectionTitle>Ingredients</SectionTitle>
          {measureIngredientsToArray(meal).map((ingredients, index) => {
            return <Paragraph key={index}>{ingredients}</Paragraph>;
          })}
        </Section>
        <Section>
          <SectionTitle>Preparetion Steps</SectionTitle>
          <Paragraph>{meal.strInstructions}</Paragraph>
        </Section>
      </Container>
    </ScrollView>
  );
};

export default RecipeDetailScreen;
