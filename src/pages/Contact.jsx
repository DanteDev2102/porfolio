import React from 'react';
import { Formik, Form } from 'formik';

import formSchema from '../Schemas/formSchema';
import submitForm from '../helpers/submitForm';
import initialValues from '../types/initialValues';
import inputs from '../types/inputs';
import InputField from '../Components/InputField';

const Contact = () => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={formSchema}
			onSubmit={submitForm}
		>
			{({ errors }) => (
				<>
					<h2 className="title">Lets Talk</h2>
					<Form className="form">
						{inputs.map((props) => (
							<InputField
								key={props.name}
								errors={errors}
								{...props}
							/>
						))}
						<button className="submit">submit</button>
					</Form>
				</>
			)}
		</Formik>
	);
};

export default Contact;
