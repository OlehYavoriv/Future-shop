import { FC } from 'react'

import { ILocationLink } from './shop-location-item.interface'

interface IShopLocationItem {
	item: ILocationLink
}

const ShopLocationItem: FC<IShopLocationItem> = ({ item }) => {
	return (
		<div className='flex justify-between border-t-2 border-black py-10'>
			<p className='mr-32'>{item.city}</p>
			<p>{item.address}</p>
		</div>
	)
}

export default ShopLocationItem
