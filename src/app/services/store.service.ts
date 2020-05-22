import { Observable } from 'rxjs';
import { CONFIG } from './../app.constants';
import { Store } from './../models/store';
import { UtilsService } from './utils.service';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  GetStore(id: number): Promise<Store>{
    let store: Store
    return new Promise(
      (resolve, reject)=>{
        this._http.get(CONFIG.apiUrl[CONFIG.mode]+'/store/'+id, { responseType: 'json'},)
        .subscribe(
          data => {
            if(!data){
              reject(new Error('Une erreur est survenue'))
            }
            else{
              store = data['store']
              resolve(store)
            }

          }
        )
      }
    )
  }

}
