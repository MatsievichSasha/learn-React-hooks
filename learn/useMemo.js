import React, { useState, useMemo, useEffect } from "react";
//есть проблема что есть функция которая задерживает обновление числа, 
//но даже если мы будем выполнять другую команду которая меняет цвет все равно 
//будет происходить задержка так как при обновлении стейта задерживающая функция выполнится
// для оптимизации используется useMemo


function complexCompute(num) { //функция которая будет тормозить наше приложение
  console.log('complexCompute')
  let i = 0
  while (i < 1000000000) {
    i++
  }
  return num * 2
}

function App() {
  const [number, setNumber] = useState(37)
  const [colored, setColored] = useState(false)

/*   const styles = {
    color: colored ? 'darkred' : 'black' //изменение цвета Н1
  } */

  const styles = useMemo(()=>{
    return {color: colored ? 'darkred' : 'black' }
  }, [colored])

  /* const computed = complexCompute(number)  *///используем функцию которая будет очень долго вычисляься

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number])

  //оборачиваем наш код в useMemo мы предаем колбэк которы долже вернуть вычисления 
  //и дальше нужно указать от чего зависят вычисления в нашем случае от number
  // Т.е мы закешировали нашу функцию complexCompute

  //второй способ использовать useMemo: допустим мы хотим следить за объектом (любым объектом)
  //styles в useEffect и по какой то причине он будет говрить что при добавить и убрать
  //styles тоже менется???? почему??? Идет лишний вызов useEffect. Дело в JS объекты 
  //хранят в ссылочной системе и когда происходит изменения стейта мы вызываем рендер
  //и создается новый объект styles а useEffect следит за старым и видит что он изменился(это уже другой объект)
  //поэтому удобно использовать тут тоже useMemo
  
//не стоит все кешировать и использовать только когда это ударяет по производительности

  useEffect(()=>{
    console.log('Styles changed') 
  }, [styles])

  function increment() {
    setNumber((prev) => prev + 1)
  }

  function decrement() {
    setNumber(number - 1)
  }

  return (
    <div>
      <h1 style={styles}>Вычисленное свойство: {computed}</h1>
      <button onClick={increment} className="btn btn-success">
        Добавить
      </button>
      <button onClick={decrement} className="btn btn-success">
        Убрать
      </button>
      <button onClick={() => { setColored(prev => !prev) }} className="btn btn-success">
        Изменить
      </button>
    </div>
  );
}

export default App;
