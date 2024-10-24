import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';  // Import 'of' here
import { Product } from '../common/product';
import { map, catchError } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.shopApiUrl + '/products';
  private categoryUrl = environment.shopApiUrl + '/product-category';

  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId: number): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByCategoryId`;

    const params = new HttpParams().set('id', theCategoryId.toString());

    return this.httpClient.get<GetResponseProducts>(searchUrl, { params }).pipe(
      map(response => response._embedded.products),
      catchError(this.handleError<Product[]>('getProductList', []))
    );
  }

  getProductListPaginate(thePage: number, thePageSize: number, theCategoryId: number): Observable<GetResponseProducts> {
    const searchUrl = `${this.baseUrl}/search/findByCategoryId`;
    
    const params = new HttpParams()
      .set('id', theCategoryId.toString())
      .set('page', thePage.toString())
      .set('size', thePageSize.toString());

    return this.httpClient.get<GetResponseProducts>(searchUrl, { params }).pipe(
      catchError(this.handleError<GetResponseProducts>('getProductListPaginate'))
    );
  }

  searchProducts(theKeyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getProducts(searchUrl);
  }

  searchProductsPaginate(thePage: number, thePageSize: number, theKeyword: string): Observable<GetResponseProducts> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    
    const params = new HttpParams()
      .set('page', thePage.toString())
      .set('size', thePageSize.toString());

    return this.httpClient.get<GetResponseProducts>(searchUrl, { params }).pipe(
      catchError(this.handleError<GetResponseProducts>('searchProductsPaginate'))
    );
  }

  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products),
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductCategories>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory),
      catchError(this.handleError<ProductCategory[]>('getProductCategories', []))
    );
  }

  getProduct(theProductId: number): Observable<Product> {
    const productUrl = `${this.baseUrl}/${theProductId}`;

    return this.httpClient.get<Product>(productUrl).pipe(
      catchError(this.handleError<Product>('getProduct'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);  // 'of' is used to return an observable
    };
  }
}
export interface ProductResponse {
  _embedded: {
    products: Product[]; // Assuming Product is already defined elsewhere
  };
  page: {
    number: number;
    size: number;
    totalElements: number;
  };
}


interface GetResponseProducts {
  _embedded: {
    products: Product[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}

interface GetResponseProductCategories {
  _embedded: {
    productCategory: ProductCategory[];
  };
}
