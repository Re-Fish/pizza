import { ApiMocks } from '../constants';

const fakeApiCall = async (dispatch, action, payload) => {
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

const loadMenu = (dispatch) => {
	fakeApiCall(dispatch, 'loadMenu', ApiMocks.menuResponse);
};

const addToCard = async (dispatch, item) => {
	fakeApiCall(dispatch, 'addToCart', item);
};

const removeFromCart = (dispatch, item) => {
	fakeApiCall(dispatch, 'removeFromCart', item);
};

const orderSubmit = (dispatch, cart, currency, delivery) => {
	fakeApiCall(dispatch, 'orderSubmit', {
		cart,
		currency,
		delivery,
	});
};

const loginUser = (dispatch, credentials, closeLoginModal) => {
	const action = 'loginUser';
	dispatch({ type: `${action}Start` });
	setTimeout(
		() => {
			if (credentials.email === ApiMocks.user.email) {
				closeLoginModal();
				dispatch({
					type: `${action}Success`,
					payload: ApiMocks.user,
				});
			} else {
				dispatch({ type: `${action}Failed` });
			}
		},
		ApiMocks.delay
	);
};

const logoutUser = (dispatch) => {
	fakeApiCall(dispatch, 'logout');
}

export {
	loadMenu,
	addToCard,
	removeFromCart,
	orderSubmit,
	loginUser,
	logoutUser,
};
