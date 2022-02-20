import * as Yup from 'yup';

const formSchema = Yup.object({
	name: Yup.string()
		.min(4, 'The name must have a minimum of 4 characters')
		.max(15, 'The name must have a maximum of 15 characters')
		.required('Name is required'),
	lastname: Yup.string()
		.min(4, 'The lastname must have a minimum of 4 characters')
		.max(15, 'The lastname must have a maximum of 15 characters')
		.required('Lastname is required'),
	subject: Yup.string()
		.min(4, 'The subject must have a minimum of 4 characters')
		.max(15, 'The subject must have a maximum of 15 characters')
		.required('Subject is required'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required'),
	message: Yup.string()
		.max(60, 'The message must have a maximun of 60 characters')
		.required('Message is required')
});

export default formSchema;
