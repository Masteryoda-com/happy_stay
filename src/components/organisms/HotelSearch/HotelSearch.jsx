import React, { useState, useEffect, useRef } from "react";
import "./HotelSearch.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; //
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import moment from "moment";

function HotelSearch() {
  const [opendate, setOpendate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  let menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOpendate(false);
      }
    });
  });

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    children: 0,
    room: 1,
  });
  const handleOption = (name , operation) =>{
    setOptions((prev) => {
      return {
        ...prev,
        [name] : operation === "i" ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  return (
    <div>
      <div className="hotel-search-inputs">
        <div className="input-location">
          <i class="fa-solid fa-bed"></i>
          <input type="text" placeholder="Where Are you going?" />
        </div>
        <div className="input-checkin-checkout-date" ref={menuRef}>
          <i
            class="fa-solid fa-calendar-days"
            onClick={() => setOpendate(!opendate)}></i>
          <span onClick={() => setOpendate(!opendate)}>{`${format(
            date[0].startDate,
            "dd/MM/yyyy"
          )} - ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
          {opendate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              minDate={moment().toDate()}
              className="date-range"
            />
          )}
        </div>
        <div className="input-members" >
          <i class="fa-solid fa-person"></i>
          <span onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult · ${options.children} children · ${options.room} room `}</span>
         { openOptions &&
         <div className="options" >
            <div className="optionItem">
              <span className="optionText">Adult</span>
              <div className="option-count">
                <button className="optionsCounterButton"
                disabled={options.adult === 2 ? true : false} 
                onClick={() => handleOption("adult" ,"d") }>-</button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button className="optionsCounterButton" onClick={() => handleOption("adult" ,"i")}>+</button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Children</span>
              <div className="option-count">
                <button className="optionsCounterButton"
                disabled={options.children === 0 ? true : false} 
                onClick={() => handleOption("children" ,"d")}>-</button>
                <span className="optionCounterNumber">{options.children}</span>
                <button className="optionsCounterButton" onClick={() => handleOption("children" ,"i")}>+</button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Room</span>
              <div className="option-count">
                <button className="optionsCounterButton" 
                disabled={options.room === 1 ? true : false}
                onClick={() => handleOption("room" ,"d")}>-</button>
                <span className="optionCounterNumber">{options.room}</span>
                <button className="optionsCounterButton" onClick={() => handleOption("room" ,"i")}>+</button>
              </div>
            </div>
            <div className="done-btn" onClick={() => setOpenOptions(false)}>
              <button type="button" >Done</button>
            </div>
          </div>}
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
