import React, { Component } from 'react';

class ToDo extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li>
        <input type="checkbox" checked={this.props.isDone} />
        <span>{this.props.descriptor}</span>
      </li>
    );
  }
}

export default ToDo;