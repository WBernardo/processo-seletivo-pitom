import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext"


const GlobalState = (props) => {

  const [value, setValue] = useState()

  const states = { value  }
  const setters = { setValue }

  const data = { states, setters }

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
