import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CloseButton } from "react-bootstrap";

const TicketConfirm = ({ ticket }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <table style={{ width: "35%", fontSize: "20px" }} className="table mt-5">
      <thead style={{ color: "white", textAlign: "center" }}>
        <tr>
          <th>Seats</th>
          <th>Giá</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ height: "200px" }}>
          <td style={{ color: "white", border: "1px solid white" }}>
            {(ticket.seats || []).join(", ")}
          </td>
          <td
            style={{
              textAlign: "center",
              color: "white",
              border: "1px solid white",
            }}
          >
            {(ticket.seats || []).length * 75000} VNĐ
          </td>
        </tr>
        <Button
          style={{ width: "100%", marginTop: "20px" }}
          variant="danger"
          onClick={handleShow}
        >
          Mua Vé
        </Button>

        <Link to="/">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header
              style={{
                backgroundColor: "green",
                border: "1px solid green",
                borderRadius: "10px",
              }}
              closeButton
            >
              <Modal.Title style={{ color: "white" }}>
                Đặt Vé Thành Công
              </Modal.Title>
            </Modal.Header>
          </Modal>
        </Link>
      </tbody>
    </table>
  );
};

export default TicketConfirm;
