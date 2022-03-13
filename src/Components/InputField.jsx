import { memo } from 'react';
import { Field, ErrorMessage } from 'formik';
import Error from '../Components/Error';

const InputField = ({ error, name, type }) => {
	return (
		<div className="input-container">
			{type !== 'textarea' ? (
				<>
					<label className="contact-title">
						{name.replace(/^./, name[0].toUpperCase())}:
						<Field
							className="input-form"
							name={name}
							type={type}
							autoComplete="off"
						/>
					</label>
					<ErrorMessage
						name={name}
						component={() => <Error error={error} />}
					/>
				</>
			) : (
				<>
					{' '}
					<label className="contact-title">
						{name.replace(/^./, name[0].toUpperCase())}:
						<Field
							className="input-form textarea"
							name={name}
							as={type}
							spellCheck="true"
						/>
					</label>
					<ErrorMessage
						name={name}
						component={() => <Error error={error} />}
					/>
				</>
			)}
		</div>
	);
};

export default memo(InputField);
