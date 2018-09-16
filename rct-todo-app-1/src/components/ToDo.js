import React, { Component } from 'react';

class ToDo extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li>
        <input type="checkbox" checked={this.props.isDone} onChange={this.props.toggleComplete} />
        <span>{this.props.descriptor}</span>
        <button onClick={ this.props.deleteTask }>Delete</button>
      </li>
    );
  }
}

export default ToDo;
