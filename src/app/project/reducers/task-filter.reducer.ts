import {
  SHOW_ALL,
  SHOW_OPEN,
  SHOW_DONE,
} from '../actions';

export const taskFilterReducer = (state = (task: any) => task, action: any) => {
  switch (action.type) {
    case SHOW_ALL:
      return (task: any) => task;
    case SHOW_OPEN:
      return (task: any) => !task.done;
    case SHOW_DONE:
      return (task: any) => task.done;
    default:
      return state;
  }
};
