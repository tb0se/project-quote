import { Icon } from '../assets';

export default function Header() {
	return (
		<header class='w-full h-32 flex items-center px-8 gap-x-3 bg-neutral-100 shadow'>
			<img src={Icon} class='h-10 w-10' alt='logo' />
			<h1 class='text-size-2 md:text-size-1'>
				<span class='text-neutral-800'>project</span>{' '}
				<span class='text-primary'>quote</span>
			</h1>
		</header>
	);
}
