import { FC } from 'react'

import PartnersLogoItem from './partners-logo-item/PartnersLogoItem'
import { partners } from './partners-logo.data'

const PartnersLogo: FC = () => {
	return (
		<div className='flex items-center'>
			{partners.map(item => (
				<PartnersLogoItem key={item.id} item={item} />
			))}
		</div>
	)
}

export default PartnersLogo
