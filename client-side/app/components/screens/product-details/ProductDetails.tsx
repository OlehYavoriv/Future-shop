import { FC } from 'react'

import Layout from '@/layout/Layout'

import { IProductDetails } from '@/types/product.interface'

const ProductDetails: FC<IProductDetails> = ({ product }) => {
	return (
		<Layout title={product.name} description={product.description}></Layout>
	)
}

export default ProductDetails
