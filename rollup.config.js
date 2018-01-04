import sourcemaps from 'rollup-plugin-sourcemaps';
import uglify from 'rollup-plugin-uglify';

const globals = {
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/forms': 'ng.forms',
  'simplemde': 'SimpleMDE'
};

const mappings = {
  'esm5': {
    input: './build/esm5/angular_simplemde.js',
    outputFile: './dist/esm5/angular_simplemde.js',
    outputFormat: 'es'
  },
  'esm2015': {
    input: './build/esm2015/angular_simplemde.js',
    outputFile: './dist/esm2015/angular_simplemde.js',
    outputFormat: 'es'
  },
  'umd': {
    input: './build/esm5/angular_simplemde.js',
    outputFile: './dist/bundles/angular_simplemde.umd.js',
    outputFormat: 'umd'
  },
  'umd-min': {
    input: './build/esm5/angular_simplemde.js',
    outputFile: './dist/bundles/angular_simplemde.umd.min.js',
    outputFormat: 'umd'
  }
}

const usedMapping = mappings[process.env['FORMAT']];

const willUglify = process.env['FORMAT'] === 'umd-min' ? [uglify()] : [];

export default {
  input: usedMapping.input,
  output: {
    file: usedMapping.outputFile,
    format: usedMapping.outputFormat,
    name: 'sarunint.angular-simplemde',
    exports: 'named',
    globals,
    sourcemap: true
  },
  external: Object.keys(globals),
  amd: {
    id: '@sarunint/angular-simplemde'
  },
  plugins: [
    sourcemaps(),
    ...willUglify
  ]
};
