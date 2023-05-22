import { View, Text, TouchableOpacity, GestureResponderEvent, ViewStyle, StyleProp } from 'react-native'
import React from 'react'
import { colors } from '../../constants';
import styles from './styles';

type ButtonProps = {
  filled?: boolean;
  onPress?: (event: GestureResponderEvent) => void | undefined;
  title: string;
  color?: string;
  style?: StyleProp<ViewStyle>
}
const Button = ({filled, onPress, title, color, style }: ButtonProps) => {
  const filledBgColor = color || colors.primary;
  const outlinedColor = colors.white;
  const bgColor = filled ? filledBgColor : outlinedColor;
  const textColor = filled ? colors.white : colors.primary;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{
        ...styles.button,
        backgroundColor: bgColor,
      },
      style,
      ]}>
        <Text
          style={{
            ...styles.textTitle,
            color: textColor,
          }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button