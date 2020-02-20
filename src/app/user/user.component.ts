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
  ngOnInit() {
    this.meta.updateTag({property:'og:title',content:'Inside New App component'})
    this.meta.updateTag({property:'og:image',content:'https://s3-us-west-2.amazonaws.com/brainpunditsimages/files/thumb_15755440083361575544008820.png'});
    this.meta.updateTag({property:'og:description',content:'Share detais from new app app'});
   
  }
  shareMe(){
     FB.ui({
        display: 'popup',
        method: 'share',
        href: 'https://share-fbb.herokuapp.com/',
      }, function(response){});
  }
}
