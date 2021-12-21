import { Component } from "react"
export default class App extends Component {
	showNameFunc = (name) => {
		return 'my name is ' + name
	}
	render() {
		const str = 'hello react!'
		const number = 5
		const bool = false
		const nullValue = null
		const undefinedValue = undefined
		const obj = { name: 'somchai', b: 2 }
		const arr = ['john', 2, 'smith', 4]
		const now = new Date()
		return (
			<Display
				myStr={str}
				myNumber={number}
				myBool={bool}
				myTrueBool
				myNull={nullValue}
				myUndefinded={undefinedValue}
				myObj={obj}
				myArray={arr}
				myDate={now}
				myShowNameFunc={this.showNameFunc}
			/>
		)
	}
}

class Display extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div style={{
				textAlign: 'center'
			}}>
				<p>string: {this.props.myStr}</p>
				<p>number: {this.props.myNumber}</p>
				<p>false value: {this.props.myBool.toString()}</p>
				<p>true value: {this.props.myTrueBool.toString()}</p>
				<p>null: {this.props.myNull === null && 'yes'}</p>
				<p>undefined: {this.props.myUndefinded === undefined && 'yes'}</p>
				<p>object: {JSON.stringify(this.props.myObj)}</p>
				<p>object Name: {this.props.myObj.name}</p>
				<p>array: {JSON.stringify(this.props.myArray)}</p>
				<p>Date: {this.props.myDate.toString()}</p>
				<p>function: {this.props.myShowNameFunc('John')}</p>
			</div>
		)
	}
}
