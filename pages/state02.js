import { useState } from "react"

const App = () => {
	const [count, setCount] = useState(1)
	const [name, setName] = useState('Batman')
	const [skills, setSkill] = useState([
		{
			id: 1,
			name: 'nodejs'
		},
		{
			id: 2,
			name: 'react'
		},
		{
			id: 3,
			name: 'java'
		}
	])

	const addCount = () => {
		const tmp = count + 1
		setCount(tmp)
	}

	return (
		<div style={{ textAlign: 'center' }}>
			<p>Count : {count}<button onClick={addCount}>+</button></p>
			<p>Name : {name}</p>
			<p>Skill JSON : {JSON.stringify(skills)}</p>
			<p>Skill LISTS : </p>
			<ul>
				{
					skills.map((item) => {
						return (
							<li key={item.id}>{item.name}</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default App