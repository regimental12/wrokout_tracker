import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { ISets } from '../../models/model';
import { useStoreActions } from "../../models/model";

const Set = (props: any) => {

  const set: ISets = props.set.x;
  const index: number = props.set.index;
  const name: string = props.set.data.name;
  const addWeight = useStoreActions(actions => actions.addWeight);
  const addReps = useStoreActions(actions => actions.addReps);

  function updateWeight(weight: number, index: number, name: string) {
    console.log(name)
    const weightObject = {
      weight: weight,
      index: index,
      name: name
    }
    addWeight(weightObject);
  }

  function updateReps(reps: number, index: number, name: string) {
    console.log(name)
    const repsObject = {
      reps: reps,
      index: index,
      name: name
    }
    addReps(repsObject);
  }

  return (
    <View style={styles.container}>

      <View style={styles.innerContainer}>
        <Text>Set {index + 1}</Text>

        <View>
          <TextInput label='Weight' mode='outlined' value={set.weight.toString()}
                     onChangeText={weight => updateWeight(+weight, index, name)}/>

          <TextInput label='Reps' mode='outlined' value={set.reps.toString()} onChangeText={reps => updateReps(+reps, index, name)}/>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '20%',
    margin: 5
  },
  innerContainer: {},
  button: {},
  textInput: {},
  modal: {}
})

export default Set
