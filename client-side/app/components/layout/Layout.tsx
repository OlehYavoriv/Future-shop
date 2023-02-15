import { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import Header from './header/Header'
import Meta from './meta/Meta'
import { ISeo } from './meta/meta.interface'
import Footer from './footer/Footer'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<div className={styles.layout}>
				<main>
					<Header />
					<section className={styles.content}>{children}</section>
					<Footer/>
				</main>
			</div>
		</>
	)
}

export default Layout
