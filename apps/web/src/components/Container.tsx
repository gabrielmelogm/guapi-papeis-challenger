import { ReactNode } from 'react'

interface ContainerProps {
	children: ReactNode
	className?: string
}

export function Container({ children, className = '' }: ContainerProps) {
	return <div className={`w-full max-w-[1280px] ${className}`}>{children}</div>
}
