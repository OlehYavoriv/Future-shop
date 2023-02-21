import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './AboutSection.module.scss'

const AboutSection: FC = () => {
	return (
		<div className={styles.section}>
			<h2 className='section__title'>About us</h2>
			<div className='mt-[80px]'>
				<Image
					src='/images/about-us.png'
					width={500}
					height={500}
					alt='About'
					className={styles.section__image}
				/>
			</div>

			<div className={styles.section__description}>
				<p className={styles.section__description_text}>
					The brands muted colour palettes come together to create versatile,
					trans-seasonal
				</p>
				<div className={styles.section__about_text}>
					<p className='text-sm'>
						Selecting seasonal collections, we carefully follow the latest
						trends of world fashion and select only the most current models for
						our customers. Our customers can be sure that all the most striking
						trends shining ...
					</p>
					<Link className={styles.btn_link} href='/about'>
						Learn more
					</Link>
				</div>
			</div>
		</div>
	)
}

export default AboutSection
