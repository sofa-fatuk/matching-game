import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cardsReducer from './reducers/cards'

const store = configureStore({
  reducer: combineReducers({
    cards: cardsReducer,

  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store