import React, { useState, useCallback } from "react";
import ItemsList from "./ItemsList";


function App() {

  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  //Предположим что у нас есть некоторая ф-я которая позволяет на основе count
  //генеринровать количество элементов которые мы хотим вывести в другой компонент


  //2 
    //все работает но если проследить а сколько раз вызывается 
  //useEffect увидим что он вызывается не только при добавлении элемента
  // но и при изменении цвета. Причина такая же как и при примере о useMemo
  //поэтому используется hook useCallback который по сути делает тоже самое что и useMemo
  //useCallback принимает функцию коллбэк а вторым параметорм список зависимостей
  // в нашем случае мы зависим от count
  const generateItemsFromAPI = useCallback(()=>{
    return new Array(count).fill('').map((_, i)=> `Элемент ${i+1}`)
  }, [count])


  /* const generateItemsFromAPI = ()=>{

  //мы генериуем нужное кол-во нам элементов мы сгенируем новый массив нужной длины count
  //нам нужно проиницилизировать элементы для этого с помощью fill заполняем
  //чем то (пустыми строчками) и с помощью map трансформируем этот масси в новый массив
  //.map(i=> `Элемент ${i+1}`) но в map индекс идет вторым параметром поэтому 
  // поэтом ставим _ (это пустая строка) на месте первого параметра .map((_, i)=> `Элемент ${i+1}`)
  
  return new Array(count).fill('').map((_, i)=> `Элемент ${i+1}`)
} */



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

      <ItemsList getItems={generateItemsFromAPI}></ItemsList>

    </div>
  );
}

export default App;
