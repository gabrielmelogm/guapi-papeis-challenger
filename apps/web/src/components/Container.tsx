import { ReactNode } from 'react'

interface ContainerProps {
	children: ReactNode
	className?: string
}

export function Container({ children, className = '' }: ContainerProps) {
	return (
		<div className={`w-full max-w-[1755px] m-2 ${className}`}>{children}</div>
	)
}
