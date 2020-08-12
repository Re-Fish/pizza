import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { DELIVERY_FEE } from '../../constants'
import { currencyType, cartItemType } from '../propTypes';
import { formatAmount, getCartSum } from '../../helpers/cardHelpers';


const OrderTable = ({ cart, currency, removeFromCart }) => {
	const totalSum = getCartSum(cart) + DELIVERY_FEE;
	return (
		<div className="vertical-gaps">
			{
				cart?.length
					? (
						<Table striped bordered hover size="sm" >
							<thead>
							<tr>
								<th>&nbsp;</th>
								<th>Item</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Total</th>
								<th>...</th>
							</tr>
							</thead>
							<tbody>
							{cart.map(({
										   id,
										   title,
										   image,
										   price,
										   quantity,
									   }) => (
								<tr key={id}>
									<td><Image src={image} roundedCircle width="30" /></td>
									<td>{title}</td>
									<td>{formatAmount(price, currency)}</td>
									<td>{quantity}</td>
									<td>{formatAmount(price * quantity, currency)}</td>
									<td>
										<Button
											variant="danger"
											size="sm"
											onClick={() => removeFromCart(id)}
										>
											Remove
										</Button>
									</td>
								</tr>
							))}
							<tr>
								<th colSpan={4} className="table-total">Delivery fee</th>
								<th>{formatAmount(DELIVERY_FEE, currency)}</th>
								<th>&nbsp;</th>
							</tr>
							</tbody>
							<tfoot>
							<tr>
								<th colSpan={4} className="table-total">Grand Total</th>
								<th>{formatAmount(totalSum, currency)}</th>
								<th>&nbsp;</th>
							</tr>
							</tfoot>
						</Table>
					)
					: (
						<Alert variant="dark"><i>Cart is empty</i></Alert>
					)
			}
		</div>
	);
};

OrderTable.propTypes = {
	cart: PropTypes.arrayOf(cartItemType),
	currency: currencyType,
	removeFromCart: PropTypes.func.isRequired,
};

export default OrderTable;
