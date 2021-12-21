import { Component } from "react";

export default class App extends Component {
	state = {
		data: null
	}
	componentDidMount() {
		fetch("https://randomuser.me/api/")
			.then((response) => response.json())
			.then((user) => {
				this.setState({
					data: user
				})
			})
	}
	render() {
		return (
			<div>
				{JSON.stringify(this.state.data)}
			</div>
		)
	}
}