import React from "react";
import Modal from "../../Components/Modal/Modal";

const UncontrolledComponent = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <h2>UncontrolledComponent</h2>
      <button onClick={() => setShowModal(!showModal)}>Show Modal</button>
      <Modal showModal={showModal} onClose={() => setShowModal(!showModal)}>
        Hi
      </Modal>
    </>
  );
};

export default UncontrolledComponent;
