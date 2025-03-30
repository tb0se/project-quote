import {
	createForm,
	email,
	minLength,
	required,
	SubmitHandler,
} from '@modular-forms/solid';
import InputField from '../components/InputField';

type ContactDetailsForm = {
	email: string;
	name: string;
	phoneNumber: string;
	companyName: string;
};

export default function ContactDetails() {
	const [loginForm, { Form, Field }] = createForm<ContactDetailsForm>();

	const handleSubmit: SubmitHandler<ContactDetailsForm> = () => {
		// TODO:
		console.log('', loginForm);
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
				<Field
					name='name'
					validate={[
						required('Please enter your name.'),
						minLength(2, 'Your name must have 2 characters or more.'),
					]}
				>
					{(field, props) => (
						<InputField {...props} id={field.name} type='text' label='Name' />
					)}
				</Field>
				<Field
					name='email'
					validate={[
						required('Please enter your email.'),
						email('The email address is badly formatted.'),
					]}
				>
					{(field, props) => (
						<InputField {...props} id={field.name} type='email' label='Email' />
					)}
				</Field>
				<Field
					name='phoneNumber'
					validate={[
						required('Please enter your phone number.'),
						minLength(2, 'Your phone number must have 2 characters or more.'),
					]}
				>
					{(field, props) => (
						<InputField
							{...props}
							id={field.name}
							type='tel'
							label='Phone Number'
						/>
					)}
				</Field>
				<Field name='companyName'>
					{(field, props) => (
						<InputField
							{...props}
							id={field.name}
							type='text'
							label='Company'
						/>
					)}
				</Field>
			</Form>
		</div>
	);
}
