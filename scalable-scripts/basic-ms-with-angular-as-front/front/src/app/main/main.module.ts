import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule],
  providers: [ProductService],
})
export class MainModule {}
