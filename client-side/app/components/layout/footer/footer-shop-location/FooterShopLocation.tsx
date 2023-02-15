import { FC } from 'react'

import ShopLocationItem from './shop-location-item/ShopLocationItem'
import { location } from './shop-location.data'

const FooterShopLocation: FC = () => {
	return (
		<>
			{location.map(item => (
				<ShopLocationItem key={item.city} item={item} />
			))}
		</>
	)
}

export default FooterShopLocation
