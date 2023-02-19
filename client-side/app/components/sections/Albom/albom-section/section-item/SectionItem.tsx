import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './SectionItem.module.scss'
import { IAlbomLink } from './section-item.interface'

interface IAboutSectionItem {
	item: IAlbomLink
}

const AboutSectionItem: FC<IAboutSectionItem> = ({ item }) => {
	return (
		<Link href={`#Albom-${item.title}-${item.year}`}>
			<div className={styles.albom__item}>
				<Image
					src={item.image}
					width={200}
					height={250}
					alt='Albom'
					className={styles.image}
				/>
				<p className={styles.albom__number}>{item.id}</p>
				<h3 className={styles.albom__title}>{item.title}</h3>
				<div className={styles.albom__data}>
					<p>{item.year}</p>
					<p>{item.season}</p>
				</div>
			</div>
		</Link>
	)
}

export default AboutSectionItem
