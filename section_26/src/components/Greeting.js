import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changedTextHandler = () => {
    setChangedText(prev => !prev);
  };

  return (<div>
    <h2>Hello World!</h2>
    {!changedText && <Output>blablabla</Output>}
    {changedText && <Output>change</Output>}
    <button onClick={changedTextHandler}>Change Text</button>
  </div>)
};

export default Greeting;