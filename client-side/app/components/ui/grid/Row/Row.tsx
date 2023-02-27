import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

interface IRow {
	isBorder?: boolean
	className?: string
}

const Row: FC<PropsWithChildren<IRow>> = ({
	children,
	className,
	isBorder = true
}) => {
	return (
		<div
			className={cn(
				'grid w-full grid-cols-12',
				{
					'border-b-2 border-solid border-black': isBorder
				},
				className
			)}
		>
			{children}
		</div>
	)
}

export default Row
