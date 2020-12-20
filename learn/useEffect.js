import React, { useState, useEffect } from "react";

function App() {
  const [type, setType] = useState('user')
 
 /* useEffect(()=>{
   console.log('render')
 }) */
   const [type, setType] = useState('users')
   const [data, setData] = useState([])
   const [pos, setPos] = useState({
     x:0,
     y:0
   }) 
   /* useEffect(()=>{
     console.log('render')
   }) */
 
   /* useEffect(()=>{
     console.log('type change', type)
   }, [type])  */// useEffect принимает второй компонент который показыывает от чего должен зависеть useEffect будет вызываться только в том случаее если изменился type
 
 
   useEffect(() => {
     fetch(`https://jsonplaceholder.typicode.com/${type}`)
       .then(response => response.json())
       .then(json => setData(json)) //когда прилетает новый json setData вызыввем с ним
 
       return ()=>{
         console.log('clean type') // пример очистки события, делать отписки и др см. ниже 
       }
 
     }, [type])
 
   const mouseMoveHanler = event =>{
     setPos({
       x:event.clientX,
       y:event.clientY
     })
   }
 
   useEffect(() => {
     console.log('ComponentDidMount')
     window.addEventListener('mousemove', /* event =>{
       setPos({
         x:event.clientX,
         y:event.clientY
       })
     } */ mouseMoveHanler) // для очистки события можно сделатть очистку 
 
     return () => {
       window.removeEventListener('mousemove', mouseMoveHanler) //сейчас не работает так как нужно написать другую логику, вызывается тогда когда компонент будет удаляться, см пример  выше
     }
   }, [])
 
 
 
 useEffect(()=>{
   console.log('type change', type)
 }, [type]) // useEffect принимает второй компонент который показыывает от чего должен зависеть useEffect будет вызываться только в том случаее если изменился type
 
   return (
     <div>
 <h1>Ресурс: {type}</h1>
 <button onClick={()=>setType('users')}>Пользователи</button>
 <button onClick={()=>setType('Todo')}>Todo</button>
 <button onClick={()=>setType('Посты')}>Посты</button>
       <h1>Ресурс: {type}</h1>
       <button onClick={() => setType('users')}>Пользователи</button>
       <button onClick={() => setType('todos')}>Todo</button>
       <button onClick={() => setType('posts')}>Посты</button>
       {/* <pre>{JSON.stringify(data, null,2)}</pre> */} {/* выводим прилетевший json */}
       <pre>{JSON.stringify(pos, null,2)}</pre>  {/* следит за положением мыши */}
     </div>
   );
 }