import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const OrderFormSubmit = ({
	onSubmitOrder,
}) => {
	const handleSubmit = (e) => {
		const {
			formGridName,
			formGridPhone,
			formGridAddress,
		} = e.target;
		return onSubmitOrder({
			name: formGridName.value,
			phone: formGridPhone.value,
			addr: formGridAddress.value,
		});
	};
	return (
		<Container>
			<Form
				className="vertical-gaps order-submit-form"
				onSubmit={handleSubmit}
			>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridName">
						<Form.Label>Name</Form.Label>
						<Form.Control />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPhone">
						<Form.Label>Phone number</Form.Label>
						<Form.Control />
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="formGridAddress">
					<Form.Label>Address</Form.Label>
					<Form.Control placeholder="1234 Main St" />
				</Form.Group>

				<Form.Group id="formGridCheckbox">
					<Form.Check type="checkbox" label="Contact me" />
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit 🍕😋🍕
				</Button>
			</Form>

		</Container>
	)
};
OrderFormSubmit.propTypes = {
	onSubmitOrder: PropTypes.func.isRequired,
};

export default OrderFormSubmit;
