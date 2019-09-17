import * as React from "react";

import Algorithms from "./Algorithms";

const Context = React.createContext({});

export interface ProviderProps {
  children: any;
}
export interface ProviderState {
  currentArray: number[] | [];
  currentAlgorithm: Algorithm;
  running: boolean;
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
  running: boolean;
  setAlgorithm: (algorithm: Algorithm) => void;
  runAlgorithm: () => void;
}

class Provider extends Algorithms {
  constructor(props: ProviderProps) {
    super(props);
    this.state = {
      currentArray: [],
      currentAlgorithm: Algorithm.Bubble,
      running: false
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
    const { running } = this.state;
    if (running) return;
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

  async runAlgorithm() {
    this.setState({ running: true });
    switch (this.state.currentAlgorithm) {
      case Algorithm.Bubble:
        await this.bubbleSort(this.state.currentArray);
        this.setState({ running: false });
        return;
      case Algorithm.Merge:
        await this.mergeSort(this.state.currentArray);
        this.setState({ running: false });
        return;
      default:
        await this.bubbleSort(this.state.currentArray);
        this.setState({ running: false });
        return;
    }
  }

  render() {
    const { children } = this.props;
    const { currentArray, currentAlgorithm, running } = this.state;

    return (
      <Context.Provider
        value={{
          currentArray,
          currentAlgorithm,
          running,
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
