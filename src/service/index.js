import { ApiMocks } from '../constants';

const fakeApiCall = (dispatch, action, payload) => {
	dispatch({ type: `${action}Start` });
	setTimeout(
		() => {
			dispatch({
				type: `${action}Success`,
				payload,
			});
		},
		ApiMocks.delay
	);
};

const saveOrder = ({ cart, delivery }) => {
	if (global.localStorage) {
		const hist = global.localStorage.getItem('pizzaOrderHistory') || "[]";
		const { image, info, description, ...restCart } = cart;
		global.localStorage.setItem('pizzaOrderHistory', JSON.stringify([
			...JSON.parse(hist),
			{
				date: new Date(),
				cart: restCart,
				delivery,
			}
		]));
	}
};

const loadMenu = (dispatch) => {
	fakeApiCall(dispatch, 'loadMenu', ApiMocks.menuResponse);
};

const addToCard = async (dispatch, item) => {
	fakeApiCall(dispatch, 'addToCart', item);
};

const removeFromCart = (dispatch, item) => {
	fakeApiCall(dispatch, 'removeFromCart', item);
};

const orderSubmit = (dispatch, cart, delivery) => {
	saveOrder({ cart, delivery });
	fakeApiCall(dispatch, 'orderSubmit', {
		cart,
		delivery,
	});
};

export {
	loadMenu,
	addToCard,
	removeFromCart,
	orderSubmit,
};
