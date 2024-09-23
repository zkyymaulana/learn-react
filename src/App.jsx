import React from 'react';
import Button from './components/Elements/Button/Index';

function App() {
	return (
		<div className="flex justify-center bg-blue-600 min-h-screen items-center text-white">
			<div className="flex gap-x-4">
				<Button variant="bg-red-700">Login</Button>
				<Button variant="bg-slate-700">Logout</Button>
				<Button>Register</Button>
			</div>
		</div>
	);
}

export default App;
