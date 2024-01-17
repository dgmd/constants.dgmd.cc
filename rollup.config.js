import terser from '@rollup/plugin-terser';

import pkg from './package.json' assert { type: "json" };

export default [
  {
    input: 'app/export.js',
    output: {
      file: pkg.main,
      format: 'esm'
    },
    plugins: [
      terser()
    ],
    external: [
      "react",
      "react-dom"
    ]
  },
];
