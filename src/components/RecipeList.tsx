import React from 'react';
import {FlatList} from 'react-native';
import {List, Divider} from 'react-native-paper';

type Props = {
  data: MealRecipe[];
  onPress: (value: string) => any;
};

const RecipeList: React.FC<Props> = ({data, onPress}) => {
  return (
    <FlatList
      style={{marginTop: 16}}
      data={data}
      ItemSeparatorComponent={() => <Divider />}
      keyExtractor={(item) => item.idMeal}
      renderItem={({item}) => {
        return (
          <List.Item
            onPress={() => onPress(item.idMeal)}
            title={item.strMeal}
          />
        );
      }}
    />
  );
};

export default RecipeList;
