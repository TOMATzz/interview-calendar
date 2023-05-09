import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   value: 0,
}

export const modalEventSlice = createSlice({
   name: 'modalEvent',
   initialState,
   reducers: {


      setModalEvent: (state, action) => {
         state.value = action.payload
      },
   },
})


export const { setModalEvent } = modalEventSlice.actions

export default modalEventSlice.reducer