import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import Title from "./components/Title";
import ToDoForm from "./components/ToDoForm";
import ListItem from "./components/ListItem";
class App extends Component {
	state = {
		tasks: []
	};

	updateList = () => {
		axios.get("https://todo-back.herokuapp.com/").then(response => {
			console.log(response.data);
			this.setState({
				tasks: response.data
			});
		});
	};

	render() {
		return (
			<div className="App">
				<Title title="To-Do list" />
				<ListItem list={this.state.tasks} update={this.updateList} />
				<ToDoForm update={this.updateList} />
			</div>
		);
	}

	componentDidMount() {
		this.updateList();
	}
}

export default App;
