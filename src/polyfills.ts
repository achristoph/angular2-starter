import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone'); // tslint:disable-line

if (process.env.ENV === 'production') {
  // Production
} else {
  // Development
  Error['stackTraceLimit'] = Infinity; // tslint:disable-line
  require('zone.js/dist/long-stack-trace-zone'); // tslint:disable-line
}
