import styles from "app/page.module.css";
import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";



export default function MyCalendar() {

    return (
        <div className="App" style={{width:'75vw'}}>
          <FullCalendar
            height={'75vh'}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            // dateClick={(e) => handleDateClick(e)}
            events={[
              {title: "Portfolio Beratung", date: "2024-01-18" },
              {title: "Hausaufgabe Start ZHdK", date: "2024-01-25" },
              {title : "Hausaufgabe + Portfolio ZHdK", date:"2024-02-13"},
              {title : "Aufnahmeprüfung ZHdK", date:"2024-03-19"},
              {title : "Hausaufgabe Start HSLU", date:"2024-02-23"},
              {title : "Hausaufgabe + Portfolio HSLU", date:"2024-03-'04"},
              {title : "Hausaufgabe + Portfolio HSLU", date:"2024-03-'05"},
              {title : "Hausaufgabe + Portfolio HSLU", date:"2024-03-'06"},
              {title : "Hausaufgabe + Portfolio HSLU", date:"2024-03-'07"},
              {title : "Hausaufgabe + Portfolio HSLU", date:"2024-03-'08"},
              {title : "Assessment-Tag HSLU" ,date:"2024-04-02"},
              {title : "Aufnahmeentscheid HSLU", date:"2024-04-18"}
            ]}
            // eventContent={renderEventContent}
          />
        </div>
      );
}