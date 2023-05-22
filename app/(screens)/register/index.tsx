import { View, Text, TextInput, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { colors } from '../../../constants';
import { Button, InputForm } from '../../../components';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

const Register = () => {
  const router = useRouter();

  const [isPasswordShown, setIsPasswordShown] = React.useState(true);
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.white }}>
        <View
          style={styles.container}>
            <View
              style={styles.headerContainer}>
                <Text
                  style={styles.title}>Create Account</Text>

                <Text
                  style={styles.subtitle}>connect with our friend today!</Text>
            </View>
            <View
              style={styles.formContainer}>
                <InputForm
                  label='Email Address'
                  placeholder='Enter your email address'
                  keyboardType='email-address' />

                <InputForm
                  label='Mobile Number'
                  placeholder='Enter your phone number'
                  keyboardType='numeric'
                  placeholderTextColor={colors.grey}
                  leftComponent={
                    <TextInput
                      placeholder='+60'
                      keyboardType='numeric'
                      style={styles.leftNumPhInput} />
                  } />
                
                <InputForm
                  label='Password'
                  placeholder='Enter your password'
                  secureTextEntry={isPasswordShown}
                  inputFormStyle={{ width: '90%'}}
                  rightComponent={
                    <TouchableOpacity
                      style={styles.showEye}
                      onPress={() => setIsPasswordShown(!isPasswordShown)}>
                        <Ionicons
                          name={isPasswordShown ? "eye-off" : 'eye'}
                          size={24}
                          color={colors.black} />  
                    </TouchableOpacity>
                  } />

                <View
                  style={styles.termsConditionsContainer}>
                    <Checkbox
                      value={isChecked}
                      onValueChange={setIsChecked}
                      color={isChecked ? colors.primary : undefined} />

                    <Text
                      style={styles.termsConditionsText}>I aggree to terms and connditions</Text>
                </View>

                <Button
                  title='Sign Up'
                  filled/>
                
            </View>
            <View
              style={styles.SignupWithContainer}>
                <View 
                  style={styles.lineView} />

                <Text
                  style={styles.SignupWithText}>or Sign up with</Text>
                  
                <View 
                  style={styles.lineView} />
            </View>
            <View
              style={styles.SignupWithButtonsContainer}>

                <TouchableOpacity
                  style={styles.SignupWithBtn}>

                    <Image
                      source={require("../../../assets/img/facebook.png")}
                      style={styles.imageIcon}
                      resizeMode="contain" />

                    <Text>Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.SignupWithBtn}>

                    <Image
                      source={require("../../../assets/img/google.png")}
                      style={styles.imageIcon}
                      resizeMode="contain" />

                    <Text>Google</Text>
                </TouchableOpacity>
            </View>
            <View
              style={styles.moveOtherPageContainer}>
                <Text
                  style={styles.moveOtherPageTitle} >Already have an account?</Text>
                <Pressable
                  onPress={() => router.push("/login")}>
                    <Text
                      style={styles.moveOtherPageText}>Login</Text>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Register