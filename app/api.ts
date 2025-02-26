import {defaultAPIFileRouteHandler} from "@tanstack/start/api";
import type {StartAPIHandlerCallback} from '@tanstack/start/api';
import {eventHandler, toWebRequest} from "@tanstack/start-server";
import {getScopedDiService, type ScopedDiService} from "./diService";

declare global {
	interface Request {
		context: {
			diServices: ScopedDiService
		}
	}
}

function attachRequestContext(originalRequest: Request): Request {
	const requestWithContext = originalRequest;

	requestWithContext.context = {
		diServices: getScopedDiService()
	};

	return requestWithContext;
}

function createStartAPIHandler(cb: StartAPIHandlerCallback) {
	return eventHandler((event) => {
		const request = attachRequestContext(toWebRequest(event)!);

		return cb({request})
	})
}

export default createStartAPIHandler(defaultAPIFileRouteHandler)
