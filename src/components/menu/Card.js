import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

import { Currency } from '../../constants';
import { menuItemType } from '../propTypes';
import { formatAmount } from '../../helpers/cardHelpers';

const MenuCard = ({ item, currency, addToCart, onOpenDetails }) => (
	<Accordion>
		<Card className="bg-warning mb-4">
			<Card.Img variant="top" src={item.image} />
			<Card.Body>
				<Card.Title className="font-weight-bold">{item.title}</Card.Title>
				<Card.Subtitle className="mb-2">({item.measure})</Card.Subtitle>
				<Button
					id={item.id}
					variant="danger"
					onClick={() => addToCart(item)}
				>
					{formatAmount(item.price, currency)}
				</Button>
				<Accordion.Collapse eventKey={item.id}>
					<Card.Body className="p-0 mt-3">
						<Card.Text>
							{item.info}
						</Card.Text>
						<Button variant="dark" hidden={!item.description} onClick={() => onOpenDetails(item)}>
							Description
					</Button>
					</Card.Body>
				</Accordion.Collapse>
			</Card.Body>
			<Accordion.Toggle as={Card.Footer} className="pointer" eventKey={item.id} hidden={!item.info}>
				Info
        </Accordion.Toggle>
		</Card>
	</Accordion>
);

MenuCard.propTypes = {
	item: menuItemType,
	currency: PropTypes.oneOf([Currency.EUR, Currency.USD]),
	addToCart: PropTypes.func.isRequired,
	onOpenDetails: PropTypes.func.isRequired,
};

export default MenuCard;
