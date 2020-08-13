import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { Currency, MenuGroups, MenuGroupNames } from '../../constants';
import { formatAmount, getCartSum } from '../../helpers/cardHelpers';
import { userType } from '../propTypes';

const Header = ({
	cart,
	isChangingCart,
	currency,
	toggleCurrency,
	navigateToMenu,
	navigateToCart,
	navigateToUser,
	showMenuLinks,
	onClickLogin,
	user,
}) => {
	const itemsCount = cart?.reduce((total, { quantity }) => total + quantity, 0);
	const itemsSum = getCartSum(cart);
	return (
		<>
			<Jumbotron fluid className="m-0 py-1 tomato">
				<img alt="pizza-logo" src="images/pizza.png" className='App-logo' />
				<h1 className="display-4">Pizza Shop</h1>
				<p className="lead">* Easy order * Fast delivery * Tasty meal *</p>
			</Jumbotron>

			<Navbar className="m-0 py-1 tomato" variant="dark" sticky="top" expand="lg" collapseOnSelect>
				<Navbar.Brand href="#home" className="font-weight-bold" onClick={navigateToMenu}>
					<Image alt="pizza-logo" src="images/pizza.png" width="30" height="30" className="d-inline-block align-top" />
					{' '}
					Pizza Shop
				</Navbar.Brand>

				<Navbar.Text className="mr-auto">
					City and phone number
				</Navbar.Text>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end font-weight-bold">
					<Nav>
						{showMenuLinks && (
							Object.keys(MenuGroups).map((menuGroup) =>
								<Nav.Link href={`#${menuGroup}`} key={menuGroup} className="text-uppercase">
									{MenuGroupNames[menuGroup]}
								</Nav.Link>
							)
						)}

						<Nav.Link onClick={navigateToCart} >
							<Image src="images/cart.png" width="30" height="30" />
							{isChangingCart
								? (
									<Spinner animation="grow" variant="warning" size="sm" />
								)
								: (
									<Badge variant="warning">{itemsCount}</Badge>
								)
							}
							{' = '}
							{isChangingCart
								? (
									<Spinner animation="grow" variant="light" size="sm" />
								)
								: (
									<Badge variant="light">
										{formatAmount(itemsSum, currency)}
									</Badge>
								)
							}
						</Nav.Link>

						<Button
							variant="success"
							size="sm"
							onClick={toggleCurrency}
							className="font-weight-bold"
						>
							€ / $
						</Button>

						{!user
							? (
								<Nav.Link onClick={onClickLogin}>
									LogIn
								</Nav.Link>
							)
							: (
								<Nav.Link onClick={navigateToUser}>
									{user.name}
								</Nav.Link>
							)
						}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

Header.propTypes = {
	currency: PropTypes.oneOf([Currency.EUR, Currency.USD]).isRequired,
	toggleCurrency: PropTypes.func.isRequired,
	sum: PropTypes.number,
	navigateToCart: PropTypes.func.isRequired,
	navigateToUser: PropTypes.func.isRequired,
	isChangingCart: PropTypes.bool.isRequired,
	showMenuLinks: PropTypes.bool.isRequired,
	onClickLogin: PropTypes.func.isRequired,
	user: userType,
};

export default Header;
