import { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <HelloClass firstName="Kanchana : class" age={30} />
        <HelloFunction firstName="Kanchana : function" />
      </div>
    )
  }
}

class HelloClass extends Component {
  render() {
    return (
      <div style={{
        textAlign: 'center'
      }}>
        <h1>Hello {this.props.firstName}</h1>
        <p>AGE : {this.props.age}</p>
      </div>
    )
  }
}

function HelloFunction(props) {
  return (
    <div style={{
      textAlign: 'center'
    }}>
      <h1>Hello {props.firstName}</h1>
    </div>
  )
}