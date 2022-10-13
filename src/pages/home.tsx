import { createSignal, JSX } from 'solid-js'
import IconButton from '@suid/material/IconButton'

export default function Home(): JSX.Element {
	const [count, setCount] = createSignal(0)

	return (
		<section class="bg-gray-100 text-gray-700 p-8">
			<h1 class="text-2xl font-bold">Home</h1>
			<p class="mt-4">This is the home page.</p>

			<div class="flex items-center space-x-2">
				<IconButton class="h-10 w-10" onClick={() => setCount(count() - 1)}>
					-
				</IconButton>

				<output class="p-10px">Count: {count}</output>

				<IconButton class="h-10 w-10" onClick={() => setCount(count() + 1)}>
					+
				</IconButton>
			</div>
		</section>
	)
}
