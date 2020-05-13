import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  extractData(res: Response) {
    return res || { }
}

handleError (error: any) {
    let message: string;
    let title: string

    if (error instanceof HttpErrorResponse) {
        message = `${error.status} - ${error.statusText || ''} ${error.url}`
        title = 'Connexion impossible';
    }
    else {
        message = error.message ? error.message : error.toString()
        title = 'Erreur interne';
    }

    return Observable.throw({ message, title })
}
}
