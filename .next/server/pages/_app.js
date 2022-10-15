"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.tsx










function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.NextSeo, {
                title: "Okera Johnson | Fullstack Developer",
                titleTemplate: "Okera Johnson | Fullstack Developer",
                defaultTitle: "Okera Johnson | Fullstack Developer",
                description: "Hey! I'm Okera Johnson, A Fullstack Developer",
                openGraph: {
                    url: "https://www.Okera.digital/",
                    title: "Okera Johnson | Fullstack Developer",
                    description: "Hey! I'm Okera Johnson, A Fullstack Developer",
                    images: [
                        {
                            url: "https://avatars.githubusercontent.com/u/16062726?v=4",
                            width: 800,
                            height: 420,
                            alt: "Okera Johnson | Fullstack Developer"
                        }, 
                    ]
                },
                twitter: {
                    handle: "@kr_Okera Johnson_",
                    site: "@kr_Okera Johnson_",
                    cardType: "summary_large_image"
                },
                additionalMetaTags: [
                    {
                        property: "keywords",
                        content: "Fullstack Developer, Okera Johnson, Okera Johnson, Web Developer, web development, web developer, blogger, tech enthusiast, open source"
                    }, 
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "icon",
                    type: "image/jpeg",
                    href: "/assests/avatar.jpeg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(806));
module.exports = __webpack_exports__;

})();