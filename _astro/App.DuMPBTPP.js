import{r as n}from"./index.DiEladB3.js";var x={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function y(){if(p)return m;p=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function a(i,r,t){var d=null;if(t!==void 0&&(d=""+t),r.key!==void 0&&(d=""+r.key),"key"in r){t={};for(var c in r)c!=="key"&&(t[c]=r[c])}else t=r;return r=t.ref,{$$typeof:l,type:i,key:d,ref:r!==void 0?r:null,props:t}}return m.Fragment=s,m.jsx=a,m.jsxs=a,m}var u;function k(){return u||(u=1,x.exports=y()),x.exports}var e=k();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(...l)=>l.filter((s,a,i)=>!!s&&s.trim()!==""&&i.indexOf(s)===a).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,a,i)=>i?i.toUpperCase():a.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=l=>{const s=_(l);return s.charAt(0).toUpperCase()+s.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var E={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=l=>{for(const s in l)if(s.startsWith("aria-")||s==="role"||s==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=n.forwardRef(({color:l="currentColor",size:s=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:r="",children:t,iconNode:d,...c},g)=>n.createElement("svg",{ref:g,...E,width:s,height:s,stroke:l,strokeWidth:i?Number(a)*24/Number(s):a,className:f("lucide",r),...!t&&!M(c)&&{"aria-hidden":"true"},...c},[...d.map(([w,v])=>n.createElement(w,v)),...Array.isArray(t)?t:[t]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=(l,s)=>{const a=n.forwardRef(({className:i,...r},t)=>n.createElement(R,{ref:t,iconNode:s,className:f(`lucide-${C(b(l))}`,`lucide-${l}`,i),...r}));return a.displayName=b(l),a};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],A=o("briefcase",$);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],P=o("code",L);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],h=o("graduation-cap",I);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],j=o("hammer",z);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],T=o("mail",S);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],q=o("map-pin",D);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],G=o("menu",B);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],H=o("phone",F);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Y=o("wrench",J);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],N=o("x",W);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],U=o("zoom-in",O),V=[{id:"1",url:"/a1.jpeg",title:"Diseño Habitación"},{id:"2",url:"/a2.jpeg",title:"Render Habitación"},{id:"3",url:"/c2.jpeg",title:"Diseño Cocina"},{id:"4",url:"/c1.jpeg",title:"Render Cocina"},{id:"5",url:"/c3.jpeg",title:"Render Cocina"}],Z=()=>{const[l,s]=n.useState(null);return e.jsxs("div",{className:"w-full py-16 md:py-20 px-4 md:px-6",children:[e.jsxs("div",{className:"container mx-auto max-w-6xl",children:[e.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-slate-800 mb-10 md:mb-16 text-center",children:"Galería"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6",children:V.map(a=>e.jsxs("div",{className:"group relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300",onClick:()=>s(a),children:[e.jsx("img",{src:a.url,alt:a.title,className:"h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110",loading:"lazy"}),e.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",children:e.jsxs("div",{className:"text-white text-center",children:[e.jsx(U,{className:"w-8 h-8 mx-auto mb-2"}),e.jsx("p",{className:"font-semibold",children:a.title})]})})]},a.id))})]}),l&&e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200",onClick:()=>s(null),children:[e.jsx("button",{className:"absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-white/10 p-2 rounded-full",onClick:()=>s(null),children:e.jsx(N,{size:32})}),e.jsx("img",{src:l.url,alt:l.title,className:"max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain",onClick:a=>a.stopPropagation()})]})]})};function Q(){const[l,s]=n.useState(0),[a,i]=n.useState(!1);n.useEffect(()=>{const t=()=>s(window.scrollY);return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]);const r=()=>i(!1);return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-sans antialiased",children:[e.jsx("header",{className:"fixed top-0 left-0 right-0 bg-white shadow-md z-50 h-16 md:h-20",children:e.jsx("nav",{className:"h-full px-4 md:px-8",children:e.jsxs("div",{className:"h-full max-w-7xl mx-auto flex justify-between items-center",children:[e.jsxs("a",{href:"#",className:"flex items-center space-x-3 hover:opacity-80 transition-opacity",children:[e.jsx("img",{src:"/perfil.png",alt:"Mauricio Monje",className:"w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-md"}),e.jsx("span",{className:"text-base md:text-lg font-bold text-slate-800 whitespace-nowrap",children:"Mauricio Monje"})]}),e.jsx("button",{className:"md:hidden text-slate-800 p-2",onClick:()=>i(!a),children:a?e.jsx(N,{size:28}):e.jsx(G,{size:28})}),e.jsx("div",{className:"hidden md:flex space-x-8",children:["Inicio","Experiencia","Educación","Galería","Contacto"].map(t=>e.jsx("a",{href:t==="Inicio"?"#":`#${t.toLowerCase()}`,className:"text-slate-800 hover:text-blue-600 transition-colors font-bold",children:t},t))}),a&&e.jsx("div",{className:"fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 md:hidden",style:{top:"64px"},children:["Inicio","Experiencia","Educación","Galería","Contacto"].map(t=>e.jsx("a",{href:t==="Inicio"?"#":`#${t.toLowerCase()}`,onClick:r,className:"text-2xl text-slate-800 font-bold hover:text-blue-600",children:t},t))})]})})}),e.jsxs("section",{className:"relative mt-16 md:mt-20 h-screen flex items-center justify-center overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-600 to-slate-800",style:{transform:`translateY(${l*.5}px)`}}),e.jsxs("div",{className:"relative z-10 text-center text-white px-4 animate-fade-in",children:[e.jsxs("div",{className:"mb-6 md:mb-8 flex justify-center space-x-4",children:[e.jsx(j,{className:"w-12 h-12 md:w-16 md:h-16 animate-bounce",style:{animationDelay:"0s"}}),e.jsx(Y,{className:"w-12 h-12 md:w-16 md:h-16 animate-bounce",style:{animationDelay:"0.2s"}}),e.jsx(P,{className:"w-12 h-12 md:w-16 md:h-16 animate-bounce",style:{animationDelay:"0.4s"}})]}),e.jsx("h1",{className:"text-4xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-6 tracking-tight",children:"Mauricio Monje"}),e.jsx("p",{className:"text-lg md:text-2xl text-blue-100 mb-8",children:"Carpintero Profesional"}),e.jsx("a",{href:"#perfil",className:"inline-block bg-white text-blue-600 px-6 py-3 md:px-8 md:py-3 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm md:text-base",children:"Conoce mi trabajo"})]})]}),e.jsx("section",{id:"perfil",className:"py-16 md:py-20 px-4 md:px-6",children:e.jsx("div",{className:"container mx-auto max-w-4xl",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-6 md:p-12 transform hover:scale-105 transition-transform duration-300",children:[e.jsxs("h2",{className:"text-3xl md:text-4xl font-bold text-slate-800 mb-6 flex items-center",children:[e.jsx("span",{className:"w-2 h-10 md:h-12 bg-blue-600 mr-4 rounded-full"}),"Perfil Profesional"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-600 leading-relaxed text-justify md:text-left",children:"Soy versátil, autodidacta, proactivo e integro, buscando estabilidad económica. Con experiencia en carpintería, electromecánica y desarrollo web, combino habilidades técnicas con creatividad para ofrecer soluciones completas y de calidad."})]})})}),e.jsx("section",{id:"experiencia",className:"py-16 md:py-20 px-4 md:px-6 bg-gradient-to-br from-slate-100 to-blue-50",children:e.jsxs("div",{className:"container mx-auto max-w-6xl",children:[e.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-slate-800 mb-10 md:mb-16 text-center",children:"Experiencia Laboral"}),e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border-l-8 border-blue-600",children:[e.jsx("div",{className:"flex flex-col md:flex-row md:items-start justify-between mb-4",children:e.jsxs("div",{className:"flex items-center mb-2 md:mb-0",children:[e.jsx(j,{className:"w-10 h-10 md:w-12 md:h-12 text-blue-600 mr-4"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl md:text-2xl font-bold text-slate-800",children:"Carpintería"}),e.jsx("p",{className:"text-blue-600 font-semibold",children:"2017 - 2022"})]})]})}),e.jsx("ul",{className:"space-y-3 text-slate-600 md:ml-16 text-sm md:text-base",children:["Desarrollo de diseños personalizados para proyectos de carpintería","Elaboración de presupuestos para trabajos de carpintería y mobiliario","Instalación eléctrica de sensores y luces inteligentes","Ensamblaje e instalación de muebles en diversos espacios","Reparación y mantenimiento de taladros y electrodomésticos","Habilidades técnicas y de diagnóstico para resolver problemas variados"].map((t,d)=>e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${d>3?"bg-amber-600":"bg-blue-600"}`}),t]},d))})]})})]})}),e.jsx("section",{id:"educacion",className:"py-16 md:py-20 px-4 md:px-6",children:e.jsxs("div",{className:"container mx-auto max-w-6xl",children:[e.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-slate-800 mb-10 md:mb-16 text-center",children:"Educación y Formación"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg p-6 md:p-8 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300",children:[e.jsx(h,{className:"w-12 h-12 md:w-16 md:h-16 mb-4"}),e.jsx("h3",{className:"text-lg md:text-2xl font-bold mb-2",children:"Técnico Electromecánico"}),e.jsx("p",{className:"text-blue-100 text-sm md:text-base mb-2",children:"2011"}),e.jsx("p",{className:"text-blue-50 text-sm",children:"Colegio Provincial Técnico N°749"})]}),e.jsxs("div",{className:"bg-gradient-to-br from-green-500 to-green-700 rounded-2xl shadow-lg p-6 md:p-8 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300",children:[e.jsx(h,{className:"w-12 h-12 md:w-16 md:h-16 mb-4"}),e.jsx("h3",{className:"text-lg md:text-2xl font-bold mb-2",children:"Analista Programador"}),e.jsx("p",{className:"text-green-100 text-sm md:text-base mb-2",children:"2018 - Estudiante de 2° año"}),e.jsx("p",{className:"text-green-50 text-sm",children:"UNPSJB"})]}),e.jsxs("div",{className:"bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl shadow-lg p-6 md:p-8 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300",children:[e.jsx(h,{className:"w-12 h-12 md:w-16 md:h-16 mb-4"}),e.jsx("h3",{className:"text-lg md:text-2xl font-bold mb-2",children:"Programador Web Full Stack"}),e.jsx("p",{className:"text-teal-100 text-sm md:text-base mb-2",children:"2023"}),e.jsx("p",{className:"text-teal-50 text-sm",children:"EggEducation"})]}),e.jsx("div",{className:"bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl shadow-lg p-6 md:p-8 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl md:text-6xl font-bold mb-4",children:"B2"}),e.jsx("p",{className:"text-lg md:text-2xl font-semibold",children:"Nivel de Inglés"})]})})]})]})}),e.jsx("section",{id:"galeria",className:"py-16 md:py-20 px-4 md:px-6 bg-gradient-to-br from-slate-100 to-blue-50",children:e.jsx(Z,{})}),e.jsx("section",{id:"contacto",className:"py-16 md:py-20 px-4 md:px-6 bg-gradient-to-br from-slate-800 to-blue-900 text-white",children:e.jsxs("div",{className:"container mx-auto max-w-4xl text-center",children:[e.jsx("h2",{className:"text-3xl md:text-5xl font-bold mb-10 md:mb-12",children:"Información de Contacto"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 md:gap-8 mb-12",children:[e.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 border border-white/20",children:[e.jsx(q,{className:"w-10 h-10 md:w-12 md:h-12 mx-auto mb-4"}),e.jsx("h3",{className:"text-lg md:text-xl font-semibold mb-2",children:"Ubicación"}),e.jsx("p",{className:"text-blue-100 text-sm md:text-base",children:"Comodoro Rivadavia"}),e.jsx("p",{className:"text-blue-100 text-sm md:text-base",children:"CP: 9000"})]}),e.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 border border-white/20",children:[e.jsx(A,{className:"w-10 h-10 md:w-12 md:h-12 mx-auto mb-4"}),e.jsx("h3",{className:"text-lg md:text-xl font-semibold mb-2",children:"Disponibilidad"}),e.jsx("p",{className:"text-blue-100 text-sm md:text-base",children:"Full Time"}),e.jsx("p",{className:"text-blue-100 text-sm md:text-base",children:"Lic. Conducir: B1"})]})]}),e.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-white/20",children:[e.jsx("h3",{className:"text-xl md:text-2xl font-semibold mb-6",children:"Contacto Directo"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8",children:[e.jsxs("a",{href:"https://api.whatsapp.com/send/?phone=542974284129&text=Hola,%20%C2%BFEst%C3%A1s%20disponible?.&type=phone_number&app_absent=0",className:"w-full md:w-auto flex items-center justify-center space-x-3 bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-500 transition-colors duration-300",children:[e.jsx(H,{className:"w-5 h-5 md:w-6 md:h-6"}),e.jsx("span",{className:"font-semibold text-sm md:text-base",children:"297 4 284 129"})]}),e.jsxs("a",{href:"mailto:mauricio_93mum@hotmail.com?subject=Consulta%20sobre%20Desarrollo%20Web",target:"_blank",rel:"noopener noreferrer",className:"w-full md:w-auto flex items-center justify-center space-x-3 bg-blue-700 px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300",children:[e.jsx(T,{className:"w-5 h-5 md:w-6 md:h-6"}),e.jsx("span",{className:"font-semibold text-sm md:text-base",children:"mauricio_93mum"})]}),e.jsx("span",{className:"font-semibold hidden md:inline",children:"@hotmail.com"}),e.jsx("span",{className:"font-semibold text-lm",children:"@hotmail.com"})]})]}),e.jsx("div",{className:"text-blue-200 text-sm",children:e.jsx("p",{children:"Edad: 32 años"})})]})}),e.jsx("footer",{className:"bg-slate-900 text-white py-8 px-6",children:e.jsx("div",{className:"container mx-auto text-center",children:e.jsx("p",{className:"text-slate-400 text-sm",children:"© 2026 Mauricio Monje. Todos los derechos reservados."})})})]})}export{Q as default};
