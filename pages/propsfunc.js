const App = () => {
	const str = 'hello react!'
	const number = 5
	const bool = false
	const nullValue = null
	const undefinedValue = undefined
	const obj = { name: 'somchai', b: 2 }
	const arr = ['john', 2, 'smith', 4]
	const now = new Date()
	const showNameFunc = (name) => {
		return 'my name is ' + name
	}
	return (<div>
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
			myShowNameFunc={showNameFunc}
		/>
	</div>)
}

function Display(props) {

	return (
		<div style={{
			textAlign: 'center'
		}}>
			<p>string: {props.myStr}</p>
			<p>number: {props.myNumber}</p>
			<p>false value: {props.myBool.toString()}</p>
			<p>true value: {props.myTrueBool.toString()}</p>
			<p>null: {props.myNull === null && 'yes'}</p>
			<p>undefined: {props.myUndefinded === undefined && 'yes'}</p>
			<p>object: {JSON.stringify(props.myObj)}</p>
			<p>object Name: {props.myObj.name}</p>
			<p>array: {JSON.stringify(props.myArray)}</p>
			<p>Date: {props.myDate.toString()}</p>
			<p>function: {props.myShowNameFunc('John')}</p>
		</div>
	)
}


export default App