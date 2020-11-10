import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        textboxValue: "",
        itemCount: 4,
        data: [
          { id: 1, title: "Take out the trash", completed: false },
          { id: 2, title: "Walk the dog", completed: true },
          { id: 3, title: "Drink coffee", completed: true },
          { id: 4, title: "Grade HW", completed: false }
        ]
      };
  
      this.handleAddButtonPress = this.handleAddButtonPress.bind(this);
      this.handleTextboxChange = this.handleTextboxChange.bind(this);
      this.handleTodoToggle = this.handleTodoToggle.bind(this);
      this.handleTodoDelete = this.handleTodoDelete.bind(this);
    }
  
    handleAddButtonPress() {
      let newData = this.state.data;
      newData.push({ id: this.state.itemCount + 1, title: this.state.textboxValue, completed: false });
      this.setState(
        function (state) {
          return { data: newData, itemCount: this.state.itemCount + 1 };
        }
      );
    }
  
    handleTextboxChange(event){
      this.setState(
        function(state){
          return { textboxValue: event.target.value };
        }
      )
    }

    handleTodoToggle(id){
        let newData = this.state.data;

        let foundIndex = -1;
        newData.forEach(function(todo, index){
            if(todo.id === id){
                foundIndex = index;
            }
        });

        if(foundIndex !== -1){
            newData[foundIndex].completed = !newData[foundIndex].completed;
            this.setState(function(state){
                return { data: newData };
            });
        }
    }

    handleTodoDelete(id){
        let newData = this.state.data;

        let foundIndex = -1;
        newData.forEach(function(todo, index){
            if(todo.id === id){
                foundIndex = index;
            }
        });

        if(foundIndex !== -1){
            newData.splice(foundIndex, 1);
            this.setState(function(state){
                return { data: newData };
            });
        }
    }
  
    render() {
      let handleTodoToggle = this.handleTodoToggle;
      let handleTodoDelete = this.handleTodoDelete;
      let todoList = this.state.data.map(function (todo) {
        return <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} handleTodoToggle={ handleTodoToggle } handleTodoDelete={ handleTodoDelete }></Todo>
      });
  
      return (
        <div>
          <h3>Todo List</h3>
          <input type="text" value={ this.state.textboxValue } onChange={ this.handleTextboxChange }></input>
          <button onClick={this.handleAddButtonPress}>Add</button>
          { todoList}
        </div>
      );
    }
  }

export default TodoList;