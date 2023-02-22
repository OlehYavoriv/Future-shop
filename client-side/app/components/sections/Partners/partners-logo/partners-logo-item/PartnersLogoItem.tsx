import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './PartnersLogoItem.module.scss'
import { IPartnersLink } from './partners-logo-item.interface'

interface IPartnersLogoItem {
	item: IPartnersLink
}

const PartnersLogoItem: FC<IPartnersLogoItem> = ({ item }) => {
	return (
		<div className={styles.container}>
			<Link
				href={item.url}
				target='_blank'
				rel='noopener noreferrer'
				className={styles.container__link}
			>
				<Image
					src={item.image}
					width={100}
					height={100}
					alt='Partners Icon'
					className={styles.container__img}
				/>

				<p className={styles.container__text}>Go to website</p>
			</Link>
		</div>
	)
}

export default PartnersLogoItem
