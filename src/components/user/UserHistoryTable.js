import React from 'react';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

import { userType } from '../propTypes';

const UserPage = ({ user }) => (
	<div className="vertical-gaps">
		{user.orderHistory.length
			? (
				<Table striped bordered hover size="sm" >
					<thead>
					<tr>
						<th>Date</th>
						<th>Order</th>
						<th>Total</th>
					</tr>
					</thead>
					<tbody>
					{
						user.orderHistory.map(({ date, fullPrice, cart }) => (
							<tr key={date}>
								<th>{date}</th>
								<th>{cart.map(({title}) => title).join(', ')}</th>
								<th>{fullPrice}</th>
							</tr>
						))
					}
					</tbody>
				</Table>
			)
			: (
				<Alert variant="dark"><i>No previous orders</i></Alert>
			)
		}
	</div>
);

UserPage.propTypes = {
	user: userType,
};

export default UserPage;
