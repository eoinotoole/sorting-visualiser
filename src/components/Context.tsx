import * as React from "react";

import Algorithms from "./Algorithms";

const Context = React.createContext({});

export interface ProviderProps {
  children: any;
}
export interface ProviderState {
  currentArray: number[] | [];
  currentAlgorithm: Algorithm;
}
export enum Algorithm {
  Bubble = "BUBBLE",
  Merge = "MERGE",
  Quick = "QUICK",
  Heap = "HEAP"
}
export interface ContextStore {
  currentArray: number[] | [];
  currentAlgorithm: Algorithm;
  setAlgorithm: (algorithm: Algorithm) => void;
  runAlgorithm: () => void;
}

class Provider extends Algorithms {
  constructor(props: ProviderProps) {
    super(props);
    this.state = {
      currentArray: [],
      currentAlgorithm: Algorithm.Bubble
    };
    this.generateArray = this.generateArray.bind(this);
    this.setAlgorithm = this.setAlgorithm.bind(this);
    this.runAlgorithm = this.runAlgorithm.bind(this);
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

  setAlgorithm(algorithm: Algorithm) {
    this.generateArray();

    switch (algorithm) {
      case Algorithm.Bubble:
        this.setState({ currentAlgorithm: Algorithm.Bubble });
        return;
      case Algorithm.Merge:
        this.setState({ currentAlgorithm: Algorithm.Merge });
        return;
      case Algorithm.Quick:
        this.setState({ currentAlgorithm: Algorithm.Quick });
        return;
      case Algorithm.Heap:
        this.setState({ currentAlgorithm: Algorithm.Heap });
        return;
      default:
        this.setState({ currentAlgorithm: Algorithm.Bubble });
        return;
    }
  }

  runAlgorithm() {
    switch (this.state.currentAlgorithm) {
      case Algorithm.Bubble:
        this.bubbleSort(this.state.currentArray);
        return;
      case Algorithm.Merge:
        this.mergeSort(this.state.currentArray);
        return;
      default:
        this.bubbleSort(this.state.currentArray);
        return;
    }
  }

  render() {
    const { children } = this.props;
    const { currentArray, currentAlgorithm } = this.state;

    return (
      <Context.Provider
        value={{
          currentArray,
          currentAlgorithm,
          setAlgorithm: this.setAlgorithm,
          runAlgorithm: this.runAlgorithm
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}

export { Context, Provider };
