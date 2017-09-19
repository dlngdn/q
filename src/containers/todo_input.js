import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {newTodo: { text: ''}};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      newTodo: {
        text: event.target.value
      }
    });
  }

  onFormSubmit(event){
    event.preventDefault();
    //so nobody submits an empty input
    if(this.state.newTodo.text.length == 0){
      return;
    }
    this.props.addTodo(this.state.newTodo);
    this.setState({
      newTodo: {
        text: ''
      }
    })
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit } className="todo-input">
        <input placeholder="Add a todo..."
        className="form-control"
        value={ this.state.newTodo.text }
        onChange={ this.onInputChange }
        />
        <button type="submit" className="todo-input-button">
          Add To Do
        </button>

      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addTodo}, dispatch);
}

export default connect(null, mapDispatchToProps)(TodoInput);
