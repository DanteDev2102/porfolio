import React from 'react';

const Input = ({ value, handleChange, handleBlur, error, name }) => {
	return (
		<>
			{error ? (
				<>
					<label className="label">
						{name}:{' '}
						<input
							className="input-error"
							type="text"
							name={name}
							value={value}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</label>
					<p className="error-msg">{error}</p>
				</>
			) : (
				<label className="label">
					{name}:{' '}
					<input
						className="input"
						type="text"
						name={name}
						value={value}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</label>
			)}
		</>
	);
};

export default Input;
