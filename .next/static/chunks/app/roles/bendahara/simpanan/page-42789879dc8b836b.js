(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[209],{4343:function(e,a,t){Promise.resolve().then(t.bind(t,9754))},9754:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return g}});var r=t(7437),s=t(2265),n=t(3379),l=t(5676),i=t(8470),c=t(2020),o=t(5249),d=t(2153);let u=(0,c.Ue)((0,o.mW)((e,a)=>({dtAnggota:[],setAnggota:async a=>{let{page:t=1,limit:r=10,search:s}=a;try{let a=await (0,d.hi)({method:"get",url:"/anggota",params:{limit:r,page:t,search:s}});return e(e=>({...e,dtAnggota:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setAnggotaAll:async a=>{let{search:t}=a;try{let a=await (0,d.hi)({method:"get",url:"/anggota/all",params:{search:t}});return e(e=>({...e,dtAnggota:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},setAnggotaSimpanan:async a=>{let{page:t=1,limit:r=10,search:s}=a;try{let a=await (0,d.hi)({method:"get",url:"/anggota/simpanan",params:{limit:r,page:t,search:s}});return e(e=>({...e,dtAnggota:a.data.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}}})));var h=t(7907),m=e=>{let{search:a}=e,{setAnggotaSimpanan:t,dtAnggota:c}=u(),[o,d]=(0,s.useState)(1),[m,p]=(0,s.useState)(10),[g,x]=(0,s.useState)(!0),f=(0,h.useRouter)(),b=async()=>{await t({page:o,limit:m,search:a}),x(!1)};return(0,s.useEffect)(()=>(b(),()=>{}),[o,m]),(0,s.useEffect)(()=>{d(1),b()},[a]),(0,r.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:g?(0,r.jsx)(n.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)(i.Z,{headTable:["No","Jml. Simpanan","NIK","Nama","Jenkel","Alamat","No. HP","Jabatan"],tableBodies:["jmlh_simpanan","nik","nm_anggota","jenkel","alamat","no_hp","jabatan"],dataTable:c.data,page:o,limit:m,ubah:!1,hapus:!1,rowClick:e=>{f.push("/roles/bendahara/simpanan/".concat(e.id))}})}),(null==c?void 0:c.last_page)>1&&(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(l.Z,{currentPage:null==c?void 0:c.current_page,totalPages:null==c?void 0:c.last_page,setPage:d})})]})})},p=t(7500),g=()=>{let[e,a]=(0,s.useState)("");return(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mb-4 flex justify-between",children:(0,r.jsx)("p",{children:"Silahkan klik pada anggota untuk melihat dan menambahkan simpanan"})}),(0,r.jsx)(p.Z,{placeholder:"Cari Data",onChange:e=>a(e)})]}),(0,r.jsx)(m,{search:e})]})}},7500:function(e,a,t){"use strict";var r=t(7437);t(2265),a.Z=e=>{let{placeholder:a,addClass:t,onChange:s,defaultValue:n=""}=e;return(0,r.jsx)("div",{className:t,children:(0,r.jsx)("input",{className:"w-full text-gray-700 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",placeholder:a,onChange:e=>{s(e.target.value)},defaultValue:n})})}},3379:function(e,a,t){"use strict";var r=t(7437);t(2265),a.Z=()=>(0,r.jsx)("div",{className:"w-12 h-12 rounded-full animate-spin border-y border-solid border-primary border-t-transparent shadow-md"})},5676:function(e,a,t){"use strict";var r=t(7437);t(2265);var s=t(1975);a.Z=e=>{let{totalPages:a,currentPage:t,setPage:n}=e,l=[];if(a<=5)l=Array.from({length:a},(e,a)=>a+1);else{l=[1,t-1,t,t+1,a],l=(l=Array.from(new Set(l)).sort((e,a)=>e-a)).filter(e=>e>0&&e<=a);for(let e=1;e<l.length-1;e++)l[e]-l[e-1]>1&&(l.splice(e,0,"..."),e++);a-l[l.length-2]>1&&l.splice(l.length-1,0,"...")}return(0,r.jsx)("div",{className:"h-full",children:(0,r.jsxs)("ol",{className:"flex justify-center gap-1 text-xs font-medium",children:[t>1&&(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>n(t-1),className:"cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100",children:(0,r.jsx)(s.pjk,{})})}),l.map((e,a)=>"..."===e?(0,r.jsx)("li",{className:"flex items-end text-xl",children:(0,r.jsx)("div",{className:"block h-8 w-8 rounded border border-gray-100 text-center leading-8",children:e})},a):(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>n(e),className:"cursor-pointer block h-8 w-8 rounded border border-gray-100 text-center leading-8 ".concat(e==t?"bg-blue-900 text-white":""),children:e})},a)),t<a&&(0,r.jsx)("li",{children:(0,r.jsx)("div",{onClick:()=>n(t+1),className:"cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100",children:(0,r.jsx)(s.fmn,{})})})]})})}},8470:function(e,a,t){"use strict";t.d(a,{Z:function(){return m}});var r=t(7437),s=t(2265),n=t(2153),l=t(703),i=t(2151),c=t.n(i),o=e=>{let a=e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");return"Rp. ".concat(a)},d=(e,a,t,s)=>{var i,d,u;null==e||null===(i=e.thn_angkatan)||void 0===i||i.substring(2),null==e||null===(u=e.mhs)||void 0===u||null===(d=u.thn_angkatan)||void 0===d||d.substring(2);let h=null==e?void 0:e.simpanan,m=null==h?void 0:h.reduce((e,a)=>e+parseInt(a.nominal),0),p=a.split(".");if(Array.isArray(p)){let i=p.length>1?p.pop():p,d=p.length,u=1,h=p[0];for(;(e=e[h])&&u<d;)h=p[u],u++;return"object"==typeof e?e?e[i]:"":"tgl_masuk"===a||"tgl_simpanan"===a||"tgl_lahir"===a||"tgl_pinjam"===a||"tgl_bayar"===a?c()(e).format("DD/MM/YYYY"):"gambar"===a||"foto"===a||"bukti"===a||"bukti_bayar"===a?e&&(0,r.jsx)(l.default,{src:"".concat(n._n,"/").concat(e),loading:"lazy",width:70,height:70,alt:"",className:"cursor-pointer",onClick:s?()=>s(t):void 0}):"nominal"===a||"angsuran"===a?o(e):"jmlh_simpanan"===a?o(m):"file"===a?e&&(0,r.jsx)("a",{href:"".concat(n._n,"/").concat(e),target:"_blank",children:"Lihat File"}):(0,r.jsx)("p",{className:"capitalize",children:e})}throw"parts is not valid array"},u=t(7907),h=t(1975),m=e=>{let a=(0,u.useRouter)(),t=(0,u.useSearchParams)(),[n,l]=(0,s.useState)(0),[i,c]=(0,s.useState)(),[o,m]=(0,s.useState)(),p=a=>(e.page-1)*e.limit+a+1,g=t.get("sortby"),x=(e,t)=>{c(e);let r=window.location.href,s=new URL(r),i=new URLSearchParams(s.search),o=e===g?n+1:1,d=o%2==0?"desc":"asc";i.delete("sortby"),i.delete("order"),i.append("sortby",e),i.append("order",d),s.search=i.toString(),a.push(s.toString()),l(o),m(d)};(0,s.useEffect)(()=>{e.sorter&&x(e.sorter)},[e.sorter]);let f=a=>{e.rowClick&&e.rowClick(a)};return(0,r.jsxs)("table",{className:"w-full border-collapse text-left bg-white",children:[(0,r.jsx)("thead",{className:"",children:(0,r.jsx)("tr",{children:e.headTable&&e.headTable.map((a,t)=>{let s=e.tableBodies[t-1];return(0,r.jsx)("th",{scope:"col",className:"px-6 py-4 ".concat(!("Aksi"===a||"No"===a)&&"cursor-pointer"),onClick:()=>{"Aksi"===a||"No"===a||x(s,t)},children:(0,r.jsxs)("div",{className:"flex items-center gap-1",children:[a,i===s&&(0,r.jsxs)("span",{className:"flex",children:[(0,r.jsx)(h.mXI,{className:"".concat("desc"===o&&"hidden")}),(0,r.jsx)(h.S9U,{className:"".concat("asc"===o&&"hidden")})]})]})},t)})})}),(0,r.jsx)("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100 ",children:e.dataTable&&e.dataTable.map((a,t)=>{let{id:s}=a;return(0,r.jsxs)("tr",{className:"".concat(e.rowClick&&"cursor-pointer hover:bg-green/[0.2]"),onClick:()=>f(a),children:[(0,r.jsx)("td",{className:"px-6 py-4 rounded-l-xl",children:p(t)}),e.tableBodies.map((s,n)=>(0,r.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:d(a,s,t,e.setIndexBox)},n)),(0,r.jsx)("td",{className:"px-6 py-4 rounded-r-xl",children:(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[e.costume&&e.costume(a),e.ubah&&(0,r.jsx)(h.Ph1,{onClick:()=>e.setEdit&&(null==e?void 0:e.setEdit(a)),size:20,className:"cursor-pointer hover:text-yellow-500",title:"Ubah"}),e.hapus&&(0,r.jsx)(h.AuQ,{onClick:()=>(null==e?void 0:e.setDelete)&&(null==e?void 0:e.setDelete({id:s,isDelete:!1})),size:20,className:"cursor-pointer hover:text-red-700",title:"Hapus"})]})})]},t)})})]})}},2153:function(e,a,t){"use strict";t.d(a,{I8:function(){return n},Sj:function(){return l},_n:function(){return s},hi:function(){return i}});var r=t(7908);let s="http://127.0.0.1:8000",n=r.Z.create({baseURL:"".concat(s,"/auth")}),l=r.Z.create({baseURL:"".concat(s,"/crud")}),i=r.Z.create({baseURL:"".concat(s,"/api")});r.Z.create({baseURL:"".concat(s,"/storage")})}},function(e){e.O(0,[779,990,910,703,971,69,744],function(){return e(e.s=4343)}),_N_E=e.O()}]);