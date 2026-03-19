import { c as createServerFn, u as getCookie } from "./esm-m5_tZiEi.mjs";
import { a as zod_default } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as createSsrRpc } from "./createSsrRpc-CkqvYI0u.mjs";
import { t as i18n } from "../_libs/lingui__core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/locale-Bc_Sesmg.js
var _rolldown_dynamic_import_helper_default = (glob, path, segments) => {
	const query = path.lastIndexOf("?");
	const v = glob[query === -1 || query < path.lastIndexOf("/") ? path : path.slice(0, query)];
	if (v) return typeof v === "function" ? v() : Promise.resolve(v);
	return new Promise((_, reject) => {
		(typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path + (path.split("/").length !== segments ? ". Note that variables only represent file names one level deep." : ""))));
	});
};
var localeSchema = zod_default.union([
	zod_default.literal("af-ZA"),
	zod_default.literal("am-ET"),
	zod_default.literal("ar-SA"),
	zod_default.literal("az-AZ"),
	zod_default.literal("bg-BG"),
	zod_default.literal("bn-BD"),
	zod_default.literal("ca-ES"),
	zod_default.literal("cs-CZ"),
	zod_default.literal("da-DK"),
	zod_default.literal("de-DE"),
	zod_default.literal("el-GR"),
	zod_default.literal("en-US"),
	zod_default.literal("en-GB"),
	zod_default.literal("es-ES"),
	zod_default.literal("fa-IR"),
	zod_default.literal("fi-FI"),
	zod_default.literal("fr-FR"),
	zod_default.literal("he-IL"),
	zod_default.literal("hi-IN"),
	zod_default.literal("hu-HU"),
	zod_default.literal("id-ID"),
	zod_default.literal("it-IT"),
	zod_default.literal("ja-JP"),
	zod_default.literal("km-KH"),
	zod_default.literal("kn-IN"),
	zod_default.literal("ko-KR"),
	zod_default.literal("lt-LT"),
	zod_default.literal("lv-LV"),
	zod_default.literal("ml-IN"),
	zod_default.literal("mr-IN"),
	zod_default.literal("ms-MY"),
	zod_default.literal("ne-NP"),
	zod_default.literal("nl-NL"),
	zod_default.literal("no-NO"),
	zod_default.literal("or-IN"),
	zod_default.literal("pl-PL"),
	zod_default.literal("pt-BR"),
	zod_default.literal("pt-PT"),
	zod_default.literal("ro-RO"),
	zod_default.literal("ru-RU"),
	zod_default.literal("sk-SK"),
	zod_default.literal("sl-SI"),
	zod_default.literal("sq-AL"),
	zod_default.literal("sr-SP"),
	zod_default.literal("sv-SE"),
	zod_default.literal("ta-IN"),
	zod_default.literal("te-IN"),
	zod_default.literal("th-TH"),
	zod_default.literal("tr-TR"),
	zod_default.literal("uk-UA"),
	zod_default.literal("uz-UZ"),
	zod_default.literal("vi-VN"),
	zod_default.literal("zh-CN"),
	zod_default.literal("zh-TW"),
	zod_default.literal("zu-ZA")
]);
var storageKey = "locale";
var defaultLocale = "en-US";
var localeMap = {
	"af-ZA": { id: "1Cox/a" },
	"am-ET": { id: "UV0J8D" },
	"ar-SA": { id: "8HV3WN" },
	"az-AZ": { id: "/IkoRr" },
	"bg-BG": { id: "KhEBDR" },
	"bn-BD": { id: "Hds3Bq" },
	"ca-ES": { id: "M1RLfx" },
	"cs-CZ": { id: "w9VTXG" },
	"da-DK": { id: "Fo2vDn" },
	"de-DE": { id: "DDcvSo" },
	"el-GR": { id: "CZXzs4" },
	"en-US": { id: "lYGfRP" },
	"en-GB": { id: "PiMnH3" },
	"es-ES": { id: "65A04M" },
	"fa-IR": { id: "JFI3iH" },
	"fi-FI": { id: "USZ2N6" },
	"fr-FR": { id: "nLC6tu" },
	"he-IL": { id: "3oTCgM" },
	"hi-IN": { id: "tGjibo" },
	"hu-HU": { id: "mkWad2" },
	"id-ID": { id: "BQukYF" },
	"it-IT": { id: "Lj7sBL" },
	"ja-JP": { id: "dFtidv" },
	"km-KH": { id: "Fb6WVr" },
	"kn-IN": { id: "ffJEXe" },
	"ko-KR": { id: "h6S9Yz" },
	"lt-LT": { id: "Ot2qtY" },
	"lv-LV": { id: "/0YsGP" },
	"ml-IN": { id: "WQrafy" },
	"mr-IN": { id: "vKSpmV" },
	"ms-MY": { id: "tF97tn" },
	"ne-NP": { id: "3v9KAT" },
	"nl-NL": { id: "KIjvtr" },
	"no-NO": { id: "1IipHp" },
	"or-IN": { id: "S8nPbQ" },
	"pl-PL": { id: "trnWaw" },
	"pt-BR": { id: "R7+D0/" },
	"pt-PT": { id: "512Uma" },
	"ro-RO": { id: "uJc01W" },
	"ru-RU": { id: "nji0/X" },
	"sk-SK": { id: "paESr6" },
	"sl-SI": { id: "LSdcWW" },
	"sq-AL": { id: "pVxf7b" },
	"sr-SP": { id: "9aBtdW" },
	"sv-SE": { id: "UaISq3" },
	"ta-IN": { id: "fb427h" },
	"te-IN": { id: "2SnOmG" },
	"th-TH": { id: "SUr44j" },
	"tr-TR": { id: "Kz91g/" },
	"uk-UA": { id: "V9+2pH" },
	"uz-UZ": { id: "b1dG47" },
	"vi-VN": { id: "fROFIL" },
	"zh-CN": { id: "6imsQS" },
	"zh-TW": { id: "DM4gBB" },
	"zu-ZA": { id: "+v7Dt7" }
};
function isLocale(locale) {
	return localeSchema.safeParse(locale).success;
}
var RTL_LANGUAGES = new Set([
	"ar",
	"ckb",
	"dv",
	"fa",
	"he",
	"ps",
	"sd",
	"ug",
	"ur",
	"yi"
]);
function isRTL(locale) {
	const language = locale.split("-")[0].toLowerCase();
	return RTL_LANGUAGES.has(language);
}
var getLocale = async () => {
	const cookieLocale = getCookie(storageKey);
	if (!cookieLocale || !isLocale(cookieLocale)) return defaultLocale;
	return cookieLocale;
};
var setLocaleServerFn = createServerFn({ method: "POST" }).inputValidator(localeSchema).handler(createSsrRpc("14080f89ae495ac5a5d573b2a10df3d783b0f8d025c02f37771c42e9f7e4faa7"));
var loadLocale = async (locale) => {
	if (!isLocale(locale)) locale = defaultLocale;
	const { messages } = await _rolldown_dynamic_import_helper_default(/* @__PURE__ */ Object.assign({
		"../../locales/af-ZA.po": () => import("./af-ZA-CnZsNLTH.mjs"),
		"../../locales/am-ET.po": () => import("./am-ET-BBAfYQu7.mjs"),
		"../../locales/ar-SA.po": () => import("./ar-SA-Bz1uHuKH.mjs"),
		"../../locales/az-AZ.po": () => import("./az-AZ-B8PoGfKL.mjs"),
		"../../locales/bg-BG.po": () => import("./bg-BG-_4spiY-y.mjs"),
		"../../locales/bn-BD.po": () => import("./bn-BD-DHhJf5F1.mjs"),
		"../../locales/ca-ES.po": () => import("./ca-ES-CHBkkus7.mjs"),
		"../../locales/cs-CZ.po": () => import("./cs-CZ-niv5UUin.mjs"),
		"../../locales/da-DK.po": () => import("./da-DK-DC555_2T.mjs"),
		"../../locales/de-DE.po": () => import("./de-DE-DQxbACGV.mjs"),
		"../../locales/el-GR.po": () => import("./el-GR-DYycqv8m.mjs"),
		"../../locales/en-GB.po": () => import("./en-GB-BadNOqV6.mjs"),
		"../../locales/en-US.po": () => import("./en-US-D6HXns_H.mjs"),
		"../../locales/es-ES.po": () => import("./es-ES-BKv4Zca2.mjs"),
		"../../locales/fa-IR.po": () => import("./fa-IR-CFkdYLCl.mjs"),
		"../../locales/fi-FI.po": () => import("./fi-FI-C-sCweVc.mjs"),
		"../../locales/fr-FR.po": () => import("./fr-FR-CKTtU0fR.mjs"),
		"../../locales/he-IL.po": () => import("./he-IL-vZQQmuJ8.mjs"),
		"../../locales/hi-IN.po": () => import("./hi-IN-DWGfim3C.mjs"),
		"../../locales/hu-HU.po": () => import("./hu-HU-BZc7FRA3.mjs"),
		"../../locales/id-ID.po": () => import("./id-ID-rBAQufbv.mjs"),
		"../../locales/it-IT.po": () => import("./it-IT-BJS7TWKi.mjs"),
		"../../locales/ja-JP.po": () => import("./ja-JP-5NucR7ZH.mjs"),
		"../../locales/km-KH.po": () => import("./km-KH-BvOt2qrr.mjs"),
		"../../locales/kn-IN.po": () => import("./kn-IN-CuipBnDR.mjs"),
		"../../locales/ko-KR.po": () => import("./ko-KR-3qiiOT0v.mjs"),
		"../../locales/lt-LT.po": () => import("./lt-LT-G8TNQUnk.mjs"),
		"../../locales/lv-LV.po": () => import("./lv-LV-752A8SZX.mjs"),
		"../../locales/ml-IN.po": () => import("./ml-IN-HXumVn5M.mjs"),
		"../../locales/mr-IN.po": () => import("./mr-IN-DkZmQ9NC.mjs"),
		"../../locales/ms-MY.po": () => import("./ms-MY-HnXlJ5sv.mjs"),
		"../../locales/ne-NP.po": () => import("./ne-NP-DPjY_Aq2.mjs"),
		"../../locales/nl-NL.po": () => import("./nl-NL-BvzmvncK.mjs"),
		"../../locales/no-NO.po": () => import("./no-NO-CtL2R4Zp.mjs"),
		"../../locales/or-IN.po": () => import("./or-IN-BJZRuLs7.mjs"),
		"../../locales/pl-PL.po": () => import("./pl-PL-DK48rWy1.mjs"),
		"../../locales/pt-BR.po": () => import("./pt-BR-DDnobcgV.mjs"),
		"../../locales/pt-PT.po": () => import("./pt-PT-TIodBRgr.mjs"),
		"../../locales/ro-RO.po": () => import("./ro-RO-CppYRZQW.mjs"),
		"../../locales/ru-RU.po": () => import("./ru-RU-Qv3zPMBu.mjs"),
		"../../locales/sk-SK.po": () => import("./sk-SK-BspvKYgD.mjs"),
		"../../locales/sl-SI.po": () => import("./sl-SI-lvZZ_SFn.mjs"),
		"../../locales/sq-AL.po": () => import("./sq-AL-DJJcKloj.mjs"),
		"../../locales/sr-SP.po": () => import("./sr-SP-BUiTUUv2.mjs"),
		"../../locales/sv-SE.po": () => import("./sv-SE-D2C-1aRM.mjs"),
		"../../locales/ta-IN.po": () => import("./ta-IN-BpNKunVi.mjs"),
		"../../locales/te-IN.po": () => import("./te-IN-DRSGzNbz.mjs"),
		"../../locales/th-TH.po": () => import("./th-TH-BeY0Z8R6.mjs"),
		"../../locales/tr-TR.po": () => import("./tr-TR-P__LLZI-.mjs"),
		"../../locales/uk-UA.po": () => import("./uk-UA-DVbDwgxu.mjs"),
		"../../locales/uz-UZ.po": () => import("./uz-UZ-3Bn7eGr4.mjs"),
		"../../locales/vi-VN.po": () => import("./vi-VN-BdyEuOwX.mjs"),
		"../../locales/zh-CN.po": () => import("./zh-CN-DPMhcy7-.mjs"),
		"../../locales/zh-TW.po": () => import("./zh-TW-GjDpHVHI.mjs"),
		"../../locales/zu-ZA.po": () => import("./zu-ZA-ChH_gXzT.mjs")
	}), `../../locales/${locale}.po`, 4);
	i18n.loadAndActivate({
		locale,
		messages
	});
};
//#endregion
export { localeMap as a, loadLocale as i, isLocale as n, setLocaleServerFn as o, isRTL as r, getLocale as t };
