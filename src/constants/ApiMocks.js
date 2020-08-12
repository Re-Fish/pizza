import MenuGroups from './MenuGroups';

const delay = 400;

const pizzaData = [
	{
		id: 1,
		title: 'Margherita',
		image: 'images/margherita.jpeg',
		info: 'Mozzarella, Tomatoes, Tomato Pizza Sauce',
		description: 'Delicious classic pizza Margarita on a thin dough with tomatoes and mozzarella cheese is prepared according to a traditional recipe.',
		measure: '410g',
		price: 5,
	},
	{
		id: 2,
		title: 'Carbonara',
		image: 'images/carbonara.jpeg',
		info: 'Bacon, Mozzarella, Cream Sauce, Parmesan Cheese',
		description: 'Absolute tastes consonance of 2 traditional Italian cheeses - parmesan and mozzarella. Thin slices of raw smoked bacon are poured with gentle cream sauce and evenly laid on thin dough. On top they are covered with a melted cheese layer which forms a blush crisp crust when baked.',
		measure: '445g',
		price: 5,
	},
	{
		id: 3,
		title: 'Pepperoni',
		image: 'images/pepperoni.jpeg',
		info: 'Champignon mushrooms, Mozzarella, Pepperoni, Tomato Pizza Sauce',
		description: 'Classic pizza on a thin dough with pepperoni according to a traditional Italian recipe. It has a slightly spicy taste, so it is suitable for lovers of piquant dishes.',
		measure: '420g',
		price: 5.5,
	},
	{
		id: 4,
		title: 'Diablo',
		image: 'images/diablo.jpeg',
		info: 'Bacon, Mozzarella, Pepperoni, Bulgarian Pepper, Pork, Shirache Sauce, Tomato Pizza Sauce, Dill, Jalapeño',
		description: 'Big nourishing and spicy pizza for lovers of piquant taste. As part of the filling there are pepperoni sausages, bacon, pork, as well as Bulgarian pepper and jalapeño pepper, which gives the dish a fiery taste.',
		measure: '680g',
		price: 7,
	},
	{
		id: 5,
		title: 'BBQ',
		image: 'images/bbq.jpeg',
		info: 'Sausages, Chicken, Mozzarella, BBQ Sauce, Tomato Pizza Sauce, Dill',
		description: 'Pizza with smoked sausages and chicken on melted mozarella cheese dripped with special BBQ sauce. No one can stand it.',
		measure: '499g',
		price: 9,
	},
	{
		id: 6,
		title: 'Seafood',
		image: 'images/seafood.jpeg',
		info: 'Mozzarella, Tomatoes, Snow Crab, Cream Sauce, Tiger Shrimp',
		description: 'The unique formulation of the traditional Italian dish is based on the most tender meat of tiger shrimp and snow crab. Pizza successfully combines the taste of marine delicacies, ripe tomatoes and gentle mozzarella.',
		measure: '485g',
		price: 9,
	},
	{
		id: 7,
		title: 'Hawaiian',
		image: 'images/hawaiian.jpeg',
		info: 'Pineapple, Chicken, Mozzarella, Cream sauce',
		description: 'Ripe sweet pineapple and tender chicken meat on a thin dough with crisp edges under a blush crust of baked cheese is a real celebration of taste. Delicate creamy sauce organically combines all the components and harmonizes them.',
		measure: '455g',
		price: 8,
	},
	{
		id: 8,
		title: '4 cheeses',
		image: 'images/4cheeses.jpeg',
		info: 'Mozzarella, Cream Pizza Sauce, Dor Blue Cheese, Parmesan Cheese, Cheddar Cheese',
		description: 'As a filling, our signature pizza sauce with a creamy taste is used, as well as several types of cheese: cheddar, parmesan, Dor Blue, mozzarella. It is prepared without meat, so it is suitable for vegetarians.',
		measure: '470g',
		price: 4,
	},
];

const drinksData = [
	{
		id: 9,
		title: 'Pepsi',
		image: 'images/pepsi.png',
		measure: '500ml',
		price: 1,
	},
	{
		id: 10,
		title: '7up',
		image: 'images/7up.png',
		measure: '500ml',
		price: 1,
	},
	{
		id: 11,
		title: 'Mirinda',
		image: 'images/mirinda.png',
		measure: '500ml',
		price: 1,
	},
	{
		id: 12,
		title: 'Aqua Minerale Still',
		image: 'images/aqua-still.png',
		measure: '500ml',
		price: 1,
	},
	{
		id: 13,
		title: 'Aqua Minerale Sparkling',
		image: 'images/aqua-spark.png',
		measure: '500ml',
		price: 1,
	},
];

const menuResponse = {
	[MenuGroups.PIZZA]: pizzaData,
	[MenuGroups.DRINKS]: drinksData,
};

const user = {
	id: 1,
	name: 'Roman',
	email: 'refish@tuta.io',
	orderHistory: [
		{
			date: '10/08/2020, 17:06:49',
			fullPrice: '17.5 €',
			cart: [{
				id: 3,
				title: 'Pepperoni',
				price: 5.5,
				quantity: 1,
			}, {
				id: 2,
				title: 'Carbonara',
				price: 5,
				quantity: 1,
			}, {
				id: 12,
				title: 'Aqua Minerale Sparkling',
				price: 1,
				quantity: 2,
			}],
			delivery: { name: 'Roman', phone: '+79876543210', addr: 'Vainera 17' },
		},
	],
};

export default {
	delay,
	menuResponse,
	user,
};
