import Button from '../Elements/Button/Index';
import InputForm from '../Elements/Input/Index';

const FormLogin = () => {
	const handleLogin = () => {
		event.preventDefault();
		localStorage.setItem('email', event.target.email.value);
		localStorage.setItem('password', event.target.password.value);
		window.location.href = '/products';
	};

	return (
		<form onSubmit={handleLogin}>
			<InputForm label="Email" type="email" placeholder="example@mail.com" name="email" />
			<InputForm label="Password" type="password" placeholder="********" name="password" />
			<Button classname="bg-blue-600 w-full" type="submit">
				Login
			</Button>
		</form>
	);
};

export default FormLogin;
