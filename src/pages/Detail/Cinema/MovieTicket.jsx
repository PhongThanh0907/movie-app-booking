import React, { useState } from "react";
import SeatList from "./SeatList";
import TicketConfirm from "./TicketConfirm";

const MovieTicket = () => {
  const [ticketInfo, setTicketInfo] = useState({});
  const handleConfirmSelection = (seats, gia) => {
    setTicketInfo((state) => ({ ...state, seats, gia }));
  };

  return (
    <div className="movie-ticket">
      <div style={{ display: "flex" }} className="container">
        <div className="row">
          <div style={{width: "70%"}} className="col-sm-8 mx-auto">
            <div className="cinema__screen">
              <hr style={{ height: "8px", backgroundColor: "white" }} />
              <h3 style={{ textAlign: "center", color: "white" }}>SCREEN</h3>
            </div>
            <SeatList
              numberOfSeat={ticketInfo.numberOfSeat}
              onConfirmSelection={handleConfirmSelection}
            />
          </div>
        </div>
        <TicketConfirm tyle={{width: "30%"}} ticket={ticketInfo} price={ticketInfo.gia} />
      </div>
    </div>
  );
};

export default MovieTicket;
