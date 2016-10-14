
import {
  ADD_TASK,
  DELETE_TASK,
} from '../actions';

export const taskFilterReducer = (state = (task: any) => task, action: any) => {
  switch (action.type) {
    case ADD_TASK:
      return (task: any) => task;
    case DELETE_TASK:
      return (task: any) => task.done;
    default:
      return state;
  }
};
