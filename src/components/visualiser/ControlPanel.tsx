import * as React from "react";
import styled from "styled-components";

import { themeVariable } from "../style/helpers";

class ControlPanel extends React.Component {
  render() {
    return (
      <Panel>
        <Top>
          <Logomark>
            <span>AV</span>
          </Logomark>
        </Top>
        <Algorithms>
          <h4>Algorithms</h4>
          <List>
            <Item active={true}>Bubble Sort</Item>
            <Item active={false}>Merge Sort</Item>
            <Item active={false}>Quick Sort</Item>
            <Item active={false}>Heap Sort</Item>
          </List>
        </Algorithms>
      </Panel>
    );
  }
}

export default ControlPanel;

interface ItemProps {
  active: boolean;
}

const Panel = styled.aside`
  width: 16rem;
  flex-shrink: 0;
  background: ${themeVariable("colours", "indigo")};
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  padding: var(--space-lg) var(--space-md);
  margin-bottom: var(--space-lg);
`;
const Logomark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${themeVariable("colours", "magenta")};
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 6rem;
  span {
    font-size: calc(var(--text-md) * 1.15);
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
  }
`;
const Algorithms = styled.div`
  padding: 0 0 0 var(--space-md);
  h4 {
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    padding: 0 var(--space-md) 0 0;
    margin-bottom: var(--space-md);
  }
`;
const List = styled.ul`
  list-style: none;
`;
const Item = styled.li<ItemProps>`
  color: ${props =>
    props.active ? themeVariable("colours", "magenta") : "#fff"};
  padding: var(--space-xs) calc(var(--space-lg) * 1.4) var(--space-xs)
    var(--space-md);
  background: ${props =>
    props.active ? themeVariable("colours", "dark_indigo") : "inherit"};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  cursor: pointer;
`;
