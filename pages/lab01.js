import React, { Component } from "react"
export default class App extends Component {
	render(){
		return <Hello firstName="Kanchana" lastName="Sondee" />
	}
}
// TODO: this component needs lastName props!
class Hello extends React.Component {
  render() {
    // TODO: show last name
    return (
      <div>
        Hello <br />
        Firstname: {this.props.firstName} <br />
        Lastname: {this.props.lastName}
      </div>
    )
  }
}

// TODO: this component needs lastName props!
const Hello2 = (props) => (
  // TODO: show last name
  <div>
    Hello <br />
    Firstname: {props.firstName} <br />
    Lastname:
  </div>
)
