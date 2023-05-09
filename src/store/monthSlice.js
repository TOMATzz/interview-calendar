import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   valueMonth: [],
}

export const startMonthSlice = createSlice({
   name: 'startMonth',
   initialState,
   reducers: {


      setStartMonth: (state, action) => {
         state.valueMonth = action.payload
      },
   },
})


export const { setStartMonth } = startMonthSlice.actions

export default startMonthSlice.reducer