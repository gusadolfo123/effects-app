import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

// Perzonalizados
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {UsersModule} from './users/users.module';

// rutas
import {AppRoutingModule} from './app-routing.module';

// environments
import {environment} from 'src/environments/environment.prod';

// ngrx
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppReducers} from './store/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {effectsArr} from './store/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    UsersModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(AppReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(effectsArr),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
