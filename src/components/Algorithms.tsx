import * as React from "react";

import { ProviderProps, ProviderState } from "./Context";
import { delay } from "./visualiser/helpers";

class Algorithms extends React.Component<ProviderProps, ProviderState> {
  async bubbleSort(currentArray: number[] | []) {
    console.log("called");
    const loop = async () => {
      let loop_again = false;
      for (let i = 0; i < currentArray.length; i++) {
        await delay(3);
        if (!currentArray[i + 1]) break;
        if (currentArray[i + 1] < currentArray[i]) {
          const temp = currentArray[i];
          currentArray[i] = currentArray[i + 1];
          currentArray[i + 1] = temp;
          loop_again = true;
          this.setState({ currentArray: currentArray });
        }
      }
      if (loop_again) loop();
    };

    await loop();
  }
}

export default Algorithms;
