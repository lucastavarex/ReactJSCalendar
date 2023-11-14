import React from 'react'
import ReactDOM from 'react-dom/client'
import Calendar from './index'
import './index.css'
import GAPI from './gapi'

const apiKey = GAPI.API_KEY;
let calendars = [
  {
    calendarId: GAPI.CALENDAR_ID,
    // color: "#B241D1",
  }, //add a color field to specify the color of a calendar
  // { calendarId: "hkr1dj9k6v6pa79gvpv03eapeg@group.calendar.google.com" }, //without a specified color, it defaults to blue (#4786ff)
  // {
  //   calendarId: "rg4m0k607609r2jmdr97sjvjus@group.calendar.google.com",
  //   color: "rgb(63, 191, 63)",
  // }, //accepts hex and rgb strings (doesn't work with color names)
];

let styles = {
  //you can use object styles (no import required)
  calendar: {
    borderWidth: "1.6px", //make outer edge of calendar thicker
  },

  //you can also use emotion's string styles

};

const language = "PT";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Calendar
        apiKey={apiKey}
        calendars={calendars}
        styles={styles}
        language={language}
      />
  </React.StrictMode>,
)
