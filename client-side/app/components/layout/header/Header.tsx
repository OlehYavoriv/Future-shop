import { FC } from 'react'

import Row from '@/ui/grid/Row/Row'

import styles from './Header.module.scss'
import BurgerMenu from './burger-menu/BurgerMenu'
import HeaderButtons from './buttons/HeaderButtons'
import HeaderLogo from './logo/HeaderLogo'
import HeaderMenu from './menu/HeaderMenu'
import HeaderProfile from './profile/HeaderProfile'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Row className='3xl:hidden'>
				<HeaderLogo />
				<HeaderMenu />
				<HeaderButtons />
				<HeaderProfile />
			</Row>
			<BurgerMenu />
		</header>
	)
}

export default Header
