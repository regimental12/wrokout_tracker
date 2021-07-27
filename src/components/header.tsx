import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';
import { Appbar, Divider, Menu } from 'react-native-paper';

export const Header = (props: any) => {
  const [menuVisible, setShowMenu] = useState(false);
  const showMenu = () => setShowMenu(true);
  const hideMenu = () => setShowMenu(false);

  return (
    <View style={styles.appbar}>
      <Appbar>
        <Menu visible={menuVisible}
              onDismiss={hideMenu}
              anchor={<Appbar.Action color='#ffffff' icon="menu" onPress={showMenu}/>}>
          <Menu.Item onPress={() => {
          }} title="Item 1"/>
          <Menu.Item onPress={() => {
          }} title="Item 2"/>
          <Divider/>
          <Menu.Item onPress={() => {
          }} title="Item 3"/>
        </Menu>
        <Appbar.Content title="WORK OUT TRACKER" subtitle="Swole"/>
        <Appbar.Action icon="dots-vertical" onPress={() => console.log('Pressed Kebab Menu')}/>
      </Appbar>
    </View>
  )
};

const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'white'
  },

  appbar: {
    paddingTop: 50
  }
});

