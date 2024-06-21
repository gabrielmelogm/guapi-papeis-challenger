import * as React from 'react'
export const MenuIcon = (props: any) => (
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
			d="M4.5 12.596h16M4.5 6.596h16M4.5 18.596h16"
		/>
	</svg>
)
