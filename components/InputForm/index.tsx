import { View, Text, TouchableOpacity, GestureResponderEvent, ViewStyle, StyleProp, TextInput, NativeSyntheticEvent, TextInputChangeEventData, KeyboardTypeOptions, ColorValue } from 'react-native'
import React from 'react'
import { colors } from '../../constants';
import styles from './styles';

type InputFormProps = {
  label: string | undefined;
  placeholder?: string| undefined;
  onChange?:
    | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
    | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  placeholderTextColor?: ColorValue | undefined;
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
  inputViewStyle?: StyleProp<ViewStyle> | undefined;
  inputFormStyle?: StyleProp<ViewStyle> | undefined;
  secureTextEntry?: boolean | undefined;

}

const InputForm = ({
  onChange, label, placeholder, keyboardType, 
  placeholderTextColor, leftComponent, rightComponent, 
  inputViewStyle, inputFormStyle, secureTextEntry}: InputFormProps) => {


  return (
    <View>
      <Text
        style={styles.labelInputForm}>{label}</Text>
          <View
            style={[styles.inputView,inputViewStyle]}>
              {leftComponent}
              <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                numberOfLines={1}
                style={[styles.inputForm, inputFormStyle]}
                keyboardType={keyboardType}
                onChange={onChange}
                secureTextEntry={secureTextEntry} />
              {rightComponent}
          </View>
    </View>
  )
}

export default InputForm