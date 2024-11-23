import { useRef, useState } from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
	const newTask = useRef('');
	const [tasks, setTasks] = useState([]);

	function setId() {
		const jumlahTask = tasks.length;
		return jumlahTask + 1;
	}

	function addTask(event) {
		event.preventDefault();
		if (newTask.current.value === '') {
			alert('Please enter what you are going to do');
			return false;
		}
		const data = {
			id: setId(),
			task: newTask.current.value,
			isCompleted: false,
		};
		newTask.current.value = '';
		setTasks([...tasks, data]);
	}

	return (
		<div>
			<Form addTask={addTask} newTask={newTask} />
			<ToDoList tasks={tasks} />
		</div>
	);
}

export default App;
