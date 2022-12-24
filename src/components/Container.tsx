import React, {ReactNode} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import {globalStyles} from '../globalStyles';

interface Props {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
  isScroll?: boolean;
}

const Container = (props: Props) => {
  const {children, styles, isScroll} = props;

  return (
    <ImageBackground
      source={require('../../assets/images/bg-3.png')}
      style={[globalStyles.container, styles]}
    >
      {isScroll ? (
        <ScrollView>{children}</ScrollView>
      ) : (
        <View style={{flex: 1}}>{children}</View>
      )}
    </ImageBackground>
  );
};

export default Container;
