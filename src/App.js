import React, {useState} from "react";
import Main from "./Main";
import Alert from "./Alert";
//1 создаем контекст
export const AlertContext = React.createContext();

function App() {
  const [alert, setAlert] = useState(false);


  const toggleAlert = () =>setAlert(prey =>!prey)
  //2теперь все наше приложение я хочу обернуть в AlertContext, но это должен быть
  //AlertContext.Provider а не просто данный компонент потому что мы предоставляем сосотояние
  // в AlertContext.Provider мы должны передать состояние alert.
  //Теперь все компоненты которые внутри AlertContext.Provider могут обратиться к состоянию
  //value={alert}

  return (
    <AlertContext.Provider value={alert}>
      <div className={"container pt-3"}>
        <Alert></Alert>
        <Main toggle={toggleAlert}/>
      </div>
    </AlertContext.Provider>
  );
}

export default App;
