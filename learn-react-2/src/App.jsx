import { memo, useId, useState } from 'react';

// useID Hooks
// function Input(props) {
// 	const { id = 'input', label } = props;
// 	const inputId = useId();

// 	return (
// 		<>
// 			<label htmlFor="">
// 				<span>{label}</span>
// 				<input type="text" id={`${inputId}-${id}`} />
// 			</label>
// 			<p aria-details={inputId}>Name should contain at least first name and last name</p>
// 		</>
// 	);
// }

// Memo
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

function App() {
	// useId Hooks
	// const inputId = useId();

	// Memo
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
			{/* useId Hooks */}
			{/* <Input type="text" id={inputId} />
			<Input id="firstname" />
			<Input id="firstname" /> */}
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

export default App;
