const submitForm = async (formContactValues, { resetForm }) => {
	const sendFormData = await fetch('http://localhost:3001/mail', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(formContactValues)
	});
	const { msg } = await sendFormData.json();
	return msg;
};

export default submitForm;
