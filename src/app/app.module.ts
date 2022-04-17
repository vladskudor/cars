import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Router} from './router';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { CurrentCarComponent } from './components/current-car/current-car.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DirectiveDirective } from './components/directive/directive.directive';
import { CompareCarsComponent } from './components/compare-cars/compare-cars.component';
import { GameComponent } from './components/game/game.component';
import { ImageDirective } from './components/directive/image.directive';
import { LikeCarsComponent } from './components/profile/like-cars/like-cars.component';
import {SearchPipe} from './components/pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent,
    LoginComponent,
    MenuComponent,
    CurrentCarComponent,
    ProfileComponent,
    EditUserComponent,
    DirectiveDirective,
    CompareCarsComponent,
    GameComponent,
    ImageDirective,
    LikeCarsComponent,
    SearchPipe
  ],
    imports: [
        Router,
        BrowserModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
