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
			}); // cette ligne est indispensable pour empêcher le navigateur de changer de page automatiquement lorsque le formulaire est soumis.
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="task"
						value={this.state.task}
						onChange={this.handleTaskChange}
					/>
					<button type="submit">Ajouter Une Tâche</button>
				</form>
			</div>
		);
	}
}
