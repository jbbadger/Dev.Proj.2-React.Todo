import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      task: [{descriptor: "eat", isDone: true},
             {descriptor: "sleep", isDone: false}]
    };
  }

  toggleComplete(index){
    const newTasks = this.state.task.slice();
    const nTask = newTasks[index];
    nTask.isDone = nTask.isDone ? false : true;
    this.setState({newTasks: newTasks});
  }
  
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.task.map((item, index) =>
           <ToDo key={index} descriptor={item.descriptor} isDone={item.isDone} toggleComplete={() => this.toggleComplete(index)} />
         )}
        </ul>
      </div>
    );
  }
}

export default App;
