import { Component, OnInit } from '@angular/core';
declare var FB:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'share';

  ngOnInit(){
    FB.init({ 
      appId: '205134210685473',
      status: true, 
      cookie: true, 
      xfbml: true,
      version: 'v2.4'
    });
  }

  share(){
    FB.ui({
    display: 'popup',
    method: 'share',
    href: 'http://localhost:4200',
  }, function(response){});
}
}
