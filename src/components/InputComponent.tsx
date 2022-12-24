import {
  View,
  Text,
  TextInput,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

interface Props {
  value: string;
  onChange: (val: string) => void;
  max?: number;
  clear?: boolean;
  placeholder?: string;
}

const InputComponent = (props: Props) => {
  const {value, onChange, max, clear, placeholder} = props;

  return (
    <View
      style={[
        {
          backgroundColor: '#fff',
          paddingHorizontal: 10,
          borderRadius: 20,
          paddingVertical: 8,
          minHeight: 42,
          marginTop: 8,
          marginBottom: 16,
          flexDirection: 'row',
          alignItems: 'center',
        },
      ]}
    >
      <TextInput
        style={[{color: '#212121', margin: 0, padding: 0, flex: 1}]}
        keyboardType="phone-pad"
        value={value}
        onChangeText={val => onChange(val)}
        placeholder={placeholder}
        maxLength={max}
      />
      {clear && value.length > 0 && (
        <TouchableOpacity onPress={() => onChange('')}>
          <Text style={{color: '#676767'}}>clear</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputComponent;
