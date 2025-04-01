"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[1500],{2774:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"migration-storage","title":"Migration Storage","description":"The storage migration plugin can be used to migrate all data from one existing RxStorage into another. This is useful when:","source":"@site/docs/migration-storage.md","sourceDirName":".","slug":"/migration-storage.html","permalink":"/migration-storage.html","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Migration Storage","slug":"migration-storage.html"},"sidebar":"tutorialSidebar","previous":{"title":"Schema Migration","permalink":"/migration-schema.html"},"next":{"title":"Attachments","permalink":"/rx-attachment.html"}}');var t=n(4848),o=n(8453);const i={title:"Migration Storage",slug:"migration-storage.html"},s="Storage Migration",l={},d=[{value:"Usage",id:"usage",level:2},{value:"Migrate from a previous RxDB major version",id:"migrate-from-a-previous-rxdb-major-version",level:2},{value:"Disable Version Check on RxDB Premium \ud83d\udc51",id:"disable-version-check-on-rxdb-premium-",level:2}];function m(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"storage-migration",children:"Storage Migration"})}),"\n",(0,t.jsx)(a.p,{children:"The storage migration plugin can be used to migrate all data from one existing RxStorage into another. This is useful when:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["You want to migrate from one ",(0,t.jsx)(a.a,{href:"/rx-storage.html",children:"RxStorage"})," to another one."]}),"\n",(0,t.jsx)(a.li,{children:"You want to migrate to a new major RxDB version while keeping the previous saved data. This function only works from the previous major version upwards. Do not use it to migrate like rxdb v9 to v14."}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["The storage migration ",(0,t.jsx)(a.strong,{children:"drops deleted documents"})," and filters them out during the migration."]}),"\n",(0,t.jsxs)(a.admonition,{title:"Do never change the schema while doing a storage migration",type:"warning",children:[(0,t.jsx)(a.p,{children:"When you migrate between storages, you might want to change the schema in the same process. You should never do that because it will lead to problems afterwards and might make your database unusable."}),(0,t.jsxs)(a.p,{children:["When you also want to change your schema, first run the storage migration and afterwards run a normal ",(0,t.jsx)(a.a,{href:"/migration-schema.html",children:"schema migration"}),"."]})]}),"\n",(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(a.p,{children:["Lets say you want to migrate from ",(0,t.jsx)(a.a,{href:"/rx-storage-localstorage.html",children:"LocalStorage RxStorage"})," to the ",(0,t.jsx)(a.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB RxStorage"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"import { migrateStorage } from 'rxdb/plugins/migration-storage';\nimport { getRxStorageIndexedDB } from 'rxdb-premium/plugins/storage-indexeddb';\nimport { getRxStorageLocalstorage } from 'rxdb-old/plugins/storage-localstorage';\n\n// create the new RxDatabase\nconst db = await createRxDatabase({\n    name: dbLocation,\n    storage: getRxStorageIndexedDB(),\n    multiInstance: false\n});\n\nawait migrateStorage({\n    database: db as any,\n    /**\n     * Name of the old database,\n     * using the storage migration requires that the\n     * new database has a different name.\n     */\n    oldDatabaseName: 'myOldDatabaseName',\n    oldStorage: getRxStorageLocalstorage(), // RxStorage of the old database\n    batchSize: 500, // batch size\n    parallel: false, // <- true if it should migrate all collections in parallel. False (default) if should migrate in serial\n    afterMigrateBatch: (input: AfterMigrateBatchHandlerInput) => {\n        console.log('storage migration: batch processed');\n    }\n});\n"})}),"\n",(0,t.jsx)(a.h2,{id:"migrate-from-a-previous-rxdb-major-version",children:"Migrate from a previous RxDB major version"}),"\n",(0,t.jsxs)(a.p,{children:["To migrate from a previous RxDB major version, you have to install the 'old' RxDB in the ",(0,t.jsx)(a.code,{children:"package.json"})]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n    "dependencies": {\n        "rxdb-old": "npm:rxdb@14.17.1",\n    }\n}\n'})}),"\n",(0,t.jsx)(a.p,{children:"Then you can run the migration by providing the old storage:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"/* ... */\nimport { migrateStorage } from 'rxdb/plugins/migration-storage';\nimport { getRxStorageLocalstorage } from 'rxdb-old/plugins/storage-localstorage'; // <- import from the old RxDB version\n\nawait migrateStorage({\n    database: db as any,\n    /**\n     * Name of the old database,\n     * using the storage migration requires that the\n     * new database has a different name.\n     */\n    oldDatabaseName: 'myOldDatabaseName',\n    oldStorage: getRxStorageLocalstorage(), // RxStorage of the old database\n    batchSize: 500, // batch size\n    parallel: false,\n    afterMigrateBatch: (input: AfterMigrateBatchHandlerInput) => {\n        console.log('storage migration: batch processed');\n    }\n});\n/* ... */\n"})}),"\n",(0,t.jsxs)(a.h2,{id:"disable-version-check-on-rxdb-premium-",children:["Disable Version Check on ",(0,t.jsx)(a.a,{href:"/premium/",children:"RxDB Premium \ud83d\udc51"})]}),"\n",(0,t.jsxs)(a.p,{children:["RxDB Premium has a check in place that ensures that you do not accidentally use the wrong RxDB core and \ud83d\udc51 Premium version together which could break your database state.\nThis can be a problem during migrations where you have multiple versions of RxDB in use and it will throw the error ",(0,t.jsx)(a.code,{children:"Version mismatch detected"}),".\nYou can disable that check by importing and running the ",(0,t.jsx)(a.code,{children:"disableVersionCheck()"})," function from RxDB Premium."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"// RxDB Premium v15 or newer:\nimport {\n    disableVersionCheck\n} from 'rxdb-premium-old/plugins/shared';\ndisableVersionCheck();\n\n\n// RxDB Premium v14:\n\n// for esm\nimport {\n    disableVersionCheck\n} from 'rxdb-premium-old/dist/es/shared/version-check.js';\ndisableVersionCheck();\n\n// for cjs\nimport {\n    disableVersionCheck\n} from 'rxdb-premium-old/dist/lib/shared/version-check.js';\ndisableVersionCheck();\n\n\n\n\n"})})]})}function h(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>s});var r=n(6540);const t={},o=r.createContext(t);function i(e){const a=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:a},e.children)}}}]);