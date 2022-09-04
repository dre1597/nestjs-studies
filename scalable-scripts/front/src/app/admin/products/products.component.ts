import { Component, OnDestroy, OnInit } from '@angular/core';

import { Product } from './interfaces/product';
import { ProductService } from './services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [],
})
export class ProductsComponent implements OnInit, OnDestroy {
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

  deleteProduct(productId: string): void {
    if (
      confirm(`Are you sure you want to delete this product(${productId})?`)
    ) {
      const deleteSubscription = this.productService
        .delete(productId)
        .subscribe(() => {
          this.products = this.products.filter(
            (product) => product.id !== productId
          );
        });
      this._subscriptions.push(deleteSubscription);
    }
  }
}
