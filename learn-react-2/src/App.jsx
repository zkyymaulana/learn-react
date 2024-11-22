// import { memo, useId, useState } from 'react';
import ExampleUseMemo from './components/ExampleUseMemo';

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

function App() {
	// useId Hooks
	// const inputId = useId();

	return (
		<>
			{/* useId Hooks */}
			{/* <Input type="text" id={inputId} />
			<Input id="firstname" />
			<Input id="firstname" /> */}
			<ExampleUseMemo />
		</>
	);
}

export default App;
