import { r as __exportAll } from "../../_runtime.mjs";
import { $t as logger, B as importJWK, G as JWKSMultipleMatchingKeys, Gt as APIError, H as JOSEError, Ht as APIError$1, K as JWKSNoMatchingKey, L as jwtVerify, Lt as safeJSONParse, M as decodeProtectedHeader, Nt as getAsyncLocalStorage, Pt as __getBetterAuthGlobal, Q as decoder, Qt as createLogger, R as JWTClaimsBuilder, Rt as getAuthTables, U as JOSENotSupported, Ut as BetterAuthError, V as isObject, W as JWKSInvalid, X as decode, Y as JWTInvalid, Z as encode, Zt as TTY_COLORS, bt as base64Url, q as JWKSTimeout, tn as getColorDepth, yt as base64, z as validateClaimsSet, zt as generateId } from "./api-key+[...].mjs";
import { Nn as _enum, Xr as string } from "../@ai-sdk/anthropic+[...].mjs";
//#region node_modules/@better-auth/core/dist/db/adapter/get-default-model-name.mjs
var initGetDefaultModelName = ({ usePlural, schema }) => {
	/**
	* This function helps us get the default model name from the schema defined by devs.
	* Often times, the user will be using the `modelName` which could had been customized by the users.
	* This function helps us get the actual model name useful to match against the schema. (eg: schema[model])
	*
	* If it's still unclear what this does:
	*
	* 1. User can define a custom modelName.
	* 2. When using a custom modelName, doing something like `schema[model]` will not work.
	* 3. Using this function helps us get the actual model name based on the user's defined custom modelName.
	*/
	const getDefaultModelName = (model) => {
		if (usePlural && model.charAt(model.length - 1) === "s") {
			const pluralessModel = model.slice(0, -1);
			let m = schema[pluralessModel] ? pluralessModel : void 0;
			if (!m) m = Object.entries(schema).find(([_, f]) => f.modelName === pluralessModel)?.[0];
			if (m) return m;
		}
		let m = schema[model] ? model : void 0;
		if (!m) m = Object.entries(schema).find(([_, f]) => f.modelName === model)?.[0];
		if (!m) throw new BetterAuthError(`Model "${model}" not found in schema`);
		return m;
	};
	return getDefaultModelName;
};
//#endregion
//#region node_modules/@better-auth/core/dist/db/adapter/get-default-field-name.mjs
var initGetDefaultFieldName = ({ schema, usePlural }) => {
	const getDefaultModelName = initGetDefaultModelName({
		schema,
		usePlural
	});
	/**
	* This function helps us get the default field name from the schema defined by devs.
	* Often times, the user will be using the `fieldName` which could had been customized by the users.
	* This function helps us get the actual field name useful to match against the schema. (eg: schema[model].fields[field])
	*
	* If it's still unclear what this does:
	*
	* 1. User can define a custom fieldName.
	* 2. When using a custom fieldName, doing something like `schema[model].fields[field]` will not work.
	*/
	const getDefaultFieldName = ({ field, model: unsafeModel }) => {
		if (field === "id" || field === "_id") return "id";
		const model = getDefaultModelName(unsafeModel);
		let f = schema[model]?.fields[field];
		if (!f) {
			const result = Object.entries(schema[model].fields).find(([_, f]) => f.fieldName === field);
			if (result) {
				f = result[1];
				field = result[0];
			}
		}
		if (!f) throw new BetterAuthError(`Field ${field} not found in model ${model}`);
		return field;
	};
	return getDefaultFieldName;
};
//#endregion
//#region node_modules/@better-auth/core/dist/db/adapter/get-id-field.mjs
var initGetIdField = ({ usePlural, schema, disableIdGeneration, options, customIdGenerator, supportsUUIDs }) => {
	const getDefaultModelName = initGetDefaultModelName({
		usePlural,
		schema
	});
	const idField = ({ customModelName, forceAllowId }) => {
		const useNumberId = options.advanced?.database?.generateId === "serial";
		const useUUIDs = options.advanced?.database?.generateId === "uuid";
		const shouldGenerateId = (() => {
			if (disableIdGeneration) return false;
			else if (useNumberId && !forceAllowId) return false;
			else if (useUUIDs) return !supportsUUIDs;
			else return true;
		})();
		const model = getDefaultModelName(customModelName ?? "id");
		return {
			type: useNumberId ? "number" : "string",
			required: shouldGenerateId ? true : false,
			...shouldGenerateId ? { defaultValue() {
				if (disableIdGeneration) return void 0;
				const generateId$1 = options.advanced?.database?.generateId;
				if (generateId$1 === false || useNumberId) return void 0;
				if (typeof generateId$1 === "function") return generateId$1({ model });
				if (customIdGenerator) return customIdGenerator({ model });
				if (generateId$1 === "uuid") return crypto.randomUUID();
				return generateId();
			} } : {},
			transform: {
				input: (value) => {
					if (!value) return void 0;
					if (useNumberId) {
						const numberValue = Number(value);
						if (isNaN(numberValue)) return;
						return numberValue;
					}
					if (useUUIDs) {
						if (shouldGenerateId && !forceAllowId) return value;
						if (disableIdGeneration) return void 0;
						if (supportsUUIDs) return void 0;
						if (forceAllowId && typeof value === "string") if (/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)) return value;
						else {
							const stack = (/* @__PURE__ */ new Error()).stack?.split("\n").filter((_, i) => i !== 1).join("\n").replace("Error:", "");
							logger.warn("[Adapter Factory] - Invalid UUID value for field `id` provided when `forceAllowId` is true. Generating a new UUID.", stack);
						}
						if (typeof value !== "string" && !supportsUUIDs) return crypto.randomUUID();
						return;
					}
					return value;
				},
				output: (value) => {
					if (!value) return void 0;
					return String(value);
				}
			}
		};
	};
	return idField;
};
//#endregion
//#region node_modules/@better-auth/core/dist/db/adapter/get-field-attributes.mjs
var initGetFieldAttributes = ({ usePlural, schema, options, customIdGenerator, disableIdGeneration }) => {
	const getDefaultModelName = initGetDefaultModelName({
		usePlural,
		schema
	});
	const getDefaultFieldName = initGetDefaultFieldName({
		usePlural,
		schema
	});
	const idField = initGetIdField({
		usePlural,
		schema,
		options,
		customIdGenerator,
		disableIdGeneration
	});
	const getFieldAttributes = ({ model, field }) => {
		const defaultModelName = getDefaultModelName(model);
		const defaultFieldName = getDefaultFieldName({
			field,
			model: defaultModelName
		});
		const fields = schema[defaultModelName].fields;
		fields.id = idField({ customModelName: defaultModelName });
		const fieldAttributes = fields[defaultFieldName];
		if (!fieldAttributes) throw new BetterAuthError(`Field ${field} not found in model ${model}`);
		return fieldAttributes;
	};
	return getFieldAttributes;
};
//#endregion
//#region node_modules/@better-auth/core/dist/db/adapter/get-field-name.mjs
var initGetFieldName = ({ schema, usePlural }) => {
	const getDefaultModelName = initGetDefaultModelName({
		schema,
		usePlural
	});
	const getDefaultFieldName = initGetDefaultFieldName({
		schema,
		usePlural
	});
	/**
	* Get the field name which is expected to be saved in the database based on the user's schema.
	*
	* This function is useful if you need to save the field name to the database.
	*
	* For example, if the user has defined a custom field name for the `user` model, then you can use this function to get the actual field name from the schema.
	*/
	function getFieldName({ model: modelName, field: fieldName }) {
		const model = getDefaultModelName(modelName);
		const field = getDefaultFieldName({
			model,
			field: fieldName
		});
		return schema[model]?.fields[field]?.fieldName || field;
	}
	return getFieldName;
};
//#endregion
//#region node_modules/@better-auth/core/dist/db/adapter/get-model-name.mjs
var initGetModelName = ({ usePlural, schema }) => {
	const getDefaultModelName = initGetDefaultModelName({
		schema,
		usePlural
	});
	/**
	* Users can overwrite the default model of some tables. This function helps find the correct model name.
	* Furthermore, if the user passes `usePlural` as true in their adapter config,
	* then we should return the model name ending with an `s`.
	*/
	const getModelName = (model) => {
		const defaultModelKey = getDefaultModelName(model);
		if (schema && schema[defaultModelKey] && schema[defaultModelKey].modelName !== model) return usePlural ? `${schema[defaultModelKey].modelName}s` : schema[defaultModelKey].modelName;
		return usePlural ? `${model}s` : model;
	};
	return getModelName;
};
//#endregion
//#region node_modules/@better-auth/core/dist/db/adapter/utils.mjs
function withApplyDefault(value, field, action) {
	if (action === "update") {
		if (value === void 0 && field.onUpdate !== void 0) {
			if (typeof field.onUpdate === "function") return field.onUpdate();
			return field.onUpdate;
		}
		return value;
	}
	if (action === "create") {
		if (value === void 0 || field.required === true && value === null) {
			if (field.defaultValue !== void 0) {
				if (typeof field.defaultValue === "function") return field.defaultValue();
				return field.defaultValue;
			}
		}
	}
	return value;
}
//#endregion
//#region node_modules/@better-auth/core/dist/db/adapter/factory.mjs
var debugLogs = [];
var transactionId = -1;
var createAsIsTransaction = (adapter) => (fn) => fn(adapter);
var createAdapterFactory = ({ adapter: customAdapter, config: cfg }) => (options) => {
	const uniqueAdapterFactoryInstanceId = Math.random().toString(36).substring(2, 15);
	const config = {
		...cfg,
		supportsBooleans: cfg.supportsBooleans ?? true,
		supportsDates: cfg.supportsDates ?? true,
		supportsJSON: cfg.supportsJSON ?? false,
		adapterName: cfg.adapterName ?? cfg.adapterId,
		supportsNumericIds: cfg.supportsNumericIds ?? true,
		supportsUUIDs: cfg.supportsUUIDs ?? false,
		supportsArrays: cfg.supportsArrays ?? false,
		transaction: cfg.transaction ?? false,
		disableTransformInput: cfg.disableTransformInput ?? false,
		disableTransformOutput: cfg.disableTransformOutput ?? false,
		disableTransformJoin: cfg.disableTransformJoin ?? false
	};
	if (options.advanced?.database?.generateId === "serial" && config.supportsNumericIds === false) throw new BetterAuthError(`[${config.adapterName}] Your database or database adapter does not support numeric ids. Please disable "useNumberId" in your config.`);
	const schema = getAuthTables(options);
	const debugLog = (...args) => {
		if (config.debugLogs === true || typeof config.debugLogs === "object") {
			const logger = createLogger({ level: "info" });
			if (typeof config.debugLogs === "object" && "isRunningAdapterTests" in config.debugLogs) {
				if (config.debugLogs.isRunningAdapterTests) {
					args.shift();
					debugLogs.push({
						instance: uniqueAdapterFactoryInstanceId,
						args
					});
				}
				return;
			}
			if (typeof config.debugLogs === "object" && config.debugLogs.logCondition && !config.debugLogs.logCondition?.()) return;
			if (typeof args[0] === "object" && "method" in args[0]) {
				const method = args.shift().method;
				if (typeof config.debugLogs === "object") {
					if (method === "create" && !config.debugLogs.create) return;
					else if (method === "update" && !config.debugLogs.update) return;
					else if (method === "updateMany" && !config.debugLogs.updateMany) return;
					else if (method === "findOne" && !config.debugLogs.findOne) return;
					else if (method === "findMany" && !config.debugLogs.findMany) return;
					else if (method === "delete" && !config.debugLogs.delete) return;
					else if (method === "deleteMany" && !config.debugLogs.deleteMany) return;
					else if (method === "count" && !config.debugLogs.count) return;
				}
				logger.info(`[${config.adapterName}]`, ...args);
			} else logger.info(`[${config.adapterName}]`, ...args);
		}
	};
	const logger = createLogger(options.logger);
	const getDefaultModelName = initGetDefaultModelName({
		usePlural: config.usePlural,
		schema
	});
	const getDefaultFieldName = initGetDefaultFieldName({
		usePlural: config.usePlural,
		schema
	});
	const getModelName = initGetModelName({
		usePlural: config.usePlural,
		schema
	});
	const getFieldName = initGetFieldName({
		schema,
		usePlural: config.usePlural
	});
	const idField = initGetIdField({
		schema,
		options,
		usePlural: config.usePlural,
		disableIdGeneration: config.disableIdGeneration,
		customIdGenerator: config.customIdGenerator,
		supportsUUIDs: config.supportsUUIDs
	});
	const getFieldAttributes = initGetFieldAttributes({
		schema,
		options,
		usePlural: config.usePlural,
		disableIdGeneration: config.disableIdGeneration,
		customIdGenerator: config.customIdGenerator
	});
	const transformInput = async (data, defaultModelName, action, forceAllowId) => {
		const transformedData = {};
		const fields = schema[defaultModelName].fields;
		const newMappedKeys = config.mapKeysTransformInput ?? {};
		const useNumberId = options.advanced?.database?.generateId === "serial";
		fields.id = idField({
			customModelName: defaultModelName,
			forceAllowId: forceAllowId && "id" in data
		});
		for (const field in fields) {
			let value = data[field];
			const fieldAttributes = fields[field];
			const newFieldName = newMappedKeys[field] || fields[field].fieldName || field;
			if (value === void 0 && (fieldAttributes.defaultValue === void 0 && !fieldAttributes.transform?.input && !(action === "update" && fieldAttributes.onUpdate) || action === "update" && !fieldAttributes.onUpdate)) continue;
			if (fieldAttributes && fieldAttributes.type === "date" && !(value instanceof Date) && typeof value === "string") try {
				value = new Date(value);
			} catch {
				logger.error("[Adapter Factory] Failed to convert string to date", {
					value,
					field
				});
			}
			let newValue = withApplyDefault(value, fieldAttributes, action);
			if (fieldAttributes.transform?.input) newValue = await fieldAttributes.transform.input(newValue);
			if (fieldAttributes.references?.field === "id" && useNumberId) if (Array.isArray(newValue)) newValue = newValue.map((x) => x !== null ? Number(x) : null);
			else newValue = newValue !== null ? Number(newValue) : null;
			else if (config.supportsJSON === false && typeof newValue === "object" && fieldAttributes.type === "json") newValue = JSON.stringify(newValue);
			else if (config.supportsArrays === false && Array.isArray(newValue) && (fieldAttributes.type === "string[]" || fieldAttributes.type === "number[]")) newValue = JSON.stringify(newValue);
			else if (config.supportsDates === false && newValue instanceof Date && fieldAttributes.type === "date") newValue = newValue.toISOString();
			else if (config.supportsBooleans === false && typeof newValue === "boolean") newValue = newValue ? 1 : 0;
			if (config.customTransformInput) newValue = config.customTransformInput({
				data: newValue,
				action,
				field: newFieldName,
				fieldAttributes,
				model: getModelName(defaultModelName),
				schema,
				options
			});
			if (newValue !== void 0) transformedData[newFieldName] = newValue;
		}
		return transformedData;
	};
	const transformOutput = async (data, unsafe_model, select = [], join) => {
		const transformSingleOutput = async (data, unsafe_model, select = []) => {
			if (!data) return null;
			const newMappedKeys = config.mapKeysTransformOutput ?? {};
			const transformedData = {};
			const tableSchema = schema[getDefaultModelName(unsafe_model)].fields;
			const idKey = Object.entries(newMappedKeys).find(([_, v]) => v === "id")?.[0];
			tableSchema[idKey ?? "id"] = { type: options.advanced?.database?.generateId === "serial" ? "number" : "string" };
			for (const key in tableSchema) {
				if (select.length && !select.includes(key)) continue;
				const field = tableSchema[key];
				if (field) {
					const originalKey = field.fieldName || key;
					let newValue = data[Object.entries(newMappedKeys).find(([_, v]) => v === originalKey)?.[0] || originalKey];
					if (field.transform?.output) newValue = await field.transform.output(newValue);
					const newFieldName = newMappedKeys[key] || key;
					if (originalKey === "id" || field.references?.field === "id") {
						if (typeof newValue !== "undefined" && newValue !== null) newValue = String(newValue);
					} else if (config.supportsJSON === false && typeof newValue === "string" && field.type === "json") newValue = safeJSONParse(newValue);
					else if (config.supportsArrays === false && typeof newValue === "string" && (field.type === "string[]" || field.type === "number[]")) newValue = safeJSONParse(newValue);
					else if (config.supportsDates === false && typeof newValue === "string" && field.type === "date") newValue = new Date(newValue);
					else if (config.supportsBooleans === false && typeof newValue === "number" && field.type === "boolean") newValue = newValue === 1;
					if (config.customTransformOutput) newValue = config.customTransformOutput({
						data: newValue,
						field: newFieldName,
						fieldAttributes: field,
						select,
						model: getModelName(unsafe_model),
						schema,
						options
					});
					transformedData[newFieldName] = newValue;
				}
			}
			return transformedData;
		};
		if (!join || Object.keys(join).length === 0) return await transformSingleOutput(data, unsafe_model, select);
		unsafe_model = getDefaultModelName(unsafe_model);
		const transformedData = await transformSingleOutput(data, unsafe_model, select);
		const requiredModels = Object.entries(join).map(([model, joinConfig]) => ({
			modelName: getModelName(model),
			defaultModelName: getDefaultModelName(model),
			joinConfig
		}));
		if (!data) return null;
		for (const { modelName, defaultModelName, joinConfig } of requiredModels) {
			let joinedData = await (async () => {
				if (options.experimental?.joins) return data[modelName];
				else return await handleFallbackJoin({
					baseModel: unsafe_model,
					baseData: transformedData,
					joinModel: modelName,
					specificJoinConfig: joinConfig
				});
			})();
			if (joinedData === void 0 || joinedData === null) joinedData = joinConfig.relation === "one-to-one" ? null : [];
			if (joinConfig.relation === "one-to-many" && !Array.isArray(joinedData)) joinedData = [joinedData];
			const transformed = [];
			if (Array.isArray(joinedData)) for (const item of joinedData) {
				const transformedItem = await transformSingleOutput(item, modelName, []);
				transformed.push(transformedItem);
			}
			else {
				const transformedItem = await transformSingleOutput(joinedData, modelName, []);
				transformed.push(transformedItem);
			}
			transformedData[defaultModelName] = (joinConfig.relation === "one-to-one" ? transformed[0] : transformed) ?? null;
		}
		return transformedData;
	};
	const transformWhereClause = ({ model, where, action }) => {
		if (!where) return void 0;
		const newMappedKeys = config.mapKeysTransformInput ?? {};
		return where.map((w) => {
			const { field: unsafe_field, value, operator = "eq", connector = "AND" } = w;
			if (operator === "in") {
				if (!Array.isArray(value)) throw new BetterAuthError("Value must be an array");
			}
			let newValue = value;
			const defaultModelName = getDefaultModelName(model);
			const defaultFieldName = getDefaultFieldName({
				field: unsafe_field,
				model
			});
			const fieldName = newMappedKeys[defaultFieldName] || getFieldName({
				field: defaultFieldName,
				model: defaultModelName
			});
			const fieldAttr = getFieldAttributes({
				field: defaultFieldName,
				model: defaultModelName
			});
			const useNumberId = options.advanced?.database?.generateId === "serial";
			if (defaultFieldName === "id" || fieldAttr.references?.field === "id") {
				if (useNumberId) if (Array.isArray(value)) newValue = value.map(Number);
				else newValue = Number(value);
			}
			if (fieldAttr.type === "date" && value instanceof Date && !config.supportsDates) newValue = value.toISOString();
			if (fieldAttr.type === "boolean" && typeof newValue === "string") newValue = newValue === "true";
			if (fieldAttr.type === "number") {
				if (typeof newValue === "string" && newValue.trim() !== "") {
					const parsed = Number(newValue);
					if (!Number.isNaN(parsed)) newValue = parsed;
				} else if (Array.isArray(newValue)) {
					const parsed = newValue.map((v) => typeof v === "string" && v.trim() !== "" ? Number(v) : NaN);
					if (parsed.every((n) => !Number.isNaN(n))) newValue = parsed;
				}
			}
			if (fieldAttr.type === "boolean" && typeof newValue === "boolean" && !config.supportsBooleans) newValue = newValue ? 1 : 0;
			if (fieldAttr.type === "json" && typeof value === "object" && !config.supportsJSON) try {
				newValue = JSON.stringify(value);
			} catch (error) {
				throw new Error(`Failed to stringify JSON value for field ${fieldName}`, { cause: error });
			}
			if (config.customTransformInput) newValue = config.customTransformInput({
				data: newValue,
				fieldAttributes: fieldAttr,
				field: fieldName,
				model: getModelName(model),
				schema,
				options,
				action
			});
			return {
				operator,
				connector,
				field: fieldName,
				value: newValue
			};
		});
	};
	const transformJoinClause = (baseModel, unsanitizedJoin, select) => {
		if (!unsanitizedJoin) return void 0;
		if (Object.keys(unsanitizedJoin).length === 0) return void 0;
		const transformedJoin = {};
		for (const [model, join] of Object.entries(unsanitizedJoin)) {
			if (!join) continue;
			const defaultModelName = getDefaultModelName(model);
			const defaultBaseModelName = getDefaultModelName(baseModel);
			let foreignKeys = Object.entries(schema[defaultModelName].fields).filter(([field, fieldAttributes]) => fieldAttributes.references && getDefaultModelName(fieldAttributes.references.model) === defaultBaseModelName);
			let isForwardJoin = true;
			if (!foreignKeys.length) {
				foreignKeys = Object.entries(schema[defaultBaseModelName].fields).filter(([field, fieldAttributes]) => fieldAttributes.references && getDefaultModelName(fieldAttributes.references.model) === defaultModelName);
				isForwardJoin = false;
			}
			if (!foreignKeys.length) throw new BetterAuthError(`No foreign key found for model ${model} and base model ${baseModel} while performing join operation.`);
			else if (foreignKeys.length > 1) throw new BetterAuthError(`Multiple foreign keys found for model ${model} and base model ${baseModel} while performing join operation. Only one foreign key is supported.`);
			const [foreignKey, foreignKeyAttributes] = foreignKeys[0];
			if (!foreignKeyAttributes.references) throw new BetterAuthError(`No references found for foreign key ${foreignKey} on model ${model} while performing join operation.`);
			let from;
			let to;
			let requiredSelectField;
			if (isForwardJoin) {
				requiredSelectField = foreignKeyAttributes.references.field;
				from = getFieldName({
					model: baseModel,
					field: requiredSelectField
				});
				to = getFieldName({
					model,
					field: foreignKey
				});
			} else {
				requiredSelectField = foreignKey;
				from = getFieldName({
					model: baseModel,
					field: requiredSelectField
				});
				to = getFieldName({
					model,
					field: foreignKeyAttributes.references.field
				});
			}
			if (select && !select.includes(requiredSelectField)) select.push(requiredSelectField);
			const isUnique = to === "id" ? true : foreignKeyAttributes.unique ?? false;
			let limit = options.advanced?.database?.defaultFindManyLimit ?? 100;
			if (isUnique) limit = 1;
			else if (typeof join === "object" && typeof join.limit === "number") limit = join.limit;
			transformedJoin[getModelName(model)] = {
				on: {
					from,
					to
				},
				limit,
				relation: isUnique ? "one-to-one" : "one-to-many"
			};
		}
		return {
			join: transformedJoin,
			select
		};
	};
	/**
	* Handle joins by making separate queries and combining results (fallback for adapters that don't support native joins).
	*/
	const handleFallbackJoin = async ({ baseModel, baseData, joinModel, specificJoinConfig: joinConfig }) => {
		if (!baseData) return baseData;
		const modelName = getModelName(joinModel);
		const field = joinConfig.on.to;
		const value = baseData[getDefaultFieldName({
			field: joinConfig.on.from,
			model: baseModel
		})];
		if (value === null || value === void 0) return joinConfig.relation === "one-to-one" ? null : [];
		let result;
		const where = transformWhereClause({
			model: modelName,
			where: [{
				field,
				value,
				operator: "eq",
				connector: "AND"
			}],
			action: "findOne"
		});
		try {
			if (joinConfig.relation === "one-to-one") result = await adapterInstance.findOne({
				model: modelName,
				where
			});
			else {
				const limit = joinConfig.limit ?? options.advanced?.database?.defaultFindManyLimit ?? 100;
				result = await adapterInstance.findMany({
					model: modelName,
					where,
					limit
				});
			}
		} catch (error) {
			logger.error(`Failed to query fallback join for model ${modelName}:`, {
				where,
				limit: joinConfig.limit
			});
			console.error(error);
			throw error;
		}
		return result;
	};
	const adapterInstance = customAdapter({
		options,
		schema,
		debugLog,
		getFieldName,
		getModelName,
		getDefaultModelName,
		getDefaultFieldName,
		getFieldAttributes,
		transformInput,
		transformOutput,
		transformWhereClause
	});
	let lazyLoadTransaction = null;
	const adapter = {
		transaction: async (cb) => {
			if (!lazyLoadTransaction) if (!config.transaction) lazyLoadTransaction = createAsIsTransaction(adapter);
			else {
				logger.debug(`[${config.adapterName}] - Using provided transaction implementation.`);
				lazyLoadTransaction = config.transaction;
			}
			return lazyLoadTransaction(cb);
		},
		create: async ({ data: unsafeData, model: unsafeModel, select, forceAllowId = false }) => {
			transactionId++;
			const thisTransactionId = transactionId;
			const model = getModelName(unsafeModel);
			unsafeModel = getDefaultModelName(unsafeModel);
			if ("id" in unsafeData && typeof unsafeData.id !== "undefined" && !forceAllowId) {
				logger.warn(`[${config.adapterName}] - You are trying to create a record with an id. This is not allowed as we handle id generation for you, unless you pass in the \`forceAllowId\` parameter. The id will be ignored.`);
				const stack = (/* @__PURE__ */ new Error()).stack?.split("\n").filter((_, i) => i !== 1).join("\n").replace("Error:", "Create method with `id` being called at:");
				console.log(stack);
				unsafeData.id = void 0;
			}
			debugLog({ method: "create" }, `${formatTransactionId(thisTransactionId)} ${formatStep(1, 4)}`, `${formatMethod("create")} ${formatAction("Unsafe Input")}:`, {
				model,
				data: unsafeData
			});
			let data = unsafeData;
			if (!config.disableTransformInput) data = await transformInput(unsafeData, unsafeModel, "create", forceAllowId);
			debugLog({ method: "create" }, `${formatTransactionId(thisTransactionId)} ${formatStep(2, 4)}`, `${formatMethod("create")} ${formatAction("Parsed Input")}:`, {
				model,
				data
			});
			const res = await adapterInstance.create({
				data,
				model
			});
			debugLog({ method: "create" }, `${formatTransactionId(thisTransactionId)} ${formatStep(3, 4)}`, `${formatMethod("create")} ${formatAction("DB Result")}:`, {
				model,
				res
			});
			let transformed = res;
			if (!config.disableTransformOutput) transformed = await transformOutput(res, unsafeModel, select, void 0);
			debugLog({ method: "create" }, `${formatTransactionId(thisTransactionId)} ${formatStep(4, 4)}`, `${formatMethod("create")} ${formatAction("Parsed Result")}:`, {
				model,
				data: transformed
			});
			return transformed;
		},
		update: async ({ model: unsafeModel, where: unsafeWhere, update: unsafeData }) => {
			transactionId++;
			const thisTransactionId = transactionId;
			unsafeModel = getDefaultModelName(unsafeModel);
			const model = getModelName(unsafeModel);
			const where = transformWhereClause({
				model: unsafeModel,
				where: unsafeWhere,
				action: "update"
			});
			debugLog({ method: "update" }, `${formatTransactionId(thisTransactionId)} ${formatStep(1, 4)}`, `${formatMethod("update")} ${formatAction("Unsafe Input")}:`, {
				model,
				data: unsafeData
			});
			let data = unsafeData;
			if (!config.disableTransformInput) data = await transformInput(unsafeData, unsafeModel, "update");
			debugLog({ method: "update" }, `${formatTransactionId(thisTransactionId)} ${formatStep(2, 4)}`, `${formatMethod("update")} ${formatAction("Parsed Input")}:`, {
				model,
				data
			});
			const res = await adapterInstance.update({
				model,
				where,
				update: data
			});
			debugLog({ method: "update" }, `${formatTransactionId(thisTransactionId)} ${formatStep(3, 4)}`, `${formatMethod("update")} ${formatAction("DB Result")}:`, {
				model,
				data: res
			});
			let transformed = res;
			if (!config.disableTransformOutput) transformed = await transformOutput(res, unsafeModel, void 0, void 0);
			debugLog({ method: "update" }, `${formatTransactionId(thisTransactionId)} ${formatStep(4, 4)}`, `${formatMethod("update")} ${formatAction("Parsed Result")}:`, {
				model,
				data: transformed
			});
			return transformed;
		},
		updateMany: async ({ model: unsafeModel, where: unsafeWhere, update: unsafeData }) => {
			transactionId++;
			const thisTransactionId = transactionId;
			const model = getModelName(unsafeModel);
			const where = transformWhereClause({
				model: unsafeModel,
				where: unsafeWhere,
				action: "updateMany"
			});
			unsafeModel = getDefaultModelName(unsafeModel);
			debugLog({ method: "updateMany" }, `${formatTransactionId(thisTransactionId)} ${formatStep(1, 4)}`, `${formatMethod("updateMany")} ${formatAction("Unsafe Input")}:`, {
				model,
				data: unsafeData
			});
			let data = unsafeData;
			if (!config.disableTransformInput) data = await transformInput(unsafeData, unsafeModel, "update");
			debugLog({ method: "updateMany" }, `${formatTransactionId(thisTransactionId)} ${formatStep(2, 4)}`, `${formatMethod("updateMany")} ${formatAction("Parsed Input")}:`, {
				model,
				data
			});
			const updatedCount = await adapterInstance.updateMany({
				model,
				where,
				update: data
			});
			debugLog({ method: "updateMany" }, `${formatTransactionId(thisTransactionId)} ${formatStep(3, 4)}`, `${formatMethod("updateMany")} ${formatAction("DB Result")}:`, {
				model,
				data: updatedCount
			});
			debugLog({ method: "updateMany" }, `${formatTransactionId(thisTransactionId)} ${formatStep(4, 4)}`, `${formatMethod("updateMany")} ${formatAction("Parsed Result")}:`, {
				model,
				data: updatedCount
			});
			return updatedCount;
		},
		findOne: async ({ model: unsafeModel, where: unsafeWhere, select, join: unsafeJoin }) => {
			transactionId++;
			const thisTransactionId = transactionId;
			const model = getModelName(unsafeModel);
			const where = transformWhereClause({
				model: unsafeModel,
				where: unsafeWhere,
				action: "findOne"
			});
			unsafeModel = getDefaultModelName(unsafeModel);
			let join;
			let passJoinToAdapter = true;
			if (!config.disableTransformJoin) {
				const result = transformJoinClause(unsafeModel, unsafeJoin, select);
				if (result) {
					join = result.join;
					select = result.select;
				}
				if (!options.experimental?.joins && join && Object.keys(join).length > 0) passJoinToAdapter = false;
			} else join = unsafeJoin;
			debugLog({ method: "findOne" }, `${formatTransactionId(thisTransactionId)} ${formatStep(1, 3)}`, `${formatMethod("findOne")}:`, {
				model,
				where,
				select,
				join
			});
			const res = await adapterInstance.findOne({
				model,
				where,
				select,
				join: passJoinToAdapter ? join : void 0
			});
			debugLog({ method: "findOne" }, `${formatTransactionId(thisTransactionId)} ${formatStep(2, 3)}`, `${formatMethod("findOne")} ${formatAction("DB Result")}:`, {
				model,
				data: res
			});
			let transformed = res;
			if (!config.disableTransformOutput) transformed = await transformOutput(res, unsafeModel, select, join);
			debugLog({ method: "findOne" }, `${formatTransactionId(thisTransactionId)} ${formatStep(3, 3)}`, `${formatMethod("findOne")} ${formatAction("Parsed Result")}:`, {
				model,
				data: transformed
			});
			return transformed;
		},
		findMany: async ({ model: unsafeModel, where: unsafeWhere, limit: unsafeLimit, select, sortBy, offset, join: unsafeJoin }) => {
			transactionId++;
			const thisTransactionId = transactionId;
			const limit = unsafeLimit ?? options.advanced?.database?.defaultFindManyLimit ?? 100;
			const model = getModelName(unsafeModel);
			const where = transformWhereClause({
				model: unsafeModel,
				where: unsafeWhere,
				action: "findMany"
			});
			unsafeModel = getDefaultModelName(unsafeModel);
			let join;
			let passJoinToAdapter = true;
			if (!config.disableTransformJoin) {
				const result = transformJoinClause(unsafeModel, unsafeJoin, select);
				if (result) {
					join = result.join;
					select = result.select;
				}
				if (!options.experimental?.joins && join && Object.keys(join).length > 0) passJoinToAdapter = false;
			} else join = unsafeJoin;
			debugLog({ method: "findMany" }, `${formatTransactionId(thisTransactionId)} ${formatStep(1, 3)}`, `${formatMethod("findMany")}:`, {
				model,
				where,
				limit,
				sortBy,
				offset,
				join
			});
			const res = await adapterInstance.findMany({
				model,
				where,
				limit,
				select,
				sortBy,
				offset,
				join: passJoinToAdapter ? join : void 0
			});
			debugLog({ method: "findMany" }, `${formatTransactionId(thisTransactionId)} ${formatStep(2, 3)}`, `${formatMethod("findMany")} ${formatAction("DB Result")}:`, {
				model,
				data: res
			});
			let transformed = res;
			if (!config.disableTransformOutput) transformed = await Promise.all(res.map(async (r) => {
				return await transformOutput(r, unsafeModel, void 0, join);
			}));
			debugLog({ method: "findMany" }, `${formatTransactionId(thisTransactionId)} ${formatStep(3, 3)}`, `${formatMethod("findMany")} ${formatAction("Parsed Result")}:`, {
				model,
				data: transformed
			});
			return transformed;
		},
		delete: async ({ model: unsafeModel, where: unsafeWhere }) => {
			transactionId++;
			const thisTransactionId = transactionId;
			const model = getModelName(unsafeModel);
			const where = transformWhereClause({
				model: unsafeModel,
				where: unsafeWhere,
				action: "delete"
			});
			unsafeModel = getDefaultModelName(unsafeModel);
			debugLog({ method: "delete" }, `${formatTransactionId(thisTransactionId)} ${formatStep(1, 2)}`, `${formatMethod("delete")}:`, {
				model,
				where
			});
			await adapterInstance.delete({
				model,
				where
			});
			debugLog({ method: "delete" }, `${formatTransactionId(thisTransactionId)} ${formatStep(2, 2)}`, `${formatMethod("delete")} ${formatAction("DB Result")}:`, { model });
		},
		deleteMany: async ({ model: unsafeModel, where: unsafeWhere }) => {
			transactionId++;
			const thisTransactionId = transactionId;
			const model = getModelName(unsafeModel);
			const where = transformWhereClause({
				model: unsafeModel,
				where: unsafeWhere,
				action: "deleteMany"
			});
			unsafeModel = getDefaultModelName(unsafeModel);
			debugLog({ method: "deleteMany" }, `${formatTransactionId(thisTransactionId)} ${formatStep(1, 2)}`, `${formatMethod("deleteMany")} ${formatAction("DeleteMany")}:`, {
				model,
				where
			});
			const res = await adapterInstance.deleteMany({
				model,
				where
			});
			debugLog({ method: "deleteMany" }, `${formatTransactionId(thisTransactionId)} ${formatStep(2, 2)}`, `${formatMethod("deleteMany")} ${formatAction("DB Result")}:`, {
				model,
				data: res
			});
			return res;
		},
		count: async ({ model: unsafeModel, where: unsafeWhere }) => {
			transactionId++;
			const thisTransactionId = transactionId;
			const model = getModelName(unsafeModel);
			const where = transformWhereClause({
				model: unsafeModel,
				where: unsafeWhere,
				action: "count"
			});
			unsafeModel = getDefaultModelName(unsafeModel);
			debugLog({ method: "count" }, `${formatTransactionId(thisTransactionId)} ${formatStep(1, 2)}`, `${formatMethod("count")}:`, {
				model,
				where
			});
			const res = await adapterInstance.count({
				model,
				where
			});
			debugLog({ method: "count" }, `${formatTransactionId(thisTransactionId)} ${formatStep(2, 2)}`, `${formatMethod("count")}:`, {
				model,
				data: res
			});
			return res;
		},
		createSchema: adapterInstance.createSchema ? async (_, file) => {
			const tables = getAuthTables(options);
			if (options.secondaryStorage && !options.session?.storeSessionInDatabase) delete tables.session;
			return adapterInstance.createSchema({
				file,
				tables
			});
		} : void 0,
		options: {
			adapterConfig: config,
			...adapterInstance.options ?? {}
		},
		id: config.adapterId,
		...config.debugLogs?.isRunningAdapterTests ? { adapterTestDebugLogs: {
			resetDebugLogs() {
				debugLogs = debugLogs.filter((log) => log.instance !== uniqueAdapterFactoryInstanceId);
			},
			printDebugLogs() {
				const separator = `─`.repeat(80);
				const logs = debugLogs.filter((log) => log.instance === uniqueAdapterFactoryInstanceId);
				if (logs.length === 0) return;
				const log = logs.reverse().map((log) => {
					log.args[0] = `\n${log.args[0]}`;
					return [...log.args, "\n"];
				}).reduce((prev, curr) => {
					return [...curr, ...prev];
				}, [`\n${separator}`]);
				console.log(...log);
			}
		} } : {}
	};
	return adapter;
};
function formatTransactionId(transactionId) {
	if (getColorDepth() < 8) return `#${transactionId}`;
	return `${TTY_COLORS.fg.magenta}#${transactionId}${TTY_COLORS.reset}`;
}
function formatStep(step, total) {
	return `${TTY_COLORS.bg.black}${TTY_COLORS.fg.yellow}[${step}/${total}]${TTY_COLORS.reset}`;
}
function formatMethod(method) {
	return `${TTY_COLORS.bright}${method}${TTY_COLORS.reset}`;
}
function formatAction(action) {
	return `${TTY_COLORS.dim}(${action})${TTY_COLORS.reset}`;
}
//#endregion
//#region node_modules/@better-auth/core/dist/db/adapter/index.mjs
var whereOperators = [
	"eq",
	"ne",
	"lt",
	"lte",
	"gt",
	"gte",
	"in",
	"not_in",
	"contains",
	"starts_with",
	"ends_with"
];
//#endregion
//#region node_modules/@better-auth/core/dist/utils/string.mjs
function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
//#endregion
//#region node_modules/@better-auth/core/dist/context/transaction.mjs
var ensureAsyncStorage = async () => {
	const betterAuthGlobal = __getBetterAuthGlobal();
	if (!betterAuthGlobal.context.adapterAsyncStorage) {
		const AsyncLocalStorage = await getAsyncLocalStorage();
		betterAuthGlobal.context.adapterAsyncStorage = new AsyncLocalStorage();
	}
	return betterAuthGlobal.context.adapterAsyncStorage;
};
var getCurrentAdapter = async (fallback) => {
	return ensureAsyncStorage().then((als) => {
		return als.getStore()?.adapter || fallback;
	}).catch(() => {
		return fallback;
	});
};
var runWithAdapter = async (adapter, fn) => {
	let called = false;
	return ensureAsyncStorage().then(async (als) => {
		called = true;
		const pendingHooks = [];
		let result;
		let error;
		let hasError = false;
		try {
			result = await als.run({
				adapter,
				pendingHooks
			}, fn);
		} catch (err) {
			error = err;
			hasError = true;
		}
		for (const hook of pendingHooks) await hook();
		if (hasError) throw error;
		return result;
	}).catch((err) => {
		if (!called) return fn();
		throw err;
	});
};
var runWithTransaction = async (adapter, fn) => {
	let called = true;
	return ensureAsyncStorage().then(async (als) => {
		called = true;
		const pendingHooks = [];
		let result;
		let error;
		let hasError = false;
		try {
			result = await adapter.transaction(async (trx) => {
				return als.run({
					adapter: trx,
					pendingHooks
				}, fn);
			});
		} catch (e) {
			hasError = true;
			error = e;
		}
		for (const hook of pendingHooks) await hook();
		if (hasError) throw error;
		return result;
	}).catch((err) => {
		if (!called) return fn();
		throw err;
	});
};
/**
* Queue a hook to be executed after the current transaction commits.
* If not in a transaction, the hook will execute immediately.
*/
var queueAfterTransactionHook = async (hook) => {
	return ensureAsyncStorage().then((als) => {
		const store = als.getStore();
		if (store) store.pendingHooks.push(hook);
		else return hook();
	}).catch(() => {
		return hook();
	});
};
//#endregion
//#region node_modules/jose/dist/webapi/jwks/local.js
function getKtyFromAlg(alg) {
	switch (typeof alg === "string" && alg.slice(0, 2)) {
		case "RS":
		case "PS": return "RSA";
		case "ES": return "EC";
		case "Ed": return "OKP";
		case "ML": return "AKP";
		default: throw new JOSENotSupported("Unsupported \"alg\" value for a JSON Web Key Set");
	}
}
function isJWKSLike(jwks) {
	return jwks && typeof jwks === "object" && Array.isArray(jwks.keys) && jwks.keys.every(isJWKLike);
}
function isJWKLike(key) {
	return isObject(key);
}
var LocalJWKSet = class {
	#jwks;
	#cached = /* @__PURE__ */ new WeakMap();
	constructor(jwks) {
		if (!isJWKSLike(jwks)) throw new JWKSInvalid("JSON Web Key Set malformed");
		this.#jwks = structuredClone(jwks);
	}
	jwks() {
		return this.#jwks;
	}
	async getKey(protectedHeader, token) {
		const { alg, kid } = {
			...protectedHeader,
			...token?.header
		};
		const kty = getKtyFromAlg(alg);
		const candidates = this.#jwks.keys.filter((jwk) => {
			let candidate = kty === jwk.kty;
			if (candidate && typeof kid === "string") candidate = kid === jwk.kid;
			if (candidate && (typeof jwk.alg === "string" || kty === "AKP")) candidate = alg === jwk.alg;
			if (candidate && typeof jwk.use === "string") candidate = jwk.use === "sig";
			if (candidate && Array.isArray(jwk.key_ops)) candidate = jwk.key_ops.includes("verify");
			if (candidate) switch (alg) {
				case "ES256":
					candidate = jwk.crv === "P-256";
					break;
				case "ES384":
					candidate = jwk.crv === "P-384";
					break;
				case "ES512":
					candidate = jwk.crv === "P-521";
					break;
				case "Ed25519":
				case "EdDSA":
					candidate = jwk.crv === "Ed25519";
					break;
			}
			return candidate;
		});
		const { 0: jwk, length } = candidates;
		if (length === 0) throw new JWKSNoMatchingKey();
		if (length !== 1) {
			const error = new JWKSMultipleMatchingKeys();
			const _cached = this.#cached;
			error[Symbol.asyncIterator] = async function* () {
				for (const jwk of candidates) try {
					yield await importWithAlgCache(_cached, jwk, alg);
				} catch {}
			};
			throw error;
		}
		return importWithAlgCache(this.#cached, jwk, alg);
	}
};
async function importWithAlgCache(cache, jwk, alg) {
	const cached = cache.get(jwk) || cache.set(jwk, {}).get(jwk);
	if (cached[alg] === void 0) {
		const key = await importJWK({
			...jwk,
			ext: true
		}, alg);
		if (key instanceof Uint8Array || key.type !== "public") throw new JWKSInvalid("JSON Web Key Set members must be public keys");
		cached[alg] = key;
	}
	return cached[alg];
}
function createLocalJWKSet(jwks) {
	const set = new LocalJWKSet(jwks);
	const localJWKSet = async (protectedHeader, token) => set.getKey(protectedHeader, token);
	Object.defineProperties(localJWKSet, { jwks: {
		value: () => structuredClone(set.jwks()),
		enumerable: false,
		configurable: false,
		writable: false
	} });
	return localJWKSet;
}
//#endregion
//#region node_modules/jose/dist/webapi/jwks/remote.js
function isCloudflareWorkers() {
	return typeof WebSocketPair !== "undefined" || typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers" || typeof EdgeRuntime !== "undefined" && EdgeRuntime === "vercel";
}
var USER_AGENT;
if (typeof navigator === "undefined" || !navigator.userAgent?.startsWith?.("Mozilla/5.0 ")) USER_AGENT = `jose/v6.2.1`;
var customFetch = Symbol();
async function fetchJwks(url, headers, signal, fetchImpl = fetch) {
	const response = await fetchImpl(url, {
		method: "GET",
		signal,
		redirect: "manual",
		headers
	}).catch((err) => {
		if (err.name === "TimeoutError") throw new JWKSTimeout();
		throw err;
	});
	if (response.status !== 200) throw new JOSEError("Expected 200 OK from the JSON Web Key Set HTTP response");
	try {
		return await response.json();
	} catch {
		throw new JOSEError("Failed to parse the JSON Web Key Set HTTP response as JSON");
	}
}
var jwksCache = Symbol();
function isFreshJwksCache(input, cacheMaxAge) {
	if (typeof input !== "object" || input === null) return false;
	if (!("uat" in input) || typeof input.uat !== "number" || Date.now() - input.uat >= cacheMaxAge) return false;
	if (!("jwks" in input) || !isObject(input.jwks) || !Array.isArray(input.jwks.keys) || !Array.prototype.every.call(input.jwks.keys, isObject)) return false;
	return true;
}
var RemoteJWKSet = class {
	#url;
	#timeoutDuration;
	#cooldownDuration;
	#cacheMaxAge;
	#jwksTimestamp;
	#pendingFetch;
	#headers;
	#customFetch;
	#local;
	#cache;
	constructor(url, options) {
		if (!(url instanceof URL)) throw new TypeError("url must be an instance of URL");
		this.#url = new URL(url.href);
		this.#timeoutDuration = typeof options?.timeoutDuration === "number" ? options?.timeoutDuration : 5e3;
		this.#cooldownDuration = typeof options?.cooldownDuration === "number" ? options?.cooldownDuration : 3e4;
		this.#cacheMaxAge = typeof options?.cacheMaxAge === "number" ? options?.cacheMaxAge : 6e5;
		this.#headers = new Headers(options?.headers);
		if (USER_AGENT && !this.#headers.has("User-Agent")) this.#headers.set("User-Agent", USER_AGENT);
		if (!this.#headers.has("accept")) {
			this.#headers.set("accept", "application/json");
			this.#headers.append("accept", "application/jwk-set+json");
		}
		this.#customFetch = options?.[customFetch];
		if (options?.[jwksCache] !== void 0) {
			this.#cache = options?.[jwksCache];
			if (isFreshJwksCache(options?.[jwksCache], this.#cacheMaxAge)) {
				this.#jwksTimestamp = this.#cache.uat;
				this.#local = createLocalJWKSet(this.#cache.jwks);
			}
		}
	}
	pendingFetch() {
		return !!this.#pendingFetch;
	}
	coolingDown() {
		return typeof this.#jwksTimestamp === "number" ? Date.now() < this.#jwksTimestamp + this.#cooldownDuration : false;
	}
	fresh() {
		return typeof this.#jwksTimestamp === "number" ? Date.now() < this.#jwksTimestamp + this.#cacheMaxAge : false;
	}
	jwks() {
		return this.#local?.jwks();
	}
	async getKey(protectedHeader, token) {
		if (!this.#local || !this.fresh()) await this.reload();
		try {
			return await this.#local(protectedHeader, token);
		} catch (err) {
			if (err instanceof JWKSNoMatchingKey) {
				if (this.coolingDown() === false) {
					await this.reload();
					return this.#local(protectedHeader, token);
				}
			}
			throw err;
		}
	}
	async reload() {
		if (this.#pendingFetch && isCloudflareWorkers()) this.#pendingFetch = void 0;
		this.#pendingFetch ||= fetchJwks(this.#url.href, this.#headers, AbortSignal.timeout(this.#timeoutDuration), this.#customFetch).then((json) => {
			this.#local = createLocalJWKSet(json);
			if (this.#cache) {
				this.#cache.uat = Date.now();
				this.#cache.jwks = json;
			}
			this.#jwksTimestamp = Date.now();
			this.#pendingFetch = void 0;
		}).catch((err) => {
			this.#pendingFetch = void 0;
			throw err;
		});
		await this.#pendingFetch;
	}
};
function createRemoteJWKSet(url, options) {
	const set = new RemoteJWKSet(url, options);
	const remoteJWKSet = async (protectedHeader, token) => set.getKey(protectedHeader, token);
	Object.defineProperties(remoteJWKSet, {
		coolingDown: {
			get: () => set.coolingDown(),
			enumerable: true,
			configurable: false
		},
		fresh: {
			get: () => set.fresh(),
			enumerable: true,
			configurable: false
		},
		reload: {
			value: () => set.reload(),
			enumerable: true,
			configurable: false,
			writable: false
		},
		reloading: {
			get: () => set.pendingFetch(),
			enumerable: true,
			configurable: false
		},
		jwks: {
			value: () => set.jwks(),
			enumerable: true,
			configurable: false,
			writable: false
		}
	});
	return remoteJWKSet;
}
//#endregion
//#region node_modules/jose/dist/webapi/jwt/unsecured.js
var UnsecuredJWT = class {
	#jwt;
	constructor(payload = {}) {
		this.#jwt = new JWTClaimsBuilder(payload);
	}
	encode() {
		return `${encode(JSON.stringify({ alg: "none" }))}.${encode(this.#jwt.data())}.`;
	}
	setIssuer(issuer) {
		this.#jwt.iss = issuer;
		return this;
	}
	setSubject(subject) {
		this.#jwt.sub = subject;
		return this;
	}
	setAudience(audience) {
		this.#jwt.aud = audience;
		return this;
	}
	setJti(jwtId) {
		this.#jwt.jti = jwtId;
		return this;
	}
	setNotBefore(input) {
		this.#jwt.nbf = input;
		return this;
	}
	setExpirationTime(input) {
		this.#jwt.exp = input;
		return this;
	}
	setIssuedAt(input) {
		this.#jwt.iat = input;
		return this;
	}
	static decode(jwt, options) {
		if (typeof jwt !== "string") throw new JWTInvalid("Unsecured JWT must be a string");
		const { 0: encodedHeader, 1: encodedPayload, 2: signature, length } = jwt.split(".");
		if (length !== 3 || signature !== "") throw new JWTInvalid("Invalid Unsecured JWT");
		let header;
		try {
			header = JSON.parse(decoder.decode(decode(encodedHeader)));
			if (header.alg !== "none") throw new Error();
		} catch {
			throw new JWTInvalid("Invalid Unsecured JWT");
		}
		return {
			payload: validateClaimsSet(header, decode(encodedPayload), options),
			header
		};
	}
};
//#endregion
//#region node_modules/jose/dist/webapi/util/decode_jwt.js
function decodeJwt(jwt) {
	if (typeof jwt !== "string") throw new JWTInvalid("JWTs must use Compact JWS serialization, JWT must be a string");
	const { 1: payload, length } = jwt.split(".");
	if (length === 5) throw new JWTInvalid("Only JWTs using Compact JWS serialization can be decoded");
	if (length !== 3) throw new JWTInvalid("Invalid JWT");
	if (!payload) throw new JWTInvalid("JWTs must contain a payload");
	let decoded;
	try {
		decoded = decode(payload);
	} catch {
		throw new JWTInvalid("Failed to base64url decode the payload");
	}
	let result;
	try {
		result = JSON.parse(decoder.decode(decoded));
	} catch {
		throw new JWTInvalid("Failed to parse the decoded payload as JSON");
	}
	if (!isObject(result)) throw new JWTInvalid("Invalid JWT Claims Set");
	return result;
}
//#endregion
//#region node_modules/@better-auth/core/dist/utils/url.mjs
/**
* Normalizes a request pathname by removing the basePath prefix and trailing slashes.
* This is useful for matching paths against configured path lists.
*
* @param requestUrl - The full request URL
* @param basePath - The base path of the auth API (e.g., "/api/auth")
* @returns The normalized path without basePath prefix or trailing slashes,
*          or "/" if URL parsing fails
*
* @example
* normalizePathname("http://localhost:3000/api/auth/sso/saml2/callback/provider1", "/api/auth")
* // Returns: "/sso/saml2/callback/provider1"
*
* normalizePathname("http://localhost:3000/sso/saml2/callback/provider1/", "/")
* // Returns: "/sso/saml2/callback/provider1"
*/
function normalizePathname(requestUrl, basePath) {
	let pathname;
	try {
		pathname = new URL(requestUrl).pathname.replace(/\/+$/, "") || "/";
	} catch {
		return "/";
	}
	if (basePath === "/" || basePath === "") return pathname;
	if (pathname === basePath) return "/";
	if (pathname.startsWith(basePath + "/")) return pathname.slice(basePath.length).replace(/\/+$/, "") || "/";
	return pathname;
}
//#endregion
//#region node_modules/@better-auth/core/dist/utils/deprecate.mjs
/**
* Wraps a function to log a deprecation warning at once.
*/
function deprecate(fn, message, logger) {
	let warned = false;
	return function(...args) {
		if (!warned) {
			(logger?.warn ?? console.warn)(`[Deprecation] ${message}`);
			warned = true;
		}
		return fn.apply(this, args);
	};
}
//#endregion
//#region node_modules/@better-auth/core/dist/oauth2/utils.mjs
function getOAuth2Tokens(data) {
	const getDate = (seconds) => {
		const now = /* @__PURE__ */ new Date();
		return new Date(now.getTime() + seconds * 1e3);
	};
	return {
		tokenType: data.token_type,
		accessToken: data.access_token,
		refreshToken: data.refresh_token,
		accessTokenExpiresAt: data.expires_in ? getDate(data.expires_in) : void 0,
		refreshTokenExpiresAt: data.refresh_token_expires_in ? getDate(data.refresh_token_expires_in) : void 0,
		scopes: data?.scope ? typeof data.scope === "string" ? data.scope.split(" ") : data.scope : [],
		idToken: data.id_token,
		raw: data
	};
}
async function generateCodeChallenge(codeVerifier) {
	const data = new TextEncoder().encode(codeVerifier);
	const hash = await crypto.subtle.digest("SHA-256", data);
	return base64Url.encode(new Uint8Array(hash), { padding: false });
}
//#endregion
//#region node_modules/@better-auth/core/dist/oauth2/create-authorization-url.mjs
async function createAuthorizationURL({ id, options, authorizationEndpoint, state, codeVerifier, scopes, claims, redirectURI, duration, prompt, accessType, responseType, display, loginHint, hd, responseMode, additionalParams, scopeJoiner }) {
	options = typeof options === "function" ? await options() : options;
	const url = new URL(options.authorizationEndpoint || authorizationEndpoint);
	url.searchParams.set("response_type", responseType || "code");
	const primaryClientId = Array.isArray(options.clientId) ? options.clientId[0] : options.clientId;
	url.searchParams.set("client_id", primaryClientId);
	url.searchParams.set("state", state);
	if (scopes) url.searchParams.set("scope", scopes.join(scopeJoiner || " "));
	url.searchParams.set("redirect_uri", options.redirectURI || redirectURI);
	duration && url.searchParams.set("duration", duration);
	display && url.searchParams.set("display", display);
	loginHint && url.searchParams.set("login_hint", loginHint);
	prompt && url.searchParams.set("prompt", prompt);
	hd && url.searchParams.set("hd", hd);
	accessType && url.searchParams.set("access_type", accessType);
	responseMode && url.searchParams.set("response_mode", responseMode);
	if (codeVerifier) {
		const codeChallenge = await generateCodeChallenge(codeVerifier);
		url.searchParams.set("code_challenge_method", "S256");
		url.searchParams.set("code_challenge", codeChallenge);
	}
	if (claims) {
		const claimsObj = claims.reduce((acc, claim) => {
			acc[claim] = null;
			return acc;
		}, {});
		url.searchParams.set("claims", JSON.stringify({ id_token: {
			email: null,
			email_verified: null,
			...claimsObj
		} }));
	}
	if (additionalParams) Object.entries(additionalParams).forEach(([key, value]) => {
		url.searchParams.set(key, value);
	});
	return url;
}
//#endregion
//#region node_modules/@better-fetch/fetch/dist/index.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
	for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
	if (__getOwnPropSymbols) {
		for (var prop of __getOwnPropSymbols(b)) if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
	}
	return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var BetterFetchError = class extends Error {
	constructor(status, statusText, error) {
		super(statusText || status.toString(), { cause: error });
		this.status = status;
		this.statusText = statusText;
		this.error = error;
		Error.captureStackTrace(this, this.constructor);
	}
};
var initializePlugins = async (url, options) => {
	var _a, _b, _c, _d, _e, _f;
	let opts = options || {};
	const hooks = {
		onRequest: [options == null ? void 0 : options.onRequest],
		onResponse: [options == null ? void 0 : options.onResponse],
		onSuccess: [options == null ? void 0 : options.onSuccess],
		onError: [options == null ? void 0 : options.onError],
		onRetry: [options == null ? void 0 : options.onRetry]
	};
	if (!options || !(options == null ? void 0 : options.plugins)) return {
		url,
		options: opts,
		hooks
	};
	for (const plugin of (options == null ? void 0 : options.plugins) || []) {
		if (plugin.init) {
			const pluginRes = await ((_a = plugin.init) == null ? void 0 : _a.call(plugin, url.toString(), options));
			opts = pluginRes.options || opts;
			url = pluginRes.url;
		}
		hooks.onRequest.push((_b = plugin.hooks) == null ? void 0 : _b.onRequest);
		hooks.onResponse.push((_c = plugin.hooks) == null ? void 0 : _c.onResponse);
		hooks.onSuccess.push((_d = plugin.hooks) == null ? void 0 : _d.onSuccess);
		hooks.onError.push((_e = plugin.hooks) == null ? void 0 : _e.onError);
		hooks.onRetry.push((_f = plugin.hooks) == null ? void 0 : _f.onRetry);
	}
	return {
		url,
		options: opts,
		hooks
	};
};
var LinearRetryStrategy = class {
	constructor(options) {
		this.options = options;
	}
	shouldAttemptRetry(attempt, response) {
		if (this.options.shouldRetry) return Promise.resolve(attempt < this.options.attempts && this.options.shouldRetry(response));
		return Promise.resolve(attempt < this.options.attempts);
	}
	getDelay() {
		return this.options.delay;
	}
};
var ExponentialRetryStrategy = class {
	constructor(options) {
		this.options = options;
	}
	shouldAttemptRetry(attempt, response) {
		if (this.options.shouldRetry) return Promise.resolve(attempt < this.options.attempts && this.options.shouldRetry(response));
		return Promise.resolve(attempt < this.options.attempts);
	}
	getDelay(attempt) {
		return Math.min(this.options.maxDelay, this.options.baseDelay * 2 ** attempt);
	}
};
function createRetryStrategy(options) {
	if (typeof options === "number") return new LinearRetryStrategy({
		type: "linear",
		attempts: options,
		delay: 1e3
	});
	switch (options.type) {
		case "linear": return new LinearRetryStrategy(options);
		case "exponential": return new ExponentialRetryStrategy(options);
		default: throw new Error("Invalid retry strategy");
	}
}
var getAuthHeader = async (options) => {
	const headers = {};
	const getValue = async (value) => typeof value === "function" ? await value() : value;
	if (options == null ? void 0 : options.auth) {
		if (options.auth.type === "Bearer") {
			const token = await getValue(options.auth.token);
			if (!token) return headers;
			headers["authorization"] = `Bearer ${token}`;
		} else if (options.auth.type === "Basic") {
			const [username, password] = await Promise.all([getValue(options.auth.username), getValue(options.auth.password)]);
			if (!username || !password) return headers;
			headers["authorization"] = `Basic ${btoa(`${username}:${password}`)}`;
		} else if (options.auth.type === "Custom") {
			const [prefix, value] = await Promise.all([getValue(options.auth.prefix), getValue(options.auth.value)]);
			if (!value) return headers;
			headers["authorization"] = `${prefix != null ? prefix : ""} ${value}`;
		}
	}
	return headers;
};
var JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(request) {
	const _contentType = request.headers.get("content-type");
	const textTypes = /* @__PURE__ */ new Set([
		"image/svg",
		"application/xml",
		"application/xhtml",
		"application/html"
	]);
	if (!_contentType) return "json";
	const contentType = _contentType.split(";").shift() || "";
	if (JSON_RE.test(contentType)) return "json";
	if (textTypes.has(contentType) || contentType.startsWith("text/")) return "text";
	return "blob";
}
function isJSONParsable(value) {
	try {
		JSON.parse(value);
		return true;
	} catch (error) {
		return false;
	}
}
function isJSONSerializable(value) {
	if (value === void 0) return false;
	const t = typeof value;
	if (t === "string" || t === "number" || t === "boolean" || t === null) return true;
	if (t !== "object") return false;
	if (Array.isArray(value)) return true;
	if (value.buffer) return false;
	return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
function jsonParse(text) {
	try {
		return JSON.parse(text);
	} catch (error) {
		return text;
	}
}
function isFunction(value) {
	return typeof value === "function";
}
function getFetch(options) {
	if (options == null ? void 0 : options.customFetchImpl) return options.customFetchImpl;
	if (typeof globalThis !== "undefined" && isFunction(globalThis.fetch)) return globalThis.fetch;
	if (typeof window !== "undefined" && isFunction(window.fetch)) return window.fetch;
	throw new Error("No fetch implementation found");
}
async function getHeaders(opts) {
	const headers = new Headers(opts == null ? void 0 : opts.headers);
	const authHeader = await getAuthHeader(opts);
	for (const [key, value] of Object.entries(authHeader || {})) headers.set(key, value);
	if (!headers.has("content-type")) {
		const t = detectContentType(opts == null ? void 0 : opts.body);
		if (t) headers.set("content-type", t);
	}
	return headers;
}
function detectContentType(body) {
	if (isJSONSerializable(body)) return "application/json";
	return null;
}
function getBody(options) {
	if (!(options == null ? void 0 : options.body)) return null;
	const headers = new Headers(options == null ? void 0 : options.headers);
	if (isJSONSerializable(options.body) && !headers.has("content-type")) {
		for (const [key, value] of Object.entries(options == null ? void 0 : options.body)) if (value instanceof Date) options.body[key] = value.toISOString();
		return JSON.stringify(options.body);
	}
	if (headers.has("content-type") && headers.get("content-type") === "application/x-www-form-urlencoded") {
		if (isJSONSerializable(options.body)) return new URLSearchParams(options.body).toString();
		return options.body;
	}
	return options.body;
}
function getMethod(url, options) {
	var _a;
	if (options == null ? void 0 : options.method) return options.method.toUpperCase();
	if (url.startsWith("@")) {
		const pMethod = (_a = url.split("@")[1]) == null ? void 0 : _a.split("/")[0];
		if (!methods.includes(pMethod)) return (options == null ? void 0 : options.body) ? "POST" : "GET";
		return pMethod.toUpperCase();
	}
	return (options == null ? void 0 : options.body) ? "POST" : "GET";
}
function getTimeout(options, controller) {
	let abortTimeout;
	if (!(options == null ? void 0 : options.signal) && (options == null ? void 0 : options.timeout)) abortTimeout = setTimeout(() => controller == null ? void 0 : controller.abort(), options == null ? void 0 : options.timeout);
	return {
		abortTimeout,
		clearTimeout: () => {
			if (abortTimeout) clearTimeout(abortTimeout);
		}
	};
}
var ValidationError = class _ValidationError extends Error {
	constructor(issues, message) {
		super(message || JSON.stringify(issues, null, 2));
		this.issues = issues;
		Object.setPrototypeOf(this, _ValidationError.prototype);
	}
};
async function parseStandardSchema(schema, input) {
	const result = await schema["~standard"].validate(input);
	if (result.issues) throw new ValidationError(result.issues);
	return result.value;
}
var methods = [
	"get",
	"post",
	"put",
	"patch",
	"delete"
];
var applySchemaPlugin = (config) => ({
	id: "apply-schema",
	name: "Apply Schema",
	version: "1.0.0",
	async init(url, options) {
		var _a, _b, _c, _d;
		const schema = ((_b = (_a = config.plugins) == null ? void 0 : _a.find((plugin) => {
			var _a2;
			return ((_a2 = plugin.schema) == null ? void 0 : _a2.config) ? url.startsWith(plugin.schema.config.baseURL || "") || url.startsWith(plugin.schema.config.prefix || "") : false;
		})) == null ? void 0 : _b.schema) || config.schema;
		if (schema) {
			let urlKey = url;
			if ((_c = schema.config) == null ? void 0 : _c.prefix) {
				if (urlKey.startsWith(schema.config.prefix)) {
					urlKey = urlKey.replace(schema.config.prefix, "");
					if (schema.config.baseURL) url = url.replace(schema.config.prefix, schema.config.baseURL);
				}
			}
			if ((_d = schema.config) == null ? void 0 : _d.baseURL) {
				if (urlKey.startsWith(schema.config.baseURL)) urlKey = urlKey.replace(schema.config.baseURL, "");
			}
			const keySchema = schema.schema[urlKey];
			if (keySchema) {
				let opts = __spreadProps(__spreadValues({}, options), {
					method: keySchema.method,
					output: keySchema.output
				});
				if (!(options == null ? void 0 : options.disableValidation)) opts = __spreadProps(__spreadValues({}, opts), {
					body: keySchema.input ? await parseStandardSchema(keySchema.input, options == null ? void 0 : options.body) : options == null ? void 0 : options.body,
					params: keySchema.params ? await parseStandardSchema(keySchema.params, options == null ? void 0 : options.params) : options == null ? void 0 : options.params,
					query: keySchema.query ? await parseStandardSchema(keySchema.query, options == null ? void 0 : options.query) : options == null ? void 0 : options.query
				});
				return {
					url,
					options: opts
				};
			}
		}
		return {
			url,
			options
		};
	}
});
var createFetch = (config) => {
	async function $fetch(url, options) {
		const opts = __spreadProps(__spreadValues(__spreadValues({}, config), options), { plugins: [
			...(config == null ? void 0 : config.plugins) || [],
			applySchemaPlugin(config || {}),
			...(options == null ? void 0 : options.plugins) || []
		] });
		if (config == null ? void 0 : config.catchAllError) try {
			return await betterFetch(url, opts);
		} catch (error) {
			return {
				data: null,
				error: {
					status: 500,
					statusText: "Fetch Error",
					message: "Fetch related error. Captured by catchAllError option. See error property for more details.",
					error
				}
			};
		}
		return await betterFetch(url, opts);
	}
	return $fetch;
};
function getURL2(url, option) {
	const { baseURL, params, query } = option || {
		query: {},
		params: {},
		baseURL: ""
	};
	let basePath = url.startsWith("http") ? url.split("/").slice(0, 3).join("/") : baseURL || "";
	if (url.startsWith("@")) {
		const m = url.toString().split("@")[1].split("/")[0];
		if (methods.includes(m)) url = url.replace(`@${m}/`, "/");
	}
	if (!basePath.endsWith("/")) basePath += "/";
	let [path, urlQuery] = url.replace(basePath, "").split("?");
	const queryParams = new URLSearchParams(urlQuery);
	for (const [key, value] of Object.entries(query || {})) {
		if (value == null) continue;
		let serializedValue;
		if (typeof value === "string") serializedValue = value;
		else if (Array.isArray(value)) {
			for (const val of value) queryParams.append(key, val);
			continue;
		} else serializedValue = JSON.stringify(value);
		queryParams.set(key, serializedValue);
	}
	if (params) if (Array.isArray(params)) {
		const paramPaths = path.split("/").filter((p) => p.startsWith(":"));
		for (const [index, key] of paramPaths.entries()) {
			const value = params[index];
			path = path.replace(key, value);
		}
	} else for (const [key, value] of Object.entries(params)) path = path.replace(`:${key}`, String(value));
	path = path.split("/").map(encodeURIComponent).join("/");
	if (path.startsWith("/")) path = path.slice(1);
	let queryParamString = queryParams.toString();
	queryParamString = queryParamString.length > 0 ? `?${queryParamString}`.replace(/\+/g, "%20") : "";
	if (!basePath.startsWith("http")) return `${basePath}${path}${queryParamString}`;
	return new URL(`${path}${queryParamString}`, basePath);
}
var betterFetch = async (url, options) => {
	var _a, _b, _c, _d, _e, _f, _g, _h;
	const { hooks, url: __url, options: opts } = await initializePlugins(url, options);
	const fetch = getFetch(opts);
	const controller = new AbortController();
	const signal = (_a = opts.signal) != null ? _a : controller.signal;
	const _url = getURL2(__url, opts);
	const body = getBody(opts);
	const headers = await getHeaders(opts);
	const method = getMethod(__url, opts);
	let context = __spreadProps(__spreadValues({}, opts), {
		url: _url,
		headers,
		body,
		method,
		signal
	});
	for (const onRequest of hooks.onRequest) if (onRequest) {
		const res = await onRequest(context);
		if (typeof res === "object" && res !== null) context = res;
	}
	if ("pipeTo" in context && typeof context.pipeTo === "function" || typeof ((_b = options == null ? void 0 : options.body) == null ? void 0 : _b.pipe) === "function") {
		if (!("duplex" in context)) context.duplex = "half";
	}
	const { clearTimeout: clearTimeout2 } = getTimeout(opts, controller);
	let response = await fetch(context.url, context);
	clearTimeout2();
	const responseContext = {
		response,
		request: context
	};
	for (const onResponse of hooks.onResponse) if (onResponse) {
		const r = await onResponse(__spreadProps(__spreadValues({}, responseContext), { response: ((_c = options == null ? void 0 : options.hookOptions) == null ? void 0 : _c.cloneResponse) ? response.clone() : response }));
		if (r instanceof Response) response = r;
		else if (typeof r === "object" && r !== null) response = r.response;
	}
	if (response.ok) {
		if (!(context.method !== "HEAD")) return {
			data: "",
			error: null
		};
		const responseType = detectResponseType(response);
		const successContext = {
			data: null,
			response,
			request: context
		};
		if (responseType === "json" || responseType === "text") {
			const text = await response.text();
			successContext.data = await ((_d = context.jsonParser) != null ? _d : jsonParse)(text);
		} else successContext.data = await response[responseType]();
		if (context == null ? void 0 : context.output) {
			if (context.output && !context.disableValidation) successContext.data = await parseStandardSchema(context.output, successContext.data);
		}
		for (const onSuccess of hooks.onSuccess) if (onSuccess) await onSuccess(__spreadProps(__spreadValues({}, successContext), { response: ((_e = options == null ? void 0 : options.hookOptions) == null ? void 0 : _e.cloneResponse) ? response.clone() : response }));
		if (options == null ? void 0 : options.throw) return successContext.data;
		return {
			data: successContext.data,
			error: null
		};
	}
	const parser = (_f = options == null ? void 0 : options.jsonParser) != null ? _f : jsonParse;
	const responseText = await response.text();
	const isJSONResponse = isJSONParsable(responseText);
	const errorObject = isJSONResponse ? await parser(responseText) : null;
	const errorContext = {
		response,
		responseText,
		request: context,
		error: __spreadProps(__spreadValues({}, errorObject), {
			status: response.status,
			statusText: response.statusText
		})
	};
	for (const onError of hooks.onError) if (onError) await onError(__spreadProps(__spreadValues({}, errorContext), { response: ((_g = options == null ? void 0 : options.hookOptions) == null ? void 0 : _g.cloneResponse) ? response.clone() : response }));
	if (options == null ? void 0 : options.retry) {
		const retryStrategy = createRetryStrategy(options.retry);
		const _retryAttempt = (_h = options.retryAttempt) != null ? _h : 0;
		if (await retryStrategy.shouldAttemptRetry(_retryAttempt, response)) {
			for (const onRetry of hooks.onRetry) if (onRetry) await onRetry(responseContext);
			const delay = retryStrategy.getDelay(_retryAttempt);
			await new Promise((resolve) => setTimeout(resolve, delay));
			return await betterFetch(url, __spreadProps(__spreadValues({}, options), { retryAttempt: _retryAttempt + 1 }));
		}
	}
	if (options == null ? void 0 : options.throw) throw new BetterFetchError(response.status, response.statusText, isJSONResponse ? errorObject : responseText);
	return {
		data: null,
		error: __spreadProps(__spreadValues({}, errorObject), {
			status: response.status,
			statusText: response.statusText
		})
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/oauth2/refresh-access-token.mjs
async function refreshAccessTokenRequest({ refreshToken, options, authentication, extraParams, resource }) {
	options = typeof options === "function" ? await options() : options;
	return createRefreshAccessTokenRequest({
		refreshToken,
		options,
		authentication,
		extraParams,
		resource
	});
}
/**
* @deprecated use async'd refreshAccessTokenRequest instead
*/
function createRefreshAccessTokenRequest({ refreshToken, options, authentication, extraParams, resource }) {
	const body = new URLSearchParams();
	const headers = {
		"content-type": "application/x-www-form-urlencoded",
		accept: "application/json"
	};
	body.set("grant_type", "refresh_token");
	body.set("refresh_token", refreshToken);
	if (authentication === "basic") {
		const primaryClientId = Array.isArray(options.clientId) ? options.clientId[0] : options.clientId;
		if (primaryClientId) headers["authorization"] = "Basic " + base64.encode(`${primaryClientId}:${options.clientSecret ?? ""}`);
		else headers["authorization"] = "Basic " + base64.encode(`:${options.clientSecret ?? ""}`);
	} else {
		const primaryClientId = Array.isArray(options.clientId) ? options.clientId[0] : options.clientId;
		body.set("client_id", primaryClientId);
		if (options.clientSecret) body.set("client_secret", options.clientSecret);
	}
	if (resource) if (typeof resource === "string") body.append("resource", resource);
	else for (const _resource of resource) body.append("resource", _resource);
	if (extraParams) for (const [key, value] of Object.entries(extraParams)) body.set(key, value);
	return {
		body,
		headers
	};
}
async function refreshAccessToken({ refreshToken, options, tokenEndpoint, authentication, extraParams }) {
	const { body, headers } = await createRefreshAccessTokenRequest({
		refreshToken,
		options,
		authentication,
		extraParams
	});
	const { data, error } = await betterFetch(tokenEndpoint, {
		method: "POST",
		body,
		headers
	});
	if (error) throw error;
	const tokens = {
		accessToken: data.access_token,
		refreshToken: data.refresh_token,
		tokenType: data.token_type,
		scopes: data.scope?.split(" "),
		idToken: data.id_token
	};
	if (data.expires_in) {
		const now = /* @__PURE__ */ new Date();
		tokens.accessTokenExpiresAt = new Date(now.getTime() + data.expires_in * 1e3);
	}
	if (data.refresh_token_expires_in) {
		const now = /* @__PURE__ */ new Date();
		tokens.refreshTokenExpiresAt = new Date(now.getTime() + data.refresh_token_expires_in * 1e3);
	}
	return tokens;
}
//#endregion
//#region node_modules/@better-auth/core/dist/oauth2/client-credentials-token.mjs
async function clientCredentialsTokenRequest({ options, scope, authentication, resource }) {
	options = typeof options === "function" ? await options() : options;
	return createClientCredentialsTokenRequest({
		options,
		scope,
		authentication,
		resource
	});
}
/**
* @deprecated use async'd clientCredentialsTokenRequest instead
*/
function createClientCredentialsTokenRequest({ options, scope, authentication, resource }) {
	const body = new URLSearchParams();
	const headers = {
		"content-type": "application/x-www-form-urlencoded",
		accept: "application/json"
	};
	body.set("grant_type", "client_credentials");
	scope && body.set("scope", scope);
	if (resource) if (typeof resource === "string") body.append("resource", resource);
	else for (const _resource of resource) body.append("resource", _resource);
	if (authentication === "basic") {
		const primaryClientId = Array.isArray(options.clientId) ? options.clientId[0] : options.clientId;
		headers["authorization"] = `Basic ${base64Url.encode(`${primaryClientId}:${options.clientSecret}`)}`;
	} else {
		const primaryClientId = Array.isArray(options.clientId) ? options.clientId[0] : options.clientId;
		body.set("client_id", primaryClientId);
		body.set("client_secret", options.clientSecret);
	}
	return {
		body,
		headers
	};
}
async function clientCredentialsToken({ options, tokenEndpoint, scope, authentication, resource }) {
	const { body, headers } = await clientCredentialsTokenRequest({
		options,
		scope,
		authentication,
		resource
	});
	const { data, error } = await betterFetch(tokenEndpoint, {
		method: "POST",
		body,
		headers
	});
	if (error) throw error;
	const tokens = {
		accessToken: data.access_token,
		tokenType: data.token_type,
		scopes: data.scope?.split(" ")
	};
	if (data.expires_in) {
		const now = /* @__PURE__ */ new Date();
		tokens.accessTokenExpiresAt = new Date(now.getTime() + data.expires_in * 1e3);
	}
	return tokens;
}
//#endregion
//#region node_modules/@better-auth/core/dist/oauth2/verify.mjs
/** Last fetched jwks used locally in getJwks @internal */
var jwks;
/**
* Performs local verification of an access token for your APIs.
*
* Can also be configured for remote verification.
*/
async function verifyJwsAccessToken(token, opts) {
	try {
		const jwt = await jwtVerify(token, createLocalJWKSet(await getJwks(token, opts)), opts.verifyOptions);
		if (jwt.payload.azp) jwt.payload.client_id = jwt.payload.azp;
		return jwt.payload;
	} catch (error) {
		if (error instanceof Error) throw error;
		throw new Error(error);
	}
}
async function getJwks(token, opts) {
	let jwtHeaders;
	try {
		jwtHeaders = decodeProtectedHeader(token);
	} catch (error) {
		if (error instanceof Error) throw error;
		throw new Error(error);
	}
	if (!jwtHeaders.kid) throw new Error("Missing jwt kid");
	if (!jwks || !jwks.keys.find((jwk) => jwk.kid === jwtHeaders.kid)) {
		jwks = typeof opts.jwksFetch === "string" ? await betterFetch(opts.jwksFetch, { headers: { Accept: "application/json" } }).then(async (res) => {
			if (res.error) throw new Error(`Jwks failed: ${res.error.message ?? res.error.statusText}`);
			return res.data;
		}) : await opts.jwksFetch();
		if (!jwks) throw new Error("No jwks found");
	}
	return jwks;
}
/**
* Performs local verification of an access token for your API.
*
* Can also be configured for remote verification.
*/
async function verifyAccessToken(token, opts) {
	let payload;
	if (opts.jwksUrl && !opts?.remoteVerify?.force) try {
		payload = await verifyJwsAccessToken(token, {
			jwksFetch: opts.jwksUrl,
			verifyOptions: opts.verifyOptions
		});
	} catch (error) {
		if (error instanceof Error) if (error.name === "TypeError" || error.name === "JWSInvalid") {} else if (error.name === "JWTExpired") throw new APIError("UNAUTHORIZED", { message: "token expired" });
		else if (error.name === "JWTInvalid") throw new APIError("UNAUTHORIZED", { message: "token invalid" });
		else throw error;
		else throw new Error(error);
	}
	if (opts?.remoteVerify) {
		const { data: introspect, error: introspectError } = await betterFetch(opts.remoteVerify.introspectUrl, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: new URLSearchParams({
				client_id: opts.remoteVerify.clientId,
				client_secret: opts.remoteVerify.clientSecret,
				token,
				token_type_hint: "access_token"
			}).toString()
		});
		if (introspectError) logger.error(`Introspection failed: ${introspectError.message ?? introspectError.statusText}`);
		if (!introspect) throw new APIError("INTERNAL_SERVER_ERROR", { message: "introspection failed" });
		if (!introspect.active) throw new APIError("UNAUTHORIZED", { message: "token inactive" });
		try {
			const unsecuredJwt = new UnsecuredJWT(introspect).encode();
			const { audience: _audience, ...verifyOptions } = opts.verifyOptions;
			payload = (introspect.aud ? UnsecuredJWT.decode(unsecuredJwt, opts.verifyOptions) : UnsecuredJWT.decode(unsecuredJwt, verifyOptions)).payload;
		} catch (error) {
			throw new Error(error);
		}
	}
	if (!payload) throw new APIError("UNAUTHORIZED", { message: `no token payload` });
	if (opts.scopes) {
		const validScopes = new Set(payload.scope?.split(" "));
		for (const sc of opts.scopes) if (!validScopes.has(sc)) throw new APIError("FORBIDDEN", { message: `invalid scope ${sc}` });
	}
	return payload;
}
//#endregion
//#region node_modules/@better-auth/core/dist/oauth2/index.mjs
var oauth2_exports = /* @__PURE__ */ __exportAll({
	authorizationCodeRequest: () => authorizationCodeRequest,
	clientCredentialsToken: () => clientCredentialsToken,
	clientCredentialsTokenRequest: () => clientCredentialsTokenRequest,
	createAuthorizationCodeRequest: () => createAuthorizationCodeRequest,
	createAuthorizationURL: () => createAuthorizationURL,
	createClientCredentialsTokenRequest: () => createClientCredentialsTokenRequest,
	createRefreshAccessTokenRequest: () => createRefreshAccessTokenRequest,
	generateCodeChallenge: () => generateCodeChallenge,
	getJwks: () => getJwks,
	getOAuth2Tokens: () => getOAuth2Tokens,
	refreshAccessToken: () => refreshAccessToken,
	refreshAccessTokenRequest: () => refreshAccessTokenRequest,
	validateAuthorizationCode: () => validateAuthorizationCode,
	validateToken: () => validateToken,
	verifyAccessToken: () => verifyAccessToken,
	verifyJwsAccessToken: () => verifyJwsAccessToken
});
//#endregion
//#region node_modules/@better-auth/core/dist/oauth2/validate-authorization-code.mjs
async function authorizationCodeRequest({ code, codeVerifier, redirectURI, options, authentication, deviceId, headers, additionalParams = {}, resource }) {
	options = typeof options === "function" ? await options() : options;
	return createAuthorizationCodeRequest({
		code,
		codeVerifier,
		redirectURI,
		options,
		authentication,
		deviceId,
		headers,
		additionalParams,
		resource
	});
}
/**
* @deprecated use async'd authorizationCodeRequest instead
*/
function createAuthorizationCodeRequest({ code, codeVerifier, redirectURI, options, authentication, deviceId, headers, additionalParams = {}, resource }) {
	const body = new URLSearchParams();
	const requestHeaders = {
		"content-type": "application/x-www-form-urlencoded",
		accept: "application/json",
		...headers
	};
	body.set("grant_type", "authorization_code");
	body.set("code", code);
	codeVerifier && body.set("code_verifier", codeVerifier);
	options.clientKey && body.set("client_key", options.clientKey);
	deviceId && body.set("device_id", deviceId);
	body.set("redirect_uri", options.redirectURI || redirectURI);
	if (resource) if (typeof resource === "string") body.append("resource", resource);
	else for (const _resource of resource) body.append("resource", _resource);
	if (authentication === "basic") {
		const primaryClientId = Array.isArray(options.clientId) ? options.clientId[0] : options.clientId;
		requestHeaders["authorization"] = `Basic ${base64.encode(`${primaryClientId}:${options.clientSecret ?? ""}`)}`;
	} else {
		const primaryClientId = Array.isArray(options.clientId) ? options.clientId[0] : options.clientId;
		body.set("client_id", primaryClientId);
		if (options.clientSecret) body.set("client_secret", options.clientSecret);
	}
	for (const [key, value] of Object.entries(additionalParams)) if (!body.has(key)) body.append(key, value);
	return {
		body,
		headers: requestHeaders
	};
}
async function validateAuthorizationCode({ code, codeVerifier, redirectURI, options, tokenEndpoint, authentication, deviceId, headers, additionalParams = {}, resource }) {
	const { body, headers: requestHeaders } = await authorizationCodeRequest({
		code,
		codeVerifier,
		redirectURI,
		options,
		authentication,
		deviceId,
		headers,
		additionalParams,
		resource
	});
	const { data, error } = await betterFetch(tokenEndpoint, {
		method: "POST",
		body,
		headers: requestHeaders
	});
	if (error) throw error;
	return getOAuth2Tokens(data);
}
async function validateToken(token, jwksEndpoint, options) {
	return await jwtVerify(token, createRemoteJWKSet(new URL(jwksEndpoint)), {
		audience: options?.audience,
		issuer: options?.issuer
	});
}
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/apple.mjs
var apple = (options) => {
	const tokenEndpoint = "https://appleid.apple.com/auth/token";
	return {
		id: "apple",
		name: "Apple",
		async createAuthorizationURL({ state, scopes, redirectURI }) {
			const _scope = options.disableDefaultScope ? [] : ["email", "name"];
			if (options.scope) _scope.push(...options.scope);
			if (scopes) _scope.push(...scopes);
			return await createAuthorizationURL({
				id: "apple",
				options,
				authorizationEndpoint: "https://appleid.apple.com/auth/authorize",
				scopes: _scope,
				state,
				redirectURI,
				responseMode: "form_post",
				responseType: "code id_token"
			});
		},
		validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				codeVerifier,
				redirectURI,
				options,
				tokenEndpoint
			});
		},
		async verifyIdToken(token, nonce) {
			if (options.disableIdTokenSignIn) return false;
			if (options.verifyIdToken) return options.verifyIdToken(token, nonce);
			try {
				const { kid, alg: jwtAlg } = decodeProtectedHeader(token);
				if (!kid || !jwtAlg) return false;
				const { payload: jwtClaims } = await jwtVerify(token, await getApplePublicKey(kid), {
					algorithms: [jwtAlg],
					issuer: "https://appleid.apple.com",
					audience: options.audience && options.audience.length ? options.audience : options.appBundleIdentifier ? options.appBundleIdentifier : options.clientId,
					maxTokenAge: "1h"
				});
				["email_verified", "is_private_email"].forEach((field) => {
					if (jwtClaims[field] !== void 0) jwtClaims[field] = Boolean(jwtClaims[field]);
				});
				if (nonce && jwtClaims.nonce !== nonce) return false;
				return !!jwtClaims;
			} catch {
				return false;
			}
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options,
				tokenEndpoint: "https://appleid.apple.com/auth/token"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			if (!token.idToken) return null;
			const profile = decodeJwt(token.idToken);
			if (!profile) return null;
			let name;
			if (token.user?.name) name = `${token.user.name.firstName || ""} ${token.user.name.lastName || ""}`.trim();
			else name = profile.name || "";
			const emailVerified = typeof profile.email_verified === "boolean" ? profile.email_verified : profile.email_verified === "true";
			const enrichedProfile = {
				...profile,
				name
			};
			const userMap = await options.mapProfileToUser?.(enrichedProfile);
			return {
				user: {
					id: profile.sub,
					name: enrichedProfile.name,
					emailVerified,
					email: profile.email,
					...userMap
				},
				data: enrichedProfile
			};
		},
		options
	};
};
var getApplePublicKey = async (kid) => {
	const { data } = await betterFetch(`https://appleid.apple.com/auth/keys`);
	if (!data?.keys) throw new APIError$1("BAD_REQUEST", { message: "Keys not found" });
	const jwk = data.keys.find((key) => key.kid === kid);
	if (!jwk) throw new Error(`JWK with kid ${kid} not found`);
	return await importJWK(jwk, jwk.alg);
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/atlassian.mjs
var atlassian = (options) => {
	return {
		id: "atlassian",
		name: "Atlassian",
		async createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
			if (!options.clientId || !options.clientSecret) {
				logger.error("Client Id and Secret are required for Atlassian");
				throw new BetterAuthError("CLIENT_ID_AND_SECRET_REQUIRED");
			}
			if (!codeVerifier) throw new BetterAuthError("codeVerifier is required for Atlassian");
			const _scopes = options.disableDefaultScope ? [] : ["read:jira-user", "offline_access"];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return createAuthorizationURL({
				id: "atlassian",
				options,
				authorizationEndpoint: "https://auth.atlassian.com/authorize",
				scopes: _scopes,
				state,
				codeVerifier,
				redirectURI,
				additionalParams: { audience: "api.atlassian.com" },
				prompt: options.prompt
			});
		},
		validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				codeVerifier,
				redirectURI,
				options,
				tokenEndpoint: "https://auth.atlassian.com/oauth/token"
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientSecret: options.clientSecret
				},
				tokenEndpoint: "https://auth.atlassian.com/oauth/token"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			if (!token.accessToken) return null;
			try {
				const { data: profile } = await betterFetch("https://api.atlassian.com/me", { headers: { Authorization: `Bearer ${token.accessToken}` } });
				if (!profile) return null;
				const userMap = await options.mapProfileToUser?.(profile);
				return {
					user: {
						id: profile.account_id,
						name: profile.name,
						email: profile.email,
						image: profile.picture,
						emailVerified: false,
						...userMap
					},
					data: profile
				};
			} catch (error) {
				logger.error("Failed to fetch user info from Figma:", error);
				return null;
			}
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/cognito.mjs
var cognito = (options) => {
	if (!options.domain || !options.region || !options.userPoolId) {
		logger.error("Domain, region and userPoolId are required for Amazon Cognito. Make sure to provide them in the options.");
		throw new BetterAuthError("DOMAIN_AND_REGION_REQUIRED");
	}
	const cleanDomain = options.domain.replace(/^https?:\/\//, "");
	const authorizationEndpoint = `https://${cleanDomain}/oauth2/authorize`;
	const tokenEndpoint = `https://${cleanDomain}/oauth2/token`;
	const userInfoEndpoint = `https://${cleanDomain}/oauth2/userinfo`;
	return {
		id: "cognito",
		name: "Cognito",
		async createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
			if (!options.clientId) {
				logger.error("ClientId is required for Amazon Cognito. Make sure to provide them in the options.");
				throw new BetterAuthError("CLIENT_ID_AND_SECRET_REQUIRED");
			}
			if (options.requireClientSecret && !options.clientSecret) {
				logger.error("Client Secret is required when requireClientSecret is true. Make sure to provide it in the options.");
				throw new BetterAuthError("CLIENT_SECRET_REQUIRED");
			}
			const _scopes = options.disableDefaultScope ? [] : [
				"openid",
				"profile",
				"email"
			];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			const url = await createAuthorizationURL({
				id: "cognito",
				options: { ...options },
				authorizationEndpoint,
				scopes: _scopes,
				state,
				codeVerifier,
				redirectURI,
				prompt: options.prompt
			});
			const scopeValue = url.searchParams.get("scope");
			if (scopeValue) {
				url.searchParams.delete("scope");
				const encodedScope = encodeURIComponent(scopeValue);
				const urlString = url.toString();
				const separator = urlString.includes("?") ? "&" : "?";
				return new URL(`${urlString}${separator}scope=${encodedScope}`);
			}
			return url;
		},
		validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				codeVerifier,
				redirectURI,
				options,
				tokenEndpoint
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint
			});
		},
		async verifyIdToken(token, nonce) {
			if (options.disableIdTokenSignIn) return false;
			if (options.verifyIdToken) return options.verifyIdToken(token, nonce);
			try {
				const { kid, alg: jwtAlg } = decodeProtectedHeader(token);
				if (!kid || !jwtAlg) return false;
				const publicKey = await getCognitoPublicKey(kid, options.region, options.userPoolId);
				const expectedIssuer = `https://cognito-idp.${options.region}.amazonaws.com/${options.userPoolId}`;
				const { payload: jwtClaims } = await jwtVerify(token, publicKey, {
					algorithms: [jwtAlg],
					issuer: expectedIssuer,
					audience: options.clientId,
					maxTokenAge: "1h"
				});
				if (nonce && jwtClaims.nonce !== nonce) return false;
				return true;
			} catch (error) {
				logger.error("Failed to verify ID token:", error);
				return false;
			}
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			if (token.idToken) try {
				const profile = decodeJwt(token.idToken);
				if (!profile) return null;
				const name = profile.name || profile.given_name || profile.username || "";
				const enrichedProfile = {
					...profile,
					name
				};
				const userMap = await options.mapProfileToUser?.(enrichedProfile);
				return {
					user: {
						id: profile.sub,
						name: enrichedProfile.name,
						email: profile.email,
						image: profile.picture,
						emailVerified: profile.email_verified,
						...userMap
					},
					data: enrichedProfile
				};
			} catch (error) {
				logger.error("Failed to decode ID token:", error);
			}
			if (token.accessToken) try {
				const { data: userInfo } = await betterFetch(userInfoEndpoint, { headers: { Authorization: `Bearer ${token.accessToken}` } });
				if (userInfo) {
					const userMap = await options.mapProfileToUser?.(userInfo);
					return {
						user: {
							id: userInfo.sub,
							name: userInfo.name || userInfo.given_name || userInfo.username || "",
							email: userInfo.email,
							image: userInfo.picture,
							emailVerified: userInfo.email_verified,
							...userMap
						},
						data: userInfo
					};
				}
			} catch (error) {
				logger.error("Failed to fetch user info from Cognito:", error);
			}
			return null;
		},
		options
	};
};
var getCognitoPublicKey = async (kid, region, userPoolId) => {
	const COGNITO_JWKS_URI = `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`;
	try {
		const { data } = await betterFetch(COGNITO_JWKS_URI);
		if (!data?.keys) throw new APIError$1("BAD_REQUEST", { message: "Keys not found" });
		const jwk = data.keys.find((key) => key.kid === kid);
		if (!jwk) throw new Error(`JWK with kid ${kid} not found`);
		return await importJWK(jwk, jwk.alg);
	} catch (error) {
		logger.error("Failed to fetch Cognito public key:", error);
		throw error;
	}
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/discord.mjs
var discord = (options) => {
	return {
		id: "discord",
		name: "Discord",
		createAuthorizationURL({ state, scopes, redirectURI }) {
			const _scopes = options.disableDefaultScope ? [] : ["identify", "email"];
			if (scopes) _scopes.push(...scopes);
			if (options.scope) _scopes.push(...options.scope);
			const permissionsParam = _scopes.includes("bot") && options.permissions !== void 0 ? `&permissions=${options.permissions}` : "";
			return new URL(`https://discord.com/api/oauth2/authorize?scope=${_scopes.join("+")}&response_type=code&client_id=${options.clientId}&redirect_uri=${encodeURIComponent(options.redirectURI || redirectURI)}&state=${state}&prompt=${options.prompt || "none"}${permissionsParam}`);
		},
		validateAuthorizationCode: async ({ code, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				redirectURI,
				options,
				tokenEndpoint: "https://discord.com/api/oauth2/token"
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint: "https://discord.com/api/oauth2/token"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch("https://discord.com/api/users/@me", { headers: { authorization: `Bearer ${token.accessToken}` } });
			if (error) return null;
			if (profile.avatar === null) profile.image_url = `https://cdn.discordapp.com/embed/avatars/${profile.discriminator === "0" ? Number(BigInt(profile.id) >> BigInt(22)) % 6 : parseInt(profile.discriminator) % 5}.png`;
			else {
				const format = profile.avatar.startsWith("a_") ? "gif" : "png";
				profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`;
			}
			const userMap = await options.mapProfileToUser?.(profile);
			return {
				user: {
					id: profile.id,
					name: profile.global_name || profile.username || "",
					email: profile.email,
					emailVerified: profile.verified,
					image: profile.image_url,
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/dropbox.mjs
var dropbox = (options) => {
	const tokenEndpoint = "https://api.dropboxapi.com/oauth2/token";
	return {
		id: "dropbox",
		name: "Dropbox",
		createAuthorizationURL: async ({ state, scopes, codeVerifier, redirectURI }) => {
			const _scopes = options.disableDefaultScope ? [] : ["account_info.read"];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			const additionalParams = {};
			if (options.accessType) additionalParams.token_access_type = options.accessType;
			return await createAuthorizationURL({
				id: "dropbox",
				options,
				authorizationEndpoint: "https://www.dropbox.com/oauth2/authorize",
				scopes: _scopes,
				state,
				redirectURI,
				codeVerifier,
				additionalParams
			});
		},
		validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
			return await validateAuthorizationCode({
				code,
				codeVerifier,
				redirectURI,
				options,
				tokenEndpoint
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch("https://api.dropboxapi.com/2/users/get_current_account", {
				method: "POST",
				headers: { Authorization: `Bearer ${token.accessToken}` }
			});
			if (error) return null;
			const userMap = await options.mapProfileToUser?.(profile);
			return {
				user: {
					id: profile.account_id,
					name: profile.name?.display_name,
					email: profile.email,
					emailVerified: profile.email_verified || false,
					image: profile.profile_photo_url,
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/facebook.mjs
var facebook = (options) => {
	return {
		id: "facebook",
		name: "Facebook",
		async createAuthorizationURL({ state, scopes, redirectURI, loginHint }) {
			const _scopes = options.disableDefaultScope ? [] : ["email", "public_profile"];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return await createAuthorizationURL({
				id: "facebook",
				options,
				authorizationEndpoint: "https://www.facebook.com/v24.0/dialog/oauth",
				scopes: _scopes,
				state,
				redirectURI,
				loginHint,
				additionalParams: options.configId ? { config_id: options.configId } : {}
			});
		},
		validateAuthorizationCode: async ({ code, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				redirectURI,
				options,
				tokenEndpoint: "https://graph.facebook.com/v24.0/oauth/access_token"
			});
		},
		async verifyIdToken(token, nonce) {
			if (options.disableIdTokenSignIn) return false;
			if (options.verifyIdToken) return options.verifyIdToken(token, nonce);
			if (token.split(".").length === 3) try {
				const { payload: jwtClaims } = await jwtVerify(token, createRemoteJWKSet(new URL("https://limited.facebook.com/.well-known/oauth/openid/jwks/")), {
					algorithms: ["RS256"],
					audience: options.clientId,
					issuer: "https://www.facebook.com"
				});
				if (nonce && jwtClaims.nonce !== nonce) return false;
				return !!jwtClaims;
			} catch {
				return false;
			}
			return true;
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint: "https://graph.facebook.com/v24.0/oauth/access_token"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			if (token.idToken && token.idToken.split(".").length === 3) {
				const profile = decodeJwt(token.idToken);
				const user = {
					id: profile.sub,
					name: profile.name,
					email: profile.email,
					picture: { data: {
						url: profile.picture,
						height: 100,
						width: 100,
						is_silhouette: false
					} }
				};
				const userMap = await options.mapProfileToUser?.({
					...user,
					email_verified: false
				});
				return {
					user: {
						...user,
						emailVerified: false,
						...userMap
					},
					data: profile
				};
			}
			const { data: profile, error } = await betterFetch("https://graph.facebook.com/me?fields=" + [
				"id",
				"name",
				"email",
				"picture",
				...options?.fields || []
			].join(","), { auth: {
				type: "Bearer",
				token: token.accessToken
			} });
			if (error) return null;
			const userMap = await options.mapProfileToUser?.(profile);
			return {
				user: {
					id: profile.id,
					name: profile.name,
					email: profile.email,
					image: profile.picture.data.url,
					emailVerified: profile.email_verified,
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/figma.mjs
var figma = (options) => {
	return {
		id: "figma",
		name: "Figma",
		async createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
			if (!options.clientId || !options.clientSecret) {
				logger.error("Client Id and Client Secret are required for Figma. Make sure to provide them in the options.");
				throw new BetterAuthError("CLIENT_ID_AND_SECRET_REQUIRED");
			}
			if (!codeVerifier) throw new BetterAuthError("codeVerifier is required for Figma");
			const _scopes = options.disableDefaultScope ? [] : ["current_user:read"];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return await createAuthorizationURL({
				id: "figma",
				options,
				authorizationEndpoint: "https://www.figma.com/oauth",
				scopes: _scopes,
				state,
				codeVerifier,
				redirectURI
			});
		},
		validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				codeVerifier,
				redirectURI,
				options,
				tokenEndpoint: "https://api.figma.com/v1/oauth/token",
				authentication: "basic"
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint: "https://api.figma.com/v1/oauth/token",
				authentication: "basic"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			try {
				const { data: profile } = await betterFetch("https://api.figma.com/v1/me", { headers: { Authorization: `Bearer ${token.accessToken}` } });
				if (!profile) {
					logger.error("Failed to fetch user from Figma");
					return null;
				}
				const userMap = await options.mapProfileToUser?.(profile);
				return {
					user: {
						id: profile.id,
						name: profile.handle,
						email: profile.email,
						image: profile.img_url,
						emailVerified: false,
						...userMap
					},
					data: profile
				};
			} catch (error) {
				logger.error("Failed to fetch user info from Figma:", error);
				return null;
			}
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/github.mjs
var github = (options) => {
	const tokenEndpoint = "https://github.com/login/oauth/access_token";
	return {
		id: "github",
		name: "GitHub",
		createAuthorizationURL({ state, scopes, loginHint, codeVerifier, redirectURI }) {
			const _scopes = options.disableDefaultScope ? [] : ["read:user", "user:email"];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return createAuthorizationURL({
				id: "github",
				options,
				authorizationEndpoint: "https://github.com/login/oauth/authorize",
				scopes: _scopes,
				state,
				codeVerifier,
				redirectURI,
				loginHint,
				prompt: options.prompt
			});
		},
		validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
			const { body, headers: requestHeaders } = createAuthorizationCodeRequest({
				code,
				codeVerifier,
				redirectURI,
				options
			});
			const { data, error } = await betterFetch(tokenEndpoint, {
				method: "POST",
				body,
				headers: requestHeaders
			});
			if (error) {
				logger.error("GitHub OAuth token exchange failed:", error);
				return null;
			}
			if ("error" in data) {
				logger.error("GitHub OAuth token exchange failed:", data);
				return null;
			}
			return getOAuth2Tokens(data);
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint: "https://github.com/login/oauth/access_token"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch("https://api.github.com/user", { headers: {
				"User-Agent": "better-auth",
				authorization: `Bearer ${token.accessToken}`
			} });
			if (error) return null;
			const { data: emails } = await betterFetch("https://api.github.com/user/emails", { headers: {
				Authorization: `Bearer ${token.accessToken}`,
				"User-Agent": "better-auth"
			} });
			if (!profile.email && emails) profile.email = (emails.find((e) => e.primary) ?? emails[0])?.email;
			const emailVerified = emails?.find((e) => e.email === profile.email)?.verified ?? false;
			const userMap = await options.mapProfileToUser?.(profile);
			return {
				user: {
					id: profile.id,
					name: profile.name || profile.login || "",
					email: profile.email,
					image: profile.avatar_url,
					emailVerified,
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/gitlab.mjs
var cleanDoubleSlashes = (input = "") => {
	return input.split("://").map((str) => str.replace(/\/{2,}/g, "/")).join("://");
};
var issuerToEndpoints = (issuer) => {
	const baseUrl = issuer || "https://gitlab.com";
	return {
		authorizationEndpoint: cleanDoubleSlashes(`${baseUrl}/oauth/authorize`),
		tokenEndpoint: cleanDoubleSlashes(`${baseUrl}/oauth/token`),
		userinfoEndpoint: cleanDoubleSlashes(`${baseUrl}/api/v4/user`)
	};
};
var gitlab = (options) => {
	const { authorizationEndpoint, tokenEndpoint, userinfoEndpoint } = issuerToEndpoints(options.issuer);
	const issuerId = "gitlab";
	return {
		id: issuerId,
		name: "Gitlab",
		createAuthorizationURL: async ({ state, scopes, codeVerifier, loginHint, redirectURI }) => {
			const _scopes = options.disableDefaultScope ? [] : ["read_user"];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return await createAuthorizationURL({
				id: issuerId,
				options,
				authorizationEndpoint,
				scopes: _scopes,
				state,
				redirectURI,
				codeVerifier,
				loginHint
			});
		},
		validateAuthorizationCode: async ({ code, redirectURI, codeVerifier }) => {
			return validateAuthorizationCode({
				code,
				redirectURI,
				options,
				codeVerifier,
				tokenEndpoint
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch(userinfoEndpoint, { headers: { authorization: `Bearer ${token.accessToken}` } });
			if (error || profile.state !== "active" || profile.locked) return null;
			const userMap = await options.mapProfileToUser?.(profile);
			return {
				user: {
					id: profile.id,
					name: profile.name ?? profile.username ?? "",
					email: profile.email,
					image: profile.avatar_url,
					emailVerified: profile.email_verified ?? false,
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/google.mjs
var google = (options) => {
	return {
		id: "google",
		name: "Google",
		async createAuthorizationURL({ state, scopes, codeVerifier, redirectURI, loginHint, display }) {
			if (!options.clientId || !options.clientSecret) {
				logger.error("Client Id and Client Secret is required for Google. Make sure to provide them in the options.");
				throw new BetterAuthError("CLIENT_ID_AND_SECRET_REQUIRED");
			}
			if (!codeVerifier) throw new BetterAuthError("codeVerifier is required for Google");
			const _scopes = options.disableDefaultScope ? [] : [
				"email",
				"profile",
				"openid"
			];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return await createAuthorizationURL({
				id: "google",
				options,
				authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
				scopes: _scopes,
				state,
				codeVerifier,
				redirectURI,
				prompt: options.prompt,
				accessType: options.accessType,
				display: display || options.display,
				loginHint,
				hd: options.hd,
				additionalParams: { include_granted_scopes: "true" }
			});
		},
		validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				codeVerifier,
				redirectURI,
				options,
				tokenEndpoint: "https://oauth2.googleapis.com/token"
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint: "https://oauth2.googleapis.com/token"
			});
		},
		async verifyIdToken(token, nonce) {
			if (options.disableIdTokenSignIn) return false;
			if (options.verifyIdToken) return options.verifyIdToken(token, nonce);
			try {
				const { kid, alg: jwtAlg } = decodeProtectedHeader(token);
				if (!kid || !jwtAlg) return false;
				const { payload: jwtClaims } = await jwtVerify(token, await getGooglePublicKey(kid), {
					algorithms: [jwtAlg],
					issuer: ["https://accounts.google.com", "accounts.google.com"],
					audience: options.clientId,
					maxTokenAge: "1h"
				});
				if (nonce && jwtClaims.nonce !== nonce) return false;
				return true;
			} catch {
				return false;
			}
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			if (!token.idToken) return null;
			const user = decodeJwt(token.idToken);
			const userMap = await options.mapProfileToUser?.(user);
			return {
				user: {
					id: user.sub,
					name: user.name,
					email: user.email,
					image: user.picture,
					emailVerified: user.email_verified,
					...userMap
				},
				data: user
			};
		},
		options
	};
};
var getGooglePublicKey = async (kid) => {
	const { data } = await betterFetch("https://www.googleapis.com/oauth2/v3/certs");
	if (!data?.keys) throw new APIError$1("BAD_REQUEST", { message: "Keys not found" });
	const jwk = data.keys.find((key) => key.kid === kid);
	if (!jwk) throw new Error(`JWK with kid ${kid} not found`);
	return await importJWK(jwk, jwk.alg);
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/huggingface.mjs
var huggingface = (options) => {
	return {
		id: "huggingface",
		name: "Hugging Face",
		createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
			const _scopes = options.disableDefaultScope ? [] : [
				"openid",
				"profile",
				"email"
			];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return createAuthorizationURL({
				id: "huggingface",
				options,
				authorizationEndpoint: "https://huggingface.co/oauth/authorize",
				scopes: _scopes,
				state,
				codeVerifier,
				redirectURI
			});
		},
		validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				codeVerifier,
				redirectURI,
				options,
				tokenEndpoint: "https://huggingface.co/oauth/token"
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint: "https://huggingface.co/oauth/token"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch("https://huggingface.co/oauth/userinfo", {
				method: "GET",
				headers: { Authorization: `Bearer ${token.accessToken}` }
			});
			if (error) return null;
			const userMap = await options.mapProfileToUser?.(profile);
			return {
				user: {
					id: profile.sub,
					name: profile.name || profile.preferred_username || "",
					email: profile.email,
					image: profile.picture,
					emailVerified: profile.email_verified ?? false,
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/kakao.mjs
var kakao = (options) => {
	return {
		id: "kakao",
		name: "Kakao",
		createAuthorizationURL({ state, scopes, redirectURI }) {
			const _scopes = options.disableDefaultScope ? [] : [
				"account_email",
				"profile_image",
				"profile_nickname"
			];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return createAuthorizationURL({
				id: "kakao",
				options,
				authorizationEndpoint: "https://kauth.kakao.com/oauth/authorize",
				scopes: _scopes,
				state,
				redirectURI
			});
		},
		validateAuthorizationCode: async ({ code, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				redirectURI,
				options,
				tokenEndpoint: "https://kauth.kakao.com/oauth/token"
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint: "https://kauth.kakao.com/oauth/token"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch("https://kapi.kakao.com/v2/user/me", { headers: { Authorization: `Bearer ${token.accessToken}` } });
			if (error || !profile) return null;
			const userMap = await options.mapProfileToUser?.(profile);
			const account = profile.kakao_account || {};
			const kakaoProfile = account.profile || {};
			return {
				user: {
					id: String(profile.id),
					name: kakaoProfile.nickname || account.name || "",
					email: account.email,
					image: kakaoProfile.profile_image_url || kakaoProfile.thumbnail_image_url,
					emailVerified: !!account.is_email_valid && !!account.is_email_verified,
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/kick.mjs
var kick = (options) => {
	return {
		id: "kick",
		name: "Kick",
		createAuthorizationURL({ state, scopes, redirectURI, codeVerifier }) {
			const _scopes = options.disableDefaultScope ? [] : ["user:read"];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return createAuthorizationURL({
				id: "kick",
				redirectURI,
				options,
				authorizationEndpoint: "https://id.kick.com/oauth/authorize",
				scopes: _scopes,
				codeVerifier,
				state
			});
		},
		async validateAuthorizationCode({ code, redirectURI, codeVerifier }) {
			return validateAuthorizationCode({
				code,
				redirectURI,
				options,
				tokenEndpoint: "https://id.kick.com/oauth/token",
				codeVerifier
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientSecret: options.clientSecret
				},
				tokenEndpoint: "https://id.kick.com/oauth/token"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data, error } = await betterFetch("https://api.kick.com/public/v1/users", {
				method: "GET",
				headers: { Authorization: `Bearer ${token.accessToken}` }
			});
			if (error) return null;
			const profile = data.data[0];
			const userMap = await options.mapProfileToUser?.(profile);
			return {
				user: {
					id: profile.user_id,
					name: profile.name,
					email: profile.email,
					image: profile.profile_picture,
					emailVerified: false,
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/line.mjs
/**
* LINE Login v2.1
* - Authorization endpoint: https://access.line.me/oauth2/v2.1/authorize
* - Token endpoint: https://api.line.me/oauth2/v2.1/token
* - UserInfo endpoint: https://api.line.me/oauth2/v2.1/userinfo
* - Verify ID token: https://api.line.me/oauth2/v2.1/verify
*
* Docs: https://developers.line.biz/en/reference/line-login/#issue-access-token
*/
var line = (options) => {
	const authorizationEndpoint = "https://access.line.me/oauth2/v2.1/authorize";
	const tokenEndpoint = "https://api.line.me/oauth2/v2.1/token";
	const userInfoEndpoint = "https://api.line.me/oauth2/v2.1/userinfo";
	const verifyIdTokenEndpoint = "https://api.line.me/oauth2/v2.1/verify";
	return {
		id: "line",
		name: "LINE",
		async createAuthorizationURL({ state, scopes, codeVerifier, redirectURI, loginHint }) {
			const _scopes = options.disableDefaultScope ? [] : [
				"openid",
				"profile",
				"email"
			];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return await createAuthorizationURL({
				id: "line",
				options,
				authorizationEndpoint,
				scopes: _scopes,
				state,
				codeVerifier,
				redirectURI,
				loginHint
			});
		},
		validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				codeVerifier,
				redirectURI,
				options,
				tokenEndpoint
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientSecret: options.clientSecret
				},
				tokenEndpoint
			});
		},
		async verifyIdToken(token, nonce) {
			if (options.disableIdTokenSignIn) return false;
			if (options.verifyIdToken) return options.verifyIdToken(token, nonce);
			const body = new URLSearchParams();
			body.set("id_token", token);
			body.set("client_id", options.clientId);
			if (nonce) body.set("nonce", nonce);
			const { data, error } = await betterFetch(verifyIdTokenEndpoint, {
				method: "POST",
				headers: { "content-type": "application/x-www-form-urlencoded" },
				body
			});
			if (error || !data) return false;
			if (data.aud !== options.clientId) return false;
			if (data.nonce && data.nonce !== nonce) return false;
			return true;
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			let profile = null;
			if (token.idToken) try {
				profile = decodeJwt(token.idToken);
			} catch {}
			if (!profile) {
				const { data } = await betterFetch(userInfoEndpoint, { headers: { authorization: `Bearer ${token.accessToken}` } });
				profile = data || null;
			}
			if (!profile) return null;
			const userMap = await options.mapProfileToUser?.(profile);
			const id = profile.sub || profile.userId;
			const name = profile.name || profile.displayName || "";
			const image = profile.picture || profile.pictureUrl || void 0;
			return {
				user: {
					id,
					name,
					email: profile.email,
					image,
					emailVerified: false,
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/linear.mjs
var linear = (options) => {
	const tokenEndpoint = "https://api.linear.app/oauth/token";
	return {
		id: "linear",
		name: "Linear",
		createAuthorizationURL({ state, scopes, loginHint, redirectURI }) {
			const _scopes = options.disableDefaultScope ? [] : ["read"];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return createAuthorizationURL({
				id: "linear",
				options,
				authorizationEndpoint: "https://linear.app/oauth/authorize",
				scopes: _scopes,
				state,
				redirectURI,
				loginHint
			});
		},
		validateAuthorizationCode: async ({ code, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				redirectURI,
				options,
				tokenEndpoint
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch("https://api.linear.app/graphql", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token.accessToken}`
				},
				body: JSON.stringify({ query: `
							query {
								viewer {
									id
									name
									email
									avatarUrl
									active
									createdAt
									updatedAt
								}
							}
						` })
			});
			if (error || !profile?.data?.viewer) return null;
			const userData = profile.data.viewer;
			const userMap = await options.mapProfileToUser?.(userData);
			return {
				user: {
					id: profile.data.viewer.id,
					name: profile.data.viewer.name,
					email: profile.data.viewer.email,
					image: profile.data.viewer.avatarUrl,
					emailVerified: false,
					...userMap
				},
				data: userData
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/linkedin.mjs
var linkedin = (options) => {
	const authorizationEndpoint = "https://www.linkedin.com/oauth/v2/authorization";
	const tokenEndpoint = "https://www.linkedin.com/oauth/v2/accessToken";
	return {
		id: "linkedin",
		name: "Linkedin",
		createAuthorizationURL: async ({ state, scopes, redirectURI, loginHint }) => {
			const _scopes = options.disableDefaultScope ? [] : [
				"profile",
				"email",
				"openid"
			];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return await createAuthorizationURL({
				id: "linkedin",
				options,
				authorizationEndpoint,
				scopes: _scopes,
				state,
				loginHint,
				redirectURI
			});
		},
		validateAuthorizationCode: async ({ code, redirectURI }) => {
			return await validateAuthorizationCode({
				code,
				redirectURI,
				options,
				tokenEndpoint
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch("https://api.linkedin.com/v2/userinfo", {
				method: "GET",
				headers: { Authorization: `Bearer ${token.accessToken}` }
			});
			if (error) return null;
			const userMap = await options.mapProfileToUser?.(profile);
			return {
				user: {
					id: profile.sub,
					name: profile.name,
					email: profile.email,
					emailVerified: profile.email_verified || false,
					image: profile.picture,
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/microsoft-entra-id.mjs
var microsoft = (options) => {
	const tenant = options.tenantId || "common";
	const authority = options.authority || "https://login.microsoftonline.com";
	const authorizationEndpoint = `${authority}/${tenant}/oauth2/v2.0/authorize`;
	const tokenEndpoint = `${authority}/${tenant}/oauth2/v2.0/token`;
	return {
		id: "microsoft",
		name: "Microsoft EntraID",
		createAuthorizationURL(data) {
			const scopes = options.disableDefaultScope ? [] : [
				"openid",
				"profile",
				"email",
				"User.Read",
				"offline_access"
			];
			if (options.scope) scopes.push(...options.scope);
			if (data.scopes) scopes.push(...data.scopes);
			return createAuthorizationURL({
				id: "microsoft",
				options,
				authorizationEndpoint,
				state: data.state,
				codeVerifier: data.codeVerifier,
				scopes,
				redirectURI: data.redirectURI,
				prompt: options.prompt,
				loginHint: data.loginHint
			});
		},
		validateAuthorizationCode({ code, codeVerifier, redirectURI }) {
			return validateAuthorizationCode({
				code,
				codeVerifier,
				redirectURI,
				options,
				tokenEndpoint
			});
		},
		async verifyIdToken(token, nonce) {
			if (options.disableIdTokenSignIn) return false;
			if (options.verifyIdToken) return options.verifyIdToken(token, nonce);
			try {
				const { kid, alg: jwtAlg } = decodeProtectedHeader(token);
				if (!kid || !jwtAlg) return false;
				const publicKey = await getMicrosoftPublicKey(kid, tenant, authority);
				const verifyOptions = {
					algorithms: [jwtAlg],
					audience: options.clientId,
					maxTokenAge: "1h"
				};
				/**
				* Issuer varies per user's tenant for multi-tenant endpoints, so only validate for specific tenants.
				* @see https://learn.microsoft.com/en-us/entra/identity-platform/v2-protocols#endpoints
				*/
				if (tenant !== "common" && tenant !== "organizations" && tenant !== "consumers") verifyOptions.issuer = `${authority}/${tenant}/v2.0`;
				const { payload: jwtClaims } = await jwtVerify(token, publicKey, verifyOptions);
				if (nonce && jwtClaims.nonce !== nonce) return false;
				return true;
			} catch (error) {
				logger.error("Failed to verify ID token:", error);
				return false;
			}
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			if (!token.idToken) return null;
			const user = decodeJwt(token.idToken);
			const profilePhotoSize = options.profilePhotoSize || 48;
			await betterFetch(`https://graph.microsoft.com/v1.0/me/photos/${profilePhotoSize}x${profilePhotoSize}/$value`, {
				headers: { Authorization: `Bearer ${token.accessToken}` },
				async onResponse(context) {
					if (options.disableProfilePhoto || !context.response.ok) return;
					try {
						const pictureBuffer = await context.response.clone().arrayBuffer();
						user.picture = `data:image/jpeg;base64, ${base64.encode(pictureBuffer)}`;
					} catch (e) {
						logger.error(e && typeof e === "object" && "name" in e ? e.name : "", e);
					}
				}
			});
			const userMap = await options.mapProfileToUser?.(user);
			const emailVerified = user.email_verified !== void 0 ? user.email_verified : user.email && (user.verified_primary_email?.includes(user.email) || user.verified_secondary_email?.includes(user.email)) ? true : false;
			return {
				user: {
					id: user.sub,
					name: user.name,
					email: user.email,
					image: user.picture,
					emailVerified,
					...userMap
				},
				data: user
			};
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			const scopes = options.disableDefaultScope ? [] : [
				"openid",
				"profile",
				"email",
				"User.Read",
				"offline_access"
			];
			if (options.scope) scopes.push(...options.scope);
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientSecret: options.clientSecret
				},
				extraParams: { scope: scopes.join(" ") },
				tokenEndpoint
			});
		},
		options
	};
};
var getMicrosoftPublicKey = async (kid, tenant, authority) => {
	const { data } = await betterFetch(`${authority}/${tenant}/discovery/v2.0/keys`);
	if (!data?.keys) throw new APIError$1("BAD_REQUEST", { message: "Keys not found" });
	const jwk = data.keys.find((key) => key.kid === kid);
	if (!jwk) throw new Error(`JWK with kid ${kid} not found`);
	return await importJWK(jwk, jwk.alg);
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/naver.mjs
var naver = (options) => {
	return {
		id: "naver",
		name: "Naver",
		createAuthorizationURL({ state, scopes, redirectURI }) {
			const _scopes = options.disableDefaultScope ? [] : ["profile", "email"];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return createAuthorizationURL({
				id: "naver",
				options,
				authorizationEndpoint: "https://nid.naver.com/oauth2.0/authorize",
				scopes: _scopes,
				state,
				redirectURI
			});
		},
		validateAuthorizationCode: async ({ code, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				redirectURI,
				options,
				tokenEndpoint: "https://nid.naver.com/oauth2.0/token"
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint: "https://nid.naver.com/oauth2.0/token"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch("https://openapi.naver.com/v1/nid/me", { headers: { Authorization: `Bearer ${token.accessToken}` } });
			if (error || !profile || profile.resultcode !== "00") return null;
			const userMap = await options.mapProfileToUser?.(profile);
			const res = profile.response || {};
			return {
				user: {
					id: res.id,
					name: res.name || res.nickname || "",
					email: res.email,
					image: res.profile_image,
					emailVerified: false,
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/notion.mjs
var notion = (options) => {
	const tokenEndpoint = "https://api.notion.com/v1/oauth/token";
	return {
		id: "notion",
		name: "Notion",
		createAuthorizationURL({ state, scopes, loginHint, redirectURI }) {
			const _scopes = options.disableDefaultScope ? [] : [];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return createAuthorizationURL({
				id: "notion",
				options,
				authorizationEndpoint: "https://api.notion.com/v1/oauth/authorize",
				scopes: _scopes,
				state,
				redirectURI,
				loginHint,
				additionalParams: { owner: "user" }
			});
		},
		validateAuthorizationCode: async ({ code, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				redirectURI,
				options,
				tokenEndpoint,
				authentication: "basic"
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch("https://api.notion.com/v1/users/me", { headers: {
				Authorization: `Bearer ${token.accessToken}`,
				"Notion-Version": "2022-06-28"
			} });
			if (error || !profile) return null;
			const userProfile = profile.bot?.owner?.user;
			if (!userProfile) return null;
			const userMap = await options.mapProfileToUser?.(userProfile);
			return {
				user: {
					id: userProfile.id,
					name: userProfile.name || "",
					email: userProfile.person?.email || null,
					image: userProfile.avatar_url,
					emailVerified: false,
					...userMap
				},
				data: userProfile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/paybin.mjs
var paybin = (options) => {
	const issuer = options.issuer || "https://idp.paybin.io";
	const authorizationEndpoint = `${issuer}/oauth2/authorize`;
	const tokenEndpoint = `${issuer}/oauth2/token`;
	return {
		id: "paybin",
		name: "Paybin",
		async createAuthorizationURL({ state, scopes, codeVerifier, redirectURI, loginHint }) {
			if (!options.clientId || !options.clientSecret) {
				logger.error("Client Id and Client Secret is required for Paybin. Make sure to provide them in the options.");
				throw new BetterAuthError("CLIENT_ID_AND_SECRET_REQUIRED");
			}
			if (!codeVerifier) throw new BetterAuthError("codeVerifier is required for Paybin");
			const _scopes = options.disableDefaultScope ? [] : [
				"openid",
				"email",
				"profile"
			];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return await createAuthorizationURL({
				id: "paybin",
				options,
				authorizationEndpoint,
				scopes: _scopes,
				state,
				codeVerifier,
				redirectURI,
				prompt: options.prompt,
				loginHint
			});
		},
		validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				codeVerifier,
				redirectURI,
				options,
				tokenEndpoint
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			if (!token.idToken) return null;
			const user = decodeJwt(token.idToken);
			const userMap = await options.mapProfileToUser?.(user);
			return {
				user: {
					id: user.sub,
					name: user.name || user.preferred_username || "",
					email: user.email,
					image: user.picture,
					emailVerified: user.email_verified || false,
					...userMap
				},
				data: user
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/paypal.mjs
var paypal = (options) => {
	const isSandbox = (options.environment || "sandbox") === "sandbox";
	const authorizationEndpoint = isSandbox ? "https://www.sandbox.paypal.com/signin/authorize" : "https://www.paypal.com/signin/authorize";
	const tokenEndpoint = isSandbox ? "https://api-m.sandbox.paypal.com/v1/oauth2/token" : "https://api-m.paypal.com/v1/oauth2/token";
	const userInfoEndpoint = isSandbox ? "https://api-m.sandbox.paypal.com/v1/identity/oauth2/userinfo" : "https://api-m.paypal.com/v1/identity/oauth2/userinfo";
	return {
		id: "paypal",
		name: "PayPal",
		async createAuthorizationURL({ state, codeVerifier, redirectURI }) {
			if (!options.clientId || !options.clientSecret) {
				logger.error("Client Id and Client Secret is required for PayPal. Make sure to provide them in the options.");
				throw new BetterAuthError("CLIENT_ID_AND_SECRET_REQUIRED");
			}
			return await createAuthorizationURL({
				id: "paypal",
				options,
				authorizationEndpoint,
				scopes: [],
				state,
				codeVerifier,
				redirectURI,
				prompt: options.prompt
			});
		},
		validateAuthorizationCode: async ({ code, redirectURI }) => {
			/**
			* PayPal requires Basic Auth for token exchange
			**/
			const credentials = base64.encode(`${options.clientId}:${options.clientSecret}`);
			try {
				const response = await betterFetch(tokenEndpoint, {
					method: "POST",
					headers: {
						Authorization: `Basic ${credentials}`,
						Accept: "application/json",
						"Accept-Language": "en_US",
						"Content-Type": "application/x-www-form-urlencoded"
					},
					body: new URLSearchParams({
						grant_type: "authorization_code",
						code,
						redirect_uri: redirectURI
					}).toString()
				});
				if (!response.data) throw new BetterAuthError("FAILED_TO_GET_ACCESS_TOKEN");
				const data = response.data;
				return {
					accessToken: data.access_token,
					refreshToken: data.refresh_token,
					accessTokenExpiresAt: data.expires_in ? new Date(Date.now() + data.expires_in * 1e3) : void 0,
					idToken: data.id_token
				};
			} catch (error) {
				logger.error("PayPal token exchange failed:", error);
				throw new BetterAuthError("FAILED_TO_GET_ACCESS_TOKEN");
			}
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			const credentials = base64.encode(`${options.clientId}:${options.clientSecret}`);
			try {
				const response = await betterFetch(tokenEndpoint, {
					method: "POST",
					headers: {
						Authorization: `Basic ${credentials}`,
						Accept: "application/json",
						"Accept-Language": "en_US",
						"Content-Type": "application/x-www-form-urlencoded"
					},
					body: new URLSearchParams({
						grant_type: "refresh_token",
						refresh_token: refreshToken
					}).toString()
				});
				if (!response.data) throw new BetterAuthError("FAILED_TO_REFRESH_ACCESS_TOKEN");
				const data = response.data;
				return {
					accessToken: data.access_token,
					refreshToken: data.refresh_token,
					accessTokenExpiresAt: data.expires_in ? new Date(Date.now() + data.expires_in * 1e3) : void 0
				};
			} catch (error) {
				logger.error("PayPal token refresh failed:", error);
				throw new BetterAuthError("FAILED_TO_REFRESH_ACCESS_TOKEN");
			}
		},
		async verifyIdToken(token, nonce) {
			if (options.disableIdTokenSignIn) return false;
			if (options.verifyIdToken) return options.verifyIdToken(token, nonce);
			try {
				return !!decodeJwt(token).sub;
			} catch (error) {
				logger.error("Failed to verify PayPal ID token:", error);
				return false;
			}
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			if (!token.accessToken) {
				logger.error("Access token is required to fetch PayPal user info");
				return null;
			}
			try {
				const response = await betterFetch(`${userInfoEndpoint}?schema=paypalv1.1`, { headers: {
					Authorization: `Bearer ${token.accessToken}`,
					Accept: "application/json"
				} });
				if (!response.data) {
					logger.error("Failed to fetch user info from PayPal");
					return null;
				}
				const userInfo = response.data;
				const userMap = await options.mapProfileToUser?.(userInfo);
				return {
					user: {
						id: userInfo.user_id,
						name: userInfo.name,
						email: userInfo.email,
						image: userInfo.picture,
						emailVerified: userInfo.email_verified,
						...userMap
					},
					data: userInfo
				};
			} catch (error) {
				logger.error("Failed to fetch user info from PayPal:", error);
				return null;
			}
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/polar.mjs
var polar = (options) => {
	return {
		id: "polar",
		name: "Polar",
		createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
			const _scopes = options.disableDefaultScope ? [] : [
				"openid",
				"profile",
				"email"
			];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return createAuthorizationURL({
				id: "polar",
				options,
				authorizationEndpoint: "https://polar.sh/oauth2/authorize",
				scopes: _scopes,
				state,
				codeVerifier,
				redirectURI,
				prompt: options.prompt
			});
		},
		validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				codeVerifier,
				redirectURI,
				options,
				tokenEndpoint: "https://api.polar.sh/v1/oauth2/token"
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint: "https://api.polar.sh/v1/oauth2/token"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch("https://api.polar.sh/v1/oauth2/userinfo", { headers: { Authorization: `Bearer ${token.accessToken}` } });
			if (error) return null;
			const userMap = await options.mapProfileToUser?.(profile);
			return {
				user: {
					id: profile.id,
					name: profile.public_name || profile.username || "",
					email: profile.email,
					image: profile.avatar_url,
					emailVerified: profile.email_verified ?? false,
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/railway.mjs
var authorizationEndpoint = "https://backboard.railway.com/oauth/auth";
var tokenEndpoint = "https://backboard.railway.com/oauth/token";
var userinfoEndpoint = "https://backboard.railway.com/oauth/me";
var railway = (options) => {
	return {
		id: "railway",
		name: "Railway",
		createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
			const _scopes = options.disableDefaultScope ? [] : [
				"openid",
				"email",
				"profile"
			];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return createAuthorizationURL({
				id: "railway",
				options,
				authorizationEndpoint,
				scopes: _scopes,
				state,
				codeVerifier,
				redirectURI
			});
		},
		validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				codeVerifier,
				redirectURI,
				options,
				tokenEndpoint,
				authentication: "basic"
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint,
				authentication: "basic"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch(userinfoEndpoint, { headers: { authorization: `Bearer ${token.accessToken}` } });
			if (error || !profile) return null;
			const userMap = await options.mapProfileToUser?.(profile);
			return {
				user: {
					id: profile.sub,
					name: profile.name,
					email: profile.email,
					image: profile.picture,
					emailVerified: false,
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/reddit.mjs
var reddit = (options) => {
	return {
		id: "reddit",
		name: "Reddit",
		createAuthorizationURL({ state, scopes, redirectURI }) {
			const _scopes = options.disableDefaultScope ? [] : ["identity"];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return createAuthorizationURL({
				id: "reddit",
				options,
				authorizationEndpoint: "https://www.reddit.com/api/v1/authorize",
				scopes: _scopes,
				state,
				redirectURI,
				duration: options.duration
			});
		},
		validateAuthorizationCode: async ({ code, redirectURI }) => {
			const body = new URLSearchParams({
				grant_type: "authorization_code",
				code,
				redirect_uri: options.redirectURI || redirectURI
			});
			const { data, error } = await betterFetch("https://www.reddit.com/api/v1/access_token", {
				method: "POST",
				headers: {
					"content-type": "application/x-www-form-urlencoded",
					accept: "text/plain",
					"user-agent": "better-auth",
					Authorization: `Basic ${base64.encode(`${options.clientId}:${options.clientSecret}`)}`
				},
				body: body.toString()
			});
			if (error) throw error;
			return getOAuth2Tokens(data);
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				authentication: "basic",
				tokenEndpoint: "https://www.reddit.com/api/v1/access_token"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch("https://oauth.reddit.com/api/v1/me", { headers: {
				Authorization: `Bearer ${token.accessToken}`,
				"User-Agent": "better-auth"
			} });
			if (error) return null;
			const userMap = await options.mapProfileToUser?.(profile);
			return {
				user: {
					id: profile.id,
					name: profile.name,
					email: profile.oauth_client_id,
					emailVerified: profile.has_verified_email,
					image: profile.icon_img?.split("?")[0],
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/roblox.mjs
var roblox = (options) => {
	return {
		id: "roblox",
		name: "Roblox",
		createAuthorizationURL({ state, scopes, redirectURI }) {
			const _scopes = options.disableDefaultScope ? [] : ["openid", "profile"];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return new URL(`https://apis.roblox.com/oauth/v1/authorize?scope=${_scopes.join("+")}&response_type=code&client_id=${options.clientId}&redirect_uri=${encodeURIComponent(options.redirectURI || redirectURI)}&state=${state}&prompt=${options.prompt || "select_account consent"}`);
		},
		validateAuthorizationCode: async ({ code, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				redirectURI: options.redirectURI || redirectURI,
				options,
				tokenEndpoint: "https://apis.roblox.com/oauth/v1/token",
				authentication: "post"
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint: "https://apis.roblox.com/oauth/v1/token"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch("https://apis.roblox.com/oauth/v1/userinfo", { headers: { authorization: `Bearer ${token.accessToken}` } });
			if (error) return null;
			const userMap = await options.mapProfileToUser?.(profile);
			return {
				user: {
					id: profile.sub,
					name: profile.nickname || profile.preferred_username || "",
					image: profile.picture,
					email: profile.preferred_username || null,
					emailVerified: false,
					...userMap
				},
				data: { ...profile }
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/salesforce.mjs
var salesforce = (options) => {
	const isSandbox = (options.environment ?? "production") === "sandbox";
	const authorizationEndpoint = options.loginUrl ? `https://${options.loginUrl}/services/oauth2/authorize` : isSandbox ? "https://test.salesforce.com/services/oauth2/authorize" : "https://login.salesforce.com/services/oauth2/authorize";
	const tokenEndpoint = options.loginUrl ? `https://${options.loginUrl}/services/oauth2/token` : isSandbox ? "https://test.salesforce.com/services/oauth2/token" : "https://login.salesforce.com/services/oauth2/token";
	const userInfoEndpoint = options.loginUrl ? `https://${options.loginUrl}/services/oauth2/userinfo` : isSandbox ? "https://test.salesforce.com/services/oauth2/userinfo" : "https://login.salesforce.com/services/oauth2/userinfo";
	return {
		id: "salesforce",
		name: "Salesforce",
		async createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
			if (!options.clientId || !options.clientSecret) {
				logger.error("Client Id and Client Secret are required for Salesforce. Make sure to provide them in the options.");
				throw new BetterAuthError("CLIENT_ID_AND_SECRET_REQUIRED");
			}
			if (!codeVerifier) throw new BetterAuthError("codeVerifier is required for Salesforce");
			const _scopes = options.disableDefaultScope ? [] : [
				"openid",
				"email",
				"profile"
			];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return createAuthorizationURL({
				id: "salesforce",
				options,
				authorizationEndpoint,
				scopes: _scopes,
				state,
				codeVerifier,
				redirectURI: options.redirectURI || redirectURI
			});
		},
		validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				codeVerifier,
				redirectURI: options.redirectURI || redirectURI,
				options,
				tokenEndpoint
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientSecret: options.clientSecret
				},
				tokenEndpoint
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			try {
				const { data: user } = await betterFetch(userInfoEndpoint, { headers: { Authorization: `Bearer ${token.accessToken}` } });
				if (!user) {
					logger.error("Failed to fetch user info from Salesforce");
					return null;
				}
				const userMap = await options.mapProfileToUser?.(user);
				return {
					user: {
						id: user.user_id,
						name: user.name,
						email: user.email,
						image: user.photos?.picture || user.photos?.thumbnail,
						emailVerified: user.email_verified ?? false,
						...userMap
					},
					data: user
				};
			} catch (error) {
				logger.error("Failed to fetch user info from Salesforce:", error);
				return null;
			}
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/slack.mjs
var slack = (options) => {
	return {
		id: "slack",
		name: "Slack",
		createAuthorizationURL({ state, scopes, redirectURI }) {
			const _scopes = options.disableDefaultScope ? [] : [
				"openid",
				"profile",
				"email"
			];
			if (scopes) _scopes.push(...scopes);
			if (options.scope) _scopes.push(...options.scope);
			const url = new URL("https://slack.com/openid/connect/authorize");
			url.searchParams.set("scope", _scopes.join(" "));
			url.searchParams.set("response_type", "code");
			url.searchParams.set("client_id", options.clientId);
			url.searchParams.set("redirect_uri", options.redirectURI || redirectURI);
			url.searchParams.set("state", state);
			return url;
		},
		validateAuthorizationCode: async ({ code, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				redirectURI,
				options,
				tokenEndpoint: "https://slack.com/api/openid.connect.token"
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint: "https://slack.com/api/openid.connect.token"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch("https://slack.com/api/openid.connect.userInfo", { headers: { authorization: `Bearer ${token.accessToken}` } });
			if (error) return null;
			const userMap = await options.mapProfileToUser?.(profile);
			return {
				user: {
					id: profile["https://slack.com/user_id"],
					name: profile.name || "",
					email: profile.email,
					emailVerified: profile.email_verified,
					image: profile.picture || profile["https://slack.com/user_image_512"],
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/spotify.mjs
var spotify = (options) => {
	return {
		id: "spotify",
		name: "Spotify",
		createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
			const _scopes = options.disableDefaultScope ? [] : ["user-read-email"];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return createAuthorizationURL({
				id: "spotify",
				options,
				authorizationEndpoint: "https://accounts.spotify.com/authorize",
				scopes: _scopes,
				state,
				codeVerifier,
				redirectURI
			});
		},
		validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				codeVerifier,
				redirectURI,
				options,
				tokenEndpoint: "https://accounts.spotify.com/api/token"
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint: "https://accounts.spotify.com/api/token"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch("https://api.spotify.com/v1/me", {
				method: "GET",
				headers: { Authorization: `Bearer ${token.accessToken}` }
			});
			if (error) return null;
			const userMap = await options.mapProfileToUser?.(profile);
			return {
				user: {
					id: profile.id,
					name: profile.display_name,
					email: profile.email,
					image: profile.images[0]?.url,
					emailVerified: false,
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/tiktok.mjs
var tiktok = (options) => {
	return {
		id: "tiktok",
		name: "TikTok",
		createAuthorizationURL({ state, scopes, redirectURI }) {
			const _scopes = options.disableDefaultScope ? [] : ["user.info.profile"];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return new URL(`https://www.tiktok.com/v2/auth/authorize?scope=${_scopes.join(",")}&response_type=code&client_key=${options.clientKey}&redirect_uri=${encodeURIComponent(options.redirectURI || redirectURI)}&state=${state}`);
		},
		validateAuthorizationCode: async ({ code, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				redirectURI: options.redirectURI || redirectURI,
				options: {
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint: "https://open.tiktokapis.com/v2/oauth/token/"
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: { clientSecret: options.clientSecret },
				tokenEndpoint: "https://open.tiktokapis.com/v2/oauth/token/",
				authentication: "post",
				extraParams: { client_key: options.clientKey }
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch(`https://open.tiktokapis.com/v2/user/info/?fields=${[
				"open_id",
				"avatar_large_url",
				"display_name",
				"username"
			].join(",")}`, { headers: { authorization: `Bearer ${token.accessToken}` } });
			if (error) return null;
			return {
				user: {
					email: profile.data.user.email || profile.data.user.username,
					id: profile.data.user.open_id,
					name: profile.data.user.display_name || profile.data.user.username || "",
					image: profile.data.user.avatar_large_url,
					emailVerified: false
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/twitch.mjs
var twitch = (options) => {
	return {
		id: "twitch",
		name: "Twitch",
		createAuthorizationURL({ state, scopes, redirectURI }) {
			const _scopes = options.disableDefaultScope ? [] : ["user:read:email", "openid"];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return createAuthorizationURL({
				id: "twitch",
				redirectURI,
				options,
				authorizationEndpoint: "https://id.twitch.tv/oauth2/authorize",
				scopes: _scopes,
				state,
				claims: options.claims || [
					"email",
					"email_verified",
					"preferred_username",
					"picture"
				]
			});
		},
		validateAuthorizationCode: async ({ code, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				redirectURI,
				options,
				tokenEndpoint: "https://id.twitch.tv/oauth2/token"
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint: "https://id.twitch.tv/oauth2/token"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const idToken = token.idToken;
			if (!idToken) {
				logger.error("No idToken found in token");
				return null;
			}
			const profile = decodeJwt(idToken);
			const userMap = await options.mapProfileToUser?.(profile);
			return {
				user: {
					id: profile.sub,
					name: profile.preferred_username,
					email: profile.email,
					image: profile.picture,
					emailVerified: profile.email_verified,
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/twitter.mjs
var twitter = (options) => {
	return {
		id: "twitter",
		name: "Twitter",
		createAuthorizationURL(data) {
			const _scopes = options.disableDefaultScope ? [] : [
				"users.read",
				"tweet.read",
				"offline.access",
				"users.email"
			];
			if (options.scope) _scopes.push(...options.scope);
			if (data.scopes) _scopes.push(...data.scopes);
			return createAuthorizationURL({
				id: "twitter",
				options,
				authorizationEndpoint: "https://x.com/i/oauth2/authorize",
				scopes: _scopes,
				state: data.state,
				codeVerifier: data.codeVerifier,
				redirectURI: data.redirectURI
			});
		},
		validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				codeVerifier,
				authentication: "basic",
				redirectURI,
				options,
				tokenEndpoint: "https://api.x.com/2/oauth2/token"
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				authentication: "basic",
				tokenEndpoint: "https://api.x.com/2/oauth2/token"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error: profileError } = await betterFetch("https://api.x.com/2/users/me?user.fields=profile_image_url", {
				method: "GET",
				headers: { Authorization: `Bearer ${token.accessToken}` }
			});
			if (profileError) return null;
			const { data: emailData, error: emailError } = await betterFetch("https://api.x.com/2/users/me?user.fields=confirmed_email", {
				method: "GET",
				headers: { Authorization: `Bearer ${token.accessToken}` }
			});
			let emailVerified = false;
			if (!emailError && emailData?.data?.confirmed_email) {
				profile.data.email = emailData.data.confirmed_email;
				emailVerified = true;
			}
			const userMap = await options.mapProfileToUser?.(profile);
			return {
				user: {
					id: profile.data.id,
					name: profile.data.name,
					email: profile.data.email || profile.data.username || null,
					image: profile.data.profile_image_url,
					emailVerified,
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/vercel.mjs
var vercel = (options) => {
	return {
		id: "vercel",
		name: "Vercel",
		createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
			if (!codeVerifier) throw new BetterAuthError("codeVerifier is required for Vercel");
			let _scopes = void 0;
			if (options.scope !== void 0 || scopes !== void 0) {
				_scopes = [];
				if (options.scope) _scopes.push(...options.scope);
				if (scopes) _scopes.push(...scopes);
			}
			return createAuthorizationURL({
				id: "vercel",
				options,
				authorizationEndpoint: "https://vercel.com/oauth/authorize",
				scopes: _scopes,
				state,
				codeVerifier,
				redirectURI
			});
		},
		validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
			return validateAuthorizationCode({
				code,
				codeVerifier,
				redirectURI,
				options,
				tokenEndpoint: "https://api.vercel.com/login/oauth/token"
			});
		},
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch("https://api.vercel.com/login/oauth/userinfo", { headers: { Authorization: `Bearer ${token.accessToken}` } });
			if (error || !profile) return null;
			const userMap = await options.mapProfileToUser?.(profile);
			return {
				user: {
					id: profile.sub,
					name: profile.name ?? profile.preferred_username ?? "",
					email: profile.email,
					image: profile.picture,
					emailVerified: profile.email_verified ?? false,
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/vk.mjs
var vk = (options) => {
	return {
		id: "vk",
		name: "VK",
		async createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
			const _scopes = options.disableDefaultScope ? [] : ["email", "phone"];
			if (options.scope) _scopes.push(...options.scope);
			if (scopes) _scopes.push(...scopes);
			return createAuthorizationURL({
				id: "vk",
				options,
				authorizationEndpoint: "https://id.vk.com/authorize",
				scopes: _scopes,
				state,
				redirectURI,
				codeVerifier
			});
		},
		validateAuthorizationCode: async ({ code, codeVerifier, redirectURI, deviceId }) => {
			return validateAuthorizationCode({
				code,
				codeVerifier,
				redirectURI: options.redirectURI || redirectURI,
				options,
				deviceId,
				tokenEndpoint: "https://id.vk.com/oauth2/auth"
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => {
			return refreshAccessToken({
				refreshToken,
				options: {
					clientId: options.clientId,
					clientKey: options.clientKey,
					clientSecret: options.clientSecret
				},
				tokenEndpoint: "https://id.vk.com/oauth2/auth"
			});
		},
		async getUserInfo(data) {
			if (options.getUserInfo) return options.getUserInfo(data);
			if (!data.accessToken) return null;
			const formBody = new URLSearchParams({
				access_token: data.accessToken,
				client_id: options.clientId
			}).toString();
			const { data: profile, error } = await betterFetch("https://id.vk.com/oauth2/user_info", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: formBody
			});
			if (error) return null;
			const userMap = await options.mapProfileToUser?.(profile);
			if (!profile.user.email && !userMap?.email) return null;
			return {
				user: {
					id: profile.user.user_id,
					first_name: profile.user.first_name,
					last_name: profile.user.last_name,
					email: profile.user.email,
					image: profile.user.avatar,
					emailVerified: false,
					birthday: profile.user.birthday,
					sex: profile.user.sex,
					name: `${profile.user.first_name} ${profile.user.last_name}`,
					...userMap
				},
				data: profile
			};
		},
		options
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/zoom.mjs
var zoom = (userOptions) => {
	const options = {
		pkce: true,
		...userOptions
	};
	return {
		id: "zoom",
		name: "Zoom",
		createAuthorizationURL: async ({ state, redirectURI, codeVerifier }) => {
			const params = new URLSearchParams({
				response_type: "code",
				redirect_uri: options.redirectURI ? options.redirectURI : redirectURI,
				client_id: options.clientId,
				state
			});
			if (options.pkce) {
				const codeChallenge = await generateCodeChallenge(codeVerifier);
				params.set("code_challenge_method", "S256");
				params.set("code_challenge", codeChallenge);
			}
			const url = new URL("https://zoom.us/oauth/authorize");
			url.search = params.toString();
			return url;
		},
		validateAuthorizationCode: async ({ code, redirectURI, codeVerifier }) => {
			return validateAuthorizationCode({
				code,
				redirectURI: options.redirectURI || redirectURI,
				codeVerifier,
				options,
				tokenEndpoint: "https://zoom.us/oauth/token",
				authentication: "post"
			});
		},
		refreshAccessToken: options.refreshAccessToken ? options.refreshAccessToken : async (refreshToken) => refreshAccessToken({
			refreshToken,
			options: {
				clientId: options.clientId,
				clientKey: options.clientKey,
				clientSecret: options.clientSecret
			},
			tokenEndpoint: "https://zoom.us/oauth/token"
		}),
		async getUserInfo(token) {
			if (options.getUserInfo) return options.getUserInfo(token);
			const { data: profile, error } = await betterFetch("https://api.zoom.us/v2/users/me", { headers: { authorization: `Bearer ${token.accessToken}` } });
			if (error) return null;
			const userMap = await options.mapProfileToUser?.(profile);
			return {
				user: {
					id: profile.id,
					name: profile.display_name,
					image: profile.pic_url,
					email: profile.email,
					emailVerified: Boolean(profile.verified),
					...userMap
				},
				data: { ...profile }
			};
		}
	};
};
//#endregion
//#region node_modules/@better-auth/core/dist/social-providers/index.mjs
var socialProviders = {
	apple,
	atlassian,
	cognito,
	discord,
	facebook,
	figma,
	github,
	microsoft,
	google,
	huggingface,
	slack,
	spotify,
	twitch,
	twitter,
	dropbox,
	kick,
	linear,
	linkedin,
	gitlab,
	tiktok,
	reddit,
	roblox,
	salesforce,
	vk,
	zoom,
	notion,
	kakao,
	naver,
	line,
	paybin,
	paypal,
	polar,
	railway,
	vercel
};
var SocialProviderListEnum = _enum(Object.keys(socialProviders)).or(string());
//#endregion
//#region node_modules/@better-auth/core/dist/index.mjs
var dist_exports = /* @__PURE__ */ __exportAll({});
//#endregion
export { initGetFieldName as S, runWithTransaction as _, oauth2_exports as a, createAdapterFactory as b, createFetch as c, normalizePathname as d, decodeJwt as f, runWithAdapter as g, queueAfterTransactionHook as h, validateAuthorizationCode as i, createAuthorizationURL as l, getCurrentAdapter as m, SocialProviderListEnum as n, refreshAccessToken as o, createLocalJWKSet as p, socialProviders as r, betterFetch as s, dist_exports as t, deprecate as u, capitalizeFirstLetter as v, initGetModelName as x, whereOperators as y };
