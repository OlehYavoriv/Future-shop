import { FC } from 'react'

import Column from '@/ui/grid/Column/Column'
import Row from '@/ui/grid/Row/Row'

import styles from './HomeInformation.module.scss'

const HomeInformation: FC = () => {
	return (
		<Row isBorder={false}>
			<Column size={3} className={styles.container__customer}>
				<span className={styles.amount}>100k</span>
				<p className={styles.container__text}>Customers</p>
			</Column>
			<Column size={9} className={styles.container__info} isBorder={false}>
				<div className='p-10'>
					<span className={styles.container__info_title}>New collection</span>
					<p className={styles.container__text}>
						The red dress was inspired by a love of fashion and a fear of
						complacency. Our challenge was to create a dress
					</p>
				</div>
			</Column>
		</Row>
	)
}

export default HomeInformation
