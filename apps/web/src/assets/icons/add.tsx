import * as React from 'react'
export const AddIcon = (props: any) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={23}
		height={23}
		fill="none"
		{...props}
		className="text-primary dark:text-icon-dark"
		role="graphics-symbol"
	>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M4.734 11.066h12.8M11.134 4.667v12.8"
		/>
	</svg>
)
