import React, { useEffect, useState } from "react";

//последнее чтомы сделаем это потренируемся создавать свои хуки

//2/ создадим хук который будет следить за какой то перемнной. хуки создаются с префикса use
//фишкой является то что мы испльзуем те же самые реакт хуки толь уже не внутри реакт компонентов

function useLogger(value) {
  useEffect(() => {
    console.log("Value changed", value); //при каждом вводе мы получаем логгер удобно что б дебажить
  }, [value]);
}

/* const onChange = (event) => {
  setValue;
}; */

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };
  //можем усложнить у возвращать еще функцию clear которая очищает этот инпут
  // для того что бы ее экспортировать
  const clear = () => setValue("");

  return {
    bind: {
      value,
      onChange,
    },
    value,
    clear
  };
  /*   return {
    value,
    onChange,
  }; */
}

function App() {
  /*  const [name, setName] = useState(""); */

  // вот пример но два инпута поля заполняются но все можно улучшить:

  /*   const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const changeHandler = (event) => {
    setName(event.target.value);
  };

  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div className={"container pt-3"}>
      <input type="text" value={name} onChange={changeHandler}></input>
      <input type="text" value={lastName} onChange={lastNameHandler}></input>
      <hr></hr>
      <h1>
        {name} {lastName}
      </h1>
    </div>
  ); */
  /*   const changeHandler = (event) => {
    setName(event.target.value);
  };
 */

  const input = useInput(""); // теперь инпут этот объект использует хук useInput у которого значние {value,onChange}
  const LastNameinput = useInput(""); // теперь инпут этот объект использует хук useInput у которого значние {value,onChange}
  useLogger(input.value);

  return (
    <div className={"container pt-3"}>
      <input
        type="text"
        /* value={input.value} onChange={input.onChange} */ {...input.bind} // это делается для того что бы jsx не получал лишних свойств
      ></input>
      <input
        type="text"
        /* value={input.value} onChange={input.onChange} */ {...LastNameinput.bind}
      ></input>
      <button className="btn btn-warning" onClick={()=>input.clear()}> Очистить</button>
      <hr></hr>
      <h1>
        {input.value} {LastNameinput.value}
      </h1>
    </div>
  );
}

export default App;
