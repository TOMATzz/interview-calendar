import React from 'react'
// import { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import { bake_cookie } from 'sfcookies';
import { useDispatch } from 'react-redux'
import { setCalendarEventId, setOnClickEvent } from "../store/calendarEventSlise"
import { GridContainer, Row, Cell, CellActive, GridTimeline, Grid } from "../styles/contentStyle.js"

const CalendarContent = () => {
   var numberOfCells = 7;
   var dataTime = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];


   const dispatch = useDispatch();
   // const cookie_key = 'arrEventCookie';

   const startDate = useSelector((state) => state.startDate.valueDate);
   const startMonth = useSelector((state) => state.startMonth.valueMonth);
   const arrayCalendarEvents = useSelector((state) => state.arrayOfCalendarEvents.valueCalendarEvents);

   // useEffect(() => {

   //    bake_cookie(cookie_key, arrayCalendarEvents);

   // }, [arrayCalendarEvents]);



   const handleClick = event => {

      dispatch(setOnClickEvent(true));
      dispatch(setCalendarEventId(event.currentTarget.id));

   }


   function renderGrid(elem) {


      let eventGrid = false;
      let arrCell = [];

      for (let i = 0; i < numberOfCells; i++) {


         for (let j = 0; j < arrayCalendarEvents.length; j++) {



            if (arrayCalendarEvents[j] !== undefined &&
               i < arrayCalendarEvents.length &&
               (arrayCalendarEvents[j].hour === +elem.match(/\d+/)[0]) && (startDate[i] === arrayCalendarEvents[j].day) &&
               (startMonth[i] === arrayCalendarEvents[j].Mon)) {
               eventGrid = true;


               break;

            } else {

               eventGrid = false;
            }

         }


         if (eventGrid === true) {



            arrCell.push(

               <Cell key={i} value={elem}>

                  <CellActive id={`{ "hour":${+elem.match(/\d+/)[0]},"day":${startDate[i]},"Mon":${startMonth[i]}}`} onClick={handleClick} />

               </Cell>
            )
         } else {


            arrCell.push(
               <Cell key={i} value={elem} onClick={() => dispatch(setOnClickEvent(false))}  >



               </Cell>
            )
         }

      }

      return arrCell;
   }

   return (

      <GridContainer>

         <GridTimeline  >
            {
               dataTime.map(elem => {
                  return <div key={elem}> {elem} </div>
               })
            }

         </GridTimeline>

         <Grid >

            {
               dataTime.map(elem => {

                  return (

                     elem !== dataTime[dataTime.length - 1] ?
                        <Row key={elem}  >
                           {
                              renderGrid(elem).map(elem => {
                                 return elem
                              })
                           }

                        </Row>
                        : null
                  )
               })
            }
         </Grid>


      </GridContainer >


   )

}

export default CalendarContent