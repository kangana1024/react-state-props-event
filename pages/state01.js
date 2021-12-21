import { Component } from "react";

export default class App extends Component {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		count: 1
	// 	}
	// }
	state = {
		count: 1,
		name: 'Batman',
		skills: []
	}

	addCount = () => {
		const tmp = this.state.count
		this.setState({
			count: tmp + 1
		})
	}

	handleAddSkill = () => {
		const tmp = [...this.state.skills]
		tmp.push({
			id: this.state.skills.length + 1,
			name: 'java'
		})
		this.setState({
			skills: tmp
		})
	}

	render() {
		return (
			<div style={{
				textAlign: 'center'
			}}>
				<p>Count : {this.state.count}<button onClick={this.addCount}>+</button></p>
				<p>Name : {this.state.name}</p>
				<p>Skill JSON : {JSON.stringify(this.state.skills)}</p>
				<p>Skill LISTS : <button onClick={this.handleAddSkill}>+</button></p>
				<ul>
					{
						this.state.skills.map((item) => {
							return (
								<li key={item.id}>{item.name}</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}