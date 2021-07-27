import { createTypedHooks } from 'easy-peasy';
import { WorkoutModel } from './model';

const { useStoreActions, useStoreState, useStoreDispatch, useStore } = createTypedHooks<WorkoutModel>();

export default {
  useStoreActions,
  useStoreState,
  useStoreDispatch,
  useStore
}