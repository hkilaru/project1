import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { Modal, Button, ButtonToolbar, Tooltip, OverlayTrigger } from 'react-bootstrap';


export default class Task extends React.Component {

	constructor(props){
		super(props);
		this.state = {

		}
	this.deleteTask = this.deleteTask.bind(this);
	}
	deleteTask(){
		var name = this.props;
		console.log("props are", name);
	}

	render(){
		return (
			<div>
				<div className='task'>
					<h1>{this.props.name}</h1>
					<div>
					</div>
	   		</div>
   		</div>
			)
	}
}
