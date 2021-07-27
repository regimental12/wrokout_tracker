import React from "react";
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import Workout from './Workout';

export const OverView = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Button style={styles.button} mode="contained" onPress={() => navigation.navigate(Workout)}>
        Start Workout
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },

  button: {
    width: '50%',
    alignSelf: 'center'
  }
});

export default OverView;
