import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.debounce = this.debounce.bind(this);
  }

  //debounce function to prevent too many calls to the server (wink wink)
  debounce(fn, delay) {
    var timer = null;
    return function () {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }

  render() {
    const checkStatus = this.props.todo.completed ? 'checked' : 'unchecked';
    return (
      <li onClick={ this.debounce(() => this.props.click(this.props.todo), 100) }
        className={`todo-item ${checkStatus}`}
        key={this.props.todo.text} >
        <span className="checkbox-image-wrapper">
            <img className="checkbox-image" src={`./images/${checkStatus}.png`}/>
        </span>
        <span className="todo-text">{this.props.todo.text}</span>
      </li>
    )
  }
}

export default TodoItem;
