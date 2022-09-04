import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: [],
})
export class ProductEditComponent implements OnInit, OnDestroy {
  form: FormGroup;
  productId: string;

  private _subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      image: '',
    });

    this.productId = this.route.snapshot.params['id'];

    const findOneSubscription = this.productService
      .findOne(this.productId)
      .subscribe((product) => {
        this.form.patchValue(product);
      });

    this._subscriptions.push(findOneSubscription);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  update(): void {
    const updateSubscription = this.productService
      .update(this.productId, this.form.getRawValue())
      .subscribe(() => {
        this.router.navigate(['/admin/products']);
      });
    this._subscriptions.push(updateSubscription);
  }
}
