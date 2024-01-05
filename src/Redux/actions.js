// redux/actions.js
export const addTask = (description) => ({
    type: 'ADD_TASK',
    payload: { id: Date.now(), description, isDone: false },
   });
  
   export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    payload: { id },
   });
   export const editTask = (id, description) => ({
    type: 'EDIT_TASK',
    payload: { id, description },
   });
   export const removeTask = (id) => ({
    type: 'REMOVE_TASK',
    payload: { id },
   });
   export const TOGGLE_DONE = 'TOGGLE_DONE';

export const toggleDone = (id) => ({
 type: 'TOGGLE_DONE',
 payload: id,
});