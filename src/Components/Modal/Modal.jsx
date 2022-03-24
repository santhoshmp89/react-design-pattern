import React from "react";
import styled from "styled-components";

const ModalDrop = styled.div`
  background: #00000090;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  transition: all ease 1s;
`;

const ModalBody = styled.div`
  width: 70%;
  background: #fff;
  margin: 0 auto;
  min-height: 400px;
  /* transform: transition */
  transform: translateY(50%);
`;

const Modal = ({ showModal, onClose, children }) => {
  return showModal ? (
    <ModalDrop>
      <ModalBody>
        <button onClick={onClose}>Close</button> <br />
        {children}
      </ModalBody>
    </ModalDrop>
  ) : null;
};

export default Modal;
