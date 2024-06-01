import React from 'react';

const Exponent = ({ num, exponent }) => {
	let multiplicationStrg = '';

	for (let i = 0; i < exponent; i++) {
		multiplicationStrg += num;
		if (i < exponent - 1) {
			multiplicationStrg += '*';
		}
	}

	return (
		<div className="exponent-counter-container">
			<p className="exponent-label">
				{`${num}`}
				<sup>{`${exponent}`}</sup>
			</p>

			<p className="exponent-result">
				{' '}
				{multiplicationStrg}={' '}
				<span className="total">{`${Math.pow(num, exponent)}`}</span>
			</p>
		</div>
	);
};

export default Exponent;
