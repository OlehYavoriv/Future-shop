import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

interface IColumn {
	size: number
	isCenter?: boolean
	className?: string
}

const Column: FC<PropsWithChildren<IColumn>> = ({
	size,
	children,
	isCenter = true,
	className
}) => {
	return (
		<div
			style={{ gridColumn: `span ${size} / span ${size}` }}
			className={cn(
				`border-r-2 border-solid border-black h-full flex items-center p-3`,
				{
					'justify-center': isCenter
				},
				className
			)}
		>
			{children}
		</div>
	)
}

export default Column
