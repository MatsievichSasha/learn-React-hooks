import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
 const [type, setType] = useState('user')
 
/* useEffect(()=>{
  console.log('render')
}) */

useEffect(()=>{
  console.log('type change', type)
}, [type]) // useEffect принимает второй компонент который показыывает от чего должен зависеть useEffect будет вызываться только в том случаее если изменился type

  return (
    <div>
<h1>Ресурс: {type}</h1>
<button onClick={()=>setType('users')}>Пользователи</button>
<button onClick={()=>setType('Todo')}>Todo</button>
<button onClick={()=>setType('Посты')}>Посты</button>
    </div>
  );
}

export default App;
