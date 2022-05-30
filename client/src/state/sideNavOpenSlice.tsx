import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: boolean = false

export const sideNavOpenSlice = createSlice({
  name: 'sideNavOpen',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateSideNavOpen: (state, action: PayloadAction<boolean>) => {
      return state = action.payload
    },
  },
})

export const { updateSideNavOpen } = sideNavOpenSlice.actions

export default sideNavOpenSlice.reducer
