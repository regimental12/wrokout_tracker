import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Movement from '../components/WorkoutComponents/movement';
import { Button, Modal, Portal, TextInput } from 'react-native-paper';
import { useStoreState, useStoreActions, _Exercise, IExercise } from '../models/model';

const Workout = () => {
  const workout = useStoreState(state => state.workout);

  const addExercise = useStoreActions(actions => actions.addExercise);
  const addCardioSet = useStoreActions(actions => actions.addCardio);

  const [exercise, setExercise] = useState('');
  const [cardio, setCardio] = useState('');

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [cardioVisible, setCardioVisible] = useState(false);
  const showCardioModal = () => setCardioVisible(true);
  const hideCardioModal = () => setCardioVisible(false);

  function addNewExercise(name: string) {
    return new _Exercise(name);
  }

  return (
    <ScrollView style={styles.container}>

      <View style={styles.buttons}>
        <Button mode={'contained'} style={styles.roundButton} onPress={() => showModal()}>Add Exercise</Button>
        <Button mode={'contained'} style={styles.roundButton} onPress={() => showCardioModal()}>Add Cardio</Button>
      </View>

      <View style={styles.exercises}>
        {workout.exercise.map((x: IExercise, index) => <Movement key={index} exercise={x}/>)}
      </View>

      {<Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
          <TextInput label='Name' value={exercise.toString()} onChangeText={value => setExercise(value)}/>
          <Button onPress={() => { addExercise(addNewExercise(exercise)); hideModal() }}>add</Button>
        </Modal>
      </Portal>}

      {<Portal>
        <Modal visible={cardioVisible} onDismiss={hideCardioModal} contentContainerStyle={styles.modal}>
          <TextInput label='Name' value={cardio.toString()} onChangeText={value => setCardio(value)}/>
          <Button onPress={() => {
            addCardioSet(cardio); hideCardioModal()
          }}>add</Button>
        </Modal>
      </Portal>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column"
  },

  buttons: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: "space-around"
  },

  roundButton: {
    borderRadius: 15
  },

  exercises: {},

  modal: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20
  }
});

export default Workout;
