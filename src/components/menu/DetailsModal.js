import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { formatAmount } from '../../helpers/cardHelpers';

const DetailsModal = ({
	show,
	onClose,
	itemDetails,
	currency,
	addToCart,
}) => (
		<Modal show={show} onHide={onClose} size="sm">
			<Modal.Header closeButton>
				<Modal.Title>{itemDetails.title}</Modal.Title>
			</Modal.Header>
			<Card.Img src={itemDetails.image} />
			<Modal.Body>{itemDetails.description}</Modal.Body>
			<Modal.Footer>
				<Button
					id={itemDetails.id}
					variant="danger"
					onClick={() => addToCart(itemDetails)}
				>
					{`Add ${formatAmount(itemDetails.price, currency)}`}
				</Button>
			</Modal.Footer>
		</Modal>
	);

DetailsModal.propTypes = {
	show: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default DetailsModal;
