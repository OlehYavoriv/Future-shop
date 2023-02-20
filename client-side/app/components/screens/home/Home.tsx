import Image from 'next/image'
import { FC } from 'react'

import AlbomSection from '@/components/sections/Albom/albom-section/AlbomSection'

import Layout from '@/layout/Layout'

import Column from '@/ui/grid/Column/Column'
import Row from '@/ui/grid/Row/Row'
import Wrapper from '@/ui/wrapper/Wrapper'

import styles from './Home.module.scss'
import HomeInformation from './home-information/HomeInformation'
import HotSale from './hot-sale/HotSale'
import { IProductsPage } from '@/../pages'

const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout
			title='Home'
			description='Discover the new Future collection online. The latest trends for women, men and children'
		>
			<Row className={styles.bg_gradient}>
				<Column size={7} isPadding={false}>
					<Image
						src='/images/hot-sale.png'
						alt='HotSale'
						width={833}
						height={727}
					/>
				</Column>
				<Column
					size={5}
					isPadding={false}
					isCenter={false}
					className='flex-col'
				>
					<HotSale />
					<HomeInformation />
				</Column>
			</Row>
			<Wrapper>
				<AlbomSection />
			</Wrapper>
		</Layout>
	)
}

export default Home
