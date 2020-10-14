import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {
  Button,
  Headline,
  Paragraph,
  Subheading,
  Title,
} from 'react-native-paper';
import {measureIngredientsToArray} from '../services/utils';

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

const mealData: MealRecipe = {
  idMeal: '52772',
  strMeal: 'Teriyaki Chicken Casserole',
  strCategory: 'Chicken',
  strInstructions:
    'Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!',
  strYoutube: 'https://www.youtube.com/watch?v=4aZr5hZXP_s',
  strIngredient1: 'soy sauce',
  strIngredient2: 'water',
  strIngredient3: 'brown sugar',
  strIngredient4: 'ground ginger',
  strIngredient5: 'minced garlic',
  strIngredient6: 'cornstarch',
  strIngredient7: 'chicken breasts',
  strIngredient8: 'stir-fry vegetables',
  strIngredient9: 'brown rice',
  strIngredient10: '',
  strIngredient11: '',
  strIngredient12: '',
  strIngredient13: '',
  strIngredient14: '',
  strIngredient15: '',
  strIngredient16: null,
  strIngredient17: null,
  strIngredient18: null,
  strIngredient19: null,
  strIngredient20: null,
  strMeasure1: '3/4 cup',
  strMeasure2: '1/2 cup',
  strMeasure3: '1/4 cup',
  strMeasure4: '1/2 teaspoon',
  strMeasure5: '1/2 teaspoon',
  strMeasure6: '4 Tablespoons',
  strMeasure7: '2',
  strMeasure8: '1 (12 oz.)',
  strMeasure9: '3 cups',
  strMeasure10: '',
  strMeasure11: '',
  strMeasure12: '',
  strMeasure13: '',
  strMeasure14: '',
  strMeasure15: '',
  strMeasure16: null,
  strMeasure17: null,
  strMeasure18: null,
  strMeasure19: null,
  strMeasure20: null,
};

type Props = {
  navigation: RecipeDetailScreenNavigatorProp;
  route: RecipeDetailScreenRouteProp;
};

const RecipeDetailScreen: React.FC<Props> = ({navigation}) => {
  return (
    <ScrollView>
      <Container>
        <BackButton onPress={navigation.goBack}>BACK</BackButton>
        <Headline numberOfLines={2}>{mealData.strMeal}</Headline>
        <Subheading>{mealData.strCategory}</Subheading>
        <Section>
          <SectionTitle>Ingredients</SectionTitle>
          {measureIngredientsToArray(mealData).map((ingredients, index) => {
            return <Paragraph key={index}>{ingredients}</Paragraph>;
          })}
        </Section>
        <Section>
          <SectionTitle>Preparetion Steps</SectionTitle>
          <Paragraph>{mealData.strInstructions}</Paragraph>
        </Section>
      </Container>
    </ScrollView>
  );
};

export default RecipeDetailScreen;
