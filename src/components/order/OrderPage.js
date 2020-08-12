import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { currencyType, cartItemType } from '../propTypes';
import OrderTable from './OrderTable';
import OrderFormSubmit from './OrderFormSubmit';

import './OrderPage.css';


const OrderPage = ({
	navigateToMenu,
	cart,
	currency,
	removeItemFromCart,
	onSubmitOrder,
	orderBeingSent
}) => (
		<>
			<Container>
				<OrderTable
					cart={cart}
					currency={currency}
					removeFromCart={removeItemFromCart}
				/>
			</Container>

			{orderBeingSent && (
				<Spinner animation="border" variant="secondary" />
			)}
			{(!orderBeingSent && !!cart?.length) && (
				<Container className="order-submit-form">
					To complete the order please fill in delivery information below:
					<OrderFormSubmit {...{ onSubmitOrder }} />
				</Container>
			)}
			<div className="vertical-gaps">
				<Button variant="outline-dark" onClick={navigateToMenu}>return to menu</Button>
			</div>
		</>
	);


OrderPage.propTypes = {
	navigateToMenu: PropTypes.func.isRequired,
	cart: PropTypes.arrayOf(cartItemType),
	currency: currencyType,
	removeItemFromCart: PropTypes.func.isRequired,
	onSubmitOrder: PropTypes.func.isRequired,
	orderBeingSent: PropTypes.bool,
};

export default OrderPage;
