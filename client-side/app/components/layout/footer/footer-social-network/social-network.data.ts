import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import { TbBrandTelegram } from 'react-icons/tb'

import { ISocialLink } from './social-network-item/social-network-item.interface'

export const social: ISocialLink[] = [
	{
		url: '#Instagram',
		icon: FiInstagram
	},
	{
		url: '#Facebook',
		icon: FiFacebook
	},
	{
		url: '#Telegram',
		icon: TbBrandTelegram
	},
	{
		url: '#Twitter',
		icon: FiTwitter
	}
]
