import React from 'react';
import { Formik, Form } from 'formik';

import formSchema from '../Schemas/formSchema';
import submitForm from '../helpers/submitForm';
import initialValues from '../types/initialValues';
import inputs from '../types/inputs';
import InputField from '../Components/InputField';
import Social from '../Components/Social';

const Contact = () => {
	const props = {
		initialValues: initialValues,
		validationSchema: formSchema,
		onSubmit: submitForm
	};
	return (
		<Formik {...props}>
			{({ errors }) => (
				<div className="section-container animate__animated animate__fadeInLeft">
					<section className="form-container">
						<h2 className="title">Let's Talk</h2>
						<Form className="form">
							{inputs.map((input) => (
								<InputField
									key={input.name}
									error={errors[input.name]}
									{...input}
								/>
							))}
							<button className="submit">Submit</button>
						</Form>
					</section>
					<div className="info-container">
						<section className="info-text">
							<h3 className="text-title">
								You got a problem to solve?
							</h3>
							<p className="text-parrafo">
								Get your space suit ready and tell me
								your ideas to develop your dream
								aplication.
							</p>
							<Social />
						</section>
					</div>
				</div>
			)}
		</Formik>
	);
};

export default Contact;
