import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";

const DetailsModal = ({ show, onClose }) => (
	<Modal show={show} onHide={onClose}>
		<Modal.Header closeButton>
			<Modal.Title>Modal heading</Modal.Title>
		</Modal.Header>
		<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
		<Modal.Footer>
			<Button variant="secondary" onClick={onClose}>
				Close
			</Button>
			<Button variant="primary" onClick={onClose}>
				Save Changes
			</Button>
		</Modal.Footer>
	</Modal>
);

DetailsModal.propTypes = {
	show: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default DetailsModal;
