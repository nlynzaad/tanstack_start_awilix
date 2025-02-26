import {createAPIFileRoute} from "@tanstack/start/api";
import {json} from "@tanstack/start";

export const APIRoute = createAPIFileRoute('/api/randomNumber')({
	GET: async ({ request }) => {
		const scopedNumber1 = request.context.diServices.scopedRandomNumberGenerator.randomNumber;
		const scopedNumber2 = request.context.diServices.scopedRandomNumberGenerator.randomNumber;
		const transientNumber1 = request.context.diServices.transientRandomNumberGenerator.randomNumber;
		const transientNumber2 = request.context.diServices.transientRandomNumberGenerator.randomNumber;
		const singletonNumber1 = request.context.diServices.singletonRandomNumberGenerator.randomNumber;
		const singletonNumber2 = request.context.diServices.singletonRandomNumberGenerator.randomNumber;

		return json({
			scopedNumber1,
			scopedNumber2,
			transientNumber1,
			transientNumber2,
			singletonNumber1,
			singletonNumber2,
		})
	},
})
