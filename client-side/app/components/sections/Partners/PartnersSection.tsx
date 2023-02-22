import { FC } from 'react'
import Marquee from 'react-fast-marquee'

import styles from './PartnersSection.module.scss'
import PartnersLogo from './partners-logo/PartnersLogo'

const PartnersSection: FC = () => {
	return (
		<div className='py-[78px]'>
			<h2 className='section__title text-center'>Our Partners</h2>
			<p className={styles.text}>
				Our partners choose us because we are the most popular brand of 2022
			</p>

			<div>
				<Marquee gradient={false} pauseOnHover={true} speed={200}>
					<PartnersLogo />
				</Marquee>
			</div>
		</div>
	)
}

export default PartnersSection
