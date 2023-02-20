import { FC, PropsWithChildren } from 'react'

import styles from './Wrapper.module.scss'

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<div
				className={styles.wrapper__inside_box}
				style={{
					backgroundBlendMode: 'multiply',
					backgroundImage: 'url(/images/texture.png)'
				}}
			>
				{children}
			</div>
		</div>
	)
}

export default Wrapper
