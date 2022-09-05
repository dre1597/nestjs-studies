import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../shared/interfaces/product';

import { ProductService } from './services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [],
})
export class MainComponent implements OnInit, OnDestroy {
  products: Product[] = [];

  private _subscriptions: Subscription[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this._findAll();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  private _findAll(): void {
    const findAllSubscription = this.productService
      .findAll()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
    this._subscriptions.push(findAllSubscription);
  }

  like(productId: string): void {
    const likeSubscription = this.productService
      .like(productId)
      .subscribe((product) => {
        this.products = this.products.map((product) => {
          if (product.id === productId) {
            product.likes++;
          }
          return product;
        });
      });
  }
}
