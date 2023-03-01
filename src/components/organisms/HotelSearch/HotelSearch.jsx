import React, { useState , useEffect } from "react";
import "./HotelSearch.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; //
import { DateRange } from 'react-date-range'; 
import { format } from "date-fns";
import moment from 'moment';

function HotelSearch() {
  const [opendate, setOpendate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  useEffect(() =>{
    document.addEventListener("mousedown" , () =>{
      setOpendate(false)
    })
  })
  return (
    <div>
      <div className="hotel-search-inputs">
        <div className="input-location">
          <i class="fa-solid fa-bed"></i>
          <input type="text" placeholder="Where Are you going?" />
        </div>
        <div className="input-checkin-checkout-date">
        <i class="fa-solid fa-calendar-days" onClick={()=>setOpendate(!opendate)}></i>
        <span>{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
        {opendate && 
          <DateRange
          editableDateInputs={true}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          minDate={moment().toDate()}
          className="date-range"
        />}
        </div>
        <div className="input-members">
        <i class="fa-solid fa-person"></i>
        <span>number of mumbers</span>
        </div>
        <div className="search-btn">
          <button type="search">
            <i class="fa-solid fa-search"></i>
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelSearch;
