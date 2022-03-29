import React from "react";

const UncontrolledSteps = ({ children }) => {
  const [step, setStep] = React.useState(0);
  const currentStepCom = React.Children.toArray(children)[step];

  const gotoNext = () => setStep(step + 1);

  if (React.isValidElement(currentStepCom)) {
    return React.cloneElement(currentStepCom, { gotoNext });
  }
  return currentStepCom;
};

export default UncontrolledSteps;
