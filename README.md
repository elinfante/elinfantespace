# elinfantespace
Repository for My Official Site

Requirements
------------
1. NodeJs (use nvm to install) https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/
2. npm (comes with NodeJs)
3. git clone this repo
4. git checkout develop

Installing dependencies
--------------------------------------

1. `npm install`

Running the project client side
https://vitejs.dev/config/
--------------------------------------

1. go in respective project, oficial-site
2. `npm run dev`
3. to dist `npm run build` https://vitejs.dev/guide/static-deploy.html
4. to preview `npm run preview`

Depolying the App
--------------------------------------
There are 2 things to bear in mind:

Run this command `npm run build`

1. vite.config.js
`
let BASE_URL = (process.env.NODE_ENV === 'production') ?  '/aii/chatBot/' : '/';

export default defineConfig({
  publicPath: BASE_URL,
  base: BASE_URL, // Adjust the base URL as needed  (to deploy aii/chatBot/)
  build: {
    outDir: 'dist', // Output directory for production build
    minify: true,   // Enable minification for production
    sourcemap: false, // Disable source maps in production (optional)
  },
})
`
2. Update the Vue-router as follows:
`
let BASE_URL = (process.env.NODE_ENV === 'production') ?  '/aii/chatBot/' : '/';
const router = createRouter({
    base: BASE_URL,
    history : createWebHistory(BASE_URL),
    routes : routes,
})
`
