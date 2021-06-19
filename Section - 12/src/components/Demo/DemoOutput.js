import React from "react";
import Myparagraph from "./Myparagraph";

const DemoOutput = props => {
  return <Myparagraph>{props.show ? 'New paragraph' : ''}</Myparagraph>
};

export default React.memo(DemoOutput);