import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Product } from '../../shared/interfaces/product';

@Injectable()
export class ProductService {
  private _endpoint = `${environment.baseMainApiUrl}/products`;

  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this._endpoint);
  }

  like(productId: string): Observable<Product> {
    return this.httpClient.post<Product>(
      `${this._endpoint}/${productId}/like`,
      {}
    );
  }
}
