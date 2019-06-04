/**
 * Modules imports
 */
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ServiceWorkerModule } from '@angular/service-worker'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {RouterStateSerializer, StoreRouterConnectingModule} from "@ngrx/router-store";
import { EffectsModule } from '@ngrx/effects';

/**
 * Componentes imports
 */
import { AppComponent } from './app.component';

/**
 * We import other utilities
 */
import {routes} from './app.routing';
import { reducers, metaReducers } from './reducers';
import {CustomSerializer} from './shared/utils';
import { environment } from '../environments/environment';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';



export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri: environment.apiUrl}),
    cache: new InMemoryCache()
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      preventDuplicates: true
    }),
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({stateKey:'router'}),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled:environment.production})
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(apollo: Apollo, httpLink: HttpLink) {
    
  }
}
