import Link from 'next/link'
import { FC } from 'react'

import SquareButton from '@/ui/square-btn/SquareButton'

import { ISocialLink } from './social-network-item.interface'

interface ISocialNetworkItem {
	item: ISocialLink
}

const SocialNetworkItem: FC<ISocialNetworkItem> = ({ item }) => {
	return (
		<Link href={item.url} className='mr-[16px]'>
			<SquareButton Icon={item.icon} />
		</Link>
	)
}

export default SocialNetworkItem
