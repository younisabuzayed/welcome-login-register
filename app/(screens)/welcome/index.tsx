import { View, Text, SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, height, width } from '../../../constants';
import styles from './styles';
import { Button } from '../../../components';
import { useRouter } from 'expo-router';

const Welcome = () => {
  const router = useRouter()

  return (
      <LinearGradient
        style={{ flex: 1}}
        colors={[colors.primary, colors.seconary]}>
          <SafeAreaView
            style={{ flex: 1 }}>
              <View>
                  <Image
                    source={require("../../../assets/img/hero3.jpg")}
                    style={[
                      styles.imageAbsolute,
                      {
                        transform: [
                          {translateX: (width * 0.1) - 20},
                          {translateY: 50},
                          { rotate: "-15deg"}
                        ]
                      }
                    ]} />
                  <Image
                    source={require("../../../assets/img/hero1.jpg")}
                    style={[
                      styles.imageAbsolute,
                      {
                        top: 50,
                        transform: [
                          {translateX: (width * 0.5)- 50},
                          {translateY: 50},
                          { rotate: "-15deg"}
                        ]
                      }
                    ]} />
                  <Image
                    source={require("../../../assets/img/hero2.jpg")}
                    style={[
                      styles.imageAbsolute,
                      {
                        transform: [
                          {translateX: (width * 0.5)+ 50},
                          {translateY: 20},
                          { rotate: "-2deg"}
                        ]
                      }
                    ]} />
                  <Image
                    source={require("../../../assets/img/hero3.jpg")}
                    style={[
                      styles.imageAbsolute,
                      {
                        height: 150,
                        width: 150,
                        top: height * 0.15,
                        transform: [
                          {translateX: (width * 0.5) - 20},
                          {translateY: height * 0.1},
                          { rotate: "10deg"}
                        ]
                      }
                    ]} />
            </View>
            <View
              style={styles.contentContainer}>
                <Text
                  style={styles.titleContent}>
                  Let's Get Started
                </Text>
                <View
                  style={styles.textContentContainer}>
                    <Text
                      style={styles.textContent}>
                        Connect with each other with chatting
                    </Text>
                    <Text
                      style={styles.textContent}>
                        Calling, Enjoy Safe and private texting
                    </Text>
                    <Button 
                      title={"Join Now"}
                      style={{marginTop: 10}}
                      onPress={() => router.push("/register")}/>
                    <Text
                      style={styles.haveAcountText}>
                        Already have an account?{" "}
                        <Pressable
                          onPress={() => router.push("/login")}>
                            <Text
                              style={styles.haveAcountTextTitle}>Login</Text>
                        </Pressable>
                    </Text>
                </View>
            </View>
          </SafeAreaView>
      </LinearGradient>
  )
}

export default Welcome