import { Component } from "react";

export default class App extends Component {
	render() {
		return (
			<div>
				<Hello>
					Hello Child.
				</Hello>
				<HelloFunc>
					Hello Child function.
				</HelloFunc>
			</div>
		)
	}
}

function HelloFunc(props) {
	return (
		<div style={{
			textAlign: 'center',
			color: 'green'
		}}>
			{props.children}
		</div>
	)
}

class Hello extends Component {
	render() {
		return (
			<div style={{
				textAlign: 'center',
				color: 'red'
			}}>
				{this.props.children}
			</div>
		)
	}
}