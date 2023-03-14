import { addTaskActionType, removeTaskActionType } from './actionTypes';

const initialState = {
  tasks: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Get good at JavaScript', completed: true },
    { id: 2, text: 'Master React', completed: false },
    { id: 3, text: 'Discover Redux', completed: false },
    { id: 4, text: 'Build amazing apps', completed: false },
  ],
  filters: {
    status: 'all',
  },
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case addTaskActionType:
      console.log('create action', type, payload);

      return { ...state, tasks: [...state.tasks, payload] };
    case removeTaskActionType:
      return {
        ...state,
        tasks: state.tasks.filter(({ id }) => id !== payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
