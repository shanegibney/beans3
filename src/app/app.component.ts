import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  location = {};
  title: string = 'This... is rye first angular2-google-maps project';
  // lat: number = 51.678418;
  // lng: number = 7.809007;
  lat: number = null;
  lng: number = null;

  // lat: number = position.coords.latitude;
  // lat: number = position.coords.latitude;
  // lng: number = position.coords.longitude;

  setPosition(position){
      this.location = position.coords;
        // console.log(position.coords.latitude);
        // console.log(position.coords.longitude);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      }

  ngOnInit(){
    // console.log("latitude: " + location);
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      };

   }
  }
