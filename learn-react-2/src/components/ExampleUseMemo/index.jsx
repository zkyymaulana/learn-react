import { useMemo, useState } from 'react';

const calculation = num => {
	console.log('call calculation');
	for (let i = 0; i < 100; i++) {
		num += 1;
	}
	return num;
};

const ExampleUseMemo = () => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);
	const result = useMemo(() => calculation(count), [count]);

	const increment = () => {
		setCount(count => count + 1);
	};

	const addTodos = () => {
		setTodos(todo => [...todo, 'New Todo']);
	};

	return (
		<div>
			<h2>Count : {count}</h2>
			<button onClick={increment}>+</button>
			<h2>Calculation : </h2>
			<div>{result}</div>
			<hr />
			<h2>Todos : </h2>
			{todos.map((todo, index) => {
				<p key={index}> {todo} </p>;
			})}
			<button onClick={addTodos}>addTodo</button>
		</div>
	);
};

export default ExampleUseMemo;
