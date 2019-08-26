import * as React from "react";
import styled from "styled-components";

import { Context } from "../../Context";

class VisualPen extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {(context: any) => {
          if (!context.currentArray.length) return null;
          return (
            <Pen>
              <Data>
                {(context.currentArray as []).map((item: number, i: number) => (
                  <Col key={i} height={`${item}%`} />
                ))}
              </Data>
            </Pen>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default VisualPen;

interface ColProps {
  height: string;
}

const Pen = styled.div``;
const Data = styled.div`
  display: flex;
  height: 40rem;
`;
const Col = styled.div<ColProps>`
  flex-grow: 1;
  height: ${props => props.height};
  margin: 0 0.15%;
  background: #eee;
`;
