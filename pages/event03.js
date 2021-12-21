import { Component } from "react";

export default class App extends Component {
	handleOnChange = (e) => {
		const value = e.target.value
		console.log("Value : ", value)
	}

	handleOnClick = (name) => {
		alert("name : ", name)
	}

	render() {
		return <div style={{
			textAlign: 'center'
		}}>
			<input onChange={this.handleOnChange} name="input01" />
			<button onClick={(e)=>this.handleOnClick('CAT')}>
				Click ME.
			</button>
		</div>
	}
}