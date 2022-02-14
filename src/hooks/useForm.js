import { useState } from 'react';

const useForm = (initialValue) => {
	const [form, setForm] = useState(initialValue);
	const [errors, setErrors] = useState(initialValue);
	const regexs = {
		name: /^[a-zA-ZÀ-ÿ]{2,25}$/,
		lastname: /^[a-zA-ZÀ-ÿ]{2,25}$/,
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		subject: /^[a-zA-ZÀ-ÿ]{2,25}$/,
		message: /^[a-zA-ZÀ-ÿ0-9.,;:]{15,60}$/
	};
	const setError = (input, msg) => {
		setErrors({
			...errors,
			[input]: msg
		});
	};
	const validationForm = (input, value) => {
		const regex = regexs[input];
		const compare = regex.test(value);
		if (!compare) {
			let msg = '';
			switch (input) {
				case 'name':
					msg =
						'The name must have a minimum of 2 and a maximum of 25 characters';
					setError(input, msg);
					break;
				case 'lastname':
					msg =
						'The lastname must have a minimum of 2 and a maximum of 25 characters';
					setError(input, msg);
					break;
				case 'email':
					msg = 'the email must contain "@", "."';
					setError(input, msg);
					break;

				default:
					break;
			}
		}
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value
		});
		validationForm(name, value);
	};
	const handleBlur = (e) => {
		const { name, value } = e.target;
		validationForm(name, value);
	};
	const handleSubmit = (e) => {
		console.log(form);
		e.preventDefault();
	};
	return [form, handleChange, handleBlur, handleSubmit];
};

export default useForm;
