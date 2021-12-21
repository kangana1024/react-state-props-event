import { Component } from "react"
export default class App extends Component {

	// constructor() {
	// 	super()
	// 	this.handleClick = this.handleClick.bind(this)
	// }

	i = 4

	handleClick = (e) => {
		e.preventDefault()

		alert("Click. : " + this.i)
	}

	render() {
		return (
			<div style={{
				textAlign: 'center'
			}}>
				<a onClick={this.handleClick}>
					Click ME!
				</a>
			</div>
		)
	}
}