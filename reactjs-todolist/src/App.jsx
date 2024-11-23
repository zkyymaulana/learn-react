import { useRef } from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
	const newTask = useRef('');
	function addTask(event) {
		event.preventDefault();
		console.log(`saya diklik isi ${newTask.current.value}`);
	}
	return (
		<div>
			<Form addTask={addTask} newTask={newTask} />
			<ToDoList />
		</div>
	);
}

export default App;
