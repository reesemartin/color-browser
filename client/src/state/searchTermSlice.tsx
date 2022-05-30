import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: string = ''

export const searchTermSlice = createSlice({
  name: 'searchTerm',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateSearchTerm: (state, action: PayloadAction<string>) => {
      return state = action.payload
    },
  },
})

export const { updateSearchTerm } = searchTermSlice.actions

export default searchTermSlice.reducer
