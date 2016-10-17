import {
  ADD_TASK,
  DELETE_TASK,
} from '../actions';

export const taskReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case ADD_TASK:
      console.log('ADD TASK');
      return [...state,
      Object.assign({}, {
        done: false,
        title: action.payload.title,
      }),
      ];
    case DELETE_TASK:
      return state;
    default:
      return state;
  }
};
