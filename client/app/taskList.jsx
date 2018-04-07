import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { Modal, Button, ButtonToolbar, Tooltip, OverlayTrigger } from 'react-bootstrap';
import Task from './task.jsx';

export default class TaskList extends React.Component {

	constructor(props){
  	super(props);
  	this.state = {
  		tasks: ["do laundry", "pick up groceries", "take out trash"],
  		urgent: [0, 2],
  		secondary: [1]
  	}

    this.deleteTask = this.deleteTask.bind(this);

	}
  deleteTask (index){
    console.log("deleteTask X called", index);
    var tempTasks = this.state.tasks;
    tempTasks.splice(index, 1);
    this.setState({
      tasks: tempTasks
    })
  }

  // pass delete task as prop to task child Component


	render(){
		return (
			<div>
			<div>
        {this.state.tasks.map((task, idx) => {
          return(
            <div className='taskContainer' key={idx}>
              <Task name={task}/>
              <div>
                <Button onClick={this.deleteTask.bind(this, idx)}> Delete Task </Button>
              </div>
            </div>
          )
        })}
   		</div>
   		</div>
			)
	}
}
