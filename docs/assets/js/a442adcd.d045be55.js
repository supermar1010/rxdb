"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[8760],{3958:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"reactivity","title":"Signals & Custom Reactivity with RxDB","description":"Level up reactivity with Angular signals, Vue refs, or Preact signals in RxDB. Learn how to integrate custom reactivity to power your dynamic UI.","source":"@site/docs/reactivity.md","sourceDirName":".","slug":"/reactivity.html","permalink":"/reactivity.html","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Signals & Custom Reactivity with RxDB","slug":"reactivity.html","description":"Level up reactivity with Angular signals, Vue refs, or Preact signals in RxDB. Learn how to integrate custom reactivity to power your dynamic UI."},"sidebar":"tutorialSidebar","previous":{"title":"RxPipelines","permalink":"/rx-pipeline.html"},"next":{"title":"RxState","permalink":"/rx-state.html"}}');var n=a(4848),s=a(8453);const i={title:"Signals & Custom Reactivity with RxDB",slug:"reactivity.html",description:"Level up reactivity with Angular signals, Vue refs, or Preact signals in RxDB. Learn how to integrate custom reactivity to power your dynamic UI."},o="Signals & Co. - Custom reactivity adapters instead of RxJS Observables",c={},l=[{value:"Adding a custom reactivity factory (in angular projects)",id:"adding-a-custom-reactivity-factory-in-angular-projects",level:2},{value:"Adding reactivity for other Frameworks",id:"adding-reactivity-for-other-frameworks",level:2},{value:"Vue Shallow Refs",id:"vue-shallow-refs",level:3},{value:"Preact Signals",id:"preact-signals",level:3},{value:"Accessing custom reactivity objects",id:"accessing-custom-reactivity-objects",level:2},{value:"Limitations",id:"limitations",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"signals--co---custom-reactivity-adapters-instead-of-rxjs-observables",children:"Signals & Co. - Custom reactivity adapters instead of RxJS Observables"})}),"\n",(0,n.jsxs)(t.p,{children:["RxDB internally uses the ",(0,n.jsx)(t.a,{href:"https://rxjs.dev/",children:"rxjs library"})," for observables and streams. All functionalities of RxDB like ",(0,n.jsx)(t.a,{href:"/rx-query.html#observe",children:"query"})," results or ",(0,n.jsx)(t.a,{href:"/rx-document.html#observe",children:"document fields"})," that expose values that change over time return a rxjs ",(0,n.jsx)(t.code,{children:"Observable"})," that allows you to observe the values and update your UI accordingly depending on the changes to the database state."]}),"\n",(0,n.jsxs)(t.p,{children:["However there are many reasons to use other reactivity libraries that use a different datatype to represent changing values. For example when you use ",(0,n.jsx)(t.strong,{children:"signals"})," in angular or react, the ",(0,n.jsx)(t.strong,{children:"template refs"})," of vue or state libraries like MobX and redux."]}),"\n",(0,n.jsxs)(t.p,{children:["RxDB allows you to pass a custom reactivity factory on ",(0,n.jsx)(t.a,{href:"/rx-database.html",children:"RxDatabase"})," creation so that you can easily access values wrapped with your custom datatype in a convenient way."]}),"\n",(0,n.jsx)(t.h2,{id:"adding-a-custom-reactivity-factory-in-angular-projects",children:"Adding a custom reactivity factory (in angular projects)"}),"\n",(0,n.jsxs)(t.p,{children:["If you have an angular project, to get custom reactivity objects out of RxDB, you have to pass a ",(0,n.jsx)(t.code,{children:"RxReactivityFactory"})," during database creation. The ",(0,n.jsx)(t.code,{children:"RxReactivityFactory"})," has the ",(0,n.jsx)(t.code,{children:"fromObservable()"})," method that creates your custom reactivity object based on an observable and an initial value."]}),"\n",(0,n.jsxs)(t.p,{children:["For example to use signals in angular, you can use the angular ",(0,n.jsx)(t.a,{href:"https://angular.io/api/core/rxjs-interop/toSignal",children:"toSignal"})," function:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import { RxReactivityFactory } from 'rxdb/plugins/core';\nimport { Signal, untracked } from '@angular/core';\nimport { toSignal } from '@angular/core/rxjs-interop';\n\nexport function createReactivityFactory(injector: Injector): RxReactivityFactory<Signal<any>> {\n  return {\n    fromObservable(observable$, initialValue: any) {\n      return untracked(() =>\n        toSignal(observable$, {\n          initialValue,\n          injector,\n          rejectErrors: true\n        })\n      );\n    }\n  };\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Then you can pass this factory when you create the ",(0,n.jsx)(t.a,{href:"/rx-database.html",children:"RxDatabase"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb/plugins/core';\nimport { getRxStorageLocalstorage } from 'rxdb/plugins/storage-localstorage';\nconst database = await createRxDatabase({\n    name: 'mydb',\n    storage: getRxStorageLocalstorage(),\n    reactivity: createReactivityFactory(inject(Injector))\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["An example of how signals are used in angular with RxDB, can be found at the ",(0,n.jsx)(t.a,{href:"https://github.com/pubkey/rxdb/tree/master/examples/angular/src/app/components/heroes-list",children:"RxDB Angular Example"})]}),"\n",(0,n.jsx)(t.h2,{id:"adding-reactivity-for-other-frameworks",children:"Adding reactivity for other Frameworks"}),"\n",(0,n.jsxs)(t.p,{children:["When adding custom reactivity for other JavaScript frameworks or libraries, make sure to correctly unsubscribe whenever you call ",(0,n.jsx)(t.code,{children:"observable.subscribe()"})," in the ",(0,n.jsx)(t.code,{children:"fromObservable()"})," method."]}),"\n",(0,n.jsxs)(t.p,{children:["There are also some ",(0,n.jsx)(t.a,{href:"/premium/",children:"\ud83d\udc51 Premium Plugins"})," that can be used with other (non-angular frameworks):"]}),"\n",(0,n.jsx)(t.h3,{id:"vue-shallow-refs",children:"Vue Shallow Refs"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// npm install vue --save\nimport { VueRxReactivityFactory } from 'rxdb-premium/plugins/reactivity-vue';\nimport { createRxDatabase } from 'rxdb/plugins/core';\nimport { getRxStorageLocalstorage } from 'rxdb/plugins/storage-localstorage';\nconst database = await createRxDatabase({\n    name: 'mydb',\n    storage: getRxStorageLocalstorage(),\n    reactivity: VueRxReactivityFactory\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"preact-signals",children:"Preact Signals"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// npm install @preact/signals-core --save\nimport { PreactSignalsRxReactivityFactory } from 'rxdb-premium/plugins/reactivity-preact-signals';\nimport { createRxDatabase } from 'rxdb/plugins/core';\nconst database = await createRxDatabase({\n    name: 'mydb',\n    storage: getRxStorageLocalstorage(),\n    reactivity: PreactSignalsRxReactivityFactory\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"accessing-custom-reactivity-objects",children:"Accessing custom reactivity objects"}),"\n",(0,n.jsxs)(t.p,{children:["All observable data in RxDB is marked by the single dollar sign ",(0,n.jsx)(t.code,{children:"$"})," like ",(0,n.jsx)(t.code,{children:"RxCollection.$"})," for events or ",(0,n.jsx)(t.code,{children:"RxDocument.myField$"})," to get the observable for a document field. To make custom reactivity objects distinguable, they are marked with double-dollar signs ",(0,n.jsx)(t.code,{children:"$$"})," instead. Here are some example on how to get custom reactivity objects from RxDB specific instances:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// RxDocument\nconst signal = myRxDocument.get$$('foobar'); // get signal that represents the document field 'foobar'\nconst signal = myRxDocument.foobar$$; // same as above\nconst signal = myRxDocument.$$; // get signal that represents whole document over time\nconst signal = myRxDocument.deleted$$; // get signal that represents the deleted state of the document\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// RxQuery\nconst signal = collection.find().$$; // get signal that represents the query result set over time\nconst signal = collection.findOne().$$; // get signal that represents the query result set over time\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// RxLocalDocument\nconst signal = myRxLocalDocument.$$; // get signal that represents the whole local document state\nconst signal = myRxLocalDocument.get$$('foobar'); // get signal that represents the foobar field\n"})}),"\n",(0,n.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"TypeScript typings are not fully implemented, make a PR if something is missing or not working for you."}),"\n",(0,n.jsx)(t.li,{children:"Currently not all observables things in RxDB are implemented to work with custom reactivity. Please make a PR if you have the need for any missing one."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var r=a(6540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);