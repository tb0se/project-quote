import { CheckIcon } from '../assets';
import Button from '../components/Button';

export default function Submit() {
	return (
		<div class='w-full p-6 flex flex-col justify-center items-center gap-y-4 flex-1'>
			<figure class='h-40'>
				<img src={CheckIcon} alt='success' />
			</figure>
			<div class='flex flex-col gap-y-2'>
				<h3 class='text-neutral-800 text-size-3'>Submit your quote request</h3>
				<p class='text-neutral-600 text-default'>
					Please review all the information you previously typed in the past
					steps, and if all is okay, submit your message to receive a project
					quote in 24 - 48 hours.
				</p>
			</div>

			<div>
				<Button type='button' size='default' style='primary' onClick={() => {}}>
					Submit
				</Button>
			</div>
		</div>
	);
}
