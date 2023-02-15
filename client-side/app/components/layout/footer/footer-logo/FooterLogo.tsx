import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './FooterLogo.module.scss'

const FooterLogo: FC = () => {
	return (
		<Link href='/' className={styles.logo__link}>
			<Image
				src='/images/logo.png'
				width={100}
				height={100}
				alt='Future shop'
				className={styles.logo__img}
			/>
			<span className={styles.logo__text}>
				<span className={styles.logo__text_upper}>Future</span>
				<span className={styles.logo__text_lower}>Store</span>
			</span>
		</Link>
	)
}

export default FooterLogo
