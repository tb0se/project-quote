import clsx from 'clsx';
import { JSX, Show, mergeProps } from 'solid-js';

type Props = {
	type: 'text' | 'email' | 'tel';
	label?: string;
	size?: 'default' | 'small';
	placeholder?: string;
} & JSX.InputHTMLAttributes<HTMLInputElement>;

export default function InputField(props: Props) {
	const merged = mergeProps({ size: 'default' }, props);

	const inputFieldClass = clsx({
		'flex flex-col gap-y-2 w-full': true,
		'max-w-72': merged.size === 'normal',
		'max-w-56': merged.size === 'small',
	});

	return (
		<div class={inputFieldClass}>
			<Show when={!!props.label}>
				<label class='text-neutral-800 text-[18px] font-medium ml-2'>
					{props.label}
				</label>
			</Show>

			<input
				type={props.type}
				placeholder={props.placeholder}
				class='bg-neutral-100 border border-solid border-neutral-300 text-neutral-600 text-[18px] rounded-4xl h-14 p-3'
			/>
		</div>
	);
}
