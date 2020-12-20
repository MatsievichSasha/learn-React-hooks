import React, { useState } from "react";


function App() {

  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  //Предположим что у нас есть некоторая ф-я которая позволяет на основе count
  //генеринровать количество элементов которые мы хотим вывести в другой компонент

const generateItemsFromAPI = ()=>{

  //мы генериуем нужное кол-во нам элементов мы сгенируем новый массив нужной длины count
  //нам нужно проиницилизировать элементы для этого с помощью fill заполняем
  //чем то (пустыми строчками) и с помощью map трансформируем этот масси в новый массив
  //.map(i=> `Элемент ${i+1}`) но в map индекс идет вторым параметром поэтому 
  // поэтом ставим _ (это пустая строка) на месте первого параметра .map(_, i=> `Элемент ${i+1}`)
  
  return new Array(count).fill('').map(_, i=> `Элемент ${i+1}`)
}
//теперь я хочу эту функция передать как референс для другого компонента
//создадим компонет ItemsList.js

  return (
    <div>
      <h1 style={styles}>Количество элементов: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)} className="btn btn-success">
        Добавить
      </button>
      <button onClick={() => setColored(prev => !prev)} className="btn btn-success">
        Убрать
      </button>

    </div>
  );
}

export default App;
