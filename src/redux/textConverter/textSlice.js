import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const textSlice = createSlice({
  name: 'textConversion',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.value = action.payload;
    },
    lowerCase: (state) => {
      state.value = state.value.toLowerCase();
    },
    upperCase: (state) => {
      state.value = state.value.toUpperCase();
    },
  },
})

export const { setText, lowerCase, upperCase } = textSlice.actions

export default textSlice.reducer