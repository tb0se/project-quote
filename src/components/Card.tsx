import { Accessor } from 'solid-js';
import { Step } from '../types';
import Stepper from './Stepper';

type Props = {
	index: Accessor<number>;
	steps: Accessor<Step[]>;
};

export default function Card(props: Props) {
	return (
		<article class='bg-neutral-100 max-w-[700px] w-full md:h-[600px] border border-solid border-neutral-300 rounded-4xl flex flex-col p-8'>
			<Stepper index={props.index} steps={props.steps} />
			{props.steps()[props.index()].component('')}
		</article>
	);
}
