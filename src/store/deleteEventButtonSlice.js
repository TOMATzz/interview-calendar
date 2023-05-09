import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   deleteButtonText: "Delete",
}

export const eventDeleteButtonTextSlice = createSlice({
   name: 'eventDeleteButtonText',
   initialState,
   reducers: {


      setEventDeleteButtonText: (state, action) => {
         state.deleteButtonText = action.payload
      },
   },
})


export const { setEventDeleteButtonText } = eventDeleteButtonTextSlice.actions

export default eventDeleteButtonTextSlice.reducer