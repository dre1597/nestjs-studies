import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [AdminComponent, ProductsComponent],
  imports: [CommonModule, RouterModule],
})
export class AdminModule {}
