import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { HeroComponent } from './hero/hero.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormloginComponent } from './formlogin/formlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectComponent } from './connect/connect.component'; 
@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HeroComponent,
    DashboardComponent,
    GalleryComponent,
    FormloginComponent,
    ConnectComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      //{path: 'formlogin', component:FormloginComponent},
      { path: 'hero', component:HeroComponent},
      {path: 'logo', component:LogoComponent },
      {path: 'gallery',component:GalleryComponent},
      {path: 'connect',component:ConnectComponent},
      
      /* when you give a wrong child in url the error component loads*/
       ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
