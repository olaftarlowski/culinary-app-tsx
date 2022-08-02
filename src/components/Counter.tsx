import React from "react";

interface CounterProps {
  text: string;
}

const Counter: React.FC<CounterProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default Counter;
