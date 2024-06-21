import * as React from 'react'
export const HomeIcon = (props: any) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={25}
		height={25}
		fill="none"
		{...props}
		className="text-icon-light dark:text-icon-dark"
		role="graphics-symbol"
	>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.75}
			d="m4 9.124 9-7 9 7v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-11Z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.75}
			d="M10 22.124v-10h6v10"
		/>
	</svg>
)
