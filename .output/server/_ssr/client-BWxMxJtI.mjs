import { s as __toESM } from "../_runtime.mjs";
import { L as sql, O as or, a as and, g as isNotNull, i as desc, n as count, r as asc, s as arrayContains, t as drizzleAdapter, u as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { a as defineRelations, c as pgTable, d as text, f as jsonb, i as Pool, l as uuid, m as boolean, o as unique, p as integer, r as drizzle, s as index, u as timestamp } from "../_libs/drizzle-orm.mjs";
import { a as stepCountIs, i as output_exports, n as convertToModelMessages, o as streamText, r as generateText } from "../_libs/@ai-sdk/react+[...].mjs";
import { _ as setCookie$1, f as getRequestHeaders, u as getCookie } from "./esm-m5_tZiEi.mjs";
import { $ as sha256, $t as logger, At as runWithRequestState, Bt as id_exports, C as bytesToHex, D as hex, E as utf8ToBytes, F as SignJWT, Ft as getBetterAuthVersion, Gt as APIError$1, Ht as APIError, I as jwtDecrypt, It as json_exports, J as JWTExpired, Jt as defineErrorCodes, Kt as kAPIErrorHeaderSymbol, L as jwtVerify, Lt as safeJSONParse, M as decodeProtectedHeader, Mt as runWithEndpointContext, N as calculateJwkThumbprint, Ot as defineRequestState, P as EncryptJWT, Qt as createLogger, Rt as getAuthTables, S as xchacha20poly1305, St as createAuthMiddleware, T as managedNonce, Ut as BetterAuthError, Vt as createRandomStringGenerator, Wt as error_exports, Xt as env_exports, Yt as error_codes_exports, Z as encode, bt as base64Url, c as isValidIP, cn as isTest, ct as hexToBytes, en as shouldPublishLog, et as hkdf, f as createHMAC, g as db_exports$1, h as filterOutputFields, jt as getCurrentAuthContext, kt as hasRequestState, l as normalizeIP, n as apiKey, on as isDevelopment, p as binary, qt as BASE_ERROR_CODES, rn as env, s as createRateLimitKey, sn as isProduction, vt as createHash$1, w as hexToBytes$1, wt as toResponse, xt as createAuthEndpoint, zt as generateId } from "../_libs/@better-auth/api-key+[...].mjs";
import { a as getHost, c as getProtocol, d as matchesHostPattern, g as wildcardMatch, i as getBaseURL, l as getProtocolFromRequest, m as resolveDynamicBaseURL, n as TWO_FACTOR_ERROR_CODES, o as getHostFromRequest, p as resolveBaseURL, r as USERNAME_ERROR_CODES, s as getOrigin, t as GENERIC_OAUTH_ERROR_CODES, u as isDynamicBaseURLConfig } from "./error-codes-HOUJ9XOX.mjs";
import { i as slugify, n as generateRandomName, o as toUsername, t as generateId$1 } from "./string-DcW5i2yt.mjs";
import { Aa as flattenError, Bn as array, Kr as record, Ln as _undefined, Lr as number, Mt as ZodDefault, Nn as _enum, Qn as date, Qr as stringbool, Rr as object, Tr as looseObject, U as tool, Wn as boolean$2, Xr as string, Z as AISDKError, Zn as custom, an as ZodObject, bn as ZodType, ci as union, ki as ZodError, li as unknown, lt as number$1, nr as email, on as ZodOptional, st as boolean$1, t as createAnthropic, ui as url, ut as string$1, wr as literal, yr as json, zn as any, zr as optional } from "../_libs/@ai-sdk/anthropic+[...].mjs";
import { a as zod_default, n as createGatewayProvider, o as zod_exports } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { g as printMarginTemplates, s as defaultResumeData, x as resumeDataSchema } from "./data-CIU9AXln.mjs";
import { t as getLocale } from "./locale-Bc_Sesmg.mjs";
import { a as getKyselyDatabaseType, i as createKyselyAdapter, s as sql$1 } from "../_libs/@better-auth/kysely-adapter+[...].mjs";
import { S as initGetFieldName, _ as runWithTransaction, a as oauth2_exports, d as normalizePathname, f as decodeJwt, g as runWithAdapter, h as queueAfterTransactionHook, i as validateAuthorizationCode, l as createAuthorizationURL, m as getCurrentAdapter, n as SocialProviderListEnum, o as refreshAccessToken, r as socialProviders, s as betterFetch, t as dist_exports$1, u as deprecate, x as initGetModelName, y as whereOperators } from "../_libs/@better-auth/core+[...].mjs";
import { t as createRouter$1 } from "../_libs/better-call.mjs";
import { t as scryptAsync } from "../_libs/noble__hashes.mjs";
import { n as dash } from "../_libs/@better-auth/infra+[...].mjs";
import { n as defu, t as createDefu } from "../_libs/defu.mjs";
import { n as getTelemetryAuthConfig, t as createTelemetry } from "../_libs/better-auth__telemetry.mjs";
import { a as S3Client, i as DeleteObjectCommand, n as ListObjectsV2Command, r as GetObjectCommand, t as PutObjectCommand } from "../_libs/@aws-sdk/client-s3+[...].mjs";
import { t as createOTP } from "../_libs/better-auth__utils.mjs";
import { t as createEnv } from "../_libs/t3-oss__env-core.mjs";
import { t as require_nodemailer } from "../_libs/nodemailer.mjs";
import { d as os, u as createRouterClient } from "../_libs/@orpc/json-schema+[...].mjs";
import { F as streamToAsyncIteratorClass, d as ORPCError, k as onError } from "../_libs/@orpc/client+[...].mjs";
import { c as type } from "../_libs/orpc__contract.mjs";
import { t as createRouterUtils } from "../_libs/@orpc/tanstack-query+[...].mjs";
import { n as createOllama, r as jsonrepair, t as OllamaError } from "../_libs/ai-sdk-ollama+[...].mjs";
import { t as createGoogleGenerativeAI } from "../_libs/ai-sdk__google.mjs";
import { t as createOpenAI } from "../_libs/ai-sdk__openai.mjs";
import { t as M } from "../_libs/ts-pattern.mjs";
import { t as fast_json_patch_default } from "../_libs/fast-json-patch.mjs";
import { t as purify } from "../_libs/dompurify.mjs";
import { C as puppeteer } from "../_libs/puppeteer-core.mjs";
import { r as get } from "../_libs/es-toolkit.mjs";
import { t as createSelectSchema } from "../_libs/drizzle-zod.mjs";
import { createHash, timingSafeEqual } from "node:crypto";
import { dirname, extname, join } from "node:path";
import fs from "node:fs/promises";
import { compare, hash } from "bcrypt";
import dns from "node:dns/promises";
import { isIP } from "node:net";
//#region node_modules/.nitro/vite/services/ssr/assets/client-BWxMxJtI.js
var import_nodemailer = /* @__PURE__ */ __toESM(require_nodemailer());
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$1 = Object.getOwnPropertyNames;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __exportAll$1 = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp$1(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp$1(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps$1 = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames$1(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp$1.call(to, key) && key !== except) __defProp$1(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc$1(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __reExport$1 = (target, mod, secondTarget) => (__copyProps$1(target, mod, "default"), secondTarget && __copyProps$1(secondTarget, mod, "default"));
var generateRandomString = createRandomStringGenerator("a-z", "0-9", "A-Z", "-_");
/**
* Compare two buffers in constant time.
*/
function constantTimeEqual(a, b) {
	if (typeof a === "string") a = new TextEncoder().encode(a);
	if (typeof b === "string") b = new TextEncoder().encode(b);
	const aBuffer = new Uint8Array(a);
	const bBuffer = new Uint8Array(b);
	let c = aBuffer.length ^ bBuffer.length;
	const length = Math.max(aBuffer.length, bBuffer.length);
	for (let i = 0; i < length; i++) c |= (i < aBuffer.length ? aBuffer[i] : 0) ^ (i < bBuffer.length ? bBuffer[i] : 0);
	return c === 0;
}
async function signJWT(payload, secret, expiresIn = 3600) {
	return await new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime(Math.floor(Date.now() / 1e3) + expiresIn).sign(new TextEncoder().encode(secret));
}
async function verifyJWT(token, secret) {
	try {
		return (await jwtVerify(token, new TextEncoder().encode(secret))).payload;
	} catch {
		return null;
	}
}
var info = new Uint8Array([
	66,
	101,
	116,
	116,
	101,
	114,
	65,
	117,
	116,
	104,
	46,
	106,
	115,
	32,
	71,
	101,
	110,
	101,
	114,
	97,
	116,
	101,
	100,
	32,
	69,
	110,
	99,
	114,
	121,
	112,
	116,
	105,
	111,
	110,
	32,
	75,
	101,
	121
]);
var now = () => Date.now() / 1e3 | 0;
var alg = "dir";
var enc = "A256CBC-HS512";
function deriveEncryptionSecret(secret, salt) {
	return hkdf(sha256, new TextEncoder().encode(secret), new TextEncoder().encode(salt), info, 64);
}
function getCurrentSecret(secret) {
	if (typeof secret === "string") return secret;
	const value = secret.keys.get(secret.currentVersion);
	if (!value) throw new Error(`Secret version ${secret.currentVersion} not found in keys`);
	return value;
}
function getAllSecrets(secret) {
	if (typeof secret === "string") return [{
		version: 0,
		value: secret
	}];
	const result = [];
	for (const [version, value] of secret.keys) result.push({
		version,
		value
	});
	if (secret.legacySecret && !result.some((s) => s.value === secret.legacySecret)) result.push({
		version: -1,
		value: secret.legacySecret
	});
	return result;
}
async function symmetricEncodeJWT(payload, secret, salt, expiresIn = 3600) {
	const encryptionSecret = deriveEncryptionSecret(getCurrentSecret(secret), salt);
	const thumbprint = await calculateJwkThumbprint({
		kty: "oct",
		k: encode(encryptionSecret)
	}, "sha256");
	return await new EncryptJWT(payload).setProtectedHeader({
		alg,
		enc,
		kid: thumbprint
	}).setIssuedAt().setExpirationTime(now() + expiresIn).setJti(crypto.randomUUID()).encrypt(encryptionSecret);
}
var jwtDecryptOpts = {
	clockTolerance: 15,
	keyManagementAlgorithms: [alg],
	contentEncryptionAlgorithms: [enc, "A256GCM"]
};
async function symmetricDecodeJWT(token, secret, salt) {
	if (!token) return null;
	let hasKid = false;
	try {
		hasKid = decodeProtectedHeader(token).kid !== void 0;
	} catch {
		return null;
	}
	try {
		const secrets = getAllSecrets(secret);
		const { payload } = await jwtDecrypt(token, async (protectedHeader) => {
			const kid = protectedHeader.kid;
			if (kid !== void 0) {
				for (const s of secrets) {
					const encryptionSecret = deriveEncryptionSecret(s.value, salt);
					if (kid === await calculateJwkThumbprint({
						kty: "oct",
						k: encode(encryptionSecret)
					}, "sha256")) return encryptionSecret;
				}
				throw new Error("no matching decryption secret");
			}
			if (secrets.length === 1) return deriveEncryptionSecret(secrets[0].value, salt);
			return deriveEncryptionSecret(secrets[0].value, salt);
		}, jwtDecryptOpts);
		return payload;
	} catch {
		if (hasKid) return null;
		const secrets = getAllSecrets(secret);
		if (secrets.length <= 1) return null;
		for (let i = 1; i < secrets.length; i++) try {
			const s = secrets[i];
			const { payload } = await jwtDecrypt(token, deriveEncryptionSecret(s.value, salt), jwtDecryptOpts);
			return payload;
		} catch {
			continue;
		}
		return null;
	}
}
var config = {
	N: 16384,
	r: 16,
	p: 1,
	dkLen: 64
};
async function generateKey(password, salt) {
	return await scryptAsync(password.normalize("NFKC"), salt, {
		N: config.N,
		p: config.p,
		r: config.r,
		dkLen: config.dkLen,
		maxmem: 128 * config.N * config.r * 2
	});
}
var hashPassword$1 = async (password) => {
	const salt = hex.encode(crypto.getRandomValues(new Uint8Array(16)));
	const key = await generateKey(password, salt);
	return `${salt}:${hex.encode(key)}`;
};
var verifyPassword$2 = async ({ hash, password }) => {
	const [salt, key] = hash.split(":");
	if (!salt || !key) throw new BetterAuthError("Invalid password hash");
	return constantTimeEqual(await generateKey(password, salt), hexToBytes(key));
};
var ENVELOPE_PREFIX = "$ba$";
function parseEnvelope(data) {
	if (!data.startsWith(ENVELOPE_PREFIX)) return null;
	const firstSep = 4;
	const secondSep = data.indexOf("$", firstSep);
	if (secondSep === -1) return null;
	const version = parseInt(data.slice(firstSep, secondSep), 10);
	if (!Number.isInteger(version) || version < 0) return null;
	return {
		version,
		ciphertext: data.slice(secondSep + 1)
	};
}
function formatEnvelope(version, ciphertext) {
	return `${ENVELOPE_PREFIX}${version}$${ciphertext}`;
}
async function rawEncrypt(secret, data) {
	const keyAsBytes = await createHash$1("SHA-256").digest(secret);
	const dataAsBytes = utf8ToBytes(data);
	return bytesToHex(managedNonce(xchacha20poly1305)(new Uint8Array(keyAsBytes)).encrypt(dataAsBytes));
}
async function rawDecrypt(secret, hex) {
	const keyAsBytes = await createHash$1("SHA-256").digest(secret);
	const dataAsBytes = hexToBytes$1(hex);
	const chacha = managedNonce(xchacha20poly1305)(new Uint8Array(keyAsBytes));
	return new TextDecoder().decode(chacha.decrypt(dataAsBytes));
}
var symmetricEncrypt = async ({ key, data }) => {
	if (typeof key === "string") return rawEncrypt(key, data);
	const secret = key.keys.get(key.currentVersion);
	if (!secret) throw new Error(`Secret version ${key.currentVersion} not found in keys`);
	const ciphertext = await rawEncrypt(secret, data);
	return formatEnvelope(key.currentVersion, ciphertext);
};
var symmetricDecrypt = async ({ key, data }) => {
	if (typeof key === "string") return rawDecrypt(key, data);
	const envelope = parseEnvelope(data);
	if (envelope) {
		const secret = key.keys.get(envelope.version);
		if (!secret) throw new Error(`Secret version ${envelope.version} not found in keys (key may have been retired)`);
		return rawDecrypt(secret, envelope.ciphertext);
	}
	if (key.legacySecret) return rawDecrypt(key.legacySecret, data);
	throw new Error("Cannot decrypt legacy bare-hex payload: no legacy secret available. Set BETTER_AUTH_SECRET for backwards compatibility.");
};
var getDate = (span, unit = "ms") => {
	return new Date(Date.now() + (unit === "sec" ? span * 1e3 : span));
};
var cache = /* @__PURE__ */ new WeakMap();
function getFields(options, modelName, mode) {
	const cacheKey = `${modelName}:${mode}`;
	if (!cache.has(options)) cache.set(options, /* @__PURE__ */ new Map());
	const tableCache = cache.get(options);
	if (tableCache.has(cacheKey)) return tableCache.get(cacheKey);
	const coreSchema = mode === "output" ? getAuthTables(options)[modelName]?.fields ?? {} : {};
	const additionalFields = modelName === "user" || modelName === "session" || modelName === "account" ? options[modelName]?.additionalFields : void 0;
	let schema = {
		...coreSchema,
		...additionalFields ?? {}
	};
	for (const plugin of options.plugins || []) if (plugin.schema && plugin.schema[modelName]) schema = {
		...schema,
		...plugin.schema[modelName].fields
	};
	tableCache.set(cacheKey, schema);
	return schema;
}
function parseUserOutput(options, user) {
	return filterOutputFields(user, getFields(options, "user", "output"));
}
function parseSessionOutput(options, session) {
	return filterOutputFields(session, getFields(options, "session", "output"));
}
function parseAccountOutput(options, account) {
	const { accessToken: _accessToken, refreshToken: _refreshToken, idToken: _idToken, accessTokenExpiresAt: _accessTokenExpiresAt, refreshTokenExpiresAt: _refreshTokenExpiresAt, password: _password, ...rest } = filterOutputFields(account, getFields(options, "account", "output"));
	return rest;
}
function parseInputData(data, schema) {
	const action = schema.action || "create";
	const fields = schema.fields;
	const parsedData = Object.create(null);
	for (const key in fields) {
		if (key in data) {
			if (fields[key].input === false) {
				if (fields[key].defaultValue !== void 0) {
					if (action !== "update") {
						parsedData[key] = fields[key].defaultValue;
						continue;
					}
				}
				if (data[key]) throw APIError.from("BAD_REQUEST", {
					...BASE_ERROR_CODES.FIELD_NOT_ALLOWED,
					message: `${key} is not allowed to be set`
				});
				continue;
			}
			if (fields[key].validator?.input && data[key] !== void 0) {
				const result = fields[key].validator.input["~standard"].validate(data[key]);
				if (result instanceof Promise) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.ASYNC_VALIDATION_NOT_SUPPORTED);
				if ("issues" in result && result.issues) throw APIError.from("BAD_REQUEST", {
					...BASE_ERROR_CODES.VALIDATION_ERROR,
					message: result.issues[0]?.message || "Validation Error"
				});
				parsedData[key] = result.value;
				continue;
			}
			if (fields[key].transform?.input && data[key] !== void 0) {
				parsedData[key] = fields[key].transform?.input(data[key]);
				continue;
			}
			parsedData[key] = data[key];
			continue;
		}
		if (fields[key].defaultValue !== void 0 && action === "create") {
			if (typeof fields[key].defaultValue === "function") {
				parsedData[key] = fields[key].defaultValue();
				continue;
			}
			parsedData[key] = fields[key].defaultValue;
			continue;
		}
		if (fields[key].required && action === "create") throw APIError.from("BAD_REQUEST", {
			...BASE_ERROR_CODES.MISSING_FIELD,
			message: `${key} is required`
		});
	}
	return parsedData;
}
function parseUserInput(options, user = {}, action) {
	return parseInputData(user, {
		fields: getFields(options, "user", "input"),
		action
	});
}
function parseAdditionalUserInput(options, user) {
	const schema = getFields(options, "user", "input");
	return parseInputData(user || {}, { fields: schema });
}
function parseAccountInput(options, account) {
	return parseInputData(account, { fields: getFields(options, "account", "input") });
}
function parseSessionInput(options, session, action) {
	return parseInputData(session, {
		fields: getFields(options, "session", "input"),
		action
	});
}
function getSessionDefaultFields(options) {
	const fields = getFields(options, "session", "input");
	const defaults = {};
	for (const key in fields) if (fields[key].defaultValue !== void 0) defaults[key] = typeof fields[key].defaultValue === "function" ? fields[key].defaultValue() : fields[key].defaultValue;
	return defaults;
}
function mergeSchema(schema, newSchema) {
	if (!newSchema) return schema;
	for (const table in newSchema) {
		const newModelName = newSchema[table]?.modelName;
		if (newModelName) schema[table].modelName = newModelName;
		for (const field in schema[table].fields) {
			const newField = newSchema[table]?.fields?.[field];
			if (!newField) continue;
			schema[table].fields[field].fieldName = newField;
		}
	}
	return schema;
}
function isPromise(obj) {
	return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
}
var ALLOWED_COOKIE_SIZE = 4096;
var ESTIMATED_EMPTY_COOKIE_SIZE = 200;
var CHUNK_SIZE = ALLOWED_COOKIE_SIZE - ESTIMATED_EMPTY_COOKIE_SIZE;
/**
* Parse cookies from the request headers
*/
function parseCookiesFromContext(ctx) {
	const cookieHeader = ctx.headers?.get("cookie");
	if (!cookieHeader) return {};
	const cookies = {};
	const pairs = cookieHeader.split("; ");
	for (const pair of pairs) {
		const [name, ...valueParts] = pair.split("=");
		if (name && valueParts.length > 0) cookies[name] = valueParts.join("=");
	}
	return cookies;
}
/**
* Extract the chunk index from a cookie name
*/
function getChunkIndex(cookieName) {
	const parts = cookieName.split(".");
	const lastPart = parts[parts.length - 1];
	const index = parseInt(lastPart || "0", 10);
	return isNaN(index) ? 0 : index;
}
/**
* Read all existing chunks from cookies
*/
function readExistingChunks(cookieName, ctx) {
	const chunks = {};
	const cookies = parseCookiesFromContext(ctx);
	for (const [name, value] of Object.entries(cookies)) if (name.startsWith(cookieName)) chunks[name] = value;
	return chunks;
}
/**
* Get the full session data by joining all chunks
*/
function joinChunks(chunks) {
	return Object.keys(chunks).sort((a, b) => {
		return getChunkIndex(a) - getChunkIndex(b);
	}).map((key) => chunks[key]).join("");
}
/**
* Split a cookie value into chunks if needed
*/
function chunkCookie(storeName, cookie, chunks, logger) {
	const chunkCount = Math.ceil(cookie.value.length / CHUNK_SIZE);
	if (chunkCount === 1) {
		chunks[cookie.name] = cookie.value;
		return [cookie];
	}
	const cookies = [];
	for (let i = 0; i < chunkCount; i++) {
		const name = `${cookie.name}.${i}`;
		const start = i * CHUNK_SIZE;
		const value = cookie.value.substring(start, start + CHUNK_SIZE);
		cookies.push({
			...cookie,
			name,
			value
		});
		chunks[name] = value;
	}
	logger.debug(`CHUNKING_${storeName.toUpperCase()}_COOKIE`, {
		message: `${storeName} cookie exceeds allowed ${ALLOWED_COOKIE_SIZE} bytes.`,
		emptyCookieSize: ESTIMATED_EMPTY_COOKIE_SIZE,
		valueSize: cookie.value.length,
		chunkCount,
		chunks: cookies.map((c) => c.value.length + ESTIMATED_EMPTY_COOKIE_SIZE)
	});
	return cookies;
}
/**
* Get all cookies that should be cleaned (removed)
*/
function getCleanCookies(chunks, cookieOptions) {
	const cleanedChunks = {};
	for (const name in chunks) cleanedChunks[name] = {
		name,
		value: "",
		attributes: {
			...cookieOptions,
			maxAge: 0
		}
	};
	return cleanedChunks;
}
/**
* Create a session store for handling cookie chunking.
* When session data exceeds 4KB, it automatically splits it into multiple cookies.
*
* Based on next-auth's SessionStore implementation.
* @see https://github.com/nextauthjs/next-auth/blob/27b2519b84b8eb9cf053775dea29d577d2aa0098/packages/next-auth/src/core/lib/cookie.ts
*/
var storeFactory = (storeName) => (cookieName, cookieOptions, ctx) => {
	const chunks = readExistingChunks(cookieName, ctx);
	const logger = ctx.context.logger;
	return {
		getValue() {
			return joinChunks(chunks);
		},
		hasChunks() {
			return Object.keys(chunks).length > 0;
		},
		chunk(value, options) {
			const cleanedChunks = getCleanCookies(chunks, cookieOptions);
			for (const name in chunks) delete chunks[name];
			const cookies = cleanedChunks;
			const chunked = chunkCookie(storeName, {
				name: cookieName,
				value,
				attributes: {
					...cookieOptions,
					...options
				}
			}, chunks, logger);
			for (const chunk of chunked) cookies[chunk.name] = chunk;
			return Object.values(cookies);
		},
		clean() {
			const cleanedChunks = getCleanCookies(chunks, cookieOptions);
			for (const name in chunks) delete chunks[name];
			return Object.values(cleanedChunks);
		},
		setCookies(cookies) {
			for (const cookie of cookies) ctx.setCookie(cookie.name, cookie.value, cookie.attributes);
		}
	};
};
var createSessionStore = storeFactory("Session");
var createAccountStore = storeFactory("Account");
function getChunkedCookie(ctx, cookieName) {
	const value = ctx.getCookie(cookieName);
	if (value) return value;
	const chunks = [];
	const cookieHeader = ctx.headers?.get("cookie");
	if (!cookieHeader) return null;
	const cookies = {};
	const pairs = cookieHeader.split("; ");
	for (const pair of pairs) {
		const [name, ...valueParts] = pair.split("=");
		if (name && valueParts.length > 0) cookies[name] = valueParts.join("=");
	}
	for (const [name, val] of Object.entries(cookies)) if (name.startsWith(cookieName + ".")) {
		const indexStr = name.split(".").at(-1);
		const index = parseInt(indexStr || "0", 10);
		if (!isNaN(index)) chunks.push({
			index,
			value: val
		});
	}
	if (chunks.length > 0) {
		chunks.sort((a, b) => a.index - b.index);
		return chunks.map((c) => c.value).join("");
	}
	return null;
}
async function setAccountCookie(c, accountData) {
	const accountDataCookie = c.context.authCookies.accountData;
	const options = {
		maxAge: 300,
		...accountDataCookie.attributes
	};
	const data = await symmetricEncodeJWT(accountData, c.context.secretConfig, "better-auth-account", options.maxAge);
	if (data.length > ALLOWED_COOKIE_SIZE) {
		const accountStore = createAccountStore(accountDataCookie.name, options, c);
		const cookies = accountStore.chunk(data, options);
		accountStore.setCookies(cookies);
	} else {
		const accountStore = createAccountStore(accountDataCookie.name, options, c);
		if (accountStore.hasChunks()) {
			const cleanCookies = accountStore.clean();
			accountStore.setCookies(cleanCookies);
		}
		c.setCookie(accountDataCookie.name, data, options);
	}
}
async function getAccountCookie(c) {
	const accountCookie = getChunkedCookie(c, c.context.authCookies.accountData.name);
	if (accountCookie) {
		const accountData = safeJSONParse(await symmetricDecodeJWT(accountCookie, c.context.secretConfig, "better-auth-account"));
		if (accountData) return accountData;
	}
	return null;
}
var getSessionQuerySchema$1 = optional(object({
	disableCookieCache: boolean$1().meta({ description: "Disable cookie cache and fetch session from database" }).optional(),
	disableRefresh: boolean$1().meta({ description: "Disable session refresh. Useful for checking session status, without updating the session" }).optional()
}));
var SEC = 1e3;
var MIN = SEC * 60;
var HOUR = MIN * 60;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var MONTH = DAY * 30;
var YEAR = DAY * 365.25;
var REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mo|years?|yrs?|y)(?: (ago|from now))?$/i;
function parse(value) {
	const match = REGEX.exec(value);
	if (!match || match[4] && match[1]) throw new TypeError(`Invalid time string format: "${value}". Use formats like "7d", "30m", "1 hour", etc.`);
	const n = parseFloat(match[2]);
	const unit = match[3].toLowerCase();
	let result;
	switch (unit) {
		case "years":
		case "year":
		case "yrs":
		case "yr":
		case "y":
			result = n * YEAR;
			break;
		case "months":
		case "month":
		case "mo":
			result = n * MONTH;
			break;
		case "weeks":
		case "week":
		case "w":
			result = n * WEEK;
			break;
		case "days":
		case "day":
		case "d":
			result = n * DAY;
			break;
		case "hours":
		case "hour":
		case "hrs":
		case "hr":
		case "h":
			result = n * HOUR;
			break;
		case "minutes":
		case "minute":
		case "mins":
		case "min":
		case "m":
			result = n * MIN;
			break;
		case "seconds":
		case "second":
		case "secs":
		case "sec":
		case "s":
			result = n * SEC;
			break;
		default: throw new TypeError(`Unknown time unit: "${unit}"`);
	}
	if (match[1] === "-" || match[4] === "ago") return -result;
	return result;
}
/**
* Parse a time string and return the value in milliseconds.
*
* @param value - A time string like "7d", "30m", "1 hour", "2 hours ago"
* @returns The parsed value in milliseconds
* @throws TypeError if the string format is invalid
*
* @example
* ms("1d")          // 86400000
* ms("2 hours")     // 7200000
* ms("30s")         // 30000
* ms("2 hours ago") // -7200000
*/
function ms(value) {
	return parse(value);
}
/**
* Parse a time string and return the value in seconds.
*
* @param value - A time string like "7d", "30m", "1 hour", "2 hours ago"
* @returns The parsed value in seconds (rounded)
* @throws TypeError if the string format is invalid
*
* @example
* sec("1d")          // 86400
* sec("2 hours")     // 7200
* sec("-30s")        // -30
* sec("2 hours ago") // -7200
*/
function sec(value) {
	return Math.round(parse(value) / 1e3);
}
var SECURE_COOKIE_PREFIX = "__Secure-";
function createCookieGetter(options) {
	const baseURLString = typeof options.baseURL === "string" ? options.baseURL : void 0;
	const dynamicProtocol = typeof options.baseURL === "object" && options.baseURL !== null ? options.baseURL.protocol : void 0;
	const secureCookiePrefix = (options.advanced?.useSecureCookies !== void 0 ? options.advanced?.useSecureCookies : dynamicProtocol === "https" ? true : dynamicProtocol === "http" ? false : baseURLString ? baseURLString.startsWith("https://") : isProduction) ? SECURE_COOKIE_PREFIX : "";
	const crossSubdomainEnabled = !!options.advanced?.crossSubDomainCookies?.enabled;
	const domain = crossSubdomainEnabled ? options.advanced?.crossSubDomainCookies?.domain || (baseURLString ? new URL(baseURLString).hostname : void 0) : void 0;
	if (crossSubdomainEnabled && !domain && !isDynamicBaseURLConfig(options.baseURL)) throw new BetterAuthError("baseURL is required when crossSubdomainCookies are enabled.");
	function createCookie(cookieName, overrideAttributes = {}) {
		const prefix = options.advanced?.cookiePrefix || "better-auth";
		const name = options.advanced?.cookies?.[cookieName]?.name || `${prefix}.${cookieName}`;
		const attributes = options.advanced?.cookies?.[cookieName]?.attributes ?? {};
		return {
			name: `${secureCookiePrefix}${name}`,
			attributes: {
				secure: !!secureCookiePrefix,
				sameSite: "lax",
				path: "/",
				httpOnly: true,
				...crossSubdomainEnabled ? { domain } : {},
				...options.advanced?.defaultCookieAttributes,
				...overrideAttributes,
				...attributes
			}
		};
	}
	return createCookie;
}
function getCookies(options) {
	const createCookie = createCookieGetter(options);
	const sessionToken = createCookie("session_token", { maxAge: options.session?.expiresIn || sec("7d") });
	const sessionData = createCookie("session_data", { maxAge: options.session?.cookieCache?.maxAge || 300 });
	const accountData = createCookie("account_data", { maxAge: options.session?.cookieCache?.maxAge || 300 });
	const dontRememberToken = createCookie("dont_remember");
	return {
		sessionToken: {
			name: sessionToken.name,
			attributes: sessionToken.attributes
		},
		sessionData: {
			name: sessionData.name,
			attributes: sessionData.attributes
		},
		dontRememberToken: {
			name: dontRememberToken.name,
			attributes: dontRememberToken.attributes
		},
		accountData: {
			name: accountData.name,
			attributes: accountData.attributes
		}
	};
}
async function setCookieCache(ctx, session, dontRememberMe) {
	if (!ctx.context.options.session?.cookieCache?.enabled) return;
	const filteredSession = filterOutputFields(session.session, ctx.context.options.session?.additionalFields);
	const filteredUser = parseUserOutput(ctx.context.options, session.user);
	const versionConfig = ctx.context.options.session?.cookieCache?.version;
	let version = "1";
	if (versionConfig) {
		if (typeof versionConfig === "string") version = versionConfig;
		else if (typeof versionConfig === "function") {
			const result = versionConfig(session.session, session.user);
			version = isPromise(result) ? await result : result;
		}
	}
	const sessionData = {
		session: filteredSession,
		user: filteredUser,
		updatedAt: Date.now(),
		version
	};
	const options = {
		...ctx.context.authCookies.sessionData.attributes,
		maxAge: dontRememberMe ? void 0 : ctx.context.authCookies.sessionData.attributes.maxAge
	};
	const expiresAtDate = getDate(options.maxAge || 60, "sec").getTime();
	const strategy = ctx.context.options.session?.cookieCache?.strategy || "compact";
	let data;
	if (strategy === "jwe") data = await symmetricEncodeJWT(sessionData, ctx.context.secretConfig, "better-auth-session", options.maxAge || 300);
	else if (strategy === "jwt") data = await signJWT(sessionData, ctx.context.secret, options.maxAge || 300);
	else data = base64Url.encode(JSON.stringify({
		session: sessionData,
		expiresAt: expiresAtDate,
		signature: await createHMAC("SHA-256", "base64urlnopad").sign(ctx.context.secret, JSON.stringify({
			...sessionData,
			expiresAt: expiresAtDate
		}))
	}), { padding: false });
	if (data.length > 4093) {
		const sessionStore = createSessionStore(ctx.context.authCookies.sessionData.name, options, ctx);
		const cookies = sessionStore.chunk(data, options);
		sessionStore.setCookies(cookies);
	} else {
		const sessionStore = createSessionStore(ctx.context.authCookies.sessionData.name, options, ctx);
		if (sessionStore.hasChunks()) {
			const cleanCookies = sessionStore.clean();
			sessionStore.setCookies(cleanCookies);
		}
		ctx.setCookie(ctx.context.authCookies.sessionData.name, data, options);
	}
	if (ctx.context.options.account?.storeAccountCookie) {
		const accountData = await getAccountCookie(ctx);
		if (accountData) await setAccountCookie(ctx, accountData);
	}
}
async function setSessionCookie(ctx, session, dontRememberMe, overrides) {
	const dontRememberMeCookie = await ctx.getSignedCookie(ctx.context.authCookies.dontRememberToken.name, ctx.context.secret);
	dontRememberMe = dontRememberMe !== void 0 ? dontRememberMe : !!dontRememberMeCookie;
	const options = ctx.context.authCookies.sessionToken.attributes;
	const maxAge = dontRememberMe ? void 0 : ctx.context.sessionConfig.expiresIn;
	await ctx.setSignedCookie(ctx.context.authCookies.sessionToken.name, session.session.token, ctx.context.secret, {
		...options,
		maxAge,
		...overrides
	});
	if (dontRememberMe) await ctx.setSignedCookie(ctx.context.authCookies.dontRememberToken.name, "true", ctx.context.secret, ctx.context.authCookies.dontRememberToken.attributes);
	await setCookieCache(ctx, session, dontRememberMe);
	ctx.context.setNewSession(session);
}
/**
* Expires a cookie by setting `maxAge: 0` while preserving its attributes
*/
function expireCookie(ctx, cookie) {
	ctx.setCookie(cookie.name, "", {
		...cookie.attributes,
		maxAge: 0
	});
}
function deleteSessionCookie(ctx, skipDontRememberMe) {
	expireCookie(ctx, ctx.context.authCookies.sessionToken);
	expireCookie(ctx, ctx.context.authCookies.sessionData);
	if (ctx.context.options.account?.storeAccountCookie) {
		expireCookie(ctx, ctx.context.authCookies.accountData);
		const accountStore = createAccountStore(ctx.context.authCookies.accountData.name, ctx.context.authCookies.accountData.attributes, ctx);
		const cleanCookies = accountStore.clean();
		accountStore.setCookies(cleanCookies);
	}
	if (ctx.context.oauthConfig.storeStateStrategy === "cookie") expireCookie(ctx, ctx.context.createAuthCookie("oauth_state"));
	const sessionStore = createSessionStore(ctx.context.authCookies.sessionData.name, ctx.context.authCookies.sessionData.attributes, ctx);
	const cleanCookies = sessionStore.clean();
	sessionStore.setCookies(cleanCookies);
	if (!skipDontRememberMe) expireCookie(ctx, ctx.context.authCookies.dontRememberToken);
}
var stateDataSchema = looseObject({
	callbackURL: string(),
	codeVerifier: string(),
	errorURL: string().optional(),
	newUserURL: string().optional(),
	expiresAt: number(),
	link: object({
		email: string(),
		userId: string$1()
	}).optional(),
	requestSignUp: boolean$2().optional()
});
var StateError = class extends BetterAuthError {
	code;
	details;
	constructor(message, options) {
		super(message, options);
		this.code = options.code;
		this.details = options.details;
	}
};
async function generateGenericState(c, stateData, settings) {
	const state = generateRandomString(32);
	if (c.context.oauthConfig.storeStateStrategy === "cookie") {
		const encryptedData = await symmetricEncrypt({
			key: c.context.secretConfig,
			data: JSON.stringify(stateData)
		});
		const stateCookie = c.context.createAuthCookie(settings?.cookieName ?? "oauth_state", { maxAge: 600 });
		c.setCookie(stateCookie.name, encryptedData, stateCookie.attributes);
		return {
			state,
			codeVerifier: stateData.codeVerifier
		};
	}
	const stateCookie = c.context.createAuthCookie(settings?.cookieName ?? "state", { maxAge: 300 });
	await c.setSignedCookie(stateCookie.name, state, c.context.secret, stateCookie.attributes);
	const expiresAt = /* @__PURE__ */ new Date();
	expiresAt.setMinutes(expiresAt.getMinutes() + 10);
	const verification = await c.context.internalAdapter.createVerificationValue({
		value: JSON.stringify(stateData),
		identifier: state,
		expiresAt
	});
	if (!verification) throw new StateError("Unable to create verification. Make sure the database adapter is properly working and there is a verification table in the database", { code: "state_generation_error" });
	return {
		state: verification.identifier,
		codeVerifier: stateData.codeVerifier
	};
}
async function parseGenericState(c, state, settings) {
	const storeStateStrategy = c.context.oauthConfig.storeStateStrategy;
	let parsedData;
	if (storeStateStrategy === "cookie") {
		const stateCookie = c.context.createAuthCookie(settings?.cookieName ?? "oauth_state");
		const encryptedData = c.getCookie(stateCookie.name);
		if (!encryptedData) throw new StateError("State mismatch: auth state cookie not found", {
			code: "state_mismatch",
			details: { state }
		});
		try {
			const decryptedData = await symmetricDecrypt({
				key: c.context.secretConfig,
				data: encryptedData
			});
			parsedData = stateDataSchema.parse(JSON.parse(decryptedData));
		} catch (error) {
			throw new StateError("State invalid: Failed to decrypt or parse auth state", {
				code: "state_invalid",
				details: { state },
				cause: error
			});
		}
		expireCookie(c, stateCookie);
	} else {
		const data = await c.context.internalAdapter.findVerificationValue(state);
		if (!data) throw new StateError("State mismatch: verification not found", {
			code: "state_mismatch",
			details: { state }
		});
		parsedData = stateDataSchema.parse(JSON.parse(data.value));
		const stateCookie = c.context.createAuthCookie(settings?.cookieName ?? "state");
		const stateCookieValue = await c.getSignedCookie(stateCookie.name, c.context.secret);
		if (!c.context.oauthConfig.skipStateCookieCheck && (!stateCookieValue || stateCookieValue !== state)) throw new StateError("State mismatch: State not persisted correctly", {
			code: "state_security_mismatch",
			details: { state }
		});
		expireCookie(c, stateCookie);
		await c.context.internalAdapter.deleteVerificationByIdentifier(state);
	}
	if (parsedData.expiresAt < Date.now()) throw new StateError("Invalid state: request expired", {
		code: "state_mismatch",
		details: { expiresAt: parsedData.expiresAt }
	});
	return parsedData;
}
var { get: getOAuthState, set: setOAuthState } = defineRequestState(() => null);
async function generateState(c, link, additionalData) {
	const callbackURL = c.body?.callbackURL || c.context.options.baseURL;
	if (!callbackURL) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.CALLBACK_URL_REQUIRED);
	const codeVerifier = generateRandomString(128);
	const stateData = {
		...additionalData ? additionalData : {},
		callbackURL,
		codeVerifier,
		errorURL: c.body?.errorCallbackURL,
		newUserURL: c.body?.newUserCallbackURL,
		link,
		expiresAt: Date.now() + 600 * 1e3,
		requestSignUp: c.body?.requestSignUp
	};
	await setOAuthState(stateData);
	try {
		return generateGenericState(c, stateData);
	} catch (error) {
		c.context.logger.error("Failed to create verification", error);
		throw new APIError("INTERNAL_SERVER_ERROR", {
			message: "Unable to create verification",
			cause: error
		});
	}
}
async function parseState(c) {
	const state = c.query.state || c.body.state;
	const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
	let parsedData;
	try {
		parsedData = await parseGenericState(c, state);
	} catch (error) {
		c.context.logger.error("Failed to parse state", error);
		if (error instanceof StateError && error.code === "state_security_mismatch") throw c.redirect(`${errorURL}?error=state_mismatch`);
		throw c.redirect(`${errorURL}?error=please_restart_the_process`);
	}
	if (!parsedData.errorURL) parsedData.errorURL = errorURL;
	if (parsedData) await setOAuthState(parsedData);
	return parsedData;
}
var HIDE_METADATA = { scope: "server" };
function isAPIError(error) {
	return error instanceof APIError$1 || error instanceof APIError || error?.name === "APIError";
}
/**
* Matches the given url against an origin or origin pattern
* See "options.trustedOrigins" for details of supported patterns
*
* @param url The url to test
* @param pattern The origin pattern
* @param [settings] Specify supported pattern matching settings
* @returns {boolean} true if the URL matches the origin pattern, false otherwise.
*/
var matchesOriginPattern = (url, pattern, settings) => {
	if (url.startsWith("/")) {
		if (settings?.allowRelativePaths) return url.startsWith("/") && /^\/(?!\/|\\|%2f|%5c)[\w\-.\+/@]*(?:\?[\w\-.\+/=&%@]*)?$/.test(url);
		return false;
	}
	if (pattern.includes("*") || pattern.includes("?")) {
		if (pattern.includes("://")) return wildcardMatch(pattern)(getOrigin(url) || url);
		const host = getHost(url);
		if (!host) return false;
		return wildcardMatch(pattern)(host);
	}
	const protocol = getProtocol(url);
	return protocol === "http:" || protocol === "https:" || !protocol ? pattern === getOrigin(url) : url.startsWith(pattern);
};
/**
* Checks if CSRF should be skipped for backward compatibility.
* Previously, disableOriginCheck also disabled CSRF checks.
* This maintains that behavior when disableCSRFCheck isn't explicitly set.
* Only triggers for skipOriginCheck === true, not for path arrays.
*/
function shouldSkipCSRFForBackwardCompat(ctx) {
	return ctx.context.skipOriginCheck === true && ctx.context.options.advanced?.disableCSRFCheck === void 0;
}
/**
* Logs deprecation warning for users relying on coupled behavior.
* Only logs if user explicitly set disableOriginCheck (not test environment default).
*/
var logBackwardCompatWarning = deprecate(function logBackwardCompatWarning() {}, "disableOriginCheck: true currently also disables CSRF checks. In a future version, disableOriginCheck will ONLY disable URL validation. To keep CSRF disabled, add disableCSRFCheck: true to your config.");
/**
* A middleware to validate callbackURL and origin against trustedOrigins.
* Also handles CSRF protection using Fetch Metadata for first-login scenarios.
*/
var originCheckMiddleware = createAuthMiddleware(async (ctx) => {
	if (ctx.request?.method === "GET" || ctx.request?.method === "OPTIONS" || ctx.request?.method === "HEAD" || !ctx.request) return;
	await validateOrigin(ctx);
	if (ctx.context.skipOriginCheck) return;
	const { body, query } = ctx;
	const callbackURL = body?.callbackURL || query?.callbackURL;
	const redirectURL = body?.redirectTo;
	const errorCallbackURL = body?.errorCallbackURL;
	const newUserCallbackURL = body?.newUserCallbackURL;
	const validateURL = (url, label) => {
		if (!url) return;
		if (!ctx.context.isTrustedOrigin(url, { allowRelativePaths: label !== "origin" })) {
			ctx.context.logger.error(`Invalid ${label}: ${url}`);
			ctx.context.logger.info(`If it's a valid URL, please add ${url} to trustedOrigins in your auth config\n`, `Current list of trustedOrigins: ${ctx.context.trustedOrigins}`);
			if (label === "origin") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ORIGIN);
			if (label === "callbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_CALLBACK_URL);
			if (label === "redirectURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_REDIRECT_URL);
			if (label === "errorCallbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ERROR_CALLBACK_URL);
			if (label === "newUserCallbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_NEW_USER_CALLBACK_URL);
			throw APIError.fromStatus("FORBIDDEN", { message: `Invalid ${label}` });
		}
	};
	callbackURL && validateURL(callbackURL, "callbackURL");
	redirectURL && validateURL(redirectURL, "redirectURL");
	errorCallbackURL && validateURL(errorCallbackURL, "errorCallbackURL");
	newUserCallbackURL && validateURL(newUserCallbackURL, "newUserCallbackURL");
});
var originCheck = (getValue) => createAuthMiddleware(async (ctx) => {
	if (!ctx.request) return;
	if (ctx.context.skipOriginCheck) return;
	const callbackURL = getValue(ctx);
	const validateURL = (url, label) => {
		if (!url) return;
		if (!ctx.context.isTrustedOrigin(url, { allowRelativePaths: label !== "origin" })) {
			ctx.context.logger.error(`Invalid ${label}: ${url}`);
			ctx.context.logger.info(`If it's a valid URL, please add ${url} to trustedOrigins in your auth config\n`, `Current list of trustedOrigins: ${ctx.context.trustedOrigins}`);
			if (label === "origin") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ORIGIN);
			if (label === "callbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_CALLBACK_URL);
			if (label === "redirectURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_REDIRECT_URL);
			if (label === "errorCallbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ERROR_CALLBACK_URL);
			if (label === "newUserCallbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_NEW_USER_CALLBACK_URL);
			throw APIError.fromStatus("FORBIDDEN", { message: `Invalid ${label}` });
		}
	};
	const callbacks = Array.isArray(callbackURL) ? callbackURL : [callbackURL];
	for (const url of callbacks) validateURL(url, "callbackURL");
});
/**
* Validates origin header against trusted origins.
* @param ctx - The endpoint context
* @param forceValidate - If true, always validate origin regardless of cookies/skip flags
*/
async function validateOrigin(ctx, forceValidate = false) {
	const headers = ctx.request?.headers;
	if (!headers || !ctx.request) return;
	const originHeader = headers.get("origin") || headers.get("referer") || "";
	const useCookies = headers.has("cookie");
	if (ctx.context.skipCSRFCheck) return;
	if (shouldSkipCSRFForBackwardCompat(ctx)) {
		ctx.context.options.advanced?.disableOriginCheck === true && logBackwardCompatWarning();
		return;
	}
	const skipOriginCheck = ctx.context.skipOriginCheck;
	if (Array.isArray(skipOriginCheck)) try {
		const basePath = new URL(ctx.context.baseURL).pathname;
		const currentPath = normalizePathname(ctx.request.url, basePath);
		if (skipOriginCheck.some((skipPath) => currentPath.startsWith(skipPath))) return;
	} catch {}
	if (!(forceValidate || useCookies)) return;
	if (!originHeader || originHeader === "null") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.MISSING_OR_NULL_ORIGIN);
	const trustedOrigins = Array.isArray(ctx.context.options.trustedOrigins) ? ctx.context.trustedOrigins : [...ctx.context.trustedOrigins, ...(await ctx.context.options.trustedOrigins?.(ctx.request))?.filter((v) => Boolean(v)) || []];
	if (!trustedOrigins.some((origin) => matchesOriginPattern(originHeader, origin))) {
		ctx.context.logger.error(`Invalid origin: ${originHeader}`);
		ctx.context.logger.info(`If it's a valid URL, please add ${originHeader} to trustedOrigins in your auth config\n`, `Current list of trustedOrigins: ${trustedOrigins}`);
		throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ORIGIN);
	}
}
/**
* Middleware for CSRF protection using Fetch Metadata headers.
* This prevents cross-site navigation login attacks while supporting progressive enhancement.
*/
var formCsrfMiddleware = createAuthMiddleware(async (ctx) => {
	if (!ctx.request) return;
	await validateFormCsrf(ctx);
});
/**
* Validates CSRF protection for first-login scenarios using Fetch Metadata headers.
* This prevents cross-site form submission attacks while supporting progressive enhancement.
*/
async function validateFormCsrf(ctx) {
	const req = ctx.request;
	if (!req) return;
	if (ctx.context.skipCSRFCheck) return;
	if (shouldSkipCSRFForBackwardCompat(ctx)) return;
	const headers = req.headers;
	if (headers.has("cookie")) return await validateOrigin(ctx);
	const site = headers.get("Sec-Fetch-Site");
	const mode = headers.get("Sec-Fetch-Mode");
	const dest = headers.get("Sec-Fetch-Dest");
	if (Boolean(site && site.trim() || mode && mode.trim() || dest && dest.trim())) {
		if (site === "cross-site" && mode === "navigate") {
			ctx.context.logger.error("Blocked cross-site navigation login attempt (CSRF protection)", {
				secFetchSite: site,
				secFetchMode: mode,
				secFetchDest: dest
			});
			throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.CROSS_SITE_NAVIGATION_LOGIN_BLOCKED);
		}
		return await validateOrigin(ctx, true);
	}
}
var LOCALHOST_IP = "127.0.0.1";
function getIp(req, options) {
	if (options.advanced?.ipAddress?.disableIpTracking) return null;
	const headers = "headers" in req ? req.headers : req;
	const ipHeaders = options.advanced?.ipAddress?.ipAddressHeaders || ["x-forwarded-for"];
	for (const key of ipHeaders) {
		const value = "get" in headers ? headers.get(key) : headers[key];
		if (typeof value === "string") {
			const ip = value.split(",")[0].trim();
			if (isValidIP(ip)) return normalizeIP(ip, { ipv6Subnet: options.advanced?.ipAddress?.ipv6Subnet });
		}
	}
	if (isTest() || isDevelopment()) return LOCALHOST_IP;
	return null;
}
var memory = /* @__PURE__ */ new Map();
function shouldRateLimit(max, window, rateLimitData) {
	const now = Date.now();
	const windowInMs = window * 1e3;
	return now - rateLimitData.lastRequest < windowInMs && rateLimitData.count >= max;
}
function rateLimitResponse(retryAfter) {
	return new Response(JSON.stringify({ message: "Too many requests. Please try again later." }), {
		status: 429,
		statusText: "Too Many Requests",
		headers: { "X-Retry-After": retryAfter.toString() }
	});
}
function getRetryAfter(lastRequest, window) {
	const now = Date.now();
	const windowInMs = window * 1e3;
	return Math.ceil((lastRequest + windowInMs - now) / 1e3);
}
function createDatabaseStorageWrapper(ctx) {
	const model = "rateLimit";
	const db = ctx.adapter;
	return {
		get: async (key) => {
			const data = (await db.findMany({
				model,
				where: [{
					field: "key",
					value: key
				}]
			}))[0];
			if (typeof data?.lastRequest === "bigint") data.lastRequest = Number(data.lastRequest);
			return data;
		},
		set: async (key, value, _update) => {
			try {
				if (_update) await db.updateMany({
					model,
					where: [{
						field: "key",
						value: key
					}],
					update: {
						count: value.count,
						lastRequest: value.lastRequest
					}
				});
				else await db.create({
					model,
					data: {
						key,
						count: value.count,
						lastRequest: value.lastRequest
					}
				});
			} catch (e) {
				ctx.logger.error("Error setting rate limit", e);
			}
		}
	};
}
function getRateLimitStorage(ctx, rateLimitSettings) {
	if (ctx.options.rateLimit?.customStorage) return ctx.options.rateLimit.customStorage;
	const storage = ctx.rateLimit.storage;
	if (storage === "secondary-storage") return {
		get: async (key) => {
			const data = await ctx.options.secondaryStorage?.get(key);
			return data ? safeJSONParse(data) : null;
		},
		set: async (key, value, _update) => {
			const ttl = rateLimitSettings?.window ?? ctx.options.rateLimit?.window ?? 10;
			await ctx.options.secondaryStorage?.set?.(key, JSON.stringify(value), ttl);
		}
	};
	else if (storage === "memory") return {
		async get(key) {
			const entry = memory.get(key);
			if (!entry) return null;
			if (Date.now() >= entry.expiresAt) {
				memory.delete(key);
				return null;
			}
			return entry.data;
		},
		async set(key, value, _update) {
			const ttl = rateLimitSettings?.window ?? ctx.options.rateLimit?.window ?? 10;
			const expiresAt = Date.now() + ttl * 1e3;
			memory.set(key, {
				data: value,
				expiresAt
			});
		}
	};
	return createDatabaseStorageWrapper(ctx);
}
var ipWarningLogged = false;
async function resolveRateLimitConfig(req, ctx) {
	const basePath = new URL(ctx.baseURL).pathname;
	const path = normalizePathname(req.url, basePath);
	let currentWindow = ctx.rateLimit.window;
	let currentMax = ctx.rateLimit.max;
	const ip = getIp(req, ctx.options);
	if (!ip) {
		if (!ipWarningLogged) {
			ctx.logger.warn("Rate limiting skipped: could not determine client IP address. If you're behind a reverse proxy, make sure to configure `trustedProxies` in your auth config.");
			ipWarningLogged = true;
		}
		return null;
	}
	const key = createRateLimitKey(ip, path);
	const specialRule = getDefaultSpecialRules().find((rule) => rule.pathMatcher(path));
	if (specialRule) {
		currentWindow = specialRule.window;
		currentMax = specialRule.max;
	}
	for (const plugin of ctx.options.plugins || []) if (plugin.rateLimit) {
		const matchedRule = plugin.rateLimit.find((rule) => rule.pathMatcher(path));
		if (matchedRule) {
			currentWindow = matchedRule.window;
			currentMax = matchedRule.max;
			break;
		}
	}
	if (ctx.rateLimit.customRules) {
		const _path = Object.keys(ctx.rateLimit.customRules).find((p) => {
			if (p.includes("*")) return wildcardMatch(p)(path);
			return p === path;
		});
		if (_path) {
			const customRule = ctx.rateLimit.customRules[_path];
			const resolved = typeof customRule === "function" ? await customRule(req, {
				window: currentWindow,
				max: currentMax
			}) : customRule;
			if (resolved) {
				currentWindow = resolved.window;
				currentMax = resolved.max;
			}
			if (resolved === false) return null;
		}
	}
	return {
		key,
		currentWindow,
		currentMax
	};
}
async function onRequestRateLimit(req, ctx) {
	if (!ctx.rateLimit.enabled) return;
	const config = await resolveRateLimitConfig(req, ctx);
	if (!config) return;
	const { key, currentWindow, currentMax } = config;
	const data = await getRateLimitStorage(ctx, { window: currentWindow }).get(key);
	if (data && shouldRateLimit(currentMax, currentWindow, data)) return rateLimitResponse(getRetryAfter(data.lastRequest, currentWindow));
}
async function onResponseRateLimit(req, ctx) {
	if (!ctx.rateLimit.enabled) return;
	const config = await resolveRateLimitConfig(req, ctx);
	if (!config) return;
	const { key, currentWindow } = config;
	const storage = getRateLimitStorage(ctx, { window: currentWindow });
	const data = await storage.get(key);
	const now = Date.now();
	if (!data) await storage.set(key, {
		key,
		count: 1,
		lastRequest: now
	});
	else if (now - data.lastRequest > currentWindow * 1e3) await storage.set(key, {
		...data,
		count: 1,
		lastRequest: now
	}, true);
	else await storage.set(key, {
		...data,
		count: data.count + 1,
		lastRequest: now
	}, true);
}
function getDefaultSpecialRules() {
	return [{
		pathMatcher(path) {
			return path.startsWith("/sign-in") || path.startsWith("/sign-up") || path.startsWith("/change-password") || path.startsWith("/change-email");
		},
		window: 10,
		max: 3
	}, {
		pathMatcher(path) {
			return path === "/request-password-reset" || path === "/send-verification-email" || path.startsWith("/forget-password") || path === "/email-otp/send-verification-otp" || path === "/email-otp/request-password-reset";
		},
		window: 60,
		max: 3
	}];
}
/**
* State for skipping session refresh
*
* In some cases, such as when using server-side rendering (SSR) or when dealing with
* certain types of requests, it may be necessary to skip session refresh to prevent
* potential inconsistencies between the session data in the database and the session
* data stored in cookies.
*/
var { get: getShouldSkipSessionRefresh, set: setShouldSkipSessionRefresh } = defineRequestState(() => false);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
function getSchema$1(config) {
	const tables = getAuthTables(config);
	const schema = {};
	for (const key in tables) {
		const table = tables[key];
		const fields = table.fields;
		const actualFields = {};
		Object.entries(fields).forEach(([key, field]) => {
			actualFields[field.fieldName || key] = field;
			if (field.references) {
				const refTable = tables[field.references.model];
				if (refTable) actualFields[field.fieldName || key].references = {
					...field.references,
					model: refTable.modelName,
					field: field.references.field
				};
			}
		});
		if (schema[table.modelName]) {
			schema[table.modelName].fields = {
				...schema[table.modelName].fields,
				...actualFields
			};
			continue;
		}
		schema[table.modelName] = {
			fields: actualFields,
			order: table.order || Infinity
		};
	}
	return schema;
}
function convertToDB(fields, values) {
	const result = values.id ? { id: values.id } : {};
	for (const key in fields) {
		const field = fields[key];
		const value = values[key];
		if (value === void 0) continue;
		result[field.fieldName || key] = value;
	}
	return result;
}
function convertFromDB(fields, values) {
	if (!values) return null;
	const result = { id: values.id };
	for (const [key, value] of Object.entries(fields)) result[key] = values[value.fieldName || key];
	return result;
}
function getWithHooks(adapter, ctx) {
	const hooks = ctx.hooks;
	async function createWithHooks(data, model, customCreateFn) {
		const context = await getCurrentAuthContext().catch(() => null);
		let actualData = data;
		for (const hook of hooks || []) {
			const toRun = hook[model]?.create?.before;
			if (toRun) {
				const result = await toRun(actualData, context);
				if (result === false) return null;
				if (typeof result === "object" && "data" in result) actualData = {
					...actualData,
					...result.data
				};
			}
		}
		let created = null;
		if (!customCreateFn || customCreateFn.executeMainFn) created = await (await getCurrentAdapter(adapter)).create({
			model,
			data: actualData,
			forceAllowId: true
		});
		if (customCreateFn?.fn) created = await customCreateFn.fn(created ?? actualData);
		for (const hook of hooks || []) {
			const toRun = hook[model]?.create?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await toRun(created, context);
			});
		}
		return created;
	}
	async function updateWithHooks(data, where, model, customUpdateFn) {
		const context = await getCurrentAuthContext().catch(() => null);
		let actualData = data;
		for (const hook of hooks || []) {
			const toRun = hook[model]?.update?.before;
			if (toRun) {
				const result = await toRun(data, context);
				if (result === false) return null;
				if (typeof result === "object" && "data" in result) actualData = {
					...actualData,
					...result.data
				};
			}
		}
		const customUpdated = customUpdateFn ? await customUpdateFn.fn(actualData) : null;
		const updated = !customUpdateFn || customUpdateFn.executeMainFn ? await (await getCurrentAdapter(adapter)).update({
			model,
			update: actualData,
			where
		}) : customUpdated;
		for (const hook of hooks || []) {
			const toRun = hook[model]?.update?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await toRun(updated, context);
			});
		}
		return updated;
	}
	async function updateManyWithHooks(data, where, model, customUpdateFn) {
		const context = await getCurrentAuthContext().catch(() => null);
		let actualData = data;
		for (const hook of hooks || []) {
			const toRun = hook[model]?.update?.before;
			if (toRun) {
				const result = await toRun(data, context);
				if (result === false) return null;
				if (typeof result === "object" && "data" in result) actualData = {
					...actualData,
					...result.data
				};
			}
		}
		const customUpdated = customUpdateFn ? await customUpdateFn.fn(actualData) : null;
		const updated = !customUpdateFn || customUpdateFn.executeMainFn ? await (await getCurrentAdapter(adapter)).updateMany({
			model,
			update: actualData,
			where
		}) : customUpdated;
		for (const hook of hooks || []) {
			const toRun = hook[model]?.update?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await toRun(updated, context);
			});
		}
		return updated;
	}
	async function deleteWithHooks(where, model, customDeleteFn) {
		const context = await getCurrentAuthContext().catch(() => null);
		let entityToDelete = null;
		try {
			entityToDelete = (await (await getCurrentAdapter(adapter)).findMany({
				model,
				where,
				limit: 1
			}))[0] || null;
		} catch {}
		if (entityToDelete) for (const hook of hooks || []) {
			const toRun = hook[model]?.delete?.before;
			if (toRun) {
				if (await toRun(entityToDelete, context) === false) return null;
			}
		}
		const customDeleted = customDeleteFn ? await customDeleteFn.fn(where) : null;
		const deleted = (!customDeleteFn || customDeleteFn.executeMainFn) && entityToDelete ? await (await getCurrentAdapter(adapter)).delete({
			model,
			where
		}) : customDeleted;
		if (entityToDelete) for (const hook of hooks || []) {
			const toRun = hook[model]?.delete?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await toRun(entityToDelete, context);
			});
		}
		return deleted;
	}
	async function deleteManyWithHooks(where, model, customDeleteFn) {
		const context = await getCurrentAuthContext().catch(() => null);
		let entitiesToDelete = [];
		try {
			entitiesToDelete = await (await getCurrentAdapter(adapter)).findMany({
				model,
				where
			});
		} catch {}
		for (const entity of entitiesToDelete) for (const hook of hooks || []) {
			const toRun = hook[model]?.delete?.before;
			if (toRun) {
				if (await toRun(entity, context) === false) return null;
			}
		}
		const customDeleted = customDeleteFn ? await customDeleteFn.fn(where) : null;
		const deleted = !customDeleteFn || customDeleteFn.executeMainFn ? await (await getCurrentAdapter(adapter)).deleteMany({
			model,
			where
		}) : customDeleted;
		for (const entity of entitiesToDelete) for (const hook of hooks || []) {
			const toRun = hook[model]?.delete?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await toRun(entity, context);
			});
		}
		return deleted;
	}
	return {
		createWithHooks,
		updateWithHooks,
		updateManyWithHooks,
		deleteWithHooks,
		deleteManyWithHooks
	};
}
var defaultKeyHasher$1 = async (identifier) => {
	const hash = await createHash$1("SHA-256").digest(new TextEncoder().encode(identifier));
	return base64Url.encode(new Uint8Array(hash), { padding: false });
};
async function processIdentifier(identifier, option) {
	if (!option || option === "plain") return identifier;
	if (option === "hashed") return defaultKeyHasher$1(identifier);
	if (typeof option === "object" && "hash" in option) return option.hash(identifier);
	return identifier;
}
function getStorageOption(identifier, config) {
	if (!config) return;
	if (typeof config === "object" && "default" in config) {
		if (config.overrides) {
			for (const [prefix, option] of Object.entries(config.overrides)) if (identifier.startsWith(prefix)) return option;
		}
		return config.default;
	}
	return config;
}
function getTTLSeconds(expiresAt, now = Date.now()) {
	const expiresMs = typeof expiresAt === "number" ? expiresAt : expiresAt.getTime();
	return Math.max(Math.floor((expiresMs - now) / 1e3), 0);
}
var createInternalAdapter = (adapter, ctx) => {
	const logger = ctx.logger;
	const options = ctx.options;
	const secondaryStorage = options.secondaryStorage;
	const sessionExpiration = options.session?.expiresIn || 3600 * 24 * 7;
	const { createWithHooks, updateWithHooks, updateManyWithHooks, deleteWithHooks, deleteManyWithHooks } = getWithHooks(adapter, ctx);
	async function refreshUserSessions(user) {
		if (!secondaryStorage) return;
		const listRaw = await secondaryStorage.get(`active-sessions-${user.id}`);
		if (!listRaw) return;
		const now = Date.now();
		const validSessions = (safeJSONParse(listRaw) || []).filter((s) => s.expiresAt > now);
		await Promise.all(validSessions.map(async ({ token }) => {
			const cached = await secondaryStorage.get(token);
			if (!cached) return;
			const parsed = safeJSONParse(cached);
			if (!parsed) return;
			const sessionTTL = getTTLSeconds(parsed.session.expiresAt, now);
			await secondaryStorage.set(token, JSON.stringify({
				session: parsed.session,
				user
			}), Math.floor(sessionTTL));
		}));
	}
	return {
		createOAuthUser: async (user, account) => {
			return runWithTransaction(adapter, async () => {
				const createdUser = await createWithHooks({
					createdAt: /* @__PURE__ */ new Date(),
					updatedAt: /* @__PURE__ */ new Date(),
					...user
				}, "user", void 0);
				return {
					user: createdUser,
					account: await createWithHooks({
						...account,
						userId: createdUser.id,
						createdAt: /* @__PURE__ */ new Date(),
						updatedAt: /* @__PURE__ */ new Date()
					}, "account", void 0)
				};
			});
		},
		createUser: async (user) => {
			return await createWithHooks({
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...user,
				email: user.email?.toLowerCase()
			}, "user", void 0);
		},
		createAccount: async (account) => {
			return await createWithHooks({
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...account
			}, "account", void 0);
		},
		listSessions: async (userId, options) => {
			if (secondaryStorage) {
				const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
				if (!currentList) return [];
				const list = safeJSONParse(currentList) || [];
				const now = Date.now();
				const seenTokens = /* @__PURE__ */ new Set();
				const sessions = [];
				for (const { token, expiresAt } of list) {
					if (expiresAt <= now || seenTokens.has(token)) continue;
					seenTokens.add(token);
					const data = await secondaryStorage.get(token);
					if (!data) continue;
					try {
						const parsed = typeof data === "string" ? JSON.parse(data) : data;
						if (!parsed?.session) continue;
						sessions.push(parseSessionOutput(ctx.options, {
							...parsed.session,
							expiresAt: new Date(parsed.session.expiresAt)
						}));
					} catch {
						continue;
					}
				}
				return sessions;
			}
			return await (await getCurrentAdapter(adapter)).findMany({
				model: "session",
				where: [{
					field: "userId",
					value: userId
				}, ...options?.onlyActiveSessions ? [{
					field: "expiresAt",
					value: /* @__PURE__ */ new Date(),
					operator: "gt"
				}] : []]
			});
		},
		listUsers: async (limit, offset, sortBy, where) => {
			return await (await getCurrentAdapter(adapter)).findMany({
				model: "user",
				limit,
				offset,
				sortBy,
				where
			});
		},
		countTotalUsers: async (where) => {
			const total = await (await getCurrentAdapter(adapter)).count({
				model: "user",
				where
			});
			if (typeof total === "string") return parseInt(total);
			return total;
		},
		deleteUser: async (userId) => {
			if (!secondaryStorage || options.session?.storeSessionInDatabase) await deleteManyWithHooks([{
				field: "userId",
				value: userId
			}], "session", void 0);
			await deleteManyWithHooks([{
				field: "userId",
				value: userId
			}], "account", void 0);
			await deleteWithHooks([{
				field: "id",
				value: userId
			}], "user", void 0);
		},
		createSession: async (userId, dontRememberMe, override, overrideAll) => {
			const headers = await (async () => {
				const ctx = await getCurrentAuthContext().catch(() => null);
				return ctx?.headers || ctx?.request?.headers;
			})();
			const storeInDb = options.session?.storeSessionInDatabase;
			const { id: _, ...rest } = override || {};
			const defaultAdditionalFields = getSessionDefaultFields(options);
			const data = {
				ipAddress: headers ? getIp(headers, options) || "" : "",
				userAgent: headers?.get("user-agent") || "",
				...rest,
				expiresAt: dontRememberMe ? getDate(3600 * 24, "sec") : getDate(sessionExpiration, "sec"),
				userId,
				token: generateId(32),
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...defaultAdditionalFields,
				...overrideAll ? rest : {}
			};
			return await createWithHooks(data, "session", secondaryStorage ? {
				fn: async (sessionData) => {
					/**
					* store the session token for the user
					* so we can retrieve it later for listing sessions
					*/
					const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
					let list = [];
					const now = Date.now();
					if (currentList) {
						list = safeJSONParse(currentList) || [];
						list = list.filter((session) => session.expiresAt > now && session.token !== data.token);
					}
					const sorted = [...list, {
						token: data.token,
						expiresAt: data.expiresAt.getTime()
					}].sort((a, b) => a.expiresAt - b.expiresAt);
					const furthestSessionTTL = getTTLSeconds(sorted.at(-1)?.expiresAt ?? data.expiresAt.getTime(), now);
					if (furthestSessionTTL > 0) await secondaryStorage.set(`active-sessions-${userId}`, JSON.stringify(sorted), furthestSessionTTL);
					const user = await (await getCurrentAdapter(adapter)).findOne({
						model: "user",
						where: [{
							field: "id",
							value: userId
						}]
					});
					const sessionTTL = getTTLSeconds(data.expiresAt, now);
					if (sessionTTL > 0) await secondaryStorage.set(data.token, JSON.stringify({
						session: sessionData,
						user
					}), sessionTTL);
					return sessionData;
				},
				executeMainFn: storeInDb
			} : void 0);
		},
		findSession: async (token) => {
			if (secondaryStorage) {
				const sessionStringified = await secondaryStorage.get(token);
				if (!sessionStringified && !options.session?.storeSessionInDatabase) return null;
				if (sessionStringified) {
					const s = safeJSONParse(sessionStringified);
					if (!s) return null;
					return {
						session: parseSessionOutput(ctx.options, {
							...s.session,
							expiresAt: new Date(s.session.expiresAt),
							createdAt: new Date(s.session.createdAt),
							updatedAt: new Date(s.session.updatedAt)
						}),
						user: parseUserOutput(ctx.options, {
							...s.user,
							createdAt: new Date(s.user.createdAt),
							updatedAt: new Date(s.user.updatedAt)
						})
					};
				}
			}
			const result = await (await getCurrentAdapter(adapter)).findOne({
				model: "session",
				where: [{
					value: token,
					field: "token"
				}],
				join: { user: true }
			});
			if (!result) return null;
			const { user, ...session } = result;
			if (!user) return null;
			return {
				session: parseSessionOutput(ctx.options, session),
				user: parseUserOutput(ctx.options, user)
			};
		},
		findSessions: async (sessionTokens, options) => {
			if (secondaryStorage) {
				const sessions = [];
				for (const sessionToken of sessionTokens) {
					const sessionStringified = await secondaryStorage.get(sessionToken);
					if (sessionStringified) try {
						const s = typeof sessionStringified === "string" ? JSON.parse(sessionStringified) : sessionStringified;
						if (!s) return [];
						const expiresAt = new Date(s.session.expiresAt);
						if (options?.onlyActiveSessions && expiresAt <= /* @__PURE__ */ new Date()) continue;
						const session = {
							session: {
								...s.session,
								expiresAt: new Date(s.session.expiresAt)
							},
							user: {
								...s.user,
								createdAt: new Date(s.user.createdAt),
								updatedAt: new Date(s.user.updatedAt)
							}
						};
						sessions.push(session);
					} catch {
						continue;
					}
				}
				return sessions;
			}
			const sessions = await (await getCurrentAdapter(adapter)).findMany({
				model: "session",
				where: [{
					field: "token",
					value: sessionTokens,
					operator: "in"
				}, ...options?.onlyActiveSessions ? [{
					field: "expiresAt",
					value: /* @__PURE__ */ new Date(),
					operator: "gt"
				}] : []],
				join: { user: true }
			});
			if (!sessions.length) return [];
			if (sessions.some((session) => !session.user)) return [];
			return sessions.map((_session) => {
				const { user, ...session } = _session;
				return {
					session,
					user
				};
			});
		},
		updateSession: async (sessionToken, session) => {
			return await updateWithHooks(session, [{
				field: "token",
				value: sessionToken
			}], "session", secondaryStorage ? {
				async fn(data) {
					const currentSession = await secondaryStorage.get(sessionToken);
					if (!currentSession) return null;
					const parsedSession = safeJSONParse(currentSession);
					if (!parsedSession) return null;
					const mergedSession = {
						...parsedSession.session,
						...data,
						expiresAt: new Date(data.expiresAt ?? parsedSession.session.expiresAt),
						createdAt: new Date(parsedSession.session.createdAt),
						updatedAt: new Date(data.updatedAt ?? parsedSession.session.updatedAt)
					};
					const updatedSession = parseSessionOutput(ctx.options, mergedSession);
					const now = Date.now();
					const expiresMs = new Date(updatedSession.expiresAt).getTime();
					const sessionTTL = getTTLSeconds(expiresMs, now);
					if (sessionTTL > 0) {
						await secondaryStorage.set(sessionToken, JSON.stringify({
							session: updatedSession,
							user: parsedSession.user
						}), sessionTTL);
						const listKey = `active-sessions-${updatedSession.userId}`;
						const listRaw = await secondaryStorage.get(listKey);
						const sorted = (listRaw ? safeJSONParse(listRaw) || [] : []).filter((s) => s.token !== sessionToken && s.expiresAt > now).concat([{
							token: sessionToken,
							expiresAt: expiresMs
						}]).sort((a, b) => a.expiresAt - b.expiresAt);
						const furthestSessionExp = sorted.at(-1)?.expiresAt;
						if (furthestSessionExp && furthestSessionExp > now) await secondaryStorage.set(listKey, JSON.stringify(sorted), getTTLSeconds(furthestSessionExp, now));
						else await secondaryStorage.delete(listKey);
					}
					return updatedSession;
				},
				executeMainFn: options.session?.storeSessionInDatabase
			} : void 0);
		},
		deleteSession: async (token) => {
			if (secondaryStorage) {
				const data = await secondaryStorage.get(token);
				if (data) {
					const { session } = safeJSONParse(data) ?? {};
					if (!session) {
						logger.error("Session not found in secondary storage");
						return;
					}
					const userId = session.userId;
					const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
					if (currentList) {
						const list = safeJSONParse(currentList) || [];
						const now = Date.now();
						const filtered = list.filter((session) => session.expiresAt > now && session.token !== token);
						const furthestSessionExp = filtered.sort((a, b) => a.expiresAt - b.expiresAt).at(-1)?.expiresAt;
						if (filtered.length > 0 && furthestSessionExp && furthestSessionExp > Date.now()) await secondaryStorage.set(`active-sessions-${userId}`, JSON.stringify(filtered), getTTLSeconds(furthestSessionExp, now));
						else await secondaryStorage.delete(`active-sessions-${userId}`);
					} else logger.error("Active sessions list not found in secondary storage");
				}
				await secondaryStorage.delete(token);
				if (!options.session?.storeSessionInDatabase || ctx.options.session?.preserveSessionInDatabase) return;
			}
			await deleteWithHooks([{
				field: "token",
				value: token
			}], "session", void 0);
		},
		deleteAccounts: async (userId) => {
			await deleteManyWithHooks([{
				field: "userId",
				value: userId
			}], "account", void 0);
		},
		deleteAccount: async (accountId) => {
			await deleteWithHooks([{
				field: "id",
				value: accountId
			}], "account", void 0);
		},
		deleteSessions: async (userIdOrSessionTokens) => {
			if (secondaryStorage) {
				if (typeof userIdOrSessionTokens === "string") {
					const activeSession = await secondaryStorage.get(`active-sessions-${userIdOrSessionTokens}`);
					const sessions = activeSession ? safeJSONParse(activeSession) : [];
					if (!sessions) return;
					for (const session of sessions) await secondaryStorage.delete(session.token);
					await secondaryStorage.delete(`active-sessions-${userIdOrSessionTokens}`);
				} else for (const sessionToken of userIdOrSessionTokens) if (await secondaryStorage.get(sessionToken)) await secondaryStorage.delete(sessionToken);
				if (!options.session?.storeSessionInDatabase || ctx.options.session?.preserveSessionInDatabase) return;
			}
			await deleteManyWithHooks([{
				field: Array.isArray(userIdOrSessionTokens) ? "token" : "userId",
				value: userIdOrSessionTokens,
				operator: Array.isArray(userIdOrSessionTokens) ? "in" : void 0
			}], "session", void 0);
		},
		findOAuthUser: async (email, accountId, providerId) => {
			const account = await (await getCurrentAdapter(adapter)).findOne({
				model: "account",
				where: [{
					value: accountId,
					field: "accountId"
				}, {
					value: providerId,
					field: "providerId"
				}],
				join: { user: true }
			});
			if (account) if (account.user) return {
				user: account.user,
				linkedAccount: account,
				accounts: [account]
			};
			else {
				const user = await (await getCurrentAdapter(adapter)).findOne({
					model: "user",
					where: [{
						value: email.toLowerCase(),
						field: "email"
					}]
				});
				if (user) return {
					user,
					linkedAccount: account,
					accounts: [account]
				};
				return null;
			}
			else {
				const user = await (await getCurrentAdapter(adapter)).findOne({
					model: "user",
					where: [{
						value: email.toLowerCase(),
						field: "email"
					}]
				});
				if (user) return {
					user,
					linkedAccount: null,
					accounts: await (await getCurrentAdapter(adapter)).findMany({
						model: "account",
						where: [{
							value: user.id,
							field: "userId"
						}]
					}) || []
				};
				else return null;
			}
		},
		findUserByEmail: async (email, options) => {
			const result = await (await getCurrentAdapter(adapter)).findOne({
				model: "user",
				where: [{
					value: email.toLowerCase(),
					field: "email"
				}],
				join: { ...options?.includeAccounts ? { account: true } : {} }
			});
			if (!result) return null;
			const { account: accounts, ...user } = result;
			return {
				user,
				accounts: accounts ?? []
			};
		},
		findUserById: async (userId) => {
			if (!userId) return null;
			return await (await getCurrentAdapter(adapter)).findOne({
				model: "user",
				where: [{
					field: "id",
					value: userId
				}]
			});
		},
		linkAccount: async (account) => {
			return await createWithHooks({
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...account
			}, "account", void 0);
		},
		updateUser: async (userId, data) => {
			const user = await updateWithHooks(data, [{
				field: "id",
				value: userId
			}], "user", void 0);
			await refreshUserSessions(user);
			return user;
		},
		updateUserByEmail: async (email, data) => {
			const user = await updateWithHooks(data, [{
				field: "email",
				value: email.toLowerCase()
			}], "user", void 0);
			await refreshUserSessions(user);
			return user;
		},
		updatePassword: async (userId, password) => {
			await updateManyWithHooks({ password }, [{
				field: "userId",
				value: userId
			}, {
				field: "providerId",
				value: "credential"
			}], "account", void 0);
		},
		findAccounts: async (userId) => {
			return await (await getCurrentAdapter(adapter)).findMany({
				model: "account",
				where: [{
					field: "userId",
					value: userId
				}]
			});
		},
		findAccount: async (accountId) => {
			return await (await getCurrentAdapter(adapter)).findOne({
				model: "account",
				where: [{
					field: "accountId",
					value: accountId
				}]
			});
		},
		findAccountByProviderId: async (accountId, providerId) => {
			return await (await getCurrentAdapter(adapter)).findOne({
				model: "account",
				where: [{
					field: "accountId",
					value: accountId
				}, {
					field: "providerId",
					value: providerId
				}]
			});
		},
		findAccountByUserId: async (userId) => {
			return await (await getCurrentAdapter(adapter)).findMany({
				model: "account",
				where: [{
					field: "userId",
					value: userId
				}]
			});
		},
		updateAccount: async (id, data) => {
			return await updateWithHooks(data, [{
				field: "id",
				value: id
			}], "account", void 0);
		},
		createVerificationValue: async (data) => {
			const storageOption = getStorageOption(data.identifier, options.verification?.storeIdentifier);
			const storedIdentifier = await processIdentifier(data.identifier, storageOption);
			return await createWithHooks({
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...data,
				identifier: storedIdentifier
			}, "verification", secondaryStorage ? {
				async fn(verificationData) {
					const ttl = getTTLSeconds(verificationData.expiresAt);
					if (ttl > 0) await secondaryStorage.set(`verification:${storedIdentifier}`, JSON.stringify(verificationData), ttl);
					return verificationData;
				},
				executeMainFn: options.verification?.storeInDatabase
			} : void 0);
		},
		findVerificationValue: async (identifier) => {
			const storageOption = getStorageOption(identifier, options.verification?.storeIdentifier);
			const storedIdentifier = await processIdentifier(identifier, storageOption);
			if (secondaryStorage) {
				const cached = await secondaryStorage.get(`verification:${storedIdentifier}`);
				if (cached) {
					const parsed = safeJSONParse(cached);
					if (parsed) return parsed;
				}
				if (storageOption && storageOption !== "plain") {
					const plainCached = await secondaryStorage.get(`verification:${identifier}`);
					if (plainCached) {
						const parsed = safeJSONParse(plainCached);
						if (parsed) return parsed;
					}
				}
				if (!options.verification?.storeInDatabase) return null;
			}
			const currentAdapter = await getCurrentAdapter(adapter);
			async function findByIdentifier(id) {
				return currentAdapter.findMany({
					model: "verification",
					where: [{
						field: "identifier",
						value: id
					}],
					sortBy: {
						field: "createdAt",
						direction: "desc"
					},
					limit: 1
				});
			}
			let verification = await findByIdentifier(storedIdentifier);
			if (!verification.length && storageOption && storageOption !== "plain") verification = await findByIdentifier(identifier);
			if (!options.verification?.disableCleanup) await deleteManyWithHooks([{
				field: "expiresAt",
				value: /* @__PURE__ */ new Date(),
				operator: "lt"
			}], "verification", void 0);
			return verification[0] || null;
		},
		deleteVerificationByIdentifier: async (identifier) => {
			const storedIdentifier = await processIdentifier(identifier, getStorageOption(identifier, options.verification?.storeIdentifier));
			if (secondaryStorage) await secondaryStorage.delete(`verification:${storedIdentifier}`);
			if (!secondaryStorage || options.verification?.storeInDatabase) await deleteWithHooks([{
				field: "identifier",
				value: storedIdentifier
			}], "verification", void 0);
		},
		updateVerificationByIdentifier: async (identifier, data) => {
			const storedIdentifier = await processIdentifier(identifier, getStorageOption(identifier, options.verification?.storeIdentifier));
			if (secondaryStorage) {
				const cached = await secondaryStorage.get(`verification:${storedIdentifier}`);
				if (cached) {
					const parsed = safeJSONParse(cached);
					if (parsed) {
						const updated = {
							...parsed,
							...data
						};
						const expiresAt = updated.expiresAt ?? parsed.expiresAt;
						const ttl = getTTLSeconds(expiresAt instanceof Date ? expiresAt : new Date(expiresAt));
						if (ttl > 0) await secondaryStorage.set(`verification:${storedIdentifier}`, JSON.stringify(updated), ttl);
						if (!options.verification?.storeInDatabase) return updated;
					}
				}
			}
			if (!secondaryStorage || options.verification?.storeInDatabase) return await updateWithHooks(data, [{
				field: "identifier",
				value: storedIdentifier
			}], "verification", void 0);
			return data;
		}
	};
};
function toZodSchema({ fields, isClientSide }) {
	return object(Object.keys(fields).reduce((acc, key) => {
		const field = fields[key];
		if (!field) return acc;
		if (isClientSide && field.input === false) return acc;
		let schema;
		if (field.type === "json") schema = json ? json() : any();
		else if (field.type === "string[]" || field.type === "number[]") schema = array(field.type === "string[]" ? string() : number());
		else if (Array.isArray(field.type)) schema = any();
		else schema = zod_exports[field.type]();
		if (field?.required === false) schema = schema.optional();
		if (!isClientSide && field?.returned === false) return acc;
		return {
			...acc,
			[key]: schema
		};
	}, {}));
}
var db_exports = /* @__PURE__ */ __exportAll({
	convertFromDB: () => convertFromDB,
	convertToDB: () => convertToDB,
	createInternalAdapter: () => createInternalAdapter,
	getSchema: () => getSchema$1,
	getSessionDefaultFields: () => getSessionDefaultFields,
	getWithHooks: () => getWithHooks,
	mergeSchema: () => mergeSchema,
	parseAccountInput: () => parseAccountInput,
	parseAccountOutput: () => parseAccountOutput,
	parseAdditionalUserInput: () => parseAdditionalUserInput,
	parseInputData: () => parseInputData,
	parseSessionInput: () => parseSessionInput,
	parseSessionOutput: () => parseSessionOutput,
	parseUserInput: () => parseUserInput,
	parseUserOutput: () => parseUserOutput,
	toZodSchema: () => toZodSchema
});
__reExport(db_exports, db_exports$1);
var getSession = () => createAuthEndpoint("/get-session", {
	method: ["GET", "POST"],
	operationId: "getSession",
	query: getSessionQuerySchema$1,
	requireHeaders: true,
	metadata: { openapi: {
		operationId: "getSession",
		description: "Get the current session",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				nullable: true,
				properties: {
					session: { $ref: "#/components/schemas/Session" },
					user: { $ref: "#/components/schemas/User" }
				},
				required: ["session", "user"]
			} } }
		} }
	} }
}, async (ctx) => {
	const deferSessionRefresh = ctx.context.options.session?.deferSessionRefresh;
	const isPostRequest = ctx.method === "POST";
	if (isPostRequest && !deferSessionRefresh) throw APIError.from("METHOD_NOT_ALLOWED", BASE_ERROR_CODES.METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED);
	try {
		const sessionCookieToken = await ctx.getSignedCookie(ctx.context.authCookies.sessionToken.name, ctx.context.secret);
		if (!sessionCookieToken) return null;
		const sessionDataCookie = getChunkedCookie(ctx, ctx.context.authCookies.sessionData.name);
		let sessionDataPayload = null;
		if (sessionDataCookie) {
			const strategy = ctx.context.options.session?.cookieCache?.strategy || "compact";
			if (strategy === "jwe") {
				const payload = await symmetricDecodeJWT(sessionDataCookie, ctx.context.secretConfig, "better-auth-session");
				if (payload && payload.session && payload.user) sessionDataPayload = {
					session: {
						session: payload.session,
						user: payload.user,
						updatedAt: payload.updatedAt,
						version: payload.version
					},
					expiresAt: payload.exp ? payload.exp * 1e3 : Date.now()
				};
				else {
					expireCookie(ctx, ctx.context.authCookies.sessionData);
					return ctx.json(null);
				}
			} else if (strategy === "jwt") {
				const payload = await verifyJWT(sessionDataCookie, ctx.context.secret);
				if (payload && payload.session && payload.user) sessionDataPayload = {
					session: {
						session: payload.session,
						user: payload.user,
						updatedAt: payload.updatedAt,
						version: payload.version
					},
					expiresAt: payload.exp ? payload.exp * 1e3 : Date.now()
				};
				else {
					expireCookie(ctx, ctx.context.authCookies.sessionData);
					return ctx.json(null);
				}
			} else {
				const parsed = safeJSONParse(binary.decode(base64Url.decode(sessionDataCookie)));
				if (parsed) if (await createHMAC("SHA-256", "base64urlnopad").verify(ctx.context.secret, JSON.stringify({
					...parsed.session,
					expiresAt: parsed.expiresAt
				}), parsed.signature)) sessionDataPayload = parsed;
				else {
					expireCookie(ctx, ctx.context.authCookies.sessionData);
					return ctx.json(null);
				}
			}
		}
		const dontRememberMe = await ctx.getSignedCookie(ctx.context.authCookies.dontRememberToken.name, ctx.context.secret);
		/**
		* If session data is present in the cookie, check if it should be used or refreshed
		*/
		if (sessionDataPayload?.session && ctx.context.options.session?.cookieCache?.enabled && !ctx.query?.disableCookieCache) {
			const session = sessionDataPayload.session;
			const versionConfig = ctx.context.options.session?.cookieCache?.version;
			let expectedVersion = "1";
			if (versionConfig) {
				if (typeof versionConfig === "string") expectedVersion = versionConfig;
				else if (typeof versionConfig === "function") {
					const result = versionConfig(session.session, session.user);
					expectedVersion = result instanceof Promise ? await result : result;
				}
			}
			if ((session.version || "1") !== expectedVersion) expireCookie(ctx, ctx.context.authCookies.sessionData);
			else {
				const cachedSessionExpiresAt = new Date(session.session.expiresAt);
				if (sessionDataPayload.expiresAt < Date.now() || cachedSessionExpiresAt < /* @__PURE__ */ new Date()) expireCookie(ctx, ctx.context.authCookies.sessionData);
				else {
					const cookieRefreshCache = ctx.context.sessionConfig.cookieRefreshCache;
					if (cookieRefreshCache === false) {
						ctx.context.session = session;
						const parsedSession = parseSessionOutput(ctx.context.options, {
							...session.session,
							expiresAt: new Date(session.session.expiresAt),
							createdAt: new Date(session.session.createdAt),
							updatedAt: new Date(session.session.updatedAt)
						});
						const parsedUser = parseUserOutput(ctx.context.options, {
							...session.user,
							createdAt: new Date(session.user.createdAt),
							updatedAt: new Date(session.user.updatedAt)
						});
						return ctx.json({
							session: parsedSession,
							user: parsedUser
						});
					}
					const timeUntilExpiry = sessionDataPayload.expiresAt - Date.now();
					const updateAge = cookieRefreshCache.updateAge * 1e3;
					const shouldSkipSessionRefresh = await getShouldSkipSessionRefresh();
					if (timeUntilExpiry < updateAge && !shouldSkipSessionRefresh) {
						const newExpiresAt = getDate(ctx.context.options.session?.cookieCache?.maxAge || 300, "sec");
						const refreshedSession = {
							session: {
								...session.session,
								expiresAt: newExpiresAt
							},
							user: session.user,
							updatedAt: Date.now()
						};
						await setCookieCache(ctx, refreshedSession, false);
						const sessionTokenOptions = ctx.context.authCookies.sessionToken.attributes;
						const sessionTokenMaxAge = dontRememberMe ? void 0 : ctx.context.sessionConfig.expiresIn;
						await ctx.setSignedCookie(ctx.context.authCookies.sessionToken.name, session.session.token, ctx.context.secret, {
							...sessionTokenOptions,
							maxAge: sessionTokenMaxAge
						});
						const parsedRefreshedSession = parseSessionOutput(ctx.context.options, {
							...refreshedSession.session,
							expiresAt: new Date(refreshedSession.session.expiresAt),
							createdAt: new Date(refreshedSession.session.createdAt),
							updatedAt: new Date(refreshedSession.session.updatedAt)
						});
						const parsedRefreshedUser = parseUserOutput(ctx.context.options, {
							...refreshedSession.user,
							createdAt: new Date(refreshedSession.user.createdAt),
							updatedAt: new Date(refreshedSession.user.updatedAt)
						});
						ctx.context.session = {
							session: parsedRefreshedSession,
							user: parsedRefreshedUser
						};
						return ctx.json({
							session: parsedRefreshedSession,
							user: parsedRefreshedUser
						});
					}
					const parsedSession = parseSessionOutput(ctx.context.options, {
						...session.session,
						expiresAt: new Date(session.session.expiresAt),
						createdAt: new Date(session.session.createdAt),
						updatedAt: new Date(session.session.updatedAt)
					});
					const parsedUser = parseUserOutput(ctx.context.options, {
						...session.user,
						createdAt: new Date(session.user.createdAt),
						updatedAt: new Date(session.user.updatedAt)
					});
					ctx.context.session = {
						session: parsedSession,
						user: parsedUser
					};
					return ctx.json({
						session: parsedSession,
						user: parsedUser
					});
				}
			}
		}
		const session = await ctx.context.internalAdapter.findSession(sessionCookieToken);
		ctx.context.session = session;
		if (!session || session.session.expiresAt < /* @__PURE__ */ new Date()) {
			deleteSessionCookie(ctx);
			if (session) {
				/**
				* if session expired clean up the session
				* Only delete on POST when deferSessionRefresh is enabled
				*/
				if (!deferSessionRefresh || isPostRequest) await ctx.context.internalAdapter.deleteSession(session.session.token);
			}
			return ctx.json(null);
		}
		/**
		* We don't need to update the session if the user doesn't want to be remembered
		* or if the session refresh is disabled
		*/
		if (dontRememberMe || ctx.query?.disableRefresh) {
			const parsedSession = parseSessionOutput(ctx.context.options, session.session);
			const parsedUser = parseUserOutput(ctx.context.options, session.user);
			return ctx.json({
				session: parsedSession,
				user: parsedUser
			});
		}
		const expiresIn = ctx.context.sessionConfig.expiresIn;
		const updateAge = ctx.context.sessionConfig.updateAge;
		const shouldBeUpdated = session.session.expiresAt.valueOf() - expiresIn * 1e3 + updateAge * 1e3 <= Date.now();
		const disableRefresh = ctx.query?.disableRefresh || ctx.context.options.session?.disableSessionRefresh;
		const shouldSkipSessionRefresh = await getShouldSkipSessionRefresh();
		const needsRefresh = shouldBeUpdated && !disableRefresh && !shouldSkipSessionRefresh;
		/**
		* When deferSessionRefresh is enabled and this is a GET request,
		* return the session without performing writes, but include needsRefresh flag
		*/
		if (deferSessionRefresh && !isPostRequest) {
			await setCookieCache(ctx, session, !!dontRememberMe);
			const parsedSession = parseSessionOutput(ctx.context.options, session.session);
			const parsedUser = parseUserOutput(ctx.context.options, session.user);
			return ctx.json({
				session: parsedSession,
				user: parsedUser,
				needsRefresh
			});
		}
		if (needsRefresh) {
			const updatedSession = await ctx.context.internalAdapter.updateSession(session.session.token, {
				expiresAt: getDate(ctx.context.sessionConfig.expiresIn, "sec"),
				updatedAt: /* @__PURE__ */ new Date()
			});
			if (!updatedSession) {
				/**
				* Handle case where session update fails (e.g., concurrent deletion)
				*/
				deleteSessionCookie(ctx);
				throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_GET_SESSION);
			}
			const maxAge = (updatedSession.expiresAt.valueOf() - Date.now()) / 1e3;
			await setSessionCookie(ctx, {
				session: updatedSession,
				user: session.user
			}, false, { maxAge });
			const parsedUpdatedSession = parseSessionOutput(ctx.context.options, updatedSession);
			const parsedUser = parseUserOutput(ctx.context.options, session.user);
			return ctx.json({
				session: parsedUpdatedSession,
				user: parsedUser
			});
		}
		await setCookieCache(ctx, session, !!dontRememberMe);
		const parsedSession = parseSessionOutput(ctx.context.options, session.session);
		const parsedUser = parseUserOutput(ctx.context.options, session.user);
		return ctx.json({
			session: parsedSession,
			user: parsedUser
		});
	} catch (error) {
		if (isAPIError(error)) throw error;
		ctx.context.logger.error("INTERNAL_SERVER_ERROR", error);
		throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_GET_SESSION);
	}
});
var getSessionFromCtx = async (ctx, config) => {
	if (ctx.context.session) return ctx.context.session;
	const session = await getSession()({
		...ctx,
		method: "GET",
		asResponse: false,
		headers: ctx.headers,
		returnHeaders: false,
		returnStatus: false,
		query: {
			...config,
			...ctx.query
		}
	}).catch((e) => {
		return null;
	});
	ctx.context.session = session;
	return session;
};
/**
* The middleware forces the endpoint to require a valid session.
*/
var sessionMiddleware = createAuthMiddleware(async (ctx) => {
	const session = await getSessionFromCtx(ctx);
	if (!session?.session) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	return { session };
});
/**
* This middleware forces the endpoint to require a valid session and ignores cookie cache.
* This should be used for sensitive operations like password changes, account deletion, etc.
* to ensure that revoked sessions cannot be used even if they're still cached in cookies.
*/
var sensitiveSessionMiddleware = createAuthMiddleware(async (ctx) => {
	const session = await getSessionFromCtx(ctx, { disableCookieCache: true });
	if (!session?.session) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	return { session };
});
createAuthMiddleware(async (ctx) => {
	const session = await getSessionFromCtx(ctx);
	if (!session?.session && (ctx.request || ctx.headers)) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	return { session };
});
/**
* This middleware forces the endpoint to require a valid session,
* as well as making sure the session is fresh before proceeding.
*
* Session freshness check will be skipped if the session config's freshAge
* is set to 0
*/
var freshSessionMiddleware = createAuthMiddleware(async (ctx) => {
	const session = await getSessionFromCtx(ctx);
	if (!session?.session) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	if (ctx.context.sessionConfig.freshAge === 0) return { session };
	const freshAge = ctx.context.sessionConfig.freshAge;
	const lastUpdated = new Date(session.session.updatedAt || session.session.createdAt).getTime();
	if (!(Date.now() - lastUpdated < freshAge * 1e3)) throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.SESSION_NOT_FRESH);
	return { session };
});
/**
* user active sessions list
*/
var listSessions = () => createAuthEndpoint("/list-sessions", {
	method: "GET",
	operationId: "listUserSessions",
	use: [sessionMiddleware],
	requireHeaders: true,
	metadata: { openapi: {
		operationId: "listUserSessions",
		description: "List all active sessions for the user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "array",
				items: { $ref: "#/components/schemas/Session" }
			} } }
		} }
	} }
}, async (ctx) => {
	try {
		const activeSessions = (await ctx.context.internalAdapter.listSessions(ctx.context.session.user.id, { onlyActiveSessions: true })).filter((session) => {
			return session.expiresAt > /* @__PURE__ */ new Date();
		});
		return ctx.json(activeSessions.map((session) => parseSessionOutput(ctx.context.options, session)));
	} catch (e) {
		ctx.context.logger.error(e);
		throw ctx.error("INTERNAL_SERVER_ERROR");
	}
});
/**
* revoke a single session
*/
var revokeSession = createAuthEndpoint("/revoke-session", {
	method: "POST",
	body: object({ token: string().meta({ description: "The token to revoke" }) }),
	use: [sensitiveSessionMiddleware],
	requireHeaders: true,
	metadata: { openapi: {
		description: "Revoke a single session",
		requestBody: { content: { "application/json": { schema: {
			type: "object",
			properties: { token: {
				type: "string",
				description: "The token to revoke"
			} },
			required: ["token"]
		} } } },
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: {
					type: "boolean",
					description: "Indicates if the session was revoked successfully"
				} },
				required: ["status"]
			} } }
		} }
	} }
}, async (ctx) => {
	const token = ctx.body.token;
	if ((await ctx.context.internalAdapter.findSession(token))?.session.userId === ctx.context.session.user.id) try {
		await ctx.context.internalAdapter.deleteSession(token);
	} catch (error) {
		ctx.context.logger.error(error && typeof error === "object" && "name" in error ? error.name : "", error);
		throw APIError.from("INTERNAL_SERVER_ERROR", {
			message: "Internal Server Error",
			code: "INTERNAL_SERVER_ERROR"
		});
	}
	return ctx.json({ status: true });
});
/**
* revoke all user sessions
*/
var revokeSessions = createAuthEndpoint("/revoke-sessions", {
	method: "POST",
	use: [sensitiveSessionMiddleware],
	requireHeaders: true,
	metadata: { openapi: {
		description: "Revoke all sessions for the user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: {
					type: "boolean",
					description: "Indicates if all sessions were revoked successfully"
				} },
				required: ["status"]
			} } }
		} }
	} }
}, async (ctx) => {
	try {
		await ctx.context.internalAdapter.deleteSessions(ctx.context.session.user.id);
	} catch (error) {
		ctx.context.logger.error(error && typeof error === "object" && "name" in error ? error.name : "", error);
		throw APIError.from("INTERNAL_SERVER_ERROR", {
			message: "Internal Server Error",
			code: "INTERNAL_SERVER_ERROR"
		});
	}
	return ctx.json({ status: true });
});
var revokeOtherSessions = createAuthEndpoint("/revoke-other-sessions", {
	method: "POST",
	requireHeaders: true,
	use: [sensitiveSessionMiddleware],
	metadata: { openapi: {
		description: "Revoke all other sessions for the user except the current one",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: {
					type: "boolean",
					description: "Indicates if all other sessions were revoked successfully"
				} },
				required: ["status"]
			} } }
		} }
	} }
}, async (ctx) => {
	const session = ctx.context.session;
	if (!session.user) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	const otherSessions = (await ctx.context.internalAdapter.listSessions(session.user.id)).filter((session) => {
		return session.expiresAt > /* @__PURE__ */ new Date();
	}).filter((session) => session.token !== ctx.context.session.session.token);
	await Promise.all(otherSessions.map((session) => ctx.context.internalAdapter.deleteSession(session.token)));
	return ctx.json({ status: true });
});
async function runPluginInit(context) {
	let options = context.options;
	const plugins = options.plugins || [];
	const dbHooks = [];
	const pluginTrustedOrigins = [];
	for (const plugin of plugins) if (plugin.init) {
		const initPromise = plugin.init(context);
		let result;
		if (isPromise(initPromise)) result = await initPromise;
		else result = initPromise;
		if (typeof result === "object") {
			if (result.options) {
				const { databaseHooks, trustedOrigins, ...restOpts } = result.options;
				if (databaseHooks) dbHooks.push(databaseHooks);
				if (trustedOrigins) pluginTrustedOrigins.push(trustedOrigins);
				options = defu(options, restOpts);
			}
			if (result.context) Object.assign(context, result.context);
		}
	}
	if (pluginTrustedOrigins.length > 0) {
		const allSources = [...options.trustedOrigins ? [options.trustedOrigins] : [], ...pluginTrustedOrigins];
		const staticOrigins = allSources.filter(Array.isArray).flat();
		const dynamicOrigins = allSources.filter((s) => typeof s === "function");
		if (dynamicOrigins.length > 0) options.trustedOrigins = async (request) => {
			const resolved = await Promise.all(dynamicOrigins.map((fn) => fn(request)));
			return [...staticOrigins, ...resolved.flat()].filter((v) => typeof v === "string" && v !== "");
		};
		else options.trustedOrigins = staticOrigins;
	}
	dbHooks.push(options.databaseHooks);
	context.internalAdapter = createInternalAdapter(context.adapter, {
		options,
		logger: context.logger,
		hooks: dbHooks.filter((u) => u !== void 0),
		generateId: context.generateId
	});
	context.options = options;
}
function getInternalPlugins(options) {
	const plugins = [];
	if (options.advanced?.crossSubDomainCookies?.enabled) {}
	return plugins;
}
async function getTrustedOrigins$1(options, request) {
	const trustedOrigins = [];
	if (isDynamicBaseURLConfig(options.baseURL)) {
		const allowedHosts = options.baseURL.allowedHosts;
		for (const host of allowedHosts) if (!host.includes("://")) {
			trustedOrigins.push(`https://${host}`);
			if (host.includes("localhost") || host.includes("127.0.0.1")) trustedOrigins.push(`http://${host}`);
		} else trustedOrigins.push(host);
		if (options.baseURL.fallback) try {
			trustedOrigins.push(new URL(options.baseURL.fallback).origin);
		} catch {}
	} else {
		const baseURL = getBaseURL(typeof options.baseURL === "string" ? options.baseURL : void 0, options.basePath, request);
		if (baseURL) trustedOrigins.push(new URL(baseURL).origin);
	}
	if (options.trustedOrigins) {
		if (Array.isArray(options.trustedOrigins)) trustedOrigins.push(...options.trustedOrigins);
		if (typeof options.trustedOrigins === "function") {
			const validOrigins = await options.trustedOrigins(request);
			trustedOrigins.push(...validOrigins);
		}
	}
	const envTrustedOrigins = env.BETTER_AUTH_TRUSTED_ORIGINS;
	if (envTrustedOrigins) trustedOrigins.push(...envTrustedOrigins.split(","));
	return trustedOrigins.filter((v) => Boolean(v));
}
async function getAwaitableValue(arr, item) {
	if (!arr) return void 0;
	for (const val of arr) {
		const value = typeof val === "function" ? await val() : val;
		if (value[item.field ?? "id"] === item.value) return value;
	}
}
async function getTrustedProviders(options, request) {
	const trustedProviders = options.account?.accountLinking?.trustedProviders;
	if (!trustedProviders) return [];
	if (Array.isArray(trustedProviders)) return trustedProviders.filter((v) => Boolean(v));
	return (await trustedProviders(request) ?? []).filter((v) => Boolean(v));
}
/**
* Check if a string looks like encrypted data
*/
function isLikelyEncrypted(token) {
	if (token.startsWith("$ba$")) return true;
	return token.length % 2 === 0 && /^[0-9a-f]+$/i.test(token);
}
function decryptOAuthToken(token, ctx) {
	if (!token) return token;
	if (ctx.options.account?.encryptOAuthTokens) {
		if (!isLikelyEncrypted(token)) return token;
		return symmetricDecrypt({
			key: ctx.secretConfig,
			data: token
		});
	}
	return token;
}
function setTokenUtil(token, ctx) {
	if (ctx.options.account?.encryptOAuthTokens && token) return symmetricEncrypt({
		key: ctx.secretConfig,
		data: token
	});
	return token;
}
var listUserAccounts = createAuthEndpoint("/list-accounts", {
	method: "GET",
	use: [sessionMiddleware],
	metadata: { openapi: {
		operationId: "listUserAccounts",
		description: "List all accounts linked to the user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "array",
				items: {
					type: "object",
					properties: {
						id: { type: "string" },
						providerId: { type: "string" },
						createdAt: {
							type: "string",
							format: "date-time"
						},
						updatedAt: {
							type: "string",
							format: "date-time"
						},
						accountId: { type: "string" },
						userId: { type: "string" },
						scopes: {
							type: "array",
							items: { type: "string" }
						}
					},
					required: [
						"id",
						"providerId",
						"createdAt",
						"updatedAt",
						"accountId",
						"userId",
						"scopes"
					]
				}
			} } }
		} }
	} }
}, async (c) => {
	const session = c.context.session;
	const accounts = await c.context.internalAdapter.findAccounts(session.user.id);
	return c.json(accounts.map((a) => {
		const { scope, ...parsed } = parseAccountOutput(c.context.options, a);
		return {
			...parsed,
			scopes: scope?.split(",") || []
		};
	}));
});
var linkSocialAccount = createAuthEndpoint("/link-social", {
	method: "POST",
	requireHeaders: true,
	body: object({
		callbackURL: string().meta({ description: "The URL to redirect to after the user has signed in" }).optional(),
		provider: SocialProviderListEnum,
		idToken: object({
			token: string(),
			nonce: string().optional(),
			accessToken: string().optional(),
			refreshToken: string().optional(),
			scopes: array(string()).optional()
		}).optional(),
		requestSignUp: boolean$2().optional(),
		scopes: array(string()).meta({ description: "Additional scopes to request from the provider" }).optional(),
		errorCallbackURL: string().meta({ description: "The URL to redirect to if there is an error during the link process" }).optional(),
		disableRedirect: boolean$2().meta({ description: "Disable automatic redirection to the provider. Useful for handling the redirection yourself" }).optional(),
		additionalData: record(string(), any()).optional()
	}),
	use: [sessionMiddleware],
	metadata: { openapi: {
		description: "Link a social account to the user",
		operationId: "linkSocialAccount",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					url: {
						type: "string",
						description: "The authorization URL to redirect the user to"
					},
					redirect: {
						type: "boolean",
						description: "Indicates if the user should be redirected to the authorization URL"
					},
					status: { type: "boolean" }
				},
				required: ["redirect"]
			} } }
		} }
	} }
}, async (c) => {
	const session = c.context.session;
	const provider = await getAwaitableValue(c.context.socialProviders, { value: c.body.provider });
	if (!provider) {
		c.context.logger.error("Provider not found. Make sure to add the provider in your auth config", { provider: c.body.provider });
		throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.PROVIDER_NOT_FOUND);
	}
	if (c.body.idToken) {
		if (!provider.verifyIdToken) {
			c.context.logger.error("Provider does not support id token verification", { provider: c.body.provider });
			throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.ID_TOKEN_NOT_SUPPORTED);
		}
		const { token, nonce } = c.body.idToken;
		if (!await provider.verifyIdToken(token, nonce)) {
			c.context.logger.error("Invalid id token", { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_TOKEN);
		}
		const linkingUserInfo = await provider.getUserInfo({
			idToken: token,
			accessToken: c.body.idToken.accessToken,
			refreshToken: c.body.idToken.refreshToken
		});
		if (!linkingUserInfo || !linkingUserInfo?.user) {
			c.context.logger.error("Failed to get user info", { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO);
		}
		const linkingUserId = String(linkingUserInfo.user.id);
		if (!linkingUserInfo.user.email) {
			c.context.logger.error("User email not found", { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.USER_EMAIL_NOT_FOUND);
		}
		if ((await c.context.internalAdapter.findAccounts(session.user.id)).find((a) => a.providerId === provider.id && a.accountId === linkingUserId)) return c.json({
			url: "",
			status: true,
			redirect: false
		});
		if (!c.context.trustedProviders.includes(provider.id) && !linkingUserInfo.user.emailVerified || c.context.options.account?.accountLinking?.enabled === false) throw APIError.from("UNAUTHORIZED", {
			message: "Account not linked - linking not allowed",
			code: "LINKING_NOT_ALLOWED"
		});
		if (linkingUserInfo.user.email?.toLowerCase() !== session.user.email.toLowerCase() && c.context.options.account?.accountLinking?.allowDifferentEmails !== true) throw APIError.from("UNAUTHORIZED", {
			message: "Account not linked - different emails not allowed",
			code: "LINKING_DIFFERENT_EMAILS_NOT_ALLOWED"
		});
		try {
			await c.context.internalAdapter.createAccount({
				userId: session.user.id,
				providerId: provider.id,
				accountId: linkingUserId,
				accessToken: c.body.idToken.accessToken,
				idToken: token,
				refreshToken: c.body.idToken.refreshToken,
				scope: c.body.idToken.scopes?.join(",")
			});
		} catch (_e) {
			throw APIError.from("EXPECTATION_FAILED", {
				message: "Account not linked - unable to create account",
				code: "LINKING_FAILED"
			});
		}
		if (c.context.options.account?.accountLinking?.updateUserInfoOnLink === true) try {
			await c.context.internalAdapter.updateUser(session.user.id, {
				name: linkingUserInfo.user?.name,
				image: linkingUserInfo.user?.image
			});
		} catch (e) {
			console.warn("Could not update user - " + e.toString());
		}
		return c.json({
			url: "",
			status: true,
			redirect: false
		});
	}
	const state = await generateState(c, {
		userId: session.user.id,
		email: session.user.email
	}, c.body.additionalData);
	const url = await provider.createAuthorizationURL({
		state: state.state,
		codeVerifier: state.codeVerifier,
		redirectURI: `${c.context.baseURL}/callback/${provider.id}`,
		scopes: c.body.scopes
	});
	if (!c.body.disableRedirect) c.setHeader("Location", url.toString());
	return c.json({
		url: url.toString(),
		redirect: !c.body.disableRedirect
	});
});
var unlinkAccount = createAuthEndpoint("/unlink-account", {
	method: "POST",
	body: object({
		providerId: string(),
		accountId: string().optional()
	}),
	use: [freshSessionMiddleware],
	metadata: { openapi: {
		description: "Unlink an account",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: { type: "boolean" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const { providerId, accountId } = ctx.body;
	const accounts = await ctx.context.internalAdapter.findAccounts(ctx.context.session.user.id);
	if (accounts.length === 1 && !ctx.context.options.account?.accountLinking?.allowUnlinkingAll) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.FAILED_TO_UNLINK_LAST_ACCOUNT);
	const accountExist = accounts.find((account) => accountId ? account.accountId === accountId && account.providerId === providerId : account.providerId === providerId);
	if (!accountExist) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
	await ctx.context.internalAdapter.deleteAccount(accountExist.id);
	return ctx.json({ status: true });
});
var getAccessToken = createAuthEndpoint("/get-access-token", {
	method: "POST",
	body: object({
		providerId: string().meta({ description: "The provider ID for the OAuth provider" }),
		accountId: string().meta({ description: "The account ID associated with the refresh token" }).optional(),
		userId: string().meta({ description: "The user ID associated with the account" }).optional()
	}),
	metadata: { openapi: {
		description: "Get a valid access token, doing a refresh if needed",
		responses: {
			200: {
				description: "A Valid access token",
				content: { "application/json": { schema: {
					type: "object",
					properties: {
						tokenType: { type: "string" },
						idToken: { type: "string" },
						accessToken: { type: "string" },
						accessTokenExpiresAt: {
							type: "string",
							format: "date-time"
						}
					}
				} } }
			},
			400: { description: "Invalid refresh token or provider configuration" }
		}
	} }
}, async (ctx) => {
	const { providerId, accountId, userId } = ctx.body || {};
	const req = ctx.request;
	const session = await getSessionFromCtx(ctx);
	if (req && !session) throw ctx.error("UNAUTHORIZED");
	const resolvedUserId = session?.user?.id || userId;
	if (!resolvedUserId) throw ctx.error("UNAUTHORIZED");
	const provider = await getAwaitableValue(ctx.context.socialProviders, { value: providerId });
	if (!provider) throw APIError.from("BAD_REQUEST", {
		message: `Provider ${providerId} is not supported.`,
		code: "PROVIDER_NOT_SUPPORTED"
	});
	const accountData = await getAccountCookie(ctx);
	let account = void 0;
	if (accountData && providerId === accountData.providerId && (!accountId || accountData.id === accountId)) account = accountData;
	else account = (await ctx.context.internalAdapter.findAccounts(resolvedUserId)).find((acc) => accountId ? acc.accountId === accountId && acc.providerId === providerId : acc.providerId === providerId);
	if (!account) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
	try {
		let newTokens = null;
		const accessTokenExpired = account.accessTokenExpiresAt && new Date(account.accessTokenExpiresAt).getTime() - Date.now() < 5e3;
		if (account.refreshToken && accessTokenExpired && provider.refreshAccessToken) {
			const refreshToken = await decryptOAuthToken(account.refreshToken, ctx.context);
			newTokens = await provider.refreshAccessToken(refreshToken);
			const updatedData = {
				accessToken: await setTokenUtil(newTokens?.accessToken, ctx.context),
				accessTokenExpiresAt: newTokens?.accessTokenExpiresAt,
				refreshToken: newTokens?.refreshToken ? await setTokenUtil(newTokens.refreshToken, ctx.context) : account.refreshToken,
				refreshTokenExpiresAt: newTokens?.refreshTokenExpiresAt ?? account.refreshTokenExpiresAt,
				idToken: newTokens?.idToken || account.idToken
			};
			let updatedAccount = null;
			if (account.id) updatedAccount = await ctx.context.internalAdapter.updateAccount(account.id, updatedData);
			if (ctx.context.options.account?.storeAccountCookie) await setAccountCookie(ctx, {
				...account,
				...updatedAccount ?? updatedData
			});
		}
		const accessTokenExpiresAt = (() => {
			if (newTokens?.accessTokenExpiresAt) {
				if (typeof newTokens.accessTokenExpiresAt === "string") return new Date(newTokens.accessTokenExpiresAt);
				return newTokens.accessTokenExpiresAt;
			}
			if (account.accessTokenExpiresAt) {
				if (typeof account.accessTokenExpiresAt === "string") return new Date(account.accessTokenExpiresAt);
				return account.accessTokenExpiresAt;
			}
		})();
		const tokens = {
			accessToken: newTokens?.accessToken ?? await decryptOAuthToken(account.accessToken ?? "", ctx.context),
			accessTokenExpiresAt,
			scopes: account.scope?.split(",") ?? [],
			idToken: newTokens?.idToken ?? account.idToken ?? void 0
		};
		return ctx.json(tokens);
	} catch (_error) {
		throw APIError.from("BAD_REQUEST", {
			message: "Failed to get a valid access token",
			code: "FAILED_TO_GET_ACCESS_TOKEN"
		});
	}
});
var refreshToken = createAuthEndpoint("/refresh-token", {
	method: "POST",
	body: object({
		providerId: string().meta({ description: "The provider ID for the OAuth provider" }),
		accountId: string().meta({ description: "The account ID associated with the refresh token" }).optional(),
		userId: string().meta({ description: "The user ID associated with the account" }).optional()
	}),
	metadata: { openapi: {
		description: "Refresh the access token using a refresh token",
		responses: {
			200: {
				description: "Access token refreshed successfully",
				content: { "application/json": { schema: {
					type: "object",
					properties: {
						tokenType: { type: "string" },
						idToken: { type: "string" },
						accessToken: { type: "string" },
						refreshToken: { type: "string" },
						accessTokenExpiresAt: {
							type: "string",
							format: "date-time"
						},
						refreshTokenExpiresAt: {
							type: "string",
							format: "date-time"
						}
					}
				} } }
			},
			400: { description: "Invalid refresh token or provider configuration" }
		}
	} }
}, async (ctx) => {
	const { providerId, accountId, userId } = ctx.body;
	const req = ctx.request;
	const session = await getSessionFromCtx(ctx);
	if (req && !session) throw ctx.error("UNAUTHORIZED");
	const resolvedUserId = session?.user?.id || userId;
	if (!resolvedUserId) throw APIError.from("BAD_REQUEST", {
		message: `Either userId or session is required`,
		code: "USER_ID_OR_SESSION_REQUIRED"
	});
	const provider = await getAwaitableValue(ctx.context.socialProviders, { value: providerId });
	if (!provider) throw APIError.from("BAD_REQUEST", {
		message: `Provider ${providerId} is not supported.`,
		code: "PROVIDER_NOT_SUPPORTED"
	});
	if (!provider.refreshAccessToken) throw APIError.from("BAD_REQUEST", {
		message: `Provider ${providerId} does not support token refreshing.`,
		code: "TOKEN_REFRESH_NOT_SUPPORTED"
	});
	let account = void 0;
	const accountData = await getAccountCookie(ctx);
	if (accountData && (!providerId || providerId === accountData?.providerId)) account = accountData;
	else account = (await ctx.context.internalAdapter.findAccounts(resolvedUserId)).find((acc) => accountId ? acc.accountId === accountId && acc.providerId === providerId : acc.providerId === providerId);
	if (!account) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
	let refreshToken = void 0;
	if (accountData && providerId === accountData.providerId) refreshToken = accountData.refreshToken ?? void 0;
	else refreshToken = account.refreshToken ?? void 0;
	if (!refreshToken) throw APIError.from("BAD_REQUEST", {
		message: "Refresh token not found",
		code: "REFRESH_TOKEN_NOT_FOUND"
	});
	try {
		const decryptedRefreshToken = await decryptOAuthToken(refreshToken, ctx.context);
		const tokens = await provider.refreshAccessToken(decryptedRefreshToken);
		const resolvedRefreshToken = tokens.refreshToken ? await setTokenUtil(tokens.refreshToken, ctx.context) : refreshToken;
		const resolvedRefreshTokenExpiresAt = tokens.refreshTokenExpiresAt ?? account.refreshTokenExpiresAt;
		if (account.id) {
			const updateData = {
				...account || {},
				accessToken: await setTokenUtil(tokens.accessToken, ctx.context),
				refreshToken: resolvedRefreshToken,
				accessTokenExpiresAt: tokens.accessTokenExpiresAt,
				refreshTokenExpiresAt: resolvedRefreshTokenExpiresAt,
				scope: tokens.scopes?.join(",") || account.scope,
				idToken: tokens.idToken || account.idToken
			};
			await ctx.context.internalAdapter.updateAccount(account.id, updateData);
		}
		if (accountData && providerId === accountData.providerId && ctx.context.options.account?.storeAccountCookie) await setAccountCookie(ctx, {
			...accountData,
			accessToken: await setTokenUtil(tokens.accessToken, ctx.context),
			refreshToken: resolvedRefreshToken,
			accessTokenExpiresAt: tokens.accessTokenExpiresAt,
			refreshTokenExpiresAt: resolvedRefreshTokenExpiresAt,
			scope: tokens.scopes?.join(",") || accountData.scope,
			idToken: tokens.idToken || accountData.idToken
		});
		return ctx.json({
			accessToken: tokens.accessToken,
			refreshToken: tokens.refreshToken ?? decryptedRefreshToken,
			accessTokenExpiresAt: tokens.accessTokenExpiresAt,
			refreshTokenExpiresAt: resolvedRefreshTokenExpiresAt,
			scope: tokens.scopes?.join(",") || account.scope,
			idToken: tokens.idToken || account.idToken,
			providerId: account.providerId,
			accountId: account.accountId
		});
	} catch (_error) {
		throw APIError.from("BAD_REQUEST", {
			message: "Failed to refresh access token",
			code: "FAILED_TO_REFRESH_ACCESS_TOKEN"
		});
	}
});
var accountInfoQuerySchema = optional(object({ accountId: string().meta({ description: "The provider given account id for which to get the account info" }).optional() }));
var accountInfo = createAuthEndpoint("/account-info", {
	method: "GET",
	use: [sessionMiddleware],
	metadata: { openapi: {
		description: "Get the account info provided by the provider",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					user: {
						type: "object",
						properties: {
							id: { type: "string" },
							name: { type: "string" },
							email: { type: "string" },
							image: { type: "string" },
							emailVerified: { type: "boolean" }
						},
						required: ["id", "emailVerified"]
					},
					data: {
						type: "object",
						properties: {},
						additionalProperties: true
					}
				},
				required: ["user", "data"],
				additionalProperties: false
			} } }
		} }
	} },
	query: accountInfoQuerySchema
}, async (ctx) => {
	const providedAccountId = ctx.query?.accountId;
	let account = void 0;
	if (!providedAccountId) {
		if (ctx.context.options.account?.storeAccountCookie) {
			const accountData = await getAccountCookie(ctx);
			if (accountData) account = accountData;
		}
	} else {
		const accountData = await ctx.context.internalAdapter.findAccount(providedAccountId);
		if (accountData) account = accountData;
	}
	if (!account || account.userId !== ctx.context.session.user.id) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
	const provider = await getAwaitableValue(ctx.context.socialProviders, { value: account.providerId });
	if (!provider) throw APIError.from("INTERNAL_SERVER_ERROR", {
		message: `Provider account provider is ${account.providerId} but it is not configured`,
		code: "PROVIDER_NOT_CONFIGURED"
	});
	const tokens = await getAccessToken({
		...ctx,
		method: "POST",
		body: {
			accountId: account.accountId,
			providerId: account.providerId
		},
		returnHeaders: false,
		returnStatus: false
	});
	if (!tokens.accessToken) throw APIError.from("BAD_REQUEST", {
		message: "Access token not found",
		code: "ACCESS_TOKEN_NOT_FOUND"
	});
	const info = await provider.getUserInfo({
		...tokens,
		accessToken: tokens.accessToken
	});
	return ctx.json(info);
});
async function createEmailVerificationToken(secret, email, updateTo, expiresIn = 3600, extraPayload) {
	return await signJWT({
		email: email.toLowerCase(),
		updateTo,
		...extraPayload
	}, secret, expiresIn);
}
/**
* A function to send a verification email to the user
*/
async function sendVerificationEmailFn(ctx, user) {
	if (!ctx.context.options.emailVerification?.sendVerificationEmail) {
		ctx.context.logger.error("Verification email isn't enabled.");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.VERIFICATION_EMAIL_NOT_ENABLED);
	}
	const token = await createEmailVerificationToken(ctx.context.secret, user.email, void 0, ctx.context.options.emailVerification?.expiresIn);
	const callbackURL = ctx.body.callbackURL ? encodeURIComponent(ctx.body.callbackURL) : encodeURIComponent("/");
	const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
	await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
		user,
		url,
		token
	}, ctx.request));
}
var sendVerificationEmail = createAuthEndpoint("/send-verification-email", {
	method: "POST",
	operationId: "sendVerificationEmail",
	body: object({
		email: email().meta({ description: "The email to send the verification email to" }),
		callbackURL: string().meta({ description: "The URL to use for email verification callback" }).optional()
	}),
	metadata: { openapi: {
		operationId: "sendVerificationEmail",
		description: "Send a verification email to the user",
		requestBody: { content: { "application/json": { schema: {
			type: "object",
			properties: {
				email: {
					type: "string",
					description: "The email to send the verification email to",
					example: "user@example.com"
				},
				callbackURL: {
					type: "string",
					description: "The URL to use for email verification callback",
					example: "https://example.com/callback",
					nullable: true
				}
			},
			required: ["email"]
		} } } },
		responses: {
			"200": {
				description: "Success",
				content: { "application/json": { schema: {
					type: "object",
					properties: { status: {
						type: "boolean",
						description: "Indicates if the email was sent successfully",
						example: true
					} }
				} } }
			},
			"400": {
				description: "Bad Request",
				content: { "application/json": { schema: {
					type: "object",
					properties: { message: {
						type: "string",
						description: "Error message",
						example: "Verification email isn't enabled"
					} }
				} } }
			}
		}
	} }
}, async (ctx) => {
	if (!ctx.context.options.emailVerification?.sendVerificationEmail) {
		ctx.context.logger.error("Verification email isn't enabled.");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.VERIFICATION_EMAIL_NOT_ENABLED);
	}
	const { email } = ctx.body;
	const session = await getSessionFromCtx(ctx);
	if (!session) {
		const user = await ctx.context.internalAdapter.findUserByEmail(email);
		if (!user || user.user.emailVerified) {
			await createEmailVerificationToken(ctx.context.secret, email, void 0, ctx.context.options.emailVerification?.expiresIn);
			return ctx.json({ status: true });
		}
		await sendVerificationEmailFn(ctx, user.user);
		return ctx.json({ status: true });
	}
	if (session?.user.email !== email) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.EMAIL_MISMATCH);
	if (session?.user.emailVerified) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.EMAIL_ALREADY_VERIFIED);
	await sendVerificationEmailFn(ctx, session.user);
	return ctx.json({ status: true });
});
var verifyEmail = createAuthEndpoint("/verify-email", {
	method: "GET",
	operationId: "verifyEmail",
	query: object({
		token: string().meta({ description: "The token to verify the email" }),
		callbackURL: string().meta({ description: "The URL to redirect to after email verification" }).optional()
	}),
	use: [originCheck((ctx) => ctx.query.callbackURL)],
	metadata: { openapi: {
		description: "Verify the email of the user",
		parameters: [{
			name: "token",
			in: "query",
			description: "The token to verify the email",
			required: true,
			schema: { type: "string" }
		}, {
			name: "callbackURL",
			in: "query",
			description: "The URL to redirect to after email verification",
			required: false,
			schema: { type: "string" }
		}],
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					user: {
						type: "object",
						$ref: "#/components/schemas/User"
					},
					status: {
						type: "boolean",
						description: "Indicates if the email was verified successfully"
					}
				},
				required: ["user", "status"]
			} } }
		} }
	} }
}, async (ctx) => {
	function redirectOnError(error) {
		if (ctx.query.callbackURL) {
			if (ctx.query.callbackURL.includes("?")) throw ctx.redirect(`${ctx.query.callbackURL}&error=${error.code}`);
			throw ctx.redirect(`${ctx.query.callbackURL}?error=${error.code}`);
		}
		throw APIError.from("UNAUTHORIZED", error);
	}
	const { token } = ctx.query;
	let jwt;
	try {
		jwt = await jwtVerify(token, new TextEncoder().encode(ctx.context.secret), { algorithms: ["HS256"] });
	} catch (e) {
		if (e instanceof JWTExpired) return redirectOnError(BASE_ERROR_CODES.TOKEN_EXPIRED);
		return redirectOnError(BASE_ERROR_CODES.INVALID_TOKEN);
	}
	const parsed = object({
		email: email(),
		updateTo: string().optional(),
		requestType: string().optional()
	}).parse(jwt.payload);
	const user = await ctx.context.internalAdapter.findUserByEmail(parsed.email);
	if (!user) return redirectOnError(BASE_ERROR_CODES.USER_NOT_FOUND);
	if (parsed.updateTo) {
		const session = await getSessionFromCtx(ctx);
		if (session && session.user.email !== parsed.email) return redirectOnError(BASE_ERROR_CODES.INVALID_USER);
		switch (parsed.requestType) {
			case "change-email-confirmation": {
				const newToken = await createEmailVerificationToken(ctx.context.secret, parsed.email, parsed.updateTo, ctx.context.options.emailVerification?.expiresIn, { requestType: "change-email-verification" });
				const updateCallbackURL = ctx.query.callbackURL ? encodeURIComponent(ctx.query.callbackURL) : encodeURIComponent("/");
				const url = `${ctx.context.baseURL}/verify-email?token=${newToken}&callbackURL=${updateCallbackURL}`;
				if (ctx.context.options.emailVerification?.sendVerificationEmail) await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
					user: {
						...user.user,
						email: parsed.updateTo
					},
					url,
					token: newToken
				}, ctx.request));
				if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
				return ctx.json({ status: true });
			}
			case "change-email-verification": {
				let activeSession = session;
				if (!activeSession) {
					const newSession = await ctx.context.internalAdapter.createSession(user.user.id);
					if (!newSession) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
					activeSession = {
						session: newSession,
						user: user.user
					};
				}
				const updatedUser = await ctx.context.internalAdapter.updateUserByEmail(parsed.email, {
					email: parsed.updateTo,
					emailVerified: true
				});
				if (ctx.context.options.emailVerification?.afterEmailVerification) await ctx.context.options.emailVerification.afterEmailVerification(updatedUser, ctx.request);
				await setSessionCookie(ctx, {
					session: activeSession.session,
					user: {
						...activeSession.user,
						email: parsed.updateTo,
						emailVerified: true
					}
				});
				if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
				return ctx.json({
					status: true,
					user: parseUserOutput(ctx.context.options, updatedUser)
				});
			}
			default: {
				let activeSession = session;
				if (!activeSession) {
					const newSession = await ctx.context.internalAdapter.createSession(user.user.id);
					if (!newSession) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
					activeSession = {
						session: newSession,
						user: user.user
					};
				}
				const updatedUser = await ctx.context.internalAdapter.updateUserByEmail(parsed.email, {
					email: parsed.updateTo,
					emailVerified: false
				});
				const newToken = await createEmailVerificationToken(ctx.context.secret, parsed.updateTo);
				const updateCallbackURL = ctx.query.callbackURL ? encodeURIComponent(ctx.query.callbackURL) : encodeURIComponent("/");
				if (ctx.context.options.emailVerification?.sendVerificationEmail) await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
					user: updatedUser,
					url: `${ctx.context.baseURL}/verify-email?token=${newToken}&callbackURL=${updateCallbackURL}`,
					token: newToken
				}, ctx.request));
				await setSessionCookie(ctx, {
					session: activeSession.session,
					user: {
						...activeSession.user,
						email: parsed.updateTo,
						emailVerified: false
					}
				});
				if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
				return ctx.json({
					status: true,
					user: parseUserOutput(ctx.context.options, updatedUser)
				});
			}
		}
	}
	if (user.user.emailVerified) {
		if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
		return ctx.json({
			status: true,
			user: null
		});
	}
	if (ctx.context.options.emailVerification?.beforeEmailVerification) await ctx.context.options.emailVerification.beforeEmailVerification(user.user, ctx.request);
	const updatedUser = await ctx.context.internalAdapter.updateUserByEmail(parsed.email, { emailVerified: true });
	if (ctx.context.options.emailVerification?.afterEmailVerification) await ctx.context.options.emailVerification.afterEmailVerification(updatedUser, ctx.request);
	if (ctx.context.options.emailVerification?.autoSignInAfterVerification) {
		const currentSession = await getSessionFromCtx(ctx);
		if (!currentSession || currentSession.user.email !== parsed.email) {
			const session = await ctx.context.internalAdapter.createSession(user.user.id);
			if (!session) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
			await setSessionCookie(ctx, {
				session,
				user: {
					...user.user,
					emailVerified: true
				}
			});
		} else await setSessionCookie(ctx, {
			session: currentSession.session,
			user: {
				...currentSession.user,
				emailVerified: true
			}
		});
	}
	if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
	return ctx.json({
		status: true,
		user: null
	});
});
async function handleOAuthUserInfo(c, opts) {
	const { userInfo, account, callbackURL, disableSignUp, overrideUserInfo } = opts;
	const dbUser = await c.context.internalAdapter.findOAuthUser(userInfo.email.toLowerCase(), account.accountId, account.providerId).catch((e) => {
		logger.error("Better auth was unable to query your database.\nError: ", e);
		const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
		throw c.redirect(`${errorURL}?error=internal_server_error`);
	});
	let user = dbUser?.user;
	const isRegister = !user;
	if (dbUser) {
		const linkedAccount = dbUser.linkedAccount ?? dbUser.accounts.find((acc) => acc.providerId === account.providerId && acc.accountId === account.accountId);
		if (!linkedAccount) {
			const accountLinking = c.context.options.account?.accountLinking;
			if (!(opts.isTrustedProvider || c.context.trustedProviders.includes(account.providerId)) && !userInfo.emailVerified || accountLinking?.enabled === false || accountLinking?.disableImplicitLinking === true) {
				if (isDevelopment()) logger.warn(`User already exist but account isn't linked to ${account.providerId}. To read more about how account linking works in Better Auth see https://www.better-auth.com/docs/concepts/users-accounts#account-linking.`);
				return {
					error: "account not linked",
					data: null
				};
			}
			try {
				await c.context.internalAdapter.linkAccount({
					providerId: account.providerId,
					accountId: userInfo.id.toString(),
					userId: dbUser.user.id,
					accessToken: await setTokenUtil(account.accessToken, c.context),
					refreshToken: await setTokenUtil(account.refreshToken, c.context),
					idToken: account.idToken,
					accessTokenExpiresAt: account.accessTokenExpiresAt,
					refreshTokenExpiresAt: account.refreshTokenExpiresAt,
					scope: account.scope
				});
			} catch (e) {
				logger.error("Unable to link account", e);
				return {
					error: "unable to link account",
					data: null
				};
			}
			if (userInfo.emailVerified && !dbUser.user.emailVerified && userInfo.email.toLowerCase() === dbUser.user.email) await c.context.internalAdapter.updateUser(dbUser.user.id, { emailVerified: true });
		} else {
			const freshTokens = c.context.options.account?.updateAccountOnSignIn !== false ? Object.fromEntries(Object.entries({
				idToken: account.idToken,
				accessToken: await setTokenUtil(account.accessToken, c.context),
				refreshToken: await setTokenUtil(account.refreshToken, c.context),
				accessTokenExpiresAt: account.accessTokenExpiresAt,
				refreshTokenExpiresAt: account.refreshTokenExpiresAt,
				scope: account.scope
			}).filter(([_, value]) => value !== void 0)) : {};
			if (c.context.options.account?.storeAccountCookie) await setAccountCookie(c, {
				...linkedAccount,
				...freshTokens
			});
			if (Object.keys(freshTokens).length > 0) await c.context.internalAdapter.updateAccount(linkedAccount.id, freshTokens);
			if (userInfo.emailVerified && !dbUser.user.emailVerified && userInfo.email.toLowerCase() === dbUser.user.email) await c.context.internalAdapter.updateUser(dbUser.user.id, { emailVerified: true });
		}
		if (overrideUserInfo) {
			const { id: _, ...restUserInfo } = userInfo;
			user = await c.context.internalAdapter.updateUser(dbUser.user.id, {
				...restUserInfo,
				email: userInfo.email.toLowerCase(),
				emailVerified: userInfo.email.toLowerCase() === dbUser.user.email ? dbUser.user.emailVerified || userInfo.emailVerified : userInfo.emailVerified
			});
		}
	} else {
		if (disableSignUp) return {
			error: "signup disabled",
			data: null,
			isRegister: false
		};
		try {
			const { id: _, ...restUserInfo } = userInfo;
			const accountData = {
				accessToken: await setTokenUtil(account.accessToken, c.context),
				refreshToken: await setTokenUtil(account.refreshToken, c.context),
				idToken: account.idToken,
				accessTokenExpiresAt: account.accessTokenExpiresAt,
				refreshTokenExpiresAt: account.refreshTokenExpiresAt,
				scope: account.scope,
				providerId: account.providerId,
				accountId: userInfo.id.toString()
			};
			const { user: createdUser, account: createdAccount } = await c.context.internalAdapter.createOAuthUser({
				...restUserInfo,
				email: userInfo.email.toLowerCase()
			}, accountData);
			user = createdUser;
			if (c.context.options.account?.storeAccountCookie) await setAccountCookie(c, createdAccount);
			if (!userInfo.emailVerified && user && c.context.options.emailVerification?.sendOnSignUp && c.context.options.emailVerification?.sendVerificationEmail) {
				const token = await createEmailVerificationToken(c.context.secret, user.email, void 0, c.context.options.emailVerification?.expiresIn);
				const url = `${c.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
				await c.context.runInBackgroundOrAwait(c.context.options.emailVerification.sendVerificationEmail({
					user,
					url,
					token
				}, c.request));
			}
		} catch (e) {
			logger.error(e);
			if (isAPIError(e)) return {
				error: e.message,
				data: null,
				isRegister: false
			};
			return {
				error: "unable to create user",
				data: null,
				isRegister: false
			};
		}
	}
	if (!user) return {
		error: "unable to create user",
		data: null,
		isRegister: false
	};
	const session = await c.context.internalAdapter.createSession(user.id);
	if (!session) return {
		error: "unable to create session",
		data: null,
		isRegister: false
	};
	return {
		data: {
			session,
			user
		},
		error: null,
		isRegister
	};
}
var schema$1 = object({
	code: string().optional(),
	error: string().optional(),
	device_id: string().optional(),
	error_description: string().optional(),
	state: string().optional(),
	user: string().optional()
});
var callbackOAuth = createAuthEndpoint("/callback/:id", {
	method: ["GET", "POST"],
	operationId: "handleOAuthCallback",
	body: schema$1.optional(),
	query: schema$1.optional(),
	metadata: {
		...HIDE_METADATA,
		allowedMediaTypes: ["application/x-www-form-urlencoded", "application/json"]
	}
}, async (c) => {
	let queryOrBody;
	const defaultErrorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
	if (c.method === "POST") {
		const postData = c.body ? schema$1.parse(c.body) : {};
		const queryData = c.query ? schema$1.parse(c.query) : {};
		const mergedData = schema$1.parse({
			...postData,
			...queryData
		});
		const params = new URLSearchParams();
		for (const [key, value] of Object.entries(mergedData)) if (value !== void 0 && value !== null) params.set(key, String(value));
		const redirectURL = `${c.context.baseURL}/callback/${c.params.id}?${params.toString()}`;
		throw c.redirect(redirectURL);
	}
	try {
		if (c.method === "GET") queryOrBody = schema$1.parse(c.query);
		else if (c.method === "POST") queryOrBody = schema$1.parse(c.body);
		else throw new Error("Unsupported method");
	} catch (e) {
		c.context.logger.error("INVALID_CALLBACK_REQUEST", e);
		throw c.redirect(`${defaultErrorURL}?error=invalid_callback_request`);
	}
	const { code, error, state, error_description, device_id, user: userData } = queryOrBody;
	if (!state) {
		c.context.logger.error("State not found", error);
		const url = `${defaultErrorURL}${defaultErrorURL.includes("?") ? "&" : "?"}state=state_not_found`;
		throw c.redirect(url);
	}
	const { codeVerifier, callbackURL, link, errorURL, newUserURL, requestSignUp } = await parseState(c);
	function redirectOnError(error, description) {
		const baseURL = errorURL ?? defaultErrorURL;
		const params = new URLSearchParams({ error });
		if (description) params.set("error_description", description);
		const url = `${baseURL}${baseURL.includes("?") ? "&" : "?"}${params.toString()}`;
		throw c.redirect(url);
	}
	if (error) redirectOnError(error, error_description);
	if (!code) {
		c.context.logger.error("Code not found");
		throw redirectOnError("no_code");
	}
	const provider = await getAwaitableValue(c.context.socialProviders, { value: c.params.id });
	if (!provider) {
		c.context.logger.error("Oauth provider with id", c.params.id, "not found");
		throw redirectOnError("oauth_provider_not_found");
	}
	let tokens;
	try {
		tokens = await provider.validateAuthorizationCode({
			code,
			codeVerifier,
			deviceId: device_id,
			redirectURI: `${c.context.baseURL}/callback/${provider.id}`
		});
	} catch (e) {
		c.context.logger.error("", e);
		throw redirectOnError("invalid_code");
	}
	if (!tokens) throw redirectOnError("invalid_code");
	const parsedUserData = userData ? safeJSONParse(userData) : null;
	const userInfo = await provider.getUserInfo({
		...tokens,
		user: parsedUserData ?? void 0
	}).then((res) => res?.user);
	if (!userInfo) {
		c.context.logger.error("Unable to get user info");
		return redirectOnError("unable_to_get_user_info");
	}
	if (!callbackURL) {
		c.context.logger.error("No callback URL found");
		throw redirectOnError("no_callback_url");
	}
	if (link) {
		if (!c.context.trustedProviders.includes(provider.id) && !userInfo.emailVerified || c.context.options.account?.accountLinking?.enabled === false) {
			c.context.logger.error("Unable to link account - untrusted provider");
			return redirectOnError("unable_to_link_account");
		}
		if (userInfo.email?.toLowerCase() !== link.email.toLowerCase() && c.context.options.account?.accountLinking?.allowDifferentEmails !== true) return redirectOnError("email_doesn't_match");
		const existingAccount = await c.context.internalAdapter.findAccount(String(userInfo.id));
		if (existingAccount) {
			if (existingAccount.userId.toString() !== link.userId.toString()) return redirectOnError("account_already_linked_to_different_user");
			const updateData = Object.fromEntries(Object.entries({
				accessToken: await setTokenUtil(tokens.accessToken, c.context),
				refreshToken: await setTokenUtil(tokens.refreshToken, c.context),
				idToken: tokens.idToken,
				accessTokenExpiresAt: tokens.accessTokenExpiresAt,
				refreshTokenExpiresAt: tokens.refreshTokenExpiresAt,
				scope: tokens.scopes?.join(",")
			}).filter(([_, value]) => value !== void 0));
			await c.context.internalAdapter.updateAccount(existingAccount.id, updateData);
		} else if (!await c.context.internalAdapter.createAccount({
			userId: link.userId,
			providerId: provider.id,
			accountId: String(userInfo.id),
			...tokens,
			accessToken: await setTokenUtil(tokens.accessToken, c.context),
			refreshToken: await setTokenUtil(tokens.refreshToken, c.context),
			scope: tokens.scopes?.join(",")
		})) return redirectOnError("unable_to_link_account");
		let toRedirectTo;
		try {
			toRedirectTo = callbackURL.toString();
		} catch {
			toRedirectTo = callbackURL;
		}
		throw c.redirect(toRedirectTo);
	}
	if (!userInfo.email) {
		c.context.logger.error("Provider did not return email. This could be due to misconfiguration in the provider settings.");
		return redirectOnError("email_not_found");
	}
	const accountData = {
		providerId: provider.id,
		accountId: String(userInfo.id),
		...tokens,
		scope: tokens.scopes?.join(",")
	};
	const result = await handleOAuthUserInfo(c, {
		userInfo: {
			...userInfo,
			id: String(userInfo.id),
			email: userInfo.email,
			name: userInfo.name || ""
		},
		account: accountData,
		callbackURL,
		disableSignUp: provider.disableImplicitSignUp && !requestSignUp || provider.options?.disableSignUp,
		overrideUserInfo: provider.options?.overrideUserInfoOnSignIn
	});
	if (result.error) {
		c.context.logger.error(result.error.split(" ").join("_"));
		return redirectOnError(result.error.split(" ").join("_"));
	}
	const { session, user } = result.data;
	await setSessionCookie(c, {
		session,
		user
	});
	let toRedirectTo;
	try {
		toRedirectTo = (result.isRegister ? newUserURL || callbackURL : callbackURL).toString();
	} catch {
		toRedirectTo = result.isRegister ? newUserURL || callbackURL : callbackURL;
	}
	throw c.redirect(toRedirectTo);
});
function sanitize(input) {
	return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/&(?!amp;|lt;|gt;|quot;|#39;|#x[0-9a-fA-F]+;|#[0-9]+;)/g, "&amp;");
}
var html = (options, code = "Unknown", description = null) => {
	const custom = options.onAPIError?.customizeDefaultErrorPage;
	return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Error</title>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        font-family: ${custom?.font?.defaultFamily || "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"};
        background: ${custom?.colors?.background || "var(--background)"};
        color: var(--foreground);
        margin: 0;
      }
      :root,
      :host {
        --spacing: 0.25rem;
        --container-md: 28rem;
        --text-sm: ${custom?.size?.textSm || "0.875rem"};
        --text-sm--line-height: calc(1.25 / 0.875);
        --text-2xl: ${custom?.size?.text2xl || "1.5rem"};
        --text-2xl--line-height: calc(2 / 1.5);
        --text-4xl: ${custom?.size?.text4xl || "2.25rem"};
        --text-4xl--line-height: calc(2.5 / 2.25);
        --text-6xl: ${custom?.size?.text6xl || "3rem"};
        --text-6xl--line-height: 1;
        --font-weight-medium: 500;
        --font-weight-semibold: 600;
        --font-weight-bold: 700;
        --default-transition-duration: 150ms;
        --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        --radius: ${custom?.size?.radiusSm || "0.625rem"};
        --default-mono-font-family: ${custom?.font?.monoFamily || "var(--font-geist-mono)"};
        --primary: ${custom?.colors?.primary || "black"};
        --primary-foreground: ${custom?.colors?.primaryForeground || "white"};
        --background: ${custom?.colors?.background || "white"};
        --foreground: ${custom?.colors?.foreground || "oklch(0.271 0 0)"};
        --border: ${custom?.colors?.border || "oklch(0.89 0 0)"};
        --destructive: ${custom?.colors?.destructive || "oklch(0.55 0.15 25.723)"};
        --muted-foreground: ${custom?.colors?.mutedForeground || "oklch(0.545 0 0)"};
        --corner-border: ${custom?.colors?.cornerBorder || "#404040"};
      }

      button, .btn {
        cursor: pointer;
        background: none;
        border: none;
        color: inherit;
        font: inherit;
        transition: all var(--default-transition-duration)
          var(--default-transition-timing-function);
      }
      button:hover, .btn:hover {
        opacity: 0.8;
      }

      @media (prefers-color-scheme: dark) {
        :root,
        :host {
          --primary: ${custom?.colors?.primary || "white"};
          --primary-foreground: ${custom?.colors?.primaryForeground || "black"};
          --background: ${custom?.colors?.background || "oklch(0.15 0 0)"};
          --foreground: ${custom?.colors?.foreground || "oklch(0.98 0 0)"};
          --border: ${custom?.colors?.border || "oklch(0.27 0 0)"};
          --destructive: ${custom?.colors?.destructive || "oklch(0.65 0.15 25.723)"};
          --muted-foreground: ${custom?.colors?.mutedForeground || "oklch(0.65 0 0)"};
          --corner-border: ${custom?.colors?.cornerBorder || "#a0a0a0"};
        }
      }
      @media (max-width: 640px) {
        :root, :host {
          --text-6xl: 2.5rem;
          --text-2xl: 1.25rem;
          --text-sm: 0.8125rem;
        }
      }
      @media (max-width: 480px) {
        :root, :host {
          --text-6xl: 2rem;
          --text-2xl: 1.125rem;
        }
      }
    </style>
  </head>
  <body style="width: 100vw; min-height: 100vh; overflow-x: hidden; overflow-y: auto;">
    <div
        style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            position: relative;
            width: 100%;
            min-height: 100vh;
            padding: 1rem;
        "
        >
${custom?.disableBackgroundGrid ? "" : `
      <div
        style="
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, ${custom?.colors?.gridColor || "var(--border)"} 1px, transparent 1px),
            linear-gradient(to bottom, ${custom?.colors?.gridColor || "var(--border)"} 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.6;
          pointer-events: none;
          width: 100vw;
          height: 100vh;
        "
      ></div>
      <div
        style="
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${custom?.colors?.background || "var(--background)"};
          mask-image: radial-gradient(ellipse at center, transparent 20%, black);
          -webkit-mask-image: radial-gradient(ellipse at center, transparent 20%, black);
          pointer-events: none;
        "
      ></div>
`}

<div
  style="
    position: relative;
    z-index: 10;
    border: 2px solid var(--border);
    background: ${custom?.colors?.cardBackground || "var(--background)"};
    padding: 1.5rem;
    max-width: 42rem;
    width: 100%;
  "
>
    ${custom?.disableCornerDecorations ? "" : `
        <!-- Corner decorations -->
        <div
          style="
            position: absolute;
            top: -2px;
            left: -2px;
            width: 2rem;
            height: 2rem;
            border-top: 4px solid var(--corner-border);
            border-left: 4px solid var(--corner-border);
          "
        ></div>
        <div
          style="
            position: absolute;
            top: -2px;
            right: -2px;
            width: 2rem;
            height: 2rem;
            border-top: 4px solid var(--corner-border);
            border-right: 4px solid var(--corner-border);
          "
        ></div>
  
        <div
          style="
            position: absolute;
            bottom: -2px;
            left: -2px;
            width: 2rem;
            height: 2rem;
            border-bottom: 4px solid var(--corner-border);
            border-left: 4px solid var(--corner-border);
          "
        ></div>
        <div
          style="
            position: absolute;
            bottom: -2px;
            right: -2px;
            width: 2rem;
            height: 2rem;
            border-bottom: 4px solid var(--corner-border);
            border-right: 4px solid var(--corner-border);
          "
        ></div>`}

        <div style="text-align: center; margin-bottom: 1.5rem;">
          <div style="margin-bottom: 1.5rem;">
            <div
              style="
                display: inline-block;
                border: 2px solid ${custom?.disableTitleBorder ? "transparent" : custom?.colors?.titleBorder || "var(--destructive)"};
                padding: 0.375rem 1rem;
              "
            >
              <h1
                style="
                  font-size: var(--text-6xl);
                  font-weight: var(--font-weight-semibold);
                  color: ${custom?.colors?.titleColor || "var(--foreground)"};
                  letter-spacing: -0.02em;
                  margin: 0;
                "
              >
                ERROR
              </h1>
            </div>
            <div
              style="
                height: 2px;
                background-color: var(--border);
                width: calc(100% + 3rem);
                margin-left: -1.5rem;
                margin-top: 1.5rem;
              "
            ></div>
          </div>

          <h2
            style="
              font-size: var(--text-2xl);
              font-weight: var(--font-weight-semibold);
              color: var(--foreground);
              margin: 0 0 1rem;
            "
          >
            Something went wrong
          </h2>

          <div
            style="
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                border: 2px solid var(--border);
                background-color: var(--muted);
                padding: 0.375rem 0.75rem;
                margin: 0 0 1rem;
                flex-wrap: wrap;
                justify-content: center;
            "
            >
            <span
                style="
                font-size: 0.75rem;
                color: var(--muted-foreground);
                font-weight: var(--font-weight-semibold);
                "
            >
                CODE:
            </span>
            <span
                style="
                font-size: var(--text-sm);
                font-family: var(--default-mono-font-family, monospace);
                color: var(--foreground);
                word-break: break-all;
                "
            >
                ${sanitize(code)}
            </span>
            </div>

          <p
            style="
              color: var(--muted-foreground);
              max-width: 28rem;
              margin: 0 auto;
              font-size: var(--text-sm);
              line-height: 1.5;
              text-wrap: pretty;
            "
          >
            ${!description ? `We encountered an unexpected error. Please try again or return to the home page. If you're a developer, you can find more information about the error <a href='https://better-auth.com/docs/reference/errors/${encodeURIComponent(code)}' target='_blank' rel="noopener noreferrer" style='color: var(--foreground); text-decoration: underline;'>here</a>.` : description}
          </p>
        </div>

        <div
          style="
            display: flex;
            gap: 0.75rem;
            margin-top: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
          "
        >
          <a
            href="/"
            style="
              text-decoration: none;
            "
          >
            <div
              style="
                border: 2px solid var(--border);
                background: var(--primary);
                color: var(--primary-foreground);
                padding: 0.5rem 1rem;
                border-radius: 0;
                white-space: nowrap;
              "
              class="btn"
            >
              Go Home
            </div>
          </a>
          <a
            href="https://better-auth.com/docs/reference/errors/${encodeURIComponent(code)}?askai=${encodeURIComponent(`What does the error code ${code} mean?`)}"
            target="_blank"
            rel="noopener noreferrer"
            style="
              text-decoration: none;
            "
          >
            <div
              style="
                border: 2px solid var(--border);
                background: transparent;
                color: var(--foreground);
                padding: 0.5rem 1rem;
                border-radius: 0;
                white-space: nowrap;
              "
              class="btn"
            >
              Ask AI
            </div>
          </a>
        </div>
      </div>
    </div>
  </body>
</html>`;
};
var error = createAuthEndpoint("/error", {
	method: "GET",
	metadata: {
		...HIDE_METADATA,
		openapi: {
			description: "Displays an error page",
			responses: { "200": {
				description: "Success",
				content: { "text/html": { schema: {
					type: "string",
					description: "The HTML content of the error page"
				} } }
			} }
		}
	}
}, async (c) => {
	const url = new URL(c.request?.url || "");
	const unsanitizedCode = url.searchParams.get("error") || "UNKNOWN";
	const unsanitizedDescription = url.searchParams.get("error_description") || null;
	const safeCode = /^[\'A-Za-z0-9_-]+$/.test(unsanitizedCode || "") ? unsanitizedCode : "UNKNOWN";
	const safeDescription = unsanitizedDescription ? sanitize(unsanitizedDescription) : null;
	const queryParams = new URLSearchParams();
	queryParams.set("error", safeCode);
	if (unsanitizedDescription) queryParams.set("error_description", unsanitizedDescription);
	const options = c.context.options;
	const errorURL = options.onAPIError?.errorURL;
	if (errorURL) return new Response(null, {
		status: 302,
		headers: { Location: `${errorURL}${errorURL.includes("?") ? "&" : "?"}${queryParams.toString()}` }
	});
	if (isProduction && !options.onAPIError?.customizeDefaultErrorPage) return new Response(null, {
		status: 302,
		headers: { Location: `/?${queryParams.toString()}` }
	});
	return new Response(html(c.context.options, safeCode, safeDescription), { headers: { "Content-Type": "text/html" } });
});
var ok = createAuthEndpoint("/ok", {
	method: "GET",
	metadata: {
		...HIDE_METADATA,
		openapi: {
			description: "Check if the API is working",
			responses: { "200": {
				description: "API is working",
				content: { "application/json": { schema: {
					type: "object",
					properties: { ok: {
						type: "boolean",
						description: "Indicates if the API is working"
					} },
					required: ["ok"]
				} } }
			} }
		}
	}
}, async (ctx) => {
	return ctx.json({ ok: true });
});
async function validatePassword(ctx, data) {
	const credentialAccount = (await ctx.context.internalAdapter.findAccounts(data.userId))?.find((account) => account.providerId === "credential");
	const currentPassword = credentialAccount?.password;
	if (!credentialAccount || !currentPassword) return false;
	return await ctx.context.password.verify({
		hash: currentPassword,
		password: data.password
	});
}
async function checkPassword(userId, c) {
	const credentialAccount = (await c.context.internalAdapter.findAccounts(userId))?.find((account) => account.providerId === "credential");
	const currentPassword = credentialAccount?.password;
	if (!credentialAccount || !currentPassword || !c.body.password) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.CREDENTIAL_ACCOUNT_NOT_FOUND);
	if (!await c.context.password.verify({
		hash: currentPassword,
		password: c.body.password
	})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	return true;
}
function redirectError(ctx, callbackURL, query) {
	const url = callbackURL ? new URL(callbackURL, ctx.baseURL) : new URL(`${ctx.baseURL}/error`);
	if (query) Object.entries(query).forEach(([k, v]) => url.searchParams.set(k, v));
	return url.href;
}
function redirectCallback(ctx, callbackURL, query) {
	const url = new URL(callbackURL, ctx.baseURL);
	if (query) Object.entries(query).forEach(([k, v]) => url.searchParams.set(k, v));
	return url.href;
}
var requestPasswordReset = createAuthEndpoint("/request-password-reset", {
	method: "POST",
	body: object({
		email: email().meta({ description: "The email address of the user to send a password reset email to" }),
		redirectTo: string().meta({ description: "The URL to redirect the user to reset their password. If the token isn't valid or expired, it'll be redirected with a query parameter `?error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?token=VALID_TOKEN" }).optional()
	}),
	metadata: { openapi: {
		operationId: "requestPasswordReset",
		description: "Send a password reset email to the user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					status: { type: "boolean" },
					message: { type: "string" }
				}
			} } }
		} }
	} },
	use: [originCheck((ctx) => ctx.body.redirectTo)]
}, async (ctx) => {
	if (!ctx.context.options.emailAndPassword?.sendResetPassword) {
		ctx.context.logger.error("Reset password isn't enabled.Please pass an emailAndPassword.sendResetPassword function in your auth config!");
		throw APIError.from("BAD_REQUEST", {
			message: "Reset password isn't enabled",
			code: "RESET_PASSWORD_DISABLED"
		});
	}
	const { email, redirectTo } = ctx.body;
	const user = await ctx.context.internalAdapter.findUserByEmail(email, { includeAccounts: true });
	if (!user) {
		/**
		* We simulate the verification token generation and the database lookup
		* to mitigate timing attacks.
		*/
		generateId(24);
		await ctx.context.internalAdapter.findVerificationValue("dummy-verification-token");
		ctx.context.logger.error("Reset Password: User not found", { email });
		return ctx.json({
			status: true,
			message: "If this email exists in our system, check your email for the reset link"
		});
	}
	const expiresAt = getDate(ctx.context.options.emailAndPassword.resetPasswordTokenExpiresIn || 3600 * 1, "sec");
	const verificationToken = generateId(24);
	await ctx.context.internalAdapter.createVerificationValue({
		value: user.user.id,
		identifier: `reset-password:${verificationToken}`,
		expiresAt
	});
	const callbackURL = redirectTo ? encodeURIComponent(redirectTo) : "";
	const url = `${ctx.context.baseURL}/reset-password/${verificationToken}?callbackURL=${callbackURL}`;
	await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailAndPassword.sendResetPassword({
		user: user.user,
		url,
		token: verificationToken
	}, ctx.request));
	return ctx.json({
		status: true,
		message: "If this email exists in our system, check your email for the reset link"
	});
});
var requestPasswordResetCallback = createAuthEndpoint("/reset-password/:token", {
	method: "GET",
	operationId: "forgetPasswordCallback",
	query: object({ callbackURL: string().meta({ description: "The URL to redirect the user to reset their password" }) }),
	use: [originCheck((ctx) => ctx.query.callbackURL)],
	metadata: { openapi: {
		operationId: "resetPasswordCallback",
		description: "Redirects the user to the callback URL with the token",
		parameters: [{
			name: "token",
			in: "path",
			required: true,
			description: "The token to reset the password",
			schema: { type: "string" }
		}, {
			name: "callbackURL",
			in: "query",
			required: true,
			description: "The URL to redirect the user to reset their password",
			schema: { type: "string" }
		}],
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { token: { type: "string" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const { token } = ctx.params;
	const { callbackURL } = ctx.query;
	if (!token || !callbackURL) throw ctx.redirect(redirectError(ctx.context, callbackURL, { error: "INVALID_TOKEN" }));
	const verification = await ctx.context.internalAdapter.findVerificationValue(`reset-password:${token}`);
	if (!verification || verification.expiresAt < /* @__PURE__ */ new Date()) throw ctx.redirect(redirectError(ctx.context, callbackURL, { error: "INVALID_TOKEN" }));
	throw ctx.redirect(redirectCallback(ctx.context, callbackURL, { token }));
});
var resetPassword = createAuthEndpoint("/reset-password", {
	method: "POST",
	operationId: "resetPassword",
	query: object({ token: string().optional() }).optional(),
	body: object({
		newPassword: string().meta({ description: "The new password to set" }),
		token: string().meta({ description: "The token to reset the password" }).optional()
	}),
	metadata: { openapi: {
		operationId: "resetPassword",
		description: "Reset the password for a user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: { type: "boolean" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const token = ctx.body.token || ctx.query?.token;
	if (!token) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_TOKEN);
	const { newPassword } = ctx.body;
	const minLength = ctx.context.password?.config.minPasswordLength;
	const maxLength = ctx.context.password?.config.maxPasswordLength;
	if (newPassword.length < minLength) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_SHORT);
	if (newPassword.length > maxLength) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_LONG);
	const id = `reset-password:${token}`;
	const verification = await ctx.context.internalAdapter.findVerificationValue(id);
	if (!verification || verification.expiresAt < /* @__PURE__ */ new Date()) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_TOKEN);
	const userId = verification.value;
	const hashedPassword = await ctx.context.password.hash(newPassword);
	if (!(await ctx.context.internalAdapter.findAccounts(userId)).find((ac) => ac.providerId === "credential")) await ctx.context.internalAdapter.createAccount({
		userId,
		providerId: "credential",
		password: hashedPassword,
		accountId: userId
	});
	else await ctx.context.internalAdapter.updatePassword(userId, hashedPassword);
	await ctx.context.internalAdapter.deleteVerificationByIdentifier(id);
	if (ctx.context.options.emailAndPassword?.onPasswordReset) {
		const user = await ctx.context.internalAdapter.findUserById(userId);
		if (user) await ctx.context.options.emailAndPassword.onPasswordReset({ user }, ctx.request);
	}
	if (ctx.context.options.emailAndPassword?.revokeSessionsOnPasswordReset) await ctx.context.internalAdapter.deleteSessions(userId);
	return ctx.json({ status: true });
});
var verifyPassword$1 = createAuthEndpoint("/verify-password", {
	method: "POST",
	body: object({ password: string().meta({ description: "The password to verify" }) }),
	metadata: {
		scope: "server",
		openapi: {
			operationId: "verifyPassword",
			description: "Verify the current user's password",
			responses: { "200": {
				description: "Success",
				content: { "application/json": { schema: {
					type: "object",
					properties: { status: { type: "boolean" } }
				} } }
			} }
		}
	},
	use: [sensitiveSessionMiddleware]
}, async (ctx) => {
	const { password } = ctx.body;
	const session = ctx.context.session;
	if (!await validatePassword(ctx, {
		password,
		userId: session.user.id
	})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	return ctx.json({ status: true });
});
var socialSignInBodySchema = object({
	callbackURL: string().meta({ description: "Callback URL to redirect to after the user has signed in" }).optional(),
	newUserCallbackURL: string().optional(),
	errorCallbackURL: string().meta({ description: "Callback URL to redirect to if an error happens" }).optional(),
	provider: SocialProviderListEnum,
	disableRedirect: boolean$2().meta({ description: "Disable automatic redirection to the provider. Useful for handling the redirection yourself" }).optional(),
	idToken: optional(object({
		token: string().meta({ description: "ID token from the provider" }),
		nonce: string().meta({ description: "Nonce used to generate the token" }).optional(),
		accessToken: string().meta({ description: "Access token from the provider" }).optional(),
		refreshToken: string().meta({ description: "Refresh token from the provider" }).optional(),
		expiresAt: number().meta({ description: "Expiry date of the token" }).optional(),
		user: object({
			name: object({
				firstName: string().optional(),
				lastName: string().optional()
			}).optional(),
			email: string().optional()
		}).meta({ description: "The user object from the provider. Only available for some providers like Apple." }).optional()
	})),
	scopes: array(string()).meta({ description: "Array of scopes to request from the provider. This will override the default scopes passed." }).optional(),
	requestSignUp: boolean$2().meta({ description: "Explicitly request sign-up. Useful when disableImplicitSignUp is true for this provider" }).optional(),
	loginHint: string().meta({ description: "The login hint to use for the authorization code request" }).optional(),
	additionalData: record(string(), any()).optional().meta({ description: "Additional data to be passed through the OAuth flow" })
});
var signInSocial = () => createAuthEndpoint("/sign-in/social", {
	method: "POST",
	operationId: "socialSignIn",
	body: socialSignInBodySchema,
	metadata: {
		$Infer: {
			body: {},
			returned: {}
		},
		openapi: {
			description: "Sign in with a social provider",
			operationId: "socialSignIn",
			responses: { "200": {
				description: "Success - Returns either session details or redirect URL",
				content: { "application/json": { schema: {
					type: "object",
					description: "Session response when idToken is provided",
					properties: {
						token: { type: "string" },
						user: {
							type: "object",
							$ref: "#/components/schemas/User"
						},
						url: { type: "string" },
						redirect: {
							type: "boolean",
							enum: [false]
						}
					},
					required: [
						"redirect",
						"token",
						"user"
					]
				} } }
			} }
		}
	}
}, async (c) => {
	const provider = await getAwaitableValue(c.context.socialProviders, { value: c.body.provider });
	if (!provider) {
		c.context.logger.error("Provider not found. Make sure to add the provider in your auth config", { provider: c.body.provider });
		throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.PROVIDER_NOT_FOUND);
	}
	if (c.body.idToken) {
		if (!provider.verifyIdToken) {
			c.context.logger.error("Provider does not support id token verification", { provider: c.body.provider });
			throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.ID_TOKEN_NOT_SUPPORTED);
		}
		const { token, nonce } = c.body.idToken;
		if (!await provider.verifyIdToken(token, nonce)) {
			c.context.logger.error("Invalid id token", { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_TOKEN);
		}
		const userInfo = await provider.getUserInfo({
			idToken: token,
			accessToken: c.body.idToken.accessToken,
			refreshToken: c.body.idToken.refreshToken,
			user: c.body.idToken.user
		});
		if (!userInfo || !userInfo?.user) {
			c.context.logger.error("Failed to get user info", { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO);
		}
		if (!userInfo.user.email) {
			c.context.logger.error("User email not found", { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.USER_EMAIL_NOT_FOUND);
		}
		const data = await handleOAuthUserInfo(c, {
			userInfo: {
				...userInfo.user,
				email: userInfo.user.email,
				id: String(userInfo.user.id),
				name: userInfo.user.name || "",
				image: userInfo.user.image,
				emailVerified: userInfo.user.emailVerified || false
			},
			account: {
				providerId: provider.id,
				accountId: String(userInfo.user.id),
				accessToken: c.body.idToken.accessToken
			},
			callbackURL: c.body.callbackURL,
			disableSignUp: provider.disableImplicitSignUp && !c.body.requestSignUp || provider.disableSignUp
		});
		if (data.error) throw APIError.from("UNAUTHORIZED", {
			message: data.error,
			code: "OAUTH_LINK_ERROR"
		});
		await setSessionCookie(c, data.data);
		return c.json({
			redirect: false,
			token: data.data.session.token,
			url: void 0,
			user: parseUserOutput(c.context.options, data.data.user)
		});
	}
	const { codeVerifier, state } = await generateState(c, void 0, c.body.additionalData);
	const url = await provider.createAuthorizationURL({
		state,
		codeVerifier,
		redirectURI: `${c.context.baseURL}/callback/${provider.id}`,
		scopes: c.body.scopes,
		loginHint: c.body.loginHint
	});
	if (!c.body.disableRedirect) c.setHeader("Location", url.toString());
	return c.json({
		url: url.toString(),
		redirect: !c.body.disableRedirect
	});
});
var signInEmail = () => createAuthEndpoint("/sign-in/email", {
	method: "POST",
	operationId: "signInEmail",
	use: [formCsrfMiddleware],
	body: object({
		email: string().meta({ description: "Email of the user" }),
		password: string().meta({ description: "Password of the user" }),
		callbackURL: string().meta({ description: "Callback URL to use as a redirect for email verification" }).optional(),
		rememberMe: boolean$2().meta({ description: "If this is false, the session will not be remembered. Default is `true`." }).default(true).optional()
	}),
	metadata: {
		allowedMediaTypes: ["application/x-www-form-urlencoded", "application/json"],
		$Infer: {
			body: {},
			returned: {}
		},
		openapi: {
			operationId: "signInEmail",
			description: "Sign in with email and password",
			responses: { "200": {
				description: "Success - Returns either session details or redirect URL",
				content: { "application/json": { schema: {
					type: "object",
					description: "Session response when idToken is provided",
					properties: {
						redirect: {
							type: "boolean",
							enum: [false]
						},
						token: {
							type: "string",
							description: "Session token"
						},
						url: {
							type: "string",
							nullable: true
						},
						user: {
							type: "object",
							$ref: "#/components/schemas/User"
						}
					},
					required: [
						"redirect",
						"token",
						"user"
					]
				} } }
			} }
		}
	}
}, async (ctx) => {
	if (!ctx.context.options?.emailAndPassword?.enabled) {
		ctx.context.logger.error("Email and password is not enabled. Make sure to enable it in the options on you `auth.ts` file. Check `https://better-auth.com/docs/authentication/email-password` for more!");
		throw APIError.from("BAD_REQUEST", {
			code: "EMAIL_PASSWORD_DISABLED",
			message: "Email and password is not enabled"
		});
	}
	const { email: email$1, password } = ctx.body;
	if (!email().safeParse(email$1).success) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_EMAIL);
	const user = await ctx.context.internalAdapter.findUserByEmail(email$1, { includeAccounts: true });
	if (!user) {
		await ctx.context.password.hash(password);
		ctx.context.logger.error("User not found", { email: email$1 });
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD);
	}
	const credentialAccount = user.accounts.find((a) => a.providerId === "credential");
	if (!credentialAccount) {
		await ctx.context.password.hash(password);
		ctx.context.logger.error("Credential account not found", { email: email$1 });
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD);
	}
	const currentPassword = credentialAccount?.password;
	if (!currentPassword) {
		await ctx.context.password.hash(password);
		ctx.context.logger.error("Password not found", { email: email$1 });
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD);
	}
	if (!await ctx.context.password.verify({
		hash: currentPassword,
		password
	})) {
		ctx.context.logger.error("Invalid password");
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD);
	}
	if (ctx.context.options?.emailAndPassword?.requireEmailVerification && !user.user.emailVerified) {
		if (!ctx.context.options?.emailVerification?.sendVerificationEmail) throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.EMAIL_NOT_VERIFIED);
		if (ctx.context.options?.emailVerification?.sendOnSignIn) {
			const token = await createEmailVerificationToken(ctx.context.secret, user.user.email, void 0, ctx.context.options.emailVerification?.expiresIn);
			const callbackURL = ctx.body.callbackURL ? encodeURIComponent(ctx.body.callbackURL) : encodeURIComponent("/");
			const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
			await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
				user: user.user,
				url,
				token
			}, ctx.request));
		}
		throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.EMAIL_NOT_VERIFIED);
	}
	const session = await ctx.context.internalAdapter.createSession(user.user.id, ctx.body.rememberMe === false);
	if (!session) {
		ctx.context.logger.error("Failed to create session");
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
	}
	await setSessionCookie(ctx, {
		session,
		user: user.user
	}, ctx.body.rememberMe === false);
	if (ctx.body.callbackURL) ctx.setHeader("Location", ctx.body.callbackURL);
	return ctx.json({
		redirect: !!ctx.body.callbackURL,
		token: session.token,
		url: ctx.body.callbackURL,
		user: parseUserOutput(ctx.context.options, user.user)
	});
});
var signOut = createAuthEndpoint("/sign-out", {
	method: "POST",
	operationId: "signOut",
	requireHeaders: true,
	metadata: { openapi: {
		operationId: "signOut",
		description: "Sign out the current user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { success: { type: "boolean" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const sessionCookieToken = await ctx.getSignedCookie(ctx.context.authCookies.sessionToken.name, ctx.context.secret);
	if (sessionCookieToken) try {
		await ctx.context.internalAdapter.deleteSession(sessionCookieToken);
	} catch (e) {
		ctx.context.logger.error("Failed to delete session from database", e);
	}
	deleteSessionCookie(ctx);
	return ctx.json({ success: true });
});
var signUpEmailBodySchema = object({
	name: string(),
	email: email(),
	password: string().nonempty(),
	image: string().optional(),
	callbackURL: string().optional(),
	rememberMe: boolean$2().optional()
}).and(record(string(), any()));
var signUpEmail = () => createAuthEndpoint("/sign-up/email", {
	method: "POST",
	operationId: "signUpWithEmailAndPassword",
	use: [formCsrfMiddleware],
	body: signUpEmailBodySchema,
	metadata: {
		allowedMediaTypes: ["application/x-www-form-urlencoded", "application/json"],
		$Infer: {
			body: {},
			returned: {}
		},
		openapi: {
			operationId: "signUpWithEmailAndPassword",
			description: "Sign up a user using email and password",
			requestBody: { content: { "application/json": { schema: {
				type: "object",
				properties: {
					name: {
						type: "string",
						description: "The name of the user"
					},
					email: {
						type: "string",
						description: "The email of the user"
					},
					password: {
						type: "string",
						description: "The password of the user"
					},
					image: {
						type: "string",
						description: "The profile image URL of the user"
					},
					callbackURL: {
						type: "string",
						description: "The URL to use for email verification callback"
					},
					rememberMe: {
						type: "boolean",
						description: "If this is false, the session will not be remembered. Default is `true`."
					}
				},
				required: [
					"name",
					"email",
					"password"
				]
			} } } },
			responses: {
				"200": {
					description: "Successfully created user",
					content: { "application/json": { schema: {
						type: "object",
						properties: {
							token: {
								type: "string",
								nullable: true,
								description: "Authentication token for the session"
							},
							user: {
								type: "object",
								properties: {
									id: {
										type: "string",
										description: "The unique identifier of the user"
									},
									email: {
										type: "string",
										format: "email",
										description: "The email address of the user"
									},
									name: {
										type: "string",
										description: "The name of the user"
									},
									image: {
										type: "string",
										format: "uri",
										nullable: true,
										description: "The profile image URL of the user"
									},
									emailVerified: {
										type: "boolean",
										description: "Whether the email has been verified"
									},
									createdAt: {
										type: "string",
										format: "date-time",
										description: "When the user was created"
									},
									updatedAt: {
										type: "string",
										format: "date-time",
										description: "When the user was last updated"
									}
								},
								required: [
									"id",
									"email",
									"name",
									"emailVerified",
									"createdAt",
									"updatedAt"
								]
							}
						},
						required: ["user"]
					} } }
				},
				"422": {
					description: "Unprocessable Entity. User already exists or failed to create user.",
					content: { "application/json": { schema: {
						type: "object",
						properties: { message: { type: "string" } }
					} } }
				}
			}
		}
	}
}, async (ctx) => {
	return runWithTransaction(ctx.context.adapter, async () => {
		if (!ctx.context.options.emailAndPassword?.enabled || ctx.context.options.emailAndPassword?.disableSignUp) throw APIError.from("BAD_REQUEST", {
			message: "Email and password sign up is not enabled",
			code: "EMAIL_PASSWORD_SIGN_UP_DISABLED"
		});
		const body = ctx.body;
		const { name, email: email$2, password, image, callbackURL: _callbackURL, rememberMe, ...rest } = body;
		if (!email().safeParse(email$2).success) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_EMAIL);
		if (!password || typeof password !== "string") throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
		const minPasswordLength = ctx.context.password.config.minPasswordLength;
		if (password.length < minPasswordLength) {
			ctx.context.logger.error("Password is too short");
			throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_SHORT);
		}
		const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
		if (password.length > maxPasswordLength) {
			ctx.context.logger.error("Password is too long");
			throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_LONG);
		}
		const shouldReturnGenericDuplicateResponse = ctx.context.options.emailAndPassword.requireEmailVerification;
		const shouldSkipAutoSignIn = ctx.context.options.emailAndPassword.autoSignIn === false || shouldReturnGenericDuplicateResponse;
		const additionalUserFields = parseUserInput(ctx.context.options, rest, "create");
		const normalizedEmail = email$2.toLowerCase();
		const dbUser = await ctx.context.internalAdapter.findUserByEmail(normalizedEmail);
		if (dbUser?.user) {
			ctx.context.logger.info(`Sign-up attempt for existing email: ${email$2}`);
			if (shouldReturnGenericDuplicateResponse) {
				/**
				* Hash the password to reduce timing differences
				* between existing and non-existing emails.
				*/
				await ctx.context.password.hash(password);
				if (ctx.context.options.emailAndPassword?.onExistingUserSignUp) await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailAndPassword.onExistingUserSignUp({ user: dbUser.user }, ctx.request));
				const now = /* @__PURE__ */ new Date();
				const generatedId = ctx.context.generateId({ model: "user" }) || generateId();
				const coreFields = {
					name,
					email: normalizedEmail,
					emailVerified: false,
					image: image || null,
					createdAt: now,
					updatedAt: now
				};
				const customSyntheticUser = ctx.context.options.emailAndPassword?.customSyntheticUser;
				let syntheticUser;
				if (customSyntheticUser) {
					const additionalFieldKeys = Object.keys(ctx.context.options.user?.additionalFields ?? {});
					const additionalFields = {};
					for (const key of additionalFieldKeys) if (key in additionalUserFields) additionalFields[key] = additionalUserFields[key];
					syntheticUser = customSyntheticUser({
						coreFields,
						additionalFields,
						id: generatedId
					});
				} else syntheticUser = {
					...coreFields,
					...additionalUserFields,
					id: generatedId
				};
				return ctx.json({
					token: null,
					user: parseUserOutput(ctx.context.options, syntheticUser)
				});
			}
			throw APIError.from("UNPROCESSABLE_ENTITY", BASE_ERROR_CODES.USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL);
		}
		/**
		* Hash the password
		*
		* This is done prior to creating the user
		* to ensure that any plugin that
		* may break the hashing should break
		* before the user is created.
		*/
		const hash = await ctx.context.password.hash(password);
		let createdUser;
		try {
			createdUser = await ctx.context.internalAdapter.createUser({
				email: normalizedEmail,
				name,
				image,
				...additionalUserFields,
				emailVerified: false
			});
			if (!createdUser) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.FAILED_TO_CREATE_USER);
		} catch (e) {
			if (isDevelopment()) ctx.context.logger.error("Failed to create user", e);
			if (isAPIError(e)) throw e;
			ctx.context.logger?.error("Failed to create user", e);
			throw APIError.from("UNPROCESSABLE_ENTITY", BASE_ERROR_CODES.FAILED_TO_CREATE_USER);
		}
		if (!createdUser) throw APIError.from("UNPROCESSABLE_ENTITY", BASE_ERROR_CODES.FAILED_TO_CREATE_USER);
		await ctx.context.internalAdapter.linkAccount({
			userId: createdUser.id,
			providerId: "credential",
			accountId: createdUser.id,
			password: hash
		});
		if (ctx.context.options.emailVerification?.sendOnSignUp ?? ctx.context.options.emailAndPassword.requireEmailVerification) {
			const token = await createEmailVerificationToken(ctx.context.secret, createdUser.email, void 0, ctx.context.options.emailVerification?.expiresIn);
			const callbackURL = body.callbackURL ? encodeURIComponent(body.callbackURL) : encodeURIComponent("/");
			const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
			if (ctx.context.options.emailVerification?.sendVerificationEmail) await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
				user: createdUser,
				url,
				token
			}, ctx.request));
		}
		if (shouldSkipAutoSignIn) return ctx.json({
			token: null,
			user: parseUserOutput(ctx.context.options, createdUser)
		});
		const session = await ctx.context.internalAdapter.createSession(createdUser.id, rememberMe === false);
		if (!session) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
		await setSessionCookie(ctx, {
			session,
			user: createdUser
		}, rememberMe === false);
		return ctx.json({
			token: session.token,
			user: parseUserOutput(ctx.context.options, createdUser)
		});
	});
});
var updateSessionBodySchema = record(string().meta({ description: "Field name must be a string" }), any());
var updateSession = () => createAuthEndpoint("/update-session", {
	method: "POST",
	operationId: "updateSession",
	body: updateSessionBodySchema,
	use: [sessionMiddleware],
	metadata: {
		$Infer: { body: {} },
		openapi: {
			operationId: "updateSession",
			description: "Update the current session",
			responses: { "200": {
				description: "Success",
				content: { "application/json": { schema: {
					type: "object",
					properties: { session: {
						type: "object",
						$ref: "#/components/schemas/Session"
					} }
				} } }
			} }
		}
	}
}, async (ctx) => {
	const body = ctx.body;
	if (typeof body !== "object" || Array.isArray(body)) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.BODY_MUST_BE_AN_OBJECT);
	const session = ctx.context.session;
	const additionalFields = parseSessionInput(ctx.context.options, body, "update");
	if (Object.keys(additionalFields).length === 0) throw APIError.fromStatus("BAD_REQUEST", { message: "No fields to update" });
	const newSession = await ctx.context.internalAdapter.updateSession(session.session.token, {
		...additionalFields,
		updatedAt: /* @__PURE__ */ new Date()
	}) ?? {
		...session.session,
		...additionalFields,
		updatedAt: /* @__PURE__ */ new Date()
	};
	await setSessionCookie(ctx, {
		session: newSession,
		user: session.user
	});
	return ctx.json({ session: parseSessionOutput(ctx.context.options, newSession) });
});
var updateUserBodySchema = record(string().meta({ description: "Field name must be a string" }), any());
var updateUser = () => createAuthEndpoint("/update-user", {
	method: "POST",
	operationId: "updateUser",
	body: updateUserBodySchema,
	use: [sessionMiddleware],
	metadata: {
		$Infer: { body: {} },
		openapi: {
			operationId: "updateUser",
			description: "Update the current user",
			requestBody: { content: { "application/json": { schema: {
				type: "object",
				properties: {
					name: {
						type: "string",
						description: "The name of the user"
					},
					image: {
						type: "string",
						description: "The image of the user",
						nullable: true
					}
				}
			} } } },
			responses: { "200": {
				description: "Success",
				content: { "application/json": { schema: {
					type: "object",
					properties: { user: {
						type: "object",
						$ref: "#/components/schemas/User"
					} }
				} } }
			} }
		}
	}
}, async (ctx) => {
	const body = ctx.body;
	if (typeof body !== "object" || Array.isArray(body)) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.BODY_MUST_BE_AN_OBJECT);
	if (body.email) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.EMAIL_CAN_NOT_BE_UPDATED);
	const { name, image, ...rest } = body;
	const session = ctx.context.session;
	const additionalFields = parseUserInput(ctx.context.options, rest, "update");
	if (image === void 0 && name === void 0 && Object.keys(additionalFields).length === 0) throw APIError.fromStatus("BAD_REQUEST", { message: "No fields to update" });
	const updatedUser = await ctx.context.internalAdapter.updateUser(session.user.id, {
		name,
		image,
		...additionalFields
	}) ?? {
		...session.user,
		...name !== void 0 && { name },
		...image !== void 0 && { image },
		...additionalFields
	};
	/**
	* Update the session cookie with the new user data
	*/
	await setSessionCookie(ctx, {
		session: session.session,
		user: updatedUser
	});
	return ctx.json({ status: true });
});
var changePassword = createAuthEndpoint("/change-password", {
	method: "POST",
	operationId: "changePassword",
	body: object({
		newPassword: string().meta({ description: "The new password to set" }),
		currentPassword: string().meta({ description: "The current password is required" }),
		revokeOtherSessions: boolean$2().meta({ description: "Must be a boolean value" }).optional()
	}),
	use: [sensitiveSessionMiddleware],
	metadata: { openapi: {
		operationId: "changePassword",
		description: "Change the password of the user",
		responses: { "200": {
			description: "Password successfully changed",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					token: {
						type: "string",
						nullable: true,
						description: "New session token if other sessions were revoked"
					},
					user: {
						type: "object",
						properties: {
							id: {
								type: "string",
								description: "The unique identifier of the user"
							},
							email: {
								type: "string",
								format: "email",
								description: "The email address of the user"
							},
							name: {
								type: "string",
								description: "The name of the user"
							},
							image: {
								type: "string",
								format: "uri",
								nullable: true,
								description: "The profile image URL of the user"
							},
							emailVerified: {
								type: "boolean",
								description: "Whether the email has been verified"
							},
							createdAt: {
								type: "string",
								format: "date-time",
								description: "When the user was created"
							},
							updatedAt: {
								type: "string",
								format: "date-time",
								description: "When the user was last updated"
							}
						},
						required: [
							"id",
							"email",
							"name",
							"emailVerified",
							"createdAt",
							"updatedAt"
						]
					}
				},
				required: ["user"]
			} } }
		} }
	} }
}, async (ctx) => {
	const { newPassword, currentPassword, revokeOtherSessions } = ctx.body;
	const session = ctx.context.session;
	const minPasswordLength = ctx.context.password.config.minPasswordLength;
	if (newPassword.length < minPasswordLength) {
		ctx.context.logger.error("Password is too short");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_SHORT);
	}
	const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
	if (newPassword.length > maxPasswordLength) {
		ctx.context.logger.error("Password is too long");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_LONG);
	}
	const account = (await ctx.context.internalAdapter.findAccounts(session.user.id)).find((account) => account.providerId === "credential" && account.password);
	if (!account || !account.password) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.CREDENTIAL_ACCOUNT_NOT_FOUND);
	const passwordHash = await ctx.context.password.hash(newPassword);
	if (!await ctx.context.password.verify({
		hash: account.password,
		password: currentPassword
	})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	await ctx.context.internalAdapter.updateAccount(account.id, { password: passwordHash });
	let token = null;
	if (revokeOtherSessions) {
		await ctx.context.internalAdapter.deleteSessions(session.user.id);
		const newSession = await ctx.context.internalAdapter.createSession(session.user.id);
		if (!newSession) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_GET_SESSION);
		await setSessionCookie(ctx, {
			session: newSession,
			user: session.user
		});
		token = newSession.token;
	}
	return ctx.json({
		token,
		user: parseUserOutput(ctx.context.options, session.user)
	});
});
var setPassword = createAuthEndpoint({
	method: "POST",
	body: object({ newPassword: string().meta({ description: "The new password to set is required" }) }),
	use: [sensitiveSessionMiddleware]
}, async (ctx) => {
	const { newPassword } = ctx.body;
	const session = ctx.context.session;
	const minPasswordLength = ctx.context.password.config.minPasswordLength;
	if (newPassword.length < minPasswordLength) {
		ctx.context.logger.error("Password is too short");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_SHORT);
	}
	const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
	if (newPassword.length > maxPasswordLength) {
		ctx.context.logger.error("Password is too long");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_LONG);
	}
	const account = (await ctx.context.internalAdapter.findAccounts(session.user.id)).find((account) => account.providerId === "credential" && account.password);
	const passwordHash = await ctx.context.password.hash(newPassword);
	if (!account) {
		await ctx.context.internalAdapter.linkAccount({
			userId: session.user.id,
			providerId: "credential",
			accountId: session.user.id,
			password: passwordHash
		});
		return ctx.json({ status: true });
	}
	throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_ALREADY_SET);
});
var deleteUser = createAuthEndpoint("/delete-user", {
	method: "POST",
	use: [sensitiveSessionMiddleware],
	body: object({
		callbackURL: string().meta({ description: "The callback URL to redirect to after the user is deleted" }).optional(),
		password: string().meta({ description: "The password of the user is required to delete the user" }).optional(),
		token: string().meta({ description: "The token to delete the user is required" }).optional()
	}),
	metadata: { openapi: {
		operationId: "deleteUser",
		description: "Delete the user",
		requestBody: { content: { "application/json": { schema: {
			type: "object",
			properties: {
				callbackURL: {
					type: "string",
					description: "The callback URL to redirect to after the user is deleted"
				},
				password: {
					type: "string",
					description: "The user's password. Required if session is not fresh"
				},
				token: {
					type: "string",
					description: "The deletion verification token"
				}
			}
		} } } },
		responses: { "200": {
			description: "User deletion processed successfully",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					success: {
						type: "boolean",
						description: "Indicates if the operation was successful"
					},
					message: {
						type: "string",
						enum: ["User deleted", "Verification email sent"],
						description: "Status message of the deletion process"
					}
				},
				required: ["success", "message"]
			} } }
		} }
	} }
}, async (ctx) => {
	if (!ctx.context.options.user?.deleteUser?.enabled) {
		ctx.context.logger.error("Delete user is disabled. Enable it in the options");
		throw APIError.fromStatus("NOT_FOUND");
	}
	const session = ctx.context.session;
	if (ctx.body.password) {
		const account = (await ctx.context.internalAdapter.findAccounts(session.user.id)).find((account) => account.providerId === "credential" && account.password);
		if (!account || !account.password) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.CREDENTIAL_ACCOUNT_NOT_FOUND);
		if (!await ctx.context.password.verify({
			hash: account.password,
			password: ctx.body.password
		})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	}
	if (ctx.body.token) {
		await deleteUserCallback({
			...ctx,
			query: { token: ctx.body.token }
		});
		return ctx.json({
			success: true,
			message: "User deleted"
		});
	}
	if (ctx.context.options.user.deleteUser?.sendDeleteAccountVerification) {
		const token = generateRandomString(32, "0-9", "a-z");
		await ctx.context.internalAdapter.createVerificationValue({
			value: session.user.id,
			identifier: `delete-account-${token}`,
			expiresAt: new Date(Date.now() + (ctx.context.options.user.deleteUser?.deleteTokenExpiresIn || 3600 * 24) * 1e3)
		});
		const url = `${ctx.context.baseURL}/delete-user/callback?token=${token}&callbackURL=${encodeURIComponent(ctx.body.callbackURL || "/")}`;
		await ctx.context.runInBackgroundOrAwait(ctx.context.options.user.deleteUser.sendDeleteAccountVerification({
			user: session.user,
			url,
			token
		}, ctx.request));
		return ctx.json({
			success: true,
			message: "Verification email sent"
		});
	}
	if (!ctx.body.password && ctx.context.sessionConfig.freshAge !== 0) {
		const currentAge = new Date(session.session.createdAt).getTime();
		const freshAge = ctx.context.sessionConfig.freshAge * 1e3;
		if (Date.now() - currentAge > freshAge) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.SESSION_EXPIRED);
	}
	const beforeDelete = ctx.context.options.user.deleteUser?.beforeDelete;
	if (beforeDelete) await beforeDelete(session.user, ctx.request);
	await ctx.context.internalAdapter.deleteUser(session.user.id);
	await ctx.context.internalAdapter.deleteSessions(session.user.id);
	deleteSessionCookie(ctx);
	const afterDelete = ctx.context.options.user.deleteUser?.afterDelete;
	if (afterDelete) await afterDelete(session.user, ctx.request);
	return ctx.json({
		success: true,
		message: "User deleted"
	});
});
var deleteUserCallback = createAuthEndpoint("/delete-user/callback", {
	method: "GET",
	query: object({
		token: string().meta({ description: "The token to verify the deletion request" }),
		callbackURL: string().meta({ description: "The URL to redirect to after deletion" }).optional()
	}),
	use: [originCheck((ctx) => ctx.query.callbackURL)],
	metadata: { openapi: {
		description: "Callback to complete user deletion with verification token",
		responses: { "200": {
			description: "User successfully deleted",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					success: {
						type: "boolean",
						description: "Indicates if the deletion was successful"
					},
					message: {
						type: "string",
						enum: ["User deleted"],
						description: "Confirmation message"
					}
				},
				required: ["success", "message"]
			} } }
		} }
	} }
}, async (ctx) => {
	if (!ctx.context.options.user?.deleteUser?.enabled) {
		ctx.context.logger.error("Delete user is disabled. Enable it in the options");
		throw APIError.from("NOT_FOUND", {
			message: "Not found",
			code: "NOT_FOUND"
		});
	}
	const session = await getSessionFromCtx(ctx);
	if (!session) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO);
	const token = await ctx.context.internalAdapter.findVerificationValue(`delete-account-${ctx.query.token}`);
	if (!token || token.expiresAt < /* @__PURE__ */ new Date()) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.INVALID_TOKEN);
	if (token.value !== session.user.id) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.INVALID_TOKEN);
	const beforeDelete = ctx.context.options.user.deleteUser?.beforeDelete;
	if (beforeDelete) await beforeDelete(session.user, ctx.request);
	await ctx.context.internalAdapter.deleteUser(session.user.id);
	await ctx.context.internalAdapter.deleteSessions(session.user.id);
	await ctx.context.internalAdapter.deleteAccounts(session.user.id);
	await ctx.context.internalAdapter.deleteVerificationByIdentifier(`delete-account-${ctx.query.token}`);
	deleteSessionCookie(ctx);
	const afterDelete = ctx.context.options.user.deleteUser?.afterDelete;
	if (afterDelete) await afterDelete(session.user, ctx.request);
	if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL || "/");
	return ctx.json({
		success: true,
		message: "User deleted"
	});
});
var changeEmail = createAuthEndpoint("/change-email", {
	method: "POST",
	body: object({
		newEmail: email().meta({ description: "The new email address to set must be a valid email address" }),
		callbackURL: string().meta({ description: "The URL to redirect to after email verification" }).optional()
	}),
	use: [sensitiveSessionMiddleware],
	metadata: { openapi: {
		operationId: "changeEmail",
		responses: { "200": {
			description: "Email change request processed successfully",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					user: {
						type: "object",
						$ref: "#/components/schemas/User"
					},
					status: {
						type: "boolean",
						description: "Indicates if the request was successful"
					},
					message: {
						type: "string",
						enum: ["Email updated", "Verification email sent"],
						description: "Status message of the email change process",
						nullable: true
					}
				},
				required: ["status"]
			} } }
		} }
	} }
}, async (ctx) => {
	if (!ctx.context.options.user?.changeEmail?.enabled) {
		ctx.context.logger.error("Change email is disabled.");
		throw APIError.fromStatus("BAD_REQUEST", { message: "Change email is disabled" });
	}
	const newEmail = ctx.body.newEmail.toLowerCase();
	if (newEmail === ctx.context.session.user.email) {
		ctx.context.logger.error("Email is the same");
		throw APIError.fromStatus("BAD_REQUEST", { message: "Email is the same" });
	}
	/**
	* Early config check: ensure at least one email-change flow is
	* available for the current session state. Without this, an
	* existing-email lookup would return 200 while a non-existing
	* email would later throw 400, leaking email existence.
	*/
	const canUpdateWithoutVerification = ctx.context.session.user.emailVerified !== true && ctx.context.options.user.changeEmail.updateEmailWithoutVerification;
	const canSendConfirmation = ctx.context.session.user.emailVerified && ctx.context.options.user.changeEmail.sendChangeEmailConfirmation;
	const canSendVerification = ctx.context.options.emailVerification?.sendVerificationEmail;
	if (!canUpdateWithoutVerification && !canSendConfirmation && !canSendVerification) {
		ctx.context.logger.error("Verification email isn't enabled.");
		throw APIError.fromStatus("BAD_REQUEST", { message: "Verification email isn't enabled" });
	}
	if (await ctx.context.internalAdapter.findUserByEmail(newEmail)) {
		await createEmailVerificationToken(ctx.context.secret, ctx.context.session.user.email, newEmail, ctx.context.options.emailVerification?.expiresIn);
		ctx.context.logger.info("Change email attempt for existing email");
		return ctx.json({ status: true });
	}
	/**
	* If the email is not verified, we can update the email if the option is enabled
	*/
	if (canUpdateWithoutVerification) {
		await ctx.context.internalAdapter.updateUserByEmail(ctx.context.session.user.email, { email: newEmail });
		await setSessionCookie(ctx, {
			session: ctx.context.session.session,
			user: {
				...ctx.context.session.user,
				email: newEmail
			}
		});
		if (canSendVerification) {
			const token = await createEmailVerificationToken(ctx.context.secret, newEmail, void 0, ctx.context.options.emailVerification?.expiresIn);
			const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${ctx.body.callbackURL || "/"}`;
			await ctx.context.runInBackgroundOrAwait(canSendVerification({
				user: {
					...ctx.context.session.user,
					email: newEmail
				},
				url,
				token
			}, ctx.request));
		}
		return ctx.json({ status: true });
	}
	/**
	* If the email is verified, we need to send a verification email
	*/
	if (canSendConfirmation) {
		const token = await createEmailVerificationToken(ctx.context.secret, ctx.context.session.user.email, newEmail, ctx.context.options.emailVerification?.expiresIn, { requestType: "change-email-confirmation" });
		const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${ctx.body.callbackURL || "/"}`;
		await ctx.context.runInBackgroundOrAwait(canSendConfirmation({
			user: ctx.context.session.user,
			newEmail,
			url,
			token
		}, ctx.request));
		return ctx.json({ status: true });
	}
	if (!canSendVerification) {
		ctx.context.logger.error("Verification email isn't enabled.");
		throw APIError.fromStatus("BAD_REQUEST", { message: "Verification email isn't enabled" });
	}
	const token = await createEmailVerificationToken(ctx.context.secret, ctx.context.session.user.email, newEmail, ctx.context.options.emailVerification?.expiresIn, { requestType: "change-email-verification" });
	const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${ctx.body.callbackURL || "/"}`;
	await ctx.context.runInBackgroundOrAwait(canSendVerification({
		user: {
			...ctx.context.session.user,
			email: newEmail
		},
		url,
		token
	}, ctx.request));
	return ctx.json({ status: true });
});
var defuReplaceArrays = createDefu((obj, key, value) => {
	if (Array.isArray(obj[key]) && Array.isArray(value)) {
		obj[key] = value;
		return true;
	}
});
var hooksSourceWeakMap = /* @__PURE__ */ new WeakMap();
function toAuthEndpoints(endpoints, ctx) {
	const api = {};
	for (const [key, endpoint] of Object.entries(endpoints)) {
		api[key] = async (context) => {
			const run = async () => {
				const authContext = await ctx;
				let internalContext = {
					...context,
					context: {
						...authContext,
						returned: void 0,
						responseHeaders: void 0,
						session: null
					},
					path: endpoint.path,
					headers: context?.headers ? new Headers(context?.headers) : void 0
				};
				return runWithEndpointContext(internalContext, async () => {
					const { beforeHooks, afterHooks } = getHooks(authContext);
					const before = await runBeforeHooks(internalContext, beforeHooks);
					/**
					* If `before.context` is returned, it should
					* get merged with the original context
					*/
					if ("context" in before && before.context && typeof before.context === "object") {
						const { headers, ...rest } = before.context;
						/**
						* Headers should be merged differently
						* so the hook doesn't override the whole
						* header
						*/
						if (headers) headers.forEach((value, key) => {
							internalContext.headers.set(key, value);
						});
						internalContext = defuReplaceArrays(rest, internalContext);
					} else if (before) return context?.asResponse ? toResponse(before, { headers: context?.headers }) : context?.returnHeaders ? {
						headers: context?.headers,
						response: before
					} : before;
					internalContext.asResponse = false;
					internalContext.returnHeaders = true;
					internalContext.returnStatus = true;
					const result = await runWithEndpointContext(internalContext, () => endpoint(internalContext)).catch((e) => {
						if (isAPIError(e))
 /**
						* API Errors from response are caught
						* and returned to hooks
						*/
						return {
							response: e,
							status: e.statusCode,
							headers: e.headers ? new Headers(e.headers) : null
						};
						throw e;
					});
					if (result && result instanceof Response) return result;
					internalContext.context.returned = result.response;
					internalContext.context.responseHeaders = result.headers;
					const after = await runAfterHooks(internalContext, afterHooks);
					if (after.response) result.response = after.response;
					if (isAPIError(result.response) && shouldPublishLog(authContext.logger.level, "debug")) result.response.stack = result.response.errorStack;
					if (isAPIError(result.response) && !context?.asResponse) throw result.response;
					return context?.asResponse ? toResponse(result.response, {
						headers: result.headers,
						status: result.status
					}) : context?.returnHeaders ? context?.returnStatus ? {
						headers: result.headers,
						response: result.response,
						status: result.status
					} : {
						headers: result.headers,
						response: result.response
					} : context?.returnStatus ? {
						response: result.response,
						status: result.status
					} : result.response;
				});
			};
			if (await hasRequestState()) return run();
			else return runWithRequestState(/* @__PURE__ */ new WeakMap(), run);
		};
		api[key].path = endpoint.path;
		api[key].options = endpoint.options;
	}
	return api;
}
async function runBeforeHooks(context, hooks) {
	let modifiedContext = {};
	for (const hook of hooks) {
		let matched = false;
		try {
			matched = hook.matcher(context);
		} catch (error) {
			const hookSource = hooksSourceWeakMap.get(hook.handler) ?? "unknown";
			context.context.logger.error(`An error occurred during ${hookSource} hook matcher execution:`, error);
			throw new APIError("INTERNAL_SERVER_ERROR", { message: `An error occurred during hook matcher execution. Check the logs for more details.` });
		}
		if (matched) {
			const result = await hook.handler({
				...context,
				returnHeaders: false
			}).catch((e) => {
				if (isAPIError(e) && shouldPublishLog(context.context.logger.level, "debug")) e.stack = e.errorStack;
				throw e;
			});
			if (result && typeof result === "object") {
				if ("context" in result && typeof result.context === "object") {
					const { headers, ...rest } = result.context;
					if (headers instanceof Headers) if (modifiedContext.headers) headers.forEach((value, key) => {
						modifiedContext.headers?.set(key, value);
					});
					else modifiedContext.headers = headers;
					modifiedContext = defuReplaceArrays(rest, modifiedContext);
					continue;
				}
				return result;
			}
		}
	}
	return { context: modifiedContext };
}
async function runAfterHooks(context, hooks) {
	for (const hook of hooks) if (hook.matcher(context)) {
		const result = await hook.handler(context).catch((e) => {
			if (isAPIError(e)) {
				const headers = e[kAPIErrorHeaderSymbol];
				if (shouldPublishLog(context.context.logger.level, "debug")) e.stack = e.errorStack;
				return {
					response: e,
					headers: headers ? headers : e.headers ? new Headers(e.headers) : null
				};
			}
			throw e;
		});
		if (result.headers) result.headers.forEach((value, key) => {
			if (!context.context.responseHeaders) context.context.responseHeaders = new Headers({ [key]: value });
			else if (key.toLowerCase() === "set-cookie") context.context.responseHeaders.append(key, value);
			else context.context.responseHeaders.set(key, value);
		});
		if (result.response) context.context.returned = result.response;
	}
	return {
		response: context.context.returned,
		headers: context.context.responseHeaders
	};
}
function getHooks(authContext) {
	const plugins = authContext.options.plugins || [];
	const beforeHooks = [];
	const afterHooks = [];
	const beforeHookHandler = authContext.options.hooks?.before;
	if (beforeHookHandler) {
		hooksSourceWeakMap.set(beforeHookHandler, "user");
		beforeHooks.push({
			matcher: () => true,
			handler: beforeHookHandler
		});
	}
	const afterHookHandler = authContext.options.hooks?.after;
	if (afterHookHandler) {
		hooksSourceWeakMap.set(afterHookHandler, "user");
		afterHooks.push({
			matcher: () => true,
			handler: afterHookHandler
		});
	}
	const pluginBeforeHooks = plugins.filter((plugin) => plugin.hooks?.before).map((plugin) => plugin.hooks?.before).flat();
	const pluginAfterHooks = plugins.filter((plugin) => plugin.hooks?.after).map((plugin) => plugin.hooks?.after).flat();
	/**
	* Add plugin added hooks at last
	*/
	if (pluginBeforeHooks.length) beforeHooks.push(...pluginBeforeHooks);
	if (pluginAfterHooks.length) afterHooks.push(...pluginAfterHooks);
	return {
		beforeHooks,
		afterHooks
	};
}
function checkEndpointConflicts(options, logger) {
	const endpointRegistry = /* @__PURE__ */ new Map();
	options.plugins?.forEach((plugin) => {
		if (plugin.endpoints) {
			for (const [key, endpoint] of Object.entries(plugin.endpoints)) if (endpoint && "path" in endpoint && typeof endpoint.path === "string") {
				const path = endpoint.path;
				let methods = [];
				if (endpoint.options && "method" in endpoint.options) {
					if (Array.isArray(endpoint.options.method)) methods = endpoint.options.method;
					else if (typeof endpoint.options.method === "string") methods = [endpoint.options.method];
				}
				if (methods.length === 0) methods = ["*"];
				if (!endpointRegistry.has(path)) endpointRegistry.set(path, []);
				endpointRegistry.get(path).push({
					pluginId: plugin.id,
					endpointKey: key,
					methods
				});
			}
		}
	});
	const conflicts = [];
	for (const [path, entries] of endpointRegistry.entries()) if (entries.length > 1) {
		const methodMap = /* @__PURE__ */ new Map();
		let hasConflict = false;
		for (const entry of entries) for (const method of entry.methods) {
			if (!methodMap.has(method)) methodMap.set(method, []);
			methodMap.get(method).push(entry.pluginId);
			if (methodMap.get(method).length > 1) hasConflict = true;
			if (method === "*" && entries.length > 1) hasConflict = true;
			else if (method !== "*" && methodMap.has("*")) hasConflict = true;
		}
		if (hasConflict) {
			const uniquePlugins = [...new Set(entries.map((e) => e.pluginId))];
			const conflictingMethods = [];
			for (const [method, plugins] of methodMap.entries()) if (plugins.length > 1 || method === "*" && entries.length > 1 || method !== "*" && methodMap.has("*")) conflictingMethods.push(method);
			conflicts.push({
				path,
				plugins: uniquePlugins,
				conflictingMethods
			});
		}
	}
	if (conflicts.length > 0) {
		const conflictMessages = conflicts.map((conflict) => `  - "${conflict.path}" [${conflict.conflictingMethods.join(", ")}] used by plugins: ${conflict.plugins.join(", ")}`).join("\n");
		logger.error(`Endpoint path conflicts detected! Multiple plugins are trying to use the same endpoint paths with conflicting HTTP methods:
${conflictMessages}

To resolve this, you can:
	1. Use only one of the conflicting plugins
	2. Configure the plugins to use different paths (if supported)
	3. Ensure plugins use different HTTP methods for the same path
`);
	}
}
function getEndpoints(ctx, options) {
	const pluginEndpoints = options.plugins?.reduce((acc, plugin) => {
		return {
			...acc,
			...plugin.endpoints
		};
	}, {}) ?? {};
	const middlewares = options.plugins?.map((plugin) => plugin.middlewares?.map((m) => {
		const middleware = (async (context) => {
			const authContext = await ctx;
			return m.middleware({
				...context,
				context: {
					...authContext,
					...context.context
				}
			});
		});
		middleware.options = m.middleware.options;
		return {
			path: m.path,
			middleware
		};
	})).filter((plugin) => plugin !== void 0).flat() || [];
	return {
		api: toAuthEndpoints({
			signInSocial: signInSocial(),
			callbackOAuth,
			getSession: getSession(),
			signOut,
			signUpEmail: signUpEmail(),
			signInEmail: signInEmail(),
			resetPassword,
			verifyPassword: verifyPassword$1,
			verifyEmail,
			sendVerificationEmail,
			changeEmail,
			changePassword,
			setPassword,
			updateSession: updateSession(),
			updateUser: updateUser(),
			deleteUser,
			requestPasswordReset,
			requestPasswordResetCallback,
			listSessions: listSessions(),
			revokeSession,
			revokeSessions,
			revokeOtherSessions,
			linkSocialAccount,
			listUserAccounts,
			deleteUserCallback,
			unlinkAccount,
			refreshToken,
			getAccessToken,
			accountInfo,
			...pluginEndpoints,
			ok,
			error
		}, ctx),
		middlewares
	};
}
var router = (ctx, options) => {
	const { api, middlewares } = getEndpoints(ctx, options);
	const basePath = new URL(ctx.baseURL).pathname;
	return createRouter$1(api, {
		routerContext: ctx,
		openapi: { disabled: true },
		basePath,
		routerMiddleware: [{
			path: "/**",
			middleware: originCheckMiddleware
		}, ...middlewares],
		allowedMediaTypes: ["application/json"],
		skipTrailingSlashes: options.advanced?.skipTrailingSlashes ?? false,
		async onRequest(req) {
			const disabledPaths = ctx.options.disabledPaths || [];
			const normalizedPath = normalizePathname(req.url, basePath);
			if (disabledPaths.includes(normalizedPath)) return new Response("Not Found", { status: 404 });
			let currentRequest = req;
			for (const plugin of ctx.options.plugins || []) if (plugin.onRequest) {
				const response = await plugin.onRequest(currentRequest, ctx);
				if (response && "response" in response) return response.response;
				if (response && "request" in response) currentRequest = response.request;
			}
			const rateLimitResponse = await onRequestRateLimit(currentRequest, ctx);
			if (rateLimitResponse) return rateLimitResponse;
			return currentRequest;
		},
		async onResponse(res, req) {
			await onResponseRateLimit(req, ctx);
			for (const plugin of ctx.options.plugins || []) if (plugin.onResponse) {
				const response = await plugin.onResponse(res, ctx);
				if (response) return response.response;
			}
			return res;
		},
		onError(e) {
			if (isAPIError(e) && e.status === "FOUND") return;
			if (options.onAPIError?.throw) throw e;
			if (options.onAPIError?.onError) {
				options.onAPIError.onError(e, ctx);
				return;
			}
			const optLogLevel = options.logger?.level;
			const log = optLogLevel === "error" || optLogLevel === "warn" || optLogLevel === "debug" ? logger : void 0;
			if (options.logger?.disabled !== true) {
				if (e && typeof e === "object" && "message" in e && typeof e.message === "string") {
					if (e.message.includes("no column") || e.message.includes("column") || e.message.includes("relation") || e.message.includes("table") || e.message.includes("does not exist")) {
						ctx.logger?.error(e.message);
						return;
					}
				}
				if (isAPIError(e)) {
					if (e.status === "INTERNAL_SERVER_ERROR") ctx.logger.error(e.status, e);
					log?.error(e.message);
				} else ctx.logger?.error(e && typeof e === "object" && "name" in e ? e.name : "", e);
			}
		}
	});
};
async function getBaseAdapter(options, handleDirectDatabase) {
	let adapter;
	if (!options.database) {
		const tables = getAuthTables(options);
		const memoryDB = Object.keys(tables).reduce((acc, key) => {
			acc[key] = [];
			return acc;
		}, {});
		const { memoryAdapter } = await import("../_libs/_20.mjs");
		adapter = memoryAdapter(memoryDB)(options);
	} else if (typeof options.database === "function") adapter = options.database(options);
	else adapter = await handleDirectDatabase(options);
	if (!adapter.transaction) {
		logger.warn("Adapter does not correctly implement transaction function, patching it automatically. Please update your adapter implementation.");
		adapter.transaction = async (cb) => {
			return cb(adapter);
		};
	}
	return adapter;
}
async function getAdapter(options) {
	return getBaseAdapter(options, async (opts) => {
		const { createKyselyAdapter } = await import("./kysely-adapter-CV9OHGtH.mjs");
		const { kysely, databaseType, transaction } = await createKyselyAdapter(opts);
		if (!kysely) throw new BetterAuthError("Failed to initialize database adapter");
		const { kyselyAdapter } = await import("./kysely-adapter-CV9OHGtH.mjs");
		return kyselyAdapter(kysely, {
			type: databaseType || "sqlite",
			debugLogs: opts.database && "debugLogs" in opts.database ? opts.database.debugLogs : false,
			transaction
		})(opts);
	});
}
var map = {
	postgres: {
		string: [
			"character varying",
			"varchar",
			"text",
			"uuid"
		],
		number: [
			"int4",
			"integer",
			"bigint",
			"smallint",
			"numeric",
			"real",
			"double precision"
		],
		boolean: ["bool", "boolean"],
		date: [
			"timestamptz",
			"timestamp",
			"date"
		],
		json: ["json", "jsonb"]
	},
	mysql: {
		string: [
			"varchar",
			"text",
			"uuid"
		],
		number: [
			"integer",
			"int",
			"bigint",
			"smallint",
			"decimal",
			"float",
			"double"
		],
		boolean: ["boolean", "tinyint"],
		date: [
			"timestamp",
			"datetime",
			"date"
		],
		json: ["json"]
	},
	sqlite: {
		string: ["TEXT"],
		number: ["INTEGER", "REAL"],
		boolean: ["INTEGER", "BOOLEAN"],
		date: ["DATE", "INTEGER"],
		json: ["TEXT"]
	},
	mssql: {
		string: [
			"varchar",
			"nvarchar",
			"uniqueidentifier"
		],
		number: [
			"int",
			"bigint",
			"smallint",
			"decimal",
			"float",
			"double"
		],
		boolean: ["bit", "smallint"],
		date: [
			"datetime2",
			"date",
			"datetime"
		],
		json: ["varchar", "nvarchar"]
	}
};
function matchType(columnDataType, fieldType, dbType) {
	function normalize(type) {
		return type.toLowerCase().split("(")[0].trim();
	}
	if (fieldType === "string[]" || fieldType === "number[]") return columnDataType.toLowerCase().includes("json");
	const types = map[dbType];
	return (Array.isArray(fieldType) ? types["string"].map((t) => t.toLowerCase()) : types[fieldType].map((t) => t.toLowerCase())).includes(normalize(columnDataType));
}
/**
* Get the current PostgreSQL schema (search_path) for the database connection
* Returns the first schema in the search_path, defaulting to 'public' if not found
*/
async function getPostgresSchema(db) {
	try {
		const result = await sql$1`SHOW search_path`.execute(db);
		const searchPath = result.rows[0]?.search_path ?? result.rows[0]?.searchPath;
		if (searchPath) return searchPath.split(",").map((s) => s.trim()).map((s) => s.replace(/^["']|["']$/g, "")).filter((s) => !s.startsWith("$") && !s.startsWith("\\$"))[0] || "public";
	} catch {}
	return "public";
}
async function getMigrations(config) {
	const betterAuthSchema = getSchema$1(config);
	const logger = createLogger(config.logger);
	let { kysely: db, databaseType: dbType } = await createKyselyAdapter(config);
	if (!dbType) {
		logger.warn("Could not determine database type, defaulting to sqlite. Please provide a type in the database options to avoid this.");
		dbType = "sqlite";
	}
	if (!db) {
		logger.error("Only kysely adapter is supported for migrations. You can use `generate` command to generate the schema, if you're using a different adapter.");
		process.exit(1);
	}
	let currentSchema = "public";
	if (dbType === "postgres") {
		currentSchema = await getPostgresSchema(db);
		logger.debug(`PostgreSQL migration: Using schema '${currentSchema}' (from search_path)`);
		try {
			const schemaCheck = await sql$1`
				SELECT schema_name
				FROM information_schema.schemata
				WHERE schema_name = ${currentSchema}
			`.execute(db);
			if (!(schemaCheck.rows[0]?.schema_name ?? schemaCheck.rows[0]?.schemaName)) logger.warn(`Schema '${currentSchema}' does not exist. Tables will be inspected from available schemas. Consider creating the schema first or checking your database configuration.`);
		} catch (error) {
			logger.debug(`Could not verify schema existence: ${error instanceof Error ? error.message : String(error)}`);
		}
	}
	const allTableMetadata = await db.introspection.getTables();
	let tableMetadata = allTableMetadata;
	if (dbType === "postgres") try {
		const tablesInSchema = await sql$1`
				SELECT table_name
				FROM information_schema.tables
				WHERE table_schema = ${currentSchema}
				AND table_type = 'BASE TABLE'
			`.execute(db);
		const tableNamesInSchema = new Set(tablesInSchema.rows.map((row) => row.table_name ?? row.tableName));
		tableMetadata = allTableMetadata.filter((table) => table.schema === currentSchema && tableNamesInSchema.has(table.name));
		logger.debug(`Found ${tableMetadata.length} table(s) in schema '${currentSchema}': ${tableMetadata.map((t) => t.name).join(", ") || "(none)"}`);
	} catch (error) {
		logger.warn(`Could not filter tables by schema. Using all discovered tables. Error: ${error instanceof Error ? error.message : String(error)}`);
	}
	const toBeCreated = [];
	const toBeAdded = [];
	for (const [key, value] of Object.entries(betterAuthSchema)) {
		const table = tableMetadata.find((t) => t.name === key);
		if (!table) {
			const tIndex = toBeCreated.findIndex((t) => t.table === key);
			const tableData = {
				table: key,
				fields: value.fields,
				order: value.order || Infinity
			};
			const insertIndex = toBeCreated.findIndex((t) => (t.order || Infinity) > tableData.order);
			if (insertIndex === -1) if (tIndex === -1) toBeCreated.push(tableData);
			else toBeCreated[tIndex].fields = {
				...toBeCreated[tIndex].fields,
				...value.fields
			};
			else toBeCreated.splice(insertIndex, 0, tableData);
			continue;
		}
		const toBeAddedFields = {};
		for (const [fieldName, field] of Object.entries(value.fields)) {
			const column = table.columns.find((c) => c.name === fieldName);
			if (!column) {
				toBeAddedFields[fieldName] = field;
				continue;
			}
			if (matchType(column.dataType, field.type, dbType)) continue;
			else logger.warn(`Field ${fieldName} in table ${key} has a different type in the database. Expected ${field.type} but got ${column.dataType}.`);
		}
		if (Object.keys(toBeAddedFields).length > 0) toBeAdded.push({
			table: key,
			fields: toBeAddedFields,
			order: value.order || Infinity
		});
	}
	const migrations = [];
	const useUUIDs = config.advanced?.database?.generateId === "uuid";
	const useNumberId = config.advanced?.database?.generateId === "serial";
	function getType(field, fieldName) {
		const type = field.type;
		const provider = dbType || "sqlite";
		const typeMap = {
			string: {
				sqlite: "text",
				postgres: "text",
				mysql: field.unique ? "varchar(255)" : field.references ? "varchar(36)" : field.sortable ? "varchar(255)" : field.index ? "varchar(255)" : "text",
				mssql: field.unique || field.sortable ? "varchar(255)" : field.references ? "varchar(36)" : "varchar(8000)"
			},
			boolean: {
				sqlite: "integer",
				postgres: "boolean",
				mysql: "boolean",
				mssql: "smallint"
			},
			number: {
				sqlite: field.bigint ? "bigint" : "integer",
				postgres: field.bigint ? "bigint" : "integer",
				mysql: field.bigint ? "bigint" : "integer",
				mssql: field.bigint ? "bigint" : "integer"
			},
			date: {
				sqlite: "date",
				postgres: "timestamptz",
				mysql: "timestamp(3)",
				mssql: sql$1`datetime2(3)`
			},
			json: {
				sqlite: "text",
				postgres: "jsonb",
				mysql: "json",
				mssql: "varchar(8000)"
			},
			id: {
				postgres: useNumberId ? sql$1`integer GENERATED BY DEFAULT AS IDENTITY` : useUUIDs ? "uuid" : "text",
				mysql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
				mssql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
				sqlite: useNumberId ? "integer" : "text"
			},
			foreignKeyId: {
				postgres: useNumberId ? "integer" : useUUIDs ? "uuid" : "text",
				mysql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
				mssql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
				sqlite: useNumberId ? "integer" : "text"
			},
			"string[]": {
				sqlite: "text",
				postgres: "jsonb",
				mysql: "json",
				mssql: "varchar(8000)"
			},
			"number[]": {
				sqlite: "text",
				postgres: "jsonb",
				mysql: "json",
				mssql: "varchar(8000)"
			}
		};
		if (fieldName === "id" || field.references?.field === "id") {
			if (fieldName === "id") return typeMap.id[provider];
			return typeMap.foreignKeyId[provider];
		}
		if (Array.isArray(type)) return "text";
		if (!(type in typeMap)) throw new Error(`Unsupported field type '${String(type)}' for field '${fieldName}'. Allowed types are: string, number, boolean, date, string[], number[]. If you need to store structured data, store it as a JSON string (type: "string") or split it into primitive fields. See https://better-auth.com/docs/advanced/schema#additional-fields`);
		return typeMap[type][provider];
	}
	const getModelName = initGetModelName({
		schema: getAuthTables(config),
		usePlural: false
	});
	const getFieldName = initGetFieldName({
		schema: getAuthTables(config),
		usePlural: false
	});
	function getReferencePath(model, field) {
		try {
			return `${getModelName(model)}.${getFieldName({
				model,
				field
			})}`;
		} catch {
			return `${model}.${field}`;
		}
	}
	if (toBeAdded.length) for (const table of toBeAdded) for (const [fieldName, field] of Object.entries(table.fields)) {
		const type = getType(field, fieldName);
		const builder = db.schema.alterTable(table.table);
		if (field.index) {
			const indexName = `${table.table}_${fieldName}_${field.unique ? "uidx" : "idx"}`;
			const indexBuilder = db.schema.createIndex(indexName).on(table.table).columns([fieldName]);
			migrations.push(field.unique ? indexBuilder.unique() : indexBuilder);
		}
		const built = builder.addColumn(fieldName, type, (col) => {
			col = field.required !== false ? col.notNull() : col;
			if (field.references) col = col.references(getReferencePath(field.references.model, field.references.field)).onDelete(field.references.onDelete || "cascade");
			if (field.unique) col = col.unique();
			if (field.type === "date" && typeof field.defaultValue === "function" && (dbType === "postgres" || dbType === "mysql" || dbType === "mssql")) if (dbType === "mysql") col = col.defaultTo(sql$1`CURRENT_TIMESTAMP(3)`);
			else col = col.defaultTo(sql$1`CURRENT_TIMESTAMP`);
			return col;
		});
		migrations.push(built);
	}
	const toBeIndexed = [];
	if (toBeCreated.length) for (const table of toBeCreated) {
		const idType = getType({ type: useNumberId ? "number" : "string" }, "id");
		let dbT = db.schema.createTable(table.table).addColumn("id", idType, (col) => {
			if (useNumberId) {
				if (dbType === "postgres") return col.primaryKey().notNull();
				else if (dbType === "sqlite") return col.primaryKey().notNull();
				else if (dbType === "mssql") return col.identity().primaryKey().notNull();
				return col.autoIncrement().primaryKey().notNull();
			}
			if (useUUIDs) {
				if (dbType === "postgres") return col.primaryKey().defaultTo(sql$1`pg_catalog.gen_random_uuid()`).notNull();
				return col.primaryKey().notNull();
			}
			return col.primaryKey().notNull();
		});
		for (const [fieldName, field] of Object.entries(table.fields)) {
			const type = getType(field, fieldName);
			dbT = dbT.addColumn(fieldName, type, (col) => {
				col = field.required !== false ? col.notNull() : col;
				if (field.references) col = col.references(getReferencePath(field.references.model, field.references.field)).onDelete(field.references.onDelete || "cascade");
				if (field.unique) col = col.unique();
				if (field.type === "date" && typeof field.defaultValue === "function" && (dbType === "postgres" || dbType === "mysql" || dbType === "mssql")) if (dbType === "mysql") col = col.defaultTo(sql$1`CURRENT_TIMESTAMP(3)`);
				else col = col.defaultTo(sql$1`CURRENT_TIMESTAMP`);
				return col;
			});
			if (field.index) {
				const builder = db.schema.createIndex(`${table.table}_${fieldName}_${field.unique ? "uidx" : "idx"}`).on(table.table).columns([fieldName]);
				toBeIndexed.push(field.unique ? builder.unique() : builder);
			}
		}
		migrations.push(dbT);
	}
	if (toBeIndexed.length) for (const index of toBeIndexed) migrations.push(index);
	async function runMigrations() {
		for (const migration of migrations) await migration.execute();
	}
	async function compileMigrations() {
		return migrations.map((m) => m.compile().sql).join(";\n\n") + ";";
	}
	return {
		toBeCreated,
		toBeAdded,
		runMigrations,
		compileMigrations
	};
}
var DEFAULT_SECRET = "better-auth-secret-12345678901234567890";
/**
* Estimates the entropy of a string in bits.
* This is a simple approximation that helps detect low-entropy secrets.
*/
function estimateEntropy$1(str) {
	const unique = new Set(str).size;
	if (unique === 0) return 0;
	return Math.log2(Math.pow(unique, str.length));
}
function parseSecretsEnv(envValue) {
	if (!envValue) return null;
	return envValue.split(",").map((entry) => {
		entry = entry.trim();
		const colonIdx = entry.indexOf(":");
		if (colonIdx === -1) throw new BetterAuthError(`Invalid BETTER_AUTH_SECRETS entry: "${entry}". Expected format: "<version>:<secret>"`);
		const version = parseInt(entry.slice(0, colonIdx), 10);
		if (!Number.isInteger(version) || version < 0) throw new BetterAuthError(`Invalid version in BETTER_AUTH_SECRETS: "${entry.slice(0, colonIdx)}". Version must be a non-negative integer.`);
		const value = entry.slice(colonIdx + 1).trim();
		if (!value) throw new BetterAuthError(`Empty secret value for version ${version} in BETTER_AUTH_SECRETS.`);
		return {
			version,
			value
		};
	});
}
function validateSecretsArray(secrets, logger) {
	if (secrets.length === 0) throw new BetterAuthError("`secrets` array must contain at least one entry.");
	const seen = /* @__PURE__ */ new Set();
	for (const s of secrets) {
		const version = parseInt(String(s.version), 10);
		if (!Number.isInteger(version) || version < 0 || String(version) !== String(s.version).trim()) throw new BetterAuthError(`Invalid version ${s.version} in \`secrets\`. Version must be a non-negative integer.`);
		if (!s.value) throw new BetterAuthError(`Empty secret value for version ${version} in \`secrets\`.`);
		if (seen.has(version)) throw new BetterAuthError(`Duplicate version ${version} in \`secrets\`. Each version must be unique.`);
		seen.add(version);
	}
	const current = secrets[0];
	if (current.value.length < 32) logger.warn(`[better-auth] Warning: the current secret (version ${current.version}) should be at least 32 characters long for adequate security.`);
	if (estimateEntropy$1(current.value) < 120) logger.warn("[better-auth] Warning: the current secret appears low-entropy. Use a randomly generated secret for production.");
}
function buildSecretConfig(secrets, legacySecret) {
	const keys = /* @__PURE__ */ new Map();
	for (const s of secrets) keys.set(parseInt(String(s.version), 10), s.value);
	return {
		keys,
		currentVersion: parseInt(String(secrets[0].version), 10),
		legacySecret: legacySecret && legacySecret !== "better-auth-secret-12345678901234567890" ? legacySecret : void 0
	};
}
/**
* Estimates the entropy of a string in bits.
* This is a simple approximation that helps detect low-entropy secrets.
*/
function estimateEntropy(str) {
	const unique = new Set(str).size;
	if (unique === 0) return 0;
	return Math.log2(Math.pow(unique, str.length));
}
/**
* Validates that the secret meets minimum security requirements.
* Throws BetterAuthError if the secret is invalid.
* Skips validation for DEFAULT_SECRET in test environments only.
* Only throws for DEFAULT_SECRET in production environment.
*/
function validateSecret(secret, logger) {
	const isDefaultSecret = secret === DEFAULT_SECRET;
	if (isTest()) return;
	if (isDefaultSecret && isProduction) throw new BetterAuthError("You are using the default secret. Please set `BETTER_AUTH_SECRET` in your environment variables or pass `secret` in your auth config.");
	if (!secret) throw new BetterAuthError("BETTER_AUTH_SECRET is missing. Set it in your environment or pass `secret` to betterAuth({ secret }).");
	if (secret.length < 32) logger.warn(`[better-auth] Warning: your BETTER_AUTH_SECRET should be at least 32 characters long for adequate security. Generate one with \`npx auth secret\` or \`openssl rand -base64 32\`.`);
	if (estimateEntropy(secret) < 120) logger.warn("[better-auth] Warning: your BETTER_AUTH_SECRET appears low-entropy. Use a randomly generated secret for production.");
}
async function createAuthContext(adapter, options, getDatabaseType) {
	if (!options.database) options = defu(options, {
		session: { cookieCache: {
			enabled: true,
			strategy: "jwe",
			refreshCache: true
		} },
		account: {
			storeStateStrategy: "cookie",
			storeAccountCookie: true
		}
	});
	const plugins = options.plugins || [];
	const internalPlugins = getInternalPlugins(options);
	const logger = createLogger(options.logger);
	const isDynamicConfig = isDynamicBaseURLConfig(options.baseURL);
	if (isDynamicBaseURLConfig(options.baseURL)) {
		const { allowedHosts } = options.baseURL;
		if (!allowedHosts || allowedHosts.length === 0) throw new BetterAuthError("baseURL.allowedHosts cannot be empty. Provide at least one allowed host pattern (e.g., [\"myapp.com\", \"*.vercel.app\"]).");
	}
	const baseURL = isDynamicConfig ? void 0 : getBaseURL(typeof options.baseURL === "string" ? options.baseURL : void 0, options.basePath);
	if (!baseURL && !isDynamicConfig) logger.warn(`[better-auth] Base URL could not be determined. Please set a valid base URL using the baseURL config option or the BETTER_AUTH_URL environment variable. Without this, callbacks and redirects may not work correctly.`);
	if (adapter.id === "memory" && options.advanced?.database?.generateId === false) logger.error(`[better-auth] Misconfiguration detected.
You are using the memory DB with generateId: false.
This will cause no id to be generated for any model.
Most of the features of Better Auth will not work correctly.`);
	const secretsArray = options.secrets ?? parseSecretsEnv(env.BETTER_AUTH_SECRETS);
	const legacySecret = options.secret || env.BETTER_AUTH_SECRET || env.AUTH_SECRET || "";
	let secret;
	let secretConfig;
	if (secretsArray) {
		validateSecretsArray(secretsArray, logger);
		secret = secretsArray[0].value;
		secretConfig = buildSecretConfig(secretsArray, legacySecret);
	} else {
		secret = legacySecret || "better-auth-secret-12345678901234567890";
		validateSecret(secret, logger);
		secretConfig = secret;
	}
	options = {
		...options,
		secret,
		baseURL: isDynamicConfig ? options.baseURL : baseURL ? new URL(baseURL).origin : "",
		basePath: options.basePath || "/api/auth",
		plugins: plugins.concat(internalPlugins)
	};
	checkEndpointConflicts(options, logger);
	const cookies = getCookies(options);
	const tables = getAuthTables(options);
	const providers = (await Promise.all(Object.entries(options.socialProviders || {}).map(async ([key, originalConfig]) => {
		const config = typeof originalConfig === "function" ? await originalConfig() : originalConfig;
		if (config == null) return null;
		if (config.enabled === false) return null;
		if (!config.clientId) logger.warn(`Social provider ${key} is missing clientId or clientSecret`);
		const provider = socialProviders[key](config);
		provider.disableImplicitSignUp = config.disableImplicitSignUp;
		return provider;
	}))).filter((x) => x !== null);
	const generateIdFunc = ({ model, size }) => {
		if (typeof options.advanced?.generateId === "function") return options.advanced.generateId({
			model,
			size
		});
		const dbGenerateId = options?.advanced?.database?.generateId;
		if (typeof dbGenerateId === "function") return dbGenerateId({
			model,
			size
		});
		if (dbGenerateId === "uuid") return crypto.randomUUID();
		if (dbGenerateId === "serial" || dbGenerateId === false) return false;
		return generateId(size);
	};
	const { publish } = await createTelemetry(options, {
		adapter: adapter.id,
		database: typeof options.database === "function" ? "adapter" : getDatabaseType(options.database)
	});
	const pluginIds = new Set(options.plugins.map((p) => p.id));
	const getPluginFn = (id) => options.plugins.find((p) => p.id === id) ?? null;
	const hasPluginFn = (id) => pluginIds.has(id);
	const trustedOrigins = await getTrustedOrigins$1(options);
	const trustedProviders = await getTrustedProviders(options);
	const ctx = {
		appName: options.appName || "Better Auth",
		baseURL: baseURL || "",
		version: getBetterAuthVersion(),
		socialProviders: providers,
		options,
		oauthConfig: {
			storeStateStrategy: options.account?.storeStateStrategy || (options.database ? "database" : "cookie"),
			skipStateCookieCheck: !!options.account?.skipStateCookieCheck
		},
		tables,
		trustedOrigins,
		trustedProviders,
		isTrustedOrigin(url, settings) {
			return this.trustedOrigins.some((origin) => matchesOriginPattern(url, origin, settings));
		},
		sessionConfig: {
			updateAge: options.session?.updateAge !== void 0 ? options.session.updateAge : 1440 * 60,
			expiresIn: options.session?.expiresIn || 3600 * 24 * 7,
			freshAge: options.session?.freshAge === void 0 ? 3600 * 24 : options.session.freshAge,
			cookieRefreshCache: (() => {
				const refreshCache = options.session?.cookieCache?.refreshCache;
				const maxAge = options.session?.cookieCache?.maxAge || 300;
				if ((!!options.database || !!options.secondaryStorage) && refreshCache) {
					logger.warn("[better-auth] `session.cookieCache.refreshCache` is enabled while `database` or `secondaryStorage` is configured. `refreshCache` is meant for stateless (DB-less) setups. Disabling `refreshCache` — remove it from your config to silence this warning.");
					return false;
				}
				if (refreshCache === false || refreshCache === void 0) return false;
				if (refreshCache === true) return {
					enabled: true,
					updateAge: Math.floor(maxAge * .2)
				};
				return {
					enabled: true,
					updateAge: refreshCache.updateAge !== void 0 ? refreshCache.updateAge : Math.floor(maxAge * .2)
				};
			})()
		},
		secret,
		secretConfig,
		rateLimit: {
			...options.rateLimit,
			enabled: options.rateLimit?.enabled ?? isProduction,
			window: options.rateLimit?.window || 10,
			max: options.rateLimit?.max || 100,
			storage: options.rateLimit?.storage || (options.secondaryStorage ? "secondary-storage" : "memory")
		},
		authCookies: cookies,
		logger,
		generateId: generateIdFunc,
		session: null,
		secondaryStorage: options.secondaryStorage,
		password: {
			hash: options.emailAndPassword?.password?.hash || hashPassword$1,
			verify: options.emailAndPassword?.password?.verify || verifyPassword$2,
			config: {
				minPasswordLength: options.emailAndPassword?.minPasswordLength || 8,
				maxPasswordLength: options.emailAndPassword?.maxPasswordLength || 128
			},
			checkPassword
		},
		setNewSession(session) {
			this.newSession = session;
		},
		newSession: null,
		adapter,
		internalAdapter: createInternalAdapter(adapter, {
			options,
			logger,
			hooks: options.databaseHooks ? [options.databaseHooks] : [],
			generateId: generateIdFunc
		}),
		createAuthCookie: createCookieGetter(options),
		async runMigrations() {
			throw new BetterAuthError("runMigrations will be set by the specific init implementation");
		},
		publishTelemetry: publish,
		skipCSRFCheck: !!options.advanced?.disableCSRFCheck,
		skipOriginCheck: options.advanced?.disableOriginCheck !== void 0 ? options.advanced.disableOriginCheck : isTest() ? true : false,
		runInBackground: options.advanced?.backgroundTasks?.handler ?? ((p) => {
			p.catch(() => {});
		}),
		async runInBackgroundOrAwait(promise) {
			try {
				if (options.advanced?.backgroundTasks?.handler) {
					if (promise instanceof Promise) options.advanced.backgroundTasks.handler(promise.catch((e) => {
						logger.error("Failed to run background task:", e);
					}));
				} else await promise;
			} catch (e) {
				logger.error("Failed to run background task:", e);
			}
		},
		getPlugin: getPluginFn,
		hasPlugin: hasPluginFn
	};
	const initOrPromise = runPluginInit(ctx);
	if (isPromise(initOrPromise)) await initOrPromise;
	return ctx;
}
var init = async (options) => {
	const adapter = await getAdapter(options);
	const getDatabaseType = (database) => getKyselyDatabaseType(database) || "unknown";
	const ctx = await createAuthContext(adapter, options, getDatabaseType);
	ctx.runMigrations = async function() {
		if (!options.database || "updateMany" in options.database) throw new BetterAuthError("Database is not provided or it's an adapter. Migrations are only supported with a database instance.");
		const { runMigrations } = await getMigrations(options);
		await runMigrations();
	};
	return ctx;
};
var createBetterAuth = (options, initFn) => {
	const authContext = initFn(options);
	const { api } = getEndpoints(authContext, options);
	return {
		handler: async (request) => {
			const ctx = await authContext;
			const basePath = ctx.options.basePath || "/api/auth";
			let handlerCtx;
			if (isDynamicBaseURLConfig(options.baseURL)) {
				handlerCtx = Object.create(Object.getPrototypeOf(ctx), Object.getOwnPropertyDescriptors(ctx));
				const baseURL = resolveBaseURL(options.baseURL, basePath, request);
				if (baseURL) {
					handlerCtx.baseURL = baseURL;
					handlerCtx.options = {
						...ctx.options,
						baseURL: getOrigin(baseURL) || void 0
					};
				} else throw new BetterAuthError("Could not resolve base URL from request. Check your allowedHosts config.");
				const trustedOriginOptions = {
					...handlerCtx.options,
					baseURL: options.baseURL
				};
				handlerCtx.trustedOrigins = await getTrustedOrigins$1(trustedOriginOptions, request);
				if (options.advanced?.crossSubDomainCookies?.enabled) {
					handlerCtx.authCookies = getCookies(handlerCtx.options);
					handlerCtx.createAuthCookie = createCookieGetter(handlerCtx.options);
				}
			} else {
				handlerCtx = ctx;
				if (!ctx.options.baseURL) {
					const baseURL = getBaseURL(void 0, basePath, request, void 0, ctx.options.advanced?.trustedProxyHeaders);
					if (baseURL) {
						ctx.baseURL = baseURL;
						ctx.options.baseURL = getOrigin(ctx.baseURL) || void 0;
					} else throw new BetterAuthError("Could not get base URL from request. Please provide a valid base URL.");
				}
				handlerCtx.trustedOrigins = await getTrustedOrigins$1(ctx.options, request);
			}
			handlerCtx.trustedProviders = await getTrustedProviders(handlerCtx.options, request);
			const { handler } = router(handlerCtx, options);
			return runWithAdapter(handlerCtx.adapter, () => handler(request));
		},
		api,
		options,
		$context: authContext,
		$ERROR_CODES: {
			...options.plugins?.reduce((acc, plugin) => {
				if (plugin.$ERROR_CODES) return {
					...acc,
					...plugin.$ERROR_CODES
				};
				return acc;
			}, {}),
			...BASE_ERROR_CODES
		}
	};
};
/**
* Better Auth initializer for full mode (with Kysely)
*
* @example
* ```ts
* import { betterAuth } from "better-auth";
*
* const auth = betterAuth({
* 	database: new PostgresDialect({ connection: process.env.DATABASE_URL }),
* });
* ```
*
* For minimal mode (without Kysely), import from `better-auth/minimal` instead
* @example
* ```ts
* import { betterAuth } from "better-auth/minimal";
*
* const auth = betterAuth({
*	  database: drizzleAdapter(db, { provider: "pg" }),
* });
*/
var betterAuth = (options) => {
	return createBetterAuth(options, init);
};
var dist_exports = /* @__PURE__ */ __exportAll$1({
	APIError: () => APIError,
	HIDE_METADATA: () => HIDE_METADATA,
	betterAuth: () => betterAuth,
	createTelemetry: () => createTelemetry,
	generateGenericState: () => generateGenericState,
	generateState: () => generateState,
	getBaseURL: () => getBaseURL,
	getCurrentAdapter: () => getCurrentAdapter,
	getHost: () => getHost,
	getHostFromRequest: () => getHostFromRequest,
	getOrigin: () => getOrigin,
	getProtocol: () => getProtocol,
	getProtocolFromRequest: () => getProtocolFromRequest,
	getTelemetryAuthConfig: () => getTelemetryAuthConfig,
	isDynamicBaseURLConfig: () => isDynamicBaseURLConfig,
	matchesHostPattern: () => matchesHostPattern,
	parseGenericState: () => parseGenericState,
	parseState: () => parseState,
	resolveBaseURL: () => resolveBaseURL,
	resolveDynamicBaseURL: () => resolveDynamicBaseURL
});
__reExport$1(dist_exports, dist_exports$1);
__reExport$1(dist_exports, db_exports$1);
__reExport$1(dist_exports, env_exports);
__reExport$1(dist_exports, error_exports);
__reExport$1(dist_exports, oauth2_exports);
__reExport$1(dist_exports, error_codes_exports);
__reExport$1(dist_exports, id_exports);
__reExport$1(dist_exports, json_exports);
createAuthMiddleware(async (ctx) => {
	const session = await getSessionFromCtx(ctx);
	if (!session) throw APIError.fromStatus("UNAUTHORIZED");
	return { session };
});
object({
	userId: string$1().meta({ description: "The user id" }),
	role: union([string().meta({ description: "The role to set. `admin` or `user` by default" }), array(string().meta({ description: "The roles to set. `admin` or `user` by default" }))]).meta({ description: "The role to set, this can be a string or an array of strings. Eg: `admin` or `[admin, user]`" })
});
object({ id: string().meta({ description: "The id of the User" }) });
object({
	email: string().meta({ description: "The email of the user" }),
	password: string().optional().meta({ description: "The password of the user. If not provided, the user will be created without a credential account (useful for magic link or social login only users)." }),
	name: string().meta({ description: "The name of the user" }),
	role: union([string().meta({ description: "The role of the user" }), array(string().meta({ description: "The roles of user" }))]).optional().meta({ description: `A string or array of strings representing the roles to apply to the new user. Eg: \"user\"` }),
	data: record(string(), any()).optional().meta({ description: "Extra fields for the user. Including custom additional fields." })
});
object({
	userId: string$1().meta({ description: "The user id" }),
	data: record(any(), any()).meta({ description: "The user data to update" })
});
object({
	searchValue: string().optional().meta({ description: "The value to search for. Eg: \"some name\"" }),
	searchField: _enum(["email", "name"]).meta({ description: "The field to search in, defaults to email. Can be `email` or `name`. Eg: \"name\"" }).optional(),
	searchOperator: _enum([
		"contains",
		"starts_with",
		"ends_with"
	]).meta({ description: "The operator to use for the search. Can be `contains`, `starts_with` or `ends_with`. Eg: \"contains\"" }).optional(),
	limit: string().meta({ description: "The number of users to return" }).or(number()).optional(),
	offset: string().meta({ description: "The offset to start from" }).or(number()).optional(),
	sortBy: string().meta({ description: "The field to sort by" }).optional(),
	sortDirection: _enum(["asc", "desc"]).meta({ description: "The direction to sort by" }).optional(),
	filterField: string().meta({ description: "The field to filter by" }).optional(),
	filterValue: string().meta({ description: "The value to filter by" }).or(number()).or(boolean$2()).or(array(string())).or(array(number())).optional(),
	filterOperator: _enum(whereOperators).meta({ description: "The operator to use for the filter" }).optional()
});
object({ userId: string$1().meta({ description: "The user id" }) });
object({ userId: string$1().meta({ description: "The user id" }) });
object({
	userId: string$1().meta({ description: "The user id" }),
	banReason: string().meta({ description: "The reason for the ban" }).optional(),
	banExpiresIn: number().meta({ description: "The number of seconds until the ban expires" }).optional()
});
object({ userId: string$1().meta({ description: "The user id" }) });
object({ sessionToken: string().meta({ description: "The session token" }) });
object({ userId: string$1().meta({ description: "The user id" }) });
object({ userId: string$1().meta({ description: "The user id" }) });
object({
	newPassword: string().nonempty("newPassword cannot be empty").meta({ description: "The new password" }),
	userId: string$1().nonempty("userId cannot be empty").meta({ description: "The user id" })
});
object({
	userId: string$1().optional().meta({ description: `The user id. Eg: "user-id"` }),
	role: string().optional().meta({ description: `The role to check permission for. Eg: "admin"` })
}).and(union([object({
	permission: record(string(), array(string())),
	permissions: _undefined()
}), object({
	permission: _undefined(),
	permissions: record(string(), array(string()))
})]));
var Providers = {
	CLOUDFLARE_TURNSTILE: "cloudflare-turnstile",
	GOOGLE_RECAPTCHA: "google-recaptcha",
	HCAPTCHA: "hcaptcha",
	CAPTCHAFOX: "captchafox"
};
Providers.CLOUDFLARE_TURNSTILE, Providers.GOOGLE_RECAPTCHA, Providers.HCAPTCHA, Providers.CAPTCHAFOX;
defineErrorCodes({
	VERIFICATION_FAILED: "Captcha verification failed",
	MISSING_RESPONSE: "Missing CAPTCHA response",
	UNKNOWN_ERROR: "Something went wrong"
});
defineErrorCodes({
	MISSING_SECRET_KEY: "Missing secret key",
	SERVICE_UNAVAILABLE: "CAPTCHA service unavailable"
});
optional(object({
	disableCookieCache: boolean$2().meta({ description: "Disable cookie cache and fetch session from database" }).or(string().transform((v) => v === "true")).optional(),
	disableRefresh: boolean$2().meta({ description: "Disable session refresh. Useful for checking session status, without updating the session" }).optional()
}));
var DEVICE_AUTHORIZATION_ERROR_CODES = defineErrorCodes({
	INVALID_DEVICE_CODE: "Invalid device code",
	EXPIRED_DEVICE_CODE: "Device code has expired",
	EXPIRED_USER_CODE: "User code has expired",
	AUTHORIZATION_PENDING: "Authorization pending",
	ACCESS_DENIED: "Access denied",
	INVALID_USER_CODE: "Invalid user code",
	DEVICE_CODE_ALREADY_PROCESSED: "Device code already processed",
	POLLING_TOO_FREQUENTLY: "Polling too frequently",
	USER_NOT_FOUND: "User not found",
	FAILED_TO_CREATE_SESSION: "Failed to create session",
	INVALID_DEVICE_CODE_STATUS: "Invalid device code status",
	AUTHENTICATION_REQUIRED: "Authentication required"
});
object({
	client_id: string().meta({ description: "The client ID of the application" }),
	scope: string().meta({ description: "Space-separated list of scopes" }).optional()
});
object({
	error: _enum(["invalid_request", "invalid_client"]).meta({ description: "Error code" }),
	error_description: string().meta({ description: "Detailed error description" })
});
object({
	grant_type: literal("urn:ietf:params:oauth:grant-type:device_code").meta({ description: "The grant type for device flow" }),
	device_code: string().meta({ description: "The device verification code" }),
	client_id: string().meta({ description: "The client ID of the application" })
});
object({
	error: _enum([
		"authorization_pending",
		"slow_down",
		"expired_token",
		"access_denied",
		"invalid_request",
		"invalid_grant"
	]).meta({ description: "Error code" }),
	error_description: string().meta({ description: "Detailed error description" })
});
createAuthEndpoint("/device", {
	method: "GET",
	query: object({ user_code: string().meta({ description: "The user code to verify" }) }),
	error: object({
		error: _enum(["invalid_request"]).meta({ description: "Error code" }),
		error_description: string().meta({ description: "Detailed error description" })
	}),
	metadata: { openapi: {
		description: "Verify user code and get device authorization status",
		responses: { 200: {
			description: "Device authorization status",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					user_code: {
						type: "string",
						description: "The user code to verify"
					},
					status: {
						type: "string",
						enum: [
							"pending",
							"approved",
							"denied"
						],
						description: "Current status of the device authorization"
					}
				}
			} } }
		} }
	} }
}, async (ctx) => {
	const { user_code } = ctx.query;
	const cleanUserCode = user_code.replace(/-/g, "");
	const deviceCodeRecord = await ctx.context.adapter.findOne({
		model: "deviceCode",
		where: [{
			field: "userCode",
			value: cleanUserCode
		}]
	});
	if (!deviceCodeRecord) throw new APIError("BAD_REQUEST", {
		error: "invalid_request",
		error_description: DEVICE_AUTHORIZATION_ERROR_CODES.INVALID_USER_CODE.message
	});
	if (deviceCodeRecord.expiresAt < /* @__PURE__ */ new Date()) throw new APIError("BAD_REQUEST", {
		error: "expired_token",
		error_description: DEVICE_AUTHORIZATION_ERROR_CODES.EXPIRED_USER_CODE.message
	});
	return ctx.json({
		user_code,
		status: deviceCodeRecord.status
	});
});
createAuthEndpoint("/device/approve", {
	method: "POST",
	body: object({ userCode: string().meta({ description: "The user code to approve" }) }),
	error: object({
		error: _enum([
			"invalid_request",
			"expired_token",
			"device_code_already_processed",
			"unauthorized",
			"access_denied"
		]).meta({ description: "Error code" }),
		error_description: string().meta({ description: "Detailed error description" })
	}),
	requireHeaders: true,
	metadata: { openapi: {
		description: "Approve device authorization",
		responses: { 200: {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { success: { type: "boolean" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const session = await getSessionFromCtx(ctx);
	if (!session) throw new APIError("UNAUTHORIZED", {
		error: "unauthorized",
		error_description: DEVICE_AUTHORIZATION_ERROR_CODES.AUTHENTICATION_REQUIRED.message
	});
	const { userCode } = ctx.body;
	const cleanUserCode = userCode.replace(/-/g, "");
	const deviceCodeRecord = await ctx.context.adapter.findOne({
		model: "deviceCode",
		where: [{
			field: "userCode",
			value: cleanUserCode
		}]
	});
	if (!deviceCodeRecord) throw new APIError("BAD_REQUEST", {
		error: "invalid_request",
		error_description: DEVICE_AUTHORIZATION_ERROR_CODES.INVALID_USER_CODE.message
	});
	if (deviceCodeRecord.expiresAt < /* @__PURE__ */ new Date()) throw new APIError("BAD_REQUEST", {
		error: "expired_token",
		error_description: DEVICE_AUTHORIZATION_ERROR_CODES.EXPIRED_USER_CODE.message
	});
	if (deviceCodeRecord.status !== "pending") throw new APIError("BAD_REQUEST", {
		error: "invalid_request",
		error_description: DEVICE_AUTHORIZATION_ERROR_CODES.DEVICE_CODE_ALREADY_PROCESSED.message
	});
	if (deviceCodeRecord.userId && deviceCodeRecord.userId !== session.user.id) throw new APIError("FORBIDDEN", {
		error: "access_denied",
		error_description: "You are not authorized to approve this device authorization"
	});
	await ctx.context.adapter.update({
		model: "deviceCode",
		where: [{
			field: "id",
			value: deviceCodeRecord.id
		}],
		update: {
			status: "approved",
			userId: session.user.id
		}
	});
	return ctx.json({ success: true });
});
createAuthEndpoint("/device/deny", {
	method: "POST",
	body: object({ userCode: string().meta({ description: "The user code to deny" }) }),
	error: object({
		error: _enum([
			"invalid_request",
			"expired_token",
			"unauthorized",
			"access_denied"
		]).meta({ description: "Error code" }),
		error_description: string().meta({ description: "Detailed error description" })
	}),
	requireHeaders: true,
	metadata: { openapi: {
		description: "Deny device authorization",
		responses: { 200: {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { success: { type: "boolean" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const session = await getSessionFromCtx(ctx);
	if (!session) throw new APIError("UNAUTHORIZED", {
		error: "unauthorized",
		error_description: DEVICE_AUTHORIZATION_ERROR_CODES.AUTHENTICATION_REQUIRED.message
	});
	const { userCode } = ctx.body;
	const cleanUserCode = userCode.replace(/-/g, "");
	const deviceCodeRecord = await ctx.context.adapter.findOne({
		model: "deviceCode",
		where: [{
			field: "userCode",
			value: cleanUserCode
		}]
	});
	if (!deviceCodeRecord) throw new APIError("BAD_REQUEST", {
		error: "invalid_request",
		error_description: DEVICE_AUTHORIZATION_ERROR_CODES.INVALID_USER_CODE.message
	});
	if (deviceCodeRecord.expiresAt < /* @__PURE__ */ new Date()) throw new APIError("BAD_REQUEST", {
		error: "expired_token",
		error_description: DEVICE_AUTHORIZATION_ERROR_CODES.EXPIRED_USER_CODE.message
	});
	if (deviceCodeRecord.status !== "pending") throw new APIError("BAD_REQUEST", {
		error: "invalid_request",
		error_description: DEVICE_AUTHORIZATION_ERROR_CODES.DEVICE_CODE_ALREADY_PROCESSED.message
	});
	if (deviceCodeRecord.userId && deviceCodeRecord.userId !== session.user.id) throw new APIError("FORBIDDEN", {
		error: "access_denied",
		error_description: "You are not authorized to deny this device authorization"
	});
	await ctx.context.adapter.update({
		model: "deviceCode",
		where: [{
			field: "id",
			value: deviceCodeRecord.id
		}],
		update: {
			status: "denied",
			userId: deviceCodeRecord.userId || session.user.id
		}
	});
	return ctx.json({ success: true });
});
object({
	id: string(),
	deviceCode: string(),
	userCode: string(),
	userId: string().optional(),
	expiresAt: date(),
	status: string(),
	lastPolledAt: date().optional(),
	pollingInterval: number().optional(),
	clientId: string().optional(),
	scope: string().optional()
});
var timeStringSchema = custom((val) => {
	if (typeof val !== "string") return false;
	try {
		ms(val);
		return true;
	} catch {
		return false;
	}
}, { message: "Invalid time string format. Use formats like '30m', '5s', '1h', etc." });
object({
	expiresIn: timeStringSchema.default("30m").describe("Time in seconds until the device code expires. Use formats like '30m', '5s', '1h', etc."),
	interval: timeStringSchema.default("5s").describe("Time in seconds between polling attempts. Use formats like '30m', '5s', '1h', etc."),
	deviceCodeLength: number().int().positive().default(40).describe("Length of the device code to be generated. Default is 40 characters."),
	userCodeLength: number().int().positive().default(8).describe("Length of the user code to be generated. Default is 8 characters."),
	generateDeviceCode: custom((val) => typeof val === "function", { message: "generateDeviceCode must be a function that returns a string or a promise that resolves to a string." }).optional().describe("Function to generate a device code. If not provided, a default random string generator will be used."),
	generateUserCode: custom((val) => typeof val === "function", { message: "generateUserCode must be a function that returns a string or a promise that resolves to a string." }).optional().describe("Function to generate a user code. If not provided, a default random string generator will be used."),
	validateClient: custom((val) => typeof val === "function", { message: "validateClient must be a function that returns a boolean or a promise that resolves to a boolean." }).optional().describe("Function to validate the client ID. If not provided, no validation will be performed."),
	onDeviceAuthRequest: custom((val) => typeof val === "function", { message: "onDeviceAuthRequest must be a function that returns void or a promise that resolves to void." }).optional().describe("Function to handle device authorization requests. If not provided, no additional actions will be taken."),
	verificationUri: string().optional().describe("The URI where users verify their device code. Can be an absolute URL (https://example.com/device) or relative path (/custom-path). This will be returned as verification_uri in the device code response. If not provided, defaults to /device."),
	schema: custom(() => true)
});
var types = [
	"email-verification",
	"sign-in",
	"forget-password",
	"change-email"
];
object({
	email: string({}).meta({ description: "Email address to send the OTP" }),
	type: _enum(types).meta({ description: "Type of the OTP" })
});
object({
	email: string({}).meta({ description: "Email address to send the OTP" }),
	type: _enum(types).meta({
		required: true,
		description: "Type of the OTP"
	})
});
object({
	email: string({}).meta({ description: "Email address the OTP was sent to" }),
	type: _enum(types).meta({
		required: true,
		description: "Type of the OTP"
	})
});
object({
	email: string().meta({ description: "Email address the OTP was sent to" }),
	type: _enum(types).meta({
		required: true,
		description: "Type of the OTP"
	}),
	otp: string().meta({
		required: true,
		description: "OTP to verify"
	})
});
object({
	email: string({}).meta({ description: "Email address to verify" }),
	otp: string().meta({
		required: true,
		description: "OTP to verify"
	})
});
object({
	email: string({}).meta({ description: "Email address to sign in" }),
	otp: string().meta({
		required: true,
		description: "OTP sent to the email"
	}),
	name: string().meta({ description: "User display name. Only used if the user is registering for the first time. Eg: \"my-name\"" }).optional(),
	image: string().meta({ description: "User profile image URL. Only used if the user is registering for the first time." }).optional()
}).and(record(string(), any()));
object({ email: string().meta({ description: "Email address to send the OTP" }) });
object({ email: string().meta({ description: "Email address to send the OTP" }) });
object({
	email: string().meta({ description: "Email address to reset the password" }),
	otp: string().meta({ description: "OTP sent to the email" }),
	password: string().meta({ description: "New password" })
});
object({
	newEmail: string().meta({ description: "New email address to send the OTP" }),
	otp: string().optional().meta({ description: "OTP sent to the current email. This is required if changeEmail.verifyCurrentEmail option is set to true" })
});
object({
	newEmail: string().meta({ description: "New email address to verify and change to" }),
	otp: string().meta({ description: "OTP sent to the new email" })
});
var signInWithOAuth2BodySchema = object({
	providerId: string().meta({ description: "The provider ID for the OAuth provider" }),
	callbackURL: string().meta({ description: "The URL to redirect to after sign in" }).optional(),
	errorCallbackURL: string().meta({ description: "The URL to redirect to if an error occurs" }).optional(),
	newUserCallbackURL: string().meta({ description: "The URL to redirect to after login if the user is new. Eg: \"/welcome\"" }).optional(),
	disableRedirect: boolean$2().meta({ description: "Disable redirect" }).optional(),
	scopes: array(string()).meta({ description: "Scopes to be passed to the provider authorization request." }).optional(),
	requestSignUp: boolean$2().meta({ description: "Explicitly request sign-up. Useful when disableImplicitSignUp is true for this provider. Eg: false" }).optional(),
	additionalData: record(string(), any()).optional()
});
/**
* ### Endpoint
*
* POST `/sign-in/oauth2`
*
* ### API Methods
*
* **server:**
* `auth.api.signInWithOAuth2`
*
* **client:**
* `authClient.signIn.oauth2`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/sign-in#api-method-sign-in-oauth2)
*/
var signInWithOAuth2 = (options) => createAuthEndpoint("/sign-in/oauth2", {
	method: "POST",
	body: signInWithOAuth2BodySchema,
	metadata: { openapi: {
		description: "Sign in with OAuth2",
		responses: { 200: {
			description: "Sign in with OAuth2",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					url: { type: "string" },
					redirect: { type: "boolean" }
				}
			} } }
		} }
	} }
}, async (ctx) => {
	const { providerId } = ctx.body;
	const config = options.config.find((c) => c.providerId === providerId);
	if (!config) throw APIError.fromStatus("BAD_REQUEST", { message: `${GENERIC_OAUTH_ERROR_CODES.PROVIDER_CONFIG_NOT_FOUND} ${providerId}` });
	const { discoveryUrl, authorizationUrl, tokenUrl, clientId, clientSecret, scopes, redirectURI, responseType, pkce, prompt, accessType, authorizationUrlParams, responseMode } = config;
	let finalAuthUrl = authorizationUrl;
	let finalTokenUrl = tokenUrl;
	if (discoveryUrl) {
		const discovery = await betterFetch(discoveryUrl, {
			method: "GET",
			headers: config.discoveryHeaders,
			onError(context) {
				ctx.context.logger.error(context.error.message, context.error, { discoveryUrl });
			}
		});
		if (discovery.data) {
			finalAuthUrl = discovery.data.authorization_endpoint;
			finalTokenUrl = discovery.data.token_endpoint;
		}
	}
	if (!finalAuthUrl || !finalTokenUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.INVALID_OAUTH_CONFIGURATION);
	if (authorizationUrlParams) {
		const withAdditionalParams = new URL(finalAuthUrl);
		for (const [paramName, paramValue] of Object.entries(authorizationUrlParams)) withAdditionalParams.searchParams.set(paramName, paramValue);
		finalAuthUrl = withAdditionalParams.toString();
	}
	const additionalParams = typeof authorizationUrlParams === "function" ? authorizationUrlParams(ctx) : authorizationUrlParams;
	const { state, codeVerifier } = await generateState(ctx, void 0, ctx.body.additionalData);
	const authUrl = await createAuthorizationURL({
		id: providerId,
		options: {
			clientId,
			clientSecret,
			redirectURI
		},
		authorizationEndpoint: finalAuthUrl,
		state,
		codeVerifier: pkce ? codeVerifier : void 0,
		scopes: ctx.body.scopes ? [...ctx.body.scopes, ...scopes || []] : scopes || [],
		redirectURI: `${ctx.context.baseURL}/oauth2/callback/${providerId}`,
		prompt,
		accessType,
		responseType,
		responseMode,
		additionalParams
	});
	return ctx.json({
		url: authUrl.toString(),
		redirect: !ctx.body.disableRedirect
	});
});
var OAuth2CallbackQuerySchema = object({
	code: string().meta({ description: "The OAuth2 code" }).optional(),
	error: string().meta({ description: "The error message, if any" }).optional(),
	error_description: string().meta({ description: "The error description, if any" }).optional(),
	state: string().meta({ description: "The state parameter from the OAuth2 request" }).optional(),
	iss: string().meta({ description: "The issuer identifier" }).optional()
});
var oAuth2Callback = (options) => createAuthEndpoint("/oauth2/callback/:providerId", {
	method: "GET",
	query: OAuth2CallbackQuerySchema,
	metadata: {
		...HIDE_METADATA,
		allowedMediaTypes: ["application/x-www-form-urlencoded", "application/json"],
		openapi: {
			description: "OAuth2 callback",
			responses: { 200: {
				description: "OAuth2 callback",
				content: { "application/json": { schema: {
					type: "object",
					properties: { url: { type: "string" } }
				} } }
			} }
		}
	}
}, async (ctx) => {
	const defaultErrorURL = ctx.context.options.onAPIError?.errorURL || `${ctx.context.baseURL}/error`;
	if (ctx.query.error || !ctx.query.code) throw ctx.redirect(`${defaultErrorURL}?error=${ctx.query.error || "oAuth_code_missing"}&error_description=${ctx.query.error_description}`);
	const providerId = ctx.params?.providerId;
	if (!providerId) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.PROVIDER_ID_REQUIRED);
	const providerConfig = options.config.find((p) => p.providerId === providerId);
	if (!providerConfig) throw APIError.fromStatus("BAD_REQUEST", { message: `${GENERIC_OAUTH_ERROR_CODES.PROVIDER_CONFIG_NOT_FOUND} ${providerId}` });
	let tokens = void 0;
	const { callbackURL, codeVerifier, errorURL, requestSignUp, newUserURL, link } = await parseState(ctx);
	const code = ctx.query.code;
	function redirectOnError(error) {
		const defaultErrorURL = ctx.context.options.onAPIError?.errorURL || `${ctx.context.baseURL}/error`;
		let url = errorURL || defaultErrorURL;
		if (url.includes("?")) url = `${url}&error=${error}`;
		else url = `${url}?error=${error}`;
		throw ctx.redirect(url);
	}
	let finalTokenUrl = providerConfig.tokenUrl;
	let finalUserInfoUrl = providerConfig.userInfoUrl;
	let expectedIssuer = providerConfig.issuer;
	if (providerConfig.discoveryUrl) {
		const discovery = await betterFetch(providerConfig.discoveryUrl, {
			method: "GET",
			headers: providerConfig.discoveryHeaders
		});
		if (discovery.data) {
			finalTokenUrl = discovery.data.token_endpoint;
			finalUserInfoUrl = discovery.data.userinfo_endpoint;
			if (!expectedIssuer && discovery.data.issuer) expectedIssuer = discovery.data.issuer;
		}
	}
	if (expectedIssuer) {
		if (ctx.query.iss) {
			if (ctx.query.iss !== expectedIssuer) {
				ctx.context.logger.error("OAuth issuer mismatch", {
					expected: expectedIssuer,
					received: ctx.query.iss
				});
				return redirectOnError("issuer_mismatch");
			}
		} else if (providerConfig.requireIssuerValidation) {
			ctx.context.logger.error("OAuth issuer parameter missing", { expected: expectedIssuer });
			return redirectOnError("issuer_missing");
		}
	}
	try {
		if (providerConfig.getToken) tokens = await providerConfig.getToken({
			code,
			redirectURI: `${ctx.context.baseURL}/oauth2/callback/${providerConfig.providerId}`,
			codeVerifier: providerConfig.pkce ? codeVerifier : void 0
		});
		else {
			if (!finalTokenUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.INVALID_OAUTH_CONFIG);
			const additionalParams = typeof providerConfig.tokenUrlParams === "function" ? providerConfig.tokenUrlParams(ctx) : providerConfig.tokenUrlParams;
			tokens = await validateAuthorizationCode({
				headers: providerConfig.authorizationHeaders,
				code,
				codeVerifier: providerConfig.pkce ? codeVerifier : void 0,
				redirectURI: `${ctx.context.baseURL}/oauth2/callback/${providerConfig.providerId}`,
				options: {
					clientId: providerConfig.clientId,
					clientSecret: providerConfig.clientSecret,
					redirectURI: providerConfig.redirectURI
				},
				tokenEndpoint: finalTokenUrl,
				authentication: providerConfig.authentication,
				additionalParams
			});
		}
	} catch (e) {
		ctx.context.logger.error(e && typeof e === "object" && "name" in e ? e.name : "", e);
		throw redirectOnError("oauth_code_verification_failed");
	}
	if (!tokens) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.INVALID_OAUTH_CONFIG);
	const userInfo = await (async function handleUserInfo() {
		const userInfo = providerConfig.getUserInfo ? await providerConfig.getUserInfo(tokens) : await getUserInfo(tokens, finalUserInfoUrl);
		if (!userInfo) throw redirectOnError("user_info_is_missing");
		const mapUser = providerConfig.mapProfileToUser ? await providerConfig.mapProfileToUser(userInfo) : userInfo;
		const email = mapUser.email ? mapUser.email.toLowerCase() : userInfo.email?.toLowerCase();
		if (!email) {
			ctx.context.logger.error("Unable to get user info", userInfo);
			throw redirectOnError("email_is_missing");
		}
		const id = mapUser.id ? String(mapUser.id) : String(userInfo.id);
		const name = mapUser.name ? mapUser.name : userInfo.name;
		if (!name) {
			ctx.context.logger.error("Unable to get user info", userInfo);
			throw redirectOnError("name_is_missing");
		}
		return {
			...userInfo,
			...mapUser,
			email,
			id,
			name
		};
	})();
	if (link) {
		if (ctx.context.options.account?.accountLinking?.allowDifferentEmails !== true && link.email.toLowerCase() !== userInfo.email.toLowerCase()) return redirectOnError("email_doesn't_match");
		const existingAccount = await ctx.context.internalAdapter.findAccountByProviderId(String(userInfo.id), providerConfig.providerId);
		if (existingAccount) {
			if (existingAccount.userId !== link.userId) return redirectOnError("account_already_linked_to_different_user");
			const updateData = Object.fromEntries(Object.entries({
				accessToken: await setTokenUtil(tokens.accessToken, ctx.context),
				idToken: tokens.idToken,
				refreshToken: await setTokenUtil(tokens.refreshToken, ctx.context),
				accessTokenExpiresAt: tokens.accessTokenExpiresAt,
				refreshTokenExpiresAt: tokens.refreshTokenExpiresAt,
				scope: tokens.scopes?.join(",")
			}).filter(([_, value]) => value !== void 0));
			await ctx.context.internalAdapter.updateAccount(existingAccount.id, updateData);
		} else if (!await ctx.context.internalAdapter.createAccount({
			userId: link.userId,
			providerId: providerConfig.providerId,
			accountId: userInfo.id,
			accessToken: await setTokenUtil(tokens.accessToken, ctx.context),
			accessTokenExpiresAt: tokens.accessTokenExpiresAt,
			refreshTokenExpiresAt: tokens.refreshTokenExpiresAt,
			scope: tokens.scopes?.join(","),
			refreshToken: await setTokenUtil(tokens.refreshToken, ctx.context),
			idToken: tokens.idToken
		})) return redirectOnError("unable_to_link_account");
		let toRedirectTo;
		try {
			toRedirectTo = callbackURL.toString();
		} catch {
			toRedirectTo = callbackURL;
		}
		throw ctx.redirect(toRedirectTo);
	}
	const result = await handleOAuthUserInfo(ctx, {
		userInfo,
		account: {
			providerId: providerConfig.providerId,
			accountId: userInfo.id,
			...tokens,
			scope: tokens.scopes?.join(",")
		},
		callbackURL,
		disableSignUp: providerConfig.disableImplicitSignUp && !requestSignUp || providerConfig.disableSignUp,
		overrideUserInfo: providerConfig.overrideUserInfo
	});
	if (result.error) return redirectOnError(result.error.split(" ").join("_"));
	const { session, user } = result.data;
	await setSessionCookie(ctx, {
		session,
		user
	});
	let toRedirectTo;
	try {
		toRedirectTo = (result.isRegister ? newUserURL || callbackURL : callbackURL).toString();
	} catch {
		toRedirectTo = result.isRegister ? newUserURL || callbackURL : callbackURL;
	}
	throw ctx.redirect(toRedirectTo);
});
var OAuth2LinkAccountBodySchema = object({
	providerId: string(),
	callbackURL: string(),
	scopes: array(string()).meta({ description: "Additional scopes to request when linking the account" }).optional(),
	errorCallbackURL: string().meta({ description: "The URL to redirect to if there is an error during the link process" }).optional()
});
/**
* ### Endpoint
*
* POST `/oauth2/link`
*
* ### API Methods
*
* **server:**
* `auth.api.oAuth2LinkAccount`
*
* **client:**
* `authClient.oauth2.link`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/generic-oauth#api-method-oauth2-link)
*/
var oAuth2LinkAccount = (options) => createAuthEndpoint("/oauth2/link", {
	method: "POST",
	body: OAuth2LinkAccountBodySchema,
	use: [sessionMiddleware],
	metadata: { openapi: {
		description: "Link an OAuth2 account to the current user session",
		responses: { "200": {
			description: "Authorization URL generated successfully for linking an OAuth2 account",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					url: {
						type: "string",
						format: "uri",
						description: "The authorization URL to redirect the user to for linking the OAuth2 account"
					},
					redirect: {
						type: "boolean",
						description: "Indicates that the client should redirect to the provided URL",
						enum: [true]
					}
				},
				required: ["url", "redirect"]
			} } }
		} }
	} }
}, async (c) => {
	const session = c.context.session;
	if (!session) throw APIError.from("UNAUTHORIZED", GENERIC_OAUTH_ERROR_CODES.SESSION_REQUIRED);
	const provider = options.config.find((p) => p.providerId === c.body.providerId);
	if (!provider) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.PROVIDER_NOT_FOUND);
	const { providerId, clientId, clientSecret, redirectURI, authorizationUrl, discoveryUrl, pkce, scopes, prompt, accessType, authorizationUrlParams } = provider;
	let finalAuthUrl = authorizationUrl;
	if (!finalAuthUrl) {
		if (!discoveryUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.INVALID_OAUTH_CONFIGURATION);
		const discovery = await betterFetch(discoveryUrl, {
			method: "GET",
			headers: provider.discoveryHeaders,
			onError(context) {
				c.context.logger.error(context.error.message, context.error, { discoveryUrl });
			}
		});
		if (discovery.data) finalAuthUrl = discovery.data.authorization_endpoint;
	}
	if (!finalAuthUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.INVALID_OAUTH_CONFIGURATION);
	const state = await generateState(c, {
		userId: session.user.id,
		email: session.user.email
	}, void 0);
	const additionalParams = typeof authorizationUrlParams === "function" ? authorizationUrlParams(c) : authorizationUrlParams;
	const url = await createAuthorizationURL({
		id: providerId,
		options: {
			clientId,
			clientSecret,
			redirectURI: redirectURI || `${c.context.baseURL}/oauth2/callback/${providerId}`
		},
		authorizationEndpoint: finalAuthUrl,
		state: state.state,
		codeVerifier: pkce ? state.codeVerifier : void 0,
		scopes: c.body.scopes || scopes || [],
		redirectURI: redirectURI || `${c.context.baseURL}/oauth2/callback/${providerId}`,
		prompt,
		accessType,
		additionalParams
	});
	return c.json({
		url: url.toString(),
		redirect: true
	});
});
async function getUserInfo(tokens, finalUserInfoUrl) {
	if (tokens.idToken) {
		const decoded = decodeJwt(tokens.idToken);
		if (decoded) {
			if (decoded.sub && decoded.email) return {
				id: decoded.sub,
				emailVerified: decoded.email_verified,
				image: decoded.picture,
				...decoded
			};
		}
	}
	if (!finalUserInfoUrl) return null;
	const userInfo = await betterFetch(finalUserInfoUrl, {
		method: "GET",
		headers: { Authorization: `Bearer ${tokens.accessToken}` }
	});
	return {
		id: userInfo.data?.sub ?? "",
		emailVerified: userInfo.data?.email_verified ?? false,
		email: userInfo.data?.email,
		image: userInfo.data?.picture,
		name: userInfo.data?.name,
		...userInfo.data
	};
}
/**
* A generic OAuth plugin that can be used to add OAuth support to any provider
*/
var genericOAuth = (options) => {
	const seenIds = /* @__PURE__ */ new Set();
	const nonUniqueIds = /* @__PURE__ */ new Set();
	for (const config of options.config) {
		const id = config.providerId;
		if (seenIds.has(id)) nonUniqueIds.add(id);
		seenIds.add(id);
	}
	if (nonUniqueIds.size > 0) console.warn(`Duplicate provider IDs found: ${Array.from(nonUniqueIds).join(", ")}`);
	return {
		id: "generic-oauth",
		init: (ctx) => {
			return { context: { socialProviders: options.config.map((c) => {
				let finalUserInfoUrl = c.userInfoUrl;
				return {
					id: c.providerId,
					name: c.providerId,
					async createAuthorizationURL(data) {
						let finalAuthUrl = c.authorizationUrl;
						if (!finalAuthUrl && c.discoveryUrl) {
							const discovery = await betterFetch(c.discoveryUrl, {
								method: "GET",
								headers: c.discoveryHeaders
							});
							if (discovery.data) {
								finalAuthUrl = discovery.data.authorization_endpoint;
								finalUserInfoUrl = finalUserInfoUrl ?? discovery.data.userinfo_endpoint;
							}
						}
						if (!finalAuthUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.INVALID_OAUTH_CONFIGURATION);
						return createAuthorizationURL({
							id: c.providerId,
							options: {
								clientId: c.clientId,
								clientSecret: c.clientSecret,
								redirectURI: c.redirectURI
							},
							authorizationEndpoint: finalAuthUrl,
							state: data.state,
							codeVerifier: c.pkce ? data.codeVerifier : void 0,
							scopes: c.scopes || [],
							redirectURI: `${ctx.baseURL}/oauth2/callback/${c.providerId}`
						});
					},
					async validateAuthorizationCode(data) {
						if (c.getToken) return c.getToken(data);
						let finalTokenUrl = c.tokenUrl;
						if (c.discoveryUrl) {
							const discovery = await betterFetch(c.discoveryUrl, {
								method: "GET",
								headers: c.discoveryHeaders
							});
							if (discovery.data) {
								finalTokenUrl = discovery.data.token_endpoint;
								finalUserInfoUrl = discovery.data.userinfo_endpoint;
							}
						}
						if (!finalTokenUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.TOKEN_URL_NOT_FOUND);
						return validateAuthorizationCode({
							headers: c.authorizationHeaders,
							code: data.code,
							codeVerifier: data.codeVerifier,
							redirectURI: data.redirectURI,
							options: {
								clientId: c.clientId,
								clientSecret: c.clientSecret,
								redirectURI: c.redirectURI
							},
							tokenEndpoint: finalTokenUrl,
							authentication: c.authentication
						});
					},
					async refreshAccessToken(refreshToken) {
						let finalTokenUrl = c.tokenUrl;
						if (c.discoveryUrl) {
							const discovery = await betterFetch(c.discoveryUrl, {
								method: "GET",
								headers: c.discoveryHeaders
							});
							if (discovery.data) finalTokenUrl = discovery.data.token_endpoint;
						}
						if (!finalTokenUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.TOKEN_URL_NOT_FOUND);
						return refreshAccessToken({
							refreshToken,
							options: {
								clientId: c.clientId,
								clientSecret: c.clientSecret
							},
							authentication: c.authentication,
							tokenEndpoint: finalTokenUrl
						});
					},
					async getUserInfo(tokens) {
						const userInfo = c.getUserInfo ? await c.getUserInfo(tokens) : await getUserInfo(tokens, finalUserInfoUrl);
						if (!userInfo) return null;
						const userMap = await c.mapProfileToUser?.(userInfo);
						return {
							user: {
								id: userInfo?.id,
								email: userInfo?.email,
								emailVerified: userInfo?.emailVerified,
								image: userInfo?.image,
								name: userInfo?.name,
								...userMap
							},
							data: userInfo
						};
					},
					options: { overrideUserInfoOnSignIn: c.overrideUserInfo }
				};
			}).concat(ctx.socialProviders) } };
		},
		endpoints: {
			signInWithOAuth2: signInWithOAuth2(options),
			oAuth2Callback: oAuth2Callback(options),
			oAuth2LinkAccount: oAuth2LinkAccount(options)
		},
		options,
		$ERROR_CODES: GENERIC_OAUTH_ERROR_CODES
	};
};
defineErrorCodes({ PASSWORD_COMPROMISED: "The password you entered has been compromised. Please choose a different password." });
object({
	payload: record(string(), any()),
	overrideOptions: record(string(), any()).optional()
});
object({
	token: string(),
	issuer: string().optional()
});
object({
	email: email().meta({ description: "Email address to send the magic link" }),
	name: string().meta({ description: "User display name. Only used if the user is registering for the first time. Eg: \"my-name\"" }).optional(),
	callbackURL: string().meta({ description: "URL to redirect after magic link verification" }).optional(),
	newUserCallbackURL: string().meta({ description: "URL to redirect after new user signup. Only used if the user is registering for the first time." }).optional(),
	errorCallbackURL: string().meta({ description: "URL to redirect after error." }).optional()
});
object({
	token: string().meta({ description: "Verification token" }),
	callbackURL: string().meta({ description: "URL to redirect after magic link verification, if not provided the user will be redirected to the root URL. Eg: \"/dashboard\"" }).optional(),
	errorCallbackURL: string().meta({ description: "URL to redirect after error." }).optional(),
	newUserCallbackURL: string().meta({ description: "URL to redirect after new user signup. Only used if the user is registering for the first time." }).optional()
});
object({
	clientId: string(),
	clientSecret: string().optional(),
	type: _enum([
		"web",
		"native",
		"user-agent-based",
		"public"
	]),
	name: string(),
	icon: string().optional(),
	metadata: string().optional(),
	disabled: boolean$2().optional().default(false),
	redirectUrls: string(),
	userId: string().optional(),
	createdAt: date(),
	updatedAt: date()
});
object({
	accept: boolean$2(),
	consent_code: string().optional().nullish()
});
record(any(), any());
object({
	redirect_uris: array(string()).meta({ description: "A list of redirect URIs. Eg: [\"https://client.example.com/callback\"]" }),
	token_endpoint_auth_method: _enum([
		"none",
		"client_secret_basic",
		"client_secret_post"
	]).meta({ description: "The authentication method for the token endpoint. Eg: \"client_secret_basic\"" }).default("client_secret_basic").optional(),
	grant_types: array(_enum([
		"authorization_code",
		"implicit",
		"password",
		"client_credentials",
		"refresh_token",
		"urn:ietf:params:oauth:grant-type:jwt-bearer",
		"urn:ietf:params:oauth:grant-type:saml2-bearer"
	])).meta({ description: "The grant types supported by the application. Eg: [\"authorization_code\"]" }).default(["authorization_code"]).optional(),
	response_types: array(_enum(["code", "token"])).meta({ description: "The response types supported by the application. Eg: [\"code\"]" }).default(["code"]).optional(),
	client_name: string().meta({ description: "The name of the application. Eg: \"My App\"" }).optional(),
	client_uri: string().meta({ description: "The URI of the application. Eg: \"https://client.example.com\"" }).optional(),
	logo_uri: string().meta({ description: "The URI of the application logo. Eg: \"https://client.example.com/logo.png\"" }).optional(),
	scope: string().meta({ description: "The scopes supported by the application. Separated by spaces. Eg: \"profile email\"" }).optional(),
	contacts: array(string()).meta({ description: "The contact information for the application. Eg: [\"admin@example.com\"]" }).optional(),
	tos_uri: string().meta({ description: "The URI of the application terms of service. Eg: \"https://client.example.com/tos\"" }).optional(),
	policy_uri: string().meta({ description: "The URI of the application privacy policy. Eg: \"https://client.example.com/policy\"" }).optional(),
	jwks_uri: string().meta({ description: "The URI of the application JWKS. Eg: \"https://client.example.com/jwks\"" }).optional(),
	jwks: record(any(), any()).meta({ description: "The JWKS of the application. Eg: {\"keys\": [{\"kty\": \"RSA\", \"alg\": \"RS256\", \"use\": \"sig\", \"n\": \"...\", \"e\": \"...\"}]}" }).optional(),
	metadata: record(any(), any()).meta({ description: "The metadata of the application. Eg: {\"key\": \"value\"}" }).optional(),
	software_id: string().meta({ description: "The software ID of the application. Eg: \"my-software\"" }).optional(),
	software_version: string().meta({ description: "The software version of the application. Eg: \"1.0.0\"" }).optional(),
	software_statement: string().meta({ description: "The software statement of the application." }).optional()
});
object({
	redirect_uris: array(string()),
	token_endpoint_auth_method: _enum([
		"none",
		"client_secret_basic",
		"client_secret_post"
	]).default("client_secret_basic").optional(),
	grant_types: array(_enum([
		"authorization_code",
		"implicit",
		"password",
		"client_credentials",
		"refresh_token",
		"urn:ietf:params:oauth:grant-type:jwt-bearer",
		"urn:ietf:params:oauth:grant-type:saml2-bearer"
	])).default(["authorization_code"]).optional(),
	response_types: array(_enum(["code", "token"])).default(["code"]).optional(),
	client_name: string().optional(),
	client_uri: string().optional(),
	logo_uri: string().optional(),
	scope: string().optional(),
	contacts: array(string()).optional(),
	tos_uri: string().optional(),
	policy_uri: string().optional(),
	jwks_uri: string().optional(),
	jwks: record(string(), any()).optional(),
	metadata: record(any(), any()).optional(),
	software_id: string().optional(),
	software_version: string().optional(),
	software_statement: string().optional()
});
record(any(), any());
object({ sessionToken: string().meta({ description: "The session token to set as active" }) });
object({ sessionToken: string().meta({ description: "The session token to revoke" }) });
object({
	callbackURL: string().meta({ description: "The URL to redirect to after the proxy" }),
	profile: string().optional().meta({ description: "Encrypted OAuth profile data" })
});
object({
	code: string().optional(),
	error: string().optional()
});
object({ idToken: string().meta({ description: "Google ID token, which the client obtains from the One Tap API" }) });
object({ token: string().meta({ description: "The token to verify. Eg: \"some-token\"" }) });
var allowedType = new Set([
	"string",
	"number",
	"boolean",
	"array",
	"object"
]);
function getTypeFromZodType(zodType) {
	if (zodType instanceof ZodDefault) return getTypeFromZodType(zodType.unwrap());
	const type = zodType.type;
	return allowedType.has(type) ? type : "string";
}
function getFieldSchema(field) {
	const schema = {
		type: field.type === "date" ? "string" : field.type,
		...field.type === "date" && { format: "date-time" }
	};
	if (field.defaultValue !== void 0) schema.default = typeof field.defaultValue === "function" ? "Generated at runtime" : field.defaultValue;
	if (field.input === false) schema.readOnly = true;
	return schema;
}
function getParameters(options) {
	const parameters = [];
	if (options.metadata?.openapi?.parameters) {
		parameters.push(...options.metadata.openapi.parameters);
		return parameters;
	}
	if (options.query instanceof ZodObject) Object.entries(options.query.shape).forEach(([key, value]) => {
		if (value instanceof ZodType) parameters.push({
			name: key,
			in: "query",
			schema: {
				...processZodType(value),
				..."minLength" in value && value.minLength ? { minLength: value.minLength } : {}
			}
		});
	});
	return parameters;
}
function getRequestBody(options) {
	if (options.metadata?.openapi?.requestBody) return options.metadata.openapi.requestBody;
	if (!options.body) return void 0;
	if (options.body instanceof ZodObject || options.body instanceof ZodOptional) {
		const shape = options.body.shape;
		if (!shape) return void 0;
		const properties = {};
		const required = [];
		Object.entries(shape).forEach(([key, value]) => {
			if (value instanceof ZodType) {
				properties[key] = processZodType(value);
				if (!(value instanceof ZodOptional)) required.push(key);
			}
		});
		return {
			required: options.body instanceof ZodOptional ? false : options.body ? true : false,
			content: { "application/json": { schema: {
				type: "object",
				properties,
				required
			} } }
		};
	}
}
function processZodType(zodType) {
	if (zodType instanceof ZodOptional) {
		const innerSchema = processZodType(zodType.unwrap());
		if (innerSchema.type) {
			const type = Array.isArray(innerSchema.type) ? innerSchema.type : [innerSchema.type];
			return {
				...innerSchema,
				type: Array.from(new Set([...type, "null"]))
			};
		}
		return { anyOf: [innerSchema, { type: "null" }] };
	}
	if (zodType instanceof ZodDefault) {
		const innerSchema = processZodType(zodType.unwrap());
		const defaultValueDef = zodType._def.defaultValue;
		const defaultValue = typeof defaultValueDef === "function" ? defaultValueDef() : defaultValueDef;
		return {
			...innerSchema,
			default: defaultValue
		};
	}
	if (zodType instanceof ZodObject) {
		const shape = zodType.shape;
		if (shape) {
			const properties = {};
			const required = [];
			Object.entries(shape).forEach(([key, value]) => {
				if (value instanceof ZodType) {
					properties[key] = processZodType(value);
					if (!(value instanceof ZodOptional)) required.push(key);
				}
			});
			return {
				type: "object",
				properties,
				...required.length > 0 ? { required } : {},
				description: zodType.description
			};
		}
	}
	return {
		type: getTypeFromZodType(zodType),
		description: zodType.description
	};
}
function getResponse(responses) {
	return {
		"400": {
			content: { "application/json": { schema: {
				type: "object",
				properties: { message: { type: "string" } },
				required: ["message"]
			} } },
			description: "Bad Request. Usually due to missing parameters, or invalid parameters."
		},
		"401": {
			content: { "application/json": { schema: {
				type: "object",
				properties: { message: { type: "string" } },
				required: ["message"]
			} } },
			description: "Unauthorized. Due to missing or invalid authentication."
		},
		"403": {
			content: { "application/json": { schema: {
				type: "object",
				properties: { message: { type: "string" } }
			} } },
			description: "Forbidden. You do not have permission to access this resource or to perform this action."
		},
		"404": {
			content: { "application/json": { schema: {
				type: "object",
				properties: { message: { type: "string" } }
			} } },
			description: "Not Found. The requested resource was not found."
		},
		"429": {
			content: { "application/json": { schema: {
				type: "object",
				properties: { message: { type: "string" } }
			} } },
			description: "Too Many Requests. You have exceeded the rate limit. Try again later."
		},
		"500": {
			content: { "application/json": { schema: {
				type: "object",
				properties: { message: { type: "string" } }
			} } },
			description: "Internal Server Error. This is a problem with the server that you cannot fix."
		},
		...responses
	};
}
function toOpenApiPath(path) {
	return path.split("/").map((part) => part.startsWith(":") ? `{${part.slice(1)}}` : part).join("/");
}
async function generator(ctx, options) {
	const baseEndpoints = getEndpoints(ctx, {
		...options,
		plugins: []
	});
	const tables = (0, db_exports.getAuthTables)({
		...options,
		session: {
			...options.session,
			storeSessionInDatabase: true
		}
	});
	const components = { schemas: { ...Object.entries(tables).reduce((acc, [key, value]) => {
		const modelName = key.charAt(0).toUpperCase() + key.slice(1);
		const fields = value.fields;
		const required = [];
		const properties = { id: { type: "string" } };
		Object.entries(fields).forEach(([fieldKey, fieldValue]) => {
			if (!fieldValue) return;
			properties[fieldKey] = getFieldSchema(fieldValue);
			if (fieldValue.required && fieldValue.input !== false) required.push(fieldKey);
		});
		Object.entries(properties).forEach(([key, prop]) => {
			const field = value.fields[key];
			if (field && field.type === "date" && prop.type === "string") prop.format = "date-time";
		});
		acc[modelName] = {
			type: "object",
			properties,
			required
		};
		return acc;
	}, {}) } };
	const paths = {};
	Object.entries(baseEndpoints.api).forEach(([_, value]) => {
		if (!value.path || ctx.options.disabledPaths?.includes(value.path)) return;
		const options = value.options;
		if (options.metadata?.SERVER_ONLY) return;
		const path = toOpenApiPath(value.path);
		const methods = Array.isArray(options.method) ? options.method : [options.method];
		for (const method of methods.filter((m) => m === "GET" || m === "DELETE")) paths[path] = {
			...paths[path],
			[method.toLowerCase()]: {
				tags: ["Default", ...options.metadata?.openapi?.tags || []],
				description: options.metadata?.openapi?.description,
				operationId: options.metadata?.openapi?.operationId,
				security: [{ bearerAuth: [] }],
				parameters: getParameters(options),
				responses: getResponse(options.metadata?.openapi?.responses)
			}
		};
		for (const method of methods.filter((m) => m === "POST" || m === "PATCH" || m === "PUT")) {
			const body = getRequestBody(options);
			paths[path] = {
				...paths[path],
				[method.toLowerCase()]: {
					tags: ["Default", ...options.metadata?.openapi?.tags || []],
					description: options.metadata?.openapi?.description,
					operationId: options.metadata?.openapi?.operationId,
					security: [{ bearerAuth: [] }],
					parameters: getParameters(options),
					...body ? { requestBody: body } : { requestBody: { content: { "application/json": { schema: {
						type: "object",
						properties: {}
					} } } } },
					responses: getResponse(options.metadata?.openapi?.responses)
				}
			};
		}
	});
	for (const plugin of options.plugins || []) {
		if (plugin.id === "open-api") continue;
		const pluginEndpoints = getEndpoints(ctx, {
			...options,
			plugins: [plugin]
		});
		const api = Object.keys(pluginEndpoints.api).map((key) => {
			if (baseEndpoints.api[key] === void 0) return pluginEndpoints.api[key];
			return null;
		}).filter((x) => x !== null);
		Object.entries(api).forEach(([key, value]) => {
			if (!value.path || ctx.options.disabledPaths?.includes(value.path)) return;
			const options = value.options;
			if (options.metadata?.SERVER_ONLY) return;
			const path = toOpenApiPath(value.path);
			const methods = Array.isArray(options.method) ? options.method : [options.method];
			for (const method of methods.filter((m) => m === "GET" || m === "DELETE")) paths[path] = {
				...paths[path],
				[method.toLowerCase()]: {
					tags: options.metadata?.openapi?.tags || [plugin.id.charAt(0).toUpperCase() + plugin.id.slice(1)],
					description: options.metadata?.openapi?.description,
					operationId: options.metadata?.openapi?.operationId,
					security: [{ bearerAuth: [] }],
					parameters: getParameters(options),
					responses: getResponse(options.metadata?.openapi?.responses)
				}
			};
			for (const method of methods.filter((m) => m === "POST" || m === "PATCH" || m === "PUT")) paths[path] = {
				...paths[path],
				[method.toLowerCase()]: {
					tags: options.metadata?.openapi?.tags || [plugin.id.charAt(0).toUpperCase() + plugin.id.slice(1)],
					description: options.metadata?.openapi?.description,
					operationId: options.metadata?.openapi?.operationId,
					security: [{ bearerAuth: [] }],
					parameters: getParameters(options),
					requestBody: getRequestBody(options),
					responses: getResponse(options.metadata?.openapi?.responses)
				}
			};
		});
	}
	return {
		openapi: "3.1.1",
		info: {
			title: "Better Auth",
			description: "API Reference for your Better Auth Instance",
			version: "1.1.0"
		},
		components: {
			...components,
			securitySchemes: {
				apiKeyCookie: {
					type: "apiKey",
					in: "cookie",
					name: "apiKeyCookie",
					description: "API Key authentication via cookie"
				},
				bearerAuth: {
					type: "http",
					scheme: "bearer",
					description: "Bearer token authentication"
				}
			}
		},
		security: [{
			apiKeyCookie: [],
			bearerAuth: []
		}],
		servers: [{ url: ctx.baseURL }],
		tags: [{
			name: "Default",
			description: "Default endpoints that are included with Better Auth by default. These endpoints are not part of any plugin."
		}],
		paths
	};
}
var logo = `<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="75" height="75" fill="url(#pattern0_21_12)"/>
<defs>
<pattern id="pattern0_21_12" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_21_12" transform="scale(0.00094697)"/>
</pattern>
<image id="image0_21_12" width="1056" height="1056" xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAEIKADAAQAAAABAAAEIAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/+ICKElDQ19QUk9GSUxFAAEBAAACGGFwcGwEAAAAbW50clJHQiBYWVogB+YAAQABAAAAAAAAYWNzcEFQUEwAAAAAQVBQTAAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1hcHBs7P2jjjiFR8NttL1PetoYLwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKZGVzYwAAAPwAAAAwY3BydAAAASwAAABQd3RwdAAAAXwAAAAUclhZWgAAAZAAAAAUZ1hZWgAAAaQAAAAUYlhZWgAAAbgAAAAUclRSQwAAAcwAAAAgY2hhZAAAAewAAAAsYlRSQwAAAcwAAAAgZ1RSQwAAAcwAAAAgbWx1YwAAAAAAAAABAAAADGVuVVMAAAAUAAAAHABEAGkAcwBwAGwAYQB5ACAAUAAzbWx1YwAAAAAAAAABAAAADGVuVVMAAAA0AAAAHABDAG8AcAB5AHIAaQBnAGgAdAAgAEEAcABwAGwAZQAgAEkAbgBjAC4ALAAgADIAMAAyADJYWVogAAAAAAAA9tUAAQAAAADTLFhZWiAAAAAAAACD3wAAPb////+7WFlaIAAAAAAAAEq/AACxNwAACrlYWVogAAAAAAAAKDgAABELAADIuXBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbc2YzMgAAAAAAAQxCAAAF3v//8yYAAAeTAAD9kP//+6L///2jAAAD3AAAwG7/wAARCAQgBCADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwACAgICAgIDAgIDBAMDAwQFBAQEBAUHBQUFBQUHCAcHBwcHBwgICAgICAgICgoKCgoKCwsLCwsNDQ0NDQ0NDQ0N/9sAQwECAgIDAwMGAwMGDQkHCQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0N/90ABABC/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Q/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0f38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9L9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//T/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1P38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9X9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//W/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1/38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9D9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//R/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0v38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9P9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//U/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1f38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9b9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//X/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0P38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9H9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//S/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0/38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9T9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//V/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1v38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/Ln/gq38a/in8Dvgp4T8R/CfxFdeG9SvvFMdlcXFoELyW5srqQxnzEcY3op4Gciv1Gr8Z/+C2X/JvXgj/sc4v/AE33lAH4z/8ADwv9tD/oq2tf9823/wAZo/4eF/tof9FW1r/vm2/+M18Z0UAfZn/Dwv8AbQ/6KtrX/fNt/wDGaP8Ah4X+2h/0VbWv++bb/wCM18Z0UAfZn/Dwv9tD/oq2tf8AfNt/8Zo/4eF/tof9FW1r/vm2/wDjNfGdFAH2Z/w8L/bQ/wCira1/3zbf/GaP+Hhf7aH/AEVbWv8Avm2/+M18Z0UAfZn/AA8L/bQ/6KtrX/fNt/8AGaP+Hhf7aH/RVta/75tv/jNfGdFAH2Z/w8L/AG0P+ira1/3zbf8Axmj/AIeF/tof9FW1r/vm2/8AjNfGdFAH63/sVftq/tTfEb9qb4deCfG3xF1TVtD1bVGgvbKdYBHPGIJW2ttiVsblB4I6V/UbX8Z//BPT/k9D4U/9hpv/AEmmr+zCgAooooAKKKKACiiigAooooAKKKKACiiigD+M/wD4eF/tof8ARVta/wC+bb/4zR/w8L/bQ/6KtrX/AHzbf/Ga+M6KAPsz/h4X+2h/0VbWv++bb/4zR/w8L/bQ/wCira1/3zbf/Ga+M6KAPsz/AIeF/tof9FW1r/vm2/8AjNH/AA8L/bQ/6KtrX/fNt/8AGa+M6KAPsz/h4X+2h/0VbWv++bb/AOM0f8PC/wBtD/oq2tf9823/AMZr4zooA+zP+Hhf7aH/AEVbWv8Avm2/+M0f8PC/20P+ira1/wB823/xmvjOigD7M/4eF/tof9FW1r/vm2/+M0f8PC/20P8Aoq2tf9823/xmvjOigD7M/wCHhf7aH/RVta/75tv/AIzR/wAPC/20P+ira1/3zbf/ABmvjOigD7M/4eF/tof9FW1r/vm2/wDjNH/Dwv8AbQ/6KtrX/fNt/wDGa+M6KAPsz/h4X+2h/wBFW1r/AL5tv/jNH/Dwv9tD/oq2tf8AfNt/8Zr4zooA+zP+Hhf7aH/RVta/75tv/jNH/Dwv9tD/AKKtrX/fNt/8Zr4zooA+zP8Ah4X+2h/0VbWv++bb/wCM0f8ADwv9tD/oq2tf9823/wAZr4zooA+zP+Hhf7aH/RVta/75tv8A4zR/w8L/AG0P+ira1/3zbf8AxmvjOigD7M/4eF/tof8ARVta/wC+bb/4zR/w8L/bQ/6KtrX/AHzbf/Ga+M6KAP6tv+CUnxr+Kfxx+CnizxH8WPEV14k1Kx8UyWVvcXYQPHbiytZBGPLRBje7HkZya/Uavxn/AOCJv/JvXjf/ALHOX/032dfsxQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf//X/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr8Z/+C2X/JvXgj/sc4v/AE33lfsxX4z/APBbL/k3rwR/2OcX/pvvKAP5m6KKKACiiigAooooAKKKKACiiigAooooA+zP+Cen/J6Hwp/7DTf+k01f2YV/Gf8A8E9P+T0PhT/2Gm/9Jpq/swoAKKKKACiiigAooooAKKKKACiiigAooooA/gDooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/pk/4Im/8m9eN/8Asc5f/TfZ1+zFfjP/AMETf+TevG//AGOcv/pvs6/ZigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9D9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvxn/4LZf8m9eCP+xzi/8ATfeV+zFfjP8A8Fsv+TevBH/Y5xf+m+8oA/mbooooAKKKKACiiigAooooAKKKKACiiigD7M/4J6f8nofCn/sNN/6TTV/ZhX8Z/wDwT0/5PQ+FP/Yab/0mmr+zCgAooooAKKKKACiiigAooooAKKKKACiiigD+AOiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD+mT/gib/yb143/wCxzl/9N9nX7MV+M/8AwRN/5N68b/8AY5y/+m+zr9mKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/0f38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/Gf/gtl/yb14I/7HOL/wBN95X7MV+M/wDwWy/5N68Ef9jnF/6b7ygD+ZuiiigAooooAKKKKACiiigAooooAKKKKAPsz/gnp/yeh8Kf+w03/pNNX9mFfxn/APBPT/k9D4U/9hpv/Saav7MKACiiigAooooAKKKKACiiigAooooAKKKKAP4A6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP6ZP+CJv/JvXjf/ALHOX/032dfsxX4z/wDBE3/k3rxv/wBjnL/6b7Ov2YoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/S/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr8Z/+C2X/JvXgj/sc4v/AE33lfsxX4z/APBbL/k3rwR/2OcX/pvvKAP5m6KKKACiiigAooooAKKKKACiiigAooooA+zP+Cen/J6Hwp/7DTf+k01f2YV/Gf8A8E9P+T0PhT/2Gm/9Jpq/swoAKKKKACiiigAooooAKKKKACiiigAooooA/gDooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/pk/4Im/8m9eN/8Asc5f/TfZ1+zFfjP/AMETf+TevG//AGOcv/pvs6/ZigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9P9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvxn/4LZf8m9eCP+xzi/8ATfeV+zFfjP8A8Fsv+TevBH/Y5xf+m+8oA/mbooooAKKKKACiiigAooooAKKKKACiiigD7M/4J6f8nofCn/sNN/6TTV/ZhX8Z/wDwT0/5PQ+FP/Yab/0mmr+zCgAooooAKKKKACiiigAooooAKKKKACiiigD+AOiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD+mT/gib/yb143/wCxzl/9N9nX7MV+M/8AwRN/5N68b/8AY5y/+m+zr9mKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/1P38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/Gf/gtl/yb14I/7HOL/wBN95X7MV+M/wDwWy/5N68Ef9jnF/6b7ygD+ZuiiigAooooAKKKKACiiigAooooAKKKKAPsz/gnp/yeh8Kf+w03/pNNX9mFfwq/BT4r638Dvin4d+LHhy0tb7UvDd0bu3t70ObeRzG0eJBGyPjDnowOa/Ub/h9l+0L/ANCR4M/79ah/8m0Af0yUV/M3/wAPsv2hf+hI8Gf9+tQ/+TaP+H2X7Qv/AEJHgz/v1qH/AMm0Af0yUV/M3/w+y/aF/wChI8Gf9+tQ/wDk2j/h9l+0L/0JHgz/AL9ah/8AJtAH9MlFfzN/8Psv2hf+hI8Gf9+tQ/8Ak2j/AIfZftC/9CR4M/79ah/8m0Af0yUV/M3/AMPsv2hf+hI8Gf8AfrUP/k2j/h9l+0L/ANCR4M/79ah/8m0Af0yUV/M3/wAPsv2hf+hI8Gf9+tQ/+TaP+H2X7Qv/AEJHgz/v1qH/AMm0Af0yUV/M3/w+y/aF/wChI8Gf9+tQ/wDk2j/h9l+0L/0JHgz/AL9ah/8AJtAH4z0V/TJ/w5N/Z6/6Hfxn/wB/dP8A/kKj/hyb+z1/0O/jP/v7p/8A8hUAfzN0V/TJ/wAOTf2ev+h38Z/9/dP/APkKj/hyb+z1/wBDv4z/AO/un/8AyFQB/M3RX9Mn/Dk39nr/AKHfxn/390//AOQqP+HJv7PX/Q7+M/8Av7p//wAhUAfzN0V/TJ/w5N/Z6/6Hfxn/AN/dP/8AkKj/AIcm/s9f9Dv4z/7+6f8A/IVAH8zdFf0yf8OTf2ev+h38Z/8Af3T/AP5Co/4cm/s9f9Dv4z/7+6f/APIVAH8zdFf0yf8ADk39nr/od/Gf/f3T/wD5Co/4cm/s9f8AQ7+M/wDv7p//AMhUAfzN0V/TJ/w5N/Z6/wCh38Z/9/dP/wDkKvwV/ag+FGifA74++M/hP4cu7q+03w3fi0t7i9KG4kQxRyZkMaomcueigYoA8FooooAKKKKACiiigAooooAKKKKACiiigD+mT/gib/yb143/AOxzl/8ATfZ1+zFfjP8A8ETf+TevG/8A2Ocv/pvs6/ZigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9X9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvxn/4LZf8m9eCP+xzi/8ATfeV+zFfjP8A8Fsv+TevBH/Y5xf+m+8oA/mbooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/v8ooooAKKKKACiiigAooooAKKKKACiiigAr+M//goX/wAnofFb/sNL/wCk0Nf2YV/Gf/wUL/5PQ+K3/YaX/wBJoaAPjOiiigAooooAKKKKACiiigAooooAKKKKAP6ZP+CJv/JvXjf/ALHOX/032dfsxX4z/wDBE3/k3rxv/wBjnL/6b7Ov2YoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/W/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr8Z/+C2X/JvXgj/sc4v/AE33lfsxX4z/APBbL/k3rwR/2OcX/pvvKAP5m6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP7/KKKKACiiigAooooAKKKKACiiigAooooAK/jP/4KF/8AJ6HxW/7DS/8ApNDX9mFfxn/8FC/+T0Pit/2Gl/8ASaGgD4zooooAKKKKACiiigAooooAKKKKACiiigD+mT/gib/yb143/wCxzl/9N9nX7MV+M/8AwRN/5N68b/8AY5y/+m+zr9mKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/1/38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/Gf/gtl/yb14I/7HOL/wBN95X7MV+M/wDwWy/5N68Ef9jnF/6b7ygD+ZuiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD+/yiiigAooooAKKKKACiiigAooooAKKKKACv4z/+Chf/ACeh8Vv+w0v/AKTQ1/ZhX8Z//BQv/k9D4rf9hpf/AEmhoA+M6KKKACiiigAooooAKKKKACiiigAooooA/pk/4Im/8m9eN/8Asc5f/TfZ1+zFfjP/AMETf+TevG//AGOcv/pvs6/ZigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9D9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvxn/4LZf8m9eCP+xzi/8ATfeV+zFfjP8A8Fsv+TevBH/Y5xf+m+8oA/mbooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/v8ooooAKKKKACiiigAooooAKKKKACiiigAr+M//goX/wAnofFb/sNL/wCk0Nf2YV/Gf/wUL/5PQ+K3/YaX/wBJoaAPjOiiigAooooAKKKKACiiigAooooAKKKKAP6ZP+CJv/JvXjf/ALHOX/032dfsxX4z/wDBE3/k3rxv/wBjnL/6b7Ov2YoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/R/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr8Z/+C2X/JvXgj/sc4v/AE33lfsxX4z/APBbL/k3rwR/2OcX/pvvKAP5m6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP7/KKKKACiiigAooooAKKKKACiiigAooooAK/jP/4KF/8AJ6HxW/7DS/8ApNDX9mFfxn/8FC/+T0Pit/2Gl/8ASaGgD4zooooAKKKKACiiigAooooAKKKKACiiigD+mT/gib/yb143/wCxzl/9N9nX7MV+M/8AwRN/5N68b/8AY5y/+m+zr9mKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/0v38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/Gf/gtl/yb14I/7HOL/wBN95X7MV+M/wDwWy/5N68Ef9jnF/6b7ygD+ZuiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD+/yiiigAooooAKKKKACiiigAooooAKKKKACv4z/+Chf/ACeh8Vv+w0v/AKTQ1/ZhX8Z//BQv/k9D4rf9hpf/AEmhoA+M6KKKACiiigAooooAKKKKACiiigAooooA/pk/4Im/8m9eN/8Asc5f/TfZ1+zFfjP/AMETf+TevG//AGOcv/pvs6/ZigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9P9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvxn/4LZf8m9eCP+xzi/8ATfeV+zFfjP8A8Fsv+TevBH/Y5xf+m+8oA/mbooooAKKKKACiiigAooooAKKKKACiiigD1L4KfCjW/jj8U/Dvwn8OXdrY6l4kujaW9xelxbxuI2kzIY1d8YQ9FJzX6jf8OTf2hf8Aod/Bn/f3UP8A5Cr4z/4J6f8AJ6Hwp/7DTf8ApNNX9mFAH8zf/Dk39oX/AKHfwZ/391D/AOQqP+HJv7Qv/Q7+DP8Av7qH/wAhV/TJRQB/M3/w5N/aF/6HfwZ/391D/wCQqP8Ahyb+0L/0O/gz/v7qH/yFX9MlFAH8zf8Aw5N/aF/6HfwZ/wB/dQ/+QqP+HJv7Qv8A0O/gz/v7qH/yFX9MlFAH8zf/AA5N/aF/6HfwZ/391D/5Co/4cm/tC/8AQ7+DP+/uof8AyFX9MlFAH8zf/Dk39oX/AKHfwZ/391D/AOQqP+HJv7Qv/Q7+DP8Av7qH/wAhV/TJRQB/M3/w5N/aF/6HfwZ/391D/wCQqP8Ahyb+0L/0O/gz/v7qH/yFX9MlFAH4z/8AD7L9nr/oSPGf/frT/wD5No/4fZfs9f8AQkeM/wDv1p//AMm1/M3RQB/TJ/w+y/Z6/wChI8Z/9+tP/wDk2j/h9l+z1/0JHjP/AL9af/8AJtfzN0UAf0yf8Psv2ev+hI8Z/wDfrT//AJNo/wCH2X7PX/QkeM/+/Wn/APybX8zdFAH9Mn/D7L9nr/oSPGf/AH60/wD+TaP+H2X7PX/QkeM/+/Wn/wDybX8zdFAH9Mn/AA+y/Z6/6Ejxn/360/8A+TaP+H2X7PX/AEJHjP8A79af/wDJtfzN0UAf0yf8Psv2ev8AoSPGf/frT/8A5No/4fZfs9f9CR4z/wC/Wn//ACbX8zdFAH9Mn/D7L9nr/oSPGf8A360//wCTa/BX9qD4r6J8cfj74z+LHhy0urHTfEl+Lu3t70ILiNBFHHiQRs6Zyh6MRivBaKACiiigAooooAKKKKACiiigAooooAKKKKAP6ZP+CJv/ACb143/7HOX/ANN9nX7MV+M//BE3/k3rxv8A9jnL/wCm+zr9mKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//U/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr8Z/+C2X/JvXgj/sc4v/AE33lfsxX4z/APBbL/k3rwR/2OcX/pvvKAP5m6KKKACiiigAooooAKKKKACiiigAooooA+zP+Cen/J6Hwp/7DTf+k01f2YV/Gf8A8E9P+T0PhT/2Gm/9Jpq/swoAKKKKACiiigAooooAKKKKACiiigAooooA/gDooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/pk/4Im/8m9eN/8Asc5f/TfZ1+zFfjP/AMETf+TevG//AGOcv/pvs6/ZigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9X9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvxn/4LZf8m9eCP+xzi/8ATfeV+zFfjP8A8Fsv+TevBH/Y5xf+m+8oA/mbooooAKKKKACiiigAooooAKKKKACiiigD7M/4J6f8nofCn/sNN/6TTV/ZhX8Z/wDwT0/5PQ+FP/Yab/0mmr+zCgAooooAKKKKACiiigAooooAKKKKACiiigD+AOiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD+mT/gib/yb143/wCxzl/9N9nX7MV+M/8AwRN/5N68b/8AY5y/+m+zr9mKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/1v38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/Gf/gtl/yb14I/7HOL/wBN95X7MV+M/wDwWy/5N68Ef9jnF/6b7ygD+ZuiiigAooooAKKKKACiiigAooooAKKKKAPsz/gnp/yeh8Kf+w03/pNNX9mFfxn/APBPT/k9D4U/9hpv/Saav7MKACiiigAooooAKKKKACiiigAooooAKKKKAP4A6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP6ZP+CJv/JvXjf/ALHOX/032dfsxX4z/wDBE3/k3rxv/wBjnL/6b7Ov2YoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/X/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr8Z/+C2X/JvXgj/sc4v/AE33lfsxX4z/APBbL/k3rwR/2OcX/pvvKAP5m6KKKACiiigAooooAKKKKACiiigAooooA+zP+Cen/J6Hwp/7DTf+k01f2YV/Gf8A8E9P+T0PhT/2Gm/9Jpq/swoAKKKKACiiigAooooAKKKKACiiigAooooA/gDooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/pk/4Im/8m9eN/8Asc5f/TfZ1+zFfjP/AMETf+TevG//AGOcv/pvs6/ZigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9D9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvxn/4LZf8m9eCP+xzi/8ATfeV+zFfjP8A8Fsv+TevBH/Y5xf+m+8oA/mbooooAKKKKACiiigAooooAKKKKACiiigD7M/4J6f8nofCn/sNN/6TTV/ZhX8Z/wDwT0/5PQ+FP/Yab/0mmr+zCgAooooAKKKKACiiigAooooAKKKKACiiigD+AOiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD+mT/gib/yb143/wCxzl/9N9nX7MV+M/8AwRN/5N68b/8AY5y/+m+zr9mKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/0f38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/Gf/gtl/yb14I/7HOL/wBN95X7MV+XP/BVv4KfFP44/BTwn4c+E/h268SalY+KY724t7QoHjtxZXUZkPmOgxvdRwc5NAH8pNFfZn/DvT9tD/olOtf99W3/AMeo/wCHen7aH/RKda/76tv/AI9QB8Z0V9mf8O9P20P+iU61/wB9W3/x6j/h3p+2h/0SnWv++rb/AOPUAfGdFfZn/DvT9tD/AKJTrX/fVt/8eo/4d6ftof8ARKda/wC+rb/49QB8Z0V9mf8ADvT9tD/olOtf99W3/wAeo/4d6ftof9Ep1r/vq2/+PUAfGdFfZn/DvT9tD/olOtf99W3/AMeo/wCHen7aH/RKda/76tv/AI9QB8Z0V9mf8O9P20P+iU61/wB9W3/x6j/h3p+2h/0SnWv++rb/AOPUAH/BPT/k9D4U/wDYab/0mmr+zCv5cv2Kv2Kv2pvhz+1N8OvG3jb4dappOh6TqjT3t7O0BjgjMEq7m2ys2NzAcA9a/qNoAKKKKACiiigAooooAKKKKACiiigAooooA/gDor7M/wCHen7aH/RKda/76tv/AI9R/wAO9P20P+iU61/31bf/AB6gD4zor7M/4d6ftof9Ep1r/vq2/wDj1H/DvT9tD/olOtf99W3/AMeoA+M6K+zP+Hen7aH/AESnWv8Avq2/+PUf8O9P20P+iU61/wB9W3/x6gD4zor7M/4d6ftof9Ep1r/vq2/+PUf8O9P20P8AolOtf99W3/x6gD4zor7M/wCHen7aH/RKda/76tv/AI9R/wAO9P20P+iU61/31bf/AB6gD4zor7M/4d6ftof9Ep1r/vq2/wDj1H/DvT9tD/olOtf99W3/AMeoA+M6K+zP+Hen7aH/AESnWv8Avq2/+PUf8O9P20P+iU61/wB9W3/x6gD4zor7M/4d6ftof9Ep1r/vq2/+PUf8O9P20P8AolOtf99W3/x6gD4zor7M/wCHen7aH/RKda/76tv/AI9R/wAO9P20P+iU61/31bf/AB6gD4zor7M/4d6ftof9Ep1r/vq2/wDj1H/DvT9tD/olOtf99W3/AMeoA+M6K+zP+Hen7aH/AESnWv8Avq2/+PUf8O9P20P+iU61/wB9W3/x6gD4zor7M/4d6ftof9Ep1r/vq2/+PUf8O9P20P8AolOtf99W3/x6gD4zor7M/wCHen7aH/RKda/76tv/AI9R/wAO9P20P+iU61/31bf/AB6gD9mP+CJv/JvXjf8A7HOX/wBN9nX7MV+XP/BKT4KfFP4HfBTxZ4c+LHh268N6lfeKZL23t7soXktzZWsYkHlu4xvRhyc5FfqNQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/9L9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//T/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1P38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9X9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//W/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1/38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9D9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//R/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0v38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9P9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//U/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1f38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9b9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//X/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0P38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9H9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//S/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0/38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9T9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//V/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/1v38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9f9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Q/fyiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q=="/>
</defs>
</svg>
`;
var getHTML = (apiReference, theme, nonce) => {
	const nonceAttr = nonce ? `nonce="${nonce}"` : "";
	return `<!doctype html>
<html>
  <head>
    <title>Scalar API Reference</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <script
      id="api-reference"
      type="application/json">
    ${JSON.stringify(apiReference)}
    <\/script>
	 <script ${nonceAttr}>
      var configuration = {
	  	favicon: "data:image/svg+xml;utf8,${encodeURIComponent(logo)}",
	   	theme: "${theme || "default"}",
        metaData: {
			title: "Better Auth API",
			description: "API Reference for your Better Auth Instance",
		}
      }

      document.getElementById('api-reference').dataset.configuration =
        JSON.stringify(configuration)
    <\/script>
	  <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference" ${nonceAttr}><\/script>
  </body>
</html>`;
};
var openAPI = (options) => {
	const path = options?.path ?? "/reference";
	return {
		id: "open-api",
		endpoints: {
			generateOpenAPISchema: createAuthEndpoint("/open-api/generate-schema", { method: "GET" }, async (ctx) => {
				const schema = await generator(ctx.context, ctx.context.options);
				return ctx.json(schema);
			}),
			openAPIReference: createAuthEndpoint(path, {
				method: "GET",
				metadata: HIDE_METADATA
			}, async (ctx) => {
				if (options?.disableDefaultReference) throw new APIError("NOT_FOUND");
				const schema = await generator(ctx.context, ctx.context.options);
				return new Response(getHTML(schema, options?.theme, options?.nonce), { headers: { "Content-Type": "text/html" } });
			})
		},
		options
	};
};
createAuthMiddleware(async () => {
	return {};
});
createAuthMiddleware({ use: [sessionMiddleware] }, async (ctx) => {
	return { session: ctx.context.session };
});
Number.POSITIVE_INFINITY;
object({
	organizationId: string().optional().meta({ description: "The id of the organization to create the role in. If not provided, the user's active organization will be used." }),
	role: string().meta({ description: "The name of the role to create" }),
	permission: record(string(), array(string())).meta({ description: "The permission to assign to the role" })
});
object({ organizationId: string().optional().meta({ description: "The id of the organization to create the role in. If not provided, the user's active organization will be used." }) }).and(union([object({ roleName: string().nonempty().meta({ description: "The name of the role to delete" }) }), object({ roleId: string().nonempty().meta({ description: "The id of the role to delete" }) })]));
object({ organizationId: string().optional().meta({ description: "The id of the organization to list roles for. If not provided, the user's active organization will be used." }) }).optional();
object({ organizationId: string().optional().meta({ description: "The id of the organization to read a role for. If not provided, the user's active organization will be used." }) }).and(union([object({ roleName: string().nonempty().meta({ description: "The name of the role to read" }) }), object({ roleId: string().nonempty().meta({ description: "The id of the role to read" }) })])).optional();
union([object({ roleName: string().nonempty().meta({ description: "The name of the role to update" }) }), object({ roleId: string().nonempty().meta({ description: "The id of the role to update" }) })]);
object({
	email: string().meta({ description: "The email address of the user to invite" }),
	role: union([string().meta({ description: "The role to assign to the user" }), array(string().meta({ description: "The roles to assign to the user" }))]).meta({ description: "The role(s) to assign to the user. It can be `admin`, `member`, owner. Eg: \"member\"" }),
	organizationId: string().meta({ description: "The organization ID to invite the user to" }).optional(),
	resend: boolean$2().meta({ description: "Resend the invitation email, if the user is already invited. Eg: true" }).optional(),
	teamId: union([string().meta({ description: "The team ID to invite the user to" }).optional(), array(string()).meta({ description: "The team IDs to invite the user to" }).optional()])
});
object({ invitationId: string().meta({ description: "The ID of the invitation to accept" }) });
object({ invitationId: string().meta({ description: "The ID of the invitation to reject" }) });
object({ invitationId: string().meta({ description: "The ID of the invitation to cancel" }) });
object({ id: string().meta({ description: "The ID of the invitation to get" }) });
object({ organizationId: string().meta({ description: "The ID of the organization to list invitations for" }).optional() }).optional();
object({
	userId: string$1().meta({ description: "The user Id which represents the user to be added as a member. If `null` is provided, then it's expected to provide session headers. Eg: \"user-id\"" }),
	role: union([string(), array(string())]).meta({ description: "The role(s) to assign to the new member. Eg: [\"admin\", \"sale\"]" }),
	organizationId: string().meta({ description: "An optional organization ID to pass. If not provided, will default to the user's active organization. Eg: \"org-id\"" }).optional(),
	teamId: string().meta({ description: "An optional team ID to add the member to. Eg: \"team-id\"" }).optional()
});
object({
	memberIdOrEmail: string().meta({ description: "The ID or email of the member to remove" }),
	organizationId: string().meta({ description: "The ID of the organization to remove the member from. If not provided, the active organization will be used. Eg: \"org-id\"" }).optional()
});
object({
	role: union([string(), array(string())]).meta({ description: "The new role to be applied. This can be a string or array of strings representing the roles. Eg: [\"admin\", \"sale\"]" }),
	memberId: string().meta({ description: "The member id to apply the role update to. Eg: \"member-id\"" }),
	organizationId: string().meta({ description: "An optional organization ID which the member is a part of to apply the role update. If not provided, you must provide session headers to get the active organization. Eg: \"organization-id\"" }).optional()
});
object({ organizationId: string().meta({ description: "The organization Id for the member to leave. Eg: \"organization-id\"" }) });
object({
	userId: string().meta({ description: "The user ID to get the role for. If not provided, will default to the current user's" }).optional(),
	organizationId: string().meta({ description: "The organization ID to list members for. If not provided, will default to the user's active organization. Eg: \"organization-id\"" }).optional(),
	organizationSlug: string().meta({ description: "The organization slug to list members for. If not provided, will default to the user's active organization. Eg: \"organization-slug\"" }).optional()
}).optional();
object({
	name: string().min(1).meta({ description: "The name of the organization" }),
	slug: string().min(1).meta({ description: "The slug of the organization" }),
	userId: string$1().meta({ description: "The user id of the organization creator. If not provided, the current user will be used. Should only be used by admins or when called by the server. server-only. Eg: \"user-id\"" }).optional(),
	logo: string().meta({ description: "The logo of the organization" }).optional(),
	metadata: record(string(), any()).meta({ description: "The metadata of the organization" }).optional(),
	keepCurrentActiveOrganization: boolean$2().meta({ description: "Whether to keep the current active organization active after creating a new one. Eg: true" }).optional()
});
object({ slug: string().meta({ description: "The organization slug to check. Eg: \"my-org\"" }) });
object({
	name: string().min(1).meta({ description: "The name of the organization" }).optional(),
	slug: string().min(1).meta({ description: "The slug of the organization" }).optional(),
	logo: string().meta({ description: "The logo of the organization" }).optional(),
	metadata: record(string(), any()).meta({ description: "The metadata of the organization" }).optional()
});
object({ organizationId: string().meta({ description: "The organization id to delete" }) });
optional(object({
	organizationId: string().meta({ description: "The organization id to get" }).optional(),
	organizationSlug: string().meta({ description: "The organization slug to get" }).optional(),
	membersLimit: number().or(string().transform((val) => parseInt(val))).meta({ description: "The limit of members to get. By default, it uses the membershipLimit option." }).optional()
}));
object({
	organizationId: string().meta({ description: "The organization id to set as active. It can be null to unset the active organization. Eg: \"org-id\"" }).nullable().optional(),
	organizationSlug: string().meta({ description: "The organization slug to set as active. It can be null to unset the active organization if organizationId is not provided. Eg: \"org-slug\"" }).optional()
});
var roleSchema = string();
var invitationStatus = _enum([
	"pending",
	"accepted",
	"rejected",
	"canceled"
]).default("pending");
object({
	id: string().default(generateId),
	name: string(),
	slug: string(),
	logo: string().nullish().optional(),
	metadata: record(string(), unknown()).or(string().transform((v) => JSON.parse(v))).optional(),
	createdAt: date()
});
object({
	id: string().default(generateId),
	organizationId: string(),
	userId: string$1(),
	role: roleSchema,
	createdAt: date().default(() => /* @__PURE__ */ new Date())
});
object({
	id: string().default(generateId),
	organizationId: string(),
	email: string(),
	role: roleSchema,
	status: invitationStatus,
	teamId: string().nullish(),
	inviterId: string(),
	expiresAt: date(),
	createdAt: date().default(() => /* @__PURE__ */ new Date())
});
object({
	id: string().default(generateId),
	name: string().min(1),
	organizationId: string(),
	createdAt: date(),
	updatedAt: date().optional()
});
object({
	id: string().default(generateId),
	teamId: string(),
	userId: string(),
	createdAt: date().default(() => /* @__PURE__ */ new Date())
});
object({
	id: string().default(generateId),
	organizationId: string(),
	role: string(),
	permission: record(string(), array(string())),
	createdAt: date().default(() => /* @__PURE__ */ new Date()),
	updatedAt: date().optional()
});
var defaultRoles = [
	"admin",
	"member",
	"owner"
];
union([_enum(defaultRoles), array(_enum(defaultRoles))]);
object({
	name: string().meta({ description: "The name of the team. Eg: \"my-team\"" }),
	organizationId: string().meta({ description: "The organization ID which the team will be created in. Defaults to the active organization. Eg: \"organization-id\"" }).optional()
});
object({
	teamId: string().meta({ description: `The team ID of the team to remove. Eg: "team-id"` }),
	organizationId: string().meta({ description: `The organization ID which the team falls under. If not provided, it will default to the user's active organization. Eg: "organization-id"` }).optional()
});
optional(object({ organizationId: string().meta({ description: `The organization ID which the teams are under to list. Defaults to the users active organization. Eg: "organization-id"` }).optional() }));
object({ teamId: string().meta({ description: "The team id to set as active. It can be null to unset the active team" }).nullable().optional() });
optional(object({ teamId: string().optional().meta({ description: "The team whose members we should return. If this is not provided the members of the current active team get returned." }) }));
object({
	teamId: string().meta({ description: "The team the user should be a member of." }),
	userId: string$1().meta({ description: "The user Id which represents the user to be added as a member." })
});
object({
	teamId: string().meta({ description: "The team the user should be removed from." }),
	userId: string$1().meta({ description: "The user which should be removed from the team." })
});
object({ organizationId: string().optional() }).and(union([object({
	permission: record(string(), array(string())),
	permissions: _undefined()
}), object({
	permission: _undefined(),
	permissions: record(string(), array(string()))
})]));
object({
	phoneNumber: string().meta({ description: "Phone number to sign in. Eg: \"+1234567890\"" }),
	password: string().meta({ description: "Password to use for sign in." }),
	rememberMe: boolean$2().meta({ description: "Remember the session. Eg: true" }).optional()
});
object({ phoneNumber: string().meta({ description: "Phone number to send OTP. Eg: \"+1234567890\"" }) });
object({
	phoneNumber: string().meta({ description: "Phone number to verify. Eg: \"+1234567890\"" }),
	code: string().meta({ description: "OTP code. Eg: \"123456\"" }),
	disableSession: boolean$2().meta({ description: "Disable session creation after verification. Eg: false" }).optional(),
	updatePhoneNumber: boolean$2().meta({ description: "Check if there is a session and update the phone number. Eg: true" }).optional()
}).and(record(string(), any()));
object({ phoneNumber: string() });
object({
	otp: string().meta({ description: "The one time password to reset the password. Eg: \"123456\"" }),
	phoneNumber: string().meta({ description: "The phone number to the account which intends to reset the password for. Eg: \"+1234567890\"" }),
	newPassword: string().meta({ description: `The new password. Eg: "new-and-secure-password"` })
});
object({
	walletAddress: string().regex(/^0[xX][a-fA-F0-9]{40}$/i).length(42),
	chainId: number().int().positive().optional().default(1)
});
var TWO_FACTOR_COOKIE_NAME = "two_factor";
var TRUST_DEVICE_COOKIE_NAME = "trust_device";
async function verifyTwoFactor(ctx) {
	const invalid = (errorKey) => {
		throw APIError.from("UNAUTHORIZED", TWO_FACTOR_ERROR_CODES[errorKey]);
	};
	const session = await getSessionFromCtx(ctx);
	if (!session) {
		const twoFactorCookie = ctx.context.createAuthCookie(TWO_FACTOR_COOKIE_NAME);
		const signedTwoFactorCookie = await ctx.getSignedCookie(twoFactorCookie.name, ctx.context.secret);
		if (!signedTwoFactorCookie) throw APIError.from("UNAUTHORIZED", TWO_FACTOR_ERROR_CODES.INVALID_TWO_FACTOR_COOKIE);
		const verificationToken = await ctx.context.internalAdapter.findVerificationValue(signedTwoFactorCookie);
		if (!verificationToken) throw APIError.from("UNAUTHORIZED", TWO_FACTOR_ERROR_CODES.INVALID_TWO_FACTOR_COOKIE);
		const user = await ctx.context.internalAdapter.findUserById(verificationToken.value);
		if (!user) throw APIError.from("UNAUTHORIZED", TWO_FACTOR_ERROR_CODES.INVALID_TWO_FACTOR_COOKIE);
		const dontRememberMe = await ctx.getSignedCookie(ctx.context.authCookies.dontRememberToken.name, ctx.context.secret);
		return {
			valid: async (ctx) => {
				const session = await ctx.context.internalAdapter.createSession(verificationToken.value, !!dontRememberMe);
				if (!session) throw APIError.from("INTERNAL_SERVER_ERROR", {
					message: "failed to create session",
					code: "FAILED_TO_CREATE_SESSION"
				});
				await ctx.context.internalAdapter.deleteVerificationByIdentifier(signedTwoFactorCookie);
				await setSessionCookie(ctx, {
					session,
					user
				});
				expireCookie(ctx, twoFactorCookie);
				if (ctx.body.trustDevice) {
					const maxAge = ctx.context.getPlugin("two-factor").options?.trustDeviceMaxAge ?? 2592e3;
					const trustDeviceCookie = ctx.context.createAuthCookie(TRUST_DEVICE_COOKIE_NAME, { maxAge });
					/**
					* Create a random identifier for the trust device record.
					* Store it in the verification table with an expiration
					* so the server can validate and revoke it.
					*/
					const trustIdentifier = `trust-device-${generateRandomString(32)}`;
					const token = await createHMAC("SHA-256", "base64urlnopad").sign(ctx.context.secret, `${user.id}!${trustIdentifier}`);
					await ctx.context.internalAdapter.createVerificationValue({
						value: user.id,
						identifier: trustIdentifier,
						expiresAt: new Date(Date.now() + maxAge * 1e3)
					});
					await ctx.setSignedCookie(trustDeviceCookie.name, `${token}!${trustIdentifier}`, ctx.context.secret, trustDeviceCookie.attributes);
					expireCookie(ctx, ctx.context.authCookies.dontRememberToken);
				}
				return ctx.json({
					token: session.token,
					user: parseUserOutput(ctx.context.options, user)
				});
			},
			invalid,
			session: {
				session: null,
				user
			},
			key: signedTwoFactorCookie
		};
	}
	return {
		valid: async (ctx) => {
			return ctx.json({
				token: session.session.token,
				user: parseUserOutput(ctx.context.options, session.user)
			});
		},
		invalid,
		session,
		key: `${session.user.id}!${session.session.id}`
	};
}
function generateBackupCodesFn(options) {
	return Array.from({ length: options?.amount ?? 10 }).fill(null).map(() => generateRandomString(options?.length ?? 10, "a-z", "0-9", "A-Z")).map((code) => `${code.slice(0, 5)}-${code.slice(5)}`);
}
async function generateBackupCodes(secret, options) {
	const backupCodes = options?.customBackupCodesGenerate ? options.customBackupCodesGenerate() : generateBackupCodesFn(options);
	if (options?.storeBackupCodes === "encrypted") return {
		backupCodes,
		encryptedBackupCodes: await symmetricEncrypt({
			data: JSON.stringify(backupCodes),
			key: secret
		})
	};
	if (typeof options?.storeBackupCodes === "object" && "encrypt" in options?.storeBackupCodes) return {
		backupCodes,
		encryptedBackupCodes: await options?.storeBackupCodes.encrypt(JSON.stringify(backupCodes))
	};
	return {
		backupCodes,
		encryptedBackupCodes: JSON.stringify(backupCodes)
	};
}
async function verifyBackupCode(data, key, options) {
	const codes = await getBackupCodes(data.backupCodes, key, options);
	if (!codes) return {
		status: false,
		updated: null
	};
	return {
		status: codes.includes(data.code),
		updated: codes.filter((code) => code !== data.code)
	};
}
async function getBackupCodes(backupCodes, key, options) {
	if (options?.storeBackupCodes === "encrypted") return safeJSONParse(await symmetricDecrypt({
		key,
		data: backupCodes
	}));
	if (typeof options?.storeBackupCodes === "object" && "decrypt" in options?.storeBackupCodes) return safeJSONParse(await options?.storeBackupCodes.decrypt(backupCodes));
	return safeJSONParse(backupCodes);
}
var verifyBackupCodeBodySchema = object({
	code: string().meta({ description: `A backup code to verify. Eg: "123456"` }),
	disableSession: boolean$2().meta({ description: "If true, the session cookie will not be set." }).optional(),
	trustDevice: boolean$2().meta({ description: "If true, the device will be trusted for 30 days. It'll be refreshed on every sign in request within this time. Eg: true" }).optional()
});
var viewBackupCodesBodySchema = object({ userId: string$1().meta({ description: `The user ID to view all backup codes. Eg: "user-id"` }) });
var generateBackupCodesBodySchema = object({ password: string().meta({ description: "The users password." }) });
var backupCode2fa = (opts) => {
	const twoFactorTable = "twoFactor";
	return {
		id: "backup_code",
		endpoints: {
			verifyBackupCode: createAuthEndpoint("/two-factor/verify-backup-code", {
				method: "POST",
				body: verifyBackupCodeBodySchema,
				metadata: { openapi: {
					description: "Verify a backup code for two-factor authentication",
					responses: { "200": {
						description: "Backup code verified successfully",
						content: { "application/json": { schema: {
							type: "object",
							properties: {
								user: {
									type: "object",
									properties: {
										id: {
											type: "string",
											description: "Unique identifier of the user"
										},
										email: {
											type: "string",
											format: "email",
											nullable: true,
											description: "User's email address"
										},
										emailVerified: {
											type: "boolean",
											nullable: true,
											description: "Whether the email is verified"
										},
										name: {
											type: "string",
											nullable: true,
											description: "User's name"
										},
										image: {
											type: "string",
											format: "uri",
											nullable: true,
											description: "User's profile image URL"
										},
										twoFactorEnabled: {
											type: "boolean",
											description: "Whether two-factor authentication is enabled for the user"
										},
										createdAt: {
											type: "string",
											format: "date-time",
											description: "Timestamp when the user was created"
										},
										updatedAt: {
											type: "string",
											format: "date-time",
											description: "Timestamp when the user was last updated"
										}
									},
									required: [
										"id",
										"twoFactorEnabled",
										"createdAt",
										"updatedAt"
									],
									description: "The authenticated user object with two-factor details"
								},
								session: {
									type: "object",
									properties: {
										token: {
											type: "string",
											description: "Session token"
										},
										userId: {
											type: "string",
											description: "ID of the user associated with the session"
										},
										createdAt: {
											type: "string",
											format: "date-time",
											description: "Timestamp when the session was created"
										},
										expiresAt: {
											type: "string",
											format: "date-time",
											description: "Timestamp when the session expires"
										}
									},
									required: [
										"token",
										"userId",
										"createdAt",
										"expiresAt"
									],
									description: "The current session object, included unless disableSession is true"
								}
							},
							required: ["user", "session"]
						} } }
					} }
				} }
			}, async (ctx) => {
				const { session, valid } = await verifyTwoFactor(ctx);
				const user = session.user;
				const twoFactor = await ctx.context.adapter.findOne({
					model: twoFactorTable,
					where: [{
						field: "userId",
						value: user.id
					}]
				});
				if (!twoFactor) throw APIError.from("BAD_REQUEST", TWO_FACTOR_ERROR_CODES.BACKUP_CODES_NOT_ENABLED);
				const validate = await verifyBackupCode({
					backupCodes: twoFactor.backupCodes,
					code: ctx.body.code
				}, ctx.context.secretConfig, opts);
				if (!validate.status) throw APIError.from("UNAUTHORIZED", TWO_FACTOR_ERROR_CODES.INVALID_BACKUP_CODE);
				const updatedBackupCodes = await symmetricEncrypt({
					key: ctx.context.secretConfig,
					data: JSON.stringify(validate.updated)
				});
				if (!await ctx.context.adapter.update({
					model: twoFactorTable,
					update: { backupCodes: updatedBackupCodes },
					where: [{
						field: "id",
						value: twoFactor.id
					}, {
						field: "backupCodes",
						value: twoFactor.backupCodes
					}]
				})) throw APIError.fromStatus("CONFLICT", { message: "Failed to verify backup code. Please try again." });
				if (!ctx.body.disableSession) return valid(ctx);
				return ctx.json({
					token: session.session?.token,
					user: parseUserOutput(ctx.context.options, session.user)
				});
			}),
			generateBackupCodes: createAuthEndpoint("/two-factor/generate-backup-codes", {
				method: "POST",
				body: generateBackupCodesBodySchema,
				use: [sessionMiddleware],
				metadata: { openapi: {
					description: "Generate new backup codes for two-factor authentication",
					responses: { "200": {
						description: "Backup codes generated successfully",
						content: { "application/json": { schema: {
							type: "object",
							properties: {
								status: {
									type: "boolean",
									description: "Indicates if the backup codes were generated successfully",
									enum: [true]
								},
								backupCodes: {
									type: "array",
									items: { type: "string" },
									description: "Array of generated backup codes in plain text"
								}
							},
							required: ["status", "backupCodes"]
						} } }
					} }
				} }
			}, async (ctx) => {
				const user = ctx.context.session.user;
				if (!user.twoFactorEnabled) throw APIError.from("BAD_REQUEST", TWO_FACTOR_ERROR_CODES.TWO_FACTOR_NOT_ENABLED);
				await ctx.context.password.checkPassword(user.id, ctx);
				const twoFactor = await ctx.context.adapter.findOne({
					model: twoFactorTable,
					where: [{
						field: "userId",
						value: user.id
					}]
				});
				if (!twoFactor) throw APIError.from("BAD_REQUEST", TWO_FACTOR_ERROR_CODES.TWO_FACTOR_NOT_ENABLED);
				const backupCodes = await generateBackupCodes(ctx.context.secretConfig, opts);
				await ctx.context.adapter.update({
					model: twoFactorTable,
					update: { backupCodes: backupCodes.encryptedBackupCodes },
					where: [{
						field: "id",
						value: twoFactor.id
					}]
				});
				return ctx.json({
					status: true,
					backupCodes: backupCodes.backupCodes
				});
			}),
			viewBackupCodes: createAuthEndpoint({
				method: "POST",
				body: viewBackupCodesBodySchema
			}, async (ctx) => {
				const twoFactor = await ctx.context.adapter.findOne({
					model: twoFactorTable,
					where: [{
						field: "userId",
						value: ctx.body.userId
					}]
				});
				if (!twoFactor) throw APIError.from("BAD_REQUEST", TWO_FACTOR_ERROR_CODES.BACKUP_CODES_NOT_ENABLED);
				const decryptedBackupCodes = await getBackupCodes(twoFactor.backupCodes, ctx.context.secretConfig, opts);
				if (!decryptedBackupCodes) throw APIError.from("BAD_REQUEST", TWO_FACTOR_ERROR_CODES.INVALID_BACKUP_CODE);
				return ctx.json({
					status: true,
					backupCodes: decryptedBackupCodes
				});
			})
		}
	};
};
var defaultKeyHasher = async (token) => {
	const hash = await createHash$1("SHA-256").digest(new TextEncoder().encode(token));
	return base64Url.encode(new Uint8Array(hash), { padding: false });
};
var verifyOTPBodySchema = object({
	code: string().meta({ description: "The otp code to verify. Eg: \"012345\"" }),
	trustDevice: boolean$2().optional().meta({ description: "If true, the device will be trusted for 30 days. It'll be refreshed on every sign in request within this time. Eg: true" })
});
var send2FaOTPBodySchema = object({ trustDevice: boolean$2().optional().meta({ description: "If true, the device will be trusted for 30 days. It'll be refreshed on every sign in request within this time. Eg: true" }) }).optional();
/**
* The otp adapter is created from the totp adapter.
*/
var otp2fa = (options) => {
	const opts = {
		storeOTP: "plain",
		digits: 6,
		...options,
		period: (options?.period || 3) * 60 * 1e3
	};
	async function storeOTP(ctx, otp) {
		if (opts.storeOTP === "hashed") return await defaultKeyHasher(otp);
		if (typeof opts.storeOTP === "object" && "hash" in opts.storeOTP) return await opts.storeOTP.hash(otp);
		if (typeof opts.storeOTP === "object" && "encrypt" in opts.storeOTP) return await opts.storeOTP.encrypt(otp);
		if (opts.storeOTP === "encrypted") return await symmetricEncrypt({
			key: ctx.context.secretConfig,
			data: otp
		});
		return otp;
	}
	async function decryptOrHashForComparison(ctx, storedOtp, userInput) {
		if (opts.storeOTP === "hashed") return [storedOtp, await defaultKeyHasher(userInput)];
		if (opts.storeOTP === "encrypted") return [await symmetricDecrypt({
			key: ctx.context.secretConfig,
			data: storedOtp
		}), userInput];
		if (typeof opts.storeOTP === "object" && "encrypt" in opts.storeOTP) return [await opts.storeOTP.decrypt(storedOtp), userInput];
		if (typeof opts.storeOTP === "object" && "hash" in opts.storeOTP) return [storedOtp, await opts.storeOTP.hash(userInput)];
		return [storedOtp, userInput];
	}
	return {
		id: "otp",
		endpoints: {
			sendTwoFactorOTP: createAuthEndpoint("/two-factor/send-otp", {
				method: "POST",
				body: send2FaOTPBodySchema,
				metadata: { openapi: {
					summary: "Send two factor OTP",
					description: "Send two factor OTP to the user",
					responses: { 200: {
						description: "Successful response",
						content: { "application/json": { schema: {
							type: "object",
							properties: { status: { type: "boolean" } }
						} } }
					} }
				} }
			}, async (ctx) => {
				if (!options || !options.sendOTP) {
					ctx.context.logger.error("send otp isn't configured. Please configure the send otp function on otp options.");
					throw APIError.from("BAD_REQUEST", {
						message: "otp isn't configured",
						code: "OTP_NOT_CONFIGURED"
					});
				}
				const { session, key } = await verifyTwoFactor(ctx);
				const code = generateRandomString(opts.digits, "0-9");
				const hashedCode = await storeOTP(ctx, code);
				await ctx.context.internalAdapter.createVerificationValue({
					value: `${hashedCode}:0`,
					identifier: `2fa-otp-${key}`,
					expiresAt: new Date(Date.now() + opts.period)
				});
				const sendOTPResult = options.sendOTP({
					user: session.user,
					otp: code
				}, ctx);
				if (sendOTPResult instanceof Promise) await ctx.context.runInBackgroundOrAwait(sendOTPResult.catch((e) => {
					ctx.context.logger.error("Failed to send two-factor OTP", e);
				}));
				return ctx.json({ status: true });
			}),
			verifyTwoFactorOTP: createAuthEndpoint("/two-factor/verify-otp", {
				method: "POST",
				body: verifyOTPBodySchema,
				metadata: { openapi: {
					summary: "Verify two factor OTP",
					description: "Verify two factor OTP",
					responses: { "200": {
						description: "Two-factor OTP verified successfully",
						content: { "application/json": { schema: {
							type: "object",
							properties: {
								token: {
									type: "string",
									description: "Session token for the authenticated session"
								},
								user: {
									type: "object",
									properties: {
										id: {
											type: "string",
											description: "Unique identifier of the user"
										},
										email: {
											type: "string",
											format: "email",
											nullable: true,
											description: "User's email address"
										},
										emailVerified: {
											type: "boolean",
											nullable: true,
											description: "Whether the email is verified"
										},
										name: {
											type: "string",
											nullable: true,
											description: "User's name"
										},
										image: {
											type: "string",
											format: "uri",
											nullable: true,
											description: "User's profile image URL"
										},
										createdAt: {
											type: "string",
											format: "date-time",
											description: "Timestamp when the user was created"
										},
										updatedAt: {
											type: "string",
											format: "date-time",
											description: "Timestamp when the user was last updated"
										}
									},
									required: [
										"id",
										"createdAt",
										"updatedAt"
									],
									description: "The authenticated user object"
								}
							},
							required: ["token", "user"]
						} } }
					} }
				} }
			}, async (ctx) => {
				const { session, key, valid, invalid } = await verifyTwoFactor(ctx);
				const toCheckOtp = await ctx.context.internalAdapter.findVerificationValue(`2fa-otp-${key}`);
				const [otp, counter] = toCheckOtp?.value?.split(":") ?? [];
				if (!toCheckOtp || toCheckOtp.expiresAt < /* @__PURE__ */ new Date()) {
					if (toCheckOtp) await ctx.context.internalAdapter.deleteVerificationByIdentifier(`2fa-otp-${key}`);
					throw APIError.from("BAD_REQUEST", TWO_FACTOR_ERROR_CODES.OTP_HAS_EXPIRED);
				}
				const allowedAttempts = options?.allowedAttempts || 5;
				if (parseInt(counter) >= allowedAttempts) {
					await ctx.context.internalAdapter.deleteVerificationByIdentifier(`2fa-otp-${key}`);
					throw APIError.from("BAD_REQUEST", TWO_FACTOR_ERROR_CODES.TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE);
				}
				const [storedValue, inputValue] = await decryptOrHashForComparison(ctx, otp, ctx.body.code);
				if (constantTimeEqual(new TextEncoder().encode(storedValue), new TextEncoder().encode(inputValue))) {
					if (!session.user.twoFactorEnabled) {
						if (!session.session) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
						const updatedUser = await ctx.context.internalAdapter.updateUser(session.user.id, { twoFactorEnabled: true });
						const newSession = await ctx.context.internalAdapter.createSession(session.user.id, false, session.session);
						await ctx.context.internalAdapter.deleteSession(session.session.token);
						await setSessionCookie(ctx, {
							session: newSession,
							user: updatedUser
						});
						return ctx.json({
							token: newSession.token,
							user: parseUserOutput(ctx.context.options, updatedUser)
						});
					}
					return valid(ctx);
				} else {
					await ctx.context.internalAdapter.updateVerificationByIdentifier(`2fa-otp-${key}`, { value: `${otp}:${(parseInt(counter, 10) || 0) + 1}` });
					return invalid("INVALID_CODE");
				}
			})
		}
	};
};
var schema = {
	user: { fields: { twoFactorEnabled: {
		type: "boolean",
		required: false,
		defaultValue: false,
		input: false
	} } },
	twoFactor: { fields: {
		secret: {
			type: "string",
			required: true,
			returned: false,
			index: true
		},
		backupCodes: {
			type: "string",
			required: true,
			returned: false
		},
		userId: {
			type: "string",
			required: true,
			returned: false,
			references: {
				model: "user",
				field: "id"
			},
			index: true
		}
	} }
};
var generateTOTPBodySchema = object({ secret: string().meta({ description: "The secret to generate the TOTP code" }) });
var getTOTPURIBodySchema = object({ password: string().meta({ description: "User password" }) });
var verifyTOTPBodySchema = object({
	code: string().meta({ description: "The otp code to verify. Eg: \"012345\"" }),
	trustDevice: boolean$2().meta({ description: "If true, the device will be trusted for 30 days. It'll be refreshed on every sign in request within this time. Eg: true" }).optional()
});
var totp2fa = (options) => {
	const opts = {
		...options,
		digits: options?.digits || 6,
		period: options?.period || 30
	};
	const twoFactorTable = "twoFactor";
	return {
		id: "totp",
		endpoints: {
			generateTOTP: createAuthEndpoint({
				method: "POST",
				body: generateTOTPBodySchema,
				metadata: { openapi: {
					summary: "Generate TOTP code",
					description: "Use this endpoint to generate a TOTP code",
					responses: { 200: {
						description: "Successful response",
						content: { "application/json": { schema: {
							type: "object",
							properties: { code: { type: "string" } }
						} } }
					} }
				} }
			}, async (ctx) => {
				if (options?.disable) {
					ctx.context.logger.error("totp isn't configured. please pass totp option on two factor plugin to enable totp");
					throw APIError.from("BAD_REQUEST", {
						message: "totp isn't configured",
						code: "TOTP_NOT_CONFIGURED"
					});
				}
				return { code: await createOTP(ctx.body.secret, {
					period: opts.period,
					digits: opts.digits
				}).totp() };
			}),
			getTOTPURI: createAuthEndpoint("/two-factor/get-totp-uri", {
				method: "POST",
				use: [sessionMiddleware],
				body: getTOTPURIBodySchema,
				metadata: { openapi: {
					summary: "Get TOTP URI",
					description: "Use this endpoint to get the TOTP URI",
					responses: { 200: {
						description: "Successful response",
						content: { "application/json": { schema: {
							type: "object",
							properties: { totpURI: { type: "string" } }
						} } }
					} }
				} }
			}, async (ctx) => {
				if (options?.disable) {
					ctx.context.logger.error("totp isn't configured. please pass totp option on two factor plugin to enable totp");
					throw APIError.from("BAD_REQUEST", {
						message: "totp isn't configured",
						code: "TOTP_NOT_CONFIGURED"
					});
				}
				const user = ctx.context.session.user;
				const twoFactor = await ctx.context.adapter.findOne({
					model: twoFactorTable,
					where: [{
						field: "userId",
						value: user.id
					}]
				});
				if (!twoFactor) throw APIError.from("BAD_REQUEST", TWO_FACTOR_ERROR_CODES.TOTP_NOT_ENABLED);
				const secret = await symmetricDecrypt({
					key: ctx.context.secretConfig,
					data: twoFactor.secret
				});
				await ctx.context.password.checkPassword(user.id, ctx);
				return { totpURI: createOTP(secret, {
					digits: opts.digits,
					period: opts.period
				}).url(options?.issuer || ctx.context.appName, user.email) };
			}),
			verifyTOTP: createAuthEndpoint("/two-factor/verify-totp", {
				method: "POST",
				body: verifyTOTPBodySchema,
				metadata: { openapi: {
					summary: "Verify two factor TOTP",
					description: "Verify two factor TOTP",
					responses: { 200: {
						description: "Successful response",
						content: { "application/json": { schema: {
							type: "object",
							properties: { status: { type: "boolean" } }
						} } }
					} }
				} }
			}, async (ctx) => {
				if (options?.disable) {
					ctx.context.logger.error("totp isn't configured. please pass totp option on two factor plugin to enable totp");
					throw APIError.from("BAD_REQUEST", {
						message: "totp isn't configured",
						code: "TOTP_NOT_CONFIGURED"
					});
				}
				const { session, valid, invalid } = await verifyTwoFactor(ctx);
				const user = session.user;
				const twoFactor = await ctx.context.adapter.findOne({
					model: twoFactorTable,
					where: [{
						field: "userId",
						value: user.id
					}]
				});
				if (!twoFactor) throw APIError.from("BAD_REQUEST", TWO_FACTOR_ERROR_CODES.TOTP_NOT_ENABLED);
				if (!await createOTP(await symmetricDecrypt({
					key: ctx.context.secretConfig,
					data: twoFactor.secret
				}), {
					period: opts.period,
					digits: opts.digits
				}).verify(ctx.body.code)) return invalid("INVALID_CODE");
				if (!user.twoFactorEnabled) {
					if (!session.session) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
					const updatedUser = await ctx.context.internalAdapter.updateUser(user.id, { twoFactorEnabled: true });
					const newSession = await ctx.context.internalAdapter.createSession(user.id, false, session.session).catch((e) => {
						throw e;
					});
					await ctx.context.internalAdapter.deleteSession(session.session.token);
					await setSessionCookie(ctx, {
						session: newSession,
						user: updatedUser
					});
				}
				return valid(ctx);
			})
		}
	};
};
var enableTwoFactorBodySchema = object({
	password: string().meta({ description: "User password" }),
	issuer: string().meta({ description: "Custom issuer for the TOTP URI" }).optional()
});
var disableTwoFactorBodySchema = object({ password: string().meta({ description: "User password" }) });
var twoFactor$1 = (options) => {
	const opts = { twoFactorTable: "twoFactor" };
	const trustDeviceMaxAge = options?.trustDeviceMaxAge ?? 2592e3;
	const backupCodeOptions = {
		storeBackupCodes: "encrypted",
		...options?.backupCodeOptions
	};
	const totp = totp2fa(options?.totpOptions);
	const backupCode = backupCode2fa(backupCodeOptions);
	const otp = otp2fa(options?.otpOptions);
	return {
		id: "two-factor",
		endpoints: {
			...totp.endpoints,
			...otp.endpoints,
			...backupCode.endpoints,
			enableTwoFactor: createAuthEndpoint("/two-factor/enable", {
				method: "POST",
				body: enableTwoFactorBodySchema,
				use: [sessionMiddleware],
				metadata: { openapi: {
					summary: "Enable two factor authentication",
					description: "Use this endpoint to enable two factor authentication. This will generate a TOTP URI and backup codes. Once the user verifies the TOTP URI, the two factor authentication will be enabled.",
					responses: { 200: {
						description: "Successful response",
						content: { "application/json": { schema: {
							type: "object",
							properties: {
								totpURI: {
									type: "string",
									description: "TOTP URI"
								},
								backupCodes: {
									type: "array",
									items: { type: "string" },
									description: "Backup codes"
								}
							}
						} } }
					} }
				} }
			}, async (ctx) => {
				const user = ctx.context.session.user;
				const { password, issuer } = ctx.body;
				if (!await validatePassword(ctx, {
					password,
					userId: user.id
				})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
				const secret = generateRandomString(32);
				const encryptedSecret = await symmetricEncrypt({
					key: ctx.context.secretConfig,
					data: secret
				});
				const backupCodes = await generateBackupCodes(ctx.context.secretConfig, backupCodeOptions);
				if (options?.skipVerificationOnEnable) {
					const updatedUser = await ctx.context.internalAdapter.updateUser(user.id, { twoFactorEnabled: true });
					/**
					* Update the session cookie with the new user data
					*/
					await setSessionCookie(ctx, {
						session: await ctx.context.internalAdapter.createSession(updatedUser.id, false, ctx.context.session.session),
						user: updatedUser
					});
					await ctx.context.internalAdapter.deleteSession(ctx.context.session.session.token);
				}
				await ctx.context.adapter.deleteMany({
					model: opts.twoFactorTable,
					where: [{
						field: "userId",
						value: user.id
					}]
				});
				await ctx.context.adapter.create({
					model: opts.twoFactorTable,
					data: {
						secret: encryptedSecret,
						backupCodes: backupCodes.encryptedBackupCodes,
						userId: user.id
					}
				});
				const totpURI = createOTP(secret, {
					digits: options?.totpOptions?.digits || 6,
					period: options?.totpOptions?.period
				}).url(issuer || options?.issuer || ctx.context.appName, user.email);
				return ctx.json({
					totpURI,
					backupCodes: backupCodes.backupCodes
				});
			}),
			disableTwoFactor: createAuthEndpoint("/two-factor/disable", {
				method: "POST",
				body: disableTwoFactorBodySchema,
				use: [sessionMiddleware],
				metadata: { openapi: {
					summary: "Disable two factor authentication",
					description: "Use this endpoint to disable two factor authentication.",
					responses: { 200: {
						description: "Successful response",
						content: { "application/json": { schema: {
							type: "object",
							properties: { status: { type: "boolean" } }
						} } }
					} }
				} }
			}, async (ctx) => {
				const user = ctx.context.session.user;
				const { password } = ctx.body;
				if (!await validatePassword(ctx, {
					password,
					userId: user.id
				})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
				const updatedUser = await ctx.context.internalAdapter.updateUser(user.id, { twoFactorEnabled: false });
				await ctx.context.adapter.delete({
					model: opts.twoFactorTable,
					where: [{
						field: "userId",
						value: updatedUser.id
					}]
				});
				/**
				* Update the session cookie with the new user data
				*/
				await setSessionCookie(ctx, {
					session: await ctx.context.internalAdapter.createSession(updatedUser.id, false, ctx.context.session.session),
					user: updatedUser
				});
				await ctx.context.internalAdapter.deleteSession(ctx.context.session.session.token);
				const disableTrustCookie = ctx.context.createAuthCookie(TRUST_DEVICE_COOKIE_NAME, { maxAge: trustDeviceMaxAge });
				const disableTrustValue = await ctx.getSignedCookie(disableTrustCookie.name, ctx.context.secret);
				if (disableTrustValue) {
					const [, trustId] = disableTrustValue.split("!");
					if (trustId) await ctx.context.internalAdapter.deleteVerificationByIdentifier(trustId);
					expireCookie(ctx, disableTrustCookie);
				}
				return ctx.json({ status: true });
			})
		},
		options,
		hooks: { after: [{
			matcher(context) {
				return context.path === "/sign-in/email" || context.path === "/sign-in/username" || context.path === "/sign-in/phone-number";
			},
			handler: createAuthMiddleware(async (ctx) => {
				const data = ctx.context.newSession;
				if (!data) return;
				if (!data?.user.twoFactorEnabled) return;
				const trustDeviceCookieAttrs = ctx.context.createAuthCookie(TRUST_DEVICE_COOKIE_NAME, { maxAge: trustDeviceMaxAge });
				const trustDeviceCookie = await ctx.getSignedCookie(trustDeviceCookieAttrs.name, ctx.context.secret);
				if (trustDeviceCookie) {
					const [token, trustIdentifier] = trustDeviceCookie.split("!");
					if (token && trustIdentifier) {
						if (token === await createHMAC("SHA-256", "base64urlnopad").sign(ctx.context.secret, `${data.user.id}!${trustIdentifier}`)) {
							const verificationRecord = await ctx.context.internalAdapter.findVerificationValue(trustIdentifier);
							if (verificationRecord && verificationRecord.value === data.user.id && verificationRecord.expiresAt > /* @__PURE__ */ new Date()) {
								await ctx.context.internalAdapter.deleteVerificationByIdentifier(trustIdentifier);
								const newTrustIdentifier = `trust-device-${generateRandomString(32)}`;
								const newToken = await createHMAC("SHA-256", "base64urlnopad").sign(ctx.context.secret, `${data.user.id}!${newTrustIdentifier}`);
								await ctx.context.internalAdapter.createVerificationValue({
									value: data.user.id,
									identifier: newTrustIdentifier,
									expiresAt: new Date(Date.now() + trustDeviceMaxAge * 1e3)
								});
								const newTrustDeviceCookie = ctx.context.createAuthCookie(TRUST_DEVICE_COOKIE_NAME, { maxAge: trustDeviceMaxAge });
								await ctx.setSignedCookie(newTrustDeviceCookie.name, `${newToken}!${newTrustIdentifier}`, ctx.context.secret, trustDeviceCookieAttrs.attributes);
								return;
							}
						}
					}
					expireCookie(ctx, trustDeviceCookieAttrs);
				}
				/**
				* remove the session cookie. It's set by the sign in credential
				*/
				deleteSessionCookie(ctx, true);
				await ctx.context.internalAdapter.deleteSession(data.session.token);
				const maxAge = options?.twoFactorCookieMaxAge ?? 600;
				const twoFactorCookie = ctx.context.createAuthCookie(TWO_FACTOR_COOKIE_NAME, { maxAge });
				const identifier = `2fa-${generateRandomString(20)}`;
				await ctx.context.internalAdapter.createVerificationValue({
					value: data.user.id,
					identifier,
					expiresAt: new Date(Date.now() + maxAge * 1e3)
				});
				await ctx.setSignedCookie(twoFactorCookie.name, identifier, ctx.context.secret, twoFactorCookie.attributes);
				return ctx.json({ twoFactorRedirect: true });
			})
		}] },
		schema: mergeSchema(schema, {
			...options?.schema,
			twoFactor: {
				...options?.schema?.twoFactor,
				...options?.twoFactorTable ? { modelName: options.twoFactorTable } : {}
			}
		}),
		rateLimit: [{
			pathMatcher(path) {
				return path.startsWith("/two-factor/");
			},
			window: 10,
			max: 3
		}],
		$ERROR_CODES: TWO_FACTOR_ERROR_CODES
	};
};
var getSchema = (normalizer) => {
	return { user: { fields: {
		username: {
			type: "string",
			required: false,
			sortable: true,
			unique: true,
			returned: true,
			transform: { input(value) {
				return typeof value !== "string" ? value : normalizer.username(value);
			} }
		},
		displayUsername: {
			type: "string",
			required: false,
			transform: { input(value) {
				return typeof value !== "string" ? value : normalizer.displayUsername(value);
			} }
		}
	} } };
};
function defaultUsernameValidator(username) {
	return /^[a-zA-Z0-9_.]+$/.test(username);
}
var signInUsernameBodySchema = object({
	username: string().meta({ description: "The username of the user" }),
	password: string().meta({ description: "The password of the user" }),
	rememberMe: boolean$2().meta({ description: "Remember the user session" }).optional(),
	callbackURL: string().meta({ description: "The URL to redirect to after email verification" }).optional()
});
var isUsernameAvailableBodySchema = object({ username: string().meta({ description: "The username to check" }) });
var username = (options) => {
	const normalizer = (username) => {
		if (options?.usernameNormalization === false) return username;
		if (options?.usernameNormalization) return options.usernameNormalization(username);
		return username.toLowerCase();
	};
	const displayUsernameNormalizer = (displayUsername) => {
		return options?.displayUsernameNormalization ? options.displayUsernameNormalization(displayUsername) : displayUsername;
	};
	return {
		id: "username",
		init(ctx) {
			return { options: { databaseHooks: { user: {
				create: { async before(user, context) {
					const username = "username" in user ? user.username : null;
					const displayUsername = "displayUsername" in user ? user.displayUsername : null;
					return { data: {
						...user,
						...username ? { username: normalizer(username) } : {},
						...displayUsername ? { displayUsername: displayUsernameNormalizer(displayUsername) } : {}
					} };
				} },
				update: { async before(user, context) {
					const username = "username" in user ? user.username : null;
					const displayUsername = "displayUsername" in user ? user.displayUsername : null;
					return { data: {
						...user,
						...username ? { username: normalizer(username) } : {},
						...displayUsername ? { displayUsername: displayUsernameNormalizer(displayUsername) } : {}
					} };
				} }
			} } } };
		},
		endpoints: {
			signInUsername: createAuthEndpoint("/sign-in/username", {
				method: "POST",
				body: signInUsernameBodySchema,
				metadata: { openapi: {
					summary: "Sign in with username",
					description: "Sign in with username",
					responses: {
						200: {
							description: "Success",
							content: { "application/json": { schema: {
								type: "object",
								properties: {
									token: {
										type: "string",
										description: "Session token for the authenticated session"
									},
									user: { $ref: "#/components/schemas/User" }
								},
								required: ["token", "user"]
							} } }
						},
						422: {
							description: "Unprocessable Entity. Validation error",
							content: { "application/json": { schema: {
								type: "object",
								properties: { message: { type: "string" } }
							} } }
						}
					}
				} }
			}, async (ctx) => {
				if (!ctx.body.username || !ctx.body.password) {
					ctx.context.logger.error("Username or password not found");
					throw APIError.from("UNAUTHORIZED", USERNAME_ERROR_CODES.INVALID_USERNAME_OR_PASSWORD);
				}
				const username = options?.validationOrder?.username === "pre-normalization" ? normalizer(ctx.body.username) : ctx.body.username;
				const minUsernameLength = options?.minUsernameLength || 3;
				const maxUsernameLength = options?.maxUsernameLength || 30;
				if (username.length < minUsernameLength) {
					ctx.context.logger.error("Username too short", { username });
					throw APIError.from("UNPROCESSABLE_ENTITY", USERNAME_ERROR_CODES.USERNAME_TOO_SHORT);
				}
				if (username.length > maxUsernameLength) {
					ctx.context.logger.error("Username too long", { username });
					throw APIError.from("UNPROCESSABLE_ENTITY", USERNAME_ERROR_CODES.USERNAME_TOO_LONG);
				}
				if (!await (options?.usernameValidator || defaultUsernameValidator)(username)) throw APIError.from("UNPROCESSABLE_ENTITY", USERNAME_ERROR_CODES.INVALID_USERNAME);
				const user = await ctx.context.adapter.findOne({
					model: "user",
					where: [{
						field: "username",
						value: normalizer(username)
					}]
				});
				if (!user) {
					await ctx.context.password.hash(ctx.body.password);
					ctx.context.logger.error("User not found", { username });
					throw APIError.from("UNAUTHORIZED", USERNAME_ERROR_CODES.INVALID_USERNAME_OR_PASSWORD);
				}
				const account = await ctx.context.adapter.findOne({
					model: "account",
					where: [{
						field: "userId",
						value: user.id
					}, {
						field: "providerId",
						value: "credential"
					}]
				});
				if (!account) throw APIError.from("UNAUTHORIZED", USERNAME_ERROR_CODES.INVALID_USERNAME_OR_PASSWORD);
				const currentPassword = account?.password;
				if (!currentPassword) {
					ctx.context.logger.error("Password not found", { username });
					throw APIError.from("UNAUTHORIZED", USERNAME_ERROR_CODES.INVALID_USERNAME_OR_PASSWORD);
				}
				if (!await ctx.context.password.verify({
					hash: currentPassword,
					password: ctx.body.password
				})) {
					ctx.context.logger.error("Invalid password");
					throw APIError.from("UNAUTHORIZED", USERNAME_ERROR_CODES.INVALID_USERNAME_OR_PASSWORD);
				}
				if (ctx.context.options?.emailAndPassword?.requireEmailVerification && !user.emailVerified) {
					if (!ctx.context.options?.emailVerification?.sendVerificationEmail) throw APIError.from("FORBIDDEN", USERNAME_ERROR_CODES.EMAIL_NOT_VERIFIED);
					if (ctx.context.options?.emailVerification?.sendOnSignIn) {
						const token = await createEmailVerificationToken(ctx.context.secret, user.email, void 0, ctx.context.options.emailVerification?.expiresIn);
						const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${ctx.body.callbackURL || "/"}`;
						await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
							user,
							url,
							token
						}, ctx.request));
					}
					throw APIError.from("FORBIDDEN", USERNAME_ERROR_CODES.EMAIL_NOT_VERIFIED);
				}
				const session = await ctx.context.internalAdapter.createSession(user.id, ctx.body.rememberMe === false);
				if (!session) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
				await setSessionCookie(ctx, {
					session,
					user
				}, ctx.body.rememberMe === false);
				return ctx.json({
					token: session.token,
					user: parseUserOutput(ctx.context.options, user)
				});
			}),
			isUsernameAvailable: createAuthEndpoint("/is-username-available", {
				method: "POST",
				body: isUsernameAvailableBodySchema
			}, async (ctx) => {
				const username = ctx.body.username;
				if (!username) throw APIError.from("UNPROCESSABLE_ENTITY", USERNAME_ERROR_CODES.INVALID_USERNAME);
				const minUsernameLength = options?.minUsernameLength || 3;
				const maxUsernameLength = options?.maxUsernameLength || 30;
				if (username.length < minUsernameLength) throw APIError.from("UNPROCESSABLE_ENTITY", USERNAME_ERROR_CODES.USERNAME_TOO_SHORT);
				if (username.length > maxUsernameLength) throw APIError.from("UNPROCESSABLE_ENTITY", USERNAME_ERROR_CODES.USERNAME_TOO_LONG);
				if (!await (options?.usernameValidator || defaultUsernameValidator)(username)) throw APIError.from("UNPROCESSABLE_ENTITY", USERNAME_ERROR_CODES.INVALID_USERNAME);
				if (await ctx.context.adapter.findOne({
					model: "user",
					where: [{
						field: "username",
						value: normalizer(username)
					}]
				})) return ctx.json({ available: false });
				return ctx.json({ available: true });
			})
		},
		schema: mergeSchema(getSchema({
			username: normalizer,
			displayUsername: displayUsernameNormalizer
		}), options?.schema),
		hooks: { before: [{
			matcher(context) {
				return context.path === "/sign-up/email" || context.path === "/update-user";
			},
			handler: createAuthMiddleware(async (ctx) => {
				const username = typeof ctx.body.username === "string" && options?.validationOrder?.username === "post-normalization" ? normalizer(ctx.body.username) : ctx.body.username;
				if (username !== void 0 && typeof username === "string") {
					const minUsernameLength = options?.minUsernameLength || 3;
					const maxUsernameLength = options?.maxUsernameLength || 30;
					if (username.length < minUsernameLength) throw APIError.from("BAD_REQUEST", USERNAME_ERROR_CODES.USERNAME_TOO_SHORT);
					if (username.length > maxUsernameLength) throw APIError.from("BAD_REQUEST", USERNAME_ERROR_CODES.USERNAME_TOO_LONG);
					if (!await (options?.usernameValidator || defaultUsernameValidator)(username)) throw APIError.from("BAD_REQUEST", USERNAME_ERROR_CODES.INVALID_USERNAME);
					const user = await ctx.context.adapter.findOne({
						model: "user",
						where: [{
							field: "username",
							value: username
						}]
					});
					const blockChangeSignUp = ctx.path === "/sign-up/email" && user;
					const blockChangeUpdateUser = ctx.path === "/update-user" && user && ctx.context.session && user.id !== ctx.context.session.session.userId;
					if (blockChangeSignUp || blockChangeUpdateUser) throw APIError.from("BAD_REQUEST", USERNAME_ERROR_CODES.USERNAME_IS_ALREADY_TAKEN);
				}
				const displayUsername = typeof ctx.body.displayUsername === "string" && options?.validationOrder?.displayUsername === "post-normalization" ? displayUsernameNormalizer(ctx.body.displayUsername) : ctx.body.displayUsername;
				if (displayUsername !== void 0 && typeof displayUsername === "string") {
					if (options?.displayUsernameValidator) {
						if (!await options.displayUsernameValidator(displayUsername)) throw APIError.from("BAD_REQUEST", USERNAME_ERROR_CODES.INVALID_DISPLAY_USERNAME);
					}
				}
			})
		}, {
			matcher(context) {
				return context.path === "/sign-up/email" || context.path === "/update-user";
			},
			handler: createAuthMiddleware(async (ctx) => {
				if (ctx.body.username && !ctx.body.displayUsername) ctx.body.displayUsername = ctx.body.username;
				if (ctx.body.displayUsername && !ctx.body.username) ctx.body.username = ctx.body.displayUsername;
			})
		}] },
		options,
		$ERROR_CODES: USERNAME_ERROR_CODES
	};
};
var env$1 = createEnv({
	clientPrefix: "VITE_",
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
	client: {},
	server: {
		TZ: string().default("Etc/UTC"),
		APP_URL: url({ protocol: /https?/ }),
		PRINTER_APP_URL: url({ protocol: /https?/ }).optional(),
		PRINTER_ENDPOINT: url({ protocol: /^(wss?|https?)$/ }),
		DATABASE_URL: url({ protocol: /postgres(ql)?/ }),
		AUTH_SECRET: string().min(1),
		BETTER_AUTH_API_KEY: string().min(1).optional(),
		GOOGLE_CLIENT_ID: string().min(1).optional(),
		GOOGLE_CLIENT_SECRET: string().min(1).optional(),
		GITHUB_CLIENT_ID: string().min(1).optional(),
		GITHUB_CLIENT_SECRET: string().min(1).optional(),
		OAUTH_PROVIDER_NAME: string().min(1).optional(),
		OAUTH_CLIENT_ID: string().min(1).optional(),
		OAUTH_CLIENT_SECRET: string().min(1).optional(),
		OAUTH_DISCOVERY_URL: url({ protocol: /https?/ }).optional(),
		OAUTH_AUTHORIZATION_URL: url({ protocol: /https?/ }).optional(),
		OAUTH_TOKEN_URL: url({ protocol: /https?/ }).optional(),
		OAUTH_USER_INFO_URL: url({ protocol: /https?/ }).optional(),
		OAUTH_SCOPES: string().min(1).transform((value) => value.split(" ")).default([
			"openid",
			"profile",
			"email"
		]),
		SMTP_HOST: string().min(1).optional(),
		SMTP_PORT: number$1().int().min(1).max(65535).default(587),
		SMTP_USER: string().min(1).optional(),
		SMTP_PASS: string().min(1).optional(),
		SMTP_FROM: string().min(1).optional(),
		SMTP_SECURE: stringbool().default(false),
		S3_ACCESS_KEY_ID: string().min(1).optional(),
		S3_SECRET_ACCESS_KEY: string().min(1).optional(),
		S3_REGION: string().default("us-east-1"),
		S3_ENDPOINT: url({ protocol: /https?/ }).optional(),
		S3_BUCKET: string().min(1).optional(),
		S3_FORCE_PATH_STYLE: stringbool().default(false),
		FLAG_DEBUG_PRINTER: stringbool().default(false),
		FLAG_DISABLE_SIGNUPS: stringbool().default(false),
		FLAG_DISABLE_EMAIL_AUTH: stringbool().default(false),
		FLAG_DISABLE_IMAGE_PROCESSING: stringbool().default(false)
	}
});
var SALT_ROUNDS = 10;
var hashPassword = (password) => hash(password, SALT_ROUNDS);
var verifyPassword = (password, passwordHash) => compare(password, passwordHash);
var schema_exports = /* @__PURE__ */ __exportAll$1({
	account: () => account,
	apikey: () => apikey,
	passkey: () => passkey,
	relations: () => relations,
	resume: () => resume,
	resumeStatistics: () => resumeStatistics,
	session: () => session,
	twoFactor: () => twoFactor,
	user: () => user,
	verification: () => verification
});
var user = pgTable("user", {
	id: uuid("id").notNull().primaryKey().$defaultFn(() => generateId$1()),
	image: text("image"),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	emailVerified: boolean("email_verified").notNull().default(false),
	username: text("username").notNull().unique(),
	displayUsername: text("display_username").notNull().unique(),
	twoFactorEnabled: boolean("two_factor_enabled").notNull().default(false),
	lastActiveAt: timestamp("last_active_at", { withTimezone: true }),
	createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => /* @__PURE__ */ new Date())
}, (t) => [index().on(t.createdAt.asc())]);
var session = pgTable("session", {
	id: uuid("id").notNull().primaryKey().$defaultFn(() => generateId$1()),
	token: text("token").notNull().unique(),
	ipAddress: text("ip_address"),
	userAgent: text("user_agent"),
	userId: uuid("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
	expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
	createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => /* @__PURE__ */ new Date())
}, (t) => [index().on(t.token, t.userId), index().on(t.expiresAt)]);
var account = pgTable("account", {
	id: uuid("id").notNull().primaryKey().$defaultFn(() => generateId$1()),
	accountId: text("account_id").notNull(),
	providerId: text("provider_id").notNull().default("credential"),
	userId: uuid("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
	scope: text("scope"),
	idToken: text("id_token"),
	password: text("password"),
	accessToken: text("access_token"),
	refreshToken: text("refresh_token"),
	accessTokenExpiresAt: timestamp("access_token_expires_at", { withTimezone: true }),
	refreshTokenExpiresAt: timestamp("refresh_token_expires_at", { withTimezone: true }),
	createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => /* @__PURE__ */ new Date())
}, (t) => [index().on(t.userId)]);
var verification = pgTable("verification", {
	id: uuid("id").notNull().primaryKey().$defaultFn(() => generateId$1()),
	identifier: text("identifier").notNull().unique(),
	value: text("value").notNull(),
	expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
	createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => /* @__PURE__ */ new Date())
}, (t) => [index().on(t.identifier)]);
var twoFactor = pgTable("two_factor", {
	id: uuid("id").notNull().primaryKey().$defaultFn(() => generateId$1()),
	userId: uuid("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
	secret: text("secret").notNull(),
	backupCodes: text("backup_codes").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => /* @__PURE__ */ new Date())
}, (t) => [index().on(t.userId), index().on(t.secret)]);
var passkey = pgTable("passkey", {
	id: uuid("id").notNull().primaryKey().$defaultFn(() => generateId$1()),
	name: text("name"),
	aaguid: text("aaguid"),
	publicKey: text("public_key").notNull(),
	credentialID: text("credential_id").notNull(),
	counter: integer("counter").notNull(),
	deviceType: text("device_type").notNull(),
	backedUp: boolean("backed_up").notNull().default(false),
	transports: text("transports").notNull(),
	userId: uuid("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
	createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => /* @__PURE__ */ new Date())
}, (t) => [index().on(t.userId)]);
var resume = pgTable("resume", {
	id: uuid("id").notNull().primaryKey().$defaultFn(() => generateId$1()),
	name: text("name").notNull(),
	slug: text("slug").notNull(),
	tags: text("tags").array().notNull().default([]),
	isPublic: boolean("is_public").notNull().default(false),
	isLocked: boolean("is_locked").notNull().default(false),
	password: text("password"),
	data: jsonb("data").notNull().$type().$defaultFn(() => defaultResumeData),
	userId: uuid("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
	createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => /* @__PURE__ */ new Date())
}, (t) => [
	unique().on(t.slug, t.userId),
	index().on(t.userId),
	index().on(t.createdAt.asc()),
	index().on(t.userId, t.updatedAt.desc()),
	index().on(t.isPublic, t.slug, t.userId)
]);
var resumeStatistics = pgTable("resume_statistics", {
	id: uuid("id").notNull().primaryKey().$defaultFn(() => generateId$1()),
	views: integer("views").notNull().default(0),
	downloads: integer("downloads").notNull().default(0),
	lastViewedAt: timestamp("last_viewed_at", { withTimezone: true }),
	lastDownloadedAt: timestamp("last_downloaded_at", { withTimezone: true }),
	resumeId: uuid("resume_id").unique().notNull().references(() => resume.id, { onDelete: "cascade" }),
	createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => /* @__PURE__ */ new Date())
});
var apikey = pgTable("apikey", {
	id: uuid("id").notNull().primaryKey().$defaultFn(() => generateId$1()),
	name: text("name"),
	start: text("start"),
	prefix: text("prefix"),
	key: text("key").notNull(),
	configId: text("config_id").notNull().default("default"),
	referenceId: uuid("reference_id").notNull().references(() => user.id, { onDelete: "cascade" }),
	refillInterval: integer("refill_interval"),
	refillAmount: integer("refill_amount"),
	lastRefillAt: timestamp("last_refill_at", { withTimezone: true }),
	enabled: boolean("enabled").notNull().default(true),
	rateLimitEnabled: boolean("rate_limit_enabled").notNull().default(false),
	rateLimitTimeWindow: integer("rate_limit_time_window").default(864e5),
	rateLimitMax: integer("rate_limit_max").default(10),
	requestCount: integer("request_count").notNull().default(0),
	remaining: integer("remaining"),
	lastRequest: timestamp("last_request", { withTimezone: true }),
	expiresAt: timestamp("expires_at", { withTimezone: true }),
	createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()),
	permissions: text("permissions"),
	metadata: jsonb("metadata")
}, (t) => [
	index().on(t.referenceId),
	index().on(t.key),
	index().on(t.configId),
	index().on(t.enabled, t.referenceId)
]);
var relations = defineRelations({
	user,
	session,
	account,
	verification,
	twoFactor,
	passkey,
	resume,
	resumeStatistics,
	apikey
}, (r) => ({
	user: {
		sessions: r.many.session(),
		accounts: r.many.account(),
		twoFactors: r.many.twoFactor(),
		passkeys: r.many.passkey(),
		resumes: r.many.resume(),
		apiKeys: r.many.apikey()
	},
	session: { user: r.one.user({
		from: r.session.userId,
		to: r.user.id
	}) },
	account: { user: r.one.user({
		from: r.account.userId,
		to: r.user.id
	}) },
	twoFactor: { user: r.one.user({
		from: r.twoFactor.userId,
		to: r.user.id
	}) },
	passkey: { user: r.one.user({
		from: r.passkey.userId,
		to: r.user.id
	}) },
	resume: {
		user: r.one.user({
			from: r.resume.userId,
			to: r.user.id
		}),
		statistics: r.one.resumeStatistics({
			from: r.resume.id,
			to: r.resumeStatistics.resumeId
		})
	},
	resumeStatistics: { resume: r.one.resume({
		from: r.resumeStatistics.resumeId,
		to: r.resume.id
	}) },
	apikey: { user: r.one.user({
		from: r.apikey.referenceId,
		to: r.user.id
	}) }
}));
function getPool() {
	if (!globalThis.__pool) globalThis.__pool = new Pool({ connectionString: env$1.DATABASE_URL });
	return globalThis.__pool;
}
function makeDrizzleClient() {
	return drizzle({
		client: getPool(),
		schema: schema_exports
	});
}
var getDatabaseServerFn = () => {
	if (!globalThis.__drizzle) globalThis.__drizzle = makeDrizzleClient();
	return globalThis.__drizzle;
};
var db = getDatabaseServerFn();
function serializeError(error) {
	if (!error) return void 0;
	if (error instanceof Error) return {
		name: error.name,
		message: error.message,
		stack: error.stack
	};
	if (typeof error === "string") return {
		name: "Error",
		message: error
	};
	if (typeof error === "object") return {
		name: "Error",
		message: JSON.stringify(error)
	};
	return {
		name: "Error",
		message: String(error)
	};
}
function log(level, message, context = {}) {
	const { error, ...rest } = context;
	const payload = {
		ts: (/* @__PURE__ */ new Date()).toISOString(),
		level,
		message,
		...rest,
		error: serializeError(error)
	};
	const json = JSON.stringify(payload);
	if (level === "error") {
		console.error(json);
		return;
	}
	if (level === "warn") {
		console.warn(json);
		return;
	}
	console.log(json);
}
var logger$1 = {
	debug: (message, context) => log("debug", message, context),
	info: (message, context) => log("info", message, context),
	warn: (message, context) => log("warn", message, context),
	error: (message, context) => log("error", message, context)
};
var isSmtpEnabled = () => {
	return !!env$1.SMTP_HOST && !!env$1.SMTP_USER && !!env$1.SMTP_PASS && !!env$1.SMTP_FROM;
};
var cachedTransport;
var getTransport = () => {
	if (!isSmtpEnabled()) return;
	if (cachedTransport) return cachedTransport;
	cachedTransport = import_nodemailer.default.createTransport({
		host: env$1.SMTP_HOST,
		port: env$1.SMTP_PORT,
		secure: env$1.SMTP_SECURE,
		auth: {
			user: env$1.SMTP_USER,
			pass: env$1.SMTP_PASS
		}
	});
	return cachedTransport;
};
var sendEmail = async (options) => {
	const transport = getTransport();
	const from = options.from ?? env$1.SMTP_FROM ?? "Reactive Resume <noreply@localhost>";
	const payload = {
		to: options.to,
		from,
		subject: options.subject,
		text: options.text
	};
	if (!transport) {
		logger$1.info("SMTP not configured; skipping email send", {
			to: payload.to,
			subject: payload.subject
		});
		return;
	}
	try {
		await transport.sendMail({
			...options,
			from
		});
	} catch (error) {
		logger$1.error("SMTP send failed", {
			smtpHost: env$1.SMTP_HOST,
			smtpPort: env$1.SMTP_PORT,
			smtpSecure: env$1.SMTP_SECURE,
			to: payload.to,
			subject: payload.subject,
			error
		});
	}
};
function isCustomOAuthProviderEnabled() {
	const hasDiscovery = Boolean(env$1.OAUTH_DISCOVERY_URL);
	const hasManual = Boolean(env$1.OAUTH_AUTHORIZATION_URL) && Boolean(env$1.OAUTH_TOKEN_URL) && Boolean(env$1.OAUTH_USER_INFO_URL);
	return Boolean(env$1.OAUTH_CLIENT_ID) && Boolean(env$1.OAUTH_CLIENT_SECRET) && (hasDiscovery || hasManual);
}
function getTrustedOrigins() {
	const appUrl = new URL(env$1.APP_URL);
	const trustedOrigins = new Set([appUrl.origin.replace(/\/$/, "")]);
	const LOCAL_ORIGINS = ["localhost", "127.0.0.1"];
	if (LOCAL_ORIGINS.includes(appUrl.hostname)) {
		for (const hostname of LOCAL_ORIGINS) if (hostname !== appUrl.hostname) {
			const altUrl = new URL(env$1.APP_URL);
			altUrl.hostname = hostname;
			trustedOrigins.add(altUrl.origin.replace(/\/$/, ""));
		}
	}
	return Array.from(trustedOrigins);
}
var getAuthConfig = () => {
	const authConfigs = [];
	if (isCustomOAuthProviderEnabled()) authConfigs.push({
		providerId: "custom",
		disableSignUp: env$1.FLAG_DISABLE_SIGNUPS,
		clientId: env$1.OAUTH_CLIENT_ID,
		clientSecret: env$1.OAUTH_CLIENT_SECRET,
		discoveryUrl: env$1.OAUTH_DISCOVERY_URL,
		authorizationUrl: env$1.OAUTH_AUTHORIZATION_URL,
		tokenUrl: env$1.OAUTH_TOKEN_URL,
		userInfoUrl: env$1.OAUTH_USER_INFO_URL,
		scopes: env$1.OAUTH_SCOPES,
		redirectURI: `${env$1.APP_URL}/api/auth/oauth2/callback/custom`,
		mapProfileToUser: async (profile) => {
			if (!profile.email) throw new dist_exports.BetterAuthError("OAuth Provider did not return an email address. This is required for user creation.", { cause: "EMAIL_REQUIRED" });
			const email = profile.email;
			const name = profile.name ?? profile.preferred_username ?? email.split("@")[0];
			const username = profile.preferred_username ?? email.split("@")[0];
			return {
				name,
				email,
				image: profile.image ?? profile.picture ?? profile.avatar_url,
				username,
				displayUsername: username,
				emailVerified: true
			};
		}
	});
	return betterAuth({
		appName: "Reactive Resume",
		baseURL: process.env.BETTER_AUTH_URL ?? env$1.APP_URL,
		secret: process.env.BETTER_AUTH_SECRET ?? env$1.AUTH_SECRET,
		database: drizzleAdapter(db, {
			schema: schema_exports,
			provider: "pg"
		}),
		telemetry: { enabled: false },
		trustedOrigins: getTrustedOrigins(),
		advanced: {
			database: { generateId: generateId$1 },
			useSecureCookies: env$1.APP_URL.startsWith("https://"),
			ipAddress: { ipAddressHeaders: ["x-forwarded-for", "cf-connecting-ip"] }
		},
		emailAndPassword: {
			enabled: !env$1.FLAG_DISABLE_EMAIL_AUTH,
			autoSignIn: true,
			minPasswordLength: 6,
			maxPasswordLength: 64,
			requireEmailVerification: false,
			disableSignUp: env$1.FLAG_DISABLE_SIGNUPS || env$1.FLAG_DISABLE_EMAIL_AUTH,
			sendResetPassword: async ({ user, url }) => {
				await sendEmail({
					to: user.email,
					subject: "Reset your password",
					text: `You requested a password reset for your Reactive Resume account.\n\nTo reset your password, please visit the following URL:\n${url}.\n\nIf you did not request a password reset, please ignore this email.`
				});
			},
			password: {
				hash: (password) => hashPassword(password),
				verify: ({ password, hash }) => verifyPassword(password, hash)
			}
		},
		emailVerification: {
			sendOnSignUp: true,
			autoSignInAfterVerification: true,
			sendVerificationEmail: async ({ user, url }) => {
				await sendEmail({
					to: user.email,
					subject: "Verify your email",
					text: `You recently signed up for an account on Reactive Resume.\n\nTo verify your email, please visit the following URL:\n${url}`
				});
			}
		},
		user: {
			changeEmail: {
				enabled: true,
				sendChangeEmailConfirmation: async ({ user, newEmail, url }) => {
					await sendEmail({
						to: newEmail,
						subject: "Verify your new email",
						text: `You recently requested to change your email on Reactive Resume from ${user.email} to ${newEmail}.\n\nTo verify this change, please visit the following URL:\n${url}\n\nIf you did not request this change, please ignore this email.`
					});
				}
			},
			additionalFields: { username: {
				type: "string",
				required: true
			} }
		},
		account: { accountLinking: {
			enabled: true,
			trustedProviders: ["google", "github"]
		} },
		socialProviders: {
			google: {
				enabled: !!env$1.GOOGLE_CLIENT_ID && !!env$1.GOOGLE_CLIENT_SECRET,
				disableSignUp: env$1.FLAG_DISABLE_SIGNUPS,
				clientId: env$1.GOOGLE_CLIENT_ID,
				clientSecret: env$1.GOOGLE_CLIENT_SECRET,
				mapProfileToUser: async (profile) => {
					return {
						name: profile.name ?? profile.email.split("@")[0],
						email: profile.email,
						image: profile.picture,
						username: profile.email.split("@")[0],
						displayUsername: profile.email.split("@")[0],
						emailVerified: true
					};
				}
			},
			github: {
				enabled: !!env$1.GITHUB_CLIENT_ID && !!env$1.GITHUB_CLIENT_SECRET,
				disableSignUp: env$1.FLAG_DISABLE_SIGNUPS,
				clientId: env$1.GITHUB_CLIENT_ID,
				clientSecret: env$1.GITHUB_CLIENT_SECRET,
				mapProfileToUser: async (profile) => {
					const name = profile.name ?? profile.login ?? String(profile.id);
					const login = profile.login ?? String(profile.id);
					const normalizedLogin = toUsername(login);
					const [legacyAccount] = await db.select({
						accountId: account.accountId,
						email: user.email,
						emailVerified: user.emailVerified,
						username: user.username,
						displayUsername: user.displayUsername
					}).from(account).innerJoin(user, eq(account.userId, user.id)).where(and(eq(account.providerId, "github"), or(eq(user.username, normalizedLogin), eq(user.displayUsername, login)))).limit(1);
					if (legacyAccount) return {
						id: legacyAccount.accountId,
						name,
						email: legacyAccount.email,
						image: profile.avatar_url,
						username: legacyAccount.username,
						displayUsername: legacyAccount.displayUsername,
						emailVerified: legacyAccount.emailVerified
					};
					return {
						name,
						email: profile.email,
						image: profile.avatar_url,
						username: normalizedLogin,
						displayUsername: login,
						emailVerified: true
					};
				}
			}
		},
		plugins: [
			openAPI(),
			genericOAuth({ config: authConfigs }),
			twoFactor$1({ issuer: "Reactive Resume" }),
			apiKey({
				enableSessionForAPIKeys: true,
				rateLimit: { enabled: false }
			}),
			dash({
				apiKey: env$1.BETTER_AUTH_API_KEY,
				activityTracking: { enabled: true }
			}),
			username({
				minUsernameLength: 3,
				maxUsernameLength: 64,
				usernameNormalization: (value) => toUsername(value),
				displayUsernameNormalization: (value) => toUsername(value),
				usernameValidator: (username) => /^[a-z0-9._-]+$/.test(username),
				validationOrder: {
					username: "post-normalization",
					displayUsername: "post-normalization"
				}
			})
		]
	});
};
var auth = getAuthConfig();
async function getUserFromHeaders(headers) {
	try {
		const result = await auth.api.getSession({ headers });
		if (!result || !result.user) return null;
		return result.user;
	} catch {
		return null;
	}
}
async function getUserFromApiKey(apiKey) {
	try {
		const result = await auth.api.verifyApiKey({ body: { key: apiKey } });
		if (!result.key || !result.valid) return null;
		const [userResult] = await db.select().from(user).where(eq(user.id, result.key.referenceId)).limit(1);
		if (!userResult) return null;
		return userResult;
	} catch {
		return null;
	}
}
var publicProcedure = os.$context().use(async ({ context, next }) => {
	const headers = context.reqHeaders ?? new Headers();
	const apiKey = headers.get("x-api-key");
	const user = apiKey ? await getUserFromApiKey(apiKey) : await getUserFromHeaders(headers);
	return next({ context: {
		...context,
		user: user ?? null
	} });
});
var protectedProcedure = publicProcedure.use(async ({ context, next }) => {
	if (!context.user) throw new ORPCError("UNAUTHORIZED");
	return next({ context: {
		...context,
		user: context.user
	} });
});
/**
* Server-only procedure that can only be called from server-side code (e.g., loaders).
* Rejects requests from the browser with a 401 UNAUTHORIZED error.
*/
var serverOnlyProcedure = publicProcedure.use(async ({ context, next }) => {
	const headers = context.reqHeaders ?? new Headers();
	if (!(env$1.FLAG_DEBUG_PRINTER, headers.get("x-server-side-call") === "true")) throw new ORPCError("UNAUTHORIZED", { message: "This endpoint can only be called from server-side code" });
	return next({ context });
});
var chat_system_default = "You are a resume editing assistant that must modify resume data only through JSON Patch (RFC 6902) tool calls.\r\n\r\n## Objective\r\n- Help the user improve resume content and structure.\r\n- Apply edits safely and minimally via the `patch_resume` tool.\r\n\r\n## Allowed Inputs\r\n- User instructions in conversation.\r\n- Current resume JSON state provided below.\r\n\r\n## Hard Constraints\r\n1. For any data change, always call `patch_resume`. Do not output raw patch arrays directly in chat text.\r\n2. Generate the minimal set of patch operations required for the request.\r\n3. Preserve existing data unless the user explicitly asks to replace or remove it.\r\n4. Ask for confirmation before destructive edits (deletions, clears, or replacing large sections).\r\n5. Stay resume-focused; decline off-topic requests.\r\n6. Do not fabricate factual user history. For drafted content, label it as a draft and ask for confirmation.\r\n7. Keep all paths and operations valid for RFC 6902 and current schema.\r\n8. New item IDs must be UUIDs in `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` format.\r\n9. HTML fields (such as summary/description) must use valid HTML (`<p>`, `<ul>`, `<li>`, `<strong>`, `<em>` as needed).\r\n\r\n## Conflict Resolution Order\r\n1. Data safety and schema validity\r\n2. User intent from latest instruction\r\n3. Minimal-change editing strategy\r\n\r\n## Editing Rules\r\n- Prefer targeted `replace` operations over broad object replacements.\r\n- Use `add` at `/items/-` for appending list entries.\r\n- Use `remove` only when explicitly requested or confirmed.\r\n- Keep `website` objects shaped as `{ \"url\": string, \"label\": string }`.\r\n- Keep `hidden` fields explicit booleans.\r\n\r\n## Resume Shape Reference\r\n- Top-level keys: `basics`, `summary`, `picture`, `sections`, `customSections`, `metadata`\r\n- Section item families in `sections`: `profiles`, `experience`, `education`, `projects`, `skills`, `languages`, `interests`, `awards`, `certifications`, `publications`, `volunteer`, `references`\r\n\r\n## Output Contract\r\n- If a change is needed: call `patch_resume`, then provide a concise natural-language confirmation.\r\n- If no change is needed: provide concise guidance without tool calls.\r\n- Never include markdown code blocks for patch payloads in your chat reply.\r\n\r\n## Current Resume Data\r\n\r\n```json\r\n{{RESUME_DATA}}\r\n```\r\n";
var docx_parser_system_default = "You are a strict resume extraction engine for Microsoft Word files (DOC/DOCX). Convert the attached document into a Reactive Resume JSON object.\r\n\r\n## Objective\r\n- Extract resume content accurately and map it into the provided JSON template.\r\n- Prioritize source fidelity and schema correctness over completeness.\r\n\r\n## Allowed Input\r\n- Use only visible, intended content from the attached document.\r\n- Ignore hidden text, comments, track changes, revision history, document metadata, and layout artifacts.\r\n\r\n## Hard Constraints\r\n1. Extract only explicitly stated information.\r\n2. Never fabricate, infer, or normalize missing data.\r\n3. Keep original wording and original language.\r\n4. When uncertain, omit content and leave template defaults.\r\n5. Do not use external knowledge.\r\n\r\n## Conflict Resolution Order\r\n1. Schema validity (must return valid JSON matching template shape)\r\n2. Source fidelity (exactly what the document states)\r\n3. Omit uncertain values (never guess)\r\n\r\n## Extraction Rules\r\n- Dates: preserve exactly as written.\r\n- URLs: include only URLs explicitly visible in document content.\r\n- Contact data: copy as-is; do not reformat.\r\n- Skills: include only explicit skill mentions.\r\n- Descriptions: output HTML using `<p>`, `<ul>`, `<li>` while preserving meaning.\r\n- Lists and tables: extract visible text faithfully; preserve relationships in section fields.\r\n- Headers/footers: include only if they contain real resume data.\r\n- IDs: generate unique UUIDs for all `id` fields.\r\n- `hidden`: default to `false` unless explicitly indicated otherwise.\r\n- `columns`: default to `1` unless clearly multi-column by content intent.\r\n- `website`: when missing, use `{ \"url\": \"\", \"label\": \"\" }`.\r\n\r\n## Section Mapping\r\n- `basics`, `summary`, `experience`, `education`, `skills`, `projects`, `certifications`, `awards`, `languages`, `volunteer`, `publications`, `references`, `profiles`, `interests`\r\n- Map based on explicit headings first; use local context only when heading is absent.\r\n\r\n## Fallback Rules\r\n- If the document is malformed or partially unreadable, return best-effort extraction for readable parts only.\r\n- Keep unknown fields empty according to the template.\r\n\r\n## Output Contract\r\n- Return only one raw JSON object.\r\n- No markdown, no commentary, no extra keys.";
var docx_parser_user_default = "The Microsoft Word resume file is attached as a file in this message.\r\n\r\nProcess the attached document and return the final JSON object only, strictly following the system rules and the provided schema template.";
var pdf_parser_system_default = "You are a strict resume extraction engine for PDF files. Convert the attached PDF into a Reactive Resume JSON object.\r\n\r\n## Objective\r\n- Extract resume content accurately and map it into the provided JSON template.\r\n- Prioritize source fidelity and schema correctness over completeness.\r\n\r\n## Allowed Input\r\n- Use only the visible content from the attached PDF document.\r\n- Ignore OCR noise, watermarks, repeated headers/footers, and broken line wraps.\r\n\r\n## Hard Constraints\r\n1. Extract only explicitly stated information.\r\n2. Never fabricate, infer, or normalize missing data.\r\n3. Keep original wording and original language.\r\n4. When uncertain, omit content and leave template defaults.\r\n5. Do not use external knowledge.\r\n\r\n## Conflict Resolution Order\r\n1. Schema validity (must return valid JSON matching template shape)\r\n2. Source fidelity (exactly what the PDF states)\r\n3. Omit uncertain values (never guess)\r\n\r\n## Extraction Rules\r\n- Dates: preserve exactly as written.\r\n- URLs: include only full URLs that are explicitly present.\r\n- Contact data: copy as-is; do not reformat.\r\n- Skills: include only explicit skill mentions.\r\n- Descriptions: output HTML using `<p>`, `<ul>`, `<li>` while preserving meaning.\r\n- IDs: generate unique UUIDs for all `id` fields.\r\n- `hidden`: default to `false` unless explicitly indicated otherwise.\r\n- `columns`: default to `1` unless clearly multi-column by content intent.\r\n- `website`: when missing, use `{ \"url\": \"\", \"label\": \"\" }`.\r\n\r\n## Section Mapping\r\n- `basics`, `summary`, `experience`, `education`, `skills`, `projects`, `certifications`, `awards`, `languages`, `volunteer`, `publications`, `references`, `profiles`, `interests`\r\n- Map based on explicit headings first; use local context only when heading is absent.\r\n\r\n## Fallback Rules\r\n- If the PDF is low quality or partially unreadable, return best-effort extraction for readable parts only.\r\n- Keep unknown fields empty according to the template.\r\n\r\n## Output Contract\r\n- Return only one raw JSON object.\r\n- No markdown, no commentary, no extra keys.";
var pdf_parser_user_default = "The resume PDF is attached as a file in this message.\r\n\r\nProcess the attached document and return the final JSON object only, strictly following the system rules and the provided schema template.";
/**
* A Zod schema that models JSON Patch (RFC 6902) operations as a discriminated union on `op`.
* This ensures required fields (`value` for add/replace/test, `from` for move/copy) are
* validated at the request boundary rather than failing later at the `fast-json-patch` layer.
*/
var jsonPatchOperationSchema = zod_default.discriminatedUnion("op", [
	zod_default.object({
		op: zod_default.literal("add"),
		path: zod_default.string(),
		value: zod_default.any()
	}),
	zod_default.object({
		op: zod_default.literal("remove"),
		path: zod_default.string()
	}),
	zod_default.object({
		op: zod_default.literal("replace"),
		path: zod_default.string(),
		value: zod_default.any()
	}),
	zod_default.object({
		op: zod_default.literal("move"),
		path: zod_default.string(),
		from: zod_default.string()
	}),
	zod_default.object({
		op: zod_default.literal("copy"),
		path: zod_default.string(),
		from: zod_default.string()
	}),
	zod_default.object({
		op: zod_default.literal("test"),
		path: zod_default.string(),
		value: zod_default.any()
	})
]);
/**
* A structured error thrown when a JSON Patch operation fails.
* Contains only the relevant details -- never the full document tree.
*/
var ResumePatchError = class extends Error {
	/** The error code from `fast-json-patch`, e.g. `TEST_OPERATION_FAILED`. */
	code;
	/** The zero-based index of the failing operation in the operations array. */
	index;
	/** The operation object that caused the failure. */
	operation;
	constructor(code, message, index, operation) {
		super(message);
		this.name = "ResumePatchError";
		this.code = code;
		this.index = index;
		this.operation = operation;
	}
};
/**
* Human-readable messages for each `fast-json-patch` error code.
* These are returned to the API consumer instead of the raw library output.
*/
var patchErrorMessages = {
	SEQUENCE_NOT_AN_ARRAY: "Patch sequence must be an array.",
	OPERATION_NOT_AN_OBJECT: "Operation is not an object.",
	OPERATION_OP_INVALID: "Operation `op` property is not one of the operations defined in RFC 6902.",
	OPERATION_PATH_INVALID: "Operation `path` property is not a valid JSON Pointer string.",
	OPERATION_FROM_REQUIRED: "Operation `from` property is required for `move` and `copy` operations.",
	OPERATION_VALUE_REQUIRED: "Operation `value` property is required for `add`, `replace`, and `test` operations.",
	OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED: "Operation `value` contains an `undefined` value, which is not valid in JSON.",
	OPERATION_PATH_CANNOT_ADD: "Cannot perform an `add` operation at the desired path.",
	OPERATION_PATH_UNRESOLVABLE: "Cannot perform the operation at a path that does not exist.",
	OPERATION_FROM_UNRESOLVABLE: "Cannot perform the operation from a path that does not exist.",
	OPERATION_PATH_ILLEGAL_ARRAY_INDEX: "Array index in path must be an unsigned base-10 integer.",
	OPERATION_VALUE_OUT_OF_BOUNDS: "The specified array index is greater than the number of elements in the array.",
	TEST_OPERATION_FAILED: "Test operation failed -- the value at the given path did not match the expected value."
};
/**
* Checks whether an error is a `JsonPatchError` from `fast-json-patch`.
* The library doesn't export the class directly, so we duck-type it.
*/
function isJsonPatchError(error) {
	return error instanceof Error && "index" in error && "operation" in error;
}
/**
* Converts a `JsonPatchError` into a clean `ResumePatchError` that omits the document tree.
*/
function toResumePatchError(error) {
	const code = error.name;
	const message = patchErrorMessages[code] ?? error.message;
	const index = error.index ?? 0;
	const operation = error.operation;
	return new ResumePatchError(code, message, index, operation);
}
/**
* Applies an array of JSON Patch (RFC 6902) operations to a `ResumeData` object.
*
* This function validates the operations before applying them, then validates the
* resulting document against the `resumeDataSchema` to ensure the patched data is
* still a valid resume.
*
* The original `data` object is not mutated; a deep clone is created internally.
*
* @see https://docs.rxresu.me/guides/using-the-patch-api — for usage examples and API details.
* @see https://datatracker.ietf.org/doc/html/rfc6902 — JSON Patch specification.
*
* @param data - The current resume data to patch.
* @param operations - An array of JSON Patch operations to apply.
* @returns The patched and validated `ResumeData` object.
* @throws {ResumePatchError} If the operations are structurally invalid or target non-existent paths.
* @throws {ResumePatchError} If a `test` operation does not match.
* @throws {Error} If the patched document does not conform to the `ResumeData` schema.
*/
function applyResumePatches(data, operations) {
	const validationError = fast_json_patch_default.validate(operations, data);
	if (validationError) throw toResumePatchError(validationError);
	let patched;
	try {
		patched = fast_json_patch_default.applyPatch(data, operations, false, false).newDocument;
	} catch (error) {
		if (isJsonPatchError(error)) throw toResumePatchError(error);
		throw error;
	}
	const parsed = resumeDataSchema.safeParse(patched);
	if (!parsed.success) throw new Error(`Patch produced invalid resume data: ${parsed.error.message}`);
	return parsed.data;
}
var patchResumeInputSchema = zod_default.object({ operations: zod_default.array(jsonPatchOperationSchema).min(1).describe("Array of JSON Patch (RFC 6902) operations to apply to the resume") });
var patchResumeDescription = `Apply JSON Patch (RFC 6902) operations to modify the user's resume data.
Use this tool whenever the user asks to change, add, or remove content from their resume.
Always generate the minimal set of operations needed. Prefer "replace" for updates, "add" for new content, "remove" for deletions.
Use the special "-" index to append to arrays (e.g. "/sections/experience/items/-").`;
function executePatchResume(resumeData, operations) {
	applyResumePatches(resumeData, operations);
	return {
		success: true,
		appliedOperations: operations
	};
}
/**
* DOMPurify configuration for sanitizing rich text content.
* This configuration allows safe HTML tags used in the rich text editor
* while stripping all potentially dangerous content like scripts and event handlers.
*/
var RICH_TEXT_CONFIG = {
	ALLOWED_TAGS: [
		"p",
		"br",
		"hr",
		"span",
		"div",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"strong",
		"b",
		"em",
		"i",
		"u",
		"s",
		"strike",
		"mark",
		"code",
		"pre",
		"ul",
		"ol",
		"li",
		"table",
		"thead",
		"tbody",
		"tfoot",
		"tr",
		"th",
		"td",
		"colgroup",
		"col",
		"a",
		"blockquote"
	],
	ALLOWED_ATTR: [
		"class",
		"style",
		"href",
		"target",
		"rel",
		"colspan",
		"rowspan",
		"data-type",
		"data-label"
	],
	ALLOWED_URI_REGEXP: /^(?:(?:https?):\/\/|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,
	ADD_ATTR: ["target", "rel"],
	ALLOW_DATA_ATTR: false
};
/**
* Sanitizes HTML content to prevent XSS attacks.
* Uses DOMPurify with a strict configuration that only allows
* safe HTML tags and attributes used by the rich text editor.
*
* @param html - The HTML string to sanitize
* @returns Sanitized HTML string safe for rendering
*/
function sanitizeHtml(html) {
	if (!html) return "";
	return purify.sanitize(html, {
		...RICH_TEXT_CONFIG,
		RETURN_TRUSTED_TYPE: false
	});
}
/**
* Sanitizes CSS content to prevent CSS injection attacks.
* Only allows CSS rules, stripping any JavaScript or HTML that might be embedded.
*
* Note: This is a basic sanitization. For more robust CSS sanitization,
* consider using a dedicated CSS parser/sanitizer library.
*/
function sanitizeCss(css) {
	if (!css) return "";
	let sanitized = css.replace(/javascript\s*:/gi, "").replace(/expression\s*\(/gi, "").replace(/url\s*\(\s*["']?\s*(?:javascript|data):/gi, "url(").replace(/behavior\s*:/gi, "").replace(/-moz-binding\s*:/gi, "").replace(/@import\s+(?:url\s*\()?["']?\s*(?:javascript|data):/gi, "");
	sanitized = purify.sanitize(sanitized, {
		ALLOWED_TAGS: [],
		ALLOWED_ATTR: [],
		KEEP_CONTENT: true,
		RETURN_TRUSTED_TYPE: false
	});
	return sanitized;
}
/**
* Checks if the given value is a plain JSON object (not null, not array, not other types).
*
* @param value - The value to check.
* @returns True if the value is a plain object, false otherwise.
*/
function isObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
var aiExtractionTemplate = {
	...defaultResumeData,
	basics: {
		...defaultResumeData.basics,
		customFields: [{
			id: "",
			icon: "",
			text: "",
			link: ""
		}]
	},
	sections: {
		...defaultResumeData.sections,
		profiles: {
			...defaultResumeData.sections.profiles,
			items: [{
				id: "",
				hidden: false,
				icon: "",
				network: "",
				username: "",
				website: {
					url: "",
					label: ""
				}
			}]
		},
		experience: {
			...defaultResumeData.sections.experience,
			items: [{
				id: "",
				hidden: false,
				company: "",
				position: "",
				location: "",
				period: "",
				website: {
					url: "",
					label: ""
				},
				description: ""
			}]
		},
		education: {
			...defaultResumeData.sections.education,
			items: [{
				id: "",
				hidden: false,
				school: "",
				degree: "",
				area: "",
				grade: "",
				location: "",
				period: "",
				website: {
					url: "",
					label: ""
				},
				description: ""
			}]
		},
		projects: {
			...defaultResumeData.sections.projects,
			items: [{
				id: "",
				hidden: false,
				name: "",
				period: "",
				website: {
					url: "",
					label: ""
				},
				description: ""
			}]
		},
		skills: {
			...defaultResumeData.sections.skills,
			items: [{
				id: "",
				hidden: false,
				icon: "",
				name: "",
				proficiency: "",
				level: 0,
				keywords: []
			}]
		},
		languages: {
			...defaultResumeData.sections.languages,
			items: [{
				id: "",
				hidden: false,
				language: "",
				fluency: "",
				level: 0
			}]
		},
		interests: {
			...defaultResumeData.sections.interests,
			items: [{
				id: "",
				hidden: false,
				icon: "",
				name: "",
				keywords: []
			}]
		},
		awards: {
			...defaultResumeData.sections.awards,
			items: [{
				id: "",
				hidden: false,
				title: "",
				awarder: "",
				date: "",
				website: {
					url: "",
					label: ""
				},
				description: ""
			}]
		},
		certifications: {
			...defaultResumeData.sections.certifications,
			items: [{
				id: "",
				hidden: false,
				title: "",
				issuer: "",
				date: "",
				website: {
					url: "",
					label: ""
				},
				description: ""
			}]
		},
		publications: {
			...defaultResumeData.sections.publications,
			items: [{
				id: "",
				hidden: false,
				title: "",
				publisher: "",
				date: "",
				website: {
					url: "",
					label: ""
				},
				description: ""
			}]
		},
		volunteer: {
			...defaultResumeData.sections.volunteer,
			items: [{
				id: "",
				hidden: false,
				organization: "",
				location: "",
				period: "",
				website: {
					url: "",
					label: ""
				},
				description: ""
			}]
		},
		references: {
			...defaultResumeData.sections.references,
			items: [{
				id: "",
				hidden: false,
				name: "",
				position: "",
				website: {
					url: "",
					label: ""
				},
				phone: "",
				description: ""
			}]
		}
	}
};
/**
* Merges two objects recursively, filling in missing properties in the target object
* with values from the source object, but does not overwrite existing properties in the target
* unless the source provides a defined, non-null value.
*
* Both target and source must be plain objects (Record<string, unknown>).
* This function does not mutate either argument; returns a new object.
*
* @param target - The object to merge into (existing values take precedence)
* @param source - The object providing default values
* @returns The merged object
*/
function mergeDefaults(target, source) {
	if (!isObject(target) || !isObject(source)) return source !== void 0 && source !== null ? source : target;
	const output = { ...target };
	for (const key of Object.keys(source)) {
		const sourceValue = source[key];
		if (sourceValue === void 0 || sourceValue === null) continue;
		const targetValue = target[key];
		if (isObject(sourceValue) && isObject(targetValue)) output[key] = mergeDefaults(targetValue, sourceValue);
		else if (isObject(sourceValue) && (targetValue === void 0 || targetValue === null)) output[key] = sourceValue;
		else if (!isObject(sourceValue)) output[key] = sourceValue;
		else if (targetValue === void 0) output[key] = sourceValue;
	}
	return output;
}
function logAndRethrow(context, error) {
	if (error instanceof Error) {
		console.error(`${context}:`, error.message);
		throw error;
	}
	console.error(`Unknown error in ${context}:`, error);
	throw new Error(`An unknown error occurred during ${context}.`);
}
function parseAndValidateResumeJson(resultText) {
	let jsonString = resultText;
	const firstCurly = jsonString.indexOf("{");
	const firstSquare = jsonString.indexOf("[");
	const lastCurly = jsonString.lastIndexOf("}");
	const lastSquare = jsonString.lastIndexOf("]");
	let firstIndex = -1;
	if (firstCurly !== -1 && firstSquare !== -1) firstIndex = Math.min(firstCurly, firstSquare);
	else firstIndex = Math.max(firstCurly, firstSquare);
	const lastIndex = Math.max(lastCurly, lastSquare);
	if (firstIndex !== -1 && lastIndex !== -1 && lastIndex >= firstIndex) jsonString = jsonString.substring(firstIndex, lastIndex + 1);
	try {
		const repairedJson = jsonrepair(jsonString);
		const normalizedData = normalizeResumeDataForSchema(mergeDefaults(defaultResumeData, JSON.parse(repairedJson)));
		return resumeDataSchema.parse({
			...normalizedData,
			customSections: [],
			picture: defaultResumeData.picture,
			metadata: defaultResumeData.metadata
		});
	} catch (error) {
		if (error instanceof ZodError) {
			console.error("Zod Validation Errors:", JSON.stringify(flattenError(error), null, 2));
			throw error;
		}
		console.error("Unknown error:", error);
		throw new Error("An unknown error occurred while validating the merged resume data.");
	}
}
var sectionRequiredFieldMap = {
	profiles: "network",
	experience: "company",
	education: "school",
	projects: "name",
	skills: "name",
	languages: "language",
	interests: "name",
	awards: "title",
	certifications: "title",
	publications: "title",
	volunteer: "organization",
	references: "name"
};
function normalizeResumeDataForSchema(data) {
	if (!isObject(data)) return data;
	if (!isObject(data.sections)) return data;
	const normalizedSections = { ...data.sections };
	for (const sectionKey of Object.keys(sectionRequiredFieldMap)) {
		const section = normalizedSections[sectionKey];
		if (!isObject(section)) continue;
		if (!Array.isArray(section.items)) continue;
		const itemTemplate = aiExtractionTemplate.sections[sectionKey].items[0];
		const requiredField = sectionRequiredFieldMap[sectionKey];
		const normalizedItems = section.items.filter((item) => isObject(item)).map((item) => mergeDefaults(itemTemplate, item)).filter((item) => {
			const requiredValue = item[requiredField];
			if (typeof requiredValue !== "string") return false;
			return requiredValue.trim().length > 0;
		}).map((item) => {
			const normalizedItem = { ...item };
			if (typeof normalizedItem.id !== "string" || normalizedItem.id.trim().length === 0) normalizedItem.id = crypto.randomUUID();
			if (typeof normalizedItem.hidden !== "boolean") normalizedItem.hidden = false;
			return normalizedItem;
		});
		normalizedSections[sectionKey] = {
			...section,
			items: normalizedItems
		};
	}
	return {
		...data,
		sections: normalizedSections
	};
}
var aiProviderSchema = zod_default.enum([
	"ollama",
	"openai",
	"gemini",
	"anthropic",
	"vercel-ai-gateway"
]);
var MAX_AI_FILE_BASE64_CHARS = Math.ceil(10 * 1024 * 1024 * 4 / 3) + 4;
function getModel(input) {
	const { provider, model, apiKey } = input;
	const baseURL = input.baseURL || void 0;
	return M(provider).with("openai", () => createOpenAI({
		apiKey,
		baseURL
	}).chat(model)).with("ollama", () => createOllama({
		apiKey,
		baseURL
	}).languageModel(model)).with("anthropic", () => createAnthropic({
		apiKey,
		baseURL
	}).languageModel(model)).with("vercel-ai-gateway", () => createGatewayProvider({
		apiKey,
		baseURL
	}).languageModel(model)).with("gemini", () => createGoogleGenerativeAI({
		apiKey,
		baseURL
	}).languageModel(model)).exhaustive();
}
var aiCredentialsSchema = zod_default.object({
	provider: aiProviderSchema,
	model: zod_default.string(),
	apiKey: zod_default.string(),
	baseURL: zod_default.string()
});
var fileInputSchema = zod_default.object({
	name: zod_default.string(),
	data: zod_default.string().max(MAX_AI_FILE_BASE64_CHARS, "File is too large. Maximum size is 10MB.")
});
async function testConnection(input) {
	const RESPONSE_OK = "1";
	return (await generateText({
		model: getModel(input),
		output: output_exports.choice({ options: [RESPONSE_OK] }),
		messages: [{
			role: "user",
			content: `Respond with "${RESPONSE_OK}"`
		}]
	})).output === RESPONSE_OK;
}
function buildResumeParsingMessages({ systemPrompt, userPrompt, file, mediaType }) {
	return [{
		role: "system",
		content: systemPrompt + "\n\nIMPORTANT: You must return ONLY raw valid JSON. Do not return markdown, do not return explanations. Just the JSON object. Use the following JSON as a template and fill in the extracted values. For arrays, you MUST use the exact key names shown in the template (e.g. use 'description' instead of 'summary', 'website' instead of 'url'):\n\n" + JSON.stringify(aiExtractionTemplate, null, 2)
	}, {
		role: "user",
		content: [{
			type: "text",
			text: userPrompt
		}, {
			type: "file",
			data: file.data,
			mediaType,
			filename: file.name
		}]
	}];
}
async function parsePdf(input) {
	return parseAndValidateResumeJson((await generateText({
		model: getModel(input),
		messages: buildResumeParsingMessages({
			systemPrompt: pdf_parser_system_default,
			userPrompt: pdf_parser_user_default,
			file: input.file,
			mediaType: "application/pdf"
		})
	}).catch((error) => logAndRethrow("Failed to generate the text with the model", error))).text);
}
async function parseDocx(input) {
	return parseAndValidateResumeJson((await generateText({
		model: getModel(input),
		messages: buildResumeParsingMessages({
			systemPrompt: docx_parser_system_default,
			userPrompt: docx_parser_user_default,
			file: input.file,
			mediaType: input.mediaType
		})
	}).catch((error) => logAndRethrow("Failed to generate the text with the model", error))).text);
}
function buildChatSystemPrompt(resumeData) {
	return chat_system_default.replace("{{RESUME_DATA}}", JSON.stringify(resumeData, null, 2));
}
async function chat(input) {
	return streamToAsyncIteratorClass(streamText({
		model: getModel(input),
		system: buildChatSystemPrompt(input.resumeData),
		messages: await convertToModelMessages(input.messages),
		tools: { patch_resume: tool({
			description: patchResumeDescription,
			inputSchema: patchResumeInputSchema,
			execute: async ({ operations }) => executePatchResume(input.resumeData, operations)
		}) },
		stopWhen: stepCountIs(3)
	}).toUIMessageStream());
}
var aiService = {
	testConnection,
	parsePdf,
	parseDocx,
	chat
};
var aiRouter = {
	testConnection: protectedProcedure.route({
		method: "POST",
		path: "/ai/test-connection",
		tags: ["AI"],
		operationId: "testAiConnection",
		summary: "Test AI provider connection",
		description: "Validates the connection to an AI provider by sending a simple test prompt. Requires the provider type, model name, API key, and an optional base URL. Supported providers: OpenAI, Anthropic, Google Gemini, Ollama, and Vercel AI Gateway. Requires authentication.",
		successDescription: "The AI provider connection was successful."
	}).input(zod_default.object({
		provider: aiProviderSchema,
		model: zod_default.string(),
		apiKey: zod_default.string(),
		baseURL: zod_default.string()
	})).errors({ BAD_GATEWAY: {
		message: "The AI provider returned an error or is unreachable.",
		status: 502
	} }).handler(async ({ input }) => {
		try {
			return await aiService.testConnection(input);
		} catch (error) {
			if (error instanceof AISDKError || error instanceof OllamaError) throw new ORPCError("BAD_GATEWAY", { message: error.message });
			throw error;
		}
	}),
	parsePdf: protectedProcedure.route({
		method: "POST",
		path: "/ai/parse-pdf",
		tags: ["AI"],
		operationId: "parseResumePdf",
		summary: "Parse a PDF file into resume data",
		description: "Extracts structured resume data from a PDF file using the specified AI provider. The file should be sent as a base64-encoded string along with AI provider credentials. Returns a complete ResumeData object. Requires authentication.",
		successDescription: "The PDF was successfully parsed into structured resume data."
	}).input(zod_default.object({
		...aiCredentialsSchema.shape,
		file: fileInputSchema
	})).errors({
		BAD_GATEWAY: {
			message: "The AI provider returned an error or is unreachable.",
			status: 502
		},
		BAD_REQUEST: {
			message: "The AI returned an improperly formatted structure.",
			status: 400
		}
	}).handler(async ({ input }) => {
		try {
			return await aiService.parsePdf(input);
		} catch (error) {
			if (error instanceof AISDKError) throw new ORPCError("BAD_GATEWAY", { message: error.message });
			if (error instanceof ZodError) throw new ORPCError("BAD_REQUEST", {
				message: "Invalid resume data structure",
				cause: flattenError(error)
			});
			throw error;
		}
	}),
	parseDocx: protectedProcedure.route({
		method: "POST",
		path: "/ai/parse-docx",
		tags: ["AI"],
		operationId: "parseResumeDocx",
		summary: "Parse a DOCX file into resume data",
		description: "Extracts structured resume data from a DOCX or DOC file using the specified AI provider. The file should be sent as a base64-encoded string along with AI provider credentials and the document's media type. Returns a complete ResumeData object. Requires authentication.",
		successDescription: "The DOCX was successfully parsed into structured resume data."
	}).input(zod_default.object({
		...aiCredentialsSchema.shape,
		file: fileInputSchema,
		mediaType: zod_default.enum(["application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"])
	})).errors({
		BAD_GATEWAY: {
			message: "The AI provider returned an error or is unreachable.",
			status: 502
		},
		BAD_REQUEST: {
			message: "The AI returned an improperly formatted structure.",
			status: 400
		}
	}).handler(async ({ input }) => {
		try {
			return await aiService.parseDocx(input);
		} catch (error) {
			if (error instanceof AISDKError) throw new ORPCError("BAD_GATEWAY", { message: error.message });
			if (error instanceof ZodError) throw new ORPCError("BAD_REQUEST", {
				message: "Invalid resume data structure",
				cause: flattenError(error)
			});
			throw error;
		}
	}),
	chat: protectedProcedure.route({
		method: "POST",
		path: "/ai/chat",
		tags: ["AI"],
		operationId: "aiChat",
		summary: "Chat with AI to modify resume",
		description: "Streams a chat response from the configured AI provider. The LLM can call the patch_resume tool to generate JSON Patch operations that modify the resume. Requires authentication and AI provider credentials."
	}).input(type()).handler(async ({ input }) => {
		try {
			return await aiService.chat(input);
		} catch (error) {
			if (error instanceof AISDKError || error instanceof OllamaError) throw new ORPCError("BAD_GATEWAY", { message: error.message });
			throw error;
		}
	})
};
var CONTENT_TYPE_MAP = {
	".webp": "image/webp",
	".jpg": "image/jpeg",
	".jpeg": "image/jpeg",
	".png": "image/png",
	".gif": "image/gif",
	".svg": "image/svg+xml",
	".pdf": "application/pdf"
};
var DEFAULT_CONTENT_TYPE = "application/octet-stream";
var IMAGE_MIME_TYPES = [
	"image/gif",
	"image/png",
	"image/jpeg",
	"image/webp"
];
function buildPictureKey(userId) {
	return `uploads/${userId}/pictures/${Date.now()}.webp`;
}
function buildScreenshotKey(userId, resumeId) {
	return `uploads/${userId}/screenshots/${resumeId}/${Date.now()}.webp`;
}
function buildPdfKey(userId, resumeId) {
	return `uploads/${userId}/pdfs/${resumeId}/${Date.now()}.pdf`;
}
function buildPublicUrl(path) {
	return new URL(path, env$1.APP_URL).toString();
}
function inferContentType(filename) {
	return CONTENT_TYPE_MAP[extname(filename).toLowerCase()] ?? DEFAULT_CONTENT_TYPE;
}
function isImageFile(mimeType) {
	return IMAGE_MIME_TYPES.includes(mimeType);
}
async function processImageForUpload(file) {
	const fileBuffer = await file.arrayBuffer();
	if (env$1.FLAG_DISABLE_IMAGE_PROCESSING) return {
		data: new Uint8Array(fileBuffer),
		contentType: file.type
	};
	const sharp = (await import("sharp")).default;
	const processedBuffer = await sharp(fileBuffer).resize(800, 800, {
		fit: "inside",
		withoutEnlargement: true
	}).webp({ preset: "picture" }).toBuffer();
	return {
		data: new Uint8Array(processedBuffer),
		contentType: "image/webp"
	};
}
var LocalStorageService = class {
	rootDirectory;
	constructor() {
		this.rootDirectory = join(process.cwd(), "data");
	}
	async list(prefix) {
		const fullPath = this.resolvePath(prefix);
		try {
			return (await fs.readdir(fullPath, { recursive: true })).map((file) => join(prefix, file));
		} catch (error) {
			if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") return [];
			throw error;
		}
	}
	async write({ key, data }) {
		const fullPath = this.resolvePath(key);
		await fs.mkdir(dirname(fullPath), { recursive: true });
		await fs.writeFile(fullPath, data);
	}
	async read(key) {
		const fullPath = this.resolvePath(key);
		try {
			const [arrayBuffer, stats] = await Promise.all([fs.readFile(fullPath), fs.stat(fullPath)]);
			return {
				data: arrayBuffer,
				size: stats.size,
				etag: `"${stats.size}-${stats.mtime.getTime()}"`,
				lastModified: stats.mtime,
				contentType: inferContentType(key)
			};
		} catch (error) {
			if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") return null;
			throw error;
		}
	}
	async delete(key) {
		const fullPath = this.resolvePath(key);
		try {
			if ((await fs.stat(fullPath)).isDirectory()) {
				await fs.rm(fullPath, { recursive: true });
				return true;
			} else {
				await fs.unlink(fullPath);
				return true;
			}
		} catch {
			return false;
		}
	}
	async healthcheck() {
		try {
			await fs.mkdir(this.rootDirectory, { recursive: true });
			await fs.access(this.rootDirectory, fs.constants.R_OK | fs.constants.W_OK);
			return {
				type: "local",
				status: "healthy",
				message: "Local filesystem storage is accessible and has read/write permission."
			};
		} catch (error) {
			return {
				type: "local",
				status: "unhealthy",
				message: "Local filesystem storage is not accessible or lacks sufficient permissions.",
				error: error instanceof Error ? error.message : "Unknown error"
			};
		}
	}
	resolvePath(key) {
		const segments = key.replace(/^\/*/, "").split(/[/\\]+/).filter((segment) => segment.length > 0 && segment !== "." && segment !== "..");
		if (segments.length === 0) throw new Error("Invalid storage key");
		return join(this.rootDirectory, ...segments);
	}
};
var S3StorageService = class {
	bucket;
	client;
	constructor() {
		if (!env$1.S3_ACCESS_KEY_ID || !env$1.S3_SECRET_ACCESS_KEY || !env$1.S3_BUCKET) throw new Error("S3 credentials are not set");
		this.bucket = env$1.S3_BUCKET;
		this.client = new S3Client({
			region: env$1.S3_REGION,
			endpoint: env$1.S3_ENDPOINT,
			forcePathStyle: env$1.S3_FORCE_PATH_STYLE,
			credentials: {
				accessKeyId: env$1.S3_ACCESS_KEY_ID,
				secretAccessKey: env$1.S3_SECRET_ACCESS_KEY
			}
		});
	}
	async list(prefix) {
		const command = new ListObjectsV2Command({
			Bucket: this.bucket,
			Prefix: prefix
		});
		const response = await this.client.send(command);
		if (!response.Contents) return [];
		return response.Contents.map((object) => object.Key ?? "");
	}
	async write({ key, data, contentType }) {
		const command = new PutObjectCommand({
			Bucket: this.bucket,
			Key: key,
			Body: data,
			ACL: "public-read",
			ContentType: contentType
		});
		await this.client.send(command);
	}
	async read(key) {
		try {
			const command = new GetObjectCommand({
				Bucket: this.bucket,
				Key: key
			});
			const response = await this.client.send(command);
			if (!response.Body) return null;
			return {
				data: await response.Body.transformToByteArray(),
				size: response.ContentLength ?? 0,
				etag: response.ETag,
				lastModified: response.LastModified,
				contentType: response.ContentType ?? inferContentType(key)
			};
		} catch {
			return null;
		}
	}
	async delete(keyOrPrefix) {
		const keys = await this.list(keyOrPrefix);
		if (keys.length === 0) return false;
		const deleteCommands = keys.map((k) => new DeleteObjectCommand({
			Bucket: this.bucket,
			Key: k
		}));
		return (await Promise.allSettled(deleteCommands.map((c) => this.client.send(c)))).some((r) => r.status === "fulfilled");
	}
	async healthcheck() {
		try {
			const putCommand = new PutObjectCommand({
				Bucket: this.bucket,
				Key: "healthcheck",
				Body: "OK"
			});
			await this.client.send(putCommand);
			const deleteCommand = new DeleteObjectCommand({
				Bucket: this.bucket,
				Key: "healthcheck"
			});
			await this.client.send(deleteCommand);
			return {
				type: "s3",
				status: "healthy",
				message: "S3 storage is accessible and credentials are valid."
			};
		} catch (error) {
			return {
				type: "s3",
				status: "unhealthy",
				message: "Failed to connect to S3 storage or invalid credentials.",
				error: error instanceof Error ? error.message : "Unknown error"
			};
		}
	}
};
function createStorageService() {
	if (env$1.S3_ACCESS_KEY_ID && env$1.S3_SECRET_ACCESS_KEY && env$1.S3_BUCKET) return new S3StorageService();
	return new LocalStorageService();
}
var cachedService = null;
function getStorageService() {
	if (cachedService) return cachedService;
	cachedService = createStorageService();
	return cachedService;
}
async function uploadFile(input) {
	const storageService = getStorageService();
	let key;
	switch (input.type) {
		case "picture":
			key = buildPictureKey(input.userId);
			break;
		case "screenshot":
			if (!input.resumeId) throw new Error("resumeId is required for screenshot uploads");
			key = buildScreenshotKey(input.userId, input.resumeId);
			break;
		case "pdf":
			if (!input.resumeId) throw new Error("resumeId is required for pdf uploads");
			key = buildPdfKey(input.userId, input.resumeId);
			break;
	}
	await storageService.write({
		key,
		data: input.data,
		contentType: input.contentType
	});
	return {
		key,
		url: buildPublicUrl(key)
	};
}
var authService = {
	providers: { list: () => {
		const providers = { credential: "Password" };
		if (env$1.GOOGLE_CLIENT_ID && env$1.GOOGLE_CLIENT_SECRET) providers.google = "Google";
		if (env$1.GITHUB_CLIENT_ID && env$1.GITHUB_CLIENT_SECRET) providers.github = "GitHub";
		if (env$1.OAUTH_CLIENT_ID && env$1.OAUTH_CLIENT_SECRET) providers.custom = env$1.OAUTH_PROVIDER_NAME ?? "Custom OAuth";
		return providers;
	} },
	deleteAccount: async (input) => {
		if (!input.userId || input.userId.length === 0) return;
		const storageService = getStorageService();
		try {
			await storageService.delete(`uploads/${input.userId}`);
		} catch {}
		try {
			await db.delete(user).where(eq(user.id, input.userId));
		} catch (err) {
			logger$1.error("Failed to delete user record", {
				userId: input.userId,
				error: err
			});
			throw new ORPCError("INTERNAL_SERVER_ERROR");
		}
	}
};
var authRouter = {
	providers: { list: publicProcedure.route({
		method: "GET",
		path: "/auth/providers",
		tags: ["Authentication"],
		operationId: "listAuthProviders",
		summary: "List authentication providers",
		description: "Returns a list of all authentication providers enabled on this Reactive Resume instance, along with their display names. Possible providers include password-based credentials, Google, GitHub, and custom OAuth. No authentication required.",
		successDescription: "A map of enabled authentication provider identifiers to their display names."
	}).handler(() => {
		return authService.providers.list();
	}) },
	deleteAccount: protectedProcedure.route({
		method: "DELETE",
		path: "/auth/account",
		tags: ["Authentication"],
		operationId: "deleteAccount",
		summary: "Delete user account",
		description: "Permanently deletes the authenticated user's account, including all resumes, uploaded files (profile pictures, screenshots, PDFs), and associated data. This action is irreversible. Requires authentication.",
		successDescription: "The user account and all associated data have been successfully deleted."
	}).handler(async ({ context }) => {
		return await authService.deleteAccount({ userId: context.user.id });
	})
};
var flagsService = { getFlags: () => ({
	disableSignups: env$1.FLAG_DISABLE_SIGNUPS,
	disableEmailAuth: env$1.FLAG_DISABLE_EMAIL_AUTH
}) };
var flagsRouter = { get: publicProcedure.route({
	method: "GET",
	path: "/flags",
	tags: ["Feature Flags"],
	operationId: "getFeatureFlags",
	summary: "Get feature flags",
	description: "Returns the current feature flags for this Reactive Resume instance. Feature flags control instance-wide settings such as whether new user signups or email-based authentication are disabled. No authentication required.",
	successDescription: "The current feature flags for this instance."
}).output(zod_default.object({
	disableSignups: zod_default.boolean().describe("Whether new user signups are disabled on this instance."),
	disableEmailAuth: zod_default.boolean().describe("Whether email-based authentication is disabled on this instance.")
})).handler(() => flagsService.getFlags()) };
var pageDimensionsAsPixels = {
	a4: {
		width: 794,
		height: 1123
	},
	letter: {
		width: 816,
		height: 1056
	},
	"free-form": {
		width: 794,
		height: 1123
	}
};
var pageDimensionsAsMillimeters = {
	a4: {
		width: "210mm",
		height: "297mm"
	},
	letter: {
		width: "216mm",
		height: "279mm"
	},
	"free-form": {
		width: "210mm",
		height: "297mm"
	}
};
var PRINTER_TOKEN_TTL_MS = 300 * 1e3;
/**
* Generates a time-limited token for printer route access.
* Token format: base64(resumeId:timestamp).signature
*/
var generatePrinterToken = (resumeId) => {
	const payload = `${resumeId}:${Date.now()}`;
	const payloadBase64 = Buffer.from(payload).toString("base64url");
	return `${payloadBase64}.${createHash("sha256").update(`${payloadBase64}.${env$1.AUTH_SECRET}`).digest("hex")}`;
};
/**
* Verifies a printer token and returns the resume ID if valid.
* Throws an error if the token is invalid or expired.
*/
var verifyPrinterToken = (token) => {
	const parts = token.split(".");
	if (parts.length !== 2) throw new Error("Invalid token format");
	const [payloadBase64, signature] = parts;
	const expectedSignature = createHash("sha256").update(`${payloadBase64}.${env$1.AUTH_SECRET}`).digest("hex");
	const signatureBuffer = Buffer.from(signature);
	const expectedBuffer = Buffer.from(expectedSignature);
	if (signatureBuffer.length !== expectedBuffer.length || !timingSafeEqual(signatureBuffer, expectedBuffer)) throw new Error("Invalid token signature");
	const [resumeId, timestampStr] = Buffer.from(payloadBase64, "base64url").toString("utf-8").split(":");
	if (!resumeId || !timestampStr) throw new Error("Invalid token payload");
	const timestamp = Number.parseInt(timestampStr, 10);
	if (Number.isNaN(timestamp)) throw new Error("Invalid timestamp");
	const age = Date.now() - timestamp;
	if (age < 0 || age > PRINTER_TOKEN_TTL_MS) throw new Error("Token expired");
	return resumeId;
};
var SCREENSHOT_TTL = 1e3 * 60 * 60 * 6;
var browserInstance = null;
async function normalizePrinterEndpoint(printerEndpoint) {
	const endpoint = new URL(printerEndpoint);
	if (!isIP(endpoint.hostname) && !endpoint.protocol.startsWith("ws")) {
		const { address } = await dns.lookup(endpoint.hostname);
		endpoint.hostname = address;
	}
	return endpoint;
}
async function getBrowser() {
	if (browserInstance?.connected) return browserInstance;
	const args = ["--disable-dev-shm-usage", "--disable-features=LocalNetworkAccessChecks,site-per-process,FedCm"];
	const endpoint = await normalizePrinterEndpoint(env$1.PRINTER_ENDPOINT);
	const isWebSocket = endpoint.protocol.startsWith("ws");
	const connectOptions = { acceptInsecureCerts: true };
	endpoint.searchParams.append("launch", JSON.stringify({ args }));
	if (isWebSocket) connectOptions.browserWSEndpoint = endpoint.toString();
	else connectOptions.browserURL = endpoint.toString();
	browserInstance = await puppeteer.connect(connectOptions);
	return browserInstance;
}
async function closeBrowser() {
	if (browserInstance?.connected) {
		await browserInstance.close();
		browserInstance = null;
	}
}
process.on("SIGINT", async () => {
	await closeBrowser();
	process.exit(0);
});
process.on("SIGTERM", async () => {
	await closeBrowser();
	process.exit(0);
});
var printerService = {
	healthcheck: async () => {
		const headers = new Headers({ Accept: "application/json" });
		const endpoint = await normalizePrinterEndpoint(env$1.PRINTER_ENDPOINT);
		endpoint.protocol = endpoint.protocol.replace("ws", "http");
		endpoint.pathname = "/json/version";
		return await (await fetch(endpoint, { headers })).json();
	},
	printResumeAsPDF: async (input) => {
		const { id, data, userId } = input;
		const storageService = getStorageService();
		const pdfPrefix = `uploads/${userId}/pdfs/${id}`;
		await storageService.delete(pdfPrefix);
		const baseUrl = env$1.PRINTER_APP_URL ?? env$1.APP_URL;
		const domain = new URL(baseUrl).hostname;
		const format = data.metadata.page.format;
		const locale = data.metadata.page.locale;
		const template = data.metadata.template;
		const url = `${baseUrl}/printer/${id}?token=${generatePrinterToken(id)}`;
		let pagePaddingX = 0;
		let pagePaddingY = 0;
		if (printMarginTemplates.includes(template)) {
			pagePaddingX = data.metadata.page.marginX;
			pagePaddingY = data.metadata.page.marginY;
		}
		let browser = null;
		let page = null;
		try {
			browser = await getBrowser();
			await browser.setCookie({
				name: "locale",
				value: locale,
				domain
			});
			page = await browser.newPage();
			await page.emulateMediaType("print");
			await page.setViewport(pageDimensionsAsPixels[format]);
			await page.goto(url, { waitUntil: "networkidle0" });
			await page.waitForFunction(() => document.body.getAttribute("data-wf-loaded") === "true", { timeout: 5e3 });
			const isFreeForm = format === "free-form";
			const contentHeight = await page.evaluate((pagePaddingX, pagePaddingY, isFreeForm, minPageHeight, backgroundColor) => {
				const root = document.documentElement;
				const body = document.body;
				const pageElements = document.querySelectorAll("[data-page-index]");
				const pageContentElements = document.querySelectorAll(".page-content");
				const container = document.querySelector(".resume-preview-container");
				root.style.backgroundColor = backgroundColor;
				body.style.backgroundColor = backgroundColor;
				root.style.margin = "0";
				body.style.margin = "0";
				root.style.padding = "0";
				body.style.padding = "0";
				for (const el of pageElements) {
					const pageWrapper = el;
					const pageSurface = pageWrapper.querySelector(".page");
					pageWrapper.style.backgroundColor = backgroundColor;
					pageWrapper.style.breakInside = "auto";
					if (pageSurface) pageSurface.style.backgroundColor = backgroundColor;
				}
				if (pagePaddingX > 0 || pagePaddingY > 0) for (const el of pageContentElements) {
					const pageContent = el;
					pageContent.style.boxSizing = "border-box";
					pageContent.style.boxDecorationBreak = "clone";
					pageContent.style.setProperty("-webkit-box-decoration-break", "clone");
					if (pagePaddingX > 0) {
						pageContent.style.paddingLeft = `${pagePaddingX}pt`;
						pageContent.style.paddingRight = `${pagePaddingX}pt`;
					}
					if (pagePaddingY > 0) {
						pageContent.style.paddingTop = `${pagePaddingY}pt`;
						pageContent.style.paddingBottom = `${pagePaddingY}pt`;
					}
				}
				if (isFreeForm) {
					const numberOfPages = pageElements.length;
					for (let i = 0; i < numberOfPages - 1; i++) {
						const pageEl = pageElements[i];
						if (pagePaddingY > 0) pageEl.style.marginBottom = `${pagePaddingY}pt`;
					}
					let totalHeight = 0;
					for (const el of pageElements) {
						const pageEl = el;
						const style = getComputedStyle(pageEl);
						const marginBottom = Number.parseFloat(style.marginBottom) || 0;
						totalHeight += pageEl.offsetHeight + marginBottom;
					}
					return Math.max(totalHeight, minPageHeight);
				}
				const newHeight = `${minPageHeight}px`;
				if (container) container.style.setProperty("--page-height", newHeight);
				root.style.setProperty("--page-height", newHeight);
				for (const el of pageElements) {
					const element = el;
					if (Number.parseInt(element.getAttribute("data-page-index") ?? "0", 10) > 0) {
						element.style.breakBefore = "page";
						element.style.pageBreakBefore = "always";
					}
					element.style.breakInside = "auto";
				}
				return null;
			}, pagePaddingX, pagePaddingY, isFreeForm, pageDimensionsAsPixels[format].height, data.metadata.design.colors.background);
			const pdfHeight = isFreeForm && contentHeight ? contentHeight : pageDimensionsAsPixels[format].height;
			const pdfBuffer = await page.pdf({
				width: `${pageDimensionsAsPixels[format].width}px`,
				height: `${pdfHeight}px`,
				tagged: true,
				waitForFonts: true,
				printBackground: true,
				margin: {
					bottom: 0,
					top: 0,
					right: 0,
					left: 0
				}
			});
			return (await uploadFile({
				userId,
				resumeId: id,
				data: new Uint8Array(pdfBuffer),
				contentType: "application/pdf",
				type: "pdf"
			})).url;
		} catch (error) {
			throw new ORPCError("INTERNAL_SERVER_ERROR", error);
		} finally {
			if (page) await page.close().catch(() => null);
		}
	},
	getResumeScreenshot: async (input) => {
		const { id, userId, data, updatedAt } = input;
		const storageService = getStorageService();
		const screenshotPrefix = `uploads/${userId}/screenshots/${id}`;
		const existingScreenshots = await storageService.list(screenshotPrefix);
		const now = Date.now();
		const resumeUpdatedAt = updatedAt.getTime();
		if (existingScreenshots.length > 0) {
			const sortedFiles = existingScreenshots.map((path) => {
				const match = path.split("/").pop()?.match(/^(\d+)\.webp$/);
				return match ? {
					path,
					timestamp: Number(match[1])
				} : null;
			}).filter((item) => item !== null).sort((a, b) => b.timestamp - a.timestamp);
			if (sortedFiles.length > 0) {
				const latest = sortedFiles[0];
				if (now - latest.timestamp < SCREENSHOT_TTL) return new URL(latest.path, env$1.APP_URL).toString();
				if (resumeUpdatedAt <= latest.timestamp) return new URL(latest.path, env$1.APP_URL).toString();
				await Promise.all(sortedFiles.map((file) => storageService.delete(file.path)));
			}
		}
		const baseUrl = env$1.PRINTER_APP_URL ?? env$1.APP_URL;
		const domain = new URL(baseUrl).hostname;
		const locale = data.metadata.page.locale;
		const url = `${baseUrl}/printer/${id}?token=${generatePrinterToken(id)}`;
		let browser = null;
		let page = null;
		try {
			browser = await getBrowser();
			await browser.setCookie({
				name: "locale",
				value: locale,
				domain
			});
			page = await browser.newPage();
			await page.setViewport(pageDimensionsAsPixels.a4);
			await page.goto(url, { waitUntil: "networkidle0" });
			await page.waitForFunction(() => document.body.getAttribute("data-wf-loaded") === "true", { timeout: 5e3 });
			const screenshotBuffer = await page.screenshot({
				type: "webp",
				quality: 80
			});
			return (await uploadFile({
				userId,
				resumeId: id,
				data: new Uint8Array(screenshotBuffer),
				contentType: "image/webp",
				type: "screenshot"
			})).url;
		} catch (error) {
			throw new ORPCError("INTERNAL_SERVER_ERROR", error);
		} finally {
			if (page) await page.close().catch(() => null);
		}
	}
};
var RESUME_ACCESS_COOKIE_PREFIX = "resume_access";
var RESUME_ACCESS_TTL_SECONDS = 600;
var getResumeAccessCookieName = (resumeId) => `${RESUME_ACCESS_COOKIE_PREFIX}_${resumeId}`;
var signResumeAccessToken = (resumeId, passwordHash) => createHash("sha256").update(`${resumeId}:${passwordHash}`).digest("hex");
var safeEquals = (value, expected) => {
	const valueBuffer = Buffer.from(value);
	const expectedBuffer = Buffer.from(expected);
	if (valueBuffer.length !== expectedBuffer.length) return false;
	return timingSafeEqual(valueBuffer, expectedBuffer);
};
var hasResumeAccess = (resumeId, passwordHash) => {
	if (!passwordHash) return false;
	const cookieValue = getCookie(getResumeAccessCookieName(resumeId));
	if (!cookieValue) return false;
	return safeEquals(cookieValue, signResumeAccessToken(resumeId, passwordHash));
};
var grantResumeAccess = (resumeId, passwordHash) => setCookie$1(getResumeAccessCookieName(resumeId), signResumeAccessToken(resumeId, passwordHash), {
	path: "/",
	httpOnly: true,
	sameSite: "lax",
	maxAge: RESUME_ACCESS_TTL_SECONDS,
	secure: env$1.APP_URL.startsWith("https")
});
var resumeService = {
	tags: { list: async (input) => {
		const result = await db.select({ tags: resume.tags }).from(resume).where(eq(resume.userId, input.userId));
		const uniqueTags = new Set(result.flatMap((tag) => tag.tags));
		return Array.from(uniqueTags).sort((a, b) => a.localeCompare(b));
	} },
	statistics: {
		getById: async (input) => {
			const [statistics] = await db.select({
				isPublic: resume.isPublic,
				views: resumeStatistics.views,
				downloads: resumeStatistics.downloads,
				lastViewedAt: resumeStatistics.lastViewedAt,
				lastDownloadedAt: resumeStatistics.lastDownloadedAt
			}).from(resumeStatistics).rightJoin(resume, eq(resumeStatistics.resumeId, resume.id)).where(and(eq(resume.id, input.id), eq(resume.userId, input.userId)));
			return {
				isPublic: statistics.isPublic,
				views: statistics.views ?? 0,
				downloads: statistics.downloads ?? 0,
				lastViewedAt: statistics.lastViewedAt,
				lastDownloadedAt: statistics.lastDownloadedAt
			};
		},
		increment: async (input) => {
			const views = input.views ? 1 : 0;
			const downloads = input.downloads ? 1 : 0;
			const lastViewedAt = input.views ? sql`now()` : void 0;
			const lastDownloadedAt = input.downloads ? sql`now()` : void 0;
			await db.insert(resumeStatistics).values({
				resumeId: input.id,
				views,
				downloads,
				lastViewedAt,
				lastDownloadedAt
			}).onConflictDoUpdate({
				target: [resumeStatistics.resumeId],
				set: {
					views: sql`${resumeStatistics.views} + ${views}`,
					downloads: sql`${resumeStatistics.downloads} + ${downloads}`,
					lastViewedAt,
					lastDownloadedAt
				}
			});
		}
	},
	list: async (input) => {
		return await db.select({
			id: resume.id,
			name: resume.name,
			slug: resume.slug,
			tags: resume.tags,
			isPublic: resume.isPublic,
			isLocked: resume.isLocked,
			createdAt: resume.createdAt,
			updatedAt: resume.updatedAt
		}).from(resume).where(and(eq(resume.userId, input.userId), M(input.tags.length).with(0, () => void 0).otherwise(() => arrayContains(resume.tags, input.tags)))).orderBy(M(input.sort).with("lastUpdatedAt", () => desc(resume.updatedAt)).with("createdAt", () => asc(resume.createdAt)).with("name", () => asc(resume.name)).exhaustive());
	},
	getById: async (input) => {
		const [resume$4] = await db.select({
			id: resume.id,
			name: resume.name,
			slug: resume.slug,
			tags: resume.tags,
			data: resume.data,
			isPublic: resume.isPublic,
			isLocked: resume.isLocked,
			hasPassword: sql`${resume.password} IS NOT NULL`
		}).from(resume).where(and(eq(resume.id, input.id), eq(resume.userId, input.userId)));
		if (!resume$4) throw new ORPCError("NOT_FOUND");
		return resume$4;
	},
	getByIdForPrinter: async (input) => {
		const [resume$6] = await db.select({
			id: resume.id,
			name: resume.name,
			slug: resume.slug,
			tags: resume.tags,
			data: resume.data,
			userId: resume.userId,
			isLocked: resume.isLocked,
			updatedAt: resume.updatedAt
		}).from(resume).where(input.userId ? and(eq(resume.id, input.id), eq(resume.userId, input.userId)) : eq(resume.id, input.id));
		if (!resume$6) throw new ORPCError("NOT_FOUND");
		try {
			if (!resume$6.data.picture.url) throw new Error("Picture is not available");
			const url = resume$6.data.picture.url.replace(env$1.APP_URL, "http://localhost:3000");
			const base64 = await fetch(url).then((res) => res.arrayBuffer()).then((buffer) => Buffer.from(buffer).toString("base64"));
			resume$6.data.picture.url = `data:image/jpeg;base64,${base64}`;
		} catch {}
		return resume$6;
	},
	getBySlug: async (input) => {
		const [resume$5] = await db.select({
			id: resume.id,
			name: resume.name,
			slug: resume.slug,
			tags: resume.tags,
			data: resume.data,
			isPublic: resume.isPublic,
			isLocked: resume.isLocked,
			passwordHash: resume.password,
			hasPassword: sql`${resume.password} IS NOT NULL`
		}).from(resume).innerJoin(user, eq(resume.userId, user.id)).where(and(eq(resume.slug, input.slug), eq(user.username, input.username), input.currentUserId ? or(eq(resume.userId, input.currentUserId), eq(resume.isPublic, true)) : eq(resume.isPublic, true)));
		if (!resume$5) throw new ORPCError("NOT_FOUND");
		if (!resume$5.hasPassword) {
			await resumeService.statistics.increment({
				id: resume$5.id,
				views: true
			});
			return {
				id: resume$5.id,
				name: resume$5.name,
				slug: resume$5.slug,
				tags: resume$5.tags,
				data: resume$5.data,
				isPublic: resume$5.isPublic,
				isLocked: resume$5.isLocked,
				hasPassword: false
			};
		}
		if (hasResumeAccess(resume$5.id, resume$5.passwordHash)) {
			await resumeService.statistics.increment({
				id: resume$5.id,
				views: true
			});
			return {
				id: resume$5.id,
				name: resume$5.name,
				slug: resume$5.slug,
				tags: resume$5.tags,
				data: resume$5.data,
				isPublic: resume$5.isPublic,
				isLocked: resume$5.isLocked,
				hasPassword: true
			};
		}
		throw new ORPCError("NEED_PASSWORD", {
			status: 401,
			data: {
				username: input.username,
				slug: input.slug
			}
		});
	},
	create: async (input) => {
		const id = generateId$1();
		input.data = input.data ?? defaultResumeData;
		input.data.metadata.page.locale = input.locale;
		try {
			await db.insert(resume).values({
				id,
				name: input.name,
				slug: input.slug,
				tags: input.tags,
				userId: input.userId,
				data: input.data
			});
			return id;
		} catch (error) {
			if (get(error, "cause.constraint") === "resume_slug_user_id_unique") throw new ORPCError("RESUME_SLUG_ALREADY_EXISTS", { status: 400 });
			throw error;
		}
	},
	update: async (input) => {
		const [resume$3] = await db.select({ isLocked: resume.isLocked }).from(resume).where(and(eq(resume.id, input.id), eq(resume.userId, input.userId)));
		if (resume$3?.isLocked) throw new ORPCError("RESUME_LOCKED");
		const updateData = {
			name: input.name,
			slug: input.slug,
			tags: input.tags,
			data: input.data,
			isPublic: input.isPublic
		};
		try {
			const [resume$2] = await db.update(resume).set(updateData).where(and(eq(resume.id, input.id), eq(resume.isLocked, false), eq(resume.userId, input.userId))).returning({
				id: resume.id,
				name: resume.name,
				slug: resume.slug,
				tags: resume.tags,
				data: resume.data,
				isPublic: resume.isPublic,
				isLocked: resume.isLocked,
				hasPassword: sql`${resume.password} IS NOT NULL`
			});
			return resume$2;
		} catch (error) {
			if (get(error, "cause.constraint") === "resume_slug_user_id_unique") throw new ORPCError("RESUME_SLUG_ALREADY_EXISTS", { status: 400 });
			throw error;
		}
	},
	patch: async (input) => {
		const [existing] = await db.select({
			data: resume.data,
			isLocked: resume.isLocked
		}).from(resume).where(and(eq(resume.id, input.id), eq(resume.userId, input.userId)));
		if (!existing) throw new ORPCError("NOT_FOUND");
		if (existing.isLocked) throw new ORPCError("RESUME_LOCKED");
		let patchedData;
		try {
			patchedData = applyResumePatches(existing.data, input.operations);
		} catch (error) {
			if (error instanceof ResumePatchError) throw new ORPCError("INVALID_PATCH_OPERATIONS", {
				status: 400,
				message: error.message,
				data: {
					code: error.code,
					index: error.index,
					operation: error.operation
				}
			});
			throw new ORPCError("INVALID_PATCH_OPERATIONS", {
				status: 400,
				message: error instanceof Error ? error.message : "Failed to apply patch operations"
			});
		}
		const [resume$1] = await db.update(resume).set({ data: patchedData }).where(and(eq(resume.id, input.id), eq(resume.isLocked, false), eq(resume.userId, input.userId))).returning({
			id: resume.id,
			name: resume.name,
			slug: resume.slug,
			tags: resume.tags,
			data: resume.data,
			isPublic: resume.isPublic,
			isLocked: resume.isLocked,
			hasPassword: sql`${resume.password} IS NOT NULL`
		});
		return resume$1;
	},
	setLocked: async (input) => {
		await db.update(resume).set({ isLocked: input.isLocked }).where(and(eq(resume.id, input.id), eq(resume.userId, input.userId)));
	},
	setPassword: async (input) => {
		const hashedPassword = await hashPassword(input.password);
		await db.update(resume).set({ password: hashedPassword }).where(and(eq(resume.id, input.id), eq(resume.userId, input.userId)));
	},
	verifyPassword: async (input) => {
		const [resume$7] = await db.select({
			id: resume.id,
			password: resume.password
		}).from(resume).innerJoin(user, eq(resume.userId, user.id)).where(and(isNotNull(resume.password), eq(resume.slug, input.slug), eq(user.username, input.username)));
		if (!resume$7) throw new ORPCError("NOT_FOUND");
		const passwordHash = resume$7.password;
		if (!await verifyPassword(input.password, passwordHash)) throw new ORPCError("INVALID_PASSWORD");
		grantResumeAccess(resume$7.id, passwordHash);
		return true;
	},
	removePassword: async (input) => {
		await db.update(resume).set({ password: null }).where(and(eq(resume.id, input.id), eq(resume.userId, input.userId)));
	},
	delete: async (input) => {
		const storageService = getStorageService();
		const deleteResumePromise = db.delete(resume).where(and(eq(resume.id, input.id), eq(resume.isLocked, false), eq(resume.userId, input.userId)));
		const deleteScreenshotsPromise = storageService.delete(`uploads/${input.userId}/screenshots/${input.id}`);
		const deletePdfsPromise = storageService.delete(`uploads/${input.userId}/pdfs/${input.id}`);
		await Promise.allSettled([
			deleteResumePromise,
			deleteScreenshotsPromise,
			deletePdfsPromise
		]);
	}
};
var printerRouter = {
	printResumeAsPDF: publicProcedure.route({
		method: "GET",
		path: "/resumes/{id}/pdf",
		tags: ["Resume Export"],
		operationId: "exportResumePdf",
		summary: "Export resume as PDF",
		description: "Generates a PDF from the specified resume and uploads it to storage. Returns a URL to download the generated PDF file. If the request is made by an unauthenticated user (e.g. via a public share link), the resume's download count is incremented. Authentication is optional.",
		successDescription: "The PDF was generated successfully. Returns a URL to download the file."
	}).input(zod_default.object({ id: zod_default.string().describe("The unique identifier of the resume to export.") })).output(zod_default.object({ url: zod_default.string().describe("The URL to download the generated PDF file.") })).handler(async ({ input, context }) => {
		const { id, data, userId } = await resumeService.getByIdForPrinter({
			id: input.id,
			userId: context.user?.id
		});
		const url = await printerService.printResumeAsPDF({
			id,
			data,
			userId
		});
		if (!context.user) await resumeService.statistics.increment({
			id: input.id,
			downloads: true
		});
		return { url };
	}),
	getResumeScreenshot: protectedProcedure.route({
		method: "GET",
		path: "/resumes/{id}/screenshot",
		tags: ["Resume Export"],
		operationId: "getResumeScreenshot",
		summary: "Get resume screenshot",
		description: "Returns a URL to a screenshot image of the first page of the specified resume. Screenshots are cached for up to 6 hours and regenerated automatically when the resume is updated. Returns null if the screenshot cannot be generated. Requires authentication.",
		successDescription: "The screenshot URL, or null if the screenshot could not be generated."
	}).input(zod_default.object({ id: zod_default.string().describe("The unique identifier of the resume.") })).output(zod_default.object({ url: zod_default.string().nullable().describe("The URL to the screenshot image, or null.") })).handler(async ({ context, input }) => {
		try {
			const { id, data, userId, updatedAt } = await resumeService.getByIdForPrinter({
				id: input.id,
				userId: context.user.id
			});
			return { url: await printerService.getResumeScreenshot({
				id,
				data,
				userId,
				updatedAt
			}) };
		} catch {}
		return { url: null };
	})
};
var sampleResumeData = {
	picture: {
		hidden: false,
		url: "https://i.imgur.com/o4Jpt1p.jpeg",
		size: 100,
		rotation: 0,
		aspectRatio: 1,
		borderRadius: 0,
		borderColor: "rgba(0, 0, 0, 0.5)",
		borderWidth: 0,
		shadowColor: "rgba(0, 0, 0, 0.5)",
		shadowWidth: 0
	},
	basics: {
		name: "David Kowalski",
		headline: "Game Developer | Unity & Unreal Engine Specialist",
		email: "david.kowalski@email.com",
		phone: "+1 (555) 291-4756",
		location: "Seattle, WA",
		website: {
			url: "https://davidkowalski.games",
			label: "davidkowalski.games"
		},
		customFields: [{
			id: "019bef5a-0477-77e0-968b-5d0e2ecb34e3",
			icon: "game-controller",
			text: "itch.io/dkowalski",
			link: "https://itch.io/dkowalski"
		}]
	},
	summary: {
		title: "",
		columns: 1,
		hidden: false,
		content: "<p>Passionate game developer with 5+ years of professional experience creating engaging gameplay systems and polished player experiences across multiple platforms. Specialized in Unity and Unreal Engine with strong expertise in C#, C++, and game design principles. Proven ability to collaborate effectively with cross-functional teams including designers, artists, and QA to deliver high-quality games on time and within scope. Est anim est quis nostrud ipsum deserunt do anim Lorem mollit nostrud minim. Est anim est quis nostrud ipsum.</p>"
	},
	sections: {
		profiles: {
			title: "",
			columns: 1,
			hidden: false,
			items: [{
				id: "019bef5a-93e4-7746-ad39-3d42ddc9b4d8",
				hidden: false,
				icon: "game-controller",
				network: "Portfolio",
				username: "dkowalski",
				website: {
					url: "https://davidkowalski.games",
					label: "davidkowalski.games"
				}
			}, {
				id: "019bef5a-93e4-7746-ad39-43c470b77f4a",
				hidden: false,
				icon: "linkedin-logo",
				network: "LinkedIn",
				username: "davidkowalski",
				website: {
					url: "https://linkedin.com/in/davidkowalski",
					label: "linkedin.com/in/davidkowalski"
				}
			}]
		},
		experience: {
			title: "",
			columns: 1,
			hidden: false,
			items: [{
				id: "019bef5a-93e4-7746-ad39-44d8cec98ca4",
				hidden: false,
				company: "Cascade Studios",
				position: "Senior Game Developer",
				location: "Seattle, WA",
				period: "March 2022 - Present",
				website: {
					url: "",
					label: ""
				},
				roles: [],
				description: "<ul><li><p>Lead gameplay programmer on an unannounced AAA action-adventure title built in Unreal Engine 5 for PC and next-gen consoles</p></li><li><p>Architected and implemented core combat system including hit detection, combo mechanics, and enemy AI behavior trees serving 15+ enemy types</p></li><li><p>Developed custom editor tools in C++ that reduced level designer iteration time by 40% and improved workflow efficiency across the team</p></li><li><p>Optimized rendering pipeline and gameplay systems to maintain 60 FPS performance target on all supported platforms, achieving 95% frame rate stability</p></li><li><p>Ad nostrud enim adipisicing ea proident aliqua veniam nisi amet ea irure et mollit.</p></li></ul><p></p>"
			}]
		},
		education: {
			title: "",
			columns: 1,
			hidden: false,
			items: [{
				id: "019bef5a-93e4-7746-ad39-48455f6cef9e",
				hidden: false,
				school: "University of Washington",
				degree: "Bachelor of Science",
				area: "Computer Science",
				grade: "3.6 GPA",
				location: "Seattle, WA",
				period: "2014 - 2018",
				website: {
					url: "",
					label: ""
				},
				description: "<p>Concentration in Game Development. Relevant Coursework: Game Engine Architecture, Computer Graphics, Artificial Intelligence, Physics Simulation, 3D Mathematics, Software Engineering, Data Structures & Algorithms</p>"
			}]
		},
		projects: {
			title: "",
			columns: 1,
			hidden: false,
			items: [
				{
					id: "019bef5a-93e4-7746-ad39-4d2603fe2801",
					hidden: false,
					options: { showLinkInTitle: true },
					name: "Echoes of the Void (Indie Game)",
					period: "2023 - Present",
					website: {
						url: "https://itch.io/echoes-of-the-void",
						label: "View on itch.io"
					},
					description: "<p>Solo developer for a narrative-driven 2D platformer built in Unity. Features custom dialogue system, branching story paths, and atmospheric pixel art. Currently in development with demo released on itch.io garnering 5K+ downloads and positive community feedback. Planned Steam release Q2 2025.</p>"
				},
				{
					id: "019bef5a-93e4-7746-ad39-524195dd7eff",
					hidden: false,
					name: "Open Source: Unity Dialogue Framework",
					period: "2021 - 2023",
					website: {
						url: "https://davidkowalski.games/projects/unity-dialogue",
						label: "View Project"
					},
					description: "<p>Created and maintain an open-source dialogue system for Unity with visual node-based editor, localization support, and voice acting integration. Project has 800+ downloads and is actively used by indie developers worldwide. Includes comprehensive documentation and example projects.</p>"
				},
				{
					id: "019bef5a-93e4-7746-ad39-549106273c73",
					hidden: false,
					name: "Game Jam Participation",
					period: "2019 - Present",
					website: {
						url: "",
						label: ""
					},
					description: "<p>Regular participant in Ludum Dare and Global Game Jam events. Created 12+ game prototypes exploring experimental mechanics and art styles. Won 'Best Gameplay' award at Ludum Dare 48 with puzzle game 'Deeper and Deeper' that ranked in top 5% overall.</p>"
				}
			]
		},
		skills: {
			title: "",
			columns: 1,
			hidden: false,
			items: [
				{
					id: "019bef5a-93e4-7746-ad39-5a52dcf50ed4",
					hidden: false,
					icon: "code",
					name: "Unity Engine",
					proficiency: "Expert",
					level: 5,
					keywords: [
						"C#",
						"Editor Tools",
						"Performance Profiling"
					]
				},
				{
					id: "019bef5a-93e4-7746-ad39-5e8bb7cacbc8",
					hidden: false,
					icon: "brackets-curly",
					name: "Unreal Engine",
					proficiency: "Advanced",
					level: 4,
					keywords: [
						"C++",
						"Blueprints",
						"UE5 Features"
					]
				},
				{
					id: "019bef5a-93e4-7746-ad39-622f9d41da55",
					hidden: false,
					icon: "cpu",
					name: "Programming Languages",
					proficiency: "Expert",
					level: 5,
					keywords: [
						"C#",
						"C++",
						"Python",
						"HLSL/GLSL"
					]
				},
				{
					id: "019bef5a-93e4-7746-ad39-6574ab6814bd",
					hidden: false,
					icon: "brain",
					name: "Game AI",
					proficiency: "Advanced",
					level: 4,
					keywords: [
						"Behavior Trees",
						"FSM",
						"Pathfinding",
						"Navigation"
					]
				},
				{
					id: "019bef5a-93e4-7746-ad39-6a8e22bec684",
					hidden: false,
					icon: "shooting-star",
					name: "Physics & Mathematics",
					proficiency: "Advanced",
					level: 4,
					keywords: [
						"3D Math",
						"Collision Detection",
						"Rigid Body Dynamics"
					]
				},
				{
					id: "019bef5a-93e4-7746-ad39-6d8bf7be7514",
					hidden: true,
					icon: "chart-line-up",
					name: "Performance Optimization",
					proficiency: "Advanced",
					level: 4,
					keywords: [
						"Profiling",
						"Memory Management",
						"Frame Rate"
					]
				}
			]
		},
		languages: {
			title: "",
			columns: 1,
			hidden: false,
			items: [{
				id: "019bef5a-93e4-7746-ad39-73807ccc48b5",
				hidden: false,
				language: "English",
				fluency: "Native",
				level: 5
			}, {
				id: "019bef5a-93e4-7746-ad39-768670459358",
				hidden: false,
				language: "Polish",
				fluency: "Conversational",
				level: 3
			}]
		},
		interests: {
			title: "",
			columns: 1,
			hidden: false,
			items: [
				{
					id: "019bef5a-93e4-7746-ad39-7821b4de95f7",
					hidden: false,
					icon: "game-controller",
					name: "Game Design",
					keywords: [
						"Mechanics",
						"Level Design",
						"Player Psychology"
					]
				},
				{
					id: "019bef5a-93e4-7746-ad39-7c64c1a607d3",
					hidden: false,
					icon: "robot",
					name: "AI & Procedural Generation",
					keywords: [
						"PCG",
						"Machine Learning",
						"Emergent Gameplay"
					]
				},
				{
					id: "019bef5a-93e4-7746-ad39-80bccce3c0ef",
					hidden: false,
					icon: "book-open",
					name: "Indie Game Development",
					keywords: [
						"Solo Dev",
						"Game Jams",
						"Community"
					]
				},
				{
					id: "019bef5a-93e4-7746-ad39-84bb7e9af005",
					hidden: false,
					icon: "pen-nib",
					name: "Technical Art",
					keywords: [
						"Shaders",
						"VFX",
						"Optimization"
					]
				}
			]
		},
		awards: {
			title: "",
			columns: 1,
			hidden: false,
			items: [{
				id: "019bef5a-93e4-7746-ad39-8a8bb9fbe182",
				hidden: false,
				title: "Best Gameplay - Ludum Dare 48",
				awarder: "Ludum Dare",
				date: "April 2021",
				website: {
					url: "",
					label: ""
				},
				description: "<p>Awarded for puzzle game 'Deeper and Deeper' which ranked in the top 5% overall among 3,000+ submissions</p>"
			}, {
				id: "019bef5a-93e4-7746-ad39-8dd81379c7c9",
				hidden: false,
				title: "Employee Excellence Award",
				awarder: "Pixel Forge Interactive",
				date: "December 2021",
				website: {
					url: "",
					label: ""
				},
				description: "<p>Recognized for exceptional contributions to 'Starbound Odyssey' development and dedication to code quality</p>"
			}]
		},
		certifications: {
			title: "",
			columns: 1,
			hidden: false,
			items: [{
				id: "019bef5a-93e4-7746-ad39-91fe8a4dfea6",
				hidden: false,
				title: "Unity Certified Expert: Programmer",
				issuer: "Unity Technologies",
				date: "March 2022",
				website: {
					url: "",
					label: ""
				},
				description: ""
			}, {
				id: "019bef5a-93e4-7746-ad39-961afccc2508",
				hidden: false,
				title: "Unreal Engine 5 C++ Developer",
				issuer: "Epic Games (Udemy)",
				date: "June 2023",
				website: {
					url: "",
					label: ""
				},
				description: ""
			}]
		},
		publications: {
			title: "",
			columns: 1,
			hidden: false,
			items: [{
				id: "019bef5a-93e4-7746-ad39-9816f0081895",
				hidden: false,
				title: "Optimizing Unity Games for Mobile: A Practical Guide",
				publisher: "Game Developer Magazine",
				date: "September 2021",
				website: {
					url: "",
					label: ""
				},
				description: "<p>Technical article covering mobile optimization techniques including draw call batching, LOD systems, and memory management</p>"
			}, {
				id: "019bef5a-93e4-7746-ad39-9cf55c272c05",
				hidden: false,
				title: "Building Modular Dialogue Systems",
				publisher: "Seattle Indie Game Developers Meetup",
				date: "May 2022",
				website: {
					url: "",
					label: ""
				},
				description: "<p>Presented talk on designing flexible dialogue systems for narrative games, attended by 60+ local developers</p>"
			}]
		},
		volunteer: {
			title: "",
			columns: 1,
			hidden: false,
			items: [{
				id: "019bef5a-93e4-7746-ad39-a02580473e05",
				hidden: false,
				organization: "Seattle Indies",
				location: "Seattle, WA",
				period: "2020 - Present",
				website: {
					url: "",
					label: ""
				},
				description: "<p>Active member of local indie game development community. Organize monthly game showcases and provide mentorship to aspiring game developers through code reviews and technical guidance.</p>"
			}, {
				id: "019bef5a-93e4-7746-ad39-a731c5b1b286",
				hidden: false,
				organization: "Code.org Game Development Workshops",
				location: "Seattle, WA",
				period: "2021 - Present",
				website: {
					url: "",
					label: ""
				},
				description: "<p>Volunteer instructor teaching basic game programming concepts to middle school students. Led 8+ workshops introducing Unity fundamentals and game design principles.</p>"
			}]
		},
		references: {
			title: "",
			columns: 1,
			hidden: false,
			items: [{
				id: "019bef5a-93e4-7746-ad39-a945c0f42dd5",
				hidden: false,
				name: "Available upon request",
				position: "",
				website: {
					url: "",
					label: ""
				},
				phone: "",
				description: ""
			}]
		}
	},
	customSections: [{
		title: "Experience",
		columns: 1,
		hidden: false,
		id: "019becaf-0b87-769d-98a6-46ccf558c0e8",
		type: "experience",
		items: [{
			id: "019bef5a-d1fa-7289-a87c-2677688d9e75",
			hidden: false,
			company: "Pixel Forge Interactive",
			position: "Game Developer",
			location: "Bellevue, WA",
			period: "June 2020 - February 2022",
			website: {
				url: "",
				label: ""
			},
			roles: [],
			description: "<ul><li>Core developer on 'Starbound Odyssey,' a sci-fi roguelike that achieved 500K+ sales on Steam with 'Very Positive' user reviews</li><li>Implemented procedural generation systems for level layouts, enemy encounters, and loot drops using Unity and C#</li><li>Designed and programmed player progression systems including skill trees, equipment upgrades, and meta-progression mechanics</li><li>Created robust save/load system supporting cloud saves and cross-platform play between PC and Nintendo Switch</li><li>Integrated third-party SDKs for analytics (GameAnalytics), achievements (Steamworks), and multiplayer networking (Photon)</li><li>Fixed critical bugs and balanced gameplay based on community feedback and telemetry data, releasing 12 post-launch content updates</li><li>Worked closely with artists to implement VFX, animations, and shaders that enhanced visual polish while maintaining performance targets</li></ul>"
		}, {
			id: "019bef5a-db0e-73c6-9b6e-4471703864f1",
			hidden: false,
			company: "Mobile Games Studio",
			position: "Junior Game Developer",
			location: "Remote",
			period: "September 2018 - May 2020",
			website: {
				url: "",
				label: ""
			},
			roles: [],
			description: "<ul><li><p>Contributed to development of three mobile puzzle games built in Unity, collectively downloaded 2M+ times on iOS and Android</p></li><li><p>Implemented UI systems, touch controls, and gesture recognition optimized for mobile devices and various screen sizes</p></li><li><p>Developed monetization features including rewarded video ads, in-app purchases, and daily reward systems that increased retention by 25%</p></li><li><p>Optimized memory usage and load times for mobile platforms, reducing app size by 35% through asset compression and code optimization</p></li><li><p>Collaborated with game designers to balance puzzle difficulty curves and progression pacing using A/B testing data</p></li></ul><p></p>"
		}]
	}, {
		title: "Cover Letter",
		columns: 1,
		hidden: false,
		id: "019bef5b-0b3d-7e2a-8a7c-12d9e23a4f6b",
		type: "cover-letter",
		items: [{
			id: "019bef5b-0f8d-77d1-9b2a-4a1b65e1b8aa",
			hidden: false,
			recipient: "<p>Hiring Manager<br />Sunrise Games Studio<br />Seattle, WA<br /><a href=\"mailto:hiring@sunrisegames.com\">hiring@sunrisegames.com</a></p>",
			content: "<p>Dear Hiring Manager,</p><p>I'm excited to apply for the Senior Gameplay Engineer role at Sunrise Games Studio. Over the past five years, I have shipped cross-platform titles in Unity and Unreal Engine, leading core gameplay and tooling efforts that improved iteration speed and player experience. At Cascade Studios, I architected combat systems and optimized performance to maintain 60 FPS on console while partnering closely with design and art.</p><p>I thrive in collaborative, cross-disciplinary teams and enjoy mentoring junior engineers. I'd welcome the chance to bring my gameplay systems expertise and tooling focus to your next title.</p><p>Sincerely,<br />David Kowalski</p>"
		}]
	}],
	metadata: {
		template: "azurill",
		layout: {
			sidebarWidth: 30,
			pages: [
				{
					fullWidth: false,
					main: [
						"summary",
						"education",
						"experience"
					],
					sidebar: ["profiles", "skills"]
				},
				{
					fullWidth: false,
					main: ["019becaf-0b87-769d-98a6-46ccf558c0e8", "awards"],
					sidebar: [
						"languages",
						"certifications",
						"interests",
						"references"
					]
				},
				{
					fullWidth: true,
					main: [
						"projects",
						"publications",
						"volunteer"
					],
					sidebar: []
				},
				{
					fullWidth: true,
					main: ["019bef5b-0b3d-7e2a-8a7c-12d9e23a4f6b"],
					sidebar: []
				}
			]
		},
		css: {
			enabled: false,
			value: ""
		},
		page: {
			gapX: 4,
			gapY: 8,
			marginX: 16,
			marginY: 14,
			format: "a4",
			locale: "en-US",
			hideIcons: false
		},
		design: {
			level: {
				icon: "acorn",
				type: "circle"
			},
			colors: {
				primary: "rgba(0, 132, 209, 1)",
				text: "rgba(0, 0, 0, 1)",
				background: "rgba(255, 255, 255, 1)"
			}
		},
		typography: {
			body: {
				fontFamily: "IBM Plex Serif",
				fontWeights: ["400", "600"],
				fontSize: 11,
				lineHeight: 1.5
			},
			heading: {
				fontFamily: "Fira Sans Condensed",
				fontWeights: ["500"],
				fontSize: 18,
				lineHeight: 1.5
			}
		},
		notes: ""
	}
};
var resumeSchema = createSelectSchema(resume, {
	id: zod_default.string().describe("The ID of the resume."),
	name: zod_default.string().min(1).describe("The name of the resume."),
	slug: zod_default.string().min(1).describe("The slug of the resume."),
	tags: zod_default.array(zod_default.string()).describe("The tags of the resume."),
	isPublic: zod_default.boolean().describe("Whether the resume is public."),
	isLocked: zod_default.boolean().describe("Whether the resume is locked."),
	password: zod_default.string().min(6).nullable().describe("The password of the resume, if any."),
	data: resumeDataSchema.loose(),
	userId: zod_default.string().describe("The ID of the user who owns the resume."),
	createdAt: zod_default.date().describe("The date and time the resume was created."),
	updatedAt: zod_default.date().describe("The date and time the resume was last updated.")
});
var resumeDto = {
	list: {
		input: zod_default.object({
			tags: zod_default.array(zod_default.string()).optional().default([]),
			sort: zod_default.enum([
				"lastUpdatedAt",
				"createdAt",
				"name"
			]).optional().default("lastUpdatedAt")
		}).optional().default({
			tags: [],
			sort: "lastUpdatedAt"
		}),
		output: zod_default.array(resumeSchema.omit({
			data: true,
			password: true,
			userId: true
		}))
	},
	getById: {
		input: resumeSchema.pick({ id: true }),
		output: resumeSchema.omit({
			password: true,
			userId: true,
			createdAt: true,
			updatedAt: true
		}).extend({ hasPassword: zod_default.boolean() })
	},
	getBySlug: {
		input: zod_default.object({
			username: zod_default.string(),
			slug: zod_default.string()
		}),
		output: resumeSchema.omit({
			password: true,
			userId: true,
			createdAt: true,
			updatedAt: true
		})
	},
	create: {
		input: resumeSchema.pick({
			name: true,
			slug: true,
			tags: true
		}).extend({ withSampleData: zod_default.boolean().default(false) }),
		output: zod_default.string().describe("The ID of the created resume.")
	},
	import: {
		input: resumeSchema.pick({ data: true }),
		output: zod_default.string().describe("The ID of the imported resume.")
	},
	update: {
		input: resumeSchema.pick({
			name: true,
			slug: true,
			tags: true,
			data: true,
			isPublic: true
		}).partial().extend({ id: zod_default.string() }),
		output: resumeSchema.omit({
			password: true,
			userId: true,
			createdAt: true,
			updatedAt: true
		})
	},
	setLocked: {
		input: resumeSchema.pick({
			id: true,
			isLocked: true
		}),
		output: zod_default.void()
	},
	setPassword: {
		input: resumeSchema.pick({ id: true }).extend({ password: zod_default.string().min(6).max(64) }),
		output: zod_default.void()
	},
	removePassword: {
		input: resumeSchema.pick({ id: true }),
		output: zod_default.void()
	},
	patch: {
		input: zod_default.object({
			id: zod_default.string().describe("The ID of the resume to patch."),
			operations: zod_default.array(jsonPatchOperationSchema).min(1).describe("An array of JSON Patch (RFC 6902) operations to apply to the resume data.")
		}),
		output: resumeSchema.omit({
			password: true,
			userId: true,
			createdAt: true,
			updatedAt: true
		}).extend({ hasPassword: zod_default.boolean() })
	},
	duplicate: {
		input: resumeSchema.pick({
			id: true,
			name: true,
			slug: true,
			tags: true
		}),
		output: zod_default.string().describe("The ID of the duplicated resume.")
	},
	delete: {
		input: resumeSchema.pick({ id: true }),
		output: zod_default.void()
	}
};
var resumeRouter$1 = {
	tags: { list: protectedProcedure.route({
		method: "GET",
		path: "/resumes/tags",
		tags: ["Resumes"],
		operationId: "listResumeTags",
		summary: "List all resume tags",
		description: "Returns a sorted list of all unique tags across the authenticated user's resumes. Useful for populating tag filters in the dashboard. Requires authentication.",
		successDescription: "A sorted array of unique tag strings."
	}).output(zod_default.array(zod_default.string())).handler(async ({ context }) => {
		return await resumeService.tags.list({ userId: context.user.id });
	}) },
	statistics: {
		getById: protectedProcedure.route({
			method: "GET",
			path: "/resumes/{id}/statistics",
			tags: ["Resume Statistics"],
			operationId: "getResumeStatistics",
			summary: "Get resume statistics",
			description: "Returns view and download statistics for the specified resume, including total counts and the timestamps of the last view and download. Requires authentication.",
			successDescription: "The resume's view and download statistics."
		}).input(zod_default.object({ id: zod_default.string().describe("The unique identifier of the resume.") })).output(zod_default.object({
			isPublic: zod_default.boolean().describe("Whether the resume is currently public."),
			views: zod_default.number().describe("Total number of times the resume has been viewed."),
			downloads: zod_default.number().describe("Total number of times the resume has been downloaded."),
			lastViewedAt: zod_default.date().nullable().describe("Timestamp of the last view, or null if never viewed."),
			lastDownloadedAt: zod_default.date().nullable().describe("Timestamp of the last download, or null if never downloaded.")
		})).handler(async ({ context, input }) => {
			return await resumeService.statistics.getById({
				id: input.id,
				userId: context.user.id
			});
		}),
		increment: publicProcedure.route({
			tags: ["Internal"],
			operationId: "incrementResumeStatistics",
			summary: "Increment resume statistics"
		}).input(zod_default.object({
			id: zod_default.string(),
			views: zod_default.boolean().default(false),
			downloads: zod_default.boolean().default(false)
		})).handler(async ({ input }) => {
			return await resumeService.statistics.increment(input);
		})
	},
	list: protectedProcedure.route({
		method: "GET",
		path: "/resumes",
		tags: ["Resumes"],
		operationId: "listResumes",
		summary: "List all resumes",
		description: "Returns a list of all resumes belonging to the authenticated user. Results can be filtered by tags and sorted by last updated date, creation date, or name. Resume data is not included in the response for performance; use the get endpoint to fetch full resume data. Requires authentication.",
		successDescription: "A list of resumes with their metadata (without full resume data)."
	}).input(resumeDto.list.input.optional().default({
		tags: [],
		sort: "lastUpdatedAt"
	})).output(resumeDto.list.output).handler(async ({ input, context }) => {
		return await resumeService.list({
			userId: context.user.id,
			tags: input.tags,
			sort: input.sort
		});
	}),
	getById: protectedProcedure.route({
		method: "GET",
		path: "/resumes/{id}",
		tags: ["Resumes"],
		operationId: "getResume",
		summary: "Get resume by ID",
		description: "Returns a single resume with its full data, identified by its unique ID. Only resumes belonging to the authenticated user can be retrieved. Requires authentication.",
		successDescription: "The resume with its full data."
	}).input(resumeDto.getById.input).output(resumeDto.getById.output).handler(async ({ context, input }) => {
		return await resumeService.getById({
			id: input.id,
			userId: context.user.id
		});
	}),
	getByIdForPrinter: serverOnlyProcedure.route({
		tags: ["Internal"],
		operationId: "getResumeForPrinter",
		summary: "Get resume by ID for printer"
	}).input(resumeDto.getById.input).handler(async ({ input }) => {
		return await resumeService.getByIdForPrinter({ id: input.id });
	}),
	getBySlug: publicProcedure.route({
		method: "GET",
		path: "/resumes/{username}/{slug}",
		tags: ["Resume Sharing"],
		operationId: "getResumeBySlug",
		summary: "Get public resume by username and slug",
		description: "Returns a publicly shared resume identified by the owner's username and the resume's slug. If the resume is password-protected and the viewer has not yet verified the password, a 401 error with code NEED_PASSWORD is returned. No authentication required for public resumes; if authenticated as the owner, private resumes are also accessible.",
		successDescription: "The public resume with its full data."
	}).input(resumeDto.getBySlug.input).output(resumeDto.getBySlug.output).handler(async ({ input, context }) => {
		return await resumeService.getBySlug({
			...input,
			currentUserId: context.user?.id
		});
	}),
	create: protectedProcedure.route({
		method: "POST",
		path: "/resumes",
		tags: ["Resumes"],
		operationId: "createResume",
		summary: "Create a new resume",
		description: "Creates a new resume with the given name, slug, and tags. Optionally initializes the resume with sample data by setting withSampleData to true. The slug must be unique across the user's resumes. Returns the ID of the newly created resume. Requires authentication.",
		successDescription: "The ID of the newly created resume."
	}).input(resumeDto.create.input).output(resumeDto.create.output).errors({ RESUME_SLUG_ALREADY_EXISTS: {
		message: "A resume with this slug already exists.",
		status: 400
	} }).handler(async ({ context, input }) => {
		return await resumeService.create({
			name: input.name,
			slug: input.slug,
			tags: input.tags,
			locale: context.locale,
			userId: context.user.id,
			data: input.withSampleData ? sampleResumeData : void 0
		});
	}),
	import: protectedProcedure.route({
		method: "POST",
		path: "/resumes/import",
		tags: ["Resumes"],
		operationId: "importResume",
		summary: "Import a resume",
		description: "Creates a new resume from an existing ResumeData object (e.g. from a previously exported JSON file). A random name and slug are generated automatically. Returns the ID of the imported resume. Requires authentication.",
		successDescription: "The ID of the imported resume."
	}).input(resumeDto.import.input).output(resumeDto.import.output).errors({ RESUME_SLUG_ALREADY_EXISTS: {
		message: "A resume with this slug already exists.",
		status: 400
	} }).handler(async ({ context, input }) => {
		const name = generateRandomName();
		const slug = slugify(name);
		return await resumeService.create({
			name,
			slug,
			tags: [],
			data: input.data,
			locale: context.locale,
			userId: context.user.id
		});
	}),
	update: protectedProcedure.route({
		method: "PUT",
		path: "/resumes/{id}",
		tags: ["Resumes"],
		operationId: "updateResume",
		summary: "Update a resume",
		description: "Updates one or more fields of a resume identified by its ID. All fields are optional; only provided fields will be updated. Locked resumes cannot be updated. Requires authentication.",
		successDescription: "The updated resume with its full data."
	}).input(resumeDto.update.input).output(resumeDto.update.output).errors({ RESUME_SLUG_ALREADY_EXISTS: {
		message: "A resume with this slug already exists.",
		status: 400
	} }).handler(async ({ context, input }) => {
		return await resumeService.update({
			id: input.id,
			userId: context.user.id,
			name: input.name,
			slug: input.slug,
			tags: input.tags,
			data: input.data,
			isPublic: input.isPublic
		});
	}),
	patch: protectedProcedure.route({
		method: "PATCH",
		path: "/resumes/{id}",
		tags: ["Resumes"],
		operationId: "patchResume",
		summary: "Patch resume data",
		description: "Applies JSON Patch (RFC 6902) operations to partially update a resume's data. This allows small, targeted changes (e.g. updating a single field) without sending the entire resume object. Locked resumes cannot be patched. Requires authentication.",
		successDescription: "The patched resume with its full data."
	}).input(resumeDto.patch.input).output(resumeDto.patch.output).errors({ INVALID_PATCH_OPERATIONS: {
		message: "The patch operations are invalid or produced an invalid resume.",
		status: 400
	} }).handler(async ({ context, input }) => {
		return await resumeService.patch({
			id: input.id,
			userId: context.user.id,
			operations: input.operations
		});
	}),
	setLocked: protectedProcedure.route({
		method: "POST",
		path: "/resumes/{id}/lock",
		tags: ["Resumes"],
		operationId: "setResumeLocked",
		summary: "Set resume lock status",
		description: "Toggles the locked status of a resume. When locked, a resume cannot be updated, patched, or deleted. Useful for protecting finalized resumes from accidental edits. Requires authentication.",
		successDescription: "The resume lock status was updated successfully."
	}).input(resumeDto.setLocked.input).output(resumeDto.setLocked.output).handler(async ({ context, input }) => {
		return await resumeService.setLocked({
			id: input.id,
			userId: context.user.id,
			isLocked: input.isLocked
		});
	}),
	setPassword: protectedProcedure.route({
		method: "PUT",
		path: "/resumes/{id}/password",
		tags: ["Resume Sharing"],
		operationId: "setResumePassword",
		summary: "Set resume password",
		description: "Sets or updates a password on a resume. When a password is set, viewers of the public resume must enter the password before the resume data is revealed. The password must be between 6 and 64 characters. Requires authentication.",
		successDescription: "The resume password was set successfully."
	}).input(resumeDto.setPassword.input).output(resumeDto.setPassword.output).handler(async ({ context, input }) => {
		return await resumeService.setPassword({
			id: input.id,
			userId: context.user.id,
			password: input.password
		});
	}),
	verifyPassword: publicProcedure.route({
		method: "POST",
		path: "/resumes/{username}/{slug}/password/verify",
		tags: ["Resume Sharing"],
		operationId: "verifyResumePassword",
		summary: "Verify resume password",
		description: "Verifies a password for a password-protected public resume. On success, the viewer is granted access to view the resume data for the duration of their session. No authentication required.",
		successDescription: "The password was verified successfully and access has been granted."
	}).input(zod_default.object({
		username: zod_default.string().min(1).describe("The username of the resume owner."),
		slug: zod_default.string().min(1).describe("The slug of the resume."),
		password: zod_default.string().min(1).describe("The password to verify.")
	})).output(zod_default.boolean()).handler(async ({ input }) => {
		return await resumeService.verifyPassword({
			username: input.username,
			slug: input.slug,
			password: input.password
		});
	}),
	removePassword: protectedProcedure.route({
		method: "DELETE",
		path: "/resumes/{id}/password",
		tags: ["Resume Sharing"],
		operationId: "removeResumePassword",
		summary: "Remove resume password",
		description: "Removes password protection from a resume. After removal, the resume (if public) can be viewed without entering a password. Requires authentication.",
		successDescription: "The resume password was removed successfully."
	}).input(resumeDto.removePassword.input).output(resumeDto.removePassword.output).handler(async ({ context, input }) => {
		return await resumeService.removePassword({
			id: input.id,
			userId: context.user.id
		});
	}),
	duplicate: protectedProcedure.route({
		method: "POST",
		path: "/resumes/{id}/duplicate",
		tags: ["Resumes"],
		operationId: "duplicateResume",
		summary: "Duplicate a resume",
		description: "Creates a copy of an existing resume with the same data. Optionally override the name, slug, and tags for the duplicate. If not provided, the original resume's name, slug, and tags are used. Returns the ID of the duplicated resume. Requires authentication.",
		successDescription: "The ID of the duplicated resume."
	}).input(resumeDto.duplicate.input).output(resumeDto.duplicate.output).handler(async ({ context, input }) => {
		const original = await resumeService.getById({
			id: input.id,
			userId: context.user.id
		});
		return await resumeService.create({
			userId: context.user.id,
			name: input.name ?? original.name,
			slug: input.slug ?? original.slug,
			tags: input.tags ?? original.tags,
			locale: context.locale,
			data: original.data
		});
	}),
	delete: protectedProcedure.route({
		method: "DELETE",
		path: "/resumes/{id}",
		tags: ["Resumes"],
		operationId: "deleteResume",
		summary: "Delete a resume",
		description: "Permanently deletes a resume and its associated files (screenshots, PDFs) from storage. Locked resumes cannot be deleted; unlock the resume first. Requires authentication.",
		successDescription: "The resume and its associated files were deleted successfully."
	}).input(resumeDto.delete.input).output(resumeDto.delete.output).handler(async ({ context, input }) => {
		return await resumeService.delete({
			id: input.id,
			userId: context.user.id
		});
	})
};
var CACHE_DURATION_MS = 360 * 60 * 1e3;
var LAST_KNOWN = {
	users: 978528,
	resumes: 1336307
};
var getCachePath = (key) => join(process.cwd(), "data", "statistics", `${key}.txt`);
var readCache = async (key) => {
	try {
		const filePath = getCachePath(key);
		const [stats, contents] = await Promise.all([fs.stat(filePath), fs.readFile(filePath, "utf-8")]);
		if (stats.mtimeMs < Date.now() - CACHE_DURATION_MS) return null;
		const value = Number.parseInt(contents, 10);
		return Number.isFinite(value) && value > 0 ? value : null;
	} catch {
		return null;
	}
};
var writeCache = async (key, value) => {
	try {
		const filePath = getCachePath(key);
		await fs.mkdir(dirname(filePath), { recursive: true });
		await fs.writeFile(filePath, String(value), "utf-8");
	} catch {}
};
var getCachedCount = async (key, lastKnown, fetcher) => {
	const cached = await readCache(key);
	if (cached !== null) return cached;
	try {
		const value = await fetcher();
		if (value !== null) {
			await writeCache(key, value);
			return value;
		}
	} catch {}
	return lastKnown;
};
var getCountFromDatabase = async (table) => {
	const [result] = await db.select({ count: count() }).from(table);
	return result.count;
};
var statisticsService = {
	user: { getCount: () => {
		return getCachedCount("users", LAST_KNOWN.users, () => getCountFromDatabase(user));
	} },
	resume: { getCount: () => {
		return getCachedCount("resumes", LAST_KNOWN.resumes, () => getCountFromDatabase(resume));
	} }
};
var statisticsRouter = {
	user: { getCount: publicProcedure.route({
		method: "GET",
		path: "/statistics/users",
		tags: ["Platform Statistics"],
		operationId: "getUserCount",
		summary: "Get total number of users",
		description: "Returns the total number of registered users on this 1Digit Resume instance. The count is cached for up to 6 hours for performance. No authentication required.",
		successDescription: "The total number of registered users."
	}).output(zod_default.number().describe("The total number of registered users.")).handler(async () => {
		return await statisticsService.user.getCount();
	}) },
	resume: { getCount: publicProcedure.route({
		method: "GET",
		path: "/statistics/resumes",
		tags: ["Platform Statistics"],
		operationId: "getResumeCount",
		summary: "Get total number of resumes",
		description: "Returns the total number of resumes created on this 1Digit Resume instance. The count is cached for up to 6 hours for performance. No authentication required.",
		successDescription: "The total number of resumes created."
	}).output(zod_default.number().describe("The total number of resumes created.")).handler(async () => {
		return await statisticsService.resume.getCount();
	}) }
};
var storageService = getStorageService();
var fileSchema = zod_default.file().max(10 * 1024 * 1024, "File size must be less than 10MB");
var filenameSchema = zod_default.object({ filename: zod_default.string().min(1).describe("The path or filename of the file to delete.") });
function normalizeKey(input) {
	return input.trim().replace(/^\/+/, "").split("/").filter(Boolean).join("/");
}
function isUnsafeStorageKey(key) {
	return key.split("/").some((segment) => segment === "." || segment === "..");
}
var router_default = {
	ai: aiRouter,
	auth: authRouter,
	flags: flagsRouter,
	resume: resumeRouter$1,
	storage: {
		uploadFile: protectedProcedure.route({
			tags: ["Internal"],
			operationId: "uploadFile",
			summary: "Upload a file",
			description: "Uploads a file to storage. Images are automatically resized and converted to WebP format. Maximum file size is 10MB. Requires authentication.",
			successDescription: "The file was uploaded successfully."
		}).input(fileSchema).output(zod_default.object({
			url: zod_default.string().describe("The public URL to access the uploaded file."),
			path: zod_default.string().describe("The storage path of the uploaded file."),
			contentType: zod_default.string().describe("The MIME type of the uploaded file.")
		})).handler(async ({ context, input: file }) => {
			const originalMimeType = file.type;
			const isImage = isImageFile(originalMimeType);
			let data;
			let contentType;
			if (isImage) {
				const processed = await processImageForUpload(file);
				data = processed.data;
				contentType = processed.contentType;
			} else {
				const fileBuffer = await file.arrayBuffer();
				data = new Uint8Array(fileBuffer);
				contentType = originalMimeType;
			}
			const result = await uploadFile({
				userId: context.user.id,
				data,
				contentType,
				type: "picture"
			});
			return {
				url: result.url,
				path: result.key,
				contentType
			};
		}),
		deleteFile: protectedProcedure.route({
			tags: ["Internal"],
			operationId: "deleteFile",
			summary: "Delete a file",
			description: "Deletes a file from storage by its filename or path. If the filename does not start with 'uploads/', the user's picture directory is assumed. Requires authentication.",
			successDescription: "The file was deleted successfully."
		}).input(filenameSchema).output(zod_default.void()).errors({
			NOT_FOUND: {
				message: "The specified file was not found in storage.",
				status: 404
			},
			FORBIDDEN: {
				message: "You do not have permission to delete this file.",
				status: 403
			}
		}).handler(async ({ context, input }) => {
			const requestedKey = normalizeKey(input.filename);
			const key = requestedKey.startsWith("uploads/") ? requestedKey : normalizeKey(`uploads/${context.user.id}/pictures/${requestedKey}`);
			const userPrefix = `uploads/${context.user.id}/`;
			if (isUnsafeStorageKey(key) || !key.startsWith(userPrefix)) throw new ORPCError("FORBIDDEN");
			if (!await storageService.delete(key)) throw new ORPCError("NOT_FOUND");
		})
	},
	printer: printerRouter,
	statistics: statisticsRouter
};
var getORPCClient = () => {
	return createRouterClient(router_default, {
		interceptors: [onError((error) => {
			logger$1.error("oRPC server client error", {
				scope: "server",
				error
			});
		})],
		context: async () => {
			const locale = await getLocale();
			const reqHeaders = getRequestHeaders();
			reqHeaders.set("x-server-side-call", "true");
			return {
				locale,
				reqHeaders
			};
		}
	});
};
var client = getORPCClient();
var orpc = createRouterUtils(client);
//#endregion
export { sanitizeHtml as _, env$1 as a, inferContentType as c, orpc as d, pageDimensionsAsMillimeters as f, sanitizeCss as g, router_default as h, db as i, jsonPatchOperationSchema as l, printerService as m, auth as n, getORPCClient as o, pageDimensionsAsPixels as p, client as r, getStorageService as s, applyResumePatches as t, logger$1 as u, verifyPrinterToken as v };
