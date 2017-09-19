import axios from 'axios';

const ROOT_URL = 'http://quip-todos.herokuapp.com/'

export const FETCH_TODOS = 'FETCH_TODOS';

export function fetchTodos() {
  const request = axios.get(`${ROOT_URL}get_todos?email=david.langdon@gmail.com`);
  return {
    type: FETCH_TODOS,
    payload: request
  }
}

export const ADD_TODO = 'ADD_TODO';

export function addTodo({text}) {
  var params = new URLSearchParams();
  params.append('email', 'david.langdon@gmail.com');
  params.append('text', text);
  const request = axios.post(`${ROOT_URL}add_todo`, params);
  return {
    type: ADD_TODO,
    payload: request
  }
}

export const TOGGLE_TODO_COMPLETION = 'TOGGLE_TODO_COMPLETION';

export function toggleTodoCompletion({id, text, completed}) {
  const toggledCompletion = !completed;
  var params = new URLSearchParams();
  params.append('email', 'david.langdon@gmail.com');
  params.append('id', id);
  params.append('completed', toggledCompletion);
  const request = axios.post(`${ROOT_URL}mark_completed`, params)
  return {
    type: TOGGLE_TODO_COMPLETION,
    payload: request
  }
}

export const RESET_LIST = 'RESET_LIST';

export function resetList() {
  var params = new URLSearchParams();
  params.append('email', 'david.langdon@gmail.com');
  // Can probably chain promises with middleware but short on time--quick solution
  const request = axios.post(`${ROOT_URL}reset`, params)
  .then(() => {location.reload()});
  return {
    type: RESET_LIST,
    payload: request
  }
}
