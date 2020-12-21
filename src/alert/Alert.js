import React, { useContext } from "react";
import {useAlert} from './AlertContext'

export default function Alert() {
  // для того что бы получить состоние необхдимо обернуть <AlertContext.Consumer>
  //но теперь это сделать еще проще с помощью useContextб вызываем чук useContext и в него
  //необходимо передать тот контекст которого мы хотим получить состояние
  // для этоо небходимо в его экспортировать в родительском файле 'export const AlertContext = React.createContext()'

  /* const alert = useContext(AlertContext); */
  const alert =useAlert();

  if(!alert) return null // если не алерт т.е false мі возвращаем null и ничего не рендерим
  
  return <div className={"alert alert-danger"}>Это очень важное сообщение</div>;
}
