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
import { ListComponent } from './list/list.component';
import { DreamJournalComponent } from './dream-journal/dream-journal.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
const dbConfig: DBConfig  = {
  name: 'data',
  version: 1,
  objectStoresMeta: [{
    store: 'sheets',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      
      { name: 'id', keypath: 'id', options: { unique: false } },
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'imageUrl', keypath: 'imageUrl', options: { unique: false } }
    ]
  },
  {
    store: 'dreams',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      
      { name: 'day', keypath: 'day', options: { unique: false } },
      { name: 'content', keypath: 'content', options: { unique: false } },
      { name: 'felt_quality', keypath: 'felt_quality', options: { unique: false } },
      { name: 'dream_intensity', keypath: 'dream_intensity', options: { unique: false } },
      
    ]
  },
]
};

@NgModule({
  declarations: [
    AppComponent,
    IndexeddbComponent,
    SidemenuComponent,
    OverviewTestingComponent,
    ListComponent,
    DreamJournalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    BrowserModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);