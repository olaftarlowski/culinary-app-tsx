import React, { useRef, useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  someText: string;
  ok: boolean;
  num: number;
  somePerson: Person;
  newFnc: () => void;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

interface TextNode {
  text: string;
}

const TextField: React.FC<Props> = ({
  newFnc,
  num,
  ok,
  somePerson,
  someText,
  handleChange,
}) => {
  const [count, setCount] = useState<TextNode>({ text: "stary" });
  const inputRef = useRef<HTMLInputElement>(null);

  const btnFnc = () => {
    newFnc();
    setCount({ text: "nowy" });
  };

  return (
    <div style={{ border: "2px solid red" }}>
      TextField
      <button onClick={btnFnc}>TEXTFIELD FNC</button>
      {ok && (
        <div>
          {num} a count: {count.text}
        </div>
      )}
      <p>
        {somePerson.firstName} oraz {somePerson.lastName}
      </p>
      <div>{someText}</div>
      <div>INPUT VALUE = {inputRef.current?.value}</div>
      <input type="text" ref={inputRef} onChange={handleChange} />
    </div>
  );
};

export default TextField;
