import React, {
	useState,
	useEffect,
	useReducer,
} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import { Currency, Routes } from './constants'
import reducer from './reducer';
import {
	loadMenu,
	addToCard,
	removeFromCart,
	orderSubmit,
	loginUser,
} from './service';
import {
	Header,
	MenuPage,
	OrderPage,
} from './components';
import LoginModal from './components/user/LoginModal';

import './App.css';

const initState = () => ({
	currency: Currency.EUR,
	isLoadingMenu: false,
	isChangingCart: false,
	menu: {},
	cart: [],
	orderBeingSent: false,
	isLoggedIn: false,
	isAuthorizing: false,
});

const App = () => {
	const [state, dispatch] = useReducer(reducer, undefined, initState);
	useEffect(() => {
		loadMenu(dispatch);
	}, []);
	const toggleCurrency = () => dispatch({ type: 'toggleCurrency' });
	const {
		isLoadingMenu,
		menu,
		currency,
		cart,
		isChangingCart,
		orderBeingSent,
	} = state;
	const [route, setRoute] = useState(Routes.MENU);
	const [showLogin, setShowLogin] = useState(false);

	const addItemToCart = (item) => addToCard(dispatch, item);
	const removeItemFromCart = (id) => removeFromCart(dispatch,{ id });
	const handleSubmitOrder = (delivery) => {
		orderSubmit(dispatch, cart, delivery);
	};
	const navigateToMenu = () => {
		setRoute(Routes.MENU);
	};
	const navigateToCart = () => {
		setRoute(Routes.CART);
	};
	const handleLogin = () => {
		loginUser();
	};

	const router = {
		[Routes.MENU]: <MenuPage {...{ ...state, addItemToCart, removeItemFromCart }} />,
		[Routes.CART]: <OrderPage {...{
			cart,
			currency,
			removeItemFromCart,
			navigateToMenu,
			onSubmitOrder: handleSubmitOrder,
			orderBeingSent,
		}} />,
		[Routes.USER]: null,
	};
	return (
		<Container id="home" fluid className="App">
			<Header
				currency={currency}
				toggleCurrency={toggleCurrency}
				cart={cart}
				goToCart={navigateToCart}
				isChangingCart={isChangingCart}
				showMenuLinks={route === Routes.MENU}
				onClickLogin={() => setShowLogin(true)}
				isLoggedIn={state.isLoggedIn}
			/>
			<LoginModal
				show={showLogin}
				onClose={() => setShowLogin(false)}
				onLogin={handleLogin}
				isAuthorizing={state.isAuthorizing}
			/>
			{isLoadingMenu && (
				<Spinner animation="border" variant="secondary" />
			)}
			{router[route]}
		</Container>
	);
};

export default App;
