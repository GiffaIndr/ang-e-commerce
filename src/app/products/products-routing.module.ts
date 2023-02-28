import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';

const routes: Routes = [
  { path: '', component: ViewAllProductsComponent },
  { path: 'create-products', component: CreateProductComponent },
  {path: 'search', component: ViewAllProductsByCategoryComponent}, 
  {path: 'search-date', component: ViewAllProductsByDateComponent},
  {path: 'delete-products/:id', component: DeleteProductsComponent},
  {path: 'view-products/:id', component: ViewProductComponent},
  {path: 'update-products/:id', component: UpdateProductsComponent}

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
