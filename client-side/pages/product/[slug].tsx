import { NextPage } from 'next'

import { IProductDetails } from '@/types/product.interface'

import ProductDetails from '@/screens/product-details/ProductDetails'

const ProductDetailsPage: NextPage<IProductDetails> = ({ product }) => {
	return <ProductDetails product={product} />
}

export default ProductDetailsPage
