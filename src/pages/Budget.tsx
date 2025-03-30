import { createSignal } from 'solid-js';
import { createForm, SubmitHandler } from '@modular-forms/solid';
import { RadioButtonGroup } from '../components/RadioButtonGroup';

type BudgetForm = {
	budget: string;
};

export default function Budget() {
	const [budgetForm, { Form }] = createForm<BudgetForm>();
	const [selectedOption, setSelectedOption] = createSignal<string>('');

	const handleSubmit: SubmitHandler<BudgetForm> = () => {
		// Runs on client
		console.log('', budgetForm);
	};

	const options = [
		{
			id: 'development',
			label: 'R5,000 - R10,000',
			value: 'development',
		},
		{
			id: 'webDesign',
			label: 'R10,000 - R20,000',
			value: 'webDesign',
		},
		{
			id: 'marketing',
			label: 'R20,000 - R50,000',
			value: 'marketing',
		},
		{ id: 'other', label: 'R50.000 +', value: 'other' },
	];

	return (
		<div class='w-full p-6 flex flex-col justify-center gap-y-4 flex-1'>
			<div class='flex flex-col gap-y-2'>
				<h3 class='text-neutral-800 text-size-3'>
					What’s your project budget?
				</h3>
				<p class='text-neutral-600 text-default'>
					Please select the project budget range you have in mind.
				</p>
			</div>

			<Form onSubmit={handleSubmit} class='flex flex-col gap-y-4'>
				<RadioButtonGroup
					name='service'
					options={options}
					selected={selectedOption}
					onChange={setSelectedOption}
				/>
				{/* <Field name='service'>
					{(field, props) => (
						<ServiceButton
							{...props}
							id='development'
							label='Development'
							value='development'
						/>
					)}
				</Field>

				<Field name='service'>
					{(field, props) => (
						<ServiceButton
							{...props}
							id='webDesign'
							label='Web Design'
							value='webDesign'
						/>
					)}
				</Field>

				<Field name='service'>
					{(field, props) => (
						<ServiceButton
							{...props}
							id='marketing'
							label='Marketing'
							value='marketing'
						/>
					)}
				</Field>

				<Field name='service'>
					{(field, props) => (
						<ServiceButton {...props} id='other' label='Other' value='other' />
					)}
				</Field> */}
			</Form>
		</div>
	);
}
