import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: [],
})
export class ProductCreateComponent implements OnDestroy {
  title = '';
  image = '';

  private _subscriptions: Subscription[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnDestroy(): void {
    this._subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  create(): void {
    const createSubscription = this.productService
      .create({ title: this.title, image: this.image })
      .subscribe(() => {
        this.router.navigate(['/admin/products']);
      });
    this._subscriptions.push(createSubscription);
  }
}
