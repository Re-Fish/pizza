import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Currency, MenuGroups, MenuGroupNames } from '../../constants';
import { cartItemType } from '../propTypes';
import DetailsModal from './DetailsModal';
import MenuCard from './Card';


const MenuPage = ({
	currency,
	menu,
	isLoadingMenu,
	cart,
	addItemToCart,
	removeItemFromCart
}) => {
	const emptyDetails = {
		title: '',
		image: '',
		description: '',
		price: '',
	};
	const [showDetails, setShowDetails] = useState(false);
	const [itemDetails, setItemDetails] = useState(emptyDetails);

	const handleOpenDetails = (item) => {
		setItemDetails(item);
		setShowDetails(true);
	};
	const handleCloseDetails = () => {
		setShowDetails(false);
		setItemDetails(emptyDetails);
	}

	return (
		<>
			<DetailsModal
				show={showDetails}
				onClose={handleCloseDetails}
				addToCart={addItemToCart}
				{...{
					itemDetails,
					currency,
				}}
			/>

			<Container>
				{!isLoadingMenu && Object.keys(MenuGroups).map((menuGroup) =>
					<Row key={menuGroup} id={menuGroup} className="justify-content-center">
						<h1 className="text-secondary">{MenuGroupNames[menuGroup]}</h1>
						<Row className="justify-content-between text-success">
							{menu[menuGroup]?.map((item) =>
								<Col key={item.id} sm={12} md={6} lg={4} xl={3}>
									<MenuCard
										item={item}
										currency={currency}
										addToCart={addItemToCart}
										onOpenDetails={handleOpenDetails}
									/>
								</Col>
							)}
						</Row>
					</Row>
				)}
			</Container>
		</>
	);
};

MenuPage.propTypes = {
	currency: PropTypes.oneOf([Currency.EUR, Currency.USD]),
	menu: PropTypes.object,
	isLoadingMenu: PropTypes.bool.isRequired,
	cart: PropTypes.arrayOf(cartItemType),
	addItemToCart: PropTypes.func.isRequired,
	removeItemFromCart: PropTypes.func.isRequired,
};

export default MenuPage;
