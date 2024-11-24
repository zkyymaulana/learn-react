import ToDoListButton from './ToDoListButton';

function ToDoList(props) {
	return (
		<div className="flex justify-center">
			<div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
				<ul className="space-y-4">
					{props.tasks.map(item => {
						return (
							<li key={item.id} className="flex justify-between items-center border-b-1 border-gray-200 ">
								<input type="checkbox" className="text-xl cursor-pointer accent-blue-900" checked={item.isCompleted} onChange={() => props.setIsCompleted(item.id)} />
								<p className={`flex-1 text-start px-3 ${item.isCompleted ? 'line-through text-gray-500 decoration-2 decoration-blue-950' : 'text-blue-950'}`}>
									{item.task} - ${item.id}
								</p>
								<div className="flex space-x-2">
									<ToDoListButton id={item.id} tasks={props.tasks} move={props.move} remove={props.remove} edit={props.edit} />
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default ToDoList;
