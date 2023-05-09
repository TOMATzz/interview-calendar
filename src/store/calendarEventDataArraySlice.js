import { createSlice } from '@reduxjs/toolkit'
import { bake_cookie, read_cookie } from 'sfcookies';

const cookie_key = 'arrEventCookie';
var read = read_cookie(cookie_key);
var initialState = {};



if (read.length === undefined || read.length === 0) {
   initialState = {
      valueCalendarEvents: [{ hour: 3, day: 8, Mon: 5 }, { hour: 2, day: 8, Mon: 5 }, { hour: 1, day: 8, Mon: 5 }, { hour: 4, day: 8, Mon: 5 }, { hour: 5, day: 8, Mon: 5 }, { hour: 3, day: 5, Mon: 5 }, { hour: 3, day: 6, Mon: 5 }, { hour: 3, day: 7, Mon: 5 }, { hour: 3, day: 9, Mon: 5 }, { hour: 3, day: 10, Mon: 5 }, { hour: 3, day: 11, Mon: 5 },]

   }

   bake_cookie(cookie_key, initialState.valueCalendarEvents);

} else {


   initialState = {
      valueCalendarEvents: read_cookie(cookie_key),

   }


}

export const arrayOfCalendarEventsSlice = createSlice({

   name: 'arrayOfCalendarEvents',
   initialState,
   reducers: {

      addElemCalendarEvents: (state, action) => {
         state.valueCalendarEvents.push(action.payload);

      },

      deleteElemCalendarEvents: (state, action) => {

         state.valueCalendarEvents = action.payload;
      },

   },
})


export const { addElemCalendarEvents, deleteElemCalendarEvents } = arrayOfCalendarEventsSlice.actions

export default arrayOfCalendarEventsSlice.reducer


