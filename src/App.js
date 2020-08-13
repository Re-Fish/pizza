import React, {
	useState,
	useEffect,
	useReducer,
} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import { Currency, Routes } from './constants';
import reducer from './reducer';
import {
	loadMenu,
	addToCard,
	removeFromCart,
	orderSubmit,
	loginUser,
	logoutUser,
} from './service';
import {
	Header,
	MenuPage,
	OrderPage,
	LoginModal,
	UserPage,
} from './components';

import './App.css';

const initState = () => {
	let user;
	if (global.localStorage) {
		const userJson = global.localStorage.getItem('pizzaUser');
		if (userJson) {
			user = JSON.parse(userJson);
		}
	}
	return {
		currency: Currency.EUR,
		isLoadingMenu: false,
		isChangingCart: false,
		menu: {},
		cart: [],
		orderBeingSent: false,
		user,
		isAuthorizing: false,
		authError: null,
	};
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, undefined, initState);
	useEffect(() => {
		loadMenu(dispatch);
	}, []);
	const toggleCurrency = () => dispatch({ type: 'toggleCurrency' });
	const {
		currency,
		isLoadingMenu,
		cart,
		orderBeingSent,
	} = state;
	const [route, setRoute] = useState(Routes.MENU);
	const [showLogin, setShowLogin] = useState(false);

	const addItemToCart = (item) => addToCard(dispatch, item);
	const removeItemFromCart = (id) => removeFromCart(dispatch, { id });
	const handleSubmitOrder = (delivery) => {
		navigateToMenu();
		orderSubmit(dispatch, cart, currency, delivery);
	};
	const navigateToMenu = () => {
		setRoute(Routes.MENU);
	};
	const navigateToCart = () => {
		setRoute(Routes.CART);
	};
	const navigateToUser = () => {
		setRoute(Routes.USER);
	};
	const handleLogin = (credentials) => {
		loginUser(dispatch, credentials, () => setShowLogin(false));
	};
	const handleLogout = () => {
		navigateToMenu();
		logoutUser(dispatch);
	};

	const router = {
		[Routes.MENU]: <MenuPage {...{
			...state,
			addItemToCart,
			removeItemFromCart
		}} />,
		[Routes.CART]: <OrderPage {...{
			cart,
			currency,
			removeItemFromCart,
			navigateToMenu,
			onSubmitOrder: handleSubmitOrder,
			orderBeingSent,
		}} />,
		[Routes.USER]: <UserPage user={state.user} onLogout={handleLogout} />,
	};

	return (
		<Container id="home" fluid className="App">
			<Header {...{
				...state,
				toggleCurrency,
				navigateToCart,
				navigateToUser,
				navigateToMenu,
			}}
				showMenuLinks={route === Routes.MENU}
				onClickLogin={() => setShowLogin(true)}
			/>
			<LoginModal
				show={showLogin}
				onClose={() => setShowLogin(false)}
				onLogin={handleLogin}
				isAuthorizing={state.isAuthorizing}
				authError={state.authError}
			/>
			{isLoadingMenu && (
				<Spinner animation="border" variant="secondary" />
			)}
			{router[route]}
		</Container>
	);
};

export default App;
