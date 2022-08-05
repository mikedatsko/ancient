import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxesComponent } from './components/boxes/boxes.component';
import { BoxComponent } from './components/box/box.component';
import { BoxListComponent } from './components/box-list/box-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'boxes',
    component: BoxesComponent,
    children: [
      {
        path: ':id',
        component: BoxComponent,
      },
      {
        path: '',
        component: BoxListComponent,
      },
    ],
  },
  { path: '', redirectTo: '/boxes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
