import { Header } from '../components/header';
import Login from './login';
import OverView from './overView';
import Workout from './Workout';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Main = () => {
  // @ts-ignore TODO sort this
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        header: ({navigation, previous, scene}: any) => (
          <Header
            navigation={navigation}
            previous={{previous}}
            scene={{scene}}
          />
        ),
      }}>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='OverView' component={OverView}/>

      <Stack.Screen name='Workout' component={Workout}/>
    </Stack.Navigator>
  );
};

export default Main;
