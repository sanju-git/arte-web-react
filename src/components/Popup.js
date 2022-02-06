import React from "react";
import { Modal } from "react-bootstrap";

function Popup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="d-flex">
          <div style={{ marginRight: 10 }}>
            <img
              src={"/assets/images/gallery/" + props.img}
              alt="Avatar"
              className="image"
              style={{ height: 300, width: 300 }}
              id="myImg"
            />
          </div>
          <div style={{ padding: 20, borderLeft: "1px solid lightgrey" }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Popup;
