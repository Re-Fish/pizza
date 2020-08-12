import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import { Currency } from '../../constants';
import { formatAmount } from '../../helpers/cardHelpers';

const MenuCard = ({ item, currency, addToCart, onOpenDetails }) => (
	<Card key={item.id} className="bg-warning mb-1">
		<Card.Img variant="top" src={item.image} />
		<Badge variant="danger">{formatAmount(item.price, currency)}</Badge>
		<Card.Body>
			<Card.Title className="font-weight-bold">{item.title}</Card.Title>
			<Card.Text>{item.info}</Card.Text>
		</Card.Body>
		<Button variant="warning" hidden={!item.description} onClick={onOpenDetails}>
			Details
		</Button>
		<Card.Footer>
			<Button
				id={item.id}
				variant="danger"
				onClick={() => addToCart(item)}
			>
				Add to cart
			</Button>
		</Card.Footer>
	</Card>
);

MenuCard.propTypes = {
	item: PropTypes.object,
	currency: PropTypes.oneOf([Currency.EUR, Currency.USD]),
	addToCart: PropTypes.func,
	onOpenDetails: PropTypes.func,
};

export default MenuCard;
