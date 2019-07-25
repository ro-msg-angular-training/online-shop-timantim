import { createSelector } from '@ngrx/store';
import { selectProductState } from '../app.states';
import { ProductState } from '../states/product.states';
import { AppState } from '../app.states';

//const selectProductState = (state: AppState) => state.productState;

export const getProducts = createSelector(
    selectProductState,
    (state: ProductState) => state.products
);

export const getSelectedProduct = createSelector(
    selectProductState,
    (state: ProductState) => state.selectedProduct
);