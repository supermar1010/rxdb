"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[833],{2692:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"articles/zero-latency-local-first","title":"Zero Latency Local First Apps with RxDB \u2013 Sync, Encryption and Compression","description":"Build blazing-fast, zero-latency local first apps with RxDB. Gain instant UI responses, robust offline capabilities, end-to-end encryption, and data compression for streamlined performance.","source":"@site/docs/articles/zero-latency-local-first.md","sourceDirName":"articles","slug":"/articles/zero-latency-local-first.html","permalink":"/articles/zero-latency-local-first.html","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Zero Latency Local First Apps with RxDB \u2013 Sync, Encryption and Compression","slug":"zero-latency-local-first.html","description":"Build blazing-fast, zero-latency local first apps with RxDB. Gain instant UI responses, robust offline capabilities, end-to-end encryption, and data compression for streamlined performance."},"sidebar":"tutorialSidebar","previous":{"title":"RxDB \u2013 The Ultimate Offline Database with Sync and Encryption","permalink":"/articles/offline-database.html"},"next":{"title":"IndexedDB Max Storage Size Limit - Detailed Best Practices","permalink":"/articles/indexeddb-max-storage-limit.html"}}');var t=r(4848),a=r(8453);const s={title:"Zero Latency Local First Apps with RxDB \u2013 Sync, Encryption and Compression",slug:"zero-latency-local-first.html",description:"Build blazing-fast, zero-latency local first apps with RxDB. Gain instant UI responses, robust offline capabilities, end-to-end encryption, and data compression for streamlined performance."},o="Zero Latency Local First Apps with RxDB \u2013 Sync, Encryption and Compression",l={},c=[{value:"Why Zero Latency with a Local First Approach?",id:"why-zero-latency-with-a-local-first-approach",level:2},{value:"RxDB: Your Key to Zero-Latency Local First Apps",id:"rxdb-your-key-to-zero-latency-local-first-apps",level:2},{value:"Real-Time Sync and Offline-First",id:"real-time-sync-and-offline-first",level:3},{value:"Multiple Replication Plugins and Approaches",id:"multiple-replication-plugins-and-approaches",level:4},{value:"Example Setup of a local database",id:"example-setup-of-a-local-database",level:4},{value:"Example Setup of the replication",id:"example-setup-of-the-replication",level:4},{value:"Things you should also know about",id:"things-you-should-also-know-about",level:2},{value:"Optimistic UI on Local Data Changes",id:"optimistic-ui-on-local-data-changes",level:3},{value:"Conflict Handling",id:"conflict-handling",level:3},{value:"Schema Migrations",id:"schema-migrations",level:3},{value:"Advanced Features",id:"advanced-features",level:2},{value:"Setup Encryption",id:"setup-encryption",level:3},{value:"Setup Compression",id:"setup-compression",level:3},{value:"Different RxDB Storages Depending on the Runtime",id:"different-rxdb-storages-depending-on-the-runtime",level:2},{value:"Performance Considerations",id:"performance-considerations",level:2},{value:"Offloading Work from the Main Thread",id:"offloading-work-from-the-main-thread",level:3},{value:"Sharding or Memory-Mapped Storages",id:"sharding-or-memory-mapped-storages",level:3},{value:"Follow Up",id:"follow-up",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"zero-latency-local-first-apps-with-rxdb--sync-encryption-and-compression",children:"Zero Latency Local First Apps with RxDB \u2013 Sync, Encryption and Compression"})}),"\n",(0,t.jsxs)(n.p,{children:["Creating a ",(0,t.jsx)(n.strong,{children:"zero-latency local first"})," application involves ensuring that most (if not all) user interactions occur instantaneously, without waiting on remote network responses. This design drastically enhances user experience, allowing apps to remain responsive and functional even when offline or experiencing poor connectivity. As developers, we can achieve this by storing data ",(0,t.jsx)(n.strong,{children:"locally on the client"})," and synchronizing it to the backend in the background. ",(0,t.jsx)(n.strong,{children:"RxDB"})," (Reactive Database) offers a comprehensive set of features - covering replication, offline support, encryption, compression, conflict handling, and more - that make it straightforward to build such high-performing apps."]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:"/files/loading-spinner-not-needed.gif",alt:"loading spinner not needed",width:"300"})}),"\n",(0,t.jsx)(n.h2,{id:"why-zero-latency-with-a-local-first-approach",children:"Why Zero Latency with a Local First Approach?"}),"\n",(0,t.jsx)(n.p,{children:"In a traditional architecture, each user action triggers requests to a server for reads or writes. Despite network optimizations, unavoidable latencies can delay responses and disrupt the user flow. By contrast, a local first model maintains data in the client's environment (browser, mobile, desktop), drastically reducing user-perceived delays. Once the user re-connects or resumes activity online, changes propagate automatically to the server, eliminating manual synchronization overhead."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Instant Responsiveness"}),": Because user actions (queries, updates, etc.) happen against a local datastore, UI updates do not wait on round-trip times."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Offline Operation"}),": Apps can continue to read and write data, even when there is zero connectivity."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reduced Backend Load"}),": Instead of flooding the server with small requests, replication can combine and push or pull changes in batches."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Simplified Caching"}),": Instead of implementing multi-layer caching, local first transforms your data layer into a reliable, quickly accessible store for all user actions."]}),"\n"]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("a",{href:"https://rxdb.info/",children:(0,t.jsx)("img",{src:"../files/logo/rxdb_javascript_database.svg",alt:"RxDB local Database",width:"220"})})}),"\n",(0,t.jsx)(n.h2,{id:"rxdb-your-key-to-zero-latency-local-first-apps",children:"RxDB: Your Key to Zero-Latency Local First Apps"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"RxDB"})," is a JavaScript-based NoSQL database designed for offline-first and real-time replication scenarios. It supports a range of environments - browsers (IndexedDB or OPFS), mobile (",(0,t.jsx)(n.a,{href:"/articles/ionic-storage.html",children:"Ionic"}),", ",(0,t.jsx)(n.a,{href:"/react-native-database.html",children:"React Native"}),"), ",(0,t.jsx)(n.a,{href:"/electron-database.html",children:"Electron"}),", Node.js - and is built around:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reactive Queries"})," that trigger UI updates upon data changes"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Schema-based NoSQL Documents"})," for flexible but robust data models"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/replication.html",children:"Advanced Sync Engine"}),": to synchronize with diverse backends"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Encryption"})," for secure data at rest"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compression"})," to reduce local and network overhead"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"real-time-sync-and-offline-first",children:"Real-Time Sync and Offline-First"}),"\n",(0,t.jsx)(n.p,{children:"RxDB's replication logic revolves around pulling down remote changes and pushing up local modifications. It maintains a checkpoint-based mechanism, so only new or updated documents flow between the client and server, reducing bandwidth usage and latency. This ensures:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Live Data"}),": Queries automatically reflect server-side changes once they arrive locally."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Background Updates"}),": No manual polling needed; replication streams or intervals handle synchronization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Conflict Handling"})," (see below) ensures data merges gracefully when multiple clients edit the same document offline."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"multiple-replication-plugins-and-approaches",children:"Multiple Replication Plugins and Approaches"}),"\n",(0,t.jsxs)(n.p,{children:["RxDB's flexible replication system lets you connect to different backends or even peer-to-peer networks. There are official plugins for ",(0,t.jsx)(n.a,{href:"/replication-couchdb.html",children:"CouchDB"}),", ",(0,t.jsx)(n.a,{href:"/replication-firestore.html",children:"Firestore"}),", ",(0,t.jsx)(n.a,{href:"/replication-graphql.html",children:"GraphQL"}),", ",(0,t.jsx)(n.a,{href:"/replication-webrtc.html",children:"WebRTC"}),", and more. Many developers create a ",(0,t.jsx)(n.strong,{children:"custom HTTP replication"})," to work with their existing REST-based backend, ensuring a painless integration that doesn't require adopting an entirely new server infrastructure."]}),"\n",(0,t.jsx)(n.h4,{id:"example-setup-of-a-local-database",children:"Example Setup of a local database"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb/plugins/core';\nimport { getRxStorageLocalstorage } from 'rxdb/plugins/storage-localstorage';\n\nasync function initZeroLocalDB() {\n  // Create a local RxDB instance using localstorage-based storage\n  const db = await createRxDatabase({\n    name: 'myZeroLocalDB',\n    storage: getRxStorageLocalstorage(),\n    // optional: password for encryption if needed\n  });\n\n  // Define one or more collections\n  await db.addCollections({\n    tasks: {\n      schema: {\n        title: 'task schema',\n        version: 0,\n        type: 'object',\n        primaryKey: 'id',\n        properties: {\n          id:       { type: 'string', maxLength: 100 },\n          title:    { type: 'string' },\n          done:     { type: 'boolean' }\n        }\n      }\n    }\n  });\n\n  // Reactive query - automatically updates on local or remote changes\n  db.tasks\n    .find()\n    .$ // returns an RxJS Observable\n    .subscribe(allTasks => {\n      console.log('All tasks updated:', allTasks);\n    });\n\n  return db;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When offline, reads and writes to ",(0,t.jsx)(n.code,{children:"db.tasks"})," happen locally with near-zero delay. Once connectivity resumes, changes sync to the server automatically (if replication is configured)."]}),"\n",(0,t.jsx)(n.h4,{id:"example-setup-of-the-replication",children:"Example Setup of the replication"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { replicateRxCollection } from 'rxdb/plugins/replication';\n\nasync function syncLocalTasks(db) {\n  replicateRxCollection({\n    collection: db.tasks,\n    replicationIdentifier: 'sync-tasks',\n    // Define how to pull server documents and push local documents\n    pull: {\n      handler: async (lastCheckpoint, batchSize) => {\n        // logic to retrieve updated tasks from the server since lastCheckpoint\n      },\n    },\n    push: {\n      handler: async (docs) => {\n        // logic to post local changes to the server\n      },\n    },\n    live: true,        // continuously replicate\n    retryTime: 5000,   // retry on errors or disconnections\n  });\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"This replication seamlessly merges server-side and client-side changes. Your app remains responsive throughout, regardless of the network status."}),"\n",(0,t.jsx)(n.h2,{id:"things-you-should-also-know-about",children:"Things you should also know about"}),"\n",(0,t.jsx)(n.h3,{id:"optimistic-ui-on-local-data-changes",children:"Optimistic UI on Local Data Changes"}),"\n",(0,t.jsxs)(n.p,{children:["A local first approach, especially with RxDB, naturally supports an ",(0,t.jsx)(n.a,{href:"/articles/optimistic-ui.html",children:"optimistic UI"})," pattern. Because writes occur on the client, you can instantly reflect changes in the interface as soon as the user performs an action - no need to wait for server confirmation. For example, when a user updates a task document to done: true, the UI can re-render immediately with that new state. This even works across multiple browser tabs."]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:"/files/multiwindow.gif",alt:"RxDB multi tab",width:"450"})}),"\n",(0,t.jsxs)(n.p,{children:["If a server conflict arises later during replication, RxDB's ",(0,t.jsx)(n.a,{href:"/transactions-conflicts-revisions.html",children:"conflict handling"})," logic determines which changes to keep, and the UI can be updated accordingly. This is far more efficient than blocking the user or displaying a spinner while the backend processes the request."]}),"\n",(0,t.jsx)(n.h3,{id:"conflict-handling",children:"Conflict Handling"}),"\n",(0,t.jsx)(n.p,{children:"In local first models, conflicts emerge if multiple devices or clients edit the same document while offline. RxDB tracks document revisions so you can detect collisions and merge them effectively. By default, RxDB uses a last-write-wins approach, but developers can override it with a custom conflict handler. This provides fine-grained control - like merging partial fields, storing revision histories, or prompting users for resolution. Proper conflict handling keeps distributed data consistent across your entire system."}),"\n",(0,t.jsx)(n.h3,{id:"schema-migrations",children:"Schema Migrations"}),"\n",(0,t.jsx)(n.p,{children:"Over time, apps evolve - new fields, changed field types, or altered indexes. RxDB allows incremental schema migrations so you can upgrade a user's local data from one schema version to another. You might, for instance, rename a property or transform data formats. Once you define your migration strategy, RxDB automatically applies it upon app initialization, ensuring the local database's structure aligns with your latest codebase."}),"\n",(0,t.jsx)(n.h2,{id:"advanced-features",children:"Advanced Features"}),"\n",(0,t.jsx)(n.h3,{id:"setup-encryption",children:"Setup Encryption"}),"\n",(0,t.jsxs)(n.p,{children:["When storing data locally, you may handle user-sensitive information like PII (Personal Identifiable Information) or financial details. RxDB supports on-device ",(0,t.jsx)(n.a,{href:"/encryption.html",children:"encryption"})," to protect fields. For example, you can define:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { wrappedKeyEncryptionCryptoJsStorage } from 'rxdb/plugins/encryption-crypto-js';\n\nconst encryptedStorage = wrappedKeyEncryptionCryptoJsStorage({\n  storage: getRxStorageLocalstorage()\n});\n\nconst db = await createRxDatabase({\n  name: 'secureDB',\n  storage: encryptedStorage,\n  password: 'myEncryptionPassword'\n});\n\nawait db.addCollections({\n  secrets: {\n    schema: {\n      title: 'secrets schema',\n      version: 0,\n      type: 'object',\n      primaryKey: 'id',\n      properties: {\n        id:          { type: 'string', maxLength: 100 },\n        secretField: { type: 'string' }\n      },\n      required: ['id'],\n      encrypted: ['secretField'] // define which fields to encrypt\n    }\n  }\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then mark fields as ",(0,t.jsx)(n.code,{children:"encrypted"})," in the schema. This ensures data is unreadable on disk without the correct password."]}),"\n",(0,t.jsx)(n.h3,{id:"setup-compression",children:"Setup Compression"}),"\n",(0,t.jsx)(n.p,{children:"Local data can expand quickly, especially for large documents or repeated key names. RxDB's key compression feature replaces verbose field names with shorter tokens, decreasing storage usage and speeding up replication. You enable it by adding keyCompression: true to your collection schema:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"await db.addCollections({\n  logs: {\n    schema: {\n      title: 'log schema',\n      version: 0,\n      keyCompression: true,\n      type: 'object',\n      primaryKey: 'id',\n      properties: {\n        id:         { type: 'string'. maxLength: 100 },\n        message:    { type: 'string' },\n        timestamp:  { type: 'number' }\n      }\n    }\n  }\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"different-rxdb-storages-depending-on-the-runtime",children:"Different RxDB Storages Depending on the Runtime"}),"\n",(0,t.jsx)(n.p,{children:"RxDB's storage layer is swappable, so you can pick the optimal adapter for each environment. Some common choices include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB"})," in modern browsers (default)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/rx-storage-opfs.html",children:"OPFS"})," (Origin Private File System) in browsers that support it for potentially better performance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/rx-storage-sqlite.html",children:"SQLite"})," for mobile or desktop environments via the premium plugin, offering native-like speed on Android, iOS, or Electron."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/rx-storage-memory.html",children:"In-Memory"})," for tests or ephemeral data."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["By choosing a suitable storage layer, you can adapt your zero-latency local first design to any runtime - web, ",(0,t.jsx)(n.a,{href:"/articles/mobile-database.html",children:"mobile"}),", or server-like contexts in ",(0,t.jsx)(n.a,{href:"/nodejs-database.html",children:"Node.js"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"performance-considerations",children:"Performance Considerations"}),"\n",(0,t.jsxs)(n.p,{children:["Performant local data operations are crucial for a zero-latency experience. According to the RxDB ",(0,t.jsx)(n.a,{href:"/rx-storage-performance.html",children:"storage performance overview"}),", differences in underlying storages can significantly impact throughput and latency. For instance, IndexedDB typically performs well across modern browsers, ",(0,t.jsx)(n.a,{href:"/rx-storage-opfs.html",children:"OPFS"})," offers improved throughput in supporting browsers, and ",(0,t.jsx)(n.a,{href:"/rx-storage-sqlite.html",children:"SQLite storage"})," (a premium plugin) often delivers near-native speed for mobile or desktop."]}),"\n",(0,t.jsx)(n.h3,{id:"offloading-work-from-the-main-thread",children:"Offloading Work from the Main Thread"}),"\n",(0,t.jsxs)(n.p,{children:["In a browser environment, you can move database operations into a Web Worker using the ",(0,t.jsx)(n.a,{href:"/rx-storage-worker.html",children:"Worker RxStorage plugin"}),". This approach lets you keep heavy data processing off the main thread, ensuring the UI remains smooth and responsive. Complex queries or large write operations no longer cause stuttering in the user interface."]}),"\n",(0,t.jsx)(n.h3,{id:"sharding-or-memory-mapped-storages",children:"Sharding or Memory-Mapped Storages"}),"\n",(0,t.jsxs)(n.p,{children:["For large datasets or high concurrency, advanced techniques like ",(0,t.jsx)(n.a,{href:"/rx-storage-sharding.html",children:"sharding"})," collections across multiple storages or leveraging a ",(0,t.jsx)(n.a,{href:"/rx-storage-memory-mapped.html",children:"memory-mapped"})," variant can further boost performance. By splitting data into smaller subsets or streaming it only as needed, you can scale to handle complex usage scenarios without compromising on the zero-latency user experience."]}),"\n",(0,t.jsx)(n.h2,{id:"follow-up",children:"Follow Up"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Dive into the ",(0,t.jsx)(n.a,{href:"/quickstart.html",children:"RxDB Quickstart"})," to set up your own local first database."]}),"\n",(0,t.jsxs)(n.li,{children:["Explore ",(0,t.jsx)(n.a,{href:"/replication.html",children:"Replication Plugins"})," for syncing with platforms like ",(0,t.jsx)(n.a,{href:"/replication-couchdb.html",children:"CouchDB"}),", ",(0,t.jsx)(n.a,{href:"/articles/firestore-alternative.html",children:"Firestore"}),", or ",(0,t.jsx)(n.a,{href:"/replication-graphql.html",children:"GraphQL"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Check out Advanced ",(0,t.jsx)(n.a,{href:"/transactions-conflicts-revisions.html",children:"Conflict Handling"})," and ",(0,t.jsx)(n.a,{href:"/rx-storage-performance.html",children:"Performance Tuning"})," for big data sets or complex multi-user interactions."]}),"\n",(0,t.jsxs)(n.li,{children:["Join the RxDB Community on ",(0,t.jsx)(n.a,{href:"/code/",children:"GitHub"})," and ",(0,t.jsx)(n.a,{href:"/chat/",children:"Discord"})," to share insights, file issues, and learn from other developers building zero-latency solutions."]}),"\n",(0,t.jsx)(n.li,{}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["By integrating RxDB into your stack, you achieve millisecond interactions, full ",(0,t.jsx)(n.a,{href:"/offline-first.html",children:"offline capabilities"}),", secure data at rest, and minimal overhead for large or distributed teams. This zero-latency local first architecture is the future of modern software - delivering a fluid, always-available user experience without overcomplicating the developer workflow."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var i=r(6540);const t={},a=i.createContext(t);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);