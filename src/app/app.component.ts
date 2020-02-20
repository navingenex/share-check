import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CompileStylesheetMetadata } from '@angular/compiler';
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
    
    FB.init({ 
      appId: '205134210685473',
      status: true, 
      cookie: true, 
      xfbml: true,
      version: 'v2.4'
    });
  }
  async setMetaData(title:string,image:string,description:string){
    this.meta.updateTag({property:'og:title',content:title})
    this.meta.updateTag({property:'og:image',content:image});
    this.meta.updateTag({property:'og:description',content:description});
    return true
  }
  async share(){
    await this.setMetaData('Inside app component','https://s3-us-west-2.amazonaws.com/brainpunditsimages/files/thumb_15429728584061542972856551.png','Share detais from my app')
    FB.ui({
    display: 'popup',
    method: 'share',
    href: 'https://share-fbb.herokuapp.com/',
  }, function(response){});
}

async shareMe(){
  await this.setMetaData('Inside app component','https://s3-us-west-2.amazonaws.com/brainpunditsimages/files/thumb_15755440083361575544008820.png','Share detais from my app')
  FB.ui({
      display: 'popup',
      method: 'share',
      href: 'https://share-fbb.herokuapp.com/',
    }, function(response){});
}
}
