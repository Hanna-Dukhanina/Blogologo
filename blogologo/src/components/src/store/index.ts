import { Action, configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { PostsReducer } from './posts/reducer'

const rootReducer = combineReducers({
  posts: PostsReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware)
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>