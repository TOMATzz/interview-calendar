import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteElemCalendarEvents } from "../store/calendarEventDataArraySlice"
import { Futer, FuterText, FuterButton } from "../styles/futerStyle.js"
import { setEventDeleteButtonText } from "../store/deleteEventButtonSlice"


const CalendarFuter = () => {

   var data = new Date();
   var newArrayCalendarEvent = [];
   var textModal = "Today"

   const dispatch = useDispatch();
   const onClickEvent = useSelector((state) => state.clickEvent.onClick)
   const calendarEventId = useSelector((state) => state.clickEvent.calendarEventId)
   const arrayCalendarEvents = useSelector((state) => state.arrayOfCalendarEvents.valueCalendarEvents)
   const startDate = useSelector((state) => state.startDate.valueDate)
   const textButtonDelete = useSelector((state) => state.eventDeleteButtonText.deleteButtonText)



   useEffect(() => { dispatch(setEventDeleteButtonText("Delete")) },
      // eslint-disable-next-line
      [calendarEventId])

   return (
      <Futer>

         {
            startDate[3] === data.getDate()
               ?
               <FuterText >{textModal}</FuterText>
               :
               <FuterText ></FuterText>
         }

         {
            onClickEvent
               ?
               <FuterButton onClick={() => {

                  arrayCalendarEvents.forEach((elem) => {


                     if (elem.hour !== JSON.parse(calendarEventId).hour ||
                        elem.day !== JSON.parse(calendarEventId).day ||
                        elem.Mon !== JSON.parse(calendarEventId).Mon) {

                        newArrayCalendarEvent.push(elem)

                     }

                  })

                  dispatch(deleteElemCalendarEvents(newArrayCalendarEvent));
                  dispatch(setEventDeleteButtonText(""));
               }

               }>{textButtonDelete}</FuterButton>

               :
               <></>
         }
      </Futer >
   )
}

export default CalendarFuter

