import { FC } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

import SquareButton from '@/ui/square-btn/SquareButton'

import styles from './Footer.module.scss'
import FooterCopyright from './footer-copyright-information/FooterCopyright'
import FooterLogo from './footer-logo/FooterLogo'
import FooterShopLocation from './footer-shop-location/FooterShopLocation'
import FooterSocialNetwork from './footer-social-network/FooterSocialNetwork'

const Footer: FC = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__wrapper}>
				<div className={styles.footer__top_container}>
					<FooterLogo />
					<SquareButton Icon={AiOutlineArrowUp} onClick={() => scrollToTop()} />
				</div>
				<div className={styles.footer__main_container}>
					<div className='pr-[2rem]'>
						<div className='md:hidden'>
							<h4 className={styles.footer__title}>
								This is where your dreams come true, we do amazing!
							</h4>
							<div className='circle'>
								<p className={styles.circle__text}>Subscribe to the news</p>
							</div>
						</div>

						<FooterSocialNetwork />
					</div>
					<div className={styles.footer__location_container}>
						<div className='md:hidden'>
							<p className='mb-3'>
								<a href='mailto:Future@gmail.com'>Future@gmail.com</a>
							</p>
							<p className='mb-14'>
								<a href='tel:02156267635'>021 56 267 635</a>
							</p>
						</div>

						<FooterShopLocation />
					</div>
				</div>
			</div>
			<FooterCopyright />
		</footer>
	)
}

export default Footer
