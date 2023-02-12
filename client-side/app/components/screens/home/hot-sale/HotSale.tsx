import { FC } from 'react'

import { formatToCurrency } from '@/utils/format-to-currency'

import styles from './HotSale.module.scss'

const HotSale: FC = () => {
	return (
		<div className={styles.sale__container}>
			<span className={styles.sale__upper_text}>Hot Sales</span>
			<h1 className={styles.sale__title}>
				A red dress will brighten up your evening
			</h1>
			<div className={styles.d_flex}>
				<div>
					<span className={styles.sale__new_price}>
						{formatToCurrency(195)}
					</span>
					<span className={styles.sale__old_price}>
						{formatToCurrency(295)}
					</span>
				</div>
				<button className={styles.buy__btn}>Buy now</button>
			</div>
		</div>
	)
}

export default HotSale
