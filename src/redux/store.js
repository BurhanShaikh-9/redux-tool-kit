// redux/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import textReducer from './textConverter/textSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    textConversion: textReducer,
  },
})
