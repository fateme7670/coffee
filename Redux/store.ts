import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth'
import ProductReducer from './features/product'
import CommentReducer from './features/comment'
import WishListReducer from './features/wishlist'
import UserReducer from './features/users'
import TiketReducer from './features/Tiket'
import DepartmentReducer from './features/department'
import ContactReducer from './features/contact'
import CartReducer from './features/cart'
import ArticleReducer from './features/article'
import DiscountReducer from './features/discount'
export const makeStore = () => {
  return configureStore({
    reducer: {
      auth:authReducer,
      product:ProductReducer,
      comments:CommentReducer,
      wishList:WishListReducer,
      user:UserReducer,
      tiket:TiketReducer,
      department:DepartmentReducer,
      contact:ContactReducer,
      cart:CartReducer,
      article:ArticleReducer,
      discount:DiscountReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']