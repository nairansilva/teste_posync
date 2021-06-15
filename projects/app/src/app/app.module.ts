import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PoModule } from '../../../ui/src/lib';
import { PoSyncModule } from '../../../sync/src/lib';
import { PoStorageModule } from '@po-ui/ng-storage';
//import { PoModule } from '@po-ui/ng-components'; Buildado


import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }), PoModule,
  PoStorageModule.forRoot({
    name: 'mystorage',
    storeName: '_mystore',
    driverOrder: ['lokijs', 'websql', 'indexeddb', 'localstorage']
  }),
  PoSyncModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
