import PropTypes from 'prop-types';

import { Currency } from '../constants';

const item = {
	id: PropTypes.number,
	title: PropTypes.string,
	image: PropTypes.string,
	info: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.number,
};

export const menuItemType = PropTypes.shape(item);
export const cartItemType = PropTypes.shape({
	...item,
	quantity: PropTypes.number,
});
export const currencyType = PropTypes.oneOf([Currency.EUR, Currency.USD]);
