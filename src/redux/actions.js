import { addTaskActionType, removeTaskActionType } from './actionTypes';

export const actionFabric = type => payload => ({ type, payload });

export const createTask = actionFabric(addTaskActionType);
export const deleteTaskById = actionFabric(removeTaskActionType);

// export const createTask = text => ({
//   type: addTaskActionType,
//   payload: {
//     id: nanoid(),
//     text,
//     completed: false,
//   },
// });

// export const deleteTaskById = payload => ({
//   type: removeTaskActionType,
//   payload,
// });
