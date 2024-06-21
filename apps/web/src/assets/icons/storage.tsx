import * as React from 'react'
export const StorageIcon = (props: any) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width={25}
		height={25}
		fill="none"
		className="text-icon-light dark:text-icon-dark"
		role="graphics-symbol"
	>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.75}
			d="M22 3.215H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1ZM5 8.215v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-11M11 12.215h4"
		/>
	</svg>
)
