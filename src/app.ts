// import {bootstrap} from '@angular/platform-browser-dynamic';
// import {provide, enableProdMode} from '@angular/core';
// import {HTTP_PROVIDERS} from '@angular/http';
// import {HashLocationStrategy, LocationStrategy} from '@angular/common';

// if (process.env.NODE_ENV === 'production') {
//   enableProdMode();
// }

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);

// bootstrap(AppComponent, [
//   HTTP_PROVIDERS,
//   ROUTER_PROVIDERS,
//   provide(LocationStrategy, {
//       useClass: HashLocationStrategy,
//     }
//   ),
// ])
//   .catch((err: any) => console.error(err));
