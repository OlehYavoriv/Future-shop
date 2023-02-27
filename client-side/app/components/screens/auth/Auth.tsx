import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import Layout from '@/layout/Layout'

import { IEmailPassword } from '@/store/auth/auth.types'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import styles from './Auth.module.scss'

const Auth: FC = () => {
	const { isLoggedIn } = useAuth()

	const { push } = useRouter()

	useEffect(() => {
		if (isLoggedIn) push('/')
	}, [isLoggedIn])

	const [inputData, setInputDate] = useState<IEmailPassword>({
		email: '',
		password: ''
	})

	const { login, register } = useActions()

	return (
		<Layout title='Auth'>
			<div className={styles.container}>
				<h1 className={styles.container__title}>Auth</h1>
				<form>
					<input
						placeholder='Enter your email'
						onChange={e =>
							setInputDate({ ...inputData, email: e.target.value })
						}
						className={styles.inputs}
						value={inputData.email}
					/>
					<input
						placeholder='Enter your password'
						type='password'
						onChange={e =>
							setInputDate({ ...inputData, password: e.target.value })
						}
						className={styles.inputs}
						value={inputData.password}
					/>
					<div className='flex items-center justify-center'>
						<button onClick={() => login(inputData)} className='btn-link mr-5'>
							Login
						</button>
						<button onClick={() => register(inputData)} className='btn-link '>
							Register
						</button>
					</div>
				</form>
			</div>
		</Layout>
	)
}

export default Auth
