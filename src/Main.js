import React from "react";
/* import {useAlertToggle} from "./alert/AlertContext"; */
 import {useAlert} from "./alert/AlertContext"; 

export default function Main() {
  /* const toggle = useAlertToggle(); */
   const {toggle} = useAlert();
  return (
    <>
      <h1>Привет в примере с Context</h1>
      <button onClick={toggle} className="btn btn-success">
        Показать alert
      </button>
    </>
  );
}
