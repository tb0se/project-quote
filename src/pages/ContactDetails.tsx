import { createForm, SubmitHandler } from '@modular-forms/solid';
import InputField from '../components/InputField';

type ContactDetailsForm = {
	email: string;
	name: string;
	phoneNumber: string;
	companyName: string;
};

export default function ContactDetails() {
	const [loginForm, { Form, Field, FieldArray }] =
		createForm<ContactDetailsForm>();

	const handleSubmit: SubmitHandler<ContactDetailsForm> = (values, event) => {
		// Runs on client
	};

	return (
		<div class='w-full p-6 flex flex-col justify-center gap-y-4 flex-1'>
			<div class='flex flex-col gap-y-2'>
				<h3 class='text-neutral-800 text-size-3'>Contact details</h3>
				<p class='text-neutral-600 text-default'>
					Please fill in your contact details
				</p>
			</div>

			<Form
				onSubmit={handleSubmit}
				class='grid grid-cols-1 md:grid-cols-2 gap-4'
			>
				<Field name='name'>
					{(field, props) => <InputField {...props} type='text' label='Name' />}
				</Field>
				<Field name='email'>
					{(field, props) => (
						<InputField {...props} type='email' label='Email' />
					)}
				</Field>
				<Field name='phoneNumber'>
					{(field, props) => (
						<InputField {...props} type='tel' label='Phone Number' />
					)}
				</Field>
				<Field name='companyName'>
					{(field, props) => (
						<InputField {...props} type='text' label='Company' />
					)}
				</Field>
			</Form>
		</div>
	);
}
