import React, { useState, useContext } from "react";
//в этом способе мы также создаем контекст отдельно
/* export const AlertContext = React.createContext(); */
//мы не будем экспортировать export const AlertContext а будем возвращать результат работы
//сделаем метод приватным:

const AlertContext = React.createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

//у нас так и не виден toggle мы можем создать еще один контекст useAlertToggle а после замвернуть в него jsx:
const AlertToggleContext = React.createContext();

export const useAlertToggle = () => {
  return useContext(AlertToggleContext);
};

//и создадим внутренний компонет сразу экспортирую его в алерт провайдер
//далее что б мы могли оборачивать любой jsx в этот AlertContext.Provider
// мы введем параметр children и оборачиваем его <AlertContext.Provider value={}>{children}</AlertContext.Provider>

export const AlertProvider = ({ children }) => {
  // теперь у нас есть место где мы можем описывать изолированную логику относительно нашего алерт а непрмо в апп
  //логика:
  const [alert, setAlert] = useState(false);
  const toggle = () => setAlert((prey) => !prey);
  return (
    <AlertContext.Provider value={alert}>
      <AlertToggleContext.Provider value={toggle}>
        {children}
      </AlertToggleContext.Provider>
    </AlertContext.Provider>
  );
};
