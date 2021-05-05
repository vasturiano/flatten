import babel from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";
import dts from 'rollup-plugin-dts';
import { name, homepage, version, dependencies, peerDependencies } from './package.json';

const umdConf = {
  format: 'umd',
  name: 'flatten',
  banner: `// Version ${version} ${name} - ${homepage}`
};

const fileName = name.split('/').slice(-1);

export default [
  {
    input: 'src/index.js',
    output: [
      { // umd
        ...umdConf,
        file: `dist/${fileName}.js`,
        sourcemap: true,
      },
      { // minify
        ...umdConf,
        file: `dist/${fileName}.min.js`,
        plugins: [terser({
          output: { comments: '/Version/' }
        })]
      }
    ],
    plugins: [
      babel({ exclude: 'node_modules/**' })
    ]
  },
  { // commonJs and ES modules
    input: 'src/index.js',
    output: [
      {
        format: 'cjs',
        file: `dist/${fileName}.common.js`,
        exports: 'auto'
      },
      {
        format: 'es',
        file: `dist/${fileName}.module.js`
      }
    ],
    external: [...Object.keys(dependencies || {}), ...Object.keys(peerDependencies || {})],
    plugins: [
      babel()
    ]
  },
  { // expose TS declarations
    input: 'src/index.d.ts',
    output: [{
      file: `dist/${fileName}.d.ts`,
      format: 'es'
    }],
    plugins: [dts()]
  }
];
