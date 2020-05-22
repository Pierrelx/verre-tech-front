import { StoreService } from './../../../services/store.service';
import { Store } from './../../../models/store';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as L from "leaflet";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  public store: Store

  constructor(private _route: ActivatedRoute,
              private _storeService: StoreService) {
              }

  ngOnInit() {
    this.getStore()
  }

  getStore(){
    this.store = new Store()
    let storeId = this._route.snapshot.params["id"];
    this._storeService.GetStore(storeId)
    .then(
      data => {
        this.store = data
        this.setMap(this.store)
      }
    )
    .catch(
      err => {
        console.log(err)
      }
    )
  }

  setMap(store){
    const storeMap = L.map('store-map').setView([store.latitude, store.longitude], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(storeMap)

    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    L.marker([store.latitude, store.longitude], {icon: myIcon}).bindPopup('Magasin ouvert du lundi au mardi de 9h à 19h').addTo(storeMap).openPopup();
  }

}
