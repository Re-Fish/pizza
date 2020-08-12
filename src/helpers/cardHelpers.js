import { Currency } from '../constants';

const eurToUsd = (amount) =>
	Number(amount * 1.17819);

const formatAmount = (amount, currency) =>
	currency === Currency.EUR
		? `${amount} €`
		: `${Math.round((eurToUsd(amount) + Number.EPSILON) * 100) / 100} $`

const getCartSum = (cart) => cart?.reduce((total, { quantity, price }) => total + (quantity * price), 0);

export {
	formatAmount,
	getCartSum,
};
