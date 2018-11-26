import React, { Component } from "react";
import Item from "../Item";

export class ListItem extends Component {
	render() {
		return (
			<div>
				{this.props.list
					.sort(function(x, y) {
						return x.finished === y.finished ? 0 : x.finished ? 1 : -1;
					})
					.map(task => (
						<Item key={task._id} item={task} update={this.props.update} />
					))}
			</div>
		);
	}
}

export default ListItem;
