import { Currency } from '../constants';
import { getCartTotalFormatted } from '../helpers/cardHelpers';

const saveOrderInBrowser = ({ cart, currency }) => {
	if (global.localStorage) {
		const userJson = global.localStorage.getItem('pizzaUser');
		if (userJson) {
			const newOrder = {
				date: new Date().toLocaleString(),
				fullPrice: getCartTotalFormatted(cart, currency),
				cart: cart.map(({ image, info, description, ...restCart }) => restCart),
			};
			const user = JSON.parse(userJson);
			if (!user.orderHistory.find(({ date }) => date === newOrder.date)) {
				user.orderHistory.push(newOrder);
			}
			global.localStorage.setItem('pizzaUser', JSON.stringify(user));
			return user;
		}
	}
	return null;
};

const saveUserInBrowser = (user) => {
	if (global.localStorage) {
		global.localStorage.setItem('pizzaUser', JSON.stringify(user));
	}
};

const removeUserFromBrowser = () => {
	if (global.localStorage) {
		global.localStorage.removeItem('pizzaUser');
	}
};

export default (state, action) => {
	switch (action.type) {
		case 'loadMenuStart':
			return {
				...state,
				isLoadingMenu: true,
			};
		case 'loadMenuSuccess':
			return {
				...state,
				isLoadingMenu: false,
				menu: action.payload,
			};
		case 'toggleCurrency':
			return {
				...state,
				currency: state.currency === Currency.EUR
					? Currency.USD
					: Currency.EUR,
			};
		case 'addToCartStart':
		case 'removeFromCartStart':
			return {
				...state,
				isChangingCart: true,
			};
		case 'addToCartSuccess':
			if (state.cart.some(({ id }) => id === action.payload.id)) {
				return {
					...state,
					isChangingCart: false,
					cart: state.cart.map((item) => {
						if (item.id === action.payload.id) {
							return { ...item, quantity: item.quantity + 1 };
						}
						return item;
					})
				};
			}
			return {
				...state,
				isChangingCart: false,
				cart: [...state.cart, { ...action.payload, quantity: 1 }],
			};
		case 'removeFromCartSuccess':
			return {
				...state,
				isChangingCart: false,
				cart: state.cart.filter(({ id }) => id !== action.payload.id),
			};
		case 'orderSubmitStart':
			return {
				...state,
				orderBeingSent: true,
			};
		case 'orderSubmitSuccess': {
			let user;
			if (state.user) {
				user = saveOrderInBrowser({
					cart: action.payload.cart,
					currency: action.payload.currency,
				});
			}
			return {
				...state,
				user,
				orderBeingSent: false,
				cart: [],
			};
		}
		case 'loginUserStart':
			return {
				...state,
				isAuthorizing: true,
				authError: null,
			};
		case 'loginUserSuccess':
			saveUserInBrowser(action.payload);
			return {
				...state,
				isAuthorizing: false,
				user: action.payload,
			};
		case 'loginUserFailed':
			return {
				...state,
				isAuthorizing: false,
				authError: 'Login Failed',
			};
		case 'logoutStart':
			return {
				...state,
				isAuthorizing: true,
			};
		case 'logoutSuccess':
			removeUserFromBrowser();
			return {
				...state,
				isAuthorizing: false,
				user: null,
			};
		default:
			throw new Error();
	}
};
