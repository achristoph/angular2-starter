let nextTaskId: number = 2;

import {
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from '../actions';

import { Task } from '../../core/services/constant';

export const taskReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state,
      Object.assign({}, {
        done: false,
        id: nextTaskId++,
        title: action.payload.title,
      }),
      ];
    case UPDATE_TASK:
      return state.map((task: Task) => {
        if (task.id === action.payload.task.id) {
          return Object.assign({}, task, action.payload.taskData);
        } else {
          return task;
        }
      });
    case DELETE_TASK:
      return state.filter((task: Task) => task.id !== action.payload.task.id);
    default:
      return state;
  }
};
