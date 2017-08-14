import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';
import { FormsModule} from '@angular/forms';
import {CommonModule} from  '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component : ProductListComponent}
      //{ path: 'product/:id',}
    ])
  ],
  declarations: [
    ProductListComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
