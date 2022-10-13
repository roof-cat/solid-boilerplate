import type { RouteDataFunc } from 'solid-app-router'
import { createResource } from 'solid-js'

async function fetchName(): Promise<string> {
	return await new Promise((resolve) => setTimeout(resolve, 1000, 'Solid'))
}

const AboutData: RouteDataFunc = () => {
	const [data] = createResource(fetchName)

	return data
}

export default AboutData
