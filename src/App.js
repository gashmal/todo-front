import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import Title from "./components/Title";
import ToDoForm from "./components/ToDoForm";
import ListItem from "./components/ListItem";
import SearchBox from "./components/SearchBox";

class App extends Component {
	state = {
		tasks: []
	};

	updateList = query => {
		console.log(query);
		if (query === undefined || query === null) {
			query = "";
		}
		axios
			.get("https://todo-back.herokuapp.com/?description=" + query)
			.then(response => {
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
				<SearchBox update={this.updateList} />
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
