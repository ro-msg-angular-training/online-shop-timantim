import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';
import { CreateProduct, ProductActionTypes, CreateProductSuccess, CreateProductFailure, GetProduct, GetProductSuccess, GetProductFailure, GetProducts, GetProductsSuccess, GetProductsFailure, UpdateProduct, UpdateProductSuccess, UpdateProductFailure, DeleteProductSuccess, DeleteProduct, DeleteProductFailure } from '../actions/product.actions';

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private router: Router,
  ) {}

    // Create Product
    @Effect()
    CreateProduct: Observable<any> = this.actions$
    .pipe(
    ofType<CreateProduct>(ProductActionTypes.CREATEPRODUCT),
    map((action: CreateProduct) => action.payload),
    switchMap(payload => {
        return this.productService.addProduct(payload).pipe(
        map(() => {
            return new CreateProductSuccess({product: payload});
        }),
        catchError((error) => {
            return of(new CreateProductFailure({ error: error }));
        }));
    }));

    @Effect({ dispatch: false })
    CreateProductSuccess: Observable<any> = this.actions$.pipe(
    ofType(ProductActionTypes.CREATEPRODUCT_SUCCESS)
    );

    @Effect({ dispatch: false })
    CreateProductFailure: Observable<any> = this.actions$.pipe(
    ofType(ProductActionTypes.CREATEPRODUCT_FAILURE)
    );

    
    // Get Product
    @Effect()
    GetProduct: Observable<any> = this.actions$
    .pipe(
    ofType<GetProduct>(ProductActionTypes.GETPRODUCT),
    map((action: GetProduct) => action.payload),
    switchMap(payload => {
        return this.productService.getProduct(payload).pipe(
        map(() => {
            return new GetProductSuccess({product: payload});
        }),
        catchError((error) => {
            return of(new GetProductFailure({ error: error }));
        }));
    }));

    @Effect({ dispatch: false })
    GetProductSuccess: Observable<any> = this.actions$.pipe(
    ofType(ProductActionTypes.GETPRODUCT_SUCCESS)
    );

    @Effect({ dispatch: false })
    GetProductFailure: Observable<any> = this.actions$.pipe(
    ofType(ProductActionTypes.GETPRODUCT_FAILURE)
    );

    // Get Products
    @Effect()
    GetProducts: Observable<any> = this.actions$
    .pipe(
    ofType<GetProducts>(ProductActionTypes.GETPRODUCTS),
    map((action: GetProducts) => action.payload),
    switchMap( () => {
        return this.productService.getProducts().pipe(
        map(() => {
            return new GetProductsSuccess({ });
        }),
        catchError((error) => {
            return of(new GetProductsFailure({ error: error }));
        }));
    }));

    @Effect({ dispatch: false })
    GetProductsSuccess: Observable<any> = this.actions$.pipe(
    ofType(ProductActionTypes.GETPRODUCTS_SUCCESS)
    );

    @Effect({ dispatch: false })
    GetProductsFailure: Observable<any> = this.actions$.pipe(
    ofType(ProductActionTypes.GETPRODUCTS_FAILURE)
    );

    // Update Product
    @Effect()
    UpdateProduct: Observable<any> = this.actions$
    .pipe(
    ofType<UpdateProduct>(ProductActionTypes.UPDATEPRODUCT),
    map((action: UpdateProduct) => action.payload),
    switchMap(payload => {
        return this.productService.updateProduct(payload).pipe(
        map(() => {
            return new UpdateProductSuccess({product: payload});
        }),
        catchError((error) => {
            return of(new UpdateProductFailure({ error: error }));
        }));
    }));

    @Effect({ dispatch: false })
    UpdateProductSuccess: Observable<any> = this.actions$.pipe(
    ofType(ProductActionTypes.UPDATEPRODUCT_SUCCESS)
    );

    @Effect({ dispatch: false })
    UpdateProductFailure: Observable<any> = this.actions$.pipe(
    ofType(ProductActionTypes.UPDATEPRODUCT_FAILURE)
    );

    // Delete Product
    @Effect()
    DeleteProduct: Observable<any> = this.actions$
    .pipe(
    ofType<DeleteProduct>(ProductActionTypes.DELETEPRODUCT),
    map((action: DeleteProduct) => action.payload),
    switchMap(payload => {
        return this.productService.deleteProduct(payload).pipe(
        map(() => {
            return new DeleteProductSuccess({product: payload});
        }),
        catchError((error) => {
            return of(new DeleteProductFailure({ error: error }));
        }));
    }));

    @Effect({ dispatch: false })
    DeleteProductSuccess: Observable<any> = this.actions$.pipe(
    ofType(ProductActionTypes.DELETEPRODUCT_SUCCESS)
    );

    @Effect({ dispatch: false })
    DeleteProductFailure: Observable<any> = this.actions$.pipe(
    ofType(ProductActionTypes.DELETEPRODUCT_FAILURE)
    );

}