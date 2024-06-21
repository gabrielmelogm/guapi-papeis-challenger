import { ReactNode } from 'react'

export function CaptionError({ children }: { children: ReactNode }) {
	return <span className="text-xs text-red-400">{children}</span>
}
