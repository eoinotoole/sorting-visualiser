import * as React from "react";

import { delay } from "./visualiser/helpers";

const Context = React.createContext({});

interface ProviderProps {
  children: any;
}
export interface ProviderState {
  currentArray: number[] | [];
}

class Provider extends React.Component<ProviderProps, ProviderState> {
  constructor(props: ProviderProps) {
    super(props);
    this.state = {
      currentArray: []
    };
    this.generateArray = this.generateArray.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);
  }

  componentDidMount() {
    this.generateArray();
  }

  generateArray() {
    const arr = [];
    for (let i = 1; i <= 60; i++) arr.push(i);
    for (let i = 0; i < 60; i++) {
      let temp: number = arr[i];
      const random = Math.floor(Math.random() * 60);
      arr[i] = arr[random];
      arr[random] = temp;
    }
    this.setState({ currentArray: arr });
    setTimeout(() => {
      this.bubbleSort(this.state.currentArray);
    }, 2000);
  }

  async bubbleSort(list: number[]) {
    const loop = async () => {
      let loop_again = false;
      for (let i = 0; i < list.length; i++) {
        console.log("loop");

        await delay(3);
        if (!list[i + 1]) break;
        if (list[i + 1] < list[i]) {
          const temp = list[i];
          list[i] = list[i + 1];
          list[i + 1] = temp;
          loop_again = true;
          this.setState({ currentArray: list });
        }
      }
      if (loop_again) {
        loop();
      } else {
        console.log("done");
      }
    };

    await loop();
  }

  render() {
    const { children } = this.props;
    const { currentArray } = this.state;

    return (
      <Context.Provider
        value={{
          currentArray,
          bubbleSort: this.bubbleSort
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}

export { Context, Provider };
