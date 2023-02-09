import { FC } from 'react'
import { FiBell, FiSearch } from 'react-icons/fi'
import { RiShoppingBag3Line } from 'react-icons/ri'

import Column from '@/ui/grid/Column/Column'
import SquareButton from '@/ui/square-btn/SquareButton'

const HeaderButtons: FC = () => {
	return (
		<Column size={2} className='gap-5'>
			<SquareButton Icon={FiSearch} onClick={() => {}} />
			<SquareButton Icon={FiBell} onClick={() => {}} />
			<SquareButton Icon={RiShoppingBag3Line} onClick={() => {}} number={5} />
		</Column>
	)
}

export default HeaderButtons
