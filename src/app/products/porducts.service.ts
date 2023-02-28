import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { Category } from '../site-framework/category';

@Injectable({
  providedIn: 'root'
})
export class PorductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.get<Product>(productUrl);
  }

  getCategories(): Observable<Category>{
    const categoriesUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(categoriesUrl);
  }

  createProduct(productBody: any) : Observable<Product> {
    const productUrl = 'http://localhost:3000/products';
     return this.httpClient.post<Product>(productUrl, productBody);
  }

  viewProduct(productId: string): Observable<Product>{
    const productUrl = 'http://localhost:3000/products'+productId;
    return this.httpClient.get<Product>(productUrl);
  }
  
  updateProduct(productId: string, productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products'+productId;
    return this.httpClient.put<Product>(productUrl, productBody);
  }
  
  deleteProduct(productId: string): Observable<Product>{
    const productUrl = 'http://localhost:3000/products'+productId;
    return this.httpClient.delete<Product>(productUrl);
  }
  searchCategoryProducts(categoryId: string): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/category='+categoryId;
    return this.httpClient.get<Product>(productUrl);
  }
  searchDateProducts(dateParam: string): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/date='+dateParam;
    return this.httpClient.get<Product>(productUrl);
  }
}
