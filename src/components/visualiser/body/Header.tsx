import * as React from "react";
import styled from "styled-components";

import { Context, Algorithm, ContextStore } from "../../Context";
import { themeVariable } from "../../style/helpers";
import Button from "../../Button";

const generateAlgrorithmText = (algorithm: Algorithm) => {
  switch (algorithm) {
    case Algorithm.Bubble:
      return "Bubble Sort";
    case Algorithm.Merge:
      return "Merge Sort";
    default:
      return "Bubble Sort";
  }
};

const Header: React.FunctionComponent = () => (
  <Context.Consumer>
    {(context: ContextStore) => (
      <Heady>
        <WordMark>Algorithm Visualiser</WordMark>
        <Container>
          <AlgorithmTitle>
            <span>{generateAlgrorithmText(context.currentAlgorithm)}</span>
          </AlgorithmTitle>
          <Buttons>
            <Button
              text="Sort"
              colour="magenta"
              onClick={context.runAlgorithm}
            />
          </Buttons>
        </Container>
      </Heady>
    )}
  </Context.Consumer>
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
const AlgorithmTitle = styled.div`
  padding: 0 var(--space-lg);
  span {
    font-size: var(--text-md);
  }
`;
const Buttons = styled.div``;
