import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   valueDate: [],
}

export const startDateSlice = createSlice({
   name: 'startDate',
   initialState,
   reducers: {


      setStartDate: (state, action) => {
         state.valueDate = action.payload
      },
   },
})


export const { setStartDate } = startDateSlice.actions

export default startDateSlice.reducer