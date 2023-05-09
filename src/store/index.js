import { configureStore } from '@reduxjs/toolkit'
import startDateReducer from "./dateSlice"
import startMonthReducer from "./monthSlice"
import arrayOfCalendarEventsReducer from "./calendarEventDataArraySlice"
import clickEventReducer from "./calendarEventSlise"
import eventDeleteButtonTextReducer from "./deleteEventButtonSlice"
import modalEventReducer from './modalSlise'
export const store = configureStore({
   reducer: {
      startDate: startDateReducer,
      startMonth: startMonthReducer,
      arrayOfCalendarEvents: arrayOfCalendarEventsReducer,
      clickEvent: clickEventReducer,
      eventDeleteButtonText: eventDeleteButtonTextReducer,
      modalEvent: modalEventReducer,
   },
})