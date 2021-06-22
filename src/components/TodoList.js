import React, { Component } from 'react'
import {ListItems} from './ListItems'
import '../cssStyles/TodoList.css'

// const ListItems = [];

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      ListItems: ListItems
    };
    this.getValue = this.getValue.bind(this);
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
  }

  getValue = (e) => {
    // console.log("getValue");
    this.setState({
      userInput: e.target.value
    })
  }
  
  addToList = () => {
    // console.log("addToList");
    ListItems.push({index:ListItems.length+1,name: this.state.userInput, isCompleted : false});
    this.setState({ListItems:ListItems});
  }

  removeFromList(index){
    console.log(index);
    console.log(ListItems);
    console.log(ListItems.indexOf(Object.name === index));
    // ListItems.splice(index-1,1);
    // this.setState({ListItems:ListItems});
  }
  
  render() {
    
    return (
      <div className = "todolist">
          <h1>todo list</h1>
          <input type = "text" value = {this.state.userInput} 
          onChange = {this.getValue}/>
          <button className = "add" onClick = {this.addToList}>add</button> 
          <br />
          <div className = "listitems">
            {ListItems.map((items) => 
            <div className = {items.isCompleted ? "done" : "notdone"} key = {items.index}>
              <li>{items.name}</li>
              <button className = "doneButton" onClick={() => this.removeFromList(items.name)}>remove</button>
            </div>)}
          </div>
      </div>
    )
  }
}

export default TodoList
