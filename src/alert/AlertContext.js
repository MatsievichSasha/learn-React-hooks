import React, { useContext, useReducer } from "react";
//useReduser позволяет работать со стейтом как и useState только через Reduser
//когда мы с помощью сторонней функциименяем состояние и это состояние меняется в компоненте
//
const AlertContext = React.createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

//константы:

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'



//правила редюсера таковы что эта функция не имеет никаких сайд эфектов она принмает в себя первым
//параметром state и вторым параметром action делаем свитч кейс по action.type и всегда по
//default если ни один кейс не сработал возвращаем сам state

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, visible: true, text: action.text }; //мы возвращаем старый стейт но при этом у него должен быть visiblet:true
    case HIDE_ALERT:
      return { ...state, visible: false };
    default:
      return state;
  }
};
export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: ''
  }); // данный хук принимает первым параметром сам редюсер. то есть это хук который нанеобходимо создать, вторым параметромпередаем какое то начальное значениенашего state  обычнр это объект
  //useReducer возвращает ам по сути тоже самое что и useState где первый эл -т массива это state, а второй
  //фун-я dispatch с помощью которых мы сможем изменять состояние state

  //сформируем две фукнкциикоторые позволяют точечно взаимодействовать со state (вместо toggle)
  //функция show позволяющая показывать на алерт, что бы изменить state мы должны воспользоваться функцией dispatch
  // в которую мы передаем объект и это правило в которой мы указываем type
  // и эти функции так же необходимо экспортировать в провайдере
  //!!!Прелесть заключается в том что мы теперь можем контролировать текст в этом алерте
  //передав в show параметр text 
  
  const show = text => dispatch({ type: SHOW_ALERT, text });
  const hide = () => dispatch({ type: HIDE_ALERT }); //эти вещи можно перенести в константы что бы уменьшить риск ошибки
  
  return (
    <AlertContext.Provider
      value={{
        visible: state.visible,
        text:state.text,
        show, hide,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
