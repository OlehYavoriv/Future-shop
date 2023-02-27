import React, { FC, useState } from 'react'

import HeaderButtons from '../buttons/HeaderButtons'
import HeaderLogo from '../logo/HeaderLogo'
import HeaderMenu from '../menu/HeaderMenu'
import HeaderProfile from '../profile/HeaderProfile'

import styles from './BurgerMenu.module.scss'

const BurgerMenu: FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleToggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<nav className={styles.nav}>
			<div className={styles.nav__wrapper}>
				<div className={styles.nav__container}>
					<div className={styles.button__container}>
						<button
							type='button'
							className={styles.button}
							aria-controls='mobile-menu'
							aria-expanded='false'
							onClick={handleToggleMenu}
						>
							<span className='sr-only'>Open main menu</span>
							<svg
								className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								aria-hidden='true'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
							<svg
								className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								aria-hidden='true'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div
				className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}
				id='mobile-menu'
			>
				<div className='px-2 pt-2 pb-3 border-l-2 border-black '>
					<HeaderLogo />
					<HeaderMenu />
					<HeaderButtons />
					<HeaderProfile />
				</div>
			</div>
		</nav>
	)
}

export default BurgerMenu
