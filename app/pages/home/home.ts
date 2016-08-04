  import {Component} from '@angular/core';
  import {NavController, Platform} from 'ionic-angular';
  import {GoogleMap, GoogleMapsEvent, GoogleMapsMarker, GoogleMapsLatLng} from 'ionic-native';

  @Component({
    templateUrl: 'build/pages/home/home.html'
  })
  export class HomePage {
    private map;
    constructor(private navCtrl: NavController,private platform:Platform) {
      this.platform.ready().then(() => {
          this.setupGoogleMap()
         });
      }




    setupGoogleMap(){
      // somewhere in your component
      this.map = new GoogleMap('map');

      let latLng = new GoogleMapsLatLng(-53.6339946,-76.6077185);
      let marker = new GoogleMapsMarker(this.map);
      marker.setPosition(latLng);

      this.map.addMarker(marker);
      this.map.setCenter(latLng);
      this.map.setZoom(12);

      this.map.on(GoogleMapsEvent.MAP_READY)
      .subscribe(() => console.log("Map is ready!"));
    }
  }
