import { Component } from 'react'
export default class App extends Component {
	showAlert = (name) => (e) => {
		alert('hello ' + name)
	}
	render() {
		return (
			<button onClick={this.showAlert('john')}>
				Click Me
			</button>
		)
	}
}
