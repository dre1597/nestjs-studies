import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';

@NgModule({
  declarations: [AdminComponent, ProductsComponent, ProductCreateComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
})
export class AdminModule {}
