import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Product } from '../../shared/interfaces/product';

@Injectable()
export class ProductService {
  private _endpoint = `${environment.baseAdminApiUrl}/products`;

  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this._endpoint);
  }

  create(product: { title: string; image: string }): Observable<void> {
    return this.httpClient.post<void>(this._endpoint, product);
  }

  findOne(productId: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this._endpoint}/${productId}`);
  }

  update(
    productId: string,
    product: { title: string; image: string }
  ): Observable<void> {
    return this.httpClient.patch<void>(
      `${this._endpoint}/${productId}`,
      product
    );
  }

  delete(productId: string): Observable<void> {
    return this.httpClient.delete<void>(`${this._endpoint}/${productId}`);
  }
}
