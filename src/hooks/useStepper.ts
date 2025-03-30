import { createSignal } from 'solid-js';
import { Step } from '../types';

export default function useStepper(steps: Step[]) {
	const [index, setIndex] = createSignal<number>(0);

	const next = () => {
		console.log('next');
		setIndex((prev) =>
			prev + 1 === steps.length ? steps.length - 1 : prev + 1
		);
	};

	const back = () => {
		setIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
	};

	const step = () => {
		return steps[index()].component;
	};

	return { next, index, back, step, steps };
}
