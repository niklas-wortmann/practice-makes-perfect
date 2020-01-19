var concat = require('concat');

const files = [
    './dist/carousel/runtime.js',
    './dist/carousel/es2015-polyfills.js',
    './dist/carousel/scripts.js',
    './dist/carousel/main.js'
]

concat(files, './dist/elements.js')
console.info('Custom elements created successfully!')