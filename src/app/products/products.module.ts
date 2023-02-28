import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { SiteFrameworkModule } from "../site-framework/site-framework.module";


@NgModule({
    declarations: [
        ProductsComponent,
        CreateProductComponent,
        ViewProductComponent,
        ViewAllProductsComponent,
        DeleteProductsComponent,
        UpdateProductsComponent,
        ViewAllProductsByDateComponent,
        ViewAllProductsByCategoryComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SiteFrameworkModule
    ]
})
export class ProductsModule { }
