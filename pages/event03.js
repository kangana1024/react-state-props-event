import { Component } from "react";

export default class App extends Component {
	handleOnChange = (uid) => (e) => {
		const value = e.target.value
		const id = e.target.id
		const cl = e.target.className
		console.log("Value : ", value)
		console.log("ID : ", id)
		console.log("Class : ", cl)
		console.log("User ID : ", uid)
	}

	handleOnClick = (name) => {
		alert("name : ", name)
	}

	render() {
		return <div style={{
			textAlign: 'center'
		}}>
			<input id="i01" className="p-1" onChange={this.handleOnChange(12)} name="input01" />
			<button onClick={(e) => this.handleOnClick('CAT')}>
				Click ME.
			</button>
		</div>
	}
}