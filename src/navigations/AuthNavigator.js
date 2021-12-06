import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';

const Login = () => {
  return (
    <View>
      <Text>Hi Login</Text>
    </View>
  );
};
const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
    </View>
  );
};

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
        <AuthStack.Screen name="SignUp" component={SignUp}></AuthStack.Screen>
      </AuthStack.Navigator>
      {/* Each screen can take one name property which is unique */}
    </>
  );
};

export default AuthNavigator;
