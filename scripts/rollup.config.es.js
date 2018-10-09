import config from './rollup.config';

// ES output
config.output.format = 'es';
config.output.file = 'dist/index.es.js';

export default config;