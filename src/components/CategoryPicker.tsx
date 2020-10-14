import React, {ReactText} from 'react';
import styled from 'styled-components/native';
import {Picker} from '@react-native-community/picker';

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.Text`
  font-size: 16px;
`;

const CustomPicker = styled(Picker)`
  width: 50%;
  margin-top: 5px;
`;

type Props = {
  data: string[];
  selectedValue: ReactText;
  onValueChange: (itemValue: ReactText) => any;
};

const CategoryPicker: React.FC<Props> = ({
  selectedValue,
  onValueChange,
  data,
}) => {
  return (
    <Container>
      <Text>Select Category: </Text>
      <CustomPicker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => onValueChange(itemValue)}>
        {data.map((value) => {
          return <Picker.Item label={value} value={value} key={value} />;
        })}
      </CustomPicker>
    </Container>
  );
};

export default CategoryPicker;
