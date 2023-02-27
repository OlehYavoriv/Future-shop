import Link from 'next/link'
import { FC } from 'react'
import { BiLogOut } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { RiShieldUserLine } from 'react-icons/ri'
import { ButtonToolbar, Dropdown } from 'rsuite'

import Column from '@/ui/grid/Column/Column'
import SquareButton from '@/ui/square-btn/SquareButton'

import { useAuth } from '@/hooks/useAuth'

import styles from './HeaderProfile.module.scss'

const HeaderProfile: FC = () => {
	const { isLoggedIn } = useAuth()
	return (
		<Column size={3} className='flex items-center'>
			{isLoggedIn ? (
				<>
					<SquareButton Icon={FiUser} />
					<ButtonToolbar className={styles.button_toolbar}>
						<Dropdown title='Alexander Lyashenk'>
							<div>
								<Dropdown.Item>
									<Link
										href='#account'
										className={styles.button_toolbar__dropdown_item}
									>
										<RiShieldUserLine className='mr-2' /> Account
									</Link>
								</Dropdown.Item>
								<hr className='my-2' />
								<Dropdown.Item>
									{' '}
									<Link
										href='#logout'
										className={styles.button_toolbar__dropdown_item}
									>
										<BiLogOut className='mr-2' />
										Logout
									</Link>
								</Dropdown.Item>
							</div>
						</Dropdown>
					</ButtonToolbar>
				</>
			) : (
				<Link href='/auth'>Sign In</Link>
			)}
		</Column>
	)
}

export default HeaderProfile
