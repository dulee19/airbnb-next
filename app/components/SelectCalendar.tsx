"use client"

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css"; 

import React, { useState } from 'react'
import { DateRange } from "react-date-range";
import { eachDayOfInterval } from "date-fns";

const SelectCalendar = ({ reservation }: { reservation: {
  startDate: Date;
  endDate: Date
}[] | undefined }) => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        },
    ]);

    let disablesDates: Date[] = [];
    reservation?.forEach((reservationItem) => {
      const dateRange = eachDayOfInterval({
        start: new Date(reservationItem.startDate),
        end: new Date(reservationItem.endDate)
      });

      disablesDates = [...disablesDates, ...dateRange]
    })

  return (
    <>
    <input
        type="hidden"
        name="startDate"
        value={state[0].startDate.toISOString()}
      />
    <input
        type="hidden"
        name="endDate"
        value={state[0].endDate.toISOString()}
    />
    <DateRange 
        date={new Date()}
        showDateDisplay={false}
        rangeColors={['#FF5A5F']}
        ranges={state}
        onChange={(item) => setState([item.selection] as any)}
        minDate={new Date()}
        direction="vertical"
        disabledDates={disablesDates}
    />
    </>
  )
}

export default SelectCalendar