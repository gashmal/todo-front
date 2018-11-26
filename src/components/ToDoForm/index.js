import React, { Component } from "react";
import axios from "axios";

export default class ToDoForm extends Component {
	state = {
		task: ""
	};

	handleTaskChange = event => {
		this.setState({ task: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		axios
			.post("https://todo-back.herokuapp.com/create", {
				description: this.state.task
			})
			.then(response => {
				console.log(response.data);
				this.setState({ task: "" });
				this.props.update();
			});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input
							type="text"
							name="task"
							value={this.state.task}
							onChange={this.handleTaskChange}
							placeholder="Titre"
						/>
					</div>
					<button type="submit">Ajouter Une Tâche</button>
				</form>
			</div>
		);
	}
}
