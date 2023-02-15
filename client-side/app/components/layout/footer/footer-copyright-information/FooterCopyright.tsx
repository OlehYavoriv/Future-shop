import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineCopyright } from 'react-icons/ai'

import Column from '@/ui/grid/Column/Column'
import Row from '@/ui/grid/Row/Row'

import styles from './FooterCopyright.module.scss'

const FooterCopyright: FC = () => {
	return (
		<Row className={styles.row}>
			<Column size={4} className={styles.padding}>
				<div className='flex items-center'>
					<AiOutlineCopyright className='mr-2' /> 2023 by
					<a
						href='https://github.com/OlehYavoriv'
						target='_blank'
						rel='noreferrer'
						className='ml-1 hover:text-primary'
					>
						Oleh Yavoriv
					</a>
				</div>
			</Column>
			<Column size={4} className={styles.padding}>
				<div>All rights reserved</div>
			</Column>
			<Column size={4} className={styles.padding}>
				<div>
					<Link href='#PrivacyPolicy' className='hover:text-primary'>
						Privacy policy
					</Link>
				</div>
			</Column>
		</Row>
	)
}

export default FooterCopyright
