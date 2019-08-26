import * as React from "react";
import styled from "styled-components";

import { themeVariable } from "../style/helpers";

class ControlPanel extends React.Component {
  render() {
    return (
      <Panel>
        <p>hi</p>
      </Panel>
    );
  }
}

export default ControlPanel;

const Panel = styled.aside`
  width: 16rem;
  flex-shrink: 0;
  background: ${themeVariable("colours", "indigo")};
`;
