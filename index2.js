"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/App.jsx
function App() {
  const [currentPage, setCurrentPage] = (0, import_react.useState)(0);
  const [isFlipping, setIsFlipping] = (0, import_react.useState)(false);
  const [flipDir, setFlipDir] = (0, import_react.useState)("next");
  const turnPage = /* @__PURE__ */ __name((dir) => {
    if (isFlipping) return;
    setFlipDir(dir);
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage((prev) => {
        if (dir === "next") return Math.min(PAGE_DATA.length - 1, prev + 1);
        return Math.max(0, prev - 1);
      });
    }, 400);
    setTimeout(() => {
      setIsFlipping(false);
    }, 800);
  }, "turnPage");
  const page = PAGE_DATA[currentPage];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "min-h-screen bg-[#f1f5f9] flex items-center justify-center p-4 font-sans text-slate-800 relative overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Snowflakes, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none z-0", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[800px] h-[800px] bg-blue-200 rounded-full blur-[120px]" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "max-w-6xl w-full perspective-2000 relative z-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative flex flex-col md:flex-row min-h-[620px] bg-white rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-visible transform-style-3d border border-white/50", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 z-50 shadow-[0_0_10px_rgba(0,0,0,0.05)]" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "md:w-1/2 p-6 bg-slate-50 flex items-center justify-center rounded-t-[2rem] md:rounded-l-[2rem] md:rounded-tr-none border-r border-slate-100 relative overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')]" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-full h-full relative z-10 transition-opacity duration-300 ${isFlipping && flipDir === "prev" ? "opacity-30" : "opacity-100"}`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "img",
            {
              src: page.image,
              alt: page.tag,
              className: "w-full h-full object-cover rounded-2xl shadow-md border-4 border-white"
            }
          ) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "md:w-1/2 p-8 md:p-14 flex flex-col justify-between bg-white rounded-b-[2rem] md:rounded-r-[2rem] md:rounded-bl-none relative overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `flex flex-col flex-1 justify-center transition-all duration-300 ${isFlipping && flipDir === "next" ? "opacity-30 translate-x-4" : "opacity-100 translate-x-0"}`, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex items-center gap-3 mb-8", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { position: "absolute", top: 0, right: 0 }, className: "bg-sky-100 text-sky-700 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm border border-sky-200", children: page.tag }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-left", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-7xl md:text-9xl font-black text-slate-900 tracking-tighter mb-4 drop-shadow-sm leading-none", children: page.number }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-slate-500 text-lg md:text-xl font-medium leading-tight max-w-[320px]", children: page.desc })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-8 flex items-center justify-between border-t pt-8 border-slate-50 z-10", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                onClick: () => turnPage("prev"),
                disabled: currentPage === 0 || isFlipping,
                className: "group flex items-center gap-2 text-slate-400 hover:text-blue-600 disabled:opacity-10 transition-colors",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "p-3 rounded-full bg-slate-50 group-hover:bg-blue-50 transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronLeft, { className: "w-5 h-5" }) })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex gap-2", children: PAGE_DATA.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "div",
              {
                className: `h-1.5 rounded-full transition-all duration-300 ${i === currentPage ? "w-6 bg-blue-500" : "w-1.5 bg-slate-200"}`
              },
              i
            )) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                onClick: () => turnPage("next"),
                disabled: currentPage === PAGE_DATA.length - 1 || isFlipping,
                className: "group flex items-center gap-2 text-slate-400 hover:text-blue-600 disabled:opacity-10 transition-colors",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "p-3 rounded-full bg-slate-50 group-hover:bg-blue-50 transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRight, { className: "w-5 h-5" }) })
              }
            )
          ] })
        ] }),
        isFlipping && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            className: `hidden md:block absolute top-0 bottom-0 w-1/2 z-40 pointer-events-none transition-transform duration-800 ease-in-out
                ${flipDir === "next" ? "right-0 origin-left animate-flip-next" : "left-0 origin-right animate-flip-prev"}
              `,
            style: { transformStyle: "preserve-3d" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.05)] backface-hidden flex items-center justify-center p-10 border-l border-slate-100", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-9xl font-black text-slate-50 opacity-10", children: page.number }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-slate-50 shadow-[10px_0_30px_rgba(0,0,0,0.05)] rotate-y-180 backface-hidden flex items-center justify-center border-r border-slate-100", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Star, { className: "w-12 h-12 text-blue-200 fill-current opacity-20" }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-[95%] mx-auto bg-black/10 rounded-[100%] blur-2xl mt-4" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .perspective-2000 {
          perspective: 2000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        @keyframes flip-next {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(-180deg); }
        }
        
        @keyframes flip-prev {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(180deg); }
        }

        .animate-flip-next {
          animation: flip-next 0.8s forwards ease-in-out;
        }
        
        .animate-flip-prev {
          animation: flip-prev 0.8s forwards ease-in-out;
        }
      ` })
  ] });
}
var import_jsx_runtime, import_react, import_lucide_react, PAGE_DATA, Snowflakes;
var init_App = __esm({
  "src/App.jsx"() {
    "use strict";
    import_jsx_runtime = require("react/jsx-runtime");
    import_react = __toESM(require("react"));
    import_lucide_react = require("lucide-react");
    PAGE_DATA = [
      {
        id: 1,
        tag: "\u0413\u041B\u0410\u0412\u041D\u0410\u042F",
        number: "2025",
        desc: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u0434\u043D\u043E\u0433\u043E \u043D\u0435\u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0433\u043E \u0433\u043E\u0434\u0430 Data Dev",
        image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: 2,
        tag: "\u041A\u041E\u041C\u0410\u041D\u0414\u0410",
        number: "58",
        desc: "\u0413\u0435\u0440\u043E\u0435\u0432 \u0432 \u0441\u0442\u0440\u043E\u044E. \u041D\u0430\u0441 \u0441\u0442\u0430\u043B\u043E \u043D\u0430 13 \u0431\u043E\u043B\u044C\u0448\u0435!",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: 3,
        tag: "\u041E\u0422\u0411\u041E\u0420",
        number: "80+",
        desc: "\u0421\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0439\u0442\u0438 \u0441\u0430\u043C\u044B\u0445 \xAB\u0441\u0432\u043E\u0438\u0445\xBB",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: 4,
        tag: "\u0413\u0415\u041E",
        number: "7",
        desc: "\u0421\u0442\u0440\u0430\u043D \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u043E \u043E\u0431\u0449\u0435\u0439 \u0446\u0435\u043B\u044C\u044E",
        image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: 5,
        tag: "\u0414\u0420\u0410\u0419\u0412",
        number: "28",
        desc: "\u041B\u0435\u0442 \u2014 \u043D\u0430\u0448 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u043E\u0437\u0440\u0430\u0441\u0442",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: 6,
        tag: "OFFLINE",
        number: "3",
        desc: "\u041C\u0430\u0441\u0448\u0442\u0430\u0431\u043D\u044B\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0438. \u041E\u0431\u043D\u044F\u043B\u0438\u0441\u044C \u0432\u0436\u0438\u0432\u0443\u044E!",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: 7,
        tag: "\u0420\u0415\u041B\u0418\u0417",
        number: "20.06",
        desc: "\u0414\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0410\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442\u043E\u0432",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: 8,
        tag: "LEVEL UP",
        number: "19",
        desc: "\u0413\u0440\u0435\u0439\u0434-\u0430\u043F\u043E\u0432. \u041C\u044B \u0440\u0430\u0441\u0442\u0435\u043C \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: 9,
        tag: "\u0413\u041E\u041B\u041E\u0421",
        number: "18",
        desc: "\u0412\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u043D\u0430 \u043A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u044F\u0445. \u0414\u0435\u043B\u0438\u043C\u0441\u044F \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438",
        image: "https://images.unsplash.com/photo-1475721027185-404ebc89d550?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: 10,
        tag: "RELAX",
        number: "960",
        desc: "\u0414\u043D\u0435\u0439 \u043E\u0442\u043F\u0443\u0441\u043A\u0430. \u041C\u044B \u0443\u043C\u0435\u0435\u043C \u043A\u0440\u0443\u0442\u043E \u043E\u0442\u0434\u044B\u0445\u0430\u0442\u044C!",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: 11,
        tag: "\u0427\u0410\u0422",
        number: "7768",
        desc: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439. \u041E\u0442 \u0431\u0430\u0433\u043E\u0432 \u0434\u043E \u0441\u043C\u044B\u0441\u043B\u0430 \u0436\u0438\u0437\u043D\u0438",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: 12,
        tag: "FORBES",
        number: "30/30",
        desc: "\u041B\u0438\u0437\u0430 \u0410\u0444\u0430\u043D\u0430\u0441\u044C\u0435\u0432\u0430 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435 \u0441\u0430\u043C\u044B\u0445 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0445",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: 13,
        tag: "LIFE",
        number: "17+",
        desc: "\u0421\u043E\u0431\u044B\u0442\u0438\u0439: \u0441\u0432\u0430\u0434\u044C\u0431\u044B, \u0434\u0435\u0442\u0438, \u043C\u0430\u0448\u0438\u043D\u044B \u0438 \u0434\u0438\u043F\u043B\u043E\u043C\u044B",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: 14,
        tag: "NEXT",
        number: "2026",
        desc: "\u0412\u043F\u0435\u0440\u0435\u0434 \u043A \u043D\u043E\u0432\u044B\u043C \u0432\u044B\u0441\u043E\u0442\u0430\u043C \u0438 \u0447\u0438\u0441\u0442\u043E\u043C\u0443 \u043A\u043E\u0434\u0443!",
        image: "https://images.unsplash.com/photo-1513297844881-e74a7ca4fe5f?auto=format&fit=crop&q=80&w=1000"
      }
    ];
    Snowflakes = /* @__PURE__ */ __name(() => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "absolute inset-0 pointer-events-none overflow-hidden z-0", children: [
      [...Array(40)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: "absolute text-blue-100 opacity-40",
          style: {
            left: `${Math.random() * 100}%`,
            top: `-50px`,
            animation: `fall ${7 + Math.random() * 12}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 20 + 10}px`
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Snowflake, { color: "var(--color-sky-700)" })
        },
        i
      )),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
      @keyframes fall {
        0% { transform: translateY(-5vh) rotate(0deg); }
        100% { transform: translateY(110vh) rotate(360deg); }
      }
    ` })
    ] }), "Snowflakes");
    __name(App, "App");
  }
});

// src/index.jsx
var src_exports = {};
var import_jsx_runtime2, import_react2, import_client;
var init_src = __esm({
  "src/index.jsx"() {
    "use strict";
    import_jsx_runtime2 = require("react/jsx-runtime");
    import_react2 = __toESM(require("react"));
    import_client = __toESM(require("react-dom/client"));
    init_App();
    import_client.default.createRoot(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(App, {}));
  }
});

// entrypoints:/index.html?entry=true
setTimeout(() => Promise.resolve().then(() => (init_src(), src_exports)), 0);
