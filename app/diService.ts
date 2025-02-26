import {asClass, createContainer} from "awilix";
import {RandomNumberGenerator} from "./utils/randomNumberGenerator";
import {createMiddleware} from "@tanstack/start";

const container = createContainer<{
	scopedRandomNumberGenerator: RandomNumberGenerator;
	transientRandomNumberGenerator: RandomNumberGenerator;
	singletonRandomNumberGenerator: RandomNumberGenerator;
}>({
	strict: true,
}).register({
	scopedRandomNumberGenerator: asClass(RandomNumberGenerator, {lifetime: "SCOPED"}),
	transientRandomNumberGenerator: asClass(RandomNumberGenerator, {lifetime: "TRANSIENT"}),
	singletonRandomNumberGenerator: asClass(RandomNumberGenerator, {lifetime: "SINGLETON"})
})

export function getScopedDiService() {
	return container.createScope().cradle;
}

export type ScopedDiService = ReturnType<typeof getScopedDiService>;

export const diServiceMiddleWare = createMiddleware().server(({next}) => {
	const diServices = getScopedDiService();

	return next({
		context: {
			diServices,
		}
	})
})
