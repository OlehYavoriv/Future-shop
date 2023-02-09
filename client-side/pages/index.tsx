import { GetStaticProps, NextPage } from 'next'

import { IProduct } from '@/types/product.interface'

import Home from '@/screens/home/Home'

export interface IProductsPage {
	products: IProduct[]
}

const HomePage: NextPage<IProductsPage> = ({ products }) => {
	return <Home products={products} />
}

export default HomePage
