import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import formSchema from '../Schemas/formSchema';
import submitForm from '../helpers/submitForm';
import Error from '../Components/Error';

const initialValues = {
	name: '',
	lastname: '',
	subject: '',
	email: '',
	message: ''
};

const Contact = () => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={formSchema}
			onSubmit={submitForm}
		>
			{({ errors }) => (
				<Form>
					{console.log(errors)}
					<label>
						Name:
						<Field
							name="name"
							type="text"
							placeholder="Jhon"
						/>
					</label>
					<ErrorMessage
						name="name"
						component={() => (
							<Error error={errors.name} />
						)}
					/>
					<label>
						Lastname:
						<Field
							type="text"
							name="lastname"
							placeholder="Doe"
						/>
					</label>
					<ErrorMessage
						name="lastname"
						component={() => (
							<Error error={errors.lastname} />
						)}
					/>
					<label>
						Email:
						<Field
							name="email"
							type="email"
							placeholder="JhonDoe@email.com"
						/>
					</label>
					<ErrorMessage
						name="email"
						component={() => (
							<Error error={errors.email} />
						)}
					/>
					<label>
						Subject:
						<Field
							name="subject"
							type="text"
							placeholder="Subject..."
						/>
					</label>
					<ErrorMessage
						name="subject"
						component={() => (
							<Error error={errors.subject} />
						)}
					/>
					<label>
						Message:
						<Field
							name="message"
							as="textarea"
							placeholder="Message..."
						/>
					</label>
					<ErrorMessage
						name="message"
						component={() => (
							<Error error={errors.message} />
						)}
					/>
					<button>submit</button>
				</Form>
			)}
		</Formik>
	);
};

export default Contact;
