export default function App() {
	const i = 5
	const handleClick = (e) => {
		e.preventDefault()
		alert("Click." + i)
	}
	return (
		<div style={{
			textAlign: 'center',
		}}>
			<button onClick={handleClick}>
				Click ME!.
			</button>
		</div>
	)
}