import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LandingComponent } from './components/landing/landing.component';
import { AuthGuardService } from './services/auth/authGuard-service';
import { AppListComponent } from './components/app-list/app-list.component';
import { RequestAccessComponent } from './components/request-access/request-access.component';
import { LeaveFeedbackComponent } from './components/leave-feedback/leave-feedback.component';
import { AdminScreenComponent } from './components/admin-screen/admin-screen.component';
import { CallbackComponent } from './components/callback/callback.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: LandingComponent, canActivate: [AuthGuardService], children: [
    { path: '', redirectTo: 'apps', pathMatch: 'full', canActivate: [AuthGuardService] },
    { path: 'apps', component: AppListComponent, canActivate: [AuthGuardService] },
    { path: 'access', component: RequestAccessComponent, canActivate: [AuthGuardService] },
    { path: 'feedback', component: LeaveFeedbackComponent, canActivate: [AuthGuardService] }
  ]},
  { path: 'admin', component: AdminScreenComponent, canActivate: [AuthGuardService] },
  { path: 'wishes', loadChildren: './applications/wishes/wishes.module#WishesModule', canActivate: [AuthGuardService]},
  { path: 'shared', loadChildren: './shared/shared.module#SharedModule', canActivate: [AuthGuardService]},
  { path: 'foodtracker', loadChildren: './applications/food-tracker/food-tracker.module#FoodTrackerModule', canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
