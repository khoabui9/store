import { put, takeEvery, all } from 'redux-saga/effects';

import {
    getAllProducts,
    getCollectionWatcher,
    productClickWatcher,
    getSelectedProductWatcher
} from "./products.sagas"

import {
    menuMobileWatcher,
    categoryClickWatcher
} from "./menu.sagas"

import {
    addToCartWatcher,
    removeFromCartWatcher,
    deleteAllToCartWatcher,
    updateAmountWatcher
} from "./cart.sagas"


export default function* rootSaga() {
    yield all([
        getAllProducts(),
        getCollectionWatcher(),
        menuMobileWatcher(),
        categoryClickWatcher(),
        productClickWatcher(),
        getSelectedProductWatcher(),
        addToCartWatcher(),
        removeFromCartWatcher(),
        deleteAllToCartWatcher(),
        updateAmountWatcher(),
    ])
}