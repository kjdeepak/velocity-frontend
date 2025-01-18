import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CoreModule } from 'dynamsoft-barcode-reader-bundle';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

CoreModule.engineResourcePaths = {
  std: 'assets/dynamsoft-capture-vision-std/',
  dip: 'assets/dynamsoft-image-processing/',
  core: 'assets/dynamsoft-core/',
  license: 'assets/dynamsoft-license/',
  cvr: 'assets/dynamsoft-capture-vision-router/',
  dbr: 'assets/dynamsoft-barcode-reader/',
  dce: 'assets/dynamsoft-camera-enhancer/',
};
