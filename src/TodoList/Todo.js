import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    //boilerplate
    super(props);
    //hack to know about this
    this.toggle = this.toggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggle() {
    this.props.handleTodoToggle(this.props.id);
  }

  handleDelete(){
    this.props.handleTodoDelete(this.props.id);
  }

  render() {
    //return JSX element
    let cssClass = this.props.completed ? "Todo-complete" : "Todo-incomplete";

    return <li className={cssClass}>{this.props.title} <input type="checkbox" checked={this.props.completed} onClick={this.toggle}></input> <button onClick={ this.handleDelete }>Delete</button></li>;
  }
}

export default Todo;