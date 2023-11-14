/** @type {import('vite').UserConfig} */
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ command, mode }) => {
  return {
    define: {
      // By default, Vite doesn't include shims for NodeJS/
      // necessary for segment analytics lib to work
      global: {},
    },
    plugins: [
      react({ jsxImportSource: '@emotion/react' }),
      dts({
        insertTypesEntry: true,
        copyDtsFiles: true
      }),
      cssInjectedByJsPlugin()
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.tsx'),
        name: 'react-google-calendar',
        formats: ['es', 'umd'],
        fileName: (format) => `react-google-calendar.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        }
      },
    }
  };
});
