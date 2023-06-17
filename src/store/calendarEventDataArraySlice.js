import { createSlice } from '@reduxjs/toolkit'
// import { bake_cookie, read_cookie } from 'sfcookies';

// const cookie_key = 'arrEventCookie';
// var read = read_cookie(cookie_key);
// var initialState = {};
var data = new Date();
var toDayDate = data.getDate();
var currentMonth = data.getMonth() + 1;


// if (read.length === undefined || read.length === 0) {
var initialState = {
   valueCalendarEvents: [{ hour: 3, day: toDayDate, Mon: currentMonth }, { hour: 2, day: toDayDate, Mon: currentMonth }, { hour: 1, day: toDayDate, Mon: currentMonth }, { hour: 4, day: toDayDate, Mon: currentMonth }, { hour: 5, day: toDayDate, Mon: currentMonth }, { hour: 3, day: toDayDate - 3, Mon: currentMonth }, { hour: 3, day: toDayDate - 2, Mon: currentMonth }, { hour: 3, day: toDayDate - 1, Mon: currentMonth }, { hour: 3, day: toDayDate + 1, Mon: currentMonth }, { hour: 3, day: toDayDate + 2, Mon: currentMonth }, { hour: 3, day: toDayDate + 3, Mon: currentMonth },]

}

// bake_cookie(cookie_key, initialState.valueCalendarEvents);

// } else {


//    initialState = {
//       valueCalendarEvents: read_cookie(cookie_key),

//    }


// }

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


