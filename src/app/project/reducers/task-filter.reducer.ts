import {
  SHOW_ALL,
  SHOW_OPEN,
  SHOW_DONE,
} from '../actions';

export const taskFilterReducer = (state: any = { fn: (task: any) => task, value: SHOW_ALL }, action: any) => {
  switch (action.type) {
    case SHOW_ALL:
      return { fn: (task: any) => task, value: action.type };
    case SHOW_OPEN:
      return { fn: (task: any) => !task.done, value: action.type };
    case SHOW_DONE:
      return { fn: (task: any) => task.done, value: action.type };
    default:
      return state;
  }
};
