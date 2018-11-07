import { put, takeEvery, all } from 'redux-saga/effects';

import {
    getAllProducts,
    getCollectionWatcher,
    productClickWatcher
} from "./products.sagas"

import {
    menuMobileWatcher,
    categoryClickWatcher
} from "./menu.sagas"

export default function* rootSaga() {
    yield all([
        getAllProducts(),
        getCollectionWatcher(),
        menuMobileWatcher(),
        categoryClickWatcher(),
        productClickWatcher()
      ])
 }