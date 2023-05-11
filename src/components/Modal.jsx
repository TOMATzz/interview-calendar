import React, { useState } from 'react'
import { ModalCard, ModalContainer, ModalText, ModalInput, ModalButton, ModalContainerButton } from "../styles/modal.js"
import { useDispatch, useSelector } from 'react-redux'
import { addElemCalendarEvents } from '../store/calendarEventDataArraySlice.js'
import { setModalEvent } from '../store/modalSlise.js'
const Modal = () => {

   var addCalendarEvents = {};
   var eventPresenceFlag;
   const dispatch = useDispatch();
   const [modalTextDate, setModalTextDate] = useState("MM-DD-HH");
   const [value, setValue] = useState("");
   const modalScale = useSelector((state) => state.modalEvent.value);
   const arrayCalendarEvents = useSelector((state) => state.arrayOfCalendarEvents.valueCalendarEvents);

   if (value.length === 0 && modalTextDate.length > 8) {
      setModalTextDate("MM-DD-HH");
   };

   addCalendarEvents = {

      hour: +value.substr(6, 2),
      day: +value.substr(3, 2),
      Mon: + value.substr(0, 2)
   };

   return (


      <ModalCard scale={modalScale} >

         <ModalContainer>

            <ModalText >Enter event time: </ModalText>
            {
               modalTextDate.length > 8
                  ?
                  <ModalText red  >{modalTextDate}</ModalText>
                  :
                  <ModalText  >{modalTextDate}</ModalText>
            }

            <ModalInput value={value.trim()} onChange={e => setValue(e.target.value)} />


            <ModalContainerButton >

               <ModalButton onClick={() => {
                  dispatch(setModalEvent(0));
                  setValue('')
               }
               }>Cancel</ModalButton>

               <ModalButton left
                  onClick={() => {

                     if (value.length === 8 && (
                        isNaN(addCalendarEvents.day) === false &&
                        isNaN(addCalendarEvents.hour) === false &&
                        isNaN(addCalendarEvents.Mon) === false

                     )) {

                        arrayCalendarEvents.forEach(elem => {

                           if (elem.hour === addCalendarEvents.hour && elem.day === addCalendarEvents.day && elem.Mon === addCalendarEvents.Mon) {

                              eventPresenceFlag = true;
                              setModalTextDate('Event already exists!');

                           } else {
                              eventPresenceFlag = false;
                           }

                        })


                        if (eventPresenceFlag === false) {

                           dispatch(
                              addElemCalendarEvents(addCalendarEvents)
                           );
                           dispatch(setModalEvent(0));
                           setValue('');
                        }
                     } else {

                        setModalTextDate('Incorrect data entered!');

                        dispatch(setModalEvent(1));
                     }

                  }}>OK
               </ModalButton>

            </ModalContainerButton>

         </ModalContainer>
      </ModalCard >






   )
}

export default Modal