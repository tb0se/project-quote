import { SubmitHandler, createForm } from '@modular-forms/solid';
import { Icon } from '../assets';
import Button from './Button';
import InputField from './InputField';

type EmailForm = {
	email: string;
};

export default function Footer() {
	const [emailForm, { Form, Field, FieldArray }] = createForm<EmailForm>();

	const handleSubmit: SubmitHandler<EmailForm> = (values, event) => {
		// Runs on client
	};

	return (
		<footer class='flex flex-wrap gap-y-4 items-center px-5 md:px-10 py-6 md:h-48 w-full border border-solid border-neutral-400 justify-between'>
			<div class='flex flex-col gap-y-4'>
				<section class='flex items-center gap-x-3'>
					<img src={Icon} class='h-10 w-10' alt='logo' />
					<h2 class='text-size-3 md:text-size-2'>
						<span class='text-neutral-800'>project</span>{' '}
						<span class='text-primary'>quote</span>
					</h2>
				</section>
				<p>Copyright © 2024 Project Quote | All Rights Reserved</p>
			</div>

			<Form
				onSubmit={handleSubmit}
				class='flex items-center w-full md:w-fit gap-x-2'
			>
				<Field name='email'>
					{(field, props) => (
						<InputField
							{...props}
							type='email'
							placeholder='Enter your email'
							size='small'
						/>
					)}
				</Field>

				<Button type='submit' size='small' style='primary' onClick={() => {}}>
					Submit
				</Button>
			</Form>
		</footer>
	);
}
