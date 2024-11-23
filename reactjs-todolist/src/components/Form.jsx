import React from 'react';
import logo from '../assets/logo.svg';

function Form(props) {
	return (
		<div className="flex items-center justify-center p-6 mt-10">
			<div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
				<div className="flex items-center justify-center gap-2">
					<img src={logo} alt="Logo" className="mb-4 w-14" />
					<h1 className="text-4xl font-semibold text-blue-950 mb-6">MyTask</h1>
				</div>
				<form action="">
					<input type="text" ref={props.newTask} placeholder="Add Your Task" className="w-full p-2 mb-4 border-b-2 border-gray-300 focus:outline-none text-gray-700 placeholder-gray-400" />
					<button type="submit" className="w-full py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-300" onClick={props.addTask}>
						Add Task
					</button>
				</form>
			</div>
		</div>
	);
}

export default Form;
