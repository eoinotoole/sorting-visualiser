import * as React from "react";
import styled from "styled-components";

import ControlPanel from "./ControlPanel";
import Body from "./body/Body";

class Visualiser extends React.Component {
  render() {
    return (
      <Container>
        <ControlPanel />
        <Body />
      </Container>
    );
  }
}

export default Visualiser;

const Container = styled.div`
  display: flex;
  height: 100vh;
`;
