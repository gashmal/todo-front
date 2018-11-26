import React, { Component } from "react";

export class SearchBox extends Component {
	state = {
		search: ""
	};

	handleSearchChange = event => {
		this.setState({ search: event.target.value }, () => {
			this.props.update(this.state.search);
		});
	};

	render() {
		return (
			<div>
				<input
					type="text"
					name="search"
					placeholder="search"
					value={this.state.search}
					onChange={this.handleSearchChange}
				/>
				<span role="img" aria-label="">
					🔍
				</span>
			</div>
		);
	}
}

export default SearchBox;
