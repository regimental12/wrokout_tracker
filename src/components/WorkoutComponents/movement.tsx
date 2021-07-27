import React from 'react';
import { Button, TextInput, Title } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import Set from './set';
import { _Set, ICardioSet, IExercise, ISets, useStoreActions } from '../../models/model';

const Movement = (props: any) => {
  const data: IExercise = props.exercise;
  const addSet = useStoreActions(actions => actions.addSet);

  function cardio(cardio: ICardioSet) {
    if (cardio != undefined) {
      return (
        <View style={styles.title}>
          <Title>{data.name}</Title>
        </View>
      )
    } else {
      return (
        <View style={styles.title}>
          <Title>{data.name}</Title>
          <Button mode='contained' onPress={() => addSet({set: new _Set(), exercise: data})}>Add Set</Button>
        </View>
      )
    }
  }

  function cardioSet(data: IExercise) {
    if (data.cardio != undefined) {
      return (
        <View style={styles.cardioSet}>
          <TextInput label='Time' mode='outlined' value={data.cardio?.time.toString()}/>
        </View>
      )
    } else {
      return (
        <View style={styles.set}>
          {data.sets.map((x: ISets, index) => <Set key={index} set={{x, index, data}}/>)}
        </View>
      )
    }
  }

  return (
    <View style={styles.container}>

      <View>
        {cardio(data.cardio)}
      </View>

      <View>
        {cardioSet(data)}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: '#000000',
    // borderStyle: 'solid',
    display: "flex",
    flexDirection: "column",
    marginBottom: 50,
    padding: 10
  },

  set: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-evenly'
  },

  cardioSet: {
    flex: 1,
    padding: 10
  },

  title: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default Movement;
