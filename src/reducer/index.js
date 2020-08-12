import { Currency } from '../constants';

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
		case 'orderSubmitSuccess':
			// todo save to local storage when logged in
			return {
				...state,
				orderBeingSent: false,
				cart: [],
			};
		default:
			throw new Error();
	}
};
