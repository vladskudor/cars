import {NgModule} from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {LoginComponent} from './components/login/login.component';
import {AuthComponent} from './components/auth/auth.component';
import {GuardGuard} from './components/guard/guard.guard';
import {CurrentCarComponent} from './components/current-car/current-car.component';
import {ProfileComponent} from './components/profile/profile.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {CompareCarsComponent} from './components/compare-cars/compare-cars.component';
import {GameComponent} from './components/game/game.component';

const appRoutes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'auth' , component: AuthComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'profile' , component: ProfileComponent , canActivate: [GuardGuard]},
  {path: 'game' , component: GameComponent , canActivate: [GuardGuard]},
  {path: 'edit/:login/:password' , component: EditUserComponent , canActivate: [GuardGuard]},
  {path: 'current-car' , component: CurrentCarComponent , canActivate: [GuardGuard]},
  {path: 'compare-cars' , component: CompareCarsComponent , canActivate: [GuardGuard]},
  {path: 'main/:login/:password' , component: MainComponent , canActivate: [GuardGuard]}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class Router {

}
