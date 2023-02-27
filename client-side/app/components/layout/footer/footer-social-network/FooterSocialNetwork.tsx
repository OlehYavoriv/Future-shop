import { FC } from 'react'

import SocialNetworkItem from './social-network-item/SocialNetworkItem'
import { social } from './social-network.data'

const FooterSocialNetwork: FC = () => {
	return (
		<div className='flex mt-[195px] 1xl:justify-center md:mt-2'>
			{social.map(item => (
				<SocialNetworkItem key={item.url} item={item} />
			))}
		</div>
	)
}

export default FooterSocialNetwork
