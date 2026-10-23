
// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');

//   return {
//     plugins: [react()],

//     server: {
//       proxy: {
//         '/api': {
//           target:
//             env.API_PROXY_TARGET ||
//             'https://api.crl-transport.com',
//           changeOrigin: true,
//           secure: true,
//           rewrite: (path) => path.replace(/^\/api/, ''),
//         },
//       },
//     },
//   };
// });



import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target:
            env.API_PROXY_TARGET ||
            'https://www.crl-transport.com',
          changeOrigin: true,
          secure: true,
          // Keep /api because the working URL includes it.
        },
      },
    },
  };
});
