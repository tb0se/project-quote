import clsx from 'clsx';
import { JSX, mergeProps } from 'solid-js';

type Props = {
	type: 'submit' | 'button';
	style?: 'primary' | 'secondary';
	children: JSX.Element;
	size?: 'default' | 'small';
	onClick: () => void;
};

export default function Button(props: Props) {
	const merged = mergeProps({ size: 'default', style: 'primary' }, props);

	const btnClass = clsx({
		'bg-primary text-center text-neutral-100 rounded-[56px] shadow':
			props.style === 'primary',
		'bg-neutral-100 text-center text-primary border border-solid border-primary rounded-[56px] shadow':
			props.style === 'secondary',
		'w-32 md:w-40 h-12 md:h-16 text-size-6': merged.size === 'default',
		'w-26 md:w-32 md:h-12 text-size-7 p-3': merged.size === 'small',
	});

	return (
		<button type={merged.type} class={btnClass} onClick={props.onClick}>
			{merged.children}
		</button>
	);
}
