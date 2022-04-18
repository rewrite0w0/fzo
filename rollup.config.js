const { nodeResolve } = require('@rollup/plugin-node-resolve');
const pluginCommonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');
const { babel } = require('@rollup/plugin-babel');

const pkg = require('./package.json');
const path = require('path');

const moduleName = pkg.name.replace(/^@.*\//, '');

const banner = `
/**
 * @license
 * ${moduleName}.js v${pkg.version}
 * Released under the ${pkg.license} License.
 **/
`;

module.exports = [
  // browser
  {
    input: 'src/index.js',
    output: [
      {
        name: moduleName,
        file: pkg.browser,
        format: 'iife',
        sourcemap: 'inline',
        banner,
      },
      {
        name: moduleName,
        file: pkg.browser.replace('.js', '.min.js'),
        format: 'iife',
        sourcemap: 'inline',
        banner,
        plugins: [terser()],
      },
    ],
    plugins: [
      nodeResolve({ browser: true }),
      pluginCommonjs({ extensions: ['.js'] }),
      babel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, '.babelrc.js'),
      }),
    ],
  },

  // ES Module
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: 'inline',
        banner,
        exports: 'named',
      },
    ],
    plugins: [
      pluginCommonjs({
        extensions: ['.js'],
      }),
      babel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, '.babelrc.js'),
      }),
      nodeResolve({
        browser: false,
      }),
    ],
  },

  // CommonJS
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: 'inline',
        banner,
        exports: 'default',
      },
    ],
    plugins: [
      pluginCommonjs({
        extensions: ['.js'],
      }),
      babel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, '.babelrc.js'),
      }),
      nodeResolve({
        browser: false,
      }),
    ],
  },
];
