import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
declare var FB:any

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private title:Title,
    private meta:Meta
  ){

  }
  async ngOnInit() {
    await this.setTags();
    FB.init({ 
      appId: '205134210685473',
      status: true, 
      cookie: true, 
      xfbml: true,
      version: 'v2.4'
    });
  }
  async setTags(){
    this.meta.updateTag({property:'og:title',content:'Inside New App component'})
    this.meta.updateTag({property:'og:image',content:'https://s3-us-west-2.amazonaws.com/brainpunditsimages/files/thumb_15755440083361575544008820.png'});
    this.meta.updateTag({property:'og:description',content:'Share detais from new app app'});
    return true;
  }
  async shareMe(){
    await this.setTags();
     FB.ui({
        display: 'popup',
        method: 'share',
        href: 'https://share-fbb.herokuapp.com/user',
      }, function(response){});
  }
}
