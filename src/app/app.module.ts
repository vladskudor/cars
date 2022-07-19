import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from './router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { DirectiveDirective } from './components/directive/directive.directive';
import { ImageDirective } from './components/directive/image.directive';
import { SearchPipe } from './components/pipe';
import { Interseptor } from './components/interseptors/interseptors.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './components/message/message.component';
import { LikeCarsComponent } from './components/profile/like-cars/like-cars.component';
import { GameComponent } from './components/game/game.component';
import { CompareCarsComponent } from './components/compare-cars/compare-cars.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CurrentCarComponent } from './components/current-car/current-car.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { MeganeComponent } from './components/megane/megane.component';

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
    SearchPipe,
    MessageComponent,
    AboutComponent,
    MeganeComponent
  ],
    imports: [
        Router,
        BrowserModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interseptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
