import { s as NodeResponse } from "../_libs/h3+rou3+srvx.mjs";
import { Nt as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { C as rootRouteId, E as invariant, b as isResolvedRedirect, i as RouterProvider, t as renderRouterToStream, v as executeRewriteInput, w as isNotFound, y as isRedirect } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as createMemoryHistory } from "../_libs/tanstack__history.mjs";
import { a as mergeHeaders, c as createSerializationAdapter, d as au, f as ou, i as getOrigin, n as attachRouterServerSsrUtils, r as getNormalizedURL, s as createRawStreamRPCPlugin, t as defineHandlerCallback, u as Iu } from "../_libs/@tanstack/router-core+[...].mjs";
import { a as X_TSS_RAW_RESPONSE, d as getDefaultSerovalPlugins, g as safeObjectMerge, h as runWithStartContext, i as TSS_SERVER_FUNCTION, l as flattenMiddlewares, m as requestHandler, n as TSS_CONTENT_TYPE_FRAMED_VERSIONED, o as X_TSS_SERIALIZED, p as getResponse, r as TSS_FORMDATA_CONTEXT, s as createNullProtoObject, t as FrameType } from "./esm-m5_tZiEi.mjs";
import { t as getServerFnById } from "../__tanstack-start-server-fn-resolver-BcLDBzBo.mjs";
//#region node_modules/.nitro/vite/services/ssr/index.js
var import_jsx_runtime = require_jsx_runtime();
function StartServer(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouterProvider, { router: props.router });
}
var defaultStreamHandler = defineHandlerCallback(({ request, router, responseHeaders }) => renderRouterToStream({
	request,
	router,
	responseHeaders,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StartServer, { router })
}));
var HEADERS = { TSS_SHELL: "X-TSS_SHELL" };
/**
* @description Returns the router manifest data that should be sent to the client.
* This includes only the assets and preloads for the current route and any
* special assets that are needed for the client. It does not include relationships
* between routes or any other data that is not needed for the client.
*
* The client entry URL is returned separately so that it can be transformed
* (e.g. for CDN rewriting) before being embedded into the `<script>` tag.
*
* @param matchedRoutes - In dev mode, the matched routes are used to build
* the dev styles URL for route-scoped CSS collection.
*/
async function getStartManifest(matchedRoutes) {
	const { tsrStartManifest } = await import("../_tanstack-start-manifest_v-DbVGerim.mjs");
	const startManifest = tsrStartManifest();
	const rootRoute = startManifest.routes[rootRouteId] = startManifest.routes["__root__"] || {};
	rootRoute.assets = rootRoute.assets || [];
	let injectedHeadScripts;
	return {
		manifest: { routes: Object.fromEntries(Object.entries(startManifest.routes).flatMap(([k, v]) => {
			const result = {};
			let hasData = false;
			if (v.preloads && v.preloads.length > 0) {
				result["preloads"] = v.preloads;
				hasData = true;
			}
			if (v.assets && v.assets.length > 0) {
				result["assets"] = v.assets;
				hasData = true;
			}
			if (!hasData) return [];
			return [[k, result]];
		})) },
		clientEntry: startManifest.clientEntry,
		injectedHeadScripts
	};
}
/**
* Binary frame protocol for multiplexing JSON and raw streams over HTTP.
*
* Frame format: [type:1][streamId:4][length:4][payload:length]
* - type: 1 byte - frame type (JSON, CHUNK, END, ERROR)
* - streamId: 4 bytes big-endian uint32 - stream identifier
* - length: 4 bytes big-endian uint32 - payload length
* - payload: variable length bytes
*/
/** Cached TextEncoder for frame encoding */
var textEncoder$1 = new TextEncoder();
/** Shared empty payload for END frames - avoids allocation per call */
var EMPTY_PAYLOAD = new Uint8Array(0);
/**
* Encodes a single frame with header and payload.
*/
function encodeFrame(type, streamId, payload) {
	const frame = new Uint8Array(9 + payload.length);
	frame[0] = type;
	frame[1] = streamId >>> 24 & 255;
	frame[2] = streamId >>> 16 & 255;
	frame[3] = streamId >>> 8 & 255;
	frame[4] = streamId & 255;
	frame[5] = payload.length >>> 24 & 255;
	frame[6] = payload.length >>> 16 & 255;
	frame[7] = payload.length >>> 8 & 255;
	frame[8] = payload.length & 255;
	frame.set(payload, 9);
	return frame;
}
/**
* Encodes a JSON frame (type 0, streamId 0).
*/
function encodeJSONFrame(json) {
	return encodeFrame(FrameType.JSON, 0, textEncoder$1.encode(json));
}
/**
* Encodes a raw stream chunk frame.
*/
function encodeChunkFrame(streamId, chunk) {
	return encodeFrame(FrameType.CHUNK, streamId, chunk);
}
/**
* Encodes a raw stream end frame.
*/
function encodeEndFrame(streamId) {
	return encodeFrame(FrameType.END, streamId, EMPTY_PAYLOAD);
}
/**
* Encodes a raw stream error frame.
*/
function encodeErrorFrame(streamId, error) {
	const message = error instanceof Error ? error.message : String(error ?? "Unknown error");
	return encodeFrame(FrameType.ERROR, streamId, textEncoder$1.encode(message));
}
/**
* Creates a multiplexed ReadableStream from JSON stream and raw streams.
*
* The JSON stream emits NDJSON lines (from seroval's toCrossJSONStream).
* Raw streams are pumped concurrently, interleaved with JSON frames.
*
* @param jsonStream Stream of JSON strings (each string is one NDJSON line)
* @param rawStreams Map of stream IDs to raw binary streams
*/
function createMultiplexedStream(jsonStream, rawStreams) {
	let activePumps = 1 + rawStreams.size;
	let controllerRef = null;
	let cancelled = false;
	const cancelReaders = [];
	const safeEnqueue = (chunk) => {
		if (cancelled || !controllerRef) return;
		try {
			controllerRef.enqueue(chunk);
		} catch {}
	};
	const safeError = (err) => {
		if (cancelled || !controllerRef) return;
		try {
			controllerRef.error(err);
		} catch {}
	};
	const safeClose = () => {
		if (cancelled || !controllerRef) return;
		try {
			controllerRef.close();
		} catch {}
	};
	const checkComplete = () => {
		activePumps--;
		if (activePumps === 0) safeClose();
	};
	return new ReadableStream({
		start(controller) {
			controllerRef = controller;
			cancelReaders.length = 0;
			const pumpJSON = async () => {
				const reader = jsonStream.getReader();
				cancelReaders.push(() => {
					reader.cancel().catch(() => {});
				});
				try {
					while (true) {
						const { done, value } = await reader.read();
						if (cancelled) break;
						if (done) break;
						safeEnqueue(encodeJSONFrame(value));
					}
				} catch (error) {
					safeError(error);
				} finally {
					reader.releaseLock();
					checkComplete();
				}
			};
			const pumpRawStream = async (streamId, stream) => {
				const reader = stream.getReader();
				cancelReaders.push(() => {
					reader.cancel().catch(() => {});
				});
				try {
					while (true) {
						const { done, value } = await reader.read();
						if (cancelled) break;
						if (done) {
							safeEnqueue(encodeEndFrame(streamId));
							break;
						}
						safeEnqueue(encodeChunkFrame(streamId, value));
					}
				} catch (error) {
					safeEnqueue(encodeErrorFrame(streamId, error));
				} finally {
					reader.releaseLock();
					checkComplete();
				}
			};
			pumpJSON();
			for (const [streamId, stream] of rawStreams) pumpRawStream(streamId, stream);
		},
		cancel() {
			cancelled = true;
			controllerRef = null;
			for (const cancelReader of cancelReaders) cancelReader();
			cancelReaders.length = 0;
		}
	});
}
var serovalPlugins = void 0;
var textEncoder = new TextEncoder();
var FORM_DATA_CONTENT_TYPES = ["multipart/form-data", "application/x-www-form-urlencoded"];
var MAX_PAYLOAD_SIZE = 1e6;
var handleServerAction = async ({ request, context, serverFnId }) => {
	const methodUpper = request.method.toUpperCase();
	const url = new URL(request.url);
	const action = await getServerFnById(serverFnId, { fromClient: true });
	if (action.method && methodUpper !== action.method) return new Response(`expected ${action.method} method. Got ${methodUpper}`, {
		status: 405,
		headers: { Allow: action.method }
	});
	const isServerFn = request.headers.get("x-tsr-serverFn") === "true";
	if (!serovalPlugins) serovalPlugins = getDefaultSerovalPlugins();
	const contentType = request.headers.get("Content-Type");
	function parsePayload(payload) {
		return Iu(payload, { plugins: serovalPlugins });
	}
	return await (async () => {
		try {
			let res = await (async () => {
				if (FORM_DATA_CONTENT_TYPES.some((type) => contentType && contentType.includes(type))) {
					invariant(methodUpper !== "GET", "GET requests with FormData payloads are not supported");
					const formData = await request.formData();
					const serializedContext = formData.get(TSS_FORMDATA_CONTEXT);
					formData.delete(TSS_FORMDATA_CONTEXT);
					const params = {
						context,
						data: formData,
						method: methodUpper
					};
					if (typeof serializedContext === "string") try {
						const deserializedContext = Iu(JSON.parse(serializedContext), { plugins: serovalPlugins });
						if (typeof deserializedContext === "object" && deserializedContext) params.context = safeObjectMerge(context, deserializedContext);
					} catch (e) {}
					return await action(params);
				}
				if (methodUpper === "GET") {
					const payloadParam = url.searchParams.get("payload");
					if (payloadParam && payloadParam.length > MAX_PAYLOAD_SIZE) throw new Error("Payload too large");
					const payload = payloadParam ? parsePayload(JSON.parse(payloadParam)) : {};
					payload.context = safeObjectMerge(context, payload.context);
					payload.method = methodUpper;
					return await action(payload);
				}
				let jsonPayload;
				if (contentType?.includes("application/json")) jsonPayload = await request.json();
				const payload = jsonPayload ? parsePayload(jsonPayload) : {};
				payload.context = safeObjectMerge(payload.context, context);
				payload.method = methodUpper;
				return await action(payload);
			})();
			const unwrapped = res.result || res.error;
			if (isNotFound(res)) res = isNotFoundResponse(res);
			if (!isServerFn) return unwrapped;
			if (unwrapped instanceof Response) {
				if (isRedirect(unwrapped)) return unwrapped;
				unwrapped.headers.set(X_TSS_RAW_RESPONSE, "true");
				return unwrapped;
			}
			return serializeResult(res);
			function serializeResult(res) {
				let nonStreamingBody = void 0;
				const alsResponse = getResponse();
				if (res !== void 0) {
					const rawStreams = /* @__PURE__ */ new Map();
					const plugins = [createRawStreamRPCPlugin((id, stream) => {
						rawStreams.set(id, stream);
					}), ...serovalPlugins || []];
					let done = false;
					const callbacks = {
						onParse: (value) => {
							nonStreamingBody = value;
						},
						onDone: () => {
							done = true;
						},
						onError: (error) => {
							throw error;
						}
					};
					au(res, {
						refs: /* @__PURE__ */ new Map(),
						plugins,
						onParse(value) {
							callbacks.onParse(value);
						},
						onDone() {
							callbacks.onDone();
						},
						onError: (error) => {
							callbacks.onError(error);
						}
					});
					if (done && rawStreams.size === 0) return new Response(nonStreamingBody ? JSON.stringify(nonStreamingBody) : void 0, {
						status: alsResponse.status,
						statusText: alsResponse.statusText,
						headers: {
							"Content-Type": "application/json",
							[X_TSS_SERIALIZED]: "true"
						}
					});
					if (rawStreams.size > 0) {
						const multiplexedStream = createMultiplexedStream(new ReadableStream({ start(controller) {
							callbacks.onParse = (value) => {
								controller.enqueue(JSON.stringify(value) + "\n");
							};
							callbacks.onDone = () => {
								try {
									controller.close();
								} catch {}
							};
							callbacks.onError = (error) => controller.error(error);
							if (nonStreamingBody !== void 0) callbacks.onParse(nonStreamingBody);
						} }), rawStreams);
						return new Response(multiplexedStream, {
							status: alsResponse.status,
							statusText: alsResponse.statusText,
							headers: {
								"Content-Type": TSS_CONTENT_TYPE_FRAMED_VERSIONED,
								[X_TSS_SERIALIZED]: "true"
							}
						});
					}
					const stream = new ReadableStream({ start(controller) {
						callbacks.onParse = (value) => controller.enqueue(textEncoder.encode(JSON.stringify(value) + "\n"));
						callbacks.onDone = () => {
							try {
								controller.close();
							} catch (error) {
								controller.error(error);
							}
						};
						callbacks.onError = (error) => controller.error(error);
						if (nonStreamingBody !== void 0) callbacks.onParse(nonStreamingBody);
					} });
					return new Response(stream, {
						status: alsResponse.status,
						statusText: alsResponse.statusText,
						headers: {
							"Content-Type": "application/x-ndjson",
							[X_TSS_SERIALIZED]: "true"
						}
					});
				}
				return new Response(void 0, {
					status: alsResponse.status,
					statusText: alsResponse.statusText
				});
			}
		} catch (error) {
			if (error instanceof Response) return error;
			if (isNotFound(error)) return isNotFoundResponse(error);
			console.info();
			console.info("Server Fn Error!");
			console.info();
			console.error(error);
			console.info();
			const serializedError = JSON.stringify(await Promise.resolve(ou(error, {
				refs: /* @__PURE__ */ new Map(),
				plugins: serovalPlugins
			})));
			const response = getResponse();
			return new Response(serializedError, {
				status: response.status ?? 500,
				statusText: response.statusText,
				headers: {
					"Content-Type": "application/json",
					[X_TSS_SERIALIZED]: "true"
				}
			});
		}
	})();
};
function isNotFoundResponse(error) {
	const { headers, ...rest } = error;
	return new Response(JSON.stringify(rest), {
		status: 404,
		headers: {
			"Content-Type": "application/json",
			...headers || {}
		}
	});
}
/**
* Resolves a TransformAssetUrls value (string prefix, callback, or options
* object) into a concrete transform function and cache flag.
*/
function resolveTransformConfig(transform) {
	if (typeof transform === "string") {
		const prefix = transform;
		return {
			type: "transform",
			transformFn: ({ url }) => `${prefix}${url}`,
			cache: true
		};
	}
	if (typeof transform === "function") return {
		type: "transform",
		transformFn: transform,
		cache: true
	};
	if ("createTransform" in transform && transform.createTransform) return {
		type: "createTransform",
		createTransform: transform.createTransform,
		cache: transform.cache !== false
	};
	return {
		type: "transform",
		transformFn: typeof transform.transform === "string" ? (({ url }) => `${transform.transform}${url}`) : transform.transform,
		cache: transform.cache !== false
	};
}
/**
* Builds the client entry `<script>` tag from a (possibly transformed) client
* entry URL and optional injected head scripts.
*/
function buildClientEntryScriptTag(clientEntry, injectedHeadScripts) {
	let script = `import(${JSON.stringify(clientEntry)})`;
	if (injectedHeadScripts) script = `${injectedHeadScripts};${script}`;
	return {
		tag: "script",
		attrs: {
			type: "module",
			async: true
		},
		children: script
	};
}
/**
* Applies a URL transform to every asset URL in the manifest and returns a
* new manifest with a client entry script tag appended to the root route's
* assets.
*
* The source manifest is deep-cloned so the cached original is never mutated.
*/
function transformManifestUrls(source, transformFn, opts) {
	return (async () => {
		const manifest = opts?.clone ? structuredClone(source.manifest) : source.manifest;
		for (const route of Object.values(manifest.routes)) {
			if (route.preloads) route.preloads = await Promise.all(route.preloads.map((url) => Promise.resolve(transformFn({
				url,
				type: "modulepreload"
			}))));
			if (route.assets) {
				for (const asset of route.assets) if (asset.tag === "link" && asset.attrs?.href) asset.attrs.href = await Promise.resolve(transformFn({
					url: asset.attrs.href,
					type: "stylesheet"
				}));
			}
		}
		const transformedClientEntry = await Promise.resolve(transformFn({
			url: source.clientEntry,
			type: "clientEntry"
		}));
		const rootRoute = manifest.routes[rootRouteId];
		if (rootRoute) {
			rootRoute.assets = rootRoute.assets || [];
			rootRoute.assets.push(buildClientEntryScriptTag(transformedClientEntry, source.injectedHeadScripts));
		}
		return manifest;
	})();
}
/**
* Builds a final Manifest from a StartManifestWithClientEntry without any
* URL transforms. Used when no transformAssetUrls option is provided.
*
* Returns a new manifest object so the cached base manifest is never mutated.
*/
function buildManifestWithClientEntry(source) {
	const scriptTag = buildClientEntryScriptTag(source.clientEntry, source.injectedHeadScripts);
	const baseRootRoute = source.manifest.routes[rootRouteId];
	return { routes: {
		...source.manifest.routes,
		...baseRootRoute ? { [rootRouteId]: {
			...baseRootRoute,
			assets: [...baseRootRoute.assets || [], scriptTag]
		} } : {}
	} };
}
var ServerFunctionSerializationAdapter = createSerializationAdapter({
	key: "$TSS/serverfn",
	test: (v) => {
		if (typeof v !== "function") return false;
		if (!(TSS_SERVER_FUNCTION in v)) return false;
		return !!v[TSS_SERVER_FUNCTION];
	},
	toSerializable: ({ serverFnMeta }) => ({ functionId: serverFnMeta.id }),
	fromSerializable: ({ functionId }) => {
		const fn = async (opts, signal) => {
			return (await (await getServerFnById(functionId, { fromClient: true }))(opts ?? {}, signal)).result;
		};
		return fn;
	}
});
function getStartResponseHeaders(opts) {
	return mergeHeaders({ "Content-Type": "text/html; charset=utf-8" }, ...opts.router.state.matches.map((match) => {
		return match.headers;
	}));
}
var entriesPromise;
var baseManifestPromise;
/**
* Cached final manifest (with client entry script tag). In production,
* this is computed once and reused for every request when caching is enabled.
*/
var cachedFinalManifestPromise;
async function loadEntries() {
	const routerEntry = await import("./router-BwRTkAUd.mjs");
	return {
		startEntry: await import("./start-axwMiPe6.mjs"),
		routerEntry
	};
}
function getEntries() {
	if (!entriesPromise) entriesPromise = loadEntries();
	return entriesPromise;
}
/**
* Returns the raw manifest data (without client entry script tag baked in).
* In dev mode, always returns fresh data. In prod, cached.
*/
function getBaseManifest(matchedRoutes) {
	if (!baseManifestPromise) baseManifestPromise = getStartManifest();
	return baseManifestPromise;
}
/**
* Resolves a final Manifest for a given request.
*
* - No transform: builds client entry script tag and returns (cached in prod).
* - Cached transform: transforms all URLs + builds script tag, caches result.
* - Per-request transform: deep-clones base manifest, transforms per-request.
*/
async function resolveManifest(matchedRoutes, transformFn, cache) {
	const base = await getBaseManifest(matchedRoutes);
	const computeFinalManifest = async () => {
		return transformFn ? await transformManifestUrls(base, transformFn, { clone: !cache }) : buildManifestWithClientEntry(base);
	};
	if (!transformFn || cache) {
		if (!cachedFinalManifestPromise) cachedFinalManifestPromise = computeFinalManifest();
		return cachedFinalManifestPromise;
	}
	return computeFinalManifest();
}
var ROUTER_BASEPATH = "/";
var SERVER_FN_BASE = "/_serverFn/";
var IS_PRERENDERING = process.env.TSS_PRERENDERING === "true";
var IS_SHELL_ENV = process.env.TSS_SHELL === "true";
var IS_DEV = false;
var ERR_NO_RESPONSE = IS_DEV ? `It looks like you forgot to return a response from your server route handler. If you want to defer to the app router, make sure to have a component set in this route.` : "Internal Server Error";
var ERR_NO_DEFER = IS_DEV ? `You cannot defer to the app router if there is no component defined on this route.` : "Internal Server Error";
function throwRouteHandlerError() {
	throw new Error(ERR_NO_RESPONSE);
}
function throwIfMayNotDefer() {
	throw new Error(ERR_NO_DEFER);
}
/**
* Check if a value is a special response (Response or Redirect)
*/
function isSpecialResponse(value) {
	return value instanceof Response || isRedirect(value);
}
/**
* Normalize middleware result to context shape
*/
function handleCtxResult(result) {
	if (isSpecialResponse(result)) return { response: result };
	return result;
}
/**
* Execute a middleware chain
*/
function executeMiddleware(middlewares, ctx) {
	let index = -1;
	const next = async (nextCtx) => {
		if (nextCtx) {
			if (nextCtx.context) ctx.context = safeObjectMerge(ctx.context, nextCtx.context);
			for (const key of Object.keys(nextCtx)) if (key !== "context") ctx[key] = nextCtx[key];
		}
		index++;
		const middleware = middlewares[index];
		if (!middleware) return ctx;
		let result;
		try {
			result = await middleware({
				...ctx,
				next
			});
		} catch (err) {
			if (isSpecialResponse(err)) {
				ctx.response = err;
				return ctx;
			}
			throw err;
		}
		const normalized = handleCtxResult(result);
		if (normalized) {
			if (normalized.response !== void 0) ctx.response = normalized.response;
			if (normalized.context) ctx.context = safeObjectMerge(ctx.context, normalized.context);
		}
		return ctx;
	};
	return next();
}
/**
* Wrap a route handler as middleware
*/
function handlerToMiddleware(handler, mayDefer = false) {
	if (mayDefer) return handler;
	return async (ctx) => {
		const response = await handler({
			...ctx,
			next: throwIfMayNotDefer
		});
		if (!response) throwRouteHandlerError();
		return response;
	};
}
/**
* Creates the TanStack Start request handler.
*
* @example Backwards-compatible usage (handler callback only):
* ```ts
* export default createStartHandler(defaultStreamHandler)
* ```
*
* @example With CDN URL rewriting:
* ```ts
* export default createStartHandler({
*   handler: defaultStreamHandler,
*   transformAssetUrls: 'https://cdn.example.com',
* })
* ```
*
* @example With per-request URL rewriting:
* ```ts
* export default createStartHandler({
*   handler: defaultStreamHandler,
*   transformAssetUrls: {
*     transform: ({ url }) => {
*       const cdnBase = getRequest().headers.get('x-cdn-base') || ''
*       return `${cdnBase}${url}`
*     },
*     cache: false,
*   },
* })
* ```
*/
function createStartHandler(cbOrOptions) {
	const cb = typeof cbOrOptions === "function" ? cbOrOptions : cbOrOptions.handler;
	const transformAssetUrlsOption = typeof cbOrOptions === "function" ? void 0 : cbOrOptions.transformAssetUrls;
	const warmupTransformManifest = !!transformAssetUrlsOption && typeof transformAssetUrlsOption === "object" && transformAssetUrlsOption.warmup === true;
	const resolvedTransformConfig = transformAssetUrlsOption ? resolveTransformConfig(transformAssetUrlsOption) : void 0;
	const cache = resolvedTransformConfig ? resolvedTransformConfig.cache : true;
	let cachedCreateTransformPromise;
	const getTransformFn = async (opts) => {
		if (!resolvedTransformConfig) return void 0;
		if (resolvedTransformConfig.type === "createTransform") {
			if (cache) {
				if (!cachedCreateTransformPromise) cachedCreateTransformPromise = Promise.resolve(resolvedTransformConfig.createTransform(opts));
				return cachedCreateTransformPromise;
			}
			return resolvedTransformConfig.createTransform(opts);
		}
		return resolvedTransformConfig.transformFn;
	};
	if (warmupTransformManifest && cache && !cachedFinalManifestPromise) {
		const warmupPromise = (async () => {
			const base = await getBaseManifest(void 0);
			const transformFn = await getTransformFn({ warmup: true });
			return transformFn ? await transformManifestUrls(base, transformFn, { clone: false }) : buildManifestWithClientEntry(base);
		})();
		cachedFinalManifestPromise = warmupPromise;
		warmupPromise.catch(() => {
			if (cachedFinalManifestPromise === warmupPromise) cachedFinalManifestPromise = void 0;
			cachedCreateTransformPromise = void 0;
		});
	}
	const startRequestResolver = async (request, requestOpts) => {
		let router = null;
		let cbWillCleanup = false;
		try {
			const { url, handledProtocolRelativeURL } = getNormalizedURL(request.url);
			const href = url.pathname + url.search + url.hash;
			const origin = getOrigin(request);
			if (handledProtocolRelativeURL) return Response.redirect(url, 308);
			const entries = await getEntries();
			const startOptions = await entries.startEntry.startInstance?.getOptions() || {};
			const serializationAdapters = [...startOptions.serializationAdapters || [], ServerFunctionSerializationAdapter];
			const requestStartOptions = {
				...startOptions,
				serializationAdapters
			};
			const flattenedRequestMiddlewares = startOptions.requestMiddleware ? flattenMiddlewares(startOptions.requestMiddleware) : [];
			const executedRequestMiddlewares = new Set(flattenedRequestMiddlewares);
			const getRouter = async () => {
				if (router) return router;
				router = await entries.routerEntry.getRouter();
				let isShell = IS_SHELL_ENV;
				if (IS_PRERENDERING && !isShell) isShell = request.headers.get(HEADERS.TSS_SHELL) === "true";
				const history = createMemoryHistory({ initialEntries: [href] });
				router.update({
					history,
					isShell,
					isPrerendering: IS_PRERENDERING,
					origin: router.options.origin ?? origin,
					defaultSsr: requestStartOptions.defaultSsr,
					serializationAdapters: [...requestStartOptions.serializationAdapters, ...router.options.serializationAdapters || []],
					basepath: ROUTER_BASEPATH
				});
				return router;
			};
			if (SERVER_FN_BASE && url.pathname.startsWith(SERVER_FN_BASE)) {
				const serverFnId = url.pathname.slice(SERVER_FN_BASE.length).split("/")[0];
				if (!serverFnId) throw new Error("Invalid server action param for serverFnId");
				const serverFnHandler = async ({ context }) => {
					return runWithStartContext({
						getRouter,
						startOptions: requestStartOptions,
						contextAfterGlobalMiddlewares: context,
						request,
						executedRequestMiddlewares
					}, () => handleServerAction({
						request,
						context: requestOpts?.context,
						serverFnId
					}));
				};
				return handleRedirectResponse((await executeMiddleware([...flattenedRequestMiddlewares.map((d) => d.options.server), serverFnHandler], {
					request,
					pathname: url.pathname,
					context: createNullProtoObject(requestOpts?.context)
				})).response, request, getRouter);
			}
			const executeRouter = async (serverContext, matchedRoutes) => {
				const acceptParts = (request.headers.get("Accept") || "*/*").split(",");
				if (!["*/*", "text/html"].some((mimeType) => acceptParts.some((part) => part.trim().startsWith(mimeType)))) return Response.json({ error: "Only HTML requests are supported here" }, { status: 500 });
				const manifest = await resolveManifest(matchedRoutes, await getTransformFn({
					warmup: false,
					request
				}), cache);
				const routerInstance = await getRouter();
				attachRouterServerSsrUtils({
					router: routerInstance,
					manifest
				});
				routerInstance.update({ additionalContext: { serverContext } });
				await routerInstance.load();
				if (routerInstance.state.redirect) return routerInstance.state.redirect;
				await routerInstance.serverSsr.dehydrate();
				const responseHeaders = getStartResponseHeaders({ router: routerInstance });
				cbWillCleanup = true;
				return cb({
					request,
					router: routerInstance,
					responseHeaders
				});
			};
			const requestHandlerMiddleware = async ({ context }) => {
				return runWithStartContext({
					getRouter,
					startOptions: requestStartOptions,
					contextAfterGlobalMiddlewares: context,
					request,
					executedRequestMiddlewares
				}, async () => {
					try {
						return await handleServerRoutes({
							getRouter,
							request,
							url,
							executeRouter,
							context,
							executedRequestMiddlewares
						});
					} catch (err) {
						if (err instanceof Response) return err;
						throw err;
					}
				});
			};
			return handleRedirectResponse((await executeMiddleware([...flattenedRequestMiddlewares.map((d) => d.options.server), requestHandlerMiddleware], {
				request,
				pathname: url.pathname,
				context: createNullProtoObject(requestOpts?.context)
			})).response, request, getRouter);
		} finally {
			if (router && !cbWillCleanup) router.serverSsr?.cleanup();
			router = null;
		}
	};
	return requestHandler(startRequestResolver);
}
async function handleRedirectResponse(response, request, getRouter) {
	if (!isRedirect(response)) return response;
	if (isResolvedRedirect(response)) {
		if (request.headers.get("x-tsr-serverFn") === "true") return Response.json({
			...response.options,
			isSerializedRedirect: true
		}, { headers: response.headers });
		return response;
	}
	const opts = response.options;
	if (opts.to && typeof opts.to === "string" && !opts.to.startsWith("/")) throw new Error(`Server side redirects must use absolute paths via the 'href' or 'to' options. The redirect() method's "to" property accepts an internal path only. Use the "href" property to provide an external URL. Received: ${JSON.stringify(opts)}`);
	if ([
		"params",
		"search",
		"hash"
	].some((d) => typeof opts[d] === "function")) throw new Error(`Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(opts).filter((d) => typeof opts[d] === "function").map((d) => `"${d}"`).join(", ")}`);
	const redirect = (await getRouter()).resolveRedirect(response);
	if (request.headers.get("x-tsr-serverFn") === "true") return Response.json({
		...response.options,
		isSerializedRedirect: true
	}, { headers: response.headers });
	return redirect;
}
async function handleServerRoutes({ getRouter, request, url, executeRouter, context, executedRequestMiddlewares }) {
	const router = await getRouter();
	const pathname = executeRewriteInput(router.rewrite, url).pathname;
	const { matchedRoutes, foundRoute, routeParams } = router.getMatchedRoutes(pathname);
	const isExactMatch = foundRoute && routeParams["**"] === void 0;
	const routeMiddlewares = [];
	for (const route of matchedRoutes) {
		const serverMiddleware = route.options.server?.middleware;
		if (serverMiddleware) {
			const flattened = flattenMiddlewares(serverMiddleware);
			for (const m of flattened) if (!executedRequestMiddlewares.has(m)) routeMiddlewares.push(m.options.server);
		}
	}
	const server = foundRoute?.options.server;
	if (server?.handlers && isExactMatch) {
		const handlers = typeof server.handlers === "function" ? server.handlers({ createHandlers: (d) => d }) : server.handlers;
		const handler = handlers[request.method.toUpperCase()] ?? handlers["ANY"];
		if (handler) {
			const mayDefer = !!foundRoute.options.component;
			if (typeof handler === "function") routeMiddlewares.push(handlerToMiddleware(handler, mayDefer));
			else {
				if (handler.middleware?.length) {
					const handlerMiddlewares = flattenMiddlewares(handler.middleware);
					for (const m of handlerMiddlewares) routeMiddlewares.push(m.options.server);
				}
				if (handler.handler) routeMiddlewares.push(handlerToMiddleware(handler.handler, mayDefer));
			}
		}
	}
	routeMiddlewares.push((ctx) => executeRouter(ctx.context, matchedRoutes));
	return (await executeMiddleware(routeMiddlewares, {
		request,
		context,
		params: routeParams,
		pathname
	})).response;
}
var fetch = createStartHandler(defaultStreamHandler);
function createServerEntry(entry) {
	return { async fetch(...args) {
		return await entry.fetch(...args);
	} };
}
var server_default$1 = createServerEntry({ fetch });
globalThis.Response = NodeResponse;
var server_default = createServerEntry({ fetch(request) {
	return server_default$1.fetch(request);
} });
//#endregion
export { server_default as default };
