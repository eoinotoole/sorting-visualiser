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
  }

  async bubbleSort() {
    const { currentArray } = this.state;
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
