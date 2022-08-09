import React, { useState } from "react";
import data from "./data.json";
import SeatItem from "./SeatItem";
import { MdChair } from "react-icons/md";

const SeatList = ({ numberOfSeat, onConfirmSelection }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const handleSelect = (seat, isSelected) => {
    if (isSelected) {
      setSelectedSeats((state) => [...state, seat.soGhe]);
    } else {
      setSelectedSeats((state) => state.filter((item) => item !== seat.soGhe));
    }
  };

  return (
    <div className="mt-5">
      {data.map((row) => {
        return (
          <div key={row.hang} className="row">
            {row.danhSachGhe.map((seat) => {
              return (
                <div key={seat.soGhe} className="col-sm-1">
                  <SeatItem seat={seat} onSelect={handleSelect} />
                </div>
              );
            })}
          </div>
        );
      })}

      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <span style={{ color: "white", fontSize: "20px", padding: "10px" }}>
          Còn Trống:{" "}
        </span>
        <span>
          <MdChair
            style={{
              padding: "20px",
              border: "2px solid white",
              backgroundColor: "#6c757d",
              color: "white",
            }}
          />
        </span>
        <span style={{ color: "white", fontSize: "20px", padding: "10px" }}>
          Đã đặt:
        </span>
        <span>
          <MdChair
            style={{
              padding: "20px",
              border: "2px solid white",
              backgroundColor: "#932630",
              color: "red",
            }}
          />
        </span>
      </div>

      <button
        style={{ width: "100%", fontSize: "20px" }}
        className="btn btn-success"
        onClick={() => onConfirmSelection(selectedSeats)}
      >
        Chấp Nhận
      </button>
    </div>
  );
};

export default SeatList;
