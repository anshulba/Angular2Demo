import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({ 
    templateUrl: 'app/Product/product-list.component.html',
    styleUrls: ['app/Product/product-list.component.css']
 }) 
    
    export class ProductListComponent implements OnInit { 
        pageTitle: string = 'Product List';
        products:IProduct[] = [];
        imageWidth: number = 50;
        imageMargin: number = 2;
        showImage: boolean = false;
        listFilter: string = 'cart';
        errorMessage: string;

constructor(private _productService: ProductService)
{}
    
    ngOnInit(){
        this._productService.getProducts()
                    .subscribe(products => this.products = products,
                               error => this.errorMessage = <any>error);
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
