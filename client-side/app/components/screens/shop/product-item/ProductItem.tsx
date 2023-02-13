import Image from 'next/image'
import { FC } from 'react'

import Column from '@/ui/grid/Column/Column'

import { IProduct } from '@/types/product.interface'

import { formatToCurrency } from '@/utils/format-to-currency'

import styles from './ProductItem.module.scss'

interface IProductItem {
	product: IProduct
	index: number
}

const ProductItem: FC<IProductItem> = ({ index, product }) => {
	return (
		<Column
			size={index === 0 ? 3 : index === 4 ? 3 : 2}
			className={styles.product__wrapper}
		>
			<div className={styles.product__container}>
				<div className={styles.product__image} style={{ height: 283 }}>
					<Image
						src={product.images[0]}
						alt={product.name}
						width={220}
						height={220}
					/>
				</div>
				<h2 className={styles.product__title}>{product.name}</h2>
				<div className={styles.product__price}>
					{formatToCurrency(product.price)}
				</div>
				<button className='btn-link'>Add to cart</button>
			</div>
		</Column>
	)
}

export default ProductItem
