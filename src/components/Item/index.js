import React, { PureComponent } from "react";
import axios from "axios";

export default class Item extends PureComponent {
	finishedOrNot = () => {
		axios
			.post(`https://todo-back.herokuapp.com/update/${this.props.item._id}`)
			.then(response => {
				console.log(response.data);
				this.props.update();
			});
	};

	removeTheBaye = () => {
		axios
			.post(`https://todo-back.herokuapp.com/delete/${this.props.item._id}`)
			.then(response => {
				console.log(response.data);
				this.props.update();
			});
	};

	render() {
		if (this.props.item && this.props.item.description) {
			if (this.props.item.finished === false) {
				return (
					<div>
						<span onClick={this.removeTheBaye}>----X----</span>
						<span onClick={this.finishedOrNot}>
							{this.props.item.description + " à faire"}
						</span>
					</div>
				);
			} else {
				return (
					<div>
						<span onClick={this.removeTheBaye}>----X----</span>
						<span onClick={this.finishedOrNot}>
							{this.props.item.description + " fait"}
						</span>
					</div>
				);
			}
		} else return null;
	}
}
