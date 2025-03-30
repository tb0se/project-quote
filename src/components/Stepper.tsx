import {
	Accessor,
	For,
	Match,
	Show,
	Switch,
	createEffect,
	createSignal,
} from 'solid-js';
import { Step } from '../types';

type Props = {
	steps: Accessor<Step[]>;
	index: Accessor<number>;
};

export default function Stepper(props: Props) {
	const fillBar = (
		currentIndex: Accessor<number>,
		currentStepIndex: Accessor<number>
	) => {
		if (currentIndex() < currentStepIndex()) {
			return 'width: 100%';
		}

		if (currentIndex() === currentStepIndex()) {
			return 'width: 50%';
		}

		return '';
	};

	const [isMobile, setIsMobile] = createSignal<boolean>(false);
	const query = 'only screen and (max-width : 768px)';

	const getMatches = (query: string): boolean => {
		return window.matchMedia(query).matches;
	};

	function handleChange() {
		setIsMobile(getMatches(query));
	}

	createEffect(() => {
		const matchMedia = window.matchMedia(query);

		if (matchMedia.addListener) {
			matchMedia.addListener(handleChange);
		} else {
			matchMedia.addEventListener('change', handleChange);
		}

		return () => {
			if (matchMedia.removeListener) {
				matchMedia.removeListener(handleChange);
			} else {
				matchMedia.removeEventListener('change', handleChange);
			}
		};
	});

	return (
		<header class='flex space-x-1.5 w-full justify-center items-center border-b border-solid border-neutral-400 h-20'>
			<Switch>
				<Match when={!isMobile()}>
					<For each={props.steps()}>
						{(_item, index) => {
							return (
								<>
									<p class='rounded-full bg-primary text-center text-neutral-100 p-1 h-8 w-8'>
										{index() + 1}
									</p>
									<Show when={index() < props.steps().length - 1}>
										<div class='bg-neutral-300 h-[6px] w-28 rounded-[40px] relative'>
											<div
												class='bg-primary h-[6px] rounded-[40px] absolute'
												style={fillBar(index, props.index)}
											/>
										</div>
									</Show>
								</>
							);
						}}
					</For>
				</Match>
				<Match when={isMobile}>
					<p class='text-neutral-800 text-size-2'>{props.index() + 1}</p>
				</Match>
			</Switch>
		</header>
	);
}
