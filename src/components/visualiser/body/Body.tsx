import * as React from "react";
import styled from "styled-components";

import { themeVariable } from "../../style/helpers";
import Header from "./Header";
import VisualPen from "./VisualPen";

class Body extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <VisualPen />
      </Container>
    );
  }
}

export default Body;

const Container = styled.div`
  width: 100%;
  padding: 0 var(--space-lg);
  background: ${themeVariable("colours", "background")};
`;
