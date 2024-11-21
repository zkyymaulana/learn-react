import { useId } from 'react';

function Input(props) {
	const { id = 'input', label } = props;
	const inputId = useId();

	return (
		<>
			<label htmlFor="">
				<span>{label}</span>
				<input type="text" id={`${inputId}-${id}`} />
			</label>
			<p aria-details={inputId}>Name should contain at least first name and last name</p>
		</>
	);
}

function App() {
	const inputId = useId();

	return (
		<>
			<Input type="text" id={inputId} />
			<Input id="firstname" />
			<Input id="firstname" />
		</>
	);
}

export default App;
