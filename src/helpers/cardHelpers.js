import { Currency, DELIVERY_FEE } from '../constants';

const eurToUsd = (amount) =>
	Number(amount * 1.17819);

const formatAmount = (amount, currency) =>
	currency === Currency.EUR
		? `${amount} €`
		: `${Math.round((eurToUsd(amount) + Number.EPSILON) * 100) / 100} $`

const getCartSum = (cart) => cart?.reduce((total, { quantity, price }) => total + (quantity * price), 0);

const getCartTotalFormatted = (cart, currency) => {
	const totalSum = getCartSum(cart) + DELIVERY_FEE;
	return formatAmount(totalSum, currency);
}

export {
	formatAmount,
	getCartSum,
	getCartTotalFormatted,
};
