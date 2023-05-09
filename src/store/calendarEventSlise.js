import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   onClick: false,
   calendarEventId: {},
}

export const clickEventSlice = createSlice({
   name: 'clickEvent',
   initialState,
   reducers: {


      setOnClickEvent: (state, action) => {
         state.onClick = action.payload
      },
      setCalendarEventId: (state, action) => {
         state.calendarEventId = action.payload;


      },
   },
})


export const { setOnClickEvent, setCalendarEventId } = clickEventSlice.actions

export default clickEventSlice.reducer