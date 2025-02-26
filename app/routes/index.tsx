import {createFileRoute} from '@tanstack/react-router'
import {createServerFn} from "@tanstack/start";
import {diServiceMiddleWare} from "../diService";

export const Route = createFileRoute('/')({
	component: RouteComponent,
	loader: async () => await getNumbers()
})

export const getNumbers = createServerFn({method: 'GET'})
	.middleware([diServiceMiddleWare])
	.handler(
	async ({context}) => {
		const scopedNumber1 = context.diServices.scopedRandomNumberGenerator.randomNumber;
		const scopedNumber2 = context.diServices.scopedRandomNumberGenerator.randomNumber;
		const transientNumber1 = context.diServices.transientRandomNumberGenerator.randomNumber;
		const transientNumber2 = context.diServices.transientRandomNumberGenerator.randomNumber;
		const singletonNumber1 = context.diServices.singletonRandomNumberGenerator.randomNumber;
		const singletonNumber2 = context.diServices.singletonRandomNumberGenerator.randomNumber;

		return {
			scopedNumber1,
			scopedNumber2,
			transientNumber1,
			transientNumber2,
			singletonNumber1,
			singletonNumber2,
		}
	},
)

function RouteComponent() {
	const data = Route.useLoaderData()

	return (
		<>
			<div>scopedNumber1: {data.scopedNumber1}</div>
			<div>scopedNumber1: {data.scopedNumber1}</div>
			<div>transientNumber1: {data.transientNumber1}</div>
			<div>transientNumber2: {data.transientNumber2}</div>
			<div>singletonNumber1: {data.singletonNumber1}</div>
			<div>singletonNumber2: {data.singletonNumber2}</div>
		</>
	)
}
