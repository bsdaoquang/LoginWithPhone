import {View, Text} from 'react-native';
import React from 'react';

interface Props {
  text: string;
  size?: number;
  color?: string;
}

const TitleComponent = (props: Props) => {
  const {text, size, color} = props;

  return (
    <Text
      style={[
        {
          fontSize: size ?? 18,
          color: color ?? '#212121',
          fontWeight: 'bold',
        },
      ]}
    >
      {text}
    </Text>
  );
};

export default TitleComponent;
