import React, { Component } from "react";
import Item from "../Item";

export class ListItem extends Component {
	render() {
		return (
			<div>
				<h2>list item</h2>
				{this.props.list.map(task => (
					<Item key={task._id} item={task} update={this.props.update} />
				))}
			</div>
		);
	}
}

export default ListItem;
