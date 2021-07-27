import { Action, action, createTypedHooks } from "easy-peasy";

const typedHooks = createTypedHooks<WorkoutModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export interface WorkoutModel {
  workout: IWorkout;
  addExercise: Action<WorkoutModel, _Exercise>;
  addSet: Action<WorkoutModel, any>;
  addCardio: Action<WorkoutModel, string>;
  addWeight: Action<WorkoutModel, {weight: number, index: number, name: string}>;
  addReps: Action<WorkoutModel, {reps: number, index: number, name: string}>;
}

const workout: WorkoutModel = {
  workout: {
    date: 'wibble',
    exercise: []
  },
  addExercise: action((state, payload) => {
    state.workout.exercise.push(payload);
    console.log('added exercise');
  }),
  addSet: action((state, payload) => {
    const set = new _Set();
    return {
      ...state, firstLevel: state.workout.exercise.map(x => {
        if (x.name === payload.exercise.name) {
          x.sets.push(set);
        }
      })
    }
  }),
  addCardio: action((state, payload) => {
    const cardioExercise = new _Exercise(payload);
    cardioExercise.cardio = new _CardioSet();
    state.workout.exercise.push(cardioExercise);
    return state;
  }),
  addWeight: action((state, payload) => {
    return {...state, firstLevel: state.workout.exercise.map(x => {
        if (x.name === payload.name) {
          x.sets[payload.index].weight = payload.weight;
        }
      })
    }
  }),
  addReps: action((state, payload) => {
    return {...state, firstLevel: state.workout.exercise.map(x => {
        if (x.name === payload.name) {
          x.sets[payload.index].reps = payload.reps;
        }
      })
    }
  })
};

export default workout;

export interface IWorkout {
  date: string,
  exercise: IExercise[]
}

export interface IExercise {
  name: string;
  sets: ISets[];
  cardio: ICardioSet;
}

export interface IExercise_Set {
  work_up: ISets[];
  working_sets: ISets[];
}

export interface ICardioSet {
  time: number;
}

export interface ISets {
  weight: number;
  reps: number;
}

export class _Exercise implements IExercise {
  name = '';
  sets: ISets[] = [];
  cardio!: ICardioSet;

  constructor(name: string) {
    this.name = name;
  }
}

export class _Set implements ISets {
  reps = 0;
  weight = 0;
}

export class _CardioSet implements ICardioSet {
  time: number = 0;
}