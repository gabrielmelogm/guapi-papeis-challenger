import { MenuContent } from '../layout/MenuContent'
import { MobileMenu } from '../layout/MobileMenu'

export function Sidebar() {
	return (
		<>
			<div className="w-[65px] absolute left-0 h-screen bg-badge-light dark:bg-badge-dark flex flex-col items-center max-md:hidden">
				<MenuContent />
			</div>

			<MobileMenu />
		</>
	)
}
