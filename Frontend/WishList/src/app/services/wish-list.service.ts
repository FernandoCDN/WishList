import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private http: HttpClient) { }

  getAllproducts(): Observable<any>
  {
    let params = new HttpParams();

    return this.http.get("http://localhost:8083/carvajal/crud/wishlist/api/services/product/getAll",
    {
      params: params
    });
  }
}
