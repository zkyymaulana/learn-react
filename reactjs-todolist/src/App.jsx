import { useRef, useState } from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
	const newTask = useRef('');
	const [tasks, setTasks] = useState([]);

	function setId() {
		if (tasks.length === 0) {
			return 1;
		}

		const maxId = Math.max(...tasks.map(task => task.id));
		return maxId + 1;
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

	function setIsCompleted(id) {
		setTasks(item => {
			const updatedTasks = item.map(task => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));

			return updatedTasks;
		});
	}

	function move(currentIndex, updatedIndex) {
		if (updatedIndex < 0 || updatedIndex >= tasks.length) {
			return;
		}

		setTasks(prevTasks => {
			const updatedTasks = [...prevTasks];
			const [movedTask] = updatedTasks.splice(currentIndex, 1);
			updatedTasks.splice(updatedIndex, 0, movedTask);

			return updatedTasks;
		});
	}

	function editTask(id, editedTask) {
		setTasks(prevTasks => prevTasks.map(task => (task.id === id ? { ...task, task: editedTask } : task)));
	}

	function removeTask(id) {
		if (window.confirm('Are you sure you want to delete this task?')) {
			setTasks(tasks.filter(item => item.id != id));
		}
	}

	return (
		<div>
			<Form addTask={addTask} newTask={newTask} />
			<ToDoList tasks={tasks} setIsCompleted={setIsCompleted} move={move} remove={removeTask} edit={editTask} />
		</div>
	);
}

export default App;
