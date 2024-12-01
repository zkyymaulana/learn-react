// DarkMode.js
import React, { useState, useEffect } from 'react';

function DarkMode() {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		return localStorage.getItem('theme') === 'dark';
	});

	// Apply/remove dark mode classes on the body element
	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<div className="flex items-center">
			<label className="relative inline-flex items-center cursor-pointer">
				<input type="checkbox" className="sr-only peer" checked={isDarkMode} onChange={toggleDarkMode} />
				<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:peer-checked:bg-gradient-to-r from-primary to-secondary peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-black dark:after:bg-gray-900 after:border-gray-300 border border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
			</label>
		</div>
	);
}

export default DarkMode;
