import * as React from 'react'

export const FileIcon = (props: any) => (
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
			strokeWidth={1.7}
			d="M2.864 6.278h4M2.864 10.278h4M2.864 14.278h4M2.864 18.278h4M18.864 2.278h-12a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2ZM10.364 8.278h5M10.364 12.278h6.5M10.364 16.278h4.5"
		/>
	</svg>
)
