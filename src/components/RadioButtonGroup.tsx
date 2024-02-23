import { For } from 'solid-js';
import type { Accessor } from 'solid-js';
import RadioButton from './RadioButton';
import { Option } from '../types';

type ServiceButtonGroupProps = {
	name: string;
	options: Option[];
	selected: Accessor<string>;
	onChange: (value: string) => void;
};

export function RadioButtonGroup({
	name,
	options,
	selected,
	onChange,
}: ServiceButtonGroupProps) {
	return (
		<div class='grid grid-cols-1 md:grid-cols-2 w-full gap-2'>
			<For each={options}>
				{(option) => (
					<RadioButton
						id={option.id}
						label={option.label}
						value={option.value}
						name={name}
						selected={selected}
						onChange={onChange}
						icon={option?.icon ? option.icon : undefined}
					/>
				)}
			</For>
		</div>
	);
}
