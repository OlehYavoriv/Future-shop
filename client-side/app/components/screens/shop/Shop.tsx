import { FC } from 'react'

import Layout from '@/layout/Layout'

import Row from '@/ui/grid/Row/Row'

import styles from './Shop.module.scss'
import ProductItem from './product-item/ProductItem'
import { IProductsPage } from '@/../pages'

const Shop: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout title='Shop' description='Catalog clothing and accessories'>
			<Row className={styles.row}>
				{products.map((product, index) => (
					<ProductItem key={product.id} product={product} index={index} />
				))}
			</Row>
		</Layout>
	)
}

export default Shop
