import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { Currency, MenuGroups, MenuGroupNames } from '../../constants';
import { formatAmount, getCartSum } from '../../helpers/cardHelpers';

const Header = ({
	currency,
	cart,
	toggleCurrency,
    onLogin,
	goToCart,
	isChangingCart,
	showMenuLinks,
    isLoggedIn,
}) => {
	const itemsCount = cart?.reduce((total, { quantity }) => total + quantity, 0);
	const itemsSum = getCartSum(cart);
	return (
		<>
			<Jumbotron fluid style={{ background: 'tomato', margin: '0' }}>
				<img alt="pizza-logo" src="images/pizza.png" className='App-logo' />
				<h1 className="display-4">Pizza Shop</h1>
				<p className="lead">* Easy order * Fast delivery * Tasty meal *</p>
			</Jumbotron>

			<Navbar style={{ background: 'tomato' }} variant="dark" sticky="top" expand="lg">
				<Container fluid>

					<Navbar.Brand href="#home" className="font-weight-bold">
						<Image alt="pizza-logo" src="images/pizza.png" width="30" height="30" className="d-inline-block align-top" />
						{' '}
						Pizza Shop
					</Navbar.Brand>

					<Navbar.Text className="mr-auto">
						City and phone number
					</Navbar.Text>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
						{showMenuLinks && (
							<Nav className="font-weight-bold text-uppercase">
								{Object.keys(MenuGroups).map((menuGroup) =>
									<Nav.Link href={`#${menuGroup}`} key={menuGroup}>
										{MenuGroupNames[menuGroup]}
									</Nav.Link>
								)}
							</Nav>
						)}

						<Nav className="font-weight-bold">
							<Nav.Link onClick={goToCart} >
								<Image src="images/cart.png" width="30" height="30" />
								{
									isChangingCart
										? (
											<Spinner animation="border" variant="secondary" />
										)
										: (
											<>
												<Badge variant="warning">{itemsCount || 0}</Badge>
												{' = '}
												<Badge variant="light">
													{formatAmount(itemsSum, currency)}
												</Badge>
											</>
										)
								}
							</Nav.Link>
							<Button
								variant="success"
								style={{ width: "4rem" }}
								onClick={toggleCurrency}
								className="font-weight-bold"
							>
								{currency === Currency.EUR ? '€' : '$'}
							</Button>
							<Nav.Link onClick={onLogin} >
								LogIn
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>

				</Container>
			</Navbar>
		</>
	);
};

Header.propTypes = {
	currency: PropTypes.oneOf([Currency.EUR, Currency.USD]).isRequired,
	toggleCurrency: PropTypes.func.isRequired,
    sum: PropTypes.number,
    onLogin: PropTypes.func.isRequired,
	goToCart: PropTypes.func.isRequired,
	isChangingCart: PropTypes.bool.isRequired,
	showMenuLinks: PropTypes.bool.isRequired,
};

export default Header;
