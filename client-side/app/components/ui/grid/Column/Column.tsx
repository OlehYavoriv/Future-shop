import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

interface IColumn {
	size: number
	isCenter?: boolean
	className?: string
	isPadding?: boolean
	isBorder?: boolean
}

const Column: FC<PropsWithChildren<IColumn>> = ({
	size,
	children,
	isCenter = true,
	className,
	isPadding = true,
	isBorder = true
}) => {
	return (
		<div
			style={{ gridColumn: `span ${size} / span ${size}` }}
			className={cn(
				`h-full flex items-center`,
				{
					'justify-center': isCenter,
					'p-3': isPadding,
					'border-r-2 border-solid border-black': isBorder
				},
				className
			)}
		>
			{children}
		</div>
	)
}

export default Column
