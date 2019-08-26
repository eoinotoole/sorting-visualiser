import * as React from "react";
import styled from "styled-components";

import { themeVariable } from "../../style/helpers";
import Button from "../../Button";

const Header: React.FunctionComponent = () => (
  <Heady>
    <WordMark>Algorithm Visualiser</WordMark>
    <Container>
      <Algorithm>
        <span>Bubble Sort</span>
      </Algorithm>
      <Buttons>
        <Button text="Sort" colour="magenta" />
      </Buttons>
    </Container>
  </Heady>
);

export default Header;

const Heady = styled.header`
  display: flex;
  border-bottom: 1px solid ${themeVariable("colours", "light_grey")};
`;
const WordMark = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  font-weight: bold;
  text-transform: uppercase;
  padding: var(--space-lg);
  border-right: 1px solid ${themeVariable("colours", "light_grey")};
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  flex-grow: 1;
`;
const Algorithm = styled.div`
  padding: 0 var(--space-lg);
  span {
    font-size: var(--text-md);
  }
`;
const Buttons = styled.div``;
