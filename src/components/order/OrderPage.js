import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { currencyType, menuItemType, cartItemType } from '../propTypes';
import OrderTable from './OrderTable';
import OrderFormSubmit from './OrderFormSubmit';

import './OrderPage.css';
import Spinner from "react-bootstrap/Spinner";


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
				To complete the order please submit delivery information below:
				<OrderFormSubmit
					onSubmitOrder={onSubmitOrder}
				/>
			</Container>
		)}
		<div className="vertical-gaps">
			<input
				className="btn btn-outline-dark"
				type="button"
				value="go back to menu"
				onClick={navigateToMenu}
			/>
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
