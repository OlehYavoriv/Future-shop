import { FC } from 'react'
import { IconType } from 'react-icons'

import styles from './SquareButton.module.scss'

interface ISquareButton {
	Icon: IconType
	onClick?: () => void
	number?: number
}
const SquareButton: FC<ISquareButton> = ({ Icon, onClick, number }) => {
	return (
		<button onClick={onClick} className={styles.square__button}>
			{!!number && <span className={styles.badge}>{number}</span>}

			<Icon className={styles.icon} size={20} />
		</button>
	)
}

export default SquareButton
