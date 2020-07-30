import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { agGridKey } from '@ag-grid-workspace/shared';
import { LicenseManager } from '@ag-grid-enterprise/all-modules';

if (environment.production) {
  enableProdMode();
}

Promise.resolve()
  .then(() => LicenseManager.setLicenseKey(agGridKey))
  .then(() => platformBrowserDynamic().bootstrapModule(AppModule))
  .catch((err) => console.error(err));
