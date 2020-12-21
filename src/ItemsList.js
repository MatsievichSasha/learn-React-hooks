import React, { useState, useEffect } from "react"

export default function ItemsList({getItems}) {
  const [items, setItems] = useState([])
  //как только будет изменяться getItems мы будет заполнять наш массив
  // будем следить за изменениями с помощью  useEffect
  //все работает но если проследить а сколько раз вызывается 
  //useEffect увидим что он вызывается не только при добавлении элемента
  // но и при изменении цвета. Причина такая же как и при примере о useMemo
  //поэтому используется hook useCallback который по сути делает тоже самое что и useMemo
  useEffect(() => {
    const newItems = getItems()
    setItems(newItems)
    console.log('render')
  }, [getItems])

  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  )
}
