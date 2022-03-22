import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div`
  flex: 1;
`;

const SplitScreen = ({ children }) => {
  const [left, right] = children;
  return (
    <>
      <h3>Split Screen</h3>

      <Container>
        <Panel>{left}</Panel>
        <Panel>{right}</Panel>
      </Container>
    </>
  );
};

export default SplitScreen;
