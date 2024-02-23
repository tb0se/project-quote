import { Show, createEffect, createSignal } from 'solid-js';
import type { Accessor } from 'solid-js';

type ServiceButtonProps = {
	id: string;
	name: string;
	label: string;
	value: string;
	selected: Accessor<string>;
	onChange: (value: string) => void;
	icon?: string;
};

export default function RadioButton({
	id,
	label,
	value,
	name,
	selected,
	onChange,
	icon,
}: ServiceButtonProps) {
	const [labelClass, setLabelClass] = createSignal<string>('');

	createEffect(() => {
		setLabelClass(
			selected() === value
				? 'border border-solid border-neutral-300 bg-neutral-100 h-28 w-full max-w-72 rounded-4xl flex items-center pl-8 gap-x-2 cursor-pointer border-primary border-2'
				: 'border border-solid border-neutral-300 bg-neutral-100 h-28 w-full max-w-72 rounded-4xl flex items-center pl-8 gap-x-2  cursor-pointer'
		);
	}, [selected]);

	return (
		<label
			for={id}
			class={labelClass()}
			onClick={() => onChange(value)}
			onKeyPress={() => {}}
		>
			<input
				class={icon ? 'appearance-none' : 'cursor-pointer'}
				type='radio'
				id={id}
				value={value}
				name={name}
				checked={selected() === value}
				onChange={() => {}}
			/>

			<Show when={!!icon}>
				<figure class='rounded-full bg-primary-2 h-16 w-16 flex items-center justify-center'>
					<img class='h-8 w-9' src={icon} alt={value} />
				</figure>
			</Show>

			<span class='text-neutral-800 text-default font-medium'>{label}</span>
		</label>
	);
}
