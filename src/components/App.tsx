import * as React from "react";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";

import { Provider } from "./Context";
import { GlobalStyles, Theme } from "./style/theme";
import Visualiser from "./visualiser/Visualiser";

interface Props {}

class App extends React.Component<Props> {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Provider>
          <Normalize />
          <GlobalStyles />
          <Visualiser />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
