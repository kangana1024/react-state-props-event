import { Component } from "react";

export default class App extends Component {
	state = {
		data: null,
		loading: true
	}
	componentDidMount() {

		fetch("https://randomuser.me/api/")
			.then((response) => response.json())
			.then((user) => {
				this.setState({
					data: user.results[0]
				})
				this.setState({ loading: false })
			})
	}

	render() {
		return !this.loading ? (
			<div>
				{JSON.stringify(this.state.data)}
				<p>Name :{this.state.data ? JSON.stringify(this.state.data.name) : null}</p>
			</div>
		) : <div>Loading</div>
	}
}