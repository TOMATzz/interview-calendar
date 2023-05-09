import React from 'react';
import CalendarContent from './components/CalendarContent';
import CalendarHeader from './components/CalendarHeader';
import CalendarFuter from './components/CalendarFuter';
import { Provider } from "react-redux";
import { store } from "./store";
import { GlobalStyle, Calendar, CalendarContainer } from "./styles/app.js"


const App = () => {

   return (

      <Provider store={store}>
         <Calendar>

            <GlobalStyle />

            <CalendarContainer>

               <CalendarHeader />

               <CalendarContent />


               <CalendarFuter />

            </CalendarContainer>

         </Calendar>
      </Provider>

   );
}

export default App;
