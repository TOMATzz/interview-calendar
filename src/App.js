import React from 'react';
import CalendarContent from './components/CalendarContent';
import CalendarHeader from './components/CalendarHeader';
import CalendarFuter from './components/CalendarFuter';
import { Provider } from "react-redux";
import { store } from "./store";
import { GlobalStyle, Calendar, CalendarContainer } from "./styles/app.js"
import useWindowDimensions from "./styles/index.js";

const App = () => {

   const { height, width } = useWindowDimensions();



   return (

      <Provider store={store}>
         <Calendar width={width} height={height}>

            <GlobalStyle />

            <CalendarContainer width={width} height={height}>

               <CalendarHeader />

               <CalendarContent />


               <CalendarFuter />

            </CalendarContainer>

         </Calendar>
      </Provider>

   );
}

export default App;
