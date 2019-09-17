import * as React from "react";

import { ProviderProps, ProviderState } from "./Context";
import { delay } from "./visualiser/helpers";

class Algorithms extends React.Component<ProviderProps, ProviderState> {
  async bubbleSort(currentArray: number[] | []) {
    const loop = async () => {
      let loop_again = false;
      for (let i = 0; i < currentArray.length; i++) {
        await delay(20);
        if (!currentArray[i + 1]) break;
        if (currentArray[i + 1] < currentArray[i]) {
          const temp = currentArray[i];
          currentArray[i] = currentArray[i + 1];
          currentArray[i + 1] = temp;
          loop_again = true;
          this.setState({ currentArray });
        }
      }
      if (loop_again) await loop();
    };

    await loop();
  }

  async mergeSort(currentArr: number[] | []): Promise<any> {
    const split = async (currentArray: number[] | []) => {
      if (currentArray.length < 2) {
        return currentArray;
      }
      const left = currentArray.slice(0, Math.floor(currentArray.length / 2));
      const right = currentArray.slice(Math.floor(currentArray.length / 2));
      await delay(150);
      const merged = merge(await split(left), await split(right));
      return merged;
    };

    const merge = (left: any, right: any) => {
      const length = left.length + right.length;
      const start = (this.state.currentArray as number[]).indexOf(left[0]);
      let newArray = [];

      while (left.length && right.length) {
        if (left[0] < right[0]) {
          newArray.push(left[0]);
          left = left.slice(1);
        } else {
          newArray.push(right[0]);
          right = right.slice(1);
        }
      }

      if (left.length) {
        newArray = newArray.concat(left);
      } else {
        newArray = newArray.concat(right);
      }

      const arrStart = this.state.currentArray.slice(0, start);
      const arrEnd = this.state.currentArray.slice(start + length);
      this.setState({ currentArray: arrStart.concat(newArray, arrEnd) });
      return newArray;
    };

    this.setState({ currentArray: await split(currentArr) });
  }
}

export default Algorithms;
