import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      task: [{descriptor: "eat", isDone: true},
             {descriptor: "sleep", isDone: false}],
            newTaskDescriptor: ''
    };
  }

  toggleComplete(index){
    const newTasks = this.state.task.slice(); // create new array of this.state
    const nTask = newTasks[index]; //add index to new array as identifier
    nTask.isDone = nTask.isDone ? false : true; //if array-index is checked, uncheck
    this.setState({newTasks: newTasks}); //new state is sliced array
  }

  doSubmit(e) {
    e.preventDefault();
    if(!this.state.newTaskDescriptor){return};
    const newSubmitTask = { descriptor: this.state.newTaskDescriptor, isDone: false};
    this.setState({ task: [...this.state.task, newSubmitTask], newTaskDescriptor: '' });
  }

  makeChange(e) {
    this.setState({ newTaskDescriptor: e.target.value })
    console.log("change made");
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.task.map((item, index) =>
           <ToDo key={index} descriptor={item.descriptor} isDone={item.isDone} toggleComplete={() => this.toggleComplete(index)} />
         )}
        </ul>
        <form onSubmit={ (e) => this.doSubmit(e) }>
          <input type="text" value={ this.state.newTaskDescriptor } onChange={ (e) => this.makeChange(e) }/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
