import { memo, useState } from 'react';

const TodoList = memo(
	props => {
		const { todos } = props;
		console.log('Call Todo LIst');
		return (
			<>
				<h2>My Todos</h2>
				{todos.map((todo, index) => {
					return <p key={`${todo}-${index}`}>{todo}</p>;
				})}
			</>
		);
	},
	() => false
);

TodoList.displayName = 'TodoList';

const Counter = memo(props => {
	const { count } = props;
	console.log('call counter');
	return <p>Count : {count}</p>;
});

function ExampleMemo() {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState(['Coding', 'Games']);

	const increment = () => {
		setCount(count => count + 1);
	};

	const addTodo = newTodo => {
		setTodos(todos => [...todos, newTodo]);
	};

	return (
		<>
			<h1>Hello World!</h1>
			<TodoList todos={todos}></TodoList>
			<button
				onClick={() => {
					addTodo('Playing Piano');
				}}
			>
				add Todo
			</button>
			<Counter count={count} />
			<button onClick={increment}>Increment</button>
		</>
	);
}

export default ExampleMemo;
