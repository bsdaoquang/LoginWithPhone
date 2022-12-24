import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  onPress: () => void;
}

const ButtonComponent = (props: Props) => {
  const {text, onPress} = props;

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: 'coral',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
          borderRadius: 50,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          {
            color: '#fff',
            fontSize: 16,
            fontWeight: '600',
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
