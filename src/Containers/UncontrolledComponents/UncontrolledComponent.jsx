import React from "react";
import Modal from "../../Components/Modal/Modal";
import UncontrolledSteps from "../UncontrolledSteps/UncontrolledSteps";

const Step1 = ({ gotoNext }) => (
  <>
    <p>Step 1</p>
    <button onClick={() => gotoNext()}>Next</button>
  </>
);
const Step2 = ({ gotoNext }) => (
  <>
    <p>Step 2</p>
    <button onClick={() => gotoNext()}>Next</button>
  </>
);
const Step3 = ({ gotoNext }) => (
  <>
    <p>Step 3</p>
    <button onClick={() => gotoNext()}>Next</button>
  </>
);

const UncontrolledComponent = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal1, setShowModal1] = React.useState(false);
  return (
    <>
      <h2>UncontrolledComponent</h2>
      <button onClick={() => setShowModal(!showModal)}>Show Modal</button>
      <Modal showModal={showModal} onClose={() => setShowModal(!showModal)}>
        Hi
      </Modal>

      <hr />

      <h2>Uncontrolled Steps</h2>
      <button onClick={() => setShowModal1(!showModal1)}>Show Modal1</button>
      <Modal showModal={showModal1} onClose={() => setShowModal1(!showModal1)}>
        <UncontrolledSteps>
          <Step1 />
          <Step2 />
          <Step3 />
        </UncontrolledSteps>
      </Modal>
    </>
  );
};

export default UncontrolledComponent;
