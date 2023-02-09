import { FC } from 'react'

import Layout from '@/layout/Layout'

import Loader from '@/ui/loader/Loader'

import { IProductsPage } from '@/../pages'

const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout
			title='Home'
			description='Discover the new Future collection online. The latest trends for women, men and children'
		>
			<Loader />
		</Layout>
	)
}

export default Home
