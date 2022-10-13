import { lazy, Suspense } from 'solid-js'
import type { RouteDefinition } from 'solid-app-router'

import Home from './pages/home'
import AboutData from './pages/about.data'

const suspended = (Page) => (props) =>
	(
		<Suspense fallback="">
			<Page {...props} />
		</Suspense>
	)

export const routes: RouteDefinition[] = [
	{
		path: '/',
		component: suspended(Home),
	},
	{
		path: '/about',
		component: suspended(lazy(async () => await import('./pages/about'))),
		data: AboutData,
	},
	{
		path: '**',
		component: suspended(lazy(async () => await import('./errors/404'))),
	},
]
