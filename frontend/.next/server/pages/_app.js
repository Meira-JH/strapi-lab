/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchAPI: () => (/* binding */ fetchAPI),\n/* harmony export */   getStrapiURL: () => (/* binding */ getStrapiURL)\n/* harmony export */ });\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ \"qs\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Get full Strapi URL from path\n * @param {string} path Path of the URL\n * @returns {string} Full Strapi URL\n */ function getStrapiURL(path = \"\") {\n    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || \"http://localhost:1337\"}${path}`;\n}\n/**\n * Helper to make GET requests to Strapi API endpoints\n * @param {string} path Path of the API route\n * @param {Object} urlParamsObject URL params object, will be stringified\n * @param {Object} options Options passed to fetch\n * @returns Parsed API call response\n */ async function fetchAPI(path, urlParamsObject = {}, options = {}) {\n    // Merge default and user options\n    const mergedOptions = {\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        ...options\n    };\n    // Build request URL\n    const queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject);\n    const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : \"\"}`)}`;\n    // Trigger API call\n    const response = await fetch(requestUrl, mergedOptions);\n    // Handle response\n    if (!response.ok) {\n        console.error(response.statusText);\n        throw new Error(`An error occured please try again`);\n    }\n    const data = await response.json();\n    return data;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUI7QUFFbkI7Ozs7Q0FJQyxHQUNNLFNBQVNDLGFBQWFDLE9BQU8sRUFBRTtJQUNwQyxPQUFPLENBQUMsRUFDTkMsUUFBUUMsR0FBRyxDQUFDQywwQkFBMEIsSUFBSSx3QkFDM0MsRUFBRUgsS0FBSyxDQUFDO0FBQ1g7QUFFQTs7Ozs7O0NBTUMsR0FDTSxlQUFlSSxTQUFTSixJQUFJLEVBQUVLLGtCQUFrQixDQUFDLENBQUMsRUFBRUMsVUFBVSxDQUFDLENBQUM7SUFDckUsaUNBQWlDO0lBQ2pDLE1BQU1DLGdCQUFnQjtRQUNwQkMsU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtRQUNBLEdBQUdGLE9BQU87SUFDWjtJQUVBLG9CQUFvQjtJQUNwQixNQUFNRyxjQUFjWCxtREFBWSxDQUFDTztJQUNqQyxNQUFNTSxhQUFhLENBQUMsRUFBRVosYUFDcEIsQ0FBQyxJQUFJLEVBQUVDLEtBQUssRUFBRVMsY0FBYyxDQUFDLENBQUMsRUFBRUEsWUFBWSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQ3BELENBQUM7SUFFSCxtQkFBbUI7SUFDbkIsTUFBTUcsV0FBVyxNQUFNQyxNQUFNRixZQUFZSjtJQUV6QyxrQkFBa0I7SUFDbEIsSUFBSSxDQUFDSyxTQUFTRSxFQUFFLEVBQUU7UUFDaEJDLFFBQVFDLEtBQUssQ0FBQ0osU0FBU0ssVUFBVTtRQUNqQyxNQUFNLElBQUlDLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQztJQUNyRDtJQUNBLE1BQU1DLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtJQUNoQyxPQUFPRDtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbGliL2FwaS5qcz80NTQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyBmcm9tIFwicXNcIlxuXG4vKipcbiAqIEdldCBmdWxsIFN0cmFwaSBVUkwgZnJvbSBwYXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBQYXRoIG9mIHRoZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEZ1bGwgU3RyYXBpIFVSTFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpVVJMKHBhdGggPSBcIlwiKSB7XG4gIHJldHVybiBgJHtcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiXG4gIH0ke3BhdGh9YFxufVxuXG4vKipcbiAqIEhlbHBlciB0byBtYWtlIEdFVCByZXF1ZXN0cyB0byBTdHJhcGkgQVBJIGVuZHBvaW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggUGF0aCBvZiB0aGUgQVBJIHJvdXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdXJsUGFyYW1zT2JqZWN0IFVSTCBwYXJhbXMgb2JqZWN0LCB3aWxsIGJlIHN0cmluZ2lmaWVkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIHBhc3NlZCB0byBmZXRjaFxuICogQHJldHVybnMgUGFyc2VkIEFQSSBjYWxsIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFQSShwYXRoLCB1cmxQYXJhbXNPYmplY3QgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gIC8vIE1lcmdlIGRlZmF1bHQgYW5kIHVzZXIgb3B0aW9uc1xuICBjb25zdCBtZXJnZWRPcHRpb25zID0ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgLi4ub3B0aW9ucyxcbiAgfVxuXG4gIC8vIEJ1aWxkIHJlcXVlc3QgVVJMXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHVybFBhcmFtc09iamVjdClcbiAgY29uc3QgcmVxdWVzdFVybCA9IGAke2dldFN0cmFwaVVSTChcbiAgICBgL2FwaSR7cGF0aH0ke3F1ZXJ5U3RyaW5nID8gYD8ke3F1ZXJ5U3RyaW5nfWAgOiBcIlwifWBcbiAgKX1gXG5cbiAgLy8gVHJpZ2dlciBBUEkgY2FsbFxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwsIG1lcmdlZE9wdGlvbnMpXG5cbiAgLy8gSGFuZGxlIHJlc3BvbnNlXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgdGhyb3cgbmV3IEVycm9yKGBBbiBlcnJvciBvY2N1cmVkIHBsZWFzZSB0cnkgYWdhaW5gKVxuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgcmV0dXJuIGRhdGFcbn1cbiJdLCJuYW1lcyI6WyJxcyIsImdldFN0cmFwaVVSTCIsInBhdGgiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwiLCJmZXRjaEFQSSIsInVybFBhcmFtc09iamVjdCIsIm9wdGlvbnMiLCJtZXJnZWRPcHRpb25zIiwiaGVhZGVycyIsInF1ZXJ5U3RyaW5nIiwic3RyaW5naWZ5IiwicmVxdWVzdFVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1c1RleHQiLCJFcnJvciIsImRhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ }),

/***/ "./lib/media.js":
/*!**********************!*\
  !*** ./lib/media.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStrapiMedia: () => (/* binding */ getStrapiMedia)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./lib/api.js\");\n\nfunction getStrapiMedia(media) {\n    const { url } = media.data.attributes;\n    const imageUrl = url.startsWith(\"/\") ? (0,_api__WEBPACK_IMPORTED_MODULE_0__.getStrapiURL)(url) : url;\n    return imageUrl;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbWVkaWEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0M7QUFFN0IsU0FBU0MsZUFBZUMsS0FBSztJQUNsQyxNQUFNLEVBQUVDLEdBQUcsRUFBRSxHQUFHRCxNQUFNRSxJQUFJLENBQUNDLFVBQVU7SUFDckMsTUFBTUMsV0FBV0gsSUFBSUksVUFBVSxDQUFDLE9BQU9QLGtEQUFZQSxDQUFDRyxPQUFPQTtJQUMzRCxPQUFPRztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbGliL21lZGlhLmpzP2Q4N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U3RyYXBpVVJMIH0gZnJvbSBcIi4vYXBpXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaU1lZGlhKG1lZGlhKSB7XG4gIGNvbnN0IHsgdXJsIH0gPSBtZWRpYS5kYXRhLmF0dHJpYnV0ZXNcbiAgY29uc3QgaW1hZ2VVcmwgPSB1cmwuc3RhcnRzV2l0aChcIi9cIikgPyBnZXRTdHJhcGlVUkwodXJsKSA6IHVybFxuICByZXR1cm4gaW1hZ2VVcmxcbn1cbiJdLCJuYW1lcyI6WyJnZXRTdHJhcGlVUkwiLCJnZXRTdHJhcGlNZWRpYSIsIm1lZGlhIiwidXJsIiwiZGF0YSIsImF0dHJpYnV0ZXMiLCJpbWFnZVVybCIsInN0YXJ0c1dpdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/media.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalContext: () => (/* binding */ GlobalContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/css/style.css */ \"./assets/css/style.css\");\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/media */ \"./lib/media.js\");\n\n\n\n\n\n\n\n// Store Strapi Global object in context\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)({});\nconst MyApp = ({ Component, pageProps })=>{\n    const { global } = pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"shortcut icon\",\n                    href: (0,_lib_media__WEBPACK_IMPORTED_MODULE_6__.getStrapiMedia)(global.attributes.favicon)\n                }, void 0, false, {\n                    fileName: \"/Users/joaomeira/Documents/1_Github/Meira-JH/strapi-lab/frontend/pages/_app.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/joaomeira/Documents/1_Github/Meira-JH/strapi-lab/frontend/pages/_app.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n                value: global.attributes,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/joaomeira/Documents/1_Github/Meira-JH/strapi-lab/frontend/pages/_app.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/joaomeira/Documents/1_Github/Meira-JH/strapi-lab/frontend/pages/_app.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n// getInitialProps disables automatic static optimization for pages that don't\n// have getStaticProps. So article, category and home pages still get SSG.\n// Hopefully we can replace this with getStaticProps once this issue is fixed:\n// https://github.com/vercel/next.js/discussions/10949\nMyApp.getInitialProps = async (ctx)=>{\n    // Calls page's `getInitialProps` and fills `appProps.pageProps`\n    const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n    // Fetch global site settings from Strapi\n    const globalRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_5__.fetchAPI)(\"/global\", {\n        populate: {\n            favicon: \"*\",\n            defaultSeo: {\n                populate: \"*\"\n            }\n        }\n    });\n    // Pass the data to our page via props\n    return {\n        ...appProps,\n        pageProps: {\n            global: globalRes.data\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNFO0FBQ0k7QUFDSztBQUNBO0FBQ1E7QUFFN0Msd0NBQXdDO0FBQ2pDLE1BQU1LLDhCQUFnQkgsb0RBQWFBLENBQUMsQ0FBQyxHQUFFO0FBRTlDLE1BQU1JLFFBQVEsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRDtJQUVuQixxQkFDRTs7MEJBQ0UsOERBQUNQLGtEQUFJQTswQkFDSCw0RUFBQ1M7b0JBQ0NDLEtBQUk7b0JBQ0pDLE1BQU1SLDBEQUFjQSxDQUFDSyxPQUFPSSxVQUFVLENBQUNDLE9BQU87Ozs7Ozs7Ozs7OzBCQUdsRCw4REFBQ1QsY0FBY1UsUUFBUTtnQkFBQ0MsT0FBT1AsT0FBT0ksVUFBVTswQkFDOUMsNEVBQUNOO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFFQSw4RUFBOEU7QUFDOUUsMEVBQTBFO0FBQzFFLDhFQUE4RTtBQUM5RSxzREFBc0Q7QUFDdERGLE1BQU1XLGVBQWUsR0FBRyxPQUFPQztJQUM3QixnRUFBZ0U7SUFDaEUsTUFBTUMsV0FBVyxNQUFNbkIsK0RBQW1CLENBQUNrQjtJQUMzQyx5Q0FBeUM7SUFDekMsTUFBTUUsWUFBWSxNQUFNakIsa0RBQVFBLENBQUMsV0FBVztRQUMxQ2tCLFVBQVU7WUFDUlAsU0FBUztZQUNUUSxZQUFZO2dCQUNWRCxVQUFVO1lBQ1o7UUFDRjtJQUNGO0lBQ0Esc0NBQXNDO0lBQ3RDLE9BQU87UUFBRSxHQUFHRixRQUFRO1FBQUVYLFdBQVc7WUFBRUMsUUFBUVcsVUFBVUcsSUFBSTtRQUFDO0lBQUU7QUFDOUQ7QUFFQSxpRUFBZWpCLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgXCIuLi9hc3NldHMvY3NzL3N0eWxlLmNzc1wiXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcblxuLy8gU3RvcmUgU3RyYXBpIEdsb2JhbCBvYmplY3QgaW4gY29udGV4dFxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgeyBnbG9iYWwgfSA9IHBhZ2VQcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIGhyZWY9e2dldFN0cmFwaU1lZGlhKGdsb2JhbC5hdHRyaWJ1dGVzLmZhdmljb24pfVxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2dsb2JhbC5hdHRyaWJ1dGVzfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvPlxuICApXG59XG5cbi8vIGdldEluaXRpYWxQcm9wcyBkaXNhYmxlcyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiBmb3IgcGFnZXMgdGhhdCBkb24ndFxuLy8gaGF2ZSBnZXRTdGF0aWNQcm9wcy4gU28gYXJ0aWNsZSwgY2F0ZWdvcnkgYW5kIGhvbWUgcGFnZXMgc3RpbGwgZ2V0IFNTRy5cbi8vIEhvcGVmdWxseSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggZ2V0U3RhdGljUHJvcHMgb25jZSB0aGlzIGlzc3VlIGlzIGZpeGVkOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2Rpc2N1c3Npb25zLzEwOTQ5XG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIC8vIENhbGxzIHBhZ2UncyBgZ2V0SW5pdGlhbFByb3BzYCBhbmQgZmlsbHMgYGFwcFByb3BzLnBhZ2VQcm9wc2BcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgLy8gRmV0Y2ggZ2xvYmFsIHNpdGUgc2V0dGluZ3MgZnJvbSBTdHJhcGlcbiAgY29uc3QgZ2xvYmFsUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvZ2xvYmFsXCIsIHtcbiAgICBwb3B1bGF0ZToge1xuICAgICAgZmF2aWNvbjogXCIqXCIsXG4gICAgICBkZWZhdWx0U2VvOiB7XG4gICAgICAgIHBvcHVsYXRlOiBcIipcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbiAgLy8gUGFzcyB0aGUgZGF0YSB0byBvdXIgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHsgLi4uYXBwUHJvcHMsIHBhZ2VQcm9wczogeyBnbG9iYWw6IGdsb2JhbFJlcy5kYXRhIH0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIkFwcCIsIkhlYWQiLCJjcmVhdGVDb250ZXh0IiwiZmV0Y2hBUEkiLCJnZXRTdHJhcGlNZWRpYSIsIkdsb2JhbENvbnRleHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdsb2JhbCIsImxpbmsiLCJyZWwiLCJocmVmIiwiYXR0cmlidXRlcyIsImZhdmljb24iLCJQcm92aWRlciIsInZhbHVlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiYXBwUHJvcHMiLCJnbG9iYWxSZXMiLCJwb3B1bGF0ZSIsImRlZmF1bHRTZW8iLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("qs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();