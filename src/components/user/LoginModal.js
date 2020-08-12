import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

const LoginModal = ({ show, onClose, onLogin, isAuthorizing, authError }) => (
	<Modal show={show} onHide={onClose}>
		<Modal.Header closeButton>
			<Modal.Title>Log in</Modal.Title>
		</Modal.Header>

		<Modal.Body>
			<Form onSubmit={(e) => {
				e.preventDefault();
				const {
					formGridEmail,
					formGridPassword,
				} = e.target;
				return onLogin({
					email: formGridEmail.value,
					password: formGridPassword.value,
				});
			}}>

				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
				</Form.Row>

				{authError && (
					<Alert variant="danger">{authError}</Alert>
				)}

				<Button variant="success" type="submit">
					Login
					{isAuthorizing && (
						<Spinner
							as="span"
							animation="border"
							size="sm"
							role="status"
							aria-hidden="true"
						/>
					)}
				</Button>
			</Form>
		</Modal.Body>
	</Modal>
);

LoginModal.propTypes = {
	show: PropTypes.bool,
	onClose: PropTypes.func.isRequired,
	onLogin: PropTypes.func.isRequired,
	isAuthorizing: PropTypes.bool,
	authError: PropTypes.string,
};

export default LoginModal;
