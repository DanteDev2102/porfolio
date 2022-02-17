const submitForm = (values, { resetForm }) => {
	setTimeout(() => {
		alert(JSON.stringify(values, null, 2));
		resetForm();
	}, 1500);
};

export default submitForm;
