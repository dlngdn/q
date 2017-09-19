import React, { Component } from 'react';

import TodoInput from '../containers/todo_input';
import TodoList from '../containers/todo_list';
import Settings from '../components/settings';

export default class App extends Component {
  render() {
    return (
      <div className="todo-app">
        <Settings />
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}
