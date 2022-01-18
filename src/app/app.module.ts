import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { IndexeddbComponent } from './indexeddb/indexeddb.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { OverviewTestingComponent } from './overview-testing/overview-testing.component';
const dbConfig: DBConfig  = {
  name: 'images',
  version: 1,
  objectStoresMeta: [{
    store: 'images',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'email', keypath: 'email', options: { unique: false } }
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent,
    IndexeddbComponent,
    SidemenuComponent,
    OverviewTestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);