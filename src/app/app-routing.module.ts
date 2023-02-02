import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { EventsComponent } from './events/events.component';
import { FaqComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'blog', component: BlogComponent},
  {path:'events', component: EventsComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'pay', component: PayComponent},
  {path:'faq', component: FaqComponent},
  {path:'ourteam', component: OurteamComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
