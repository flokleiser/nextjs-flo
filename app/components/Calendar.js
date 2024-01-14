// 'use client'

import styles from "app/page.module.css";
import React, { useState } from "react";

// import { Calendar, 
//     momentLocalizer 
// } from "react-big-calendar";
// import moment from "moment"; 
// import events from "/app/projects/tests/dates/events";
// import "react-big-calendar/lib/css/react-big-calendar.css";


import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";


// moment.locale("en-GB");
// const localizer = momentLocalizer(moment)


export default function MyCalendar() {

    // const [eventsData, setEventsData] = useState(events);

    // const handleSelect = ({ start, end }) => {
    //     console.log(start);
    //     console.log(end);
    //     const title = window.prompt("New Event name");
    //     if (title)
    //       setEventsData([
    //         ...eventsData,
    //         {
    //           start,
    //           end,
    //           title
    //         }
    //       ]);
    //   };
    //   return (
    //     <div className="App">
    //       <Calendar
    //         views={["day", "agenda", "work_week", "month"]}
    //         selectable
    //         localizer={localizer}
    //         defaultDate={new Date()}
    //         defaultView="week"
    //         // events={events}
    //         startAccessor="start"
    //         endAccessor="end"
    //         events={eventsData}
    //         style={{ height: "70vh", width:"80vw" }}
    //         onSelectEvent={(event) => alert(event.title)}
    //         onSelectSlot={handleSelect}
    //       />
    //     </div>
    //   );

    // const handleDateClick = (arg) => {
    //     alert(arg.dateStr);
    // }

    return (
        <div className="App">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={false}
            // dateClick={(e) => handleDateClick(e)}
            events={[
              { title: "event 1", date: "2024-01-14" },
              { title: "event 2", date: "2024-01-17" },
            ]}
            // eventContent={renderEventContent}
          />
        </div>
      );
}

// function renderEventContent(eventInfo) {
//     return (
//       <>
//         <b>{eventInfo.timeText}</b>
//         <i>{eventInfo.event.title}</i>
//       </>
//     );
//   }
