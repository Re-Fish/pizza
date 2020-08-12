import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { userType } from '../propTypes';
import UserHistoryTable from './UserHistoryTable';


const UserPage = ({ user, onLogout }) => (
	<>
		<Container>
			<UserHistoryTable user={user} />
		</Container>
		<div className="vertical-gaps">
			<Button onClick={onLogout} variant="outline-dark">Log out</Button>
		</div>
	</>
);

UserPage.propTypes = {
	user: userType,
	onLogout: PropTypes.func.isRequired,
};

export default UserPage;
