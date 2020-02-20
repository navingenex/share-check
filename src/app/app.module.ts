import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
declare var FB:any;



const routes:Routes=[
{path:'',component:AppComponent},
{path:'user',component:UserComponent}
]
@NgModule({
  declarations: [
    AppComponent,UserComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
