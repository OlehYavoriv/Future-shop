import { FC } from 'react'
import { FiBell, FiSearch } from 'react-icons/fi'

import Column from '@/ui/grid/Column/Column'
import SquareButton from '@/ui/square-btn/SquareButton'

import Cart from './cart/Cart'

const HeaderButtons: FC = () => {
	return (
		<Column size={2} className='gap-5'>
			<SquareButton Icon={FiSearch} onClick={() => {}} />
			<SquareButton Icon={FiBell} onClick={() => {}} />
			<Cart />
		</Column>
	)
}

export default HeaderButtons
