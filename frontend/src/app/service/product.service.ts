import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {
  public API = '//localhost:8080';

  constructor(private http: HttpClient) {
  }

  create(product: any) {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json;charset=UTF-8");

    return this.http.post(this.API + '/create', product, {headers: headers});
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/all-products');
  }

  get(id: string) {
    const httpParams = new HttpParams().set('id', id);

    return this.http.get(this.API + '/product', {params: httpParams});
  }

  update(id: string, product: any) {
    const httpParams = new HttpParams().set('id', id);
    const headers = new HttpHeaders().append("Content-Type", "application/json;charset=UTF-8");

    return this.http.put(this.API + '/update', product, {params: httpParams, headers: headers});
  }

  remove(id: string) {
    const httpParams = new HttpParams().set('id', id);

    return this.http.delete(this.API + '/delete', {params: httpParams});
  }
}
