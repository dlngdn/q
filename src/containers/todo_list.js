import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from '../components/todo_item';
import { fetchTodos, toggleTodoCompletion } from '../actions/index';
import { bindActionCreators } from 'redux';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  //initial call for list
  componentDidMount(){
    this.props.fetchTodos();
  }

  render(){
    return (
      <ul className="todo-list">
        {this.props.todo.map((todo) => {
          return (
            <TodoItem click={ this.props.toggleTodoCompletion } key={todo.text} todo={todo}/>
          )
        })}
      </ul>
    )
  }
}

function mapStateToProps({ todo }){
  return { todo };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchTodos, toggleTodoCompletion}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
