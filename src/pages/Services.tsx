import { createSignal } from 'solid-js';
import { createForm, SubmitHandler } from '@modular-forms/solid';
import { RadioButtonGroup } from '../components/RadioButtonGroup';
import { DevIcon, MarketingIcon, OtherIcon, WebIcon } from '../assets';

type ContactDetailsForm = {
	service: string;
};

export default function Services() {
	const [loginForm, { Form, Field }] = createForm<ContactDetailsForm>();
	const [selectedOption, setSelectedOption] = createSignal<string>('');

	const handleSubmit: SubmitHandler<ContactDetailsForm> = (values, event) => {
		// Runs on client
	};

	const options = [
		{
			id: 'development',
			label: 'Development',
			value: 'development',
			icon: DevIcon,
		},
		{ id: 'webDesign', label: 'Web Design', value: 'webDesign', icon: WebIcon },
		{
			id: 'marketing',
			label: 'Marketing',
			value: 'marketing',
			icon: MarketingIcon,
		},
		{ id: 'other', label: 'Other', value: 'other', icon: OtherIcon },
	];

	return (
		<div class='w-full p-6 flex flex-col justify-center gap-y-4 flex-1'>
			<div class='flex flex-col gap-y-2'>
				<h3 class='text-neutral-800 text-size-3'>Services</h3>
				<p class='text-neutral-600 text-default'>
					Please select which service you are interested in.
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
