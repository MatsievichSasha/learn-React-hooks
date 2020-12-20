import React, { useState, useEffect, useRef } from "react";


let renderCountOut = 1 // реализация задачи с помощью useEffect не очень хороша так как переменная вне App

function App() {
  // Допустим есть задача посчитать сколько раз мы рендерили наш компонет это можно сделать без useRef

  //const [renderCount, setRenderCount] = useState(1)

  // мы знаем что useEffect без второго параметра вызвывается каждый раз когда происходит рендер

  /*   useEffect(() => {
      setRenderCount(prev => prev + 1) // мы попадаем сюда и говорим что компонент нужно перендерить и так бесконечно
    }) */

  const [value, setValue] = useState('initial')
  const renderCountRef = useRef(1) // работает как useState но возращает только одно значение, и вернет объект со свойством current

  const inputRef = useRef(null) 
  // useRef он сохраняет сстония при работе с компонентом при рендерах но при этом не вызыввает сам рендер
  //1. с помощью useRef удобно посмотреть на дом элемент с помощью специального атрибута ref в реакте
  //2. ref часто используются для того что бы задавать фокусы на элементы
  //3. с помощью useRef можно получить знчение предыдущего стейта:

  const prevValue = useRef('')

  useEffect(() => {
    renderCountOut++
  })

  useEffect(() => {
    renderCountRef.current++
    console.log(inputRef.current.value) //в current находится дом обычный элемент
  })

  useEffect(()=>{
    prevValue.current = value
  }, [value]) // беру useEffect и говорю что как тольк у меня меняется значение value
              // мы хотим изменить предыдущее состояние prevValue

    const focus = ()=>{
      inputRef.current.focus() //вызывам стандартный метод focus()
    }
  return (
    <div>
      {/*   <h1>Количество раз рендеринга: {renderCount} </h1> */} {/* таким сопособом мы войдем в бесконечный loop */}
      <h1>Количество раз рендеринга: {renderCountOut} </h1>  {/* таким сопособом мы войдем в бесконечный loop */}
      <h1>Количество раз рендеринга: {renderCountRef.current} </h1>  {/* таким сопособом мы войдем в бесконечный loop */}
      <h2>Прошлое состояние:{prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.currentTarget.value)} value={value}></input> {/* value это значение input */}
      <button className="btn btn-success" onClick={focus}>Focus</button> {/* при клике на нее будем вызывать фокус на элемент input с помощью метода focus*/}
    </div>
  );
}

export default App;
