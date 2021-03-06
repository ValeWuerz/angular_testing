import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DreamJournalComponent } from './dream-journal/dream-journal.component';
import { IndexeddbComponent } from './indexeddb/indexeddb.component';
import { ListComponent } from './list/list.component';
import { OverviewTestingComponent } from './overview-testing/overview-testing.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

const routes: Routes = [
  { path: '', component: OverviewTestingComponent },
  { path: 'indexed', component: IndexeddbComponent },
  { path: 'sidemenu', component: SidemenuComponent },
  { path: 'overview', component: OverviewTestingComponent },
  {path: 'list', component: ListComponent},
  {path: 'dream_journal', component: DreamJournalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
