import React, { useState } from "react";
import { MdChair } from "react-icons/md";
import cn from "classnames";

const SeatItem = ({ seat, isDisabled, onSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    if (!isSelected && isDisabled) {
      return;
    }

    setIsSelected(!isSelected);
    onSelect(seat, !isSelected);
  };

  const classes = cn("btn btn-secondary", {
    "btn-danger": seat.daDat,
    "btn-success": isSelected,
  });

  return (
    <button
      style={{
        color: "white",
        border: "2px solid white",
        marginBottom: "10px",
        fontSize: "15px",
      }}
      className={classes}
      disabled={seat.daDat}
      onClick={handleSelect}
    >
      <MdChair style={{ fontSize: "20px" }} />
      {seat.soGhe}
    </button>
  );
};

export default SeatItem;
