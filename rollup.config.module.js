import babel from 'rollup-plugin-babel';
import { name, dependencies } from './package.json';

const fileName = name.split('/').slice(-1);

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'cjs',
      file: `dist/${fileName}.common.js`
    },
    {
      format: 'es',
      file: `dist/${fileName}.module.js`
    }
  ],
  external: Object.keys(dependencies),
  plugins: [
    babel()
  ]
};