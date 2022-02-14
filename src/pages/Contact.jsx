import { useState } from 'react';
import Input from '../Components/Input';

const Contact = () => {
	const [form, setForm] = useState({
		name: '',
		lastname: '',
		email: '',
		subject: '',
		message: ''
	});
	const inputs = ['name', 'lastname', 'email', 'subject'];
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value
		});
		console.log(form);
	};
	const handleBlur = (e) => {
		console.log(form);
	};
	const handleSubmit = (e) => {
		console.log(form);
		e.preventDefault();
	};
	return (
		<section className="form-container">
			<form
				className="form"
				method="POST"
				onSubmit={handleSubmit}
			>
				{inputs.map((input) => (
					<Input
						key={input}
						name={input}
						value={form[input]}
						handleChange={handleChange}
						handleBlur={handleBlur}
					/>
				))}
				<label className="label">
					Message:{' '}
					<textarea
						className="textarea input"
						name="message"
						value={form.message}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</label>
				<button className="btn">submit</button>
			</form>
			<section className="redes">
				<h3>Mis Redes</h3>
				<p>instagram</p>
				<p>facebook</p>
				<p>linkedin</p>
			</section>
		</section>
	);
};

export default Contact;
