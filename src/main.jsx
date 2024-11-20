import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/Register.jsx';
import ErrorPage from './Pages/404.jsx';
import ProductsPage from './Pages/products';
import ProfilePage from './Pages/profile';

const router = createBrowserRouter([
	{
		path: '/',
		element: <div>Hello World</div>,
		errorElement: <ErrorPage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
	{
		path: '/products',
		element: <ProductsPage />,
	},
	{
		path: '/profile',
		element: <ProfilePage />,
	},
]);
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
