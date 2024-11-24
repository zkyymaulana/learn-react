function ToDoListButton(props) {
	const { id, tasks, move, remove, edit } = props;
	const currentIndex = tasks.findIndex(item => item.id === id);
	const prevIndex = currentIndex - 1;
	const nextIndex = currentIndex + 1;

	const isFirstItem = prevIndex < 0;
	const isLastItem = nextIndex >= tasks.length;

	return (
		<>
			{/* Button Prev */}
			<button onClick={() => move(currentIndex, prevIndex)} disabled={isFirstItem} className={`text-gray-500 hover:text-gray-700 ${isFirstItem ? 'opacity-50 cursor-not-allowed' : ''}`}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
				</svg>
			</button>

			{/* Button Next */}
			<button onClick={() => move(currentIndex, nextIndex)} disabled={isLastItem} className={`text-gray-500 hover:text-gray-700 ${isLastItem ? 'opacity-50 cursor-not-allowed' : ''}`}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
				</svg>
			</button>

			{/* Button Edit */}
			<button
				onClick={() => {
					const newTask = prompt('Edit task:', tasks[currentIndex].task);
					if (newTask) {
						edit(id, newTask);
					}
				}}
				className="text-blue-500 hover:text-blue-700"
			>
				✏️
			</button>

			{/* Button Delete */}
			<button
				onClick={() => {
					remove(id);
				}}
				className="text-red-500 hover:text-red-700"
			>
				🗑️
			</button>
		</>
	);
}

export default ToDoListButton;
