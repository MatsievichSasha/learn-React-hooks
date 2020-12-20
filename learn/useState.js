import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function computeInitialCounter() {
  console.log("some Calc");
  return Math.trunc(Math.random() * 20);
}

function App() {
  /*  const [counter, setCounter] = useState(0); */ //  можно вызывать сколько угодно раз
  //const [counter, setCounter] = useState(computeInitialCounter()); приэтом способе функиция калс будет вызываться каждый раз при баттон
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  const [state, setState] = useState({
    title: "Count",
    date: Date.now(),
  });

  /*  const counterState = useState(0); ///#1

  console.log(counterState[0]); // состояние
  console.log(counterState[1]); // функция меняющее состояние */

  /*   if(true){
    const counterState = useState(0) //внитури условия нельзя
  } */

  function increment() {
    /* setCounter(counter + 1) */
    //если нужно функцию выполнить два раза то в setCounter ложим коллбэк принимающее предыдущее состояние 
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function updateTitle() {
    setState((prev) => {
      return {
        ...prev,
        title: "New",
      };
    });
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        Добавить
      </button>
      <button onClick={decrement} className="btn btn-success">
        Убрать
      </button>
      <button onClick={updateTitle} className="">
        Object
      </button>
      <pre>{JSON.stringify(state)}</pre>
    </div>
  );
}

export default App;
