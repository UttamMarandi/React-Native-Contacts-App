import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';

const Contacts = () => {
  return (
    <View>
      <Text>Hi Contacts</Text>
    </View>
  );
};
const ContactDetail = () => {
  return (
    <View>
      <Text>Hi ContactDetail</Text>
    </View>
  );
};
const CreateContact = () => {
  return (
    <View>
      <Text>Hi CreateContact</Text>
    </View>
  );
};
const Setting = () => {
  return (
    <View>
      <Text>Hi Setting</Text>
    </View>
  );
};
const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Contacts"
          component={Contacts}></HomeStack.Screen>
        <HomeStack.Screen
          name="ContactDetail"
          component={ContactDetail}></HomeStack.Screen>
        <HomeStack.Screen
          name="CreateContact"
          component={CreateContact}></HomeStack.Screen>
        <HomeStack.Screen name="Setting" component={Setting}></HomeStack.Screen>
      </HomeStack.Navigator>
      {/* Each screen can take one name property which is unique */}
    </>
  );
};

export default HomeNavigator;
