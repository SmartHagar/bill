(()=>{var e={};e.id=209,e.ids=[209],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},8498:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d});var r=a(482),s=a(9108),n=a(2563),l=a.n(n),i=a(8300),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);a.d(t,o);let d=["",{children:["roles",{children:["bendahara",{children:["simpanan",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,3488)),"/media/smarthagar/Assets/Project/NextJS/TA/bill/src/app/roles/bendahara/simpanan/page.tsx"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,4856)),"/media/smarthagar/Assets/Project/NextJS/TA/bill/src/app/roles/bendahara/simpanan/layout.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,1307)),"/media/smarthagar/Assets/Project/NextJS/TA/bill/src/app/roles/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,1342)),"/media/smarthagar/Assets/Project/NextJS/TA/bill/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/media/smarthagar/Assets/Project/NextJS/TA/bill/src/app/roles/bendahara/simpanan/page.tsx"],u="/roles/bendahara/simpanan/page",p={require:a,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/roles/bendahara/simpanan/page",pathname:"/roles/bendahara/simpanan",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3824:(e,t,a)=>{Promise.resolve().then(a.bind(a,3011))},5303:()=>{},3011:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>x});var r=a(5344),s=a(3729),n=a(673),l=a(8325),i=a(6141),o=a(3158),d=a(7023),c=a(87);let u=(0,o.Ue)((0,d.mW)((e,t)=>({dtAnggota:[],setAnggota:async({page:t=1,limit:a=10,search:r})=>{try{let s=await (0,c.hi)({method:"get",url:"/anggota",params:{limit:a,page:t,search:r}});return e(e=>({...e,dtAnggota:s.data})),{status:"berhasil",data:s.data}}catch(e){return{status:"error",error:e.response.data}}},setAnggotaAll:async({search:t})=>{try{let a=await (0,c.hi)({method:"get",url:"/anggota/all",params:{search:t}});return e(e=>({...e,dtAnggota:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setAnggotaSimpanan:async({page:t=1,limit:a=10,search:r})=>{try{let s=await (0,c.hi)({method:"get",url:"/anggota/simpanan",params:{limit:a,page:t,search:r}});return e(e=>({...e,dtAnggota:s.data.data})),{status:"berhasil",data:s.data}}catch(e){return{status:"error",error:e.response.data}}}})));var p=a(8428);let h=({search:e})=>{let{setAnggotaSimpanan:t,dtAnggota:a}=u(),[o,d]=(0,s.useState)(1),[c,h]=(0,s.useState)(10),[m,x]=(0,s.useState)(!0),g=(0,p.useRouter)(),b=async()=>{await t({page:o,limit:c,search:e}),x(!1)};return(0,s.useEffect)(()=>(b(),()=>{}),[o,c]),(0,s.useEffect)(()=>{d(1),b()},[e]),r.jsx("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:m?r.jsx(n.Z,{}):(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"",children:r.jsx(i.Z,{headTable:["No","Jml. Simpanan","NIK","Nama","Jenkel","Alamat","No. HP","Jabatan"],tableBodies:["jmlh_simpanan","nik","nm_anggota","jenkel","alamat","no_hp","jabatan"],dataTable:a.data,page:o,limit:c,ubah:!1,hapus:!1,rowClick:e=>{g.push(`/roles/bendahara/simpanan/${e.id}`)}})}),a?.last_page>1&&r.jsx("div",{className:"mt-4",children:r.jsx(l.Z,{currentPage:a?.current_page,totalPages:a?.last_page,setPage:d})})]})})};var m=a(3534);let x=()=>{let[e,t]=(0,s.useState)("");return(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[r.jsx("div",{className:"mb-4 flex justify-between",children:r.jsx("p",{children:"Silahkan klik pada anggota untuk melihat dan menambahkan simpanan"})}),r.jsx(m.Z,{placeholder:"Cari Data",onChange:e=>t(e)})]}),r.jsx(h,{search:e})]})}},3534:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(5344);a(3729);let s=({placeholder:e,addClass:t,onChange:a,defaultValue:s=""})=>r.jsx("div",{className:t,children:r.jsx("input",{className:"w-full text-gray-700 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",placeholder:e,onChange:e=>{a(e.target.value)},defaultValue:s})})},8325:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(5344);a(3729);var s=a(5929);let n=({totalPages:e,currentPage:t,setPage:a})=>{let n=[];if(e<=5)n=Array.from({length:e},(e,t)=>t+1);else{n=[1,t-1,t,t+1,e],n=(n=Array.from(new Set(n)).sort((e,t)=>e-t)).filter(t=>t>0&&t<=e);for(let e=1;e<n.length-1;e++)n[e]-n[e-1]>1&&(n.splice(e,0,"..."),e++);e-n[n.length-2]>1&&n.splice(n.length-1,0,"...")}return r.jsx("div",{className:"h-full",children:(0,r.jsxs)("ol",{className:"flex justify-center gap-1 text-xs font-medium",children:[t>1&&r.jsx("li",{children:r.jsx("div",{onClick:()=>a(t-1),className:"cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100",children:r.jsx(s.pjk,{})})}),n.map((e,s)=>"..."===e?r.jsx("li",{className:"flex items-end text-xl",children:r.jsx("div",{className:"block h-8 w-8 rounded border border-gray-100 text-center leading-8",children:e})},s):r.jsx("li",{children:r.jsx("div",{onClick:()=>a(e),className:`cursor-pointer block h-8 w-8 rounded border border-gray-100 text-center leading-8 ${e==t?"bg-blue-900 text-white":""}`,children:e})},s)),t<e&&r.jsx("li",{children:r.jsx("div",{onClick:()=>a(t+1),className:"cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100",children:r.jsx(s.fmn,{})})})]})})}},6141:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var r=a(5344),s=a(3729),n=a(87),l=a(9410),i=a(7030),o=a.n(i);let d=e=>{let t=e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");return`Rp. ${t}`},c=(e,t,a,s)=>{e?.thn_angkatan?.substring(2),e?.mhs?.thn_angkatan?.substring(2);let i=e?.simpanan,c=i?.reduce((e,t)=>e+parseInt(t.nominal),0),u=t.split(".");if(Array.isArray(u)){let i=u.length>1?u.pop():u,p=u.length,h=1,m=u[0];for(;(e=e[m])&&h<p;)m=u[h],h++;return"object"==typeof e?e?e[i]:"":"tgl_masuk"===t||"tgl_simpanan"===t||"tgl_lahir"===t||"tgl_pinjam"===t||"tgl_bayar"===t?o()(e).format("DD/MM/YYYY"):"gambar"===t||"foto"===t||"bukti"===t||"bukti_bayar"===t?e&&r.jsx(l.default,{src:`${n._n}/${e}`,loading:"lazy",width:70,height:70,alt:"",className:"cursor-pointer",onClick:s?()=>s(a):void 0}):"nominal"===t||"angsuran"===t?d(e):"jmlh_simpanan"===t?d(c):"file"===t?e&&r.jsx("a",{href:`${n._n}/${e}`,target:"_blank",children:"Lihat File"}):r.jsx("p",{className:"capitalize",children:e})}throw"parts is not valid array"};var u=a(8428),p=a(5929);let h=e=>{let t=(0,u.useRouter)(),a=(0,u.useSearchParams)(),[n,l]=(0,s.useState)(0),[i,o]=(0,s.useState)(),[d,h]=(0,s.useState)(),m=t=>(e.page-1)*e.limit+t+1,x=a.get("sortby"),g=(e,a)=>{o(e);let r=window.location.href,s=new URL(r),i=new URLSearchParams(s.search),d=e===x?n+1:1,c=d%2==0?"desc":"asc";i.delete("sortby"),i.delete("order"),i.append("sortby",e),i.append("order",c),s.search=i.toString(),t.push(s.toString()),l(d),h(c)};(0,s.useEffect)(()=>{e.sorter&&g(e.sorter)},[e.sorter]);let b=t=>{e.rowClick&&e.rowClick(t)};return(0,r.jsxs)("table",{className:"w-full border-collapse text-left bg-white",children:[r.jsx("thead",{className:"",children:r.jsx("tr",{children:e.headTable&&e.headTable.map((t,a)=>{let s=e.tableBodies[a-1];return r.jsx("th",{scope:"col",className:`px-6 py-4 ${!("Aksi"===t||"No"===t)&&"cursor-pointer"}`,onClick:()=>{"Aksi"===t||"No"===t||g(s,a)},children:(0,r.jsxs)("div",{className:"flex items-center gap-1",children:[t,i===s&&(0,r.jsxs)("span",{className:"flex",children:[r.jsx(p.mXI,{className:`${"desc"===d&&"hidden"}`}),r.jsx(p.S9U,{className:`${"asc"===d&&"hidden"}`})]})]})},a)})})}),r.jsx("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100 ",children:e.dataTable&&e.dataTable.map((t,a)=>{let{id:s}=t;return(0,r.jsxs)("tr",{className:`${e.rowClick&&"cursor-pointer hover:bg-green/[0.2]"}`,onClick:()=>b(t),children:[r.jsx("td",{className:"px-6 py-4 rounded-l-xl",children:m(a)}),e.tableBodies.map((s,n)=>r.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:c(t,s,a,e.setIndexBox)},n)),r.jsx("td",{className:"px-6 py-4 rounded-r-xl",children:(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[e.costume&&e.costume(t),e.ubah&&r.jsx(p.Ph1,{onClick:()=>e.setEdit&&e?.setEdit(t),size:20,className:"cursor-pointer hover:text-yellow-500",title:"Ubah"}),e.hapus&&r.jsx(p.AuQ,{onClick:()=>e?.setDelete&&e?.setDelete({id:s,isDelete:!1}),size:20,className:"cursor-pointer hover:text-red-700",title:"Hapus"})]})})]},a)})})]})}},4856:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n,metadata:()=>s});var r=a(5036);a(2);let s={title:"Daftar Anggota"},n=e=>r.jsx(r.Fragment,{children:e.children})},3488:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>n,__esModule:()=>s,default:()=>l});let r=(0,a(6843).createProxy)(String.raw`/media/smarthagar/Assets/Project/NextJS/TA/bill/src/app/roles/bendahara/simpanan/page.tsx`),{__esModule:s,$$typeof:n}=r,l=r.default}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[638,356,337,434,94,82],()=>a(8498));module.exports=r})();