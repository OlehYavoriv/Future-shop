import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

const Row: FC<PropsWithChildren<{ className?: string }>> = ({
	children,
	className
}) => {
	return (
		<div
			className={cn(
				'grid w-full grid-cols-12 border-b-2 border-solid border-black',
				className
			)}
		>
			{children}
		</div>
	)
}

export default Row
