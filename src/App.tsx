import { Show, createSignal } from 'solid-js';
import Button from './components/Button';
import Card from './components/Card';
import ContactDetails from './pages/ContactDetails';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './pages/Services';
import Budget from './pages/Budget';
import { Step } from './types';
import Submit from './pages/Submit';

function App() {
	const [steps, _] = createSignal<Step[]>([
		{
			title: 'Contact details',
			subTitle: 'Please fill in your contact details',
			component: ContactDetails,
		},
		{
			title: 'Services',
			subTitle: 'Please select which service you are interested in.',
			component: Services,
		},
		{
			title: "What's your project budget?",
			subTitle: 'Please select the project budget range you have in mind.',
			component: Budget,
		},
		{
			title: 'Submit your quote request',
			subTitle:
				'Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.',
			component: Submit,
		},
	]);

	const [index, setIndex] = createSignal<number>(0);

	const goNext = () => {
		setIndex((prev) => (prev + 1 === steps().length ? prev : prev + 1));
	};

	const goBack = () => {
		setIndex((prev) => (prev - 1 === 0 ? 0 : prev - 1));
	};

	return (
		<div class='flex flex-col items-center bg-neutral-200 w-full min-h-screen'>
			<Header />

			<main class='flex flex-col items-center gap-y-6 w-full flex-1 my-8'>
				<section class='flex flex-col gap-y-2 items-center max-w-[550px] w-full'>
					<h1 class='text-size-3 text-neutral-800'>Get a project quote</h1>
					<p class='text-neutral-600 text-default text-center'>
						Please fill the form below to receive a quote for your project. Feel
						free to add as much detail as needed.
					</p>
				</section>

				<Card index={index} steps={steps} />
				<div
					class={`max-w-[550px] w-full flex p-5 md:p-0 ${
						index() === 0 ? 'justify-end' : 'justify-between'
					}`}
				>
					<Show when={index() > 0}>
						<Button type='button' onClick={goBack} style='secondary'>
							Previous
						</Button>
					</Show>

					<Show when={index() < steps().length - 1}>
						<Button type='submit' onClick={goNext} style='primary'>
							Next
						</Button>
					</Show>
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default App;
