import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {
  public API = '//localhost:8080';

  constructor(private http: HttpClient) {
  }

  create(product: any) {
    return this.http.post(this.API + '/create', product);
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

    return this.http.put(this.API + '/update', product, {params: httpParams});
  }

  remove(id: string) {
    const httpParams = new HttpParams().set('id', id);

    return this.http.delete(this.API + '/delete', {params: httpParams});
  }
}
