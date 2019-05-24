// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, ChildrenOutletContexts } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Components
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LandingComponent } from './components/landing/landing.component';
import { CallbackComponent } from './components/callback/callback.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { AppCardComponent } from './components/app-card/app-card.component';
import { AppListComponent } from './components/app-list/app-list.component';
import { RequestAccessComponent } from './components/request-access/request-access.component';
import { LeaveFeedbackComponent } from './components/leave-feedback/leave-feedback.component';

// Services
import { AuthGuardService } from './services/auth/authGuard-service';

// Modules
import { SharedModule } from './shared/shared.module';
import { NgRedux, NgReduxModule } from '@angular-redux/store';

// Redux
import { store } from './redux/store';
import { IGlobalState as GlobalState } from './redux/rootReducer';
import { SharedActionCreators } from './redux/shared/sharedReducer';
import { SharedService } from './services/shared/sharedServices';
import { WishesActionCreators } from './redux/wishes/wishesRootReducer';
import { WishesService } from './services/wishes/wishesService';
import { AdminScreenComponent } from './components/admin-screen/admin-screen.component';
import { FoodActionCreators } from './redux/food/foodReducer';
import { FoodService } from './services/food/foodService';
import { MiniAppCardComponent } from './components/mini-app-card/mini-app-card.component';
import { MatMenuModule } from '@angular/material';

import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LandingComponent,
    CallbackComponent,
    HomeCarouselComponent,
    AppCardComponent,
    AppListComponent,
    RequestAccessComponent,
    LeaveFeedbackComponent,
    AdminScreenComponent,
    MiniAppCardComponent
  ],
  entryComponents: [],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    NgReduxModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthGuardService,
    LandingComponent,
    SharedActionCreators,
    SharedService,
    WishesActionCreators,
    WishesService,
    FoodService,
    FoodActionCreators,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<GlobalState>) {
    ngRedux.provideStore(store);
  }
}
