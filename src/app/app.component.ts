import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
declare var FB:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  constructor(
    private title:Title,
    private meta:Meta
  ){

  }
  ngOnInit(){ 
    this.meta.addTag({property:'og:title',content:'Inside app component'})
    this.meta.addTag({property:'og:image',content:'https://s3-us-west-2.amazonaws.com/brainpunditsimages/files/thumb_15429728584061542972856551.png'});
    this.meta.addTag({property:'og:description',content:'Share detais from my app'});
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
    href: 'https://share-fbb.herokuapp.com/',
  }, function(response){});
}

shareMe(){
  this.meta.updateTag({property:'og:title',content:'Inside New App component'})
    this.meta.updateTag({property:'og:image',content:'https://s3-us-west-2.amazonaws.com/brainpunditsimages/files/thumb_15755440083361575544008820.png'});
    this.meta.updateTag({property:'og:description',content:'Share detais from new app app'});
}
}
