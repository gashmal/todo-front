import React, { PureComponent } from "react";
import axios from "axios";

export default class Item extends PureComponent {
	finishedOrNot = () => {
		axios
			.post(`https://todo-back.herokuapp.com/update/${this.props.item._id}`, {
				finished: !this.props.item.finished
			})
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
					<h4>
						<span onClick={this.removeTheBaye}>X </span>
						<span onClick={this.finishedOrNot}>
							{this.props.item.description}
						</span>
					</h4>
				);
			} else {
				return (
					<h4 style={{ color: "lightgray" }}>
						<span onClick={this.removeTheBaye}>X </span>
						<span
							style={{ textDecoration: "line-through" }}
							onClick={this.finishedOrNot}
						>
							{this.props.item.description}
						</span>
					</h4>
				);
			}
		} else return null;
	}
}
