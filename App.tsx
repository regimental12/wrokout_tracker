import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider, Text } from 'react-native-paper'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StoreProvider, createStore } from 'easy-peasy';
import workout from './src/models/model';
import { View } from 'react-native';
import Main from './src/screens/main';

const Drawer = createDrawerNavigator();
const Store = createStore(workout);

function DrawerContent() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Drawer content</Text>
    </View>
  );
}

export default function App() {
  return (
    <StoreProvider store={Store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Drawer.Navigator drawerContent={() => <DrawerContent/>}>
            <Drawer.Screen name='Main' component={Main}/>
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>

  );
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8834db',
    accent: '#42db34',
    text: '#000000'
  },
};
