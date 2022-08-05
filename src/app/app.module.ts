import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoxesComponent } from './components/boxes/boxes.component';
import { BoxComponent } from './components/box/box.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BoxListComponent } from './components/box-list/box-list.component';
import { BoxEffects } from './state/effects/box.effects';
import { boxReducer } from './state/reducers/box.reducers';

@NgModule({
  declarations: [
    AppComponent,
    BoxesComponent,
    BoxComponent,
    PageNotFoundComponent,
    BoxListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ box: boxReducer }),
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([BoxEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
