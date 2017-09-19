import {
  FETCH_TODOS,
  ADD_TODO,
  TOGGLE_TODO_COMPLETION,
  RESET_LIST } from '../actions/index';

export default function( state = [], action) {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload.data;
    case ADD_TODO:
      return [...state, action.payload.data];
    case TOGGLE_TODO_COMPLETION:
      const newState = state;
      const index = newState.findIndex(function(todo){
        return todo.id == action.payload.data.id;
      });
      newState.splice(index, 1, action.payload.data);
      return [...newState];
    case RESET_LIST:
      return state;
    default:
      return state;
  }
}
