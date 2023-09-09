import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {BadgeResponse} from "../model/badge/response/badge-response";

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  private readonly baseUrl = environment.BASE_URL;

  constructor(private _httpClient: HttpClient) {
  }

  getAll = (): Observable<BadgeResponse[]> => {
    return this._httpClient.get<BadgeResponse[]>(`${this.baseUrl}/Badge/`);
  };
}
