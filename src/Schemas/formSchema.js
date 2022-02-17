import * as Yup from 'yup';

const formSchema = Yup.object({
	name: Yup.string()
		.min(4, 'the name must have a minimum of 4 characters')
		.max(15, 'the name must have a maximum of 15 characters')
		.required('name is required'),
	lastname: Yup.string()
		.min(4, 'the lastname must have a minimum of 4 characters')
		.max(15, 'the lastname must have a maximum of 15 characters')
		.required('lastname is required'),
	subject: Yup.string()
		.min(4, 'the subject must have a minimum of 4 characters')
		.max(15, 'the subject must have a maximum of 15 characters')
		.required('subject is required'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Required'),
	message: Yup.string().max(
		60,
		'the message must have a maximun of 60 characters'
	)
});

export default formSchema;
