import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { RiShoppingBag3Line } from 'react-icons/ri'

import SquareButton from '@/ui/square-btn/SquareButton'

import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'

import { formatToCurrency } from '@/utils/format-to-currency'

import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import { PaymentService } from '@/services/PaymentService'

const Cart: FC = () => {
	const [ref, isShow, setIsShow] = useOutside(false)

	const { cart, total } = useCart()

	const { push } = useRouter()

	const { mutate } = useMutation(
		['create payment'],
		() => PaymentService.createPayment(total),
		{
			onSuccess(data) {
				push(data.confirmation.confirmation_url)
			}
		}
	)

	return (
		<div ref={ref}>
			<SquareButton
				Icon={RiShoppingBag3Line}
				onClick={() => {
					setIsShow(!isShow)
				}}
				number={cart.length}
			/>

			<div
				className={cn(
					'absolute top-[6.8rem] overflow-y-scroll max-h-[40rem] w-80 left-0 bg-cod-gray px-5 py-3 text-sm z-10 menu',
					isShow ? 'open-menu' : 'close-menu'
				)}
			>
				<div className=' text-center text-white font-medium mb-5 text-lg'>
					My cart
				</div>

				<div className={styles.cart}>
					{cart.length ? (
						cart.map(item => <CartItem item={item} key={item.id} />)
					) : (
						<div>Cart is empty!</div>
					)}
				</div>

				<div className={styles.footer}>
					<div>Total:</div>
					<div>{formatToCurrency(total)}</div>
				</div>
				<div className='text-center'>
					<button onClick={() => mutate()} className='btn-link mt-5 mb-2'>
						Payment
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
