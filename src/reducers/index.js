import { combineReducers } from 'redux';
import TodoReducer from './reducer_todos';

const rootReducer = combineReducers({
  todo: TodoReducer
});

export default rootReducer;
