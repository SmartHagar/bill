(()=>{var e={};e.id=12,e.ids=[12],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},2692:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d});var r=t(482),s=t(9108),n=t(2563),i=t.n(n),l=t(8300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(a,o);let d=["",{children:["roles",{children:["bendahara",{children:["pinjaman",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,39)),"/media/smarthagar/Assets/Project/NextJS/TA/bill/src/app/roles/bendahara/pinjaman/page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,7835)),"/media/smarthagar/Assets/Project/NextJS/TA/bill/src/app/roles/bendahara/pinjaman/layout.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,1307)),"/media/smarthagar/Assets/Project/NextJS/TA/bill/src/app/roles/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1342)),"/media/smarthagar/Assets/Project/NextJS/TA/bill/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/media/smarthagar/Assets/Project/NextJS/TA/bill/src/app/roles/bendahara/pinjaman/page.tsx"],c="/roles/bendahara/pinjaman/page",m={require:t,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/roles/bendahara/pinjaman/page",pathname:"/roles/bendahara/pinjaman",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4522:(e,a,t)=>{Promise.resolve().then(t.bind(t,4182))},4182:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>w});var r=t(5344),s=t(3729),n=t(673),i=t(8325),l=t(6141),o=t(9369);let d=({setDelete:e,setEdit:a,search:t,setTambah:d})=>{let{setPinjaman:u,dtPinjaman:c}=(0,o.Z)(),[m,p]=(0,s.useState)(1),[h,x]=(0,s.useState)(10),[j,g]=(0,s.useState)(!0),b=(0,s.useCallback)(async()=>{g(!0),await u({page:m,limit:h,search:t}),g(!1)},[u,m,h,t]);return(0,s.useEffect)(()=>{p(1),b()},[t,b]),(0,s.useEffect)(()=>(b(),()=>{}),[m,h,b]),r.jsx("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:j?r.jsx(n.Z,{}):(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"",children:r.jsx(l.Z,{headTable:["No","Tgl. Pinjam","Nominal","Lama (Bulan)","Angsuran","Status","Aksi"],tableBodies:["tgl_pinjam","nominal","lama_pinjam","angsuran","status"],dataTable:c.data,page:m,limit:h,setEdit:a,setDelete:e,ubah:!0,hapus:!0})}),c?.last_page>1&&r.jsx("div",{className:"mt-4",children:r.jsx(i.Z,{currentPage:c?.current_page,totalPages:c?.last_page,setPage:p})})]})})};var u=t(5032),c=t(8233),m=t(5518),p=t(708),h=t(7760),x=t(3390);t(2094);let j=({register:e,errors:a,control:t,dtEdit:s,watch:n,setValue:i,showModal:l})=>(0,r.jsxs)(r.Fragment,{children:[r.jsx(h.Z,{label:"Nominal",name:"nominal",control:t,required:!0,readOnly:!0,errors:a.nominal,addClass:"col-span-4 lg:col-span-2"}),(0,r.jsxs)("div",{className:"lg:col-span-2 flex items-center gap-2",children:[r.jsx(u.Z,{label:"Lama",name:"lama_pinjam",register:e,required:!0,errors:a.lama_pinjam,valueAsNumber:!0,min:0,max:12,readOnly:!0,type:"number",addClass:"col-span-4"}),r.jsx("span",{className:"mt-5 text-xs",children:"Bulan"})]}),r.jsx(h.Z,{label:"Angsuran",name:"angsuran",control:t,required:!0,errors:a.angsuran,readOnly:!0,addClass:"col-span-4 lg:col-span-2"}),r.jsx(x.u,{label:"Status",defaultOption:"Status",register:e,name:"status",options:[{value:"proses",label:"Proses"},{value:"terima",label:"Terima"},{value:"tolak",label:"Tolak"}],required:!0,errors:a.status,addClass:"col-span-4 lg:col-span-2"})]});var g=t(9763),b=t(5369),f=t(7030),v=t.n(f);let y=({showModal:e,setShowModal:a,dtEdit:t})=>{let i=v()(),[l,d]=(0,s.useState)(!1),[h,x]=(0,s.useState)(""),{addData:f,updateData:y}=(0,o.Z)(),{register:P,handleSubmit:_,setValue:S,control:w,formState:{errors:N},watch:k}=(0,p.cI)(),q=()=>{S("id",""),S("anggota_id",""),S("tgl_pinjam",i.format("YYYY-MM-DD")),x(i.format("MM/DD/YYYY")),S("nominal",0),S("angsuran",0),S("status","proses")};(0,s.useEffect)(()=>{t?(S("id",t.id),S("anggota_id",t.anggota_id),S("tgl_pinjam",t.tgl_pinjam),x(t.tgl_pinjam),S("nominal",t.nominal),S("angsuran",t.angsuran),S("status",t.status),S("lama_pinjam",t.lama_pinjam)):q()},[e,t]);let Z=async e=>{console.log({row:e}),(0,b.Z)({row:e,dtEdit:t,setIsLoading:d,setShowModal:a,addData:f,updateData:y,resetForm:q,toastShow:m.Z})};return r.jsx(c.Z,{title:"Form Pinjaman",showModal:e,setShowModal:a,children:(0,r.jsxs)("form",{onSubmit:_(Z),children:[r.jsx(u.Z,{name:"id",register:P,type:"hidden"}),r.jsx("div",{className:"grid grid-cols-4 gap-2 mb-4",children:r.jsx(j,{register:P,errors:N,dtEdit:t,control:w,watch:k,setValue:S,showModal:e})}),r.jsx("div",{children:l?r.jsx(n.Z,{}):r.jsx(g.Z,{onClick:_(Z),children:"Simpan"})})]})})};var P=t(2782),_=t(4669),S=t(3534);let w=()=>{let{removeData:e}=(0,o.Z)(),[a,t]=(0,s.useState)(!1),[n,i]=(0,s.useState)(!1),[l,u]=(0,s.useState)(),[c,p]=(0,s.useState)(),[h,x]=(0,s.useState)(""),[j,b]=(0,s.useState)(!1),f=async({id:a,isDelete:t})=>{if(u(a),t){let{data:a}=await e(l);(0,m.Z)({event:a}),i(!1)}else i(!0)};return(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[r.jsx(_.x7,{}),r.jsx(y,{dtEdit:c,showModal:a,setShowModal:t}),r.jsx(P.Z,{showDel:n,setShowDel:i,setDelete:f}),(0,r.jsxs)("div",{className:"mb-4 flex justify-between",children:[r.jsx("p",{children:"Silahkan Mengolah data Pinjaman"}),j&&r.jsx("div",{children:r.jsx(g.Z,{onClick:()=>{t(!0),p(null)},children:"Tambah Data"})})]}),r.jsx(S.Z,{placeholder:"Cari Data",onChange:e=>x(e)})]}),r.jsx(d,{setDelete:f,setEdit:e=>{t(!0),p(e)},search:h,setTambah:b})]})}},7760:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});var r=t(5344);t(3729);var s=t(708),n=t(3370);let i=({label:e,required:a,name:t,minLength:i,maxLength:l,errors:o,control:d,addClass:u,readOnly:c})=>(0,r.jsxs)("div",{className:u,children:[r.jsx("label",{htmlFor:t,className:"text-sm font-medium text-gray-700 tracking-wide",children:e}),a&&r.jsx("span",{className:"ml-1 text-red-600",children:"*"}),r.jsx("div",{className:"relative",children:r.jsx(s.Qr,{name:t,control:d,rules:{required:a},render:({field:e})=>r.jsx(n.h3,{id:t,type:"text",autoComplete:"off",thousandSeparator:",",prefix:"Rp. ",value:e.value,onValueChange:(a,t)=>{e.onChange(a.floatValue||"")},className:"w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary",readOnly:c})})}),o?.type==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[e," tidak boleh kosong"]}),o?.type==="minLength"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[e," tidak boleh kurang dari ",i," karakter"]}),o?.type==="maxLength"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[e," tidak boleh lebih dari ",l," karakter"]}),o?.type==="pattern"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[e," hanya boleh angka."]})]})},3390:(e,a,t)=>{"use strict";t.d(a,{u:()=>s});var r=t(5344);t(3729);let s=({label:e,register:a,required:t,name:s,placeholder:n,defaultOption:i,options:l=[],errors:o,addClass:d})=>(0,r.jsxs)("div",{className:d,children:[r.jsx("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:e}),t&&r.jsx("span",{className:"ml-1 text-red-600",children:"*"}),r.jsx("div",{className:"relative",children:(0,r.jsxs)("select",{className:"w-full rounded-lg py-2 px-2 bg-white border border-gray-300 focus:outline-none focus:border-secondary",id:e,placeholder:n,...a(s,{required:t}),children:[r.jsx("option",{value:"",children:i}),l.map((e,a)=>r.jsx("option",{value:e.value,children:e.label},a))]})}),o?.type==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[e," tidak boleh kosong"]})]})},9369:(e,a,t)=>{"use strict";t.d(a,{Z:()=>l});var r=t(3158),s=t(7023),n=t(87),i=t(5849);let l=(0,r.Ue)((0,s.mW)((e,a)=>({dtPinjaman:{last_page:0,current_page:0,data:[]},setPinjaman:async({page:a=1,limit:t=10,search:r,sortby:s,order:l,anggota_id:o})=>{try{let d=await i.Z.getState().setToken(),u=await (0,n.Sj)({method:"get",url:"/pinjaman",headers:{Authorization:`Bearer ${d}`},params:{limit:t,page:a,search:r,sortby:s,order:l,anggota_id:o}});return e(e=>({...e,dtPinjaman:u.data.data})),{status:"berhasil",data:u.data}}catch(e){return{status:"error",error:e.response?.data}}},setShowPinjaman:async a=>{try{let t=await i.Z.getState().setToken(),r=await (0,n.Sj)({method:"get",url:`/pinjaman/${a}`,headers:{Authorization:`Bearer ${t}`}});return e(e=>({...e,dtPinjaman:r.data.data})),{status:"berhasil",data:r.data}}catch(e){return{status:"error",error:e.response?.data}}},addData:async a=>{try{let t=await i.Z.getState().setToken(),r=await (0,n.Sj)({method:"post",url:"/pinjaman",headers:{Authorization:`Bearer ${t}`},data:a});return e(e=>({dtPinjaman:{last_page:e.dtPinjaman.last_page,current_page:e.dtPinjaman.current_page,data:[r.data.data,...e.dtPinjaman.data]}})),{status:"berhasil tambah",data:r.data}}catch(e){return{status:"error",data:e.response.data}}},removeData:async a=>{try{let t=await i.Z.getState().setToken(),r=await (0,n.Sj)({method:"delete",url:`/pinjaman/${a}`,headers:{Authorization:`Bearer ${t}`}});return e(e=>({dtPinjaman:{last_page:e.dtPinjaman.last_page,current_page:e.dtPinjaman.current_page,data:e.dtPinjaman.data.filter(e=>e.id!==a)}})),{status:"berhasil hapus",data:r.data}}catch(e){return{status:"error",data:e.response.data}}},updateData:async(a,t)=>{try{let r=await i.Z.getState().setToken(),s=await (0,n.Sj)({method:"PUT",url:`/pinjaman/${a}`,headers:{Authorization:`Bearer ${r}`},data:t});return e(e=>({dtPinjaman:{last_page:e.dtPinjaman.last_page,current_page:e.dtPinjaman.current_page,data:e.dtPinjaman.data.map(e=>e.id===a?{...e,...s.data.data}:e)}})),{status:"berhasil update",data:s.data}}catch(e){return{status:"error",data:e.response.data}}}})))},7835:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>n,metadata:()=>s});var r=t(5036);t(2);let s={title:"Daftar Pinjaman"},n=e=>r.jsx(r.Fragment,{children:e.children})},39:(e,a,t)=>{"use strict";t.r(a),t.d(a,{$$typeof:()=>n,__esModule:()=>s,default:()=>i});let r=(0,t(6843).createProxy)(String.raw`/media/smarthagar/Assets/Project/NextJS/TA/bill/src/app/roles/bendahara/pinjaman/page.tsx`),{__esModule:s,$$typeof:n}=r,i=r.default}};var a=require("../../../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),r=a.X(0,[638,356,337,434,94,708,707,82,882],()=>t(2692));module.exports=r})();