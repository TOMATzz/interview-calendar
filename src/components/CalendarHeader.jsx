import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStartDate } from "../store/dateSlice"
import { setStartMonth } from "../store/monthSlice"
import { setModalEvent } from '../store/modalSlise.js'
import { setEventDeleteButtonText } from "../store/deleteEventButtonSlice"
import { NavBar, ControlPanelButton, ControlPanel, MonthYearBar, DateBar, MonthYear, ThisDay, DayBar } from "../styles/hederStyle.js"
import Modal from './Modal'


const CalendarHeader = () => {
var data = new Date();
   var currYear = data.getFullYear();
   var currDateBar = [];
   const dispatch = useDispatch();
   const currMonth = data.getMonth();
   const daysOfTheWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
   const monthsOfTtheYear = ["January ", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December "];
   const [currDate, setCurrDate] = useState(data.getDate());
   const textButtonDelete = useSelector((state) => state.eventDeleteButtonText.deleteButtonText)


   for (let i = -3; i <= 3; i++) {
      currDateBar[i + 3] = new Date(currYear, currMonth, currDate + i);
   }

   var currentMonthOfTheYear = monthsOfTtheYear[currDateBar[3].getMonth()];

   useEffect(() => {

      dispatch(setStartMonth(

         currDateBar.map((elem) => elem.getMonth() + 1)
      ));


      dispatch(setStartDate(

         currDateBar.map((elem) => elem.getDate())

      ));
      // eslint-disable-next-line
   }, [currDate]);


   return (

      <div  >


         <NavBar>

            Interview Calendar
            <ControlPanelButton onClick={() => {


               textButtonDelete.length > 1 && dispatch(setEventDeleteButtonText(""));
               dispatch(setModalEvent(1));

            }}>
               +
            </ControlPanelButton>

         </NavBar>

         <ControlPanel>

            <DayBar>
               {
                  currDateBar.map((elem) =>
                     <div key={elem}>{daysOfTheWeek[elem.getDay()]}</div>

                  )
               }
            </DayBar>


            <DateBar>

               {
                  currDateBar.map((elem) =>
                     elem.getDate() === data.getDate() && elem.getMonth() === data.getMonth()
                        ?
                        <ThisDay red key={elem} >{elem.getDate()}</ThisDay>
                        :
                        <ThisDay key={elem}>{elem.getDate()}</ThisDay>
                  )
               }

            </DateBar>

            <MonthYearBar>
               <ControlPanelButton onClick={() => {
                  setCurrDate(currDate - 1);
                  textButtonDelete.length > 1 && dispatch(setEventDeleteButtonText(""));

               }}> &lt; </ControlPanelButton>

               <MonthYear> {currentMonthOfTheYear} &nbsp; {currYear}</MonthYear>

               <ControlPanelButton onClick={() => {
                  setCurrDate(currDate + 1);
                  textButtonDelete.length > 1 && dispatch(setEventDeleteButtonText(""));
               }}> &gt; </ControlPanelButton>

            </MonthYearBar>

         </ControlPanel>


         <Modal />




      </div >


   )
}


export default CalendarHeader