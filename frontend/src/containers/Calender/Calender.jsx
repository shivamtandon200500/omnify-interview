import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import "./Calender.css"
import Layout from '../../components/Layout/Layout';

const Calender = () => {

  const [dates, setDates] = useState([]);
  const [value, setValue] = useState(new Date());
  const event = useSelector((state) => state.event);
  //   console.log()
  useEffect(() => {
    const renderDates = () => {
      let newArr = [];
      { event.resultDay.map((x) => newArr.push(x)) }
      setDates(newArr);
    }
    renderDates();

  }, [event.resultDay])

  return (
    <>
      <Layout/>
      <div className='Calender'>
        <Calendar
          // activeStartDate={new Date(dates[0].split("-")[2],dates[0].split("-")[1]-1,1)}
          onChange={setValue}
          value={value}
          tileClassName={({ date, view }) => {
            if (dates.find(x => x === moment(date).format("DD-MM-YYYY"))) {
              console.log("dw");
              return 'highlight'
            }
          }}
        // tileDisabled={({ date }) => date.getDay() === 0}
        />
      <h3>Dates for next 90 days are:-</h3>
      <div className='DateList'>
        {dates.length > 0 ? dates.map(x => (
          <span>{x}</span>
        )) : ""}
        </div>
        

      </div>
    </>
  )
}

export default Calender