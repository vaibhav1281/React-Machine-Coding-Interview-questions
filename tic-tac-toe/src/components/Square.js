import React from "react";

const Square = ({value, onClickSquare}) => {

    
    
  return (
    <button className="square" onClick={onClickSquare}>{value}</button>
  );
};

export default Square;
