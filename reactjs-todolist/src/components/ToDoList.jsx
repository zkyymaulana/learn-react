function ToDoList(props) {
	props.tasks.sort((a, b) => b.id - a.id);
	return (
		<div className="flex justify-center">
			<div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
				<ul className="space-y-4">
					{props.tasks.map(item => {
						return (
							<li key={item.id} className="flex justify-between items-center border-b-1 border-gray-200 ">
								<input type="checkbox" className="text-xl cursor-pointer accent-blue-900" checked={item.isCompleted} onChange={() => props.setIsCompleted(item.id)} />
								<p className={`flex-1 text-start px-3 ${item.isCompleted ? 'line-through text-gray-500 decoration-2 decoration-blue-950' : 'text-blue-950'}`}>{item.task}</p>
								<div className="flex space-x-2">
									<button className="text-gray-500 hover:text-gray-700">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
										</svg>
									</button>
									<button className="text-gray-500 hover:text-gray-700">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
										</svg>
									</button>
									<button className="text-slate-500 hover:text-red-700">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
											/>
										</svg>
									</button>
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
