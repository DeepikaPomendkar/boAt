import { NgModule } from '@angular/core';
import{ RouterModule, Routes} from '@angular/router'
import{ LogoComponent} from './logo/logo.component';
import { HeroComponent} from './hero/hero.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormloginComponent } from './formlogin/formlogin.component';
import { ConnectComponent } from './connect/connect.component'; 
const routes: Routes=[
  { path: '', redirectTo: '/logo', pathMatch: 'full' },
  {path:'formlogin',component:FormloginComponent},
  {path: 'logo',component:LogoComponent},
  {path:'gallery', component:GalleryComponent},
  {path: 'connect',component:ConnectComponent},
  


  

  
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    
  ],
  exports:[RouterModule],
  
})
export class AppRoutingModule { }
